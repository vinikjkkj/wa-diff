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
        n,
        a,
        i = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(e);
      if (i == null) throw r("err")("Invalid call ending data");
      return babelHelpers.extends({}, i, {
        peerJid: o("WAWebWidFactory").createWid(i.peerJid),
        fromMe: i.fromMe,
        groupJid: i.groupJid
          ? o("WAWebWidFactory").createWid(i.groupJid)
          : null,
        callId: i.callId,
        callLinkToken: i.callLinkToken,
        isCallLink: i.isCallLink,
        scheduledId: i.scheduledId,
        startTime: o("WATimeUtils").castToUnixTime(i.startTime),
        connectTime:
          i.connectTime != null ? Math.floor(i.connectTime / 1e3) : null,
        endTime: o("WATimeUtils").castToUnixTime(i.endTime),
        result: o("WAWebVoipWaCallEnums").convertCallResultToCallLogResult(
          i.result,
        ),
        videoCall: i.videoCall,
        participantEntries: i.participantEntries.map(function (e) {
          return {
            jid: o("WAWebWidFactory").createWid(e.jid),
            result: e.result,
          };
        }),
        callCreatorJid: r("isStringNullOrEmpty")(i.callCreatorJid)
          ? null
          : o("WAWebWidFactory").createWid(i.callCreatorJid),
        initialPeerJid: r("isStringNullOrEmpty")(i.initialPeerJid)
          ? null
          : o("WAWebWidFactory").createWid(i.initialPeerJid),
        timeSeriesPath: i.timeSeriesPath,
        userRatingInterval: -1,
        terminatedByDeviceSwitch:
          (t = i.terminatedByDeviceSwitch) != null ? t : !1,
        bytesSent: (n = i.bytesSent) != null ? n : void 0,
        bytesReceived: (a = i.bytesReceived) != null ? a : void 0,
      });
    }
    l.parseWindowsCallEndingData = e;
  },
  98,
);
