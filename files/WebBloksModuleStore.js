__d(
  "WebBloksModuleStore",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e) {
        this.modules = new Map(e != null ? Object.entries(e) : []);
      }
      var t = e.prototype;
      return (
        (t.keys = function () {
          return Array.from(this.modules.keys());
        }),
        (t.has = function (t) {
          return this.modules.has(t);
        }),
        (t.set = function (t, n) {
          this.has(t) || this.modules.set(t, n);
        }),
        (t.get = function (t) {
          var e;
          return (e = this.modules.get(t)) != null ? e : null;
        }),
        (t.toObject = function () {
          return Object.fromEntries(this.modules);
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
