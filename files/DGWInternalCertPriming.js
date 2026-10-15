__d(
  "DGWInternalCertPriming",
  ["Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = new Set(["gateway.internalfb.com"]),
      s = 4e3,
      u = new Map(),
      c = new Map();
    function d(e) {
      try {
        var t = new URL(e);
        return t.protocol === "wss:" && l.has(t.hostname) ? t.host : null;
      } catch (e) {
        return null;
      }
    }
    function m(e) {
      return d(e) != null;
    }
    function p(t) {
      var r = t.replace(/^wss:/i, "https:");
      return new (e || (e = n("Promise")))(function (e) {
        var t = Reflect.get(globalThis, "clearTimeout"),
          n = Reflect.get(globalThis, "setTimeout"),
          o = !1,
          a = function (r) {
            o || ((o = !0), t(i), e(r));
          },
          i = n(function () {
            return a(!1);
          }, s);
        try {
          var l = new XMLHttpRequest();
          ((l.onloadend = function () {
            return a(!0);
          }),
            l.open("GET", r),
            (l.withCredentials = !0),
            l.send());
        } catch (e) {
          a(!1);
        }
      });
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = d(e);
          if (t == null) return !1;
          var n = u.get(t);
          if (n != null) return (yield n, !1);
          var r = p(e);
          u.set(t, r);
          var o = yield r;
          return (!o && u.get(t) === r && u.delete(t), !0);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = d(e);
          if (t == null) return !1;
          var n = c.get(t);
          if (n != null) return (yield n, !1);
          var r = p(e);
          (c.set(t, r), u.set(t, r));
          var o = yield r;
          return (
            o || (c.get(t) === r && c.delete(t), u.get(t) === r && u.delete(t)),
            !0
          );
        })),
        h.apply(this, arguments)
      );
    }
    ((i.shouldPrimeInternalCert = m),
      (i.primeInternalCertOnce = _),
      (i.primeInternalCertForRetryOnce = g));
  },
  66,
);
