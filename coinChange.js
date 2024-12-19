function coinChange(coins, target) {

    function helper(target, index) {

        if (target === 0) return 1;
        
        if (target < 0) return 0;

        if (index === coins.length) return 0;

        const add = helper(target - coins[index], index);
        const remove = helper(target, index + 1);

        return add + remove;
    }

    return helper(target, 0); 
}

const coins = [5, 2, 4];
const target = 13;
console.log(coinChange(coins, target));  
