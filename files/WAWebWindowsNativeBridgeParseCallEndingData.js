__d(
  "WAWebWindowsNativeBridgeParseCallEndingData",
  [
    "WATimeUtils",
    "WAWebVoipJsonParserNative",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(e);
      if (n == null) throw r("err")("Invalid call ending data");
      return babelHelpers.extends({}, n, {
        peerJid: o("WAWebWidFactory").createWid(n.peerJid),
        fromMe: n.fromMe,
        groupJid: n.groupJid
          ? o("WAWebWidFactory").createWid(n.groupJid)
          : null,
        callId: n.callId,
        callLinkToken: n.callLinkToken,
        isCallLink: n.isCallLink,
        scheduledId: n.scheduledId,
        startTime: o("WATimeUtils").castToUnixTime(n.startTime),
        connectTime:
          n.connectTime != null ? Math.floor(n.connectTime / 1e3) : null,
        endTime: o("WATimeUtils").castToUnixTime(n.endTime),
        result: o("WAWebVoipWaCallEnums").convertCallResultToCallLogResult(
          n.result,
        ),
        videoCall: n.videoCall,
        participantEntries: n.participantEntries.map(function (e) {
          return {
            jid: o("WAWebWidFactory").createWid(e.jid),
            result: e.result,
          };
        }),
        callCreatorJid: r("isStringNullOrEmpty")(n.callCreatorJid)
          ? null
          : o("WAWebWidFactory").createWid(n.callCreatorJid),
        initialPeerJid: r("isStringNullOrEmpty")(n.initialPeerJid)
          ? null
          : o("WAWebWidFactory").createWid(n.initialPeerJid),
        timeSeriesPath: n.timeSeriesPath,
        userRatingInterval: -1,
        terminatedByDeviceSwitch:
          (t = n.terminatedByDeviceSwitch) != null ? t : !1,
      });
    }
    l.parseWindowsCallEndingData = e;
  },
  98,
);
