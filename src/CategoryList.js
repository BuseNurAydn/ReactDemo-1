import React, { Component } from 'react';
//google dan eklediğimiz listeyi import etmek için
import {ListGroup,ListGroupItem} from 'reactstrap';

export default class CategoryList extends Component {
    //PROPS KULLANIMI
   // constructor(props){
    //    super(props);
        //STATE KULLANIMI
        //this.state
    state = {
          categories : [
            {categoryId : 1 , categoryName : "Apple"},
            {categoryId : 2 , categoryName : "Orange"}
          ],
          //mevcut kategori
          currentCategory : "" 
    };
    // eror fonk. , React ile çalışılırken eror fonk. ile çalışılır
    // fonk. aslında bir değişkendir
    changeCategory = (category)=>{
        this.setState({currentCategory : category.categoryName})
    }
    render() {
        return (

            <div>
                <h3>{this.props.info.title} </h3>
        
                <ListGroup>
                    {
                      this.state.categories.map(category=>(
                        <ListGroupItem
                         onclick={()=>this.changeCategory(category)}  key={category.categoryId}> 
                         {category.categoryName} 
                         </ListGroupItem>
                      ))
                    }
                    
                </ListGroup>
                <h4>{this.state.currentCategory}</h4>
            </div>

        )
    }
}
