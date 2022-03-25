let yml = `
---
  Test: #name of the category
    color: ff0000 #color of the category
    icon: text.svg #icon of the category
    blocks:
      - test: #there is a block that we call it test
          shadows:
            - 1 #it has one shadow(Whenever no other value is present in the input, this value fills it)
          args:
            a: value
          function: test #the function that we call when this block is used. you can see definition of it in the next line
          code: >
            func test(a, b) {
              print(a)
              b!()
            }
          messages: #The messages we want to appear on the block (we put them before inputs)
            - test
            -
          hasReturn: false #is it a block that returns something (ellipse ones)
          tooltip: test #the tooltip of the block
`
createBlocksFromYAML(yml)
