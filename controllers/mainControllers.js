

const mainControllers = {
    getIndex: async (req, res) => {
  
      
  
      try {
        
  
        res.render("index", { title : 'Home'});
      } catch (error) {
        res.render("index", { title : 'Home',});
        
      }
    }
  };
  
  module.exports = mainControllers;
  