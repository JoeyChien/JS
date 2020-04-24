$(document).ready(function() {
  $('#add-img-by-id').on('click', idImgeHandler)

  $('#add-img-randomly').on('click', randomImgeHandler)

  $('#pic-destroy').on('click', picDestroyHandler)
})

function idImgeHandler(evt) { }

function randomImgeHandler(evt) { }

function picDestroyHandler(evt) { }

// other functions
function randomPicID() {}

const Logger = {
  info: function() { },
  debug: function() { },
  log: function(msg) {
    if(getSystemEnv() === 'dev' || getSystemEnv() == 'test') {
      console.log('------------------------------')
      console.log(msg)
      console.log('------------------------------')
    }
  }
}