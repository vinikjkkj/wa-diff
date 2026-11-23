__d(
  "WAWebVoipHandleNativeCallEventVoiceChatHandlers",
  [
    "WALogger",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var n = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
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
            (await n.endCall(
              o("WAWebVoipSignalingEnums").EndCallReason.Timeout,
              !0,
            )));
      }
    }
    l.handleLonelyStateTimeout = s;
  },
  98,
);
