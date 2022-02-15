﻿document.addEventListener("DOMContentLoaded", wr_hours, false);
    name_month=new Array ("января","февраля","марта", "апреля","мая", "июня","июля","августа","сентября", "октября","ноября","декабря");
    name_day=new Array ("воскресенье","понедельник", "вторник","среда","четверг", "пятница","суббота");

        function wr_hours(){
                time = new Date();
                time_sec = time.getSeconds();
                time_min = time.getMinutes();
                time_hours = time.getHours();
                time_wr = ((time_hours<10)?"0":"")+time_hours;
                time_wr += ":";
                time_wr += ((time_min<10)?"0":"")+time_min;
                time_wr += ":";
                time_wr += ((time_sec<10)?"0":"")+time_sec;
                time_wr = " сегодня "+name_day[time.getDay()]+", "+time.getDate()+" "+name_month[time.getMonth()]+" "+time.getFullYear()+" г. время "+time_wr;
            var obj_hours=document.getElementById("hours");
	            obj_hours.innerHTML=time_wr;
        }
    setInterval("wr_hours();",1000);

