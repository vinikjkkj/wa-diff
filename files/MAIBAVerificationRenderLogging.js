__d(
  "MAIBAVerificationRenderLogging",
  [
    "AuthenticityLoggerHelper",
    "MAIBAMessageContext",
    "performanceAbsoluteNow",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef;
    function p(t) {
      var n = o("MAIBAMessageContext").useMAIBAMessageContext(),
        a = n.botRequestId,
        l = n.botResponseId,
        s = n.isFromHistory,
        u = n.offlineThreadingId;
      return c(
        function (n, o) {
          s ||
            r("AuthenticityLoggerHelper")
              .get()
              .log({
                clientSubmissionIdentifier: t,
                event: n,
                extraData: babelHelpers.extends({}, o, {
                  bot_request_id: a,
                  bot_response_id: l,
                  client_timestamp_ms: (
                    e || (e = r("performanceAbsoluteNow"))
                  )(),
                  offline_threading_id: u,
                }),
                source: i.id,
              });
        },
        [a, l, s, u, t],
      );
    }
    function _(e) {
      var t = e.screenID,
        n = e.screenType,
        r = e.sessionStoreID,
        o = p(r),
        a = m(!1);
      return (
        d(
          function () {
            return (
              a.current ||
                ((a.current = !0),
                o("maiba_a2ui_render_error", { screen_id: t, screen_type: n })),
              function () {}
            );
          },
          [o, t, n],
        ),
        null
      );
    }
    ((l.useMAIBAVerificationRenderLogger = p),
      (l.MAIBAVerificationRenderFailure = _));
  },
  98,
);
