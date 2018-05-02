import React, { Component } from 'react';
import '../css/App.css';



class AppView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tiles: this.props.tiles,
        };
        this.showTiles = this.showTiles.bind(this);
        this.defineRatio = this.defineRatio.bind(this);
        this.defineOpen = this.defineOpen.bind(this);
    }
    componentDidMount(){
        this.defineOpen();
        this.defineRatio();
        
    }
    componentWillMount(){
        
    }
    defineRatio(){
        var imgClass;
        let tile = document.querySelectorAll('img');
        tile.forEach((value) => {
            var imgSrc, imgW, imgH;
            function defineImage(imgSrc){
                var img = new Image();
                img.src = imgSrc;
                img.onload = function() {   
                    return {
                        src:imgSrc,
                        width:this.width,
                        height:this.height};
                    };
                return img;
            }
            var x = defineImage(value.src);
            x.addEventListener('load',function(){
                imgSrc = x.src;
                imgW = x.width;
                imgH = x.height;
                console.log(value.src, imgW, imgH);
                var imgClass = (imgW / imgH > 1) ? 'wide' : 'tall';
                value.classList += imgClass;
            });
        });
    }
    defineOpen(){
        // var imgBoxs = document.querySelectorAll('.tile-box');
        // var tileState;
        // this.state.tiles.map((value) => {
        //     tileState = value.opened ? '' : 'black';
        // });
        // imgBoxs.forEach((box, index) => {
        //     box.style.backgroundColor = tileState; 
        // });
    }
    showTiles(){
        const boxElems = this.state.tiles.map((value, index) => {
            var styles = {background: 'black'};
            var tileState = value.opened ? '' : styles;
            var imgState = value.opened ? 'opened ' : 'closed ';
            var elem = <img key={index} src={value.src} alt="" className={imgState} onClick={this.props.toggle}/>;
            var boxElem = <div style={tileState} className="tile-box "  key={index}>{elem}</div>;
            return boxElem;
        });
        return boxElems;
    }
    render(){
        var tiles = this.showTiles();
        return (
            <div className="tiles-box">
                <div className="tiles">
                    {tiles}
                </div>
            </div>
        );
    }
}

export default AppView;