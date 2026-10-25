__d(
  "WAWebVoipHandleNativeCallEventVoiceChatHandlers",
  [
    "WALogger",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (n.type === "web") {
            var a = n.parsers.parseLonelyStateTimeoutData(t),
              i = a.remainingDurationMs;
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: LonelyStateTimeout remaining=",
                  "ms",
                ])),
              i,
            ),
              !(i > 0) &&
                (yield n.endCall(
                  o("WAWebVoipSignalingEnums").EndCallReason.Timeout,
                  !0,
                )));
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.handleLonelyStateTimeout = s;
  },
  98,
);
