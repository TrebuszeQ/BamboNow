// module "main"

import * as dom from "./dom";
import { Webpage, instanceTable } from "./dom";



/*
let demandedURL: string | null = new URLSearchParams( document.location.search ).get( 'address' );

type languages = 'pl-PL' | 'en-EN' | 'de-DE';
const arrayURL: URL[] = [];
const entryState: URL = new URL( 'http://localhost/BamboNow/Build/index.html' );
arrayURL[ 0 ] = entryState;

function instanceController( demandedURL )
{ 
  arrayURL[ arrayURL.length ] = address;

  

  let state =
  {
    'page_id': '',
    'user_id': ''
  }
  window.history.pushState( state, '', address );
  window.history.replaceState( state, '', address );

 

  switch( address )
  {
    case entryState:
      return document.write( `Application empty instance.` )
    default:
      return;
  }
}

instanceController( window.location. );
 // ------------------------------------------------------------------------------------------------------


 
 /*
 if( window.Worker )
 {
   let testWorker: Worker = new Worker( 'main.js' );
   
 }
 */

 
 // Exports ------------------------------------------------------------------------------------------------------
 
 // export { instanceController, arrayURL };
 
 