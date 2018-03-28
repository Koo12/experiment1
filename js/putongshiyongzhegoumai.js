function huantu()
{
    var tu1=document.getElementById("tu1");
    tu1.onmouseover=function()
    {
        tu1.setAttribute("src","images/拼图/new1_2.jpeg");
    };

    tu1.onmouseleave=function()
    {
        tu1.setAttribute("src","images/拼图/new1_1.jpeg");
    };

    var tu2=document.getElementById("tu2");
    tu2.onmouseover=function()
    {
        tu2.setAttribute("src","images/拼图/new2_2.jpeg");
    };
    tu2.onmouseleave=function()
    {
        tu2.setAttribute("src","images/拼图/new2_1.jpeg");
    };

    var tu3=document.getElementById("tu3");
    tu3.onmouseover=function()
    {
        tu3.setAttribute("src","images/拼图/new3_2.jpeg");
    };
    tu3.onmouseleave=function()
    {
        tu3.setAttribute("src","images/拼图/new3_1.jpeg");
    };

    var tu4=document.getElementById("tu4");
    tu4.onmouseover=function()
    {
        tu4.setAttribute("src","images/拼图/new4_2.jpeg");
    };
    tu4.onmouseleave=function()
    {
        tu4.setAttribute("src","images/拼图/new4_1.jpeg");
    };

    var tu5=document.getElementById("tu5");
    tu5.onmouseover=function()
    {
        tu5.setAttribute("src","images/拼图/new5_2.jpeg");
    };
    tu5.onmouseleave=function()
    {
        tu5.setAttribute("src","images/拼图/new5_1.jpeg");
    };
}

window.onload=function()
{
    huantu();
};

