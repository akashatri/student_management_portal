$(document).ready(function(){
	
	table();
}); 
var fl=1;
var dele=0;
var edi=1;
var q=0;
var save1=[];
var save2=[];
var save3=[];
var save4=[];
var sv=0;



function hide_form()
{
    fl++;
    document.getElementById("student").style.display="none";
} 


function hide_form_input()
{
    document.getElementById("student").style.display="block";
    document.getElementById("n").style.display="none";
    document.getElementById("r").style.display="none";
    document.getElementById("r").style.marginLeft="0%";
    document.getElementById("y").style.display="none";
    document.getElementById("s").style.display="none";
}


function show_form()
{
   
    document.getElementById("student").style.display="block";
    document.getElementById("n").style.display="inline";
    document.getElementById("r").style.display="inline";
    document.getElementById("r").style.marginLeft="0%";
    document.getElementById("y").style.display="inline";
    document.getElementById("s").style.display="inline";

}
function button_icon()
{
    document.getElementById("bt").style.display="none";
    document.getElementById("bt1").style.display="none";
    document.getElementById("bt2").style.display="none";
    document.getElementById("bt3").style.display="none";
    document.getElementById("bt4").style.display="none";
    document.getElementById("bt5").style.display="none";
    document.getElementById("bt6").style.display="none";
}



function name_val()
{
    let letter = /[a-z A-Z]+\s[a-z A-Z]+/;;
    let d=document.student.name;
    let name=document.student.name;
        if(!(d.value.match(letter)))
        {
            alert("name should not be alpha numeric !!\n NAME:AKASH ATRI");
            document.student.name.focus() ;
            return false;
        }
        else{
                if (name.value.length < 3 || name.value.length > 10)
                {
                    alert("name must b/w exactly 3-10 characters");
                    document.student.name.focus() ;
                    return false;
                    
                }
            }
}


/*arrow function to check value is number or not*/
function roll_val()
{
    let x = document.getElementById("rollno").value;
    const f= x =>(x%1) ===0 ? 1:0;

        if(!f(x))
        {
            alert( "Rollno should be a numeric !!" );
            document.student.rollno.focus() ;
            return false;
        }
}

function year_val()
{
    let year=document.student.year;
    let y = document.getElementById("year").value;
    const f= y =>(y%1) ===0 ? 1:0;
        if(f(y))
        {
            if (year.value.length != 4) 
            {
                alert("year must be exactly 4 characters");
                document.student.year.focus() ;
                return false; 
            }
        }
        else
        {
            alert( "year should be a numeric !!" );
            document.student.year.focus() ;
            return false;
        }
    
}


function stream_val()
{
    let letters = /^[a-zA-Z]+$/;
    let s=document.student.stream;
        if(!(s.value.match(letters)))
        {
            alert("stream should not be alpha numeric !!");
            return false;
        
        }
    
}

function form_validation()
{
    let x = document.getElementById("rollno").value;
    let n = document.getElementById("name").value;
    let y = document.getElementById("year").value;
    let s = document.getElementById("stream").value;
        if(name_val()==0)
        return false;

        if(roll_val()==0)
        return false;

        if(year_val()==0)
        return false;
        
        if(stream_val()==0)
        return false;

        if( document.student.name.value == "" )
        {
            alert( "Please provide your Name!" );
            document.student.name.focus() ;
            return false;
        }

        if( document.student.rollno.value == "" )
        {
            alert( "Please provide your RollNo!" );
            document.student.rollno.focus() ;
            return false;
        }

        if( document.student.year.value == "" )
        {
            alert( "Please provide your passout year!" );
            document.student.year.focus() ;
            return false;
        }

        if( document.student.stream.value == "" )
        {
            alert( "Please provide your Stream!" );
            document.student.stream.focus() ;
            return false;
        }

    return true;
}




