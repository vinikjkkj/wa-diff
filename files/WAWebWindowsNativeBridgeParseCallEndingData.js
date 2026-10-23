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
    var e = ["screenedElsewhere"];
    function s(t) {
      var n,
        a,
        i,
        l = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
      if (l == null) throw r("err")("Invalid call ending data");
      var s = l.screenedElsewhere,
        u = babelHelpers.objectWithoutPropertiesLoose(l, e);
      return babelHelpers.extends({}, u, {
        peerJid: o("WAWebWidFactory").createWid(l.peerJid),
        fromMe: l.fromMe,
        groupJid: l.groupJid
          ? o("WAWebWidFactory").createWid(l.groupJid)
          : null,
        callId: l.callId,
        callLinkToken: l.callLinkToken,
        isCallLink: l.isCallLink,
        scheduledId: l.scheduledId,
        startTime: o("WATimeUtils").castToUnixTime(l.startTime),
        connectTime:
          l.connectTime != null ? Math.floor(l.connectTime / 1e3) : null,
        endTime: o("WATimeUtils").castToUnixTime(l.endTime),
        result:
          s === !0
            ? o("WAWebVoipWaCallEnums").CallLogResult.ScreenedElsewhere
            : o("WAWebVoipWaCallEnums").convertCallResultToCallLogResult(
                l.result,
              ),
        videoCall: l.videoCall,
        participantEntries: l.participantEntries.map(function (e) {
          return {
            jid: o("WAWebWidFactory").createWid(e.jid),
            result: e.result,
          };
        }),
        callCreatorJid: r("isStringNullOrEmpty")(l.callCreatorJid)
          ? null
          : o("WAWebWidFactory").createWid(l.callCreatorJid),
        initialPeerJid: r("isStringNullOrEmpty")(l.initialPeerJid)
          ? null
          : o("WAWebWidFactory").createWid(l.initialPeerJid),
        timeSeriesPath: l.timeSeriesPath,
        userRatingInterval: -1,
        terminatedByDeviceSwitch:
          (n = l.terminatedByDeviceSwitch) != null ? n : !1,
        bytesSent: (a = l.bytesSent) != null ? a : void 0,
        bytesReceived: (i = l.bytesReceived) != null ? i : void 0,
      });
    }
    l.parseWindowsCallEndingData = s;
  },
  98,
);
