__d(
  "WAWebVoipLastCallRecorder",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebEnvironment",
    "WAWebVoipCallStateUtils",
    "WAWebVoipLastCallStore",
    "WAWebVoipWaCallEnums",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = null;
    function d(e, t) {
      var n = f(e, t);
      n == null ||
        r("WAWebEnvironment").isWindows ||
        r("WAWebEnvironment").isGuest ||
        (g(n), n === "connected" && _());
    }
    function m() {
      try {
        var t = o("WATimeUtils").unixTimeWithoutClockSkewCorrection(),
          n = o("WAWebVoipLastCallStore").readLastCallRecord();
        n == null
          ? o("WAWebVoipLastCallStore").writeLastCallRecord(h(t))
          : o("WAWebVoipLastCallStore").isAheadOfClock(n.since, t) &&
            o("WAWebVoipLastCallStore").writeLastCallRecord(
              babelHelpers.extends({}, n, { since: t }),
            );
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: last call history not started",
              ])),
          )
          .catching(r("getErrorSafe")(t));
      }
    }
    function p(e) {
      c = e;
    }
    function _() {
      try {
        c == null || c();
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: connected call listener failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    function f(e, t) {
      return e === o("WAWebVoipWaCallEnums").CallState.None &&
        t === o("WAWebVoipWaCallEnums").CallState.Calling
        ? "placed"
        : o("WAWebVoipCallStateUtils").isCallConnected(t) &&
            !o("WAWebVoipCallStateUtils").isCallConnected(e)
          ? "connected"
          : null;
    }
    function g(e) {
      try {
        var t,
          n = o("WATimeUtils").unixTimeWithoutClockSkewCorrection(),
          a =
            (t = o("WAWebVoipLastCallStore").readLastCallRecord()) != null
              ? t
              : h(n);
        o("WAWebVoipLastCallStore").writeLastCallRecord(y(a, e, n));
      } catch (t) {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: last call not recorded kind=",
                "",
              ])),
            e,
          )
          .catching(r("getErrorSafe")(t));
      }
    }
    function h(e) {
      return { connected: null, placed: null, since: e };
    }
    function y(e, t, n) {
      return t === "connected"
        ? babelHelpers.extends({}, e, { connected: n })
        : t === "placed"
          ? babelHelpers.extends({}, e, { placed: n })
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  t,
              );
            })();
    }
    ((l.maybeRecordLastCall = d),
      (l.startLastCallHistory = m),
      (l.setOnConnectedCallRecorded = p));
  },
  98,
);
