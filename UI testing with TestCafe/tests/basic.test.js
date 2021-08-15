import { Selector } from 'testcafe'

// prettier-ignore 
fixture `Cetting started with TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`

    test('Start the TestCafe practice page', async t=> {
        
        // here goes the testCafe  code
        await t.typeText('#developer-name',"Nick Nikoloff") 
        await t.click('#submit-button')
    })