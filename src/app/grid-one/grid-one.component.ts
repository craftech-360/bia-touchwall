import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-one',
  templateUrl: './grid-one.component.html',
  styleUrls: ['./grid-one.component.css']
})
export class GridOneComponent {
  numb = 1
  isShow=false
  showFirst=true
  showSecond=false
  gridOne = true
  gridTwo = false
  gridThree= false
  gridFour= false
  count=0
  counter=0
  
  goToBig(e:any){
    this.numb= e
    console.log('cliked',e);
    this.showFirst = false
    this.showSecond = true
  }

  sendId(e:any){
    console.log(e);
    this.numb = e
  }
  goNext(){
    this.numb++
    console.log(this.numb);
    if(this.numb > 48){
      this.numb = 1
    }
  }
  goPrevious(){
    this.numb--
    if(this.numb <= 0){
      this.numb = 48
    }
    
  }
  show(){
    console.log('here');
    this.isShow = true
    this.showSecond = true
  }
  goBack(){
    console.log('back');
    this.showFirst = true
    this.showSecond = false
  }
  backToMain(){
    this.showSecond = false
    this.showFirst = true
  }
  backToAlbum(){
    this.isShow = false
    this.showSecond = true
  }

  //for grid 
  goToBackGrid(){
    this.count++
    if( this.count == 1){
      this.gridFour = false
      this.gridThree = false
      this.gridOne = false
      this.gridTwo = true
    }
    if( this.count == 2){
      this.gridFour = false
      this.gridThree = true
      this.gridOne = false
      this.gridTwo = false
    }
    if( this.count == 3){
      this.gridFour = true
      this.gridThree = false
      this.gridOne = false 
      this.gridTwo = false
    }
    if(this.count > 3){
      this.count = 0
      this.gridFour = false
      this.gridThree = false
      this.gridOne = true
      this.gridTwo = false
    }
  }
  goToNextGrid(){
    this.counter++
    if( this.counter == 1){
      this.gridFour = false
      this.gridThree = false
      this.gridOne = false
      this.gridTwo = true
    }
    if( this.counter == 2){
      this.gridFour = false
      this.gridThree = true
      this.gridOne = false
      this.gridTwo = false
    }
    if( this.counter == 3){
      this.gridFour = true
      this.gridThree = false
      this.gridOne = false 
      this.gridTwo = false
    }
    if(this.counter > 3){
      this.counter = 0
      this.gridFour = false
      this.gridThree = false
      this.gridOne = true
      this.gridTwo = false
    }
  }

}
