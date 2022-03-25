let yml = `
---
  Playcanvasinit: #name of the category
    color: ff0000 #color of the category
    icon: text.svg #icon of the category
    blocks:
      - playcanvas init: #there is a block that we call it test
          shadows:
            - 1 #it has one shadow(Whenever no other value is present in the input, this value fills it)
          args:
            a: value
          function: test #the function that we call when this block is used. you can see definition of it in the next line
          code: >
            var script = pc.createScript('script');

      // initialize code called once per entity
           script.prototype.initialize = function() {

        };

// update code called every frame
        script.prototype.update = function(dt) {

        };
          messages: #The messages we want to appear on the block (we put them before inputs)
            - playcanvas init
            -
          hasReturn: false #is it a block that returns something (ellipse ones)
          tooltip: test #the tooltip of the block
`
createBlocksFromYAML(yml)