function register()
{	
    q=1;
    button_icon();
    document.getElementById("bt2").style.display="inline";

        if(fl%2==0)
        {//document.body.style.backgroundColor="#F8F8FF";
        document.getElementById("student").style.backgroundColor="#F0F0F0";
        document.getElementById("student").style.marginLeft="5%";
        document.getElementById("student").style.marginRight="5%";
        document.getElementById("bt6").style.display="inline";
        document.getElementById("r").style.display="inline";
            show_form();
            fl++;
        }
       else
        {
            document.getElementById("student").style.backgroundColor="#F0F0F0";
            document.getElementById("student").style.marginLeft="5%";
            document.getElementById("student").style.marginRight="5%";
            document.getElementById("bt6").style.display="inline";
            document.getElementById("r").style.display="inline";
           hide_form();
         //  document.body.style.backgroundColor="white";
        }
        
}



function del1()
{
    q=2;
     if(dele%2==0)
        {
            show_form();
            hide_form_input();
            button_icon();
            document.getElementById("student").style.display="#EDCDC2";
            document.getElementById("student").style.marginLeft="25%";
            document.getElementById("student").style.marginRight="25%";
            document.getElementById("r").style.display="inline";
            document.getElementById("bt").style.display="inline";
            document.getElementById("bt1").style.display="inline";
            document.getElementById("bt3").style.display="inline";
            
        }
        else
        {
            hide_form_input();
            hide_form();
            document.getElementById("student").style.backgroundColor="#EDCDC2";
            document.getElementById("student").style.marginLeft="5%";
            document.getElementById("student").style.marginRight="5%";
            document.getElementById("bt").style.display="inline";
            document.getElementById("bt3").style.display="inline";
            document.getElementById("bt6").style.display="none";
        }
    dele++;
}




function edit1()
{
    q=3;
    edi++;
        if(edi%2==0)
        {
            button_icon();
            hide_form_input();
            document.getElementById("student").style.backgroundColor="#C1E1A6";
            document.getElementById("student").style.marginLeft="25%";
            document.getElementById("student").style.marginRight="25%";
            document.getElementById("bt6").style.display="inline";
            document.getElementById("r").style.display="inline";
        }
        else{
        hide_form();
        document.getElementById("student").style.backgroundColor="#F0F0F0";
        document.getElementById("student").style.marginLeft="5%";
        document.getElementById("student").style.marginRight="5%";
        }
}


/* function is used to check the rollno is present */
function getData()
{
        if( document.student.rollno.value == "" )
        {
        alert( "Please provide your RollNo!" );
        document.student.rollno.focus() ;
        return false;
        }
 let rol=document.getElementById("rollno").value;
 check(rol);
  
}

/*for of loop to check thhe rollno exsist or not*/

function check(rol)
{
     show_form();
     button_icon();
     document.getElementById("bt4").style.display="inline";
     document.getElementById("student").style.backgroundColor="#F7CAC9";
     document.getElementById("student").style.marginLeft="5%";
     document.getElementById("student").style.marginRight="5%";
     document.getElementById("bt6").style.display="inline";
     document.getElementById("r").style.display="inline";
        let id;
        let flag=0;
        let r=rol;
       const len=document.getElementById("list").rows.length;
       let a =document.getElementsByTagName(`tr`);
       
    for( let i of a)
    {
        let c=i.childNodes[1].innerHTML;
       
        if(r==c)
        {
            flag=1;
            id=i;
           
            document.getElementById("name").value= i.childNodes[0].innerHTML;
            document.getElementById("rollno").value= i.childNodes[1].innerHTML;
            document.getElementById("year").value= i.childNodes[2].innerHTML;
            document.getElementById("stream").value= i.childNodes[3].innerHTML;
        }
    }

}

/*function will insert the row in database and checks if the rollno is not present */

