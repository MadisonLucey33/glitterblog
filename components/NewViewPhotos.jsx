import React, { Component } from 'react'

import { getPostDetails } from '../services';

class NewViewPhotos extends Component {

constructor(props) {
        super(props)

        this.state = {
             name: 'Madison',
            photos: []
        }
        console.log('LifecycleA Constructor')
       
    }

    static getDerivedStateFromProps(props, state) { // this method is called every time a component is re-rendered
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {


    //     console.log('LifecycleA componentDidMount')
        getPostDetails(this.props.slug).then((result) => {
            let myPhotos = result.postPhotos;
       //     console.log(result.postPhotos);
            this.setState({photos: result.postPhotos})
            console.log(myPhotos)
          });
        // console.log(this.state.PostPhotos)
       
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        console.log('User initiated a state change')
        this.setState({
            name: 'Jessica'
        })
    }

    render() { 
        console.log('LifecycleA render')
        return (
            <div>
                LifecycleA
             {this.props.slug}
             {this.state.photos?.map((postPhoto, index) => (
                 <span>{postPhoto.url}</span>
                ))}
             {/* {this.state.PostPhotos} */}
                {/* <button onClick={this.changeState}>Change state</button> */}
                {/* <div><LifecycleB></LifecycleB></div> */}
            </div>
        )
    }
}

export default NewViewPhotos