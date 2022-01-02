import loading_icon from "./img/loading.gif";
import "./Loading.scss";

function Loading() {
    return (
        <div className="loading">
            <img src={loading_icon} alt="loading gif" />
        </div>
    );
}

export default Loading;