import React from "react";
import "./App.css";

// Смайлы и ключ для localStorage
const EMOJIS = ["😃", "😊", "😎", "🤩", "😍"];
const LS_KEY = "emoji-votes-v1";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        const makeDefault = () => EMOJIS.map((e) => ({ emoji: e, count: 0 }));
        let votes = makeDefault();

        // 👉 Читаем localStorage синхронно в конструкторе (как просил препод)
        try {
            if (typeof window !== "undefined" && window.localStorage) {
                const raw = window.localStorage.getItem(LS_KEY);
                if (raw) {
                    const saved = JSON.parse(raw);
                    const isValid =
                        Array.isArray(saved) &&
                        saved.length === EMOJIS.length &&
                        saved.every(
                            (it, i) =>
                                it &&
                                typeof it.emoji === "string" &&
                                it.emoji === EMOJIS[i] &&
                                Number.isFinite(it.count) &&
                                it.count >= 0
                        );
                    if (isValid) votes = saved;
                }
            }
        } catch {
            // если парсинг/доступ упали — оставляем дефолт
        }

        this.state = {
            votes,
            winnerIdx: null, // индекс победителя (или null)
        };
    }

    // componentDidMount НЕ нужен — всё уже инициализировано в конструкторе

    handleVote = (idx) => {
        this.setState(
            (prev) => {
                const updatedVotes = prev.votes.map((v, i) =>
                    i === idx ? { ...v, count: v.count + 1 } : v
                );
                return { votes: updatedVotes };
            },
            () => {
                try {
                    window.localStorage?.setItem(LS_KEY, JSON.stringify(this.state.votes));
                } catch {
                    // игнор — просто не сохранили
                }
            }
        );
    };

    showResults = () => {
        const { votes } = this.state;
        const total = votes.reduce((s, v) => s + v.count, 0);
        if (total === 0) return this.setState({ winnerIdx: null }); // нет голосов — нет победителя

        const maxCount = Math.max(...votes.map((v) => v.count));
        const winnerIndex = votes.findIndex((v) => v.count === maxCount);
        this.setState({ winnerIdx: winnerIndex });
    };

    clearResults = () => {
        const reset = EMOJIS.map((e) => ({ emoji: e, count: 0 }));
        this.setState({ votes: reset, winnerIdx: null }, () => {
            try {
                window.localStorage?.removeItem(LS_KEY);
            } catch { }
        });
    };

    totalVotes() {
        return this.state.votes.reduce((sum, v) => sum + v.count, 0);
    }

    render() {
        const { votes, winnerIdx } = this.state;
        const winnerEmojiObject = winnerIdx !== null ? votes[winnerIdx] : null;

        return (
            <div className="page">
                <h1 className="title">Голосування за найкращий смайлик</h1>

                <div className="row">
                    {votes.map((voteItem, voteIndex) => (
                        <div key={voteItem.emoji} className="emojiCol">
                            <button
                                type="button"
                                onClick={() => this.handleVote(voteIndex)}
                                className="emojiBtn"
                                aria-label={`Голосувати за ${voteItem.emoji}`}
                                title="Натисни, щоб проголосувати"
                            >
                                <span className="emoji">{voteItem.emoji}</span>
                            </button>
                            <div className="count">{voteItem.count}</div>
                        </div>
                    ))}
                </div>

                <div className="actions">
                    <button type="button" onClick={this.showResults} className="primary">
                        Show Results
                    </button>
                    <button type="button" onClick={this.clearResults} className="danger">
                        Очистити результати
                    </button>
                </div>

                <div className="results">
                    <h2 className="subtitle">Результати голосування:</h2>
                    {winnerEmojiObject ? (
                        <div className="resultsInner">
                            <div className="label">Переможець:</div>
                            <div className="winnerEmoji">{winnerEmojiObject.emoji}</div>
                            <div className="smallNote">
                                Кількість голосів: {winnerEmojiObject.count}
                            </div>
                            <div className="smallNote">Всього голосів: {this.totalVotes()}</div>
                        </div>
                    ) : (
                        <div className="smallNote">Натисніть «Show Results»</div>
                    )}
                </div>
            </div>
        );
    }
}
