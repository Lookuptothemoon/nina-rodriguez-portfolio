import { useEffect, useState } from "react";
import Loading from "./Loading";
import "./Work.scss";

function Work() {
    // get directory where images are located
    const importAllFrom = (dir) => {
        return dir.keys().map(dir);
    }
    const workImgs = importAllFrom(require.context('./img/work', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className="work">
            {workImgs.map((img, idx) =>
                <img key={idx} src={img} alt="work" loading="lazy" />
            )}
        </div>
    );
}

export default Work;