function AddData() 
{
    let r,k,count=0,i,flag=0;
    let arr=[];
    let x = document.getElementById("rollno").value;
    let y = document.getElementById("name").value;
    let z = document.getElementById("year").value;
    let w = document.getElementById("stream").value;
    //form_validation();
   
    if ((parseInt(x) != (x)) && (y == parseInt(y))) 
    {
            alert("Wrong Value Entered");
    } 
    if(form_validation())
    {
	
	var len=document.getElementById("list").rows.length;
	//window.alert("len: "+len);
	i=len;
	//window.alert("i: "+i);
        if(i)
        {
            for(let j=1;j<i;j++)
            {
            r=document.getElementById("list").rows[j].cells;
            
            arr[j]=r[1].innerHTML;
            //window.alert("arr[j]: "+arr[j]);
            }
                for(let j=0;j<=i;j++)
                {
                
                    if(arr[j]==x)
                    {
                        window.alert("rollno already exist please try to enter unique rollno!!");
                        flag=1;
                    
                    }
                    
                }
        }
	//window.alert("count :"+ count);
	
        if(i>1)
        {
        
            if(flag==0)
            {
                let rows = "";
                let name = document.getElementById("name").value;
                let roll = document.getElementById("rollno").value;
                let year = document.getElementById("year").value;
                let s = document.getElementById("stream").value;
               
                rows += "<td>" + name + "</td><td>" + roll + "</td><td>" + year + "</td><td>" + s + "</td>";
                let tbody = document.querySelector("#list tbody");
                let tr = document.createElement("tr");
                tr.innerHTML = rows;
                tbody.appendChild(tr);

              let checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("name", "dd");
              
                checkbox.checked = false; 
                let tdSelect = document.createElement("td");
                tdSelect.appendChild(checkbox);
                tr.appendChild(tdSelect);
                tbody.appendChild(tr);
                flag=0;
            }
            else
            flag=0;		
            
        
    count=0;
        
        }
        else
        {
            let rows = "";
            let name = document.getElementById("name").value;
            
            
            let roll = document.getElementById("rollno").value;
            let year = document.getElementById("year").value;
            let s = document.getElementById("stream").value;
            rows += "<td>" + name + "</td><td>" + roll + "</td><td>" + year + "</td><td>" + s + "</td>";
            let tbody = document.querySelector("#list tbody");
            let tr = document.createElement("tr");

            tr.innerHTML = rows;
            tbody.appendChild(tr);
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("name", "dd");
         
            checkbox.checked = false; 
            let tdSelect = document.createElement("td");
            tdSelect.appendChild(checkbox);
            tr.appendChild(tdSelect);
            tbody.appendChild(tr);
        }
    }
    //document.student.reset();
}

/* for of loop to delete multiple selected rows
*delcheck() will delete multiple rows
*/

function delcheck()
{ 
    let count=1;
    let c=document.getElementsByName("dd");
    let len=document.getElementById("list").rows.length;
   // console.log("c :"+c.lengh);
    while(len--)
    {count=1;
    for(let i of c)
    {
       
       // console.log("i:"+i.checked);
       
            if(i.checked)
            {
            document.getElementById("list").deleteRow(count);
           
            }

         
        
count++;
    }
}
    
}
/*to delete particular rows
*used for of loop for iteration
*/
function del()
{
  
    let id,flag=0;
    let r=document.getElementById("rollno").value;
    let len=document.getElementById("list").rows.length;
      
        let i=0;
        let a=document.getElementsByTagName(`tr`);
        for(let q of a)
        {
      
        let c=q.childNodes[1].innerHTML;
        console.log("c roll: "+c);
        let roll=c;
            if(r==roll)
            {
                flag=1;
                id=i;
                console.log("id: "+i);
            }
            i++;
        }
       if(flag==1)
        {
            if(id>0)
            {
                var savingd=document.getElementById("list").rows[id].cells;
                save1[sv]=savingd[0].innerHTML;
                //console.log(save1[sv]);
                save2[sv]=savingd[1].innerHTML;
                //console.log(save1[sv]);
                save3[sv]=savingd[2].innerHTML;
                //console.log(save1[sv]);
                save4[sv]=savingd[3].innerHTML;
            // console.log(save1[sv]);
                sv++;
                document.getElementById("list").deleteRow(id);
            }
        }
        else
        {
        window.alert("invalid record");
        }
}





