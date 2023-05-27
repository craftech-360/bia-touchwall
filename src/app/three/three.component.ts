import { Component } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent {
  numb = 1
  isShow:boolean | undefined
  showFirst=true
  showSecond=false
  gridOne = true
  gridTwo = false
  gridThree= false
  count=0
  counter=0
  
  goToBig(e:any){
    console.log('cliked');
    this.numb = e
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
    if(this.numb > 7){
      this.numb = 1
    }
  }
  goPrevious(){
    this.numb--
    if(this.numb <= 0){
      this.numb = 7
    }
    
  }
  show(){
    console.log('here');
    this.isShow = true
    this.showSecond = false
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
      this.gridOne = false
      this.gridTwo = true
    }
    if( this.count == 2){
      this.count = 0
      this.gridOne = true
      this.gridTwo = false
    }
  }
  goToNextGrid(){
    this.counter++
    if( this.counter == 1){
      this.gridOne = false
      this.gridTwo = true
    }
    if( this.counter == 2){
      this.counter = 0
      this.gridOne = true
      this.gridTwo = false
    }
  }
}
