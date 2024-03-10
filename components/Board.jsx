import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { useEffect } from 'react';


function Board() {
 useEffect(() => {
    // Function to load the Whiteboard Team API script
    const loadScript = (src, id) => {
      return new Promise((resolve, reject) => {
        const existingScript = document.getElementById(id);
        if (!existingScript) {
          const script = document.createElement('script');
          script.src = src;
          script.id = id;
          script.async = true;
          script.onload = () => resolve(script);
          script.onerror = () => reject(new Error(`Script load error for ${src}`));
          document.body.appendChild(script);
        } else {
          resolve(existingScript);
        }
      });
    };

    // Load the Whiteboard Team API script
    loadScript('https://www.whiteboard.team/dist/api.js', 'whiteboard-team-api')
      .then(() => {
        // Initialize the Whiteboard Team API
        const wt = new window.api.WhiteboardTeam('#wt-container', {
          clientId: '92c1df45667eee2f825af631a6c8a9ec', // Replace with your actual client ID
          boardCode: '4gZ5rJhhGoIrhJT1SDhmMs' // Replace with your actual board code
        });

        // Add event listener for 'ready' event
        wt.addListener('ready', (ctx) =>
          console.log('The whiteboard is ready and user is: ', ctx.uid)
        );

        // Wait until the whiteboard is ready
        wt.waitUntilReady()
          .then((ctx) => console.log('The whiteboard is ready and user is: ', ctx.uid))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.error('Failed to load Whiteboard Team API script', error));

    // Cleanup function
    return () => {
      // Remove the script if necessary
      const script = document.getElementById('whiteboard-team-api');
      if (script) {
        document.body.removeChild(script);
      }
    };
 }, []);

 return (
    <Card className="shadow-none h-full overflow-hidden">
      <CardBody>
        <div style={{ width: '100vw', height: '100vh' }} id="wt-container"></div>
      </CardBody>
    </Card>
 );
}

export default Board;
