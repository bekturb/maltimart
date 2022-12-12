import React, {useState, useEffect} from 'react';
import '@styles/clock.scss'
import {useTranslation} from "react-i18next";

const Clock = () => {

    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    const {t} = useTranslation();

    let interval;

    const countDown = ()=>{
        const destination = new Date("November 10, 2022")
        interval = setInterval(() => {
            const now = new Date().getTime()
            const different = destination - now
            const days = Math.floor(different / (1000 * 60 * 60 * 24))

            const hours = Math.floor(different % (1000 * 60 * 60 * 24) /
                (1000 * 60 * 60))

            const minutes = Math.floor(different % (1000 * 60 * 60) /
                (1000 * 60))

            const seconds = Math.floor(different % (1000 * 60) / 1000)

            if (destination < 0)clearInterval(interval.current)
            else {
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        })
    }

    useEffect(() => {
        countDown()
    }, [])

    return (
        <div className="clock__wrapper">
            <div className="clock__data">
                <div className="clock__items">
                    <h1 className="clock__number">{days}</h1>
                    <h5 className="clock__day">{t("days.1")}</h5>
                </div>
                <span className="clock__dots">:</span>
            </div>
            <div className="clock__data">
                <div className="clock__items">
                    <h1 className="clock__number">{hours}</h1>
                    <h5 className="clock__day">{t("hours.1")}</h5>
                </div>
                <span className="clock__dots">:</span>
            </div>
            <div className="clock__data">
                <div className="clock__items">
                    <h1 className="clock__number">{minutes}</h1>
                    <h5 className="clock__day">{t("minutes.1")}</h5>
                </div>
                <span className="clock__dots">:</span>
            </div>
            <div className="clock__data">
                <div className="clock__items">
                    <h1 className="clock__number">{seconds}</h1>
                    <h5 className="clock__day">{t("seconds.1")}</h5>
                </div>
            </div>
        </div>
    );
};

export default Clock;