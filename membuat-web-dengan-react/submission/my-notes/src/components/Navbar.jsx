/* eslint-disable react/prop-types */
const Navbar = ({onSearch}) => {
    const search = (value) => {
      onSearch(value)
    }
    return (
      <div className="navbar">
        <p className='text-2xl font-bold text-danger'>Notes</p>
        <div className="w-6">
            <input type="text" name="search" placeholder="Ketikan judul..." id="search" onChange={(e) => search(e.target.value)}/>
        </div>
       </div>
    )
}
export default Navbar