__d(
  "ListCache",
  ["Cache", "TreeMap", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this) || this),
          (n.$ListCache$p_2 = function (e, t) {
            return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
          }),
          (n.$ListCache$p_1 = t != null ? t : n.$ListCache$p_2),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.hasList = function (t) {
          if (!this.has(t)) return !1;
          var e = r("nullthrows")(this.__getRaw(t));
          return !!e.$ListCache3;
        }),
        (n.getList = function (t, n) {
          if (!this.hasList(t)) return n;
          var e = r("nullthrows")(this.__getRaw(t));
          return e.$ListCache3;
        }),
        (n.makeList = function (t) {
          var e = this.__getRaw(t);
          (e || (e = this.__getNewRawObject()),
            (e.$ListCache3 = new (r("TreeMap"))(this.$ListCache$p_1)),
            this.__setRaw(t, e));
        }),
        t
      );
    })(r("Cache"));
    l.default = e;
  },
  98,
);
