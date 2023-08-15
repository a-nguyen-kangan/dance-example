class DanceStyle {
  
  // attributes which describe the object
  name:string;
  bronzeMedals: string[] = [];
  silverMedals: string[] = [];
  goldMedals: string[] = [];
  starMedals: string[] = [];
  
  // creates the object with some starting data
  constructor(name_:string) {
    this.name = name_;
  }

  // operations
  add(name:string, medal:string) {
    
    switch(medal.toLowerCase()) {
      case("bronze"):
        this.bronzeMedals.push(name);
        break;

      case("silver"):
        this.silverMedals.push(name);
        break;

      case("gold"):
        this.goldMedals.push(name);
        break;

      case("star"):
        this.starMedals.push(name);
        break;
    }
  }

  addMedal(name:string, medal:string) {
    //return currentList.includes(name) ? true : false;

    // if(this.bronzeMedals.includes(name) || this.silverMedals.includes(name) || this.goldMedals.includes(name) || this.starMedals.includes(name)) {
    //   return true;
    // } else {
    //   return false;
    // }

    let currentMedal = '';
   
    // find name's current medal
    if(this.starMedals.includes(name)) {
      currentMedal = "star";
    } else if(this.goldMedals.includes(name)) {
      currentMedal = "gold";
    } else if(this.silverMedals.includes(name)) {
      currentMedal = "silver";
    } else if(this.bronzeMedals.includes(name)) {
      currentMedal = "bronze";
    } else {
      currentMedal = "no medal";
    }

    if(currentMedal == "bronze" && medal != "bronze") {
      this.add(name, medal);
      this.remove(name, "bronze");
      console.log("Bye Jane");
    }

    // name has no medal
    if(currentMedal == "no medal") {
      this.add(name, medal);
    }


    if(currentMedal == medal || currentMedal == "star") {
      // do nothing
    }

    

  }

  removeName(name, medal) {
    
    switch(medal.toLowerCase()) {
      case("bronze"):
        this.bronzeMedals = this.remove(name, this.bronzeMedals);
        break;

      case("silver"):
        this.silverMedals = this.remove(name, this.silverMedals);
        break;

      case("gold"):
        this.goldMedals = this.remove(name, this.goldMedals);
        break;

      case("star"):
        this.starMedals = this.remove(name, this.starMedals);
        break;
    }
  }

  remove(name, array) {
    const index = array.indexOf(name);
    if (index > -1) { // only splice array when item is found
      array.splice(index, 1); // 2nd parameter means remove one item only
    }
    return array;
  }

}

export { DanceStyle };