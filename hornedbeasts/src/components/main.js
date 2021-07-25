import React from 'react';

import HornedBeasts from './HornedBeasts';

class Main extends React.Component {

    render() {
        return (
            <div>
                <main>

                    <HornedBeasts
                        title="Unicorn"
                        imgUrl="https://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg%22"
                        description="The unicorn is a legendary creature that has been described since antiquity as a beast with a single large, pointed, spiraling horn" />

                    <HornedBeasts
                        title="Rhino"
                        imgUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
                        description="A rhinoceros commonly abbreviated to rhino, is a member of any of the five extant species of odd-toed ungulates in the family Rhinocerotidae" />

                </main>
            </div>
        )
    }
}


export default Main;