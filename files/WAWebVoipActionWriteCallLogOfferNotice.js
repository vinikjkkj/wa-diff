__d(
  "WAWebVoipActionWriteCallLogOfferNotice",
  [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebReleaseToEventLoop",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipPhaseTracker",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebVoipPhaseTracker").beginPostCallWork();
          try {
            o("WAWebABProps").getABPropConfigValue(
              "enable_web_voip_anr_optimizations",
            ) && (yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
            var n = e.callCreatorWid,
              a = e.callId,
              i = e.callOutcome,
              l = e.groupJid,
              s = e.isGroup,
              u = e.isOffline,
              c = e.isVideo,
              d = e.offerTime,
              m = e.silenceReason,
              p = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                callCreatorWid: n,
                callId: a,
                groupJid: l,
              }),
              _ = p.callCreatorUserWid,
              f = p.chatId,
              g = p.fromMe,
              h = p.msgKeyId,
              y = o(
                "WAWebVoipCallLogPlaceholderTracker",
              ).isOfflineCallLogOrderingEnabled()
                ? !1
                : u === !0 ||
                  d == null ||
                  !o("WATimeUtils").sameDay(
                    o("WATimeUtils").castToUnixTime(d),
                    o("WATimeUtils").unixTime(),
                  ),
              C,
              b = {
                type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                viewMode: y
                  ? o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME
                  : o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                kind: o("WAWebMsgType").MsgKind.CallLog,
                from: _,
                callOutcome: i,
                callSilenceReason: m,
                isVideoCall: c,
                callCreator: n,
                t: d != null ? d : o("WATimeUtils").unixTime(),
              },
              v = {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                kind: o("WAWebMsgType").MsgKind.Unknown,
                from: _,
                futureproofType: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                t: d != null ? d : o("WATimeUtils").unixTime(),
              },
              S = s && l ? l : f;
            (s && a != null
              ? l &&
                (m === "vc_wave_all"
                  ? (C = babelHelpers.extends(
                      {
                        id: new (r("WAWebMsgKey"))({
                          remote: S,
                          fromMe: g,
                          id: h,
                          participant: n,
                        }),
                        to: l,
                        author: n,
                      },
                      v,
                    ))
                  : (C = babelHelpers.extends(
                      {
                        id: new (r("WAWebMsgKey"))({
                          remote: f,
                          fromMe: g,
                          id: h,
                        }),
                        to: l,
                        author: n,
                      },
                      b,
                    )))
              : m === "vc_wave_all"
                ? (C = babelHelpers.extends(
                    {
                      id: new (r("WAWebMsgKey"))({
                        remote: S,
                        fromMe: g,
                        id: h,
                      }),
                      to: o(
                        "WAWebUserPrefsMeUser",
                      ).getMeDevicePnOrThrow_DO_NOT_USE(),
                    },
                    v,
                  ))
                : (C = babelHelpers.extends(
                    {
                      id: new (r("WAWebMsgKey"))({
                        remote: f,
                        fromMe: g,
                        id: h,
                      }),
                      to: o(
                        "WAWebUserPrefsMeUser",
                      ).getMeDevicePnOrThrow_DO_NOT_USE(),
                    },
                    b,
                  )),
              C != null &&
                (yield o(
                  "WAWebVoipActionWriteCallLogImpl",
                ).writeVoipCallLogMessageImpl(S, C, u === !0, u !== !0)));
          } finally {
            o("WAWebVoipPhaseTracker").endPostCallWork(t);
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.generateCallLogOfferNotice = e;
  },
  98,
);
