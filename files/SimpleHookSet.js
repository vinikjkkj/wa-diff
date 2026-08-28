__d(
  "SimpleHookSet",
  ["SimpleHook"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.add = function (n, r) {
          return this.hasCallback(n) ? n : e.prototype.add.call(this, n, r);
        }),
        t
      );
    })(o("SimpleHook").SimpleHook);
    l.SimpleHookSet = e;
  },
  98,
);
