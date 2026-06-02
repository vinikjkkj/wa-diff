__d(
  "WAWebVoipWaitingRoomToggleJob",
  ["WALogger", "WASmaxVoipWaitingRoomToggleCallLinkRPC", "WAWebBackendErrors"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = t.isVideoCall,
        r = t.linkToken,
        a = t.waitingRoomEnabled,
        i = await o(
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
    }
    l.toggleWaitingRoomForCallLink = u;
  },
  98,
);
