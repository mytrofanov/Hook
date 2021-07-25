import React, {useState} from "react";

function Tasks() {

    //     const expand = (str) => {
    //     let word = str.toLowerCase();
    //     return  word === word.split('').reverse().join();
    //
    //        }
    //
    // console.log(expand ('London'));

    const reverse = () => {
        let [text, textChange] = useState ('text');


        let changedText = text.toLowerCase().split('').reverse().join();
        if (text==changedText) {
            return ({text} + 'его перевернутое значения' + {changedText} +'Идинаковые ')
        } else return ({text}+ 'его перевернутое значения' +{changedText}+'отличаются')
    }

return (
    <div>
        Задача перевернуть и сравнить слово
        <div>
        <input type="text" onSubmit={event => textChange()} />    </div>
    </div>
)

}

export default Tasks;