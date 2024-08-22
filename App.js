{/* <div id="parent">
    <div id="child">
        <h1>h1 tag</h1>
    </div>

</div> */}

const newdiv = React.createElement('div',{id:'parent'},
    [React.createElement('div',{id:'child1'},React.createElement('h1',{},'h1 tag')), 
           React.createElement('div',{id:'child2'},React.createElement('h2',{},'h2 tag'))
    ]
)
const root = ReactDOM.createRoot(document.getElementById('base'))
root.render(newdiv)

// const heading = React.createElement('h1',{
//     id:"heading", xyz:"abc"
// },'hello world using react js file');
// console.log('heading:',heading)
// const root = ReactDOM.createRoot(document.getElementById('base'));
// root.render(heading)
