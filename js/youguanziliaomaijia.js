function prepareSlideshow()
{
    var preview=document.getElementById("preview");
    preview.style.position="absolute";
    preview.style.left="0px";
    preview.style.top="0px";

    var list=document.getElementById("qian");
    var links=list.getElementsByTagName("a");

    links[0].onmouseover=function()
    {
        moveElement("preview",0,0,10);
    };

    links[1].onmouseover=function()
    {
        moveElement("preview",-1100,0,10);
    };

    links[2].onmouseover=function()
    {
        moveElement("preview",-2200,0,10);
    };

    links[3].onmouseover=function()
    {
        moveElement("preview",-3300,0,10);
    };

}


function moveElement(elementID,final_x,final_y,interval)
{
    var ele=document.getElementById(elementID);
    if(ele.movement)
    {
        clearTimeout(ele.movement);
    }
    var xpos=parseInt(ele.style.left);
    var ypos=parseInt(ele.style.top);
    var dist=0;
    if(xpos==final_x && ypos==final_y)
    {
        return true;
    }

    if(xpos<final_x)
    {
        dist=Math.ceil((final_x-xpos)/30);
        xpos=xpos+dist;
    }
    if(xpos>final_x)
    {
        dist=Math.ceil((xpos-final_x)/30);
        xpos=xpos-dist;
    }
    if(ypos<final_y)
    {
        dist=Math.ceil((final_y-ypos)/30);
        ypos=ypos+dist;
    }
    if(ypos>final_y)
    {
        dist=Math.ceil((ypos-final_y)/30);
        ypos=ypos-dist;
    }

    ele.style.left=xpos+"px";
    ele.style.top=ypos+"px";
    var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    ele.movement=setTimeout(repeat,interval);
}

window.onload=function()
{
    prepareSlideshow()
};
