function chatEmmiter(){
    EventEmmiter.call(this);
    this._peers = {};
}

chatEmmiter.prototype = Object.create(EventEmmiter.prototype);