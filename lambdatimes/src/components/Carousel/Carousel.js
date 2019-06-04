import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
carouselData:[],
contentIndex: 0

    };
  }


  componentDidMount(){
this.setState({ carouselData: carouselData})
  }

  



  leftClick = () => {
    

    if (this.state.contentIndex -1 < 0) {

    this.setState ({contentIndex:this.state.carouselData-1})

  } else {

    this.setState({contentIndex: this.state.contentIndex-1})

      // this.state.carouselData[this.contentIndex].style.display = 'none'

      // this.contentIndex -=1;
      // this.state.carouselData[this.contentIndex].style.display = 'block';

  }
}




  rightClick = () => {
  

    if (this.contentIndex + 1 > this.state.carouselData.length - 1  ){


      this.setState({contentIndex:0})
  //     this.contentIndex = this.state.carouselData.length;
  //     this.state.carouselData[this.contentIndex ].style.display = 'none';

  //     this.contentIndex  += 1;
  // this.state.carouselData[this.contentIndex].style.display = 'block';
  // this.rightButton.classList.add('right-button');
  // this.rightButton.textContent = '>';
  
  //  document.getElementsByClassName('container carousel')
  // 
  }else {

    this.setState({contentIndex: this.state.contentIndex + 1})
    // this.state.carouselData[this.contentIndex ].style.display = 'none';
    // this.contentIndex - 1;
    // this.state.carouselData[this.contentIndex].style.display = 'block';

  }
  }

  selectedImage = () => {
    return <img src={this.state.carouselData[this.state.contentIndex]} style={{display: 'block'}} alt="pictures"/>
  }
  
  render(){
    return (
      <div className="carousel" onClick={()=> this.selectedImage()}>
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
       <section>{this.selectedImage()}</section> 
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
