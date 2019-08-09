import React, {Component} from "react";

class GenerateQuote extends Component {
    render() {
        const {selectQuote} = this.props;
        return (
            <div className="GenerateQuote">
                <button type="button" onClick={selectQuote}>Get quote</button>
            </div>
        );
    }
}

export default GenerateQuote;