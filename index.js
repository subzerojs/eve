class Eve {
  constructor (){
     this.listeners =  {};
  }
 
  on(event, handler) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }
    this.listeners[event].push(handler)
  }
  off(event) {
    delete this.listeners[event]
  }
  emit(event, ...args) {
    if (Array.isArray(this.listeners[event])) {
      this.listeners[eve].forEach(handler => handler(...args))
    } else {
      console.log(`Event [ ${event} ] not found`)
    }
  }
}

export default Eve;
