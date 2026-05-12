import { test, expect, Page, chromium} from '@playwright/test';
/* Annontations in Playwright
only
fail
skip
fixme
slow
*/

test.only("test1", ()=>{
    console.log("this is Test 1")
})

test.only("test2", ()=>{
    console.log("this is Test 2")
})


test.skip("test3", ()=>{
    console.log("this is Test 3")
})

test.fail("test4", ()=>{
    console.log("this is Test 4")
})

test.fixme("test5", ()=>{
    console.log("this is Test 5")
})

test("test6", ()=>{
    test.slow();
    console.log("this is Test 6")
})