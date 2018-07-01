import React from 'react';
import './spiner.css';

export default function Spiner() {
    return (
        <div className="spiner">
            <div className="spiner-container">
                <div className="spiner-block top" />
                <div className="spiner-block left" />
                <div className="spiner-block center" />
                <div className="spiner-block right" />
                <div className="spiner-block bottom" />
            </div>
        </div>
    )
}