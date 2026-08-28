__d(
  "FXSecuritySettingsLogger",
  [
    "FBLogger",
    "FxAccountsCenterSecuritySettingsEventFalcoEvent",
    "react",
    "react-compiler-runtime",
    "usePartialViewImpression",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useRef;
    function d(e) {
      var t = e.loggingParams,
        n = t.account_id,
        o = t.error_message,
        a = t.event,
        i = t.extra_data,
        l = t.setting,
        s = t.surface;
      r("FxAccountsCenterSecuritySettingsEventFalcoEvent").log(function () {
        return {
          account_id: n,
          error_message: o,
          event: a,
          extra_data: i,
          setting: l,
          surface: s,
        };
      });
    }
    function m(e, t, n) {
      d({
        loggingParams: {
          event: "primary_button_tap",
          setting: "login_alerts",
          surface: e + "_" + t + "_" + (n ? "enabled" : "disabled"),
        },
      });
    }
    function p(e, t, n) {
      (d({
        loggingParams: {
          error_message: t + ": " + n.message,
          event: "error",
          setting: e,
          surface: t,
        },
      }),
        r("FBLogger")("fx_security_settings").catching(n).warn(n.message));
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.loggingParams,
        a;
      t[0] !== n
        ? ((a = function () {
            d({ loggingParams: n });
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      return (
        t[2] !== i
          ? ((l = { onImpressionStart: i }), (t[2] = i), (t[3] = l))
          : (l = t[3]),
        r("usePartialViewImpression")(l)
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(4),
        n = c(!1),
        a;
      t[0] !== e
        ? ((a = function () {
            n.current || (e(), (n.current = !0));
          }),
          (t[0] = e),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      return (
        t[2] !== i
          ? ((l = { onImpressionStart: i }), (t[2] = i), (t[3] = l))
          : (l = t[3]),
        r("usePartialViewImpression")(l)
      );
    }
    ((l.logEvent = d),
      (l.logLoginAlertsAction = m),
      (l.logMutationError = p),
      (l.useFXSecuritySettingsLogging = _),
      (l.useQPLImpressionLogger = f));
  },
  98,
);
