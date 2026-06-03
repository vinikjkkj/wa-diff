__d(
  "WAWebVoipWaitingRoomToggleJob",
  [
    "WALogger",
    "WASmaxVoipWaitingRoomToggleCallLinkRPC",
    "WAWebBackendErrors",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.isVideoCall,
            r = t.linkToken,
            a = t.waitingRoomEnabled,
            i = yield o(
              "WASmaxVoipWaitingRoomToggleCallLinkRPC",
            ).sendWaitingRoomToggleCallLinkRPC({
              waitingRoomToggleEnabled: a ? "1" : "0",
              waitingRoomToggleLinkToken: r,
              waitingRoomToggleMedia: n ? "video" : "audio",
            });
          switch (i.name) {
            case "WaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkAck": {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "toggleWaitingRoomForCallLink: success",
                  ])),
              );
              return;
            }
            case "WaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkNack": {
              var l = i.value.error;
              throw (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "toggleWaitingRoomForCallLink failed: ",
                      "",
                    ])),
                  l,
                ),
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(l),
                  "Toggle failed",
                )
              );
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.toggleWaitingRoomForCallLink = u;
  },
  98,
);
