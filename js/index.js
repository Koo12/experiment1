function checkForm(form)
{
    if(form.userPassWord.value!="123456")
    {
        alert("密码错误！");
        form.userPassWord.focus();
        return false;
    }
    if(form.userName.value!="20165121")
    {
        alert("账户错误！");
        form.userName.focus();
        return false;
    }
    
    
    return true;
}

function jump(form)
{
    if(checkForm(form))
    {
        var shenfen=document.getElementById("jieguo").value;
        if(shenfen=="guanlizhe")
        {
            window.location.href="guanlizhe.html";
        }
        if(shenfen=="putongshiyongzhe")
        {
            window.location.href="putongshiyongzhe.html";
        }
        if(shenfen=="yinyuechangsuochuzuzhe")
        {
            window.location.href="yinyuechangsuochuzuzhe.html";
        }
        if(shenfen=="youguanziliaomaijia")
        {
            window.location.href="youguanziliaomaijia.html";
        }
        if(shenfen=="jiaoshi")
        {
            window.location.href="jiaoshi.html";
        }
    
        alert("成功！");
        return true;
    }

    return false;
}


