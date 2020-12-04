
var currentScore=0;
var rn=0; 
var a=0;
var b=0;

str=(document.cookie).split("; ");
var obj={};
for(var i=0; i<str.length; i++) 
{
	name=str[i].split("=")[0];
	value=str[i].split("=")[1];
	obj[name]=value;
}
if(obj.Highscore==undefined)
{
	obj.Highscore=0;
}
    document.getElementById("highScore").innerHTML="Highest : "+obj.Highscore;
    HighScore1=obj.Highscore;

function startGame()
{
    currentScore=0; chancesleft=25; let c=" ";
    document.getElementById("yourScore").innerHTML="Score : 0";
    loopRun=async()=>
    {
    	for(i=0; i<25; i++)
    	{
    		a=0; b=0;
    		chancesleft-=1;
    		document.getElementById("chancesLeft").innerHTML="Left : "+chancesleft;
    		y=document.getElementsByClassName("photoMole");
    		rn=Math.floor(Math.random()*9);
    		y[rn].style.display='block';
    		await new Promise(resolve => setTimeout(resolve,1000));
    		y[rn].style.display='none';
    		c=rn;
    	}
    	document.cookie="Highscore="+HighScore1;
    }
    loopRun();
}

function scorePlus()
{	
    if(a==b)
    {
    	currentScore++;
	    a++;
    }
	
    document.getElementById("yourScore").innerHTML="Score : "+currentScore;
    if(currentScore>HighScore1)
    {
    	HighScore1=currentScore;
    	document.getElementById("highScore").innerHTML="Highest : "+currentScore;
    }
}