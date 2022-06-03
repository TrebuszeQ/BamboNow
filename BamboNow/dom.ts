// module "dom"

// To do & worknotes
// null
// Last thought
// static CSS, dynamic HTML via mainly templates




// import { instanceController, arrayURL } from './main'

let instanceTable: Document[] = [];


const newDiv: HTMLDivElement = document.createElement("div");
const siteWrapper: HTMLElement | null = document.getElementById('siteWrapper');
const siteWrapperIn: string = siteWrapper!.innerHTML;

type button = "button" | "submit" | "reset";
type linktarget = "_blank" | "_self" | "_parent" | "_top" | "framename";
type linkrel = "alternate" | "author" | "bookmark" | "external" | "help" | "license" | "next" | "nofollow" | "noopener" | "noreferrer" | "prev" | "search" | "tag";


let debugging:
{
    uniqueIds: string[];
    idCheck( id: string ): string;
    validationId( id: string ): boolean | undefined;
    locationDebug( location: HTMLElement ): void; 
    debugLog( content: unknown ): void;
}

debugging =
{
    uniqueIds: [],

    idCheck( id: string )
    {
    let validator: boolean | undefined = this.validationId ( id );

    if( ( validator === true ) && ( this.uniqueIds.length >= 1 ) )
    {
        console.log( `Error: element with id="${ id }" already exists.` );
        id = id + this.uniqueIds.length;
        return id;
    }
    
    else
    {
        return this.uniqueIds[ this.uniqueIds.length ] = id;
    }
    },

    validationId( id )
    { 
    let validator: boolean;
    let y: string;
    if( this.uniqueIds.length <= 1 )
    {
        return validator = false;
    }

    else
    {
        for( let i: number = 0; i < this.uniqueIds.length; i++ )
        {
        y = this.uniqueIds[i];
        if ( id === y )
        {
            return validator = true;
        }

        else
        {
            return validator = false; 
        }
        }
    };
    }, 

    locationDebug( location )
    {  
    let typeGuard: HTMLElement;
    let b: null;
    let x: HTMLElement | null = document.getElementById( "siteWrapper" );

    if( typeof x === null || typeof x === undefined )
    {
        let y: HTMLElement = document.createElement( 'siteWrapper' );
        y.id = "siteWrapper";
        return document.body.append( y );
    }
    else
    {
        return;
    }
    },

    debugLog( content )
    {
    return console.log ( content );
    },
}

let debuggingForm:
{
    formDebug(): unknown;
    actionDebug( x: HTMLElement, link: string, location: HTMLElement ): string;
    methodDebug(): unknown;
    targetDebug( target: linktarget ): string;
    typeDebug(): unknown;
} 

debuggingForm =
{
    formDebug()
    {
    },

    actionDebug( x, link, location )
    {
    if ( location.tagName === "FORM"  )
    {
        
    }
    else
    {
        if( link === '' && link.length < 8 )
        {
        document.title = "error404"
        link = 'pagenotfound';
        x.setAttribute( "target", "_blank" );
        }
        else
        {

        }
    }
    return link;
    },

    methodDebug()
    {
    },

    targetDebug( target )
    {

    return target;
    },

    typeDebug() 
    {
    },
}

class ElementHTML
{
  x = document.createElement( this.tagName );
  constructor( public tagName: string, public location: HTMLElement )
  {
    if( location != location as HTMLElement )
    {
      console.log( `Location: ${ location } is not valid. Set to comment with location of document body.` )
      let debugComment: string = String( this.x );
      document.body.innerHTML = `/* ${ this.x } */`;
    }
    else 
    {
      location.append( this.x );
    }
  }

  appendElement(): void
  {
    return this.location.append( this.x );
  }
}
class BodyElementHTML extends ElementHTML 
{
  
  constructor( public tagName: string, public location: HTMLElement, public id: string, public classCss: string, ) 
  {  
    super( tagName, location );
    this.x.id = debugging.idCheck( this.id );
    debugging.locationDebug( location );
    this.x.setAttribute( "class", this.classCss);
  }

  appendElement(): void
  {
    if( this.location === ( null ) || this.location === ( undefined ) || this.location === ( null ) )
    {
      return console.log( `Error: variable location is ${ String( typeof location ) }.` );
    }
    else
    {
      return this.location.append( this.x );
    } 
  }
  
}

