import './App.css';
import { AccessTimeFilled } from '@fluentui/react-icons';
import React from "react";

function App() {
    return (
        <>
            {/* this should be possible to control+space import, it works when I add ChevronDownRegular to the imports of @fluentui/react-icons manually */}
            <ChevronDownRegular/>
        </>
    );
}

export default App;
