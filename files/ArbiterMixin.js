__d(
  "ArbiterMixin",
  ["Arbiter", "guid"],
  function (t, n, r, o, a, i, l) {
    var e = "arbiter$" + r("guid")(),
      s = Object.prototype.hasOwnProperty,
      u = {
        _getArbiterInstance: function () {
          return s.call(this, e) ? this[e] : (this[e] = new (r("Arbiter"))());
        },
        inform: function (t, n, r) {
          return this._getArbiterInstance().inform(t, n, r);
        },
        subscribe: function (t, n, r) {
          return this._getArbiterInstance().subscribe(t, n, r);
        },
        subscribeOnce: function (t, n, r) {
          return this._getArbiterInstance().subscribeOnce(t, n, r);
        },
        unsubscribe: function (t) {
          this._getArbiterInstance().unsubscribe(t);
        },
        unsubscribeCurrentSubscription: function () {
          this._getArbiterInstance().unsubscribeCurrentSubscription();
        },
        releaseCurrentPersistentEvent: function () {
          this._getArbiterInstance().releaseCurrentPersistentEvent();
        },
        registerCallback: function (t, n) {
          return this._getArbiterInstance().registerCallback(t, n);
        },
        query: function (t) {
          return this._getArbiterInstance().query(t);
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
