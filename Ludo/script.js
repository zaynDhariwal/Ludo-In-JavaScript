var clicked=false;
var die=0;
var playerchange=false;
var wins={red:0,blue:0,green:0,yellow:0}
var gots={red:{1:'0',2:'0',3:'0',4:'0'},blue:{1:'0',2:'0',3:'0',4:'0'},green:{1:'0',2:'0',3:'0',4:'0'},yellow:{1:'0',2:'0',3:'0',4:'0'}};
function changePlayer() 
{
    if (num != 6)
    {
    var text = document.getElementById('player');
    switch (text.innerText) 
    {
        case "red":
            text.innerText = text.style.color = "blue";

            if(wins.blue>3)
            {
                document.getElementById('badtext').innerText='You Won';
             changePlayer();

            }
              break;
        case "blue":
            text.innerText = text.style.color = "yellow"; 

            if(wins.yellow>3)
            {
                document.getElementById('badtext').innerText='You Won';
            changePlayer();

            } 
            break;
        case "yellow":
            text.innerText = text.style.color = "green";

            if(wins.green>3)
            {
                document.getElementById('badtext').innerText='You Won';
             changePlayer();

            }
              break;
        case "green":
            text.innerText = text.style.color = "red";

            if(wins.red>3)
            {
                document.getElementById('badtext').innerText='You Won';
             changePlayer();

            }
             break;
    }
    }
    var badtext = document.getElementById('badtext');
    badtext.innerText = "";
    var dice = document.getElementById('dice');
    dice.style.backgroundImage = "url(dice.gif)";
}
function randomNum() {
    if (!clicked) {
        num = Math.floor((Math.random() * 6) + 1);
        die=num;
        var dice = document.getElementById('dice');
        dice.style.backgroundImage = "url(" + num + ".jpg)";
        clicked = true;
    }
    if (num != 6&&DontHaveOtherFree()) {
        var bad = document.getElementById('badtext');
        bad.innerText = "Unfortunately you stuck";
        console.log("changin player");
        window.setTimeout(changePlayer, 100);
        clicked = false;
    }
}
function DontHaveOtherFree() {
    
    var text = document.getElementById('player');
    console.log(text.innerText);

    for (var i = 1; i <=4; i++)
        {
        var text2=document.getElementById(text.innerText+"0"+i);
            if(!text2.hasChildNodes())
            {
                return false;
            }
        }
        return true;
}
function kills(box)
{
    console.log(parseInt(box.slice(2)));
    if(parseInt(box.slice(2))<52)
    {
        console.log(box,document.getElementsByClassName(box)[0].hasChildNodes());
    var fragment = document.createDocumentFragment();
    console.log(document.getElementsByClassName(box)[0].style.backgroundColor);
    if(document.getElementsByClassName(box)[0].hasChildNodes() && document.getElementsByClassName(box)[0].style.backgroundColor=="white")
    {
        var idname=document.getElementsByClassName(box)[0].childNodes[0].id;
        console.log(idname);
        fragment.appendChild(document.getElementById(idname));
        console.log(idname.slice(0,-1),document.getElementsByClassName(box)[0].style.background);
        switch(idname.slice(0,-1))
        {
            case 'red':gots.red[idname[idname.length-1]]=0;break;
            case 'green':gots.green[idname[idname.length-1]]=0;break;
            case 'yellow':gots.yellow[idname[idname.length-1]]=0;break;
            case 'blue':gots.blue[idname[idname.length-1]]=0;break;
        }
        idname=idname.slice(0,-1)+"0"+idname[idname.length-1];
        console.log(idname);
        document.getElementById(idname).appendChild(fragment);
    }
    }
}

