__d(
  "WAWebVoipCallStartUnifiedSessionStore",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebBackendApi",
    "WAWebVoipCallStateUtils",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 16,
      c = 2e3,
      d = new Map(),
      m = null;
    function p(e, t, n) {
      var r = n == null || n === "" ? null : n;
      if (v(e, t)) {
        ((m = r), r != null && (d.delete(r), d.set(r, C()), R()));
        return;
      }
      r != null && !o("WAWebVoipCallStateUtils").isCallTerminal(t) && S(r);
    }
    function _() {
      var e;
      return m == null ? null : (e = d.get(m)) != null ? e : null;
    }
    function f(e) {
      var t;
      return e == null ? null : (t = d.get(e)) != null ? t : null;
    }
    function g(e) {
      e != null && _() === e && (m = null);
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            e == null
              ? null
              : yield o("WAPromiseDelays").withTimeout(e, c, function () {
                  return (
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: unified session id capture timed out",
                        ])),
                    ),
                    null
                  );
                });
          return t != null
            ? t
            : o("WAWebBackendApi").frontendSendAndReceive(
                "getUnifiedSessionId",
              );
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return o("WAWebBackendApi")
        .frontendSendAndReceive("getUnifiedSessionId")
        .catch(function (t) {
          return (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: unified session id capture failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t)),
            null
          );
        });
    }
    function b() {
      (d.clear(), (m = null));
    }
    function v(e, t) {
      return o("WAWebVoipCallStateUtils").isCallTerminal(t)
        ? !1
        : o("WAWebVoipCallStateUtils").isCallTerminal(e) ||
            (t === o("WAWebVoipWaCallEnums").CallState.AcceptSent &&
              e !== o("WAWebVoipWaCallEnums").CallState.AcceptSent);
    }
    function S(e) {
      if (!(m == null || m === e)) {
        var t = d.get(m);
        ((m = e), t != null && (d.set(e, t), R()));
      }
    }
    function R() {
      if (!(d.size <= u)) {
        var e = d.keys().next();
        e.done || d.delete(e.value);
      }
    }
    ((l.maybeRecordCallStartUnifiedSessionId = p),
      (l.getCurrentCallStartUnifiedSessionId = _),
      (l.getCallStartUnifiedSessionIdForCall = f),
      (l.releaseCurrentCallStartUnifiedSessionId = g),
      (l.resolveCallUnifiedSessionId = h),
      (l.resetCallStartUnifiedSessionIds = b));
  },
  98,
);
