// Disjoint set data structure in javascript
{
    class DisJointSets {
        store = new Map();

        create(val){
            this.store.set(val,new Set([val]))
            return this.store;
        }

        union(a, b){
            let keyA, keyB;
            // find a & b and fetch their host keys
            for(let key of this.store.keys()){
                if(this.store.get(key).has(a)) keyA = key;
                if(this.store.get(key).has(b)) keyB = key;
            }

            if(!keyA || !keyB || keyA === keyB) return null;

            // create new set containing items from both sets
            this.store.set(keyA, new Set([...this.store.get(keyA), ... this.store.get(keyB)]));

            // delete keyB (no need to delete keyA since we have updated it)
            this.store.delete(keyB);
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
