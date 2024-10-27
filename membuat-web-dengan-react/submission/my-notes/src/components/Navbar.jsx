const Navbar = () => {
    return (
      <div className="navbar">
        <p className='text-2xl font-bold text-danger'>Notes</p>
        <div className="w-6">
            <input type="text" name="search" id="search" />
        </div>
       </div>
    )
}
export default Navbar