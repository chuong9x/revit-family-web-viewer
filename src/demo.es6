import "babel-polyfill";
import { WebViewerOptions, WebViewer } from 'revit-family-web-viewer';

// Create viewer object
window.viewer = new WebViewer(
    new WebViewerOptions(
        'linear-gradient(141deg, #5D8CAE 0%, #317589 51%, #4D8FAC 75%)', // body background styling
        true,   // move scene origin to model center (calculated via bounding sphere)
        0.0009  // rotation speed and direction (backwards if negative)
    )
);

require('./demo.inc.js');
