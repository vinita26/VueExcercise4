new Vue({
	el: '#excercise',
  data: {
  	effectClasses: {
    	highlight: false,
      shrink: true
    },
    float: 'float',
    userClass : '',
    isVisible : true,
    myStyle:{
    	width: '100px',
      height: '150px',
      backgroundColor: 'gray'
    },
    progressBar: {
    	width: '0px',
      backgroundColor: 'red'
      
    }
  },
  methods: {
  	startEffect: function() {
      	var vm = this;
    	setInterval(function() {
        vm.effectClasses.hightlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      },2000)
    },
    startProgress: function( ) {
    	var vs = this;
      var width = 0
      setInterval(function() {
      	width = width +10;
      	vs.progressBar.width = width + 'px'
      },500)
    }
  }
	
})
