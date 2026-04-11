__d(
  "fb-error-lite",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      PREVIOUS_FILE: 1,
      PREVIOUS_FRAME: 2,
      PREVIOUS_DIR: 3,
      FORCED_KEY: 4,
    };
    function l(t) {
      var n = new Error(t);
      if (n.stack === void 0)
        try {
          throw n;
        } catch (e) {}
      n.messageFormat = t;
      for (
        var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1;
        a < r;
        a++
      )
        o[a - 1] = arguments[a];
      return (
        (n.messageParams = o.map(function (e) {
          return String(e);
        })),
        (n.taalOpcodes = [e.PREVIOUS_FRAME]),
        n
      );
    }
    var s = { err: l, TAALOpcode: e };
    i.default = s;
  },
  66,
);
