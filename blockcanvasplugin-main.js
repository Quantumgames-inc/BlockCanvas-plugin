console.log('BlockCanvas plugin has been implemented.')
let yml = `
---
  Initilize:
    color: ff0000
    icon: text.svg
    blocks:
      - initilize:
            shadows:
              - 1
          args:
            a: statement
          function: initilize
          code: >
var script = pc.createScript('script');

// initialize code called once per entity
script.prototype.initialize = function() {

};

// update code called every frame
script.prototype.update = function(dt) {

};


          messages:
            - script setup
            -
          hasReturn: false
          tooltip: test
`
createBlocksFromYAML(yml)
