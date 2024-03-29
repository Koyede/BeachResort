import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
state = {
    services: [
        {
            icon:<FaCocktail />,
            title: "free cocktails",
            info: "The best wine giving you the best satisfaction"
        },
        {
            icon:<FaHiking />,
            title: "Endless Hiking",
            info: "Have an amazing adventure from the maintain tops, and hike your way to a memorious time"
        },
        {
            icon:<FaShuttleVan />,
            title: "free shuttle",
            info: "Transportation made easier enjoy free shuttle to any destination of your choice"
        },
        {
            icon:<FaBeer />,
            title: "Strongest Beer",
            info: "Enjoy the strongest of beer and get the very best feeling from every taste."
        },
    ]
}

    render() {
        return (
            <section className="services">
            <Title title="services" />
            <div className="services-center">
                {this.state.services.map((item,index) => {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
            </section>
                      
        )
    }
}
