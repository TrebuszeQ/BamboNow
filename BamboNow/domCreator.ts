
export namespace dynamicContent
    {


    const newDiv: HTMLDivElement = document.createElement("div");
    const siteWrapper: HTMLElement | null = document.getElementById('siteWrapper');
    const siteWrapperIn: string = siteWrapper!.innerHTML;
    const navbar = document.getElementById('navbar');
    //const navbarIn: HTMLElement | null = navbar!.innerHTML();
    const leftMenu = document.getElementById('leftMenu');

    type btntype = "button" | "reset" | "submit";
    type formtarget = "_blank" | "_self" | "_parent" | "_top";

    const uniqueIds: string[] = [];

    function debugLog( content: unknown )
    {
      console.log ( content );
    }

    function idCheck( id: string ): string
      {
        let z: string = '';
        let isInDocument: HTMLElement | null = document.getElementById( id ); 
        let exists = uniqueIds.find( function( value ): string  | void { value === id } );
        exists;
        if ( ( exists != typeof( z ) )  && ( isInDocument === null ) )
        {
          if ( uniqueIds.length <= 0 )
          {
            uniqueIds[ 0 ] = id;
          }

          else
          {
            uniqueIds[ uniqueIds.length ] = id;
          }
          return id;
        }
          else
        {
          return id = `idCheck failure: ${id} exists.`
        }
      }
    
    class StylingCss
    {
      constructor( public selector: string, public property?: string, public value?: string)
      {
      }

      innerCssInsert()
      {
        return document.styleSheets[0].insertRule(`${ this.selector } 
        { ${ this.property }: ${ this.value }; 
        }`, document.styleSheets[0].cssRules.length );
      }

      styleSheetIterator()
      {
        const innerStylesheet = document.styleSheets[0];
        const outerStylesheet = document.styleSheets[1];
        const stylesheets: CSSStyleSheet[] = [ innerStylesheet, outerStylesheet ];

        let i: number = 0;
        let x: number = 0;
        let currentStyleSheet: CSSStyleSheet = stylesheets[i];
        let rule: CSSRule = currentStyleSheet.cssRules[x];
        let ruleStyle: CSSStyleRule = rule as CSSStyleRule;
        let rulesLength: number = currentStyleSheet.cssRules.length; 
        for ( ; i < document.styleSheets.length; i++ )
        { 
          currentStyleSheet = document.styleSheets[i];
          rule = currentStyleSheet.cssRules[i];
          console.log( `i: ${i}; rulesLength: ${rulesLength};` ); 
          console.log( currentStyleSheet );
          if ( rulesLength > 0 )
          {
            for ( let x: number = 0; x < rulesLength; x++ )
            {
              console.log( rule );
            }
          }
          else
          {
            console.log( `rule not found` )
            /*document.styleSheets[0].insertRule(`${ this.selector } 
            { ${ this.property }: ${ this.value }; 
            }`, document.styleSheets[0].cssRules.length );*/
          }
        }
        return console.log( `Current stylesheet is: ${currentStyleSheet};` );
      }

      }

    
    class ElementHTML
    {
      constructor( public id: string, public classCss: string ) 
      {
      }
    }

    class ButtonHTML extends ElementHTML
    {   
      constructor( public id: string, public classCss: string, public btnType: btntype, public name: string, public link: string, public formtarget?: formtarget )
    {
      super( id, classCss );
    }

    buttonCreation(): void
    {
      let x: HTMLButtonElement = document.createElement( "button" );
      x.id = idCheck( this.id );
      //let button = document.getElementById( id );
      x.setAttribute( "class", this.classCss);
      x.setAttribute( "type", this.btnType );
      x.setAttribute( "name", this.name );
      if ( this.link.length < 4 || this.link === undefined || null )
      {
        x.setAttribute ( "formaction", "nolink");
        this.formtarget = "_blank";
        x.setAttribute ( "formtarget", this.formtarget );
      }
      else
      {
        x.setAttribute( "formAction", this.link );
      }

        siteWrapper!.append( x );
    }

    }
      
    class NamedButtonHTML extends ButtonHTML
    {
      constructor( public id: string, public classCss: string, public btnType: btntype, public name: string, public link: string, public formtarget?: formtarget )
      {
        super( id, classCss, btnType, name, link, formtarget );
      }

      buttonCreation(): void
      {
        let x: HTMLButtonElement = document.createElement( "button" );
        x.id = idCheck ( this.id );
        //let button = document.getElementById( id );
        x.setAttribute( "class", this.classCss);
        x.setAttribute( "type", this.btnType );
        x.setAttribute( "name", this.name );
        if ( this.link.length < 4 || this.link === undefined || null )
        {
          x.setAttribute( "formaction", "nolink");
          this.formtarget = "_blank";
          x.setAttribute( "formtarget", this.formtarget );
        }
        else
        {
          x.setAttribute( "formAction", this.link );
        }

        siteWrapper!.append( x );

        let y: HTMLElement = document.createElement( "p" );
        x.append( y );
        y.append( document.createTextNode( this.name ) );
      }
    }

    class BlockHTML 
    {
      
      constructor( public id: string, public classCss: string )
      {
      }

      blockCreation()
      {
        let x: HTMLDivElement = document.createElement( "div" );
        x. id = idCheck( this.id );
        x.setAttribute( "class", this.classCss );
      }
    }



// ------------------------------------------------------------------------------------

    let test = new ButtonHTML("test", "test","button", "test", "test");
    test.buttonCreation();

    let test2 = new NamedButtonHTML("test2", "test", "button", "lol", "");
    test2.buttonCreation();
    
    let testStyling = new StylingCss("test", "width", "200px");
    testStyling.styleSheetIterator();

  //console.log ( innerStylesheet );
  //console.log ( outerStylesheet );
  }
    
    
      
  /*rulesIterator()
  {
    this.styleSheetIterator();
    for ( let i: number = 0; i < currentStyleSheet.cssRules.length; i++ )
    {
      let rules: CSSRule = currentStyleSheet.cssRules[i];
      let rulesStyle: CSSStyleRule = rules as CSSStyleRule;
      console.log( `wtf` );
      if ( rulesStyle.selectorText === this.selector )
      {
        console.log( `rulesStyle.cssText = 
        ${ this.selector }
        {
          ${ this.property }: ${ this.value }; 
        };`);
        return rulesStyle.cssText = 
        `${ this.selector }
        {
          ${ this.property }: ${ this.value }; 
        }`;
      }
      else
      {
        console.log( `innerCssInsert: ${this.innerCssInsert()}` );
        return this.innerCssInsert();
      }
    }
      } */