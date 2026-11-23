__d(
  "WAPersistedQueue",
  ["WAPersistedQueueCache", "WAPubSub"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        var r = this;
        ((this.$1 = o("WAPubSub").simplePubSub()),
          (this.$3 = e),
          (this.$4 = t),
          (this.$2 = o("WAPersistedQueueCache").makePersistedQueueCache(
            e,
            function (n) {
              return t.write(e, n).then(function (e) {
                r.$1.publish({ type: "flush" });
              });
            },
            n,
          )));
      }
      var t = e.prototype;
      return (
        (t.subscribe = function (t) {
          return this.$1.subscribe(t);
        }),
        (t.index = function (e) {
          return this.$4.index(this.$3, e);
        }),
        (t.keys = function () {
          return this.$4.keys(this.$3);
        }),
        (t.get = function (t) {
          return this.$4.get(this.$3, t);
        }),
        (t.read = function (t) {
          return this.$4.read(this.$3, t);
        }),
        (t.addAndCommit = function (t) {
          var e = this;
          return (
            this.$1.publish({ type: "new_entity" }),
            this.$4.write(this.$3, t).then(function (t) {
              return (e.$1.publish({ type: "flush" }), t);
            })
          );
        }),
        (t.commit = function () {
          return this.$2.commit();
        }),
        (t.ack = function (t) {
          return this.$4.ack(this.$3, t);
        }),
        (t.delete = function (t) {
          return this.$4.delete(this.$3, t);
        }),
        (t.clear = function () {
          return this.$4.clear(this.$3);
        }),
        (t.count = function () {
          return this.$4.count(this.$3);
        }),
        e
      );
    })();
    function s(t, n, r) {
      return new e(t, n, r);
    }
    ((l.PersistedQueue = e), (l.initPersistedQueue = s));
  },
  98,
);
