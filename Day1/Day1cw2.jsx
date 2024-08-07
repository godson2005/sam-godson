function Who()
{
    let m={name:"Madras"};
    let k=m;
    k.name="chennai";
    let a=["a","e","i","o","u"];
    let v=a;
    a.push("u");
    alert("check the Concole Output");
    console.log(k);
    console.log(m);
    console.log(v);
    console.log(a);
}
function D()
{
    return(
        <div>
            <button onClick={Who}>Click</button>
        </div>
    )
}export default D;