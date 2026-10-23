__d(
  "WAWebBookingConfirmationLoggingLazy",
  ["JSResourceForInteraction", "WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      r("JSResourceForInteraction")("WAWebBookingConfirmationLogging")
        .__setRef("WAWebBookingConfirmationLoggingLazy")
        .load()
        .then(function (e) {
          e.logBookingStatusInteraction(t, n);
        })
        .catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[booking] failed to load booking status logger",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("booking-status-logger-load-failed");
        });
    }
    l.logBookingStatusInteraction = s;
  },
  98,
);
