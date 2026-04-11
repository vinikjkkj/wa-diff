__d(
  "WAWebWindowsNativeBridgeParseUpdateJoinableCallLogData",
  ["WAWebVoipJsonParserNative", "WAWebWidFactory", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(e);
      if (n == null) throw r("err")("Invalid call ending data");
      var a = n.CallSummary,
        i = a
          ? babelHelpers.extends({}, a, {
              CallCreatorJid:
                a.CallCreatorJid != null
                  ? o("WAWebWidFactory").createWid(a.CallCreatorJid.str)
                  : null,
              Users: a.Users.map(function (e) {
                return {
                  Jid:
                    e.Jid != null
                      ? o("WAWebWidFactory").createWid(e.Jid.str)
                      : null,
                  PhoneJid:
                    e.PhoneJid != null
                      ? o("WAWebWidFactory").createWid(e.PhoneJid.str)
                      : null,
                  State: e.State,
                };
              }),
            })
          : null;
      return babelHelpers.extends({}, n, {
        CallCreatorDeviceJid:
          n.CallCreatorDeviceJid != null
            ? o("WAWebWidFactory").createWid(n.CallCreatorDeviceJid.str)
            : null,
        InitialPeerJid: n.InitialPeerJid
          ? o("WAWebWidFactory").createWid(n.InitialPeerJid.str)
          : null,
        GroupJid: n.GroupJid
          ? o("WAWebWidFactory").createWid(n.GroupJid.str)
          : null,
        CallLinkToken: s(n.CallLinkToken),
        ScheduledId: s(n.ScheduledId),
        CallParticipantInfos: n.CallParticipantInfos
          ? n.CallParticipantInfos.map(function (e) {
              return {
                jid: o("WAWebWidFactory").createWid(e.UserJid.str),
                result: e.State,
              };
            })
          : [],
        CallSummary: i,
        LinkCreatorJid:
          n.LinkCreatorJid != null
            ? o("WAWebWidFactory").createWid(n.LinkCreatorJid.str)
            : null,
        SelfOtherDeviceConnected:
          (t = n.SelfOtherDeviceConnected) != null ? t : !1,
      });
    }
    function s(e) {
      return e == null || e === "" ? null : e;
    }
    l.parseWindowsNativeUpdateJoinableCallLogData = e;
  },
  98,
);
