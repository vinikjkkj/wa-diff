__d(
  "relay-runtime/util/RelayError",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      for (
        var r, o = arguments.length, a = new Array(o > 3 ? o - 3 : 0), i = 3;
        i < o;
        i++
      )
        a[i - 3] = arguments[i];
      var l = 0,
        s = n.replace(/%s/g, function () {
          return String(a[l++]);
        }),
        u = new Error(s),
        c = (r = a[2]) != null ? r : null,
        d = Object.assign(u, {
          name: t,
          messageFormat: n,
          messageParams: a,
          type: e,
          operation: c,
          taalOpcodes: [2, 2],
        });
      if (d.stack === void 0)
        try {
          throw d;
        } catch (e) {}
      return d;
    }
    a.exports = {
      create: function (n, r) {
        for (
          var t = arguments.length, o = new Array(t > 2 ? t - 2 : 0), a = 2;
          a < t;
          a++
        )
          o[a - 2] = arguments[a];
        return e.apply(void 0, ["error", n, r].concat(o));
      },
      createWarning: function (n, r) {
        for (
          var t = arguments.length, o = new Array(t > 2 ? t - 2 : 0), a = 2;
          a < t;
          a++
        )
          o[a - 2] = arguments[a];
        return e.apply(void 0, ["warn", n, r].concat(o));
      },
    };
  },
  null,
);
