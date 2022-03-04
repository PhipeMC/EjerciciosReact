function Avatar(props) {
    return (
        <img className="card-img-top"
            src={props.user.avatarUrl}
            alt={props.user.name}
            width={"64px"}
            height={"128px"}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="card-body ">
            <Avatar user={props.user}/>
            <h5 className="card-title text-center">{props.user.name}</h5>
            
        </div>
    );
}

function Comment(props) {
    return (
        <div className="d-inline-flex p-2 bd-highlight">
            <div className="card">
                <UserInfo user={props.author} />
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    );
}
export default Comment;