__d(
  "Random",
  ["Alea", "ServerNonce"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 4294967296,
      l = n("ServerNonce").ServerNonce,
      s;
    function u() {
      return (s == null && (s = n("Alea")(l)), s);
    }
    var c = {
      random: (function () {
        var n = typeof Uint32Array == "function" ? new Uint32Array(1) : null,
          r = t.crypto || t.msCrypto;
        if (n != null)
          try {
            var o = r == null ? void 0 : r.getRandomValues;
            if (typeof o == "function") {
              var a = o.bind(r);
              return function () {
                try {
                  a(n);
                } catch (e) {
                  return u()();
                }
                return n[0] / e;
              };
            }
          } catch (e) {}
        return u();
      })(),
      uint32: function () {
        return Math.floor(c.random() * e);
      },
      intBetween: function (t, n) {
        return Math.floor(c.random() * (n - t + 1) + t);
      },
      coinflip: (function (e) {
        function t(t) {
          return e.apply(this, arguments);
        }
        return (
          (t.toString = function () {
            return e.toString();
          }),
          t
        );
      })(function (e) {
        return e === 0 ? !1 : e <= 1 ? !0 : c.random() * e <= 1;
      }),
    };
    a.exports = c;
  },
  null,
);
