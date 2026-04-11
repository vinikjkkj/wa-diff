__d(
  "TrustedTypesUtils",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    var e = typeof window != "undefined",
      s = function (t) {
        return t;
      };
    function u(t) {
      var n =
        e && typeof window.origin != "undefined" ? window.origin : "undefined";
      return (
        r("FBLogger")("saf_web_trusted_types_rollout", n)
          .blameToPreviousFrame()
          .blameToPreviousFrame()
          .warn(t),
        t
      );
    }
    function c(t) {
      r("FBLogger")("saf_web").info(
        "[Trusted-Types][%s]: %s",
        e && typeof window.origin != "undefined" ? window.origin : "undefined",
        t,
      );
    }
    function d(t) {
      r("FBLogger")("saf_web").warn(
        "[Trusted-Types][%s]: %s",
        e && typeof window.origin != "undefined" ? window.origin : "undefined",
        t,
      );
    }
    function m(t) {
      r("FBLogger")("saf_web").mustfix(
        "[Trusted-Types][%s]: %s",
        e && typeof window.origin != "undefined" ? window.origin : "undefined",
        t,
      );
    }
    function p(e, t) {
      d(
        "String '" +
          e.toString().slice(0, 15) +
          "' is flowing to DOM XSS sink. Default Trusted Type policy was executed and removed dangerous elements. " +
          ("Returned string is: '" +
            t.toString().slice(0, 15) +
            "' If this is breaking your feature, post in ") +
          "Security Infra group.",
      );
    }
    ((l.isBrowser = e),
      (l.noop = s),
      (l.noopAndLog = u),
      (l.logInfo = c),
      (l.logWarning = d),
      (l.logError = m),
      (l.logDefaultPolicySanitization = p));
  },
  98,
);
