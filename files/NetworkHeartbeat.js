__d(
  "NetworkHeartbeat",
  ["clearTimeout", "getSameOriginTransport", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "/nw/",
      s = 6400,
      u = 100,
      c = null,
      d = 0,
      m = null,
      p = !1;
    function _(t, n) {
      ((m = r("getSameOriginTransport")()),
        m.open("GET", e, !0),
        (m.onload = function () {
          (m && m.status === 204 && (p = !0), g(t));
        }),
        (m.onerror = function () {
          h(t, n);
        }),
        (m.ontimeout = function () {
          h(t, n);
        }),
        m.send());
    }
    function f() {
      ((m = null), (u = 100), (d = 0), r("clearTimeout")(c));
    }
    function g(e) {
      (f(), e());
    }
    function h(e, t) {
      ((c = r("setTimeout")(function () {
        y(e, t, void 0, !0);
      }, u)),
        d++,
        u < s && (u = Math.min(u * Math.pow(2, d), s)),
        t());
    }
    function y(e, t, n, r) {
      (n === void 0 &&
        (n = function () {
          return !0;
        }),
        r === void 0 && (r = !1),
        p || ((r || (m == null && n())) && _(e, t)));
    }
    function C() {
      return m != null;
    }
    ((l.maybeStartHeartbeat = y), (l.isHeartbeatPending = C));
  },
  98,
);
