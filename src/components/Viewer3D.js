import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import * as THREE from "three";


class Viewer3D extends Component {

    componentDidMount()  {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0xdddddd)
        renderer.setSize( window.innerWidth * .75, window.innerHeight * .75);
        document.getElementById("canvas").appendChild( renderer.domElement );
      
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshStandardMaterial( { color: 0x7e31eb } );
        var cube = new THREE.Mesh( geometry, material );        
        scene.add( cube );        
        
        const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        scene.add( light );
        
        camera.position.z = 5;

        var animate = function() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            // cube.rotation.z += 0.01;
            renderer.render(scene, camera);

        }
    
        animate()
    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div id="canvas"/>
        )
    }

}

export default Viewer3D;