namespace Collatz {
    class Collatz {

        main(): void {
            let terminatingValue = 10;
            let cache: {[key: number]: number[]} = {};
    
            let maxNumber = 0;
            let maxLength = 0;
    
            for(let i = 1; i < terminatingValue; i++) {
    
                this.getChain(i, cache).length;
    
                // console.log(i + ":" + currentLength);
                if (cache[i].length > maxLength) {
                    maxLength = cache[i].length;
                    maxNumber = i;
                }
            }
        }
    
        getChain(num: number, cache: {[key: number]: number[]}): number[] {
            let result = [num];
    
            while (num != 1) {
                let cachedArray = cache[num];
                if (cachedArray) {
                    result = result.concat(cachedArray.slice(1));
                    break;
                }
    
                num = this.getNextNumber(num);
                result.push(num);
            }
    
            const resultLength = result.length;
            for(let i = 0; i < resultLength; i++) {
                if (cache[i] === undefined) {
                    cache[result[0]] = result.slice(i);
                }
            }
    
            return result;
        }
    
        getNextNumber(num: number): number {
            if (num % 2 === 0) {
                return num / 2
            } else {
                return 3 * num + 1;
            }
        }
    }
    
    let c = new Collatz();
    c.main();
}
