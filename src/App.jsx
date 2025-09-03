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
                const votes = prev.votes.map((v, i) =>
                    i === idx ? { ...v, count: v.count + 1 } : v
                );
                return { votes };
            },
            () => {
                localStorage.setItem(LS_KEY, JSON.stringify(this.state.votes));
            }
        );
    };

    showResults = () => {
        const { votes } = this.state;
        const max = Math.max(...votes.map((v) => v.count));
        const winnerIdx = votes.findIndex((v) => v.count === max);
        this.setState({ winnerIdx });
    };

    clearResults = () => {
        const reset = EMOJIS.map((e) => ({ emoji: e, count: 0 }));
        this.setState({ votes: reset, winnerIdx: null }, () => {
            localStorage.removeItem(LS_KEY);
        });
    };

    totalVotes() {
        return this.state.votes.reduce((s, v) => s + v.count, 0);
    }

    render() {
        const { votes, winnerIdx } = this.state;
        const winner = winnerIdx !== null ? votes[winnerIdx] : null;

        return (
            <div className="page">
                <h1 className="title">Голосування за найкращий смайлик</h1>

                <div className="row">
                    {votes.map((v, idx) => (
                        <div key={idx} className="emojiCol">
                            <button
                                type="button"
                                onClick={() => this.handleVote(idx)}
                                className="emojiBtn"
                                aria-label={`Голосувати за ${v.emoji}`}
                                title="Натисни, щоб проголосувати"
                            >
                                <span className="emoji">{v.emoji}</span>
                            </button>
                            <div className="count">{v.count}</div>
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

                <div style={{ marginTop: 32 }}>
                    <h2 className="subtitle">Результати голосування:</h2>
                    {winner ? (
                        <div style={{ textAlign: "center", marginTop: 12 }}>
                            <div className="label">Переможець:</div>
                            <div style={{ fontSize: 72, lineHeight: 1 }}>{winner.emoji}</div>
                            <div className="smallNote">Кількість голосів: {winner.count}</div>
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

export default App;