function move(id)
{
    playerchange=false;
    var b=event.srcElement.id;
    b=b.slice(0, -1);
   if(clicked && document.getElementById('player').innerText==b)
    {
    var fragment = document.createDocumentFragment();
    if(die==6)
    {
        playerchange=false;
    }
    else
    {
        playerchange=true;
    }
    
    
    switch(b)
    {
    case "red":
        var count=0;
        for (var i = 1; i <=4; i++)
        {
            if(parseInt(gots.red[i])+die > 57 || (parseInt(gots.red[i])==0 && die!=6))
            {
                count++;
            }
        }
        if(count>=4)
        {
            changePlayer();
            return;
        }
    if(die+parseInt(gots.red[(event.srcElement.id.substr(event.srcElement.id.length - 1))]) > 57 || document.getElementById((document.getElementById('player').innerText+"0"+(event.srcElement.id.substr(event.srcElement.id.length - 1)))).hasChildNodes() && playerchange)
    {
       return;
    }
    fragment.appendChild(document.getElementById(event.srcElement.id));
    console.log('rp'+(die+parseInt(gots.red[(event.srcElement.id.substr(event.srcElement.id.length - 1))])));
    if(die+parseInt(gots.red[(event.srcElement.id.substr(event.srcElement.id.length - 1))])==57)
    {
        document.getElementById(event.srcElement.id).style.visibility="hidden";
        wins.red+=1;
        console.log(wins);
        break;
    }
    if(parseInt((die+parseInt(gots.red[(event.srcElement.id.substr(event.srcElement.id.length - 1))])))<57)
{
    if(!playerchange && gots.red[(event.srcElement.id.substr(event.srcElement.id.length - 1))]==0)
    {
    document.getElementsByClassName('rp1')[0].appendChild(fragment);
    gots.red[(event.srcElement.id.substr(event.srcElement.id.length - 1))]=1;
    }
    else
    {
        kills('rp'+(die+parseInt(gots.red[(event.srcElement.id.substr(event.srcElement.id.length - 1))])));
    die+=parseInt(gots.red[(event.srcElement.id.substr(event.srcElement.id.length - 1))]);
    gots.red[(event.srcElement.id.substr(event.srcElement.id.length - 1))]=die;
    document.getElementsByClassName('rp'+die)[0].appendChild(fragment);
    }}else
    {
        playerchange=true;
    }
    var dice = document.getElementById('dice');
    dice.style.backgroundImage = "url(dice.gif)";
    clicked=false;
    break;
    case "blue":
        var count=0;
        for (var i = 1; i <=4; i++)
        {
            if(parseInt(gots.blue[i])+die > 57 || (parseInt(gots.blue[i])==0 && die!=6))
            {
                count++;
            }
        }
        console.log(count,"count");
        if(count>=4)
        {
            changePlayer();
            return;
        }
        if(die+parseInt(gots.blue[(event.srcElement.id.substr(event.srcElement.id.length - 1))]) > 57 || document.getElementById((document.getElementById('player').innerText+"0"+(event.srcElement.id.substr(event.srcElement.id.length - 1)))).hasChildNodes() && playerchange)
    {
       return;
    }
        fragment.appendChild(document.getElementById(event.srcElement.id));
        console.log('bp'+eval(die+parseInt(gots.blue[(event.srcElement.id.substr(event.srcElement.id.length - 1))])));
        if(die+parseInt(gots.blue[(event.srcElement.id.substr(event.srcElement.id.length - 1))])==57)
    {
        document.getElementById(event.srcElement.id).style.visibility = 'hidden';
        wins.blue+=1;
        console.log(wins);
        return;
    }
    if(parseInt((die+parseInt(gots.blue[(event.srcElement.id.substr(event.srcElement.id.length - 1))])))<57)
    {

        if(parseInt((die+parseInt(gots.blue[(event.srcElement.id.substr(event.srcElement.id.length - 1))])))<57)
    {
        if(!playerchange && gots.blue[(event.srcElement.id.substr(event.srcElement.id.length - 1))]==0)
        {
            document.getElementsByClassName('bp1')[0].appendChild(fragment);
            gots.blue[(event.srcElement.id.substr(event.srcElement.id.length - 1))]=1;
            
        }
        else
        {
            kills('bp'+(die+parseInt(gots.blue[(event.srcElement.id.substr(event.srcElement.id.length - 1))])));
            die+=parseInt(gots.blue[(event.srcElement.id.substr(event.srcElement.id.length - 1))]);
            gots.blue[(event.srcElement.id.substr(event.srcElement.id.length - 1))]=die;
            document.getElementsByClassName('bp'+die)[0].appendChild(fragment);
        }}
    }else
    {

playerchange=true  ;  }
    var dice = document.getElementById('dice');
    dice.style.backgroundImage = "url(dice.gif)";
    clicked=false;
    break;
    case "green":
        var count=0;
        for (var i = 1; i <=4; i++)
        {
            if(parseInt(gots.green[i])+die > 57 || (parseInt(gots.green[i])==0 && die!=6))
            {
                count++;
            }
        }
        if(count>=4)
        {
            changePlayer();
            return;
        }
        if(die+parseInt(gots.green[(event.srcElement.id.substr(event.srcElement.id.length - 1))]) > 57 || document.getElementById((document.getElementById('player').innerText+"0"+(event.srcElement.id.substr(event.srcElement.id.length - 1)))).hasChildNodes() && playerchange)
    {
       return;
    }
        fragment.appendChild(document.getElementById(event.srcElement.id));
        //console.log('bp'+(die+parseInt(gots.green[(event.srcElement.id.substr(event.srcElement.id.length - 1))])));
       
        console.log('gp'+(die+parseInt(gots.green[(event.srcElement.id.substr(event.srcElement.id.length - 1))])));
        if(die+parseInt(gots.green[(event.srcElement.id.substr(event.srcElement.id.length - 1))])==57)
        {
            document.getElementById(event.srcElement.id).style.visibility="hidden";
            wins.green+=1;
            console.log(wins);
        }
    if(parseInt((die+parseInt(gots.green[(event.srcElement.id.substr(event.srcElement.id.length - 1))])))<57)
{
        if(!playerchange && gots.green[(event.srcElement.id.substr(event.srcElement.id.length - 1))]==0)
        {
            document.getElementsByClassName('gp1')[0].appendChild(fragment);
            gots.green[(event.srcElement.id.substr(event.srcElement.id.length - 1))]=1;
        }

        else{
        console.log('gp'+(die+parseInt(gots.green[(event.srcElement.id.substr(event.srcElement.id.length - 1))])));

        kills('gp'+(die+parseInt(gots.green[(event.srcElement.id.substr(event.srcElement.id.length - 1))])));

                die+=parseInt(gots.green[(event.srcElement.id.substr(event.srcElement.id.length - 1))]);
            gots.green[(event.srcElement.id.substr(event.srcElement.id.length - 1))]=die;
            document.getElementsByClassName('gp'+die)[0].appendChild(fragment);

        }}else{playerchange=true;}
    var dice = document.getElementById('dice');
    dice.style.backgroundImage = "url(dice.gif)";
    clicked=false;
    break;
    case "yellow":
        var count=0;
        for (var i = 1; i <=4; i++)
        {
            if(parseInt(gots.yellow[i])+die > 57 || (parseInt(gots.yellow[i])==0 && die!=6))
            {
                count++;
            }
        }
        if(count>=4)
        {
            changePlayer();
            return;
        }
        if(die+parseInt(gots.yellow[(event.srcElement.id.substr(event.srcElement.id.length - 1))]) > 57 || document.getElementById((document.getElementById('player').innerText+"0"+(event.srcElement.id.substr(event.srcElement.id.length - 1)))).hasChildNodes() && playerchange)
    {
       return;
    }
    fragment.appendChild(document.getElementById(event.srcElement.id));
    console.log('yp'+(die+parseInt(gots.yellow[(event.srcElement.id.substr(event.srcElement.id.length - 1))])));
    if(die+parseInt(gots.yellow[(event.srcElement.id.substr(event.srcElement.id.length - 1))])==57)
    {
        document.getElementById(event.srcElement.id).style.visibility="hidden";
        wins.yellow+=1;
        console.log(wins);
    }
    if(parseInt((die+parseInt(gots.yellow[(event.srcElement.id.substr(event.srcElement.id.length - 1))])))<57)
{
    if(!playerchange && gots.yellow[(event.srcElement.id.substr(event.srcElement.id.length - 1))]==0)
        {
            
            document.getElementsByClassName('yp1')[0].appendChild(fragment);
            gots.yellow[(event.srcElement.id.substr(event.srcElement.id.length - 1))]=1;
        }
        else
        {
        kills('yp'+(die+parseInt(gots.yellow[(event.srcElement.id.substr(event.srcElement.id.length - 1))])));

            die+=parseInt(gots.yellow[(event.srcElement.id.substr(event.srcElement.id.length - 1))]);
            gots.yellow[(event.srcElement.id.substr(event.srcElement.id.length - 1))]=die;
            document.getElementsByClassName('yp'+die)[0].appendChild(fragment);

        }}else
        {
            playerchange=true;
        }
    var dice = document.getElementById('dice');
    dice.style.backgroundImage = "url(dice.gif)";
    clicked=false;
    break;
    }
    if(playerchange)
    {
        changePlayer();
    }
    
}}
