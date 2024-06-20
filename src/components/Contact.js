const Contact = () => {
    return (
        <div className="text-center">
            <h1 className="text-3xl p-4 m-4 font-bold">This is Contact Page</h1>
            <form >
                <input type="text" className="p-2 m-2 border border-black" placeholder="Name.." />
                <input type="text" className="p-2 m-2 border border-black" placeholder="Type your message" />
                <button className="border border-black rounded-lg p-2">Submit</button>
            </form>
        </div>
    )
}
export default Contact;
