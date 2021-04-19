function task(text, k)
{
  let tweet="";
  let numberOfTweets=0;
  let OK=true;
  
  let words = text.split(' ');
  for(let word of words)
  {
    tweet=tweet.concat(word," ");
	if (tweet.length-1>k)
	{
		if(word.length>k)
		{
			return 0;
		}
		tweet=tweet.slice(0,tweet.length-1);
		console.log(tweet.substring(0, tweet.lastIndexOf(" ")));		
		tweet=(tweet.substring(tweet.lastIndexOf(" ")+1, tweet.length));
		tweet=tweet.concat(" ");
		numberOfTweets++;
	}
  }
  tweet=tweet.slice(0,tweet.length-1);
  console.log(tweet);
  numberOfTweets++;
  return numberOfTweets;
}
function printTweets() 
{

  let text = prompt("Введите текст");
  let k = prompt("Введите максимальную длину");
  let OK=task(text, k);
  
  if(OK>0)
  {
	alert(OK);
  }
  else
  {
	  alert("Такого деления нельзя сделать");
  }
}

printTweets()