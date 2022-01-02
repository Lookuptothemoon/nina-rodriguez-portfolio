import { useEffect, useState } from "react";
import Loading from "./Loading";
import "./Work.scss";

function Work() {
    // get directory where images are located
    const importAllFrom = (dir) => {
        return dir.keys().map(dir);
    }

    // determine if page is loading or not
    const onPageLoad = () => {
        window.onload = (e) => {
            setLoading(false);
        }
    }

    const [loading, setLoading] = useState(true);
    const workImgs = importAllFrom(require.context('./img/work', false, /\.(png|jpe?g|svg)$/));

    useEffect(() => {
        setLoading(true);
        onPageLoad();
    }, []);

    return (
        <>
        {loading === true ? (
            <Loading />
        ):(
            <div className="work">
                {workImgs.map((img, idx) =>
                    <img key={idx} src={img.default} alt="work" loading="lazy" />
                )}
            </div>
        )}
        </>
    );
}

export default Work;