class ButtonHTML extends BodyElementHTML
{   
  constructor( public location: HTMLElement, public id: string, public classCss: string )
  {
    let tagName: string = "button"; 
    super( tagName, location, id, classCss );
    this.x.id = debugging.idCheck( this.id );
    debugging.locationDebug( location );
    this.x.setAttribute( "class", this.classCss );
    this.x.setAttribute( "type", "button" );
    this.x.setAttribute( "name", this.id );
  }

  appendElement(): void
  {
    super.appendElement();
  }
}

class FormButtonHTML extends ButtonHTML
{
  constructor( public location: HTMLElement, public id: string, public classCss: string, public buttonType: button, public link: string, public target: linktarget)
  {
    super( location, id, classCss )
    let form: string = this.id;
    let action = '';
    let y: HTMLElement = document.createElement( "form" );
    this.x.id = debugging.idCheck( this.id );
    debugging.locationDebug( location );
    this.x.setAttribute( "class", this.classCss );
    this.x.setAttribute( "type", this.buttonType );
    y.setAttribute( "action", this.link );
    this.x.setAttribute( "name", this.id );
    switch ( this.buttonType )
    {
      case "submit":
        this.x.setAttribute( "type", "submit" );
        this.x.setAttribute( "action", action );
        this.x.setAttribute ( "formtarget", debuggingForm.targetDebug( this.target ) );
        this.x.setAttribute( "form", this.id );
        break;
      case "reset":
        break;
      default:
        break;
    }
  }
}

class BlockHTML extends BodyElementHTML
{
  constructor( public location: HTMLElement, public id: string, public classCss: string )
  {
    let tagName: string = "div";
    super( tagName, location, id, classCss );
    this.x.id = debugging.idCheck( this.id );
    debugging.locationDebug( location );
    this.x.setAttribute( "class", this.classCss );
  }
}

class SemanticHTML extends BodyElementHTML
{
  constructor( public tagName: string, public location: HTMLElement, public id: string, public classCss: string )
  {
    super( tagName, location, id, classCss );
    tagName = 'article' || 'aside' || 'details' || 'figcaption' || 'figure' || 'footer' || 'header' || 'main' || 'mark' || 'nav' || 'section' || 'summary' || 'time';
  }
}

class ParagraphHTML extends BodyElementHTML
{
  constructor( public location: HTMLElement, public id: string, public classCss: string, private text: string)
  {
    let tagName: string = 'p';
    super( tagName, location, id, classCss );
    this.x.id = debugging.idCheck( this.id );
    debugging.locationDebug( location );
    this.x.setAttribute( "class", this.classCss );
    this.x.setAttribute( "name", this.id );
  }
  
  fillParagraph(): void
  {
    let textNode: Text = document.createTextNode( this.text );
    this.x.appendChild( textNode );
  }
}

class HyperlinkHTML extends BodyElementHTML
{
  constructor( public location: HTMLElement, public id: string, public classCss: string, public link: string, public rel: linkrel, public target: linktarget )
  {
    let tagName: string = 'a';
    super( tagName, location, id, classCss )
    debugging.locationDebug( this.location );
    this.x.id = debugging.idCheck( this.id );
    this.x.setAttribute( "class", this.classCss );
    this.x.setAttribute( "name", this.id );
    this.x.setAttribute( "href", 'debuggingForm.actionDebug( this.link )' );
    this.x.setAttribute( "rel", this.rel );
    this.x.setAttribute( "target", debuggingForm.targetDebug( this.target ) );
  }
}
class FAIconsHTML extends BodyElementHTML
{
  constructor( public location: HTMLElement, public classCss: string )
  {
    let tagName: string = 'i';
    let id: string = '';
    super( tagName, location, id, classCss );
    this.x.id = debugging.idCheck( this.id );
    debugging.locationDebug( location );
    this.x.setAttribute( "class", `fa fa-${ this.classCss }` );
  }
}

