function ConvertArrayToInt(Sequences)
{
    for(let i = 0; i < Sequences.length; i++)
    {
        Sequences[i] = parseInt(Sequences[i]);
    }
}

function Sorting()
{
    let TextArea = document.getElementById("Input");
    let Input = TextArea.value;
    TextArea.value = "";
    let Sequences = Input.split(" ");
    ConvertArrayToInt(Sequences);
    let out = document.getElementById("Output");
    Sequences.sort(function(a, b){return a - b});
    out.innerHTML = Sequences.join(" ");
}

