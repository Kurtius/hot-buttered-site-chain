module.exports = {
  isActive: function(root_path, path) {
    if(root_path === path){
      return 'active';
    } else if (root_path.match(path)){
      return 'active sublevel';
    }
  }
}
