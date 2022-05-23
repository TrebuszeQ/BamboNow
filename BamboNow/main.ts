 // module "main"

 import * as dom from "./dom";

 let instanceTable: Document[];
 
 type languages = 'pl-PL' | 'en-EN' | 'de-DE';
 
 function instanceController( x: Document ): unknown
     {
         let instance: unknown;
         return;
 
     }
 
 
 function emptyInstance( )
 {
   let emptyInstance: HTMLElement | null = document.getElementById( "emptyInstance" );
   document.write( String( emptyInstance ) );
   document.title = "emptyTemplate";
 }
 
 class Webpage
 {
    constructor( public templateId: HTMLElement, public pageTitle: string, public author?: string, public description?: string, public keywords?: string )
     {
        let x = document.implementation.createHTMLDocument( this.pageTitle );
        x = instanceTable[ instanceTable.length ];
     }
     

    metaDebug()
    {
        let metaElement: HTMLMetaElement = document.createElement( "meta" );
        const head = document.getElementById( 'primaryHead' )!;
        document.getElementsByTagName( 'head' )[0].id = 'primaryHead';
 
        let validator: boolean = false;
 
        let author = this.author
        let keywords = this.keywords;
        let description = this.description;
 
        function viewportDebug(): boolean
        {
            validator = false;
            let x = head.querySelector( "name = 'viewport'" );
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
            let x = head.querySelector( "name = 'author'" )
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
    }
     
}
 
 
 // Exports ------------------------------------------------------------------------------------------------------
 
 export { instanceTable, instanceController, Webpage };
 
 