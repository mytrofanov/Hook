import React from "react";

function Tasks() {

        const expand = (str) => {
        let word = str.toLowerCase();
        return  word === word.split('').reverse().join();

           }

    console.log(expand ('London'));

return (
    <div>
        Задача перевернуть и сравнить слово
        <div>
        <input type="text" onSubmit={e => expand(Text(e.target.value))} />    </div>
    </div>
)

}

export default Tasks;