__d(
  "WAWebHatchLinkedStatusFetchFailure",
  ["WACustomError", "WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t) || this),
            (r.name = "HatchLinkedStatusUnauthorizedError"),
            (r.credentialsPresentAtDispatch = n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError);
    function m(t) {
      t instanceof d
        ? t.credentialsPresentAtDispatch
          ? o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[HatchLinkedStatusManager] fetch failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("hatch-linked-status-fetch-rejected", {
                sampling: 0.1,
                skipFBLoggerReporting: !0,
              })
          : o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[HatchLinkedStatusManager] fetch failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("hatch-linked-status-fetch-logged-out", {
                sampling: 0.01,
                skipFBLoggerReporting: !0,
              })
        : t instanceof o("WACustomError").TimeoutError
          ? o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[HatchLinkedStatusManager] fetch failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("hatch-linked-status-fetch-timeout", {
                skipFBLoggerReporting: !0,
              })
          : o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[HatchLinkedStatusManager] fetch failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("hatch-linked-status-fetch-fail");
    }
    ((l.HatchLinkedStatusUnauthorizedError = d),
      (l.logHatchLinkedStatusFetchFailure = m));
  },
  98,
);
