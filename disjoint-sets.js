// Disjoint set data structure in javascript using Map & Set
{
    class DisJointSets {
        store = new Map();

        create(val){
            this.store.set(val,new Set([val]))
            return this.store;
        }

        union(a, b){
            let setA, setB;
            // find a & b and fetch their host sets
            for(let key of this.store.keys()){
                if(this.store.get(key).has(a)) setA = this.store.get(key);
                if(this.store.get(key).has(b)) setB = this.store.get(key);
            }
            if(!setA || !setB || setA === setB) return null;

            // create new set containing items from both sets
            this.store.set(a, new Set([...setA, ...setB]));

            // delete set b (no need to delete a since we have updated it)
            this.store.delete(b);

            return this.store;
             
        }

        checkSet(a, b){
            // check if both items exists in same set
            for(let key of this.store.keys()){
                let set = this.store.get(key);
                if(set.has(a) && set.has(b)){
                    return true;
                }
            }
            return false;
        }
    }

    let dset = new DisJointSets();
    dset.create(1)
    dset.create(2)
    dset.create(3)
    dset.create(4)
    dset.union(1,2)
    dset.union(4,1)
    dset.checkSet(1,3)
}
