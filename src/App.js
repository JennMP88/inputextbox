import React from 'react';


class ToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            input: '',
            currentItem: ''
        }
    }
  

    clickingItem = (e, idx) => {
        // console.dir(e.target)
        const currentItem = this.state.items[idx]

        let array = [...this.state.items]; 
        let index = array.indexOf(currentItem)
        console.log(idx)
        if (idx !== -1) {
            array.splice(idx, 1);
            this.setState({ items: array });
    }}



onItems = (e) => {
    console.log(e.target.value)
    this.setState({ input: e.target.value })
}

addItems = (e) => {
    
    let copiedItems = [...this.state.items]

    copiedItems.push(this.state.input)

    this.setState({ items: copiedItems })

}


render() {
    console.log(this.state)
    return (
        <>
            <div className='row'>
                <div className='col-6'>
                    <div><h3>To do List</h3></div>
                    <input type='text' placeholder='todo' onChange={this.onItems} /><button onClick={this.addItems}>add</button>

                </div>

                <div className='col-6'>
                    <div><h3> List</h3></div>
                    <ul class="list-group">
                        {
                            this.state.items.map((items, i) => {
                                let activeFeed = " ";
                                if (items === this.state.currentItem) activeFeed = "active"
                                return <li key={i} className={"list-group-item d-flex justify-content-between align-items-center"} >{items}
                                    <span class={"badge badge-primary badge-pill " + activeFeed} onClick={(e) => this.clickingItem(e, i)} >x</span></li>
                            })
                        }
                    </ul>
                </div>
            </div>
            


        </>
    )
}

}
export default ToDo;


