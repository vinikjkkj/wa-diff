__d(
  "DGWH2SessionPriming",
  ["Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = "gateway.",
      s = "gateway.internalfb.com",
      u = 2e3,
      c = new Map(),
      d = new Map();
    function m(e) {
      try {
        var t = new URL(e),
          n = t.hostname.replace(/\.$/, "");
        return t.protocol === "wss:" && n.startsWith(l) && n !== s
          ? "https://" + t.host
          : null;
      } catch (e) {
        return null;
      }
    }
    function p(e) {
      return m(e) != null;
    }
    function _(t) {
      var r = c.get(t);
      if (r != null) return r;
      if (typeof globalThis.fetch != "function")
        return (e || (e = n("Promise"))).resolve(!1);
      var o;
      try {
        o = globalThis
          .fetch(t + "/", {
            credentials: "include",
            method: "HEAD",
            mode: "no-cors",
          })
          .then(
            function () {
              return !0;
            },
            function () {
              return !1;
            },
          )
          .then(function (e) {
            return (c.get(t) === o && c.delete(t), e);
          });
      } catch (t) {
        return (e || (e = n("Promise"))).resolve(!1);
      }
      return (c.set(t, o), o);
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = m(t);
          if (r == null || d.has(r)) return !1;
          var o = Reflect.get(globalThis, "clearTimeout"),
            a = Reflect.get(globalThis, "setTimeout"),
            i,
            l = new (e || (e = n("Promise")))(function (e) {
              i = a(function () {
                return e(!1);
              }, u);
            });
          try {
            return yield (e || (e = n("Promise"))).race([_(r), l]);
          } finally {
            i != null && o(i);
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t,
        n = m(e);
      if (n == null) return function () {};
      d.set(n, ((t = d.get(n)) != null ? t : 0) + 1);
      var r = !1;
      return function () {
        var e;
        if (!r) {
          r = !0;
          var t = ((e = d.get(n)) != null ? e : 1) - 1;
          t > 0 ? d.set(n, t) : d.delete(n);
        }
      };
    }
    ((i.shouldPrimeH2Session = p),
      (i.primeH2Session = f),
      (i.trackOpenPrimedTransport = h));
  },
  66,
);
