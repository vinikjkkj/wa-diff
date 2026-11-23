__d(
  "WAWebVoipCallStartUnifiedSessionStore",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebBackendApi",
    "WAWebVoipCallStateUtils",
    "WAWebVoipWaCallEnums",
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
      if (C(e, t)) {
        ((m = r), r != null && (d.delete(r), d.set(r, y()), v()));
        return;
      }
      r != null && !o("WAWebVoipCallStateUtils").isCallTerminal(t) && b(r);
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
    async function h(t) {
      var n =
        t == null
          ? null
          : await o("WAPromiseDelays").withTimeout(t, c, function () {
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: unified session id capture timed out",
                    ])),
                ),
                null
              );
            });
      return n != null
        ? n
        : o("WAWebBackendApi").frontendSendAndReceive("getUnifiedSessionId");
    }
    function y() {
      return o("WAWebBackendApi")
        .frontendSendAndReceive("getUnifiedSessionId")
        .catch(function (e) {
          return (
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: unified session id capture failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e)),
            null
          );
        });
    }
    function C(e, t) {
      return o("WAWebVoipCallStateUtils").isCallTerminal(t)
        ? !1
        : o("WAWebVoipCallStateUtils").isCallTerminal(e) ||
            (t === o("WAWebVoipWaCallEnums").CallState.AcceptSent &&
              e !== o("WAWebVoipWaCallEnums").CallState.AcceptSent);
    }
    function b(e) {
      if (!(m == null || m === e)) {
        var t = d.get(m);
        ((m = e), t != null && (d.set(e, t), v()));
      }
    }
    function v() {
      if (!(d.size <= u)) {
        var e = d.keys().next();
        e.done !== !0 && d.delete(e.value);
      }
    }
    ((l.maybeRecordCallStartUnifiedSessionId = p),
      (l.getCurrentCallStartUnifiedSessionId = _),
      (l.getCallStartUnifiedSessionIdForCall = f),
      (l.releaseCurrentCallStartUnifiedSessionId = g),
      (l.resolveCallUnifiedSessionId = h));
  },
  98,
);
