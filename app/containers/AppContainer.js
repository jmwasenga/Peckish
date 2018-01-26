import React, { Component } from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';

class AppContainer extends Component {
   /*
    constructor(props) {
        
        super(props);
        
        this method cann be delete since we already connected to redux global state 
        this.state = {recipeCount: 0 }
        }

        */
    
  /*
     Also this can be deleted for the above stated reasons
    incrementRecipeCount() {
        this.setState({recipeCount: this.state.recipeCount+1});
    }
   */
    addRecipe() {
        this.props.addRecipe();
    }
     render() {
         return (
             <View>
                <Text style={{marginTop: 20}}>
                    I am AppContainer! Recipe Count: {this.props.recipeCount}
                </Text>
                <TouchableHighlight onPress={() => {this.addRecipe()}}>
                   <Text>Add recipe</Text>
                </TouchableHighlight>    
             </View>    
         );
     }
}


function mapDispacthToProps(dispatch) {  //a func responsible sending actions to entire application.
    return bindActionCreators(ActionCreators, dispatch);
}

/*
export default connect(() => { return {} }, mapDispacthToProps)(AppContainer);
*/

// Bello is another way of doing the connection to state and action of redux.

export default connect((state) => {
     return {
         recipeCount: state.recipeCount // here state from redux is connected to our component
     }
     },
      mapDispacthToProps)(AppContainer); // here actions are connected to our component from redux.