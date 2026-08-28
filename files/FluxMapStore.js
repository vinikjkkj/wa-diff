__d(
  "FluxMapStore",
  ["invariant", "FluxReduceStore", "immutable"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getInitialState = function () {
          return r("immutable").Map();
        }),
        (n.at = function (t) {
          return (this.has(t) || s(0, 465, t), this.get(t));
        }),
        (n.has = function (t) {
          return this.getState().has(t);
        }),
        (n.get = function (t) {
          return this.getState().get(t);
        }),
        (n.getAll = function (t, n) {
          var e = this,
            o = r("immutable").Set(t),
            a = n || r("immutable").Map();
          return a.withMutations(function (t) {
            for (var n of a) {
              var r = n[0];
              (!o.has(r) || !e.has(r)) && t.delete(r);
            }
            for (var i of o) e.has(i) && t.set(i, e.at(i));
          });
        }),
        t
      );
    })(r("FluxReduceStore"));
    ((e.__moduleID = i.id), (l.default = e));
  },
  98,
);
