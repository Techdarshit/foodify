const Contact = () => {
     return ( <div className="justify-self-center">
          <h1 className="font-bold text-3xl justify-self-center p-4 m-4">Contact Us Page</h1>
          <form>
               <input type="text" className="border border-black m-2 p-2 rounded-md" placeholder="name"/>
               <input type="text" className="border border-black m-2 p-2 rounded-md" placeholder="message"/>
               <div className="justify-self-center">
               <button className="border border-black m-2 p-2 bg-gray-100 rounded-lg">Submit</button>
               </div>
          </form>
      </div>
     );
};

export default Contact;
