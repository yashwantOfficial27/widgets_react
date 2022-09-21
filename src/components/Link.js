import React from 'react';

const Link = ({ className, href, children}) =>{
    const onClick = (event) =>{

        if( event.metaKey || event.ctrlKey){
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href); // to change the url without reloading the page

        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
    }
    return (<a className = {className} href = {href} onClick = { onClick }>{ children }</a>)
};

export default Link;