class Webpage
{
  constructor( public templateId: HTMLElement, public pageTitle: string, public author?: string, public description?: string, public keywords?: string )
  {
    const htmlTemplate: string =
    `<!DOCTYPE html>
    <html lang="en-EN" id="primaryDoc" name="primaryDoc">
        <head id="primaryHead" name="primaryHead">
          <meta charset="UTF-8">
          <title>${ this.pageTitle }</title> 
          <meta name="viewport" content="width = device-width, initial-scale = 1 ">
          <meta name="keywords" content="${ this.keywords }">
          <meta name="descripion" content="${ this.description }">
          <meta name="author" content="Hubert Dąbrowski, Hubert Dabrowski ${ this.author}">
          <title id="primaryTitle"></title>
          <style id="innerStyle" name="innerStyle"></style>
          <link rel="stylesheet" href="" id="outerStyle" name="outerStyle">
          <link rel="stylesheet" href="http://localhost/BamboNow/Build/index.css">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        </head>
        <body id="primaryBody" name="primaryBody">
            <div id="siteWrapper" name="siteWrapper" class="block relative contentBox noMargin noPadding fullWitdh infiniteHeight">
            <script> var exports = {} </script>
            <script type="module" src="http://localhost/BamboNow/Build/dom.js"></script>
            </div>
        </body>
    </html>`


    const file = new File( [` ${ htmlTemplate}`], `${ this.pageTitle }.html`, { type: "text/html" } )
    const fileURL = URL.createObjectURL( file );

    console.log( ` File address: ${ fileURL } ` );
    fetchingManager( fileURL, this.pageTitle );
    return;
  }


  metaDebug( doc: Document )
  {
    let metaElement: HTMLMetaElement = doc.createElement( "meta" );
    doc.getElementsByTagName( 'head' )[0].id = 'primaryHead';
    const head = doc.getElementById( 'primaryHead' )!;

    let validator: boolean = false;

    let author = this.author
    let keywords = this.keywords;
    let description = this.description;

    function viewportDebug(): boolean
    {
      validator = false;
      let x = head.querySelector( `meta[ name = viewport ]`);
      if( x != null )
      {
          x.setAttribute( "conent", "width = device-width, initial-scale = 1" );
          return validator = true;
      }
      
      else
      {
          head.append( metaElement );
          metaElement.setAttribute( 'name', 'viewport' );
          metaElement.setAttribute( 'content', 'width = device-width, initial-scale = 1' );
          return validator = true;
      }
    }
    function authorDebug( ): boolean
      {
        if( author != null )
        {
        }

        else
        {
          author = '';
        }

        validator = false;
        let x = head.querySelector( `meta[ name = viewport ]` )
        if( x != null )
        {
          x.setAttribute( 'content', `Hubert Dąbrowski, Hubert Dabrowski, ${ author }`)
          return validator = true;
        }
        
        else
        {
          head.append( metaElement );
          metaElement.setAttribute( 'name', 'author' );
          metaElement.setAttribute( 'content', `Hubert Dąbrowski, Hubert Dabrowski, ${ author }`);
          return validator = true;
        }
      }

      function descriptionDebug(): boolean
      {
        if( description != null )
        {
        }

        else
        {
          description = '';
        }

        validator = false;
        let x = head.querySelector( "description" )
        if( x != null )
        {
          x.setAttribute( "content", description );
          return validator = true;
        }

        else
        {
          head.append( metaElement );
          metaElement.setAttribute( "name", "description" );
          metaElement.setAttribute( "content", description );
          return validator = true;
        }
      }

      function keywordsDebug(): boolean
      {
        if( keywords != null )
        {
        }

        else
        {
          keywords = '';
        }

        validator = false;
        let x = head.querySelector( "keywords" );
        if( x != null )
        {
          x.setAttribute( "content", keywords );
          return validator = true;
        }

        else
        {
          head.append( metaElement );
          metaElement.setAttribute( "name", "keywords" );
          metaElement.setAttribute( "content", keywords );
          return validator = true;
        }
      }

    viewportDebug();
    authorDebug();
    descriptionDebug();
    keywordsDebug();

    if( validator === false )
    {
      console.log( "Meta data is not validated." );
      return validator;
    }
    else
    {
      return validator;
    }
  }
}

class Redirection
{
  constructor( public blobURL: string, public pageTitle: string)
  {
    let state =
    {
      'page_title': this.pageTitle,
      'user_id': ''
    };
    const demandedURL: URL = new URL( `http://localhost/BamboNow/Build/${ this.pageTitle }` );
    let x: Location = window.location;
    if( String( x ) === 'address' )
    {
      window.location.href = blobURL;
      history.pushState( state, '', demandedURL );
    }
  }
}

//----------------------------------------------------------------------------------------------main-------------------

function fetchingManager( fileURL: string, pageTitle: string )
{
  const requestBuild = new Request( fileURL )
  fetch( requestBuild )
    .then( function ( response ) 
      {
        if( !response.ok )
        {
          throw new Error( `HTTP error: ${ response.status }.` )
        }
        else
        {
          console.log( 'Resource fetched successfully. ');
          return pageBuilder( fileURL, pageTitle );
        }
      } );
}

