import React, { Component } from 'react';
import Card from './Card';
import svg1 from '../../shared/images/svg1.svg';
import svg2 from '../../shared/images/svg2.svg';
import svg3 from '../../shared/images/svg3.svg';
import './Cards-style.css';

const Cards = props => {
    const data1 = "Chance to get free books";
    const data2 = "Top rated courses for lucky five";
    const data3 = "Win free Test Series to boost your score";
    const link1 = "hhttps://gleam.io/dYoa4/books-giveaway";
    const link2 = "https://www.udemy.com/course/python-data-science-master-course";
    const link3 = "https://gleam.io/dYoa4/books-giveaway";

    return (
        <div className="container-fluid d-flex justify-content-center cls-flex">
            <div className="row row1">
                <h1>GIVEAWAYS!</h1>
            </div>
            <div className="row row2">
                <div className="col-md-4">
                    <Card imgsrc={svg2} title="Books" data={data1} link={link1} />
                </div>
                <div className="col-md-4">
                    <Card imgsrc={svg1} title="Courses" data={data2} link={link2} />
                </div>
                <div className="col-md-4">
                    <Card imgsrc={svg3} title="Test Series" data={data3} link={link3} />
                </div>
            </div>
        </div>
    );
}

export default Cards;