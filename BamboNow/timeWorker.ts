let i: number = 0;

function timeCounter(): void
{
  i = i + 1;
  postMessage( i );
  setTimeout( "timeCounter()", 1000 );
} 

timeCounter();