/* to edit particular recored
* used "for of" loop for iteration
*/

function editData()
{
   show_form();
   if(form_validation())
{
    let id,flag=0;
    let r=document.getElementById("rollno").value;
    let len=document.getElementById("list").rows.length;
    let i=0;
    let a=document.getElementsByTagName(`tr`);
        for(let q of a)
        {
            let c=q.childNodes[1].innerHTML;
            let roll=c;
                if(r==roll)
                {
                flag=1;
                id=i;
                }
          i++;      
        }

    let n = document.getElementById("name").value;
   
    let y = document.getElementById("year").value;
    let s = document.getElementById("stream").value;
        if(flag==1)
        {
           flag=0;
                if(id>0)
                {
                var x = document.getElementById("list").rows[id].cells;
                x[0].innerHTML = n;
                x[1].innerHTML = r;
                x[2].innerHTML = y;
                x[3].innerHTML = s;
                }
        }
	   else
	      window.alert("Invalid record!!");
    }

	edit1();
 
}
/* undo function will return delete row*/
function undo()
{  
    let rows="";
    let len=document.getElementById("list").rows.length;
    //console.log("len : "+len);

     //console.log("sv : "+sv);

        for(let i=sv-1;i>=0;i--)
        {
            console.log("i :"+i);
            rows += "<td>" + save1[i] + "</td><td>" + save2[i] + "</td><td>" +save3[i] + "</td><td>" + save4[i] + "</td>";
            let tbody = document.querySelector("#list tbody");
            let tr = document.createElement("tr");
            tr.innerHTML = rows;
            tbody.appendChild(tr);
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("name", "dd");
          
            checkbox.checked = false; 
            let tdSelect = document.createElement("td");
            tdSelect.appendChild(checkbox);
            tr.appendChild(tdSelect);
            tbody.appendChild(tr);
            rows=""; 
        }
        sv=0;
}



/* delete all the rows of table  */
function flush()
{
     let id,flag=0;
     let len=document.getElementById("list").rows.length;

   // console.log("len : "+len);


        for(let i=len-1;i>=1;i--)
        {
            //console.log("i :"+i);
            let savingd=document.getElementById("list").rows[i].cells;
            save1[sv]=savingd[0].innerHTML;
            save2[sv]=savingd[1].innerHTML;
            save3[sv]=savingd[2].innerHTML;
            save4[sv]=savingd[3].innerHTML;
            sv++;
            //console.log("sv : "+sv);
            document.getElementById("list").deleteRow(i);
        }

}
function table()
{
    let a = [{
    name: 'AKASH ATRI',
    roll: '1510991042',
    year: '2019',
    stream: 'CSE'
},
{
    name: 'AIRISH GUPTA',
    roll: '1510991034',
    year: '2019',
    stream: 'CSE'
},
{
    name: 'ADITYA SANGHI',
    roll: '1510991031',
    year: '2019',
    stream: 'CSE'
},

];
let rows = "";
    for(let i of a)
    {
    rows += "<td>" + i.name + "</td><td>" + i.roll + "</td><td>" + i.year + "</td><td>" + i.stream + "</td>";
    let tbody = document.querySelector("#list tbody");
    let tr = document.createElement("tr");

    tr.innerHTML = rows;
    tbody.appendChild(tr);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "dd");
 
    checkbox.checked = false; 
    let tdSelect = document.createElement("td");
    tdSelect.appendChild(checkbox);
    tr.appendChild(tdSelect);
    tbody.appendChild(tr);
    rows="";
    }
}
