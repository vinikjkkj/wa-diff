__d(
  "MWebOTP",
  ["Promise", "Run", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = null,
      c = null,
      d = 0,
      m = null,
      p = {
        fetch: function (t) {
          return navigator.credentials.get(t);
        },
      };
    function _() {
      return (
        "OTPCredential" in window &&
        !!navigator.credentials &&
        typeof navigator.credentials.get == "function" &&
        "AbortController" in window
      );
    }
    function f() {
      s && (d++, s.abort(), (s = null));
    }
    function g() {
      (c && (c.remove(), (c = null)), (c = o("Run").onUnload(f)));
    }
    g();
    function h() {
      return u;
    }
    function y() {
      return !!s;
    }
    function C(e) {
      if (((u = null), !_())) return !1;
      if (((m = e), y())) return !0;
      var t = !1;
      d++;
      var n = d,
        o = function (r, o) {
          if (!(t || n !== d || !s)) {
            ((t = !0), (s = null));
            var e = m;
            if (e) {
              if (o || !r) return (e(!1, null), !1);
              var a = r.code;
              if (a == null || !a.length) {
                e(!1, null);
                return;
              }
              return ((u = String(a)), e(!0, u), !0);
            }
          }
        };
      s = new AbortController();
      var a = p.fetch({ otp: { transport: ["sms"] }, signal: s.signal });
      return (
        r("promiseDone")(
          a,
          function (e) {
            return o(e, null);
          },
          function (e) {
            return o(null, e);
          },
        ),
        !0
      );
    }
    ((l.isSupported = _),
      (l.abort = f),
      (l.getLastFetchedCode = h),
      (l.fetchCode = C));
  },
  98,
);
