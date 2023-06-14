import "./frnd-container.css";
import photo from "../../images/profile-photo.png";

function FrndContainer() {
    return (
        <div className="Frnd-Container">
            <PhotoContainer />
            <div className="Data-Container">
                <div className="Data">
                    <NameContainer />
                    <BadgeContainer />
                </div>
            </div>
        </div>
    );
}

function PhotoContainer() {
    return (
        <div className="Photo-Container">
            <div className="Photo">
                <img className="Avatar" src={photo} />
            </div>
        </div>
    );
}

function NameContainer() {
    return (
        <div className="Name-Container">
            <div className="Display-Name">
                Friend Name
            </div>
            <div className="Date-Container">04/03/2023</div>
        </div>
    );
}

function BadgeContainer() {
    return (
        <div className="Badge-Container">
            <div className="Status">
                Online
            </div>
            <div className="Notif-Container">12</div>
        </div>
    );
}

export default FrndContainer;
