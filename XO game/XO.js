// تحديد المتغيرات
// querySelector لمناداة عنصر ال class بالتحديث الجديد
let title = document.querySelector('.title');

// متغيرات خفية

let turn ='x';

let squares=[];

// بداية الشغل

// 1- تبديل الادوار




function game(id){

    let element = document.getElementById(id);


    if(turn==='x' && element.innerHTML==''){


        element.innerHTML='x';
    

        turn='o';

    }
    

    else if(turn==='o' && element.innerHTML==''){

        element.innerHTML='o';


        turn='x';

    }




    compare();
};





















// 2- المقارنة




function compare(){
    // for

    for(let
        i=1;
        i<10;
        i++){


        squares[i]=document.getElementById('item'+i).innerHTML;
    }
        if(squares[1]==squares[2]&& squares[2]==squares[3]  && squares[1]!=''){
            end(1,2,3);
        }
        else if (squares[4]==squares[5]&& squares[5]==squares[6]  && squares[4] !=''){
            end(4,5,6);
        }
        else if (squares[7]==squares[8]&& squares[8]==squares[9]  && squares[7] !=''){
            end(7,8,9);
        }
        else if (squares[1]==squares[4]&& squares[4]==squares[7]  && squares[1] !=''){
            end(1,4,7);
        }
        else if (squares[2]==squares[5]&& squares[5]==squares[8]  && squares[2] !=''){
            end(2,5,8);
        }
        else if (squares[3]==squares[6]&& squares[6]==squares[9]  && squares[3] !=''){
            end(3,6,6);
        }
        else if (squares[1]==squares[5]&& squares[5]==squares[9]  && squares[9] !=''){
            end(1,5,9);
        }
        else if (squares[3]==squares[5]&& squares[5]==squares[7]  && squares[5] !=''){
            end(3,5,7);
        }
     

}

function end(n1,n2,n3){
    title.innerHTML=`${squares[n1]} is winner`
    document.getElementById('item'+n1).style.backgroundColor='green';
    document.getElementById('item'+n2).style.backgroundColor='green';
    document.getElementById('item'+n3).style.backgroundColor='green';
}








function resetText() {
    document.getElementById("myInput")
}
resetText();









// 3- الرابح