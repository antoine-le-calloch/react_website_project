import {useEffect, useState} from "react";
import parse from "html-react-parser";
import Title from "../components/generic/Title";
import '../styles/pages/Certifications.css';

const Certifications = () => {
    const [certifications, setCertifications] = useState(null);
    useEffect(() => {
        fetch('/protected_assets/data/certifications.json')
            .then(response => response.json())
            .then(data => setCertifications(data))
    }, []);

    console.log(certifications);

    return certifications && (
        <div className="certifications">
            <div>
                <Title title={certifications.title}
                       subtitle={certifications.subtitle}/>
            </div>
            <div className="certifications-list">
                {(certifications.items).map((item) => {
                    return (
                        <div key={item.title} className="certification">
                            <div className="image" data-aos="fade-right">
                                <a href={item.link} target="_blank" rel="noreferrer">
                                    <img src={"/protected_assets/images/" + item.image} alt={item.image}/>
                                </a>
                            </div>
                            <div className="text" data-aos="fade-left">
                                <a href={item.link} target="_blank" rel="noreferrer">
                                    {item.title}
                                </a>
                                <div>{parse(item.description)}</div>
                                <em>{item.date}</em><br/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Certifications;
