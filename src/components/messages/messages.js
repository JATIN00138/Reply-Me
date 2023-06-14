import "./message.css";


function Message(props) {
    let Reply = function (props) {
        if (props.reply == "" || props.reply == undefined) {
            return (<></>);        
        }
        return (
            <div className="ReplaiedMsg" >{props.reply}</div>
        );
    };
    
    return ( 
        <>
            <Reply reply= {props.reply}/>
            <div className="textMsg px-4">This is the IN message!.....</div>
        </>
    );
}

function MessageIN(props) {
    let FirstSpan = function (props) {
        if (props.isFirst) {
            return (
                <>
                    <span>
                        <svg className="svgIN" viewBox="0 0 8 13" height="13" width="8" version="1.1" x="0px" y="0px">
                            <path d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path>
                        </svg>
                    </span>
                    <div className="Message MessageIN" style={{ borderTopLeftRadius: "0px" }}>
                        <div className="name px-4">Jatin Sharma</div>
                        <Message />
                        <div className="time">{props.time}</div>
                    </div>
                </>
            );
        }
        return (
            <>
                <div className="Message MessageIN" style={{ marginLeft: "8px" }}>
                    <div className="name px-4">Jatin Sharma</div>
                    <Message />
                    <div className="time">{props.time}</div>
                </div>
            </>
        );
    };
    
    return (
        <div className="Row RowIN">
            <FirstSpan isFirst={props.isFirst} />
        </div>
    );
}

function MessageOUT(props) {
    let FirstSpan = function (props) {
        if (props.isFirst) {
            return (
                <>
                    <div className="Message MessageOUT" style={{ borderTopRightRadius: "0px" }}>
                        <Message reply={props.reply} />
                        <div>date</div>
                        <div>Seen</div>
                    </div>
                    <span>
                        <svg className="svgOUT" viewBox="0 0 8 13" height="13" width="8" version="1.1" x="0px" y="0px">
                            <path d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path>
                        </svg>
                    </span>
                </>
            );
        }
        return (
            <>
                <div className="Message MessageOUT" style={{ marginRight: "8px" }}>
                    <Message reply={props.reply} />
                    <div>date</div>
                    <div>Seen</div>
                </div>
            </>
        );
    };

    return (
        <div className="Row RowOUT">
            <FirstSpan isFirst={props.isFirst} />
        </div>
    );
}

function MessageINFO({text}) {
    return (
        <div className="Row RowINFO">
            <div className="Message MessageINFO">
                {text}
            </div>
        </div>
    );
}


export { MessageIN, MessageINFO, MessageOUT };