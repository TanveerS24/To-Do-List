import React from "react";

const RecordCard = ({record}) => {
    if(!record ){
        console.log("Fuck you");
        return null
    }

    return (
        <div>
            {record.title}
            {record.completed.toString()}
        </div>
    );
};

export default RecordCard;