function pageBuilder( fileURL: string, pageTitle: string )
{
  console.log( 'Page building process ran.' )
  switch( pageTitle )
    {
      case 'ticketing':
        console.log( `Window.location: ${ String( window.location ) }; fileURL: ${ fileURL };` ); 
        function ticketingComponents(): void 
        {
          let redirectionTicketing = new Redirection( fileURL, pageTitle );

          let mainHeader = new SemanticHTML( "header", siteWrapper!, "mainHeader", "block noMargin noPadding relative floatLeft contentBox fullWidth darkTheme mainHeader" );
          let leftAside = new SemanticHTML( "aside", siteWrapper!, "leftAside", "grid noMargin noPadding relative floatLeft contentBox darkTheme leftAside");

          let leftAsideButtonHome = new ButtonHTML( document.getElementById( "leftAside" )!, "asideButtonHome", "block noMargin noPadding relative floatLeft contentBox asideButton darkTheme" );
          let asideHomeParagraph = new ParagraphHTML( document.getElementById( "asideButtonHome" )!, "asideHomeParagraph", "whiteFont noPadding noMargin asideButtonParagraph", " Home");
          let faiHome = new FAIconsHTML( document.getElementById( "asideHomeParagraph" )!, "home" );
          asideHomeParagraph.fillParagraph();

          let mainContent = new SemanticHTML( "content", siteWrapper!, "mainContent", "grid noMargin noPadding relative floatLeft contentBox midTheme mainContent" );
          let contentNav = new SemanticHTML( "nav", document.getElementById( 'mainContent' )!, "topContentNav", "block noMargin noPadding relative floatLeft contentBox darkTheme contentNav");
          let contnetNav2 = new SemanticHTML( "nav", document.getElementById( 'mainContent' )!, "midContentNav", "grid noMargin noPadding relative floatLeft contentBox darkTheme contentNav");
          let sectionContent = new SemanticHTML( "content", document.getElementById( 'mainContent' )!, "sectionContent", "grid noMargin noPadding relative floatLeft contentBox singleSection");
          let rightAside = new SemanticHTML( "aside", siteWrapper!, "rightAside", "hidden noMargin noPadding relative floatLeft contentBox midTheme rightAside" );
          return console.log( 'Page built.' );
        }
        ticketingComponents();
      default:
        console.log( 'No case found.' );
        break;
    }
}
// ------------------------------------------------------------------------------------------------------


let ticketing = new Webpage( document.getElementById( "emptyInstance" )!, "ticketing" )

export { Webpage, instanceTable };
  /* class templateHandler
{
  constructor( public location: HTMLElement, public id: string, public name: string )
  {
    debugging.idCheck( this.id );
    debugging.siteWrapperDebug( location );
  }
  append()
  {

  }*/


// archive

/* export class StylingCss
{
  innerStylesheet = document.styleSheets[0];
  outerStylesheet = document.styleSheets[1];
  stylesheets: CSSStyleSheet[] = [ this.innerStylesheet, this.outerStylesheet ];

  constructor( public selector: string, public property: string, public value: string)
  {
  }

  innerCssInsert()
  {
    return this.innerStylesheet.insertRule(`${ this.selector }
      {
        ${ this.property }: ${ this.value }; 
      }`, this.innerStylesheet.cssRules.length );
  }

  outerCssInsert()
  {
    return this.outerStylesheet.insertRule(`${ this.selector }
      {
        ${ this.property }: ${ this.value }; 
      }`, this.innerStylesheet.cssRules.length );
  }

  styleSet()
  { 
    let currentStyleSheet: CSSStyleSheet = this.stylesheets[0];
    let chainer: boolean = false;

    for ( let i: number = 0 ; i < document.styleSheets.length; i++ )
    { 
      let currentStyleSheet: CSSStyleSheet = this.stylesheets[i];
      let rulesLength: number = currentStyleSheet.cssRules.length; 
      currentStyleSheet = document.styleSheets[i];

      for ( let x: number = 0; x < rulesLength; x++ )
        {
          let rule: CSSRule = currentStyleSheet.cssRules[x];
          let ruleStyle: CSSStyleRule = rule as CSSStyleRule;

          if ( ruleStyle.selectorText === this.selector )
          {
            chainer = true;
            return ruleStyle.style.setProperty( this.property, this.value );
          }

          else if ( ( x === rulesLength - 1 ) && ( chainer === false ) )
          {
            chainer = true;
            this.innerCssInsert();
          }
        }
      }  
  }
} */
