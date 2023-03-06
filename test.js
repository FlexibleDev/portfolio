let tArray = [ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ];
let outString = "";
arrayCycle(tArray);

function arrayCycle(data)
{
    let op_s = data[0];
    let op_1 = data[1];
    let op_2 = data[2];
    if(typeof(op_1) != "string")
    {
        if(typeof(op_1[1]) == "string" && typeof(op_1[2]) == "string")
            arrayCycle(op_1);
        else
        {
            outString += "(";
            arrayCycle(op_1);
            outString += ")";
        }
    }
    else
        outString += op_1;
    outString += " " + op_s;
    if(typeof(op_2) != "string")
    {
        if(typeof(op_2[1]) == "string" && typeof(op_2[2]) == "string")
            arrayCycle(op_1);
        else
        {
            outString += "(";
            arrayCycle(op_2);
            outString += ")";
        }
    }
    else
        outString += " " + op_2;
}