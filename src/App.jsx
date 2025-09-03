import React from "react";
import "./App.css";

// Смайлы и ключ для localStorage
const EMOJIS = ["😃", "😊", "😎", "🤩", "😍"];
const LS_KEY = "emoji-votes-v1";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: EMOJIS.map((e) => ({ emoji: e, count: 0 })),
            winnerIdx: null, // индекс победителя (или null)
        };
    }

    componentDidMount() {
        try {
            const saved = JSON.parse(localStorage.getItem(LS_KEY));
            if (Array.isArray(saved) && saved.length === EMOJIS.length) {
                this.setState({ votes: saved });
            }
        } catch (_) { }
    }

    handleVote = (idx) => {
        this.setState(
            (prev) => {
                const updatedVotes = prev.votes.map((voteItem, index) => {
                    if (index === idx) {
                        return { ...voteItem, count: voteItem.count + 1 };
                    } else {
                        return voteItem;
                    }
                });
                // вернуть новый state
                return { votes: updatedVotes };
            },
            () => {
                localStorage.setItem(LS_KEY, JSON.stringify(this.state.votes));
            }
        );
    };

    showResults = () => {
        // достаём массив голосов из state
        const votesArray = this.state.votes;

        // берём все значения count (количество голосов) и ищем максимум
        const maxCount = Math.max(...votesArray.map((voteItem) => voteItem.count));

        // ищем индекс первого элемента, у которого count равен максимуму
        const winnerIndex = votesArray.findIndex(
            (voteItem) => voteItem.count === maxCount
        );

        // сохраняем индекс победителя в state
        this.setState({ winnerIdx: winnerIndex });
    };

    clearResults = () => {
        const reset = EMOJIS.map((e) => ({ emoji: e, count: 0 }));
        this.setState({ votes: reset, winnerIdx: null }, () => {
            localStorage.removeItem(LS_KEY);
        });
    };

    totalVotes() {
        return this.state.votes.reduce((sum, voteItem) => {
            return sum + voteItem.count;
        }, 0);
    }

    render() {
        const { votes, winnerIdx } = this.state;
        const winnerEmojiObject = winnerIdx !== null ? votes[winnerIdx] : null;

        return (
            <div className="page">
                <h1 className="title">Голосування за найкращий смайлик</h1>

                <div className="row">
                    {votes.map((voteItem, voteIndex) => (
                        <div key={voteIndex} className="emojiCol">
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
                    <button
                        type="button"
                        onClick={this.showResults}
                        className="primary"
                    >
                        Show Results
                    </button>
                    <button
                        type="button"
                        onClick={this.clearResults}
                        className="danger"
                    >
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
                            <div className="smallNote">
                                Всього голосів: {this.totalVotes()}
                            </div>
                        </div>
                    ) : (
                        <div className="smallNote">Натисніть «Show Results»</div>
                    )}
                </div>
            </div>
        );
    }

}
export default App;
