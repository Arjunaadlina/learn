import React from 'react'
import { getContacts } from '../utils/data'
import ItemLoop from '../components/ItemLoop'
import Navigasi from '../components/Navigasi'
import { useSearchParams } from 'react-router-dom'

export default function HomePageWrapper(){
    const [search, setSearch] = useSearchParams()
    const keyword = search.get('keyword')

    function keywordChangeHandler(keyword){
        setSearch({keyword})
    }

    return <HomePage keywordChangeHandler={keywordChangeHandler} keyword={keyword}/>
}

class HomePage extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            contact : getContacts(),
            keyword : props.keyword || ''
        }

        this.onKeywordHandler = this.onKeywordHandler.bind(this)
    }

    onKeywordHandler(keyword){
        this.setState(()=>{
            return{
                keyword,
            }
        })
        this.props.keywordChangeHandler(keyword)
    }

    render() {
        const contacts = this.state.contact.filter((contact)=> {
            return contact.nama.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            )
        })
        return (
            <div>
                <Navigasi keywordChange={this.onKeywordHandler} keyword={this.state.keyword}/>
                <ItemLoop contacts={contacts}/>
            </div>
        )
    }
}

