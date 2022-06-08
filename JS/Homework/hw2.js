function checkName() {
    let name = document.getElementById("idtxtname").value;
    let namelnth = name.length;
    let namsp = document.getElementById("idnamesp");
    flag1 = false; flag2 = false; flag3 = false;
    if (name == " ")
        namsp.innerHTML = "名字不可為空白";
    else if (namelnth >= 2) {
        for (var i = 0; i < namelnth; i++) {
            let ch = name.charCodeAt(i);
            if (ch >= 0x4e00 && ch <= 0x9fff) {
                flag1 = true;
            }
            else {
                flag1 = false;
                namsp.innerHTML = "請輸入中文";
            }
        }
        flag2 = true;
        if (flag1 && flag2)
            namsp.innerHTML = "成功!";
    }
    else
        namsp.innerHTML = "請輸入兩個字以上";
}
function checkPwd() {
    //取得idPwd元素
    let pwd = document.getElementById("idPwd");
    console.log(typeof pwd);
    //取得idPwd元素值
    let pwdoval = pwd.value;
    console.log(typeof pwdoval);
    console.log(pwdoval);
    let pwdlet = pwdoval.length;
    let sp = document.getElementById("idsp")
    flag1 = false; flag2 = false; flag3 = false;
    //判斷元素值是否為空白，密碼長度是否大於6
    //如果長度是否大於6，判斷是否包含字母、數字、特殊符號
    if (pwdoval == " ")
        sp.innerHTML = "請勿輸入空白";
    else if (pwdlet >= 6) {
        for (var i = 0; i < pwdlet; i++) {
            let ch = pwdoval.charAt(i).toUpperCase();
            console.log(ch);
            if (ch >= "A" && ch <= "Z")
                flag1 = true;
            else if (ch >= "0" && ch <= "9")
                flag2 = true;
            else if (ch.lastIndexOf(`!@#$%^&*`))
                flag3 = true;
            if (flag1 && flag2 && flag3) break;
        }
        if (flag1 && flag2 && flag3)
            sp.innerHTML = `<span style="color:green">correct</span>`;
        else
            sp.innerHTML = `<span style="color:red">incorrect</span>`;
    }
    else {
        sp.innerHTML = `<span style="color:red">請輸入超過6個字</span>`
    }
}
function checkdate() {
    let txtdate = document.getElementById("txtdate").value;
    let datesp = document.getElementById("iddatesp");
    if (!txtdate.match(/^\d{4}\/\d{1,2}\/\d{1,2}$/)) {
        datesp.innerHTML = `<span style="color:red">請輸入正確日期格式</span>`;
        return;
    }
    let date = txtdate.split('/');

    let d = new Date(txtdate);
    let m = d.getMonth() + 1;
    let dt = d.getDate();
    let y = d.getFullYear();

    if (date[0] != y || date[1] != m || date[2] != dt) {
        datesp.innerHTML = `<span style="color:red">請輸入正確日期格式</span>`;
    }
    else {
        datesp.innerHTML = `<span style="color:green">成功</span>`;
    }
    //let datesp = document.getElementById("iddatesp");
    //flag1 = false; flag2 = false; flag3 = false;

    //if (date[0].length >= 4 && date[0] < y) {
    //    flage1 = true;
    //}
    //else if (date[1].length >= 2 && date[1] < m) {
    //    flage2 = true;
    //}
    //else if (date[2].length >= 2 && date[2] < dt) {
    //    flage3 = true;
    //}
    //else if (flage1 == true && flage2== true && flage3==true )
    //    datesp.innerHTML = "成功!"
    //else datesp.innerHTML="請輸入正確日期格式"
}