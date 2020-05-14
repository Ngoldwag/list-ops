//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list) {
    this.values=list ? list:[];
  }

  append(whateverWeWant) {
    this.values = [...this.values,...whateverWeWant.values];
    return this;
  }

  concat(listOfList) {
    let flat_list = new List;
    for (let a =0;a<listOfList.values.length;a++){
            flat_list.values=[...flat_list.values,...listOfList.values[a].values];
          }
          this.values=[this.values,...flat_list.values];
    return flat_list;
        }

  
  filter(callback) {
    let filtered = new List;
    for (let i in this.values) {
    if (callback(this.values[i])) { 
      filtered.values.push(this.values[i]);
      console.log(this);

   } 
}return filtered;}

  map() {
    throw new Error("Remove this statement and implement this function");
  }

  length() {
    throw new Error("Remove this statement and implement this function");
  }

  foldl() {
    throw new Error("Remove this statement and implement this function");
  }

  foldr() {
    throw new Error("Remove this statement and implement this function");
  }

  reverse() {
    throw new Error("Remove this statement and implement this function");
  }
}
