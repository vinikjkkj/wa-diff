__d(
  "WAWebWindowsNativeBridgeParseCallMissedData",
  ["WAWebVoipJsonParserNative", "WAWebWidFactory", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a,
        i = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(e);
      if (i == null) throw r("err")("Invalid call missed data");
      var l =
        (t = i.GroupInfo) != null && t.Participants
          ? i.GroupInfo.Participants.map(function (e) {
              return {
                jid: o("WAWebWidFactory").createWid(e.UserJid.str),
                result: e.State,
              };
            })
          : [];
      return babelHelpers.extends({}, i, {
        PeerUserJid:
          i.PeerUserJid != null
            ? o("WAWebWidFactory").createWid(i.PeerUserJid.str)
            : null,
        GroupJid:
          i.GroupJid != null
            ? o("WAWebWidFactory").createWid(i.GroupJid.str)
            : null,
        CallParticipantInfos: l,
        GroupInfo: i.GroupInfo
          ? {
              Participants:
                (n = i.GroupInfo.Participants) == null
                  ? void 0
                  : n.map(function (e) {
                      return {
                        UserJid: o("WAWebWidFactory").createWid(e.UserJid.str),
                        State: e.State,
                      };
                    }),
            }
          : null,
        TimeElapsedSinceCallOffer:
          i.TimeElapsedSinceCallOffer != null ? i.TimeElapsedSinceCallOffer : 0,
        SilenceReason: (a = i.SilenceReason) != null ? a : 0,
      });
    }
    l.parseWindowsCallMissedData = e;
  },
  98,
);
