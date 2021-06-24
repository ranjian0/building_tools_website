import React from 'react';
import { Component } from 'react';
import * as THREE from "three";

import "./Viewer3D.css"

class Viewer3D extends Component {

    render() {
        return <canvas></canvas>
    }

    componentDidMount() {
        this.initialize();
    }

    initialize() {

        var scene = new THREE.Scene();
        // There's no reason to set the aspect here because we're going
        // to set it every frame anyway so we'll set it to 2 since 2
        // is the the aspect for the canvas default size (300w/150h = 2)
        const  camera = new THREE.PerspectiveCamera(70, 2, 1, 1000);
        camera.position.z = 5;

        var renderer = new THREE.WebGLRenderer({canvas: document.querySelector("canvas")});
        renderer.setClearColor(0xdddddd)
      
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshStandardMaterial( { color: 0x7e31eb } );
        var cube = new THREE.Mesh( geometry, material );        
        scene.add( cube );        
        
        const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        scene.add( light );
        

        var resizeCanvasToDisplaySize = function() {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            if (canvas.width !== width ||canvas.height !== height) {
              // you must pass false here or three.js sadly fights the browser
              renderer.setSize(width, height, false);
              camera.aspect = width / height;
              camera.updateProjectionMatrix();
            }
          }    
    
        var animate = function() {
            resizeCanvasToDisplaySize();
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
    
        animate();
    }

}

export default Viewer3D;