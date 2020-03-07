import React from "react";
import copy from "../utils/copy";
import { FiZap } from "react-icons/fi";

const { threeDotsLeft, threeDotsRight } = copy.Separator;

const CustomSeparator = () => {
    return(
        <div className="separator">
            {threeDotsLeft}<FiZap size={25} />{threeDotsRight}
        </div>
    );
}

export default CustomSeparator;