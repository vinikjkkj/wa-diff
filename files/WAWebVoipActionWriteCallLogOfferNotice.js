__d(
  "WAWebVoipActionWriteCallLogOfferNotice",
  [
    "WACommonTaskScheduler",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebVoipActionWriteCallLogImpl",
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
          o("WAWebABProps").getABPropConfigValue(
            "enable_web_voip_anr_optimizations",
          ) &&
            (o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
              ? yield r("WACommonTaskScheduler").yield()
              : yield o("WAPromiseDelays").releaseToEventLoop());
          var t = e.callCreatorWid,
            n = e.callId,
            a = e.callOutcome,
            i = e.groupJid,
            l = e.isGroup,
            s = e.isOffline,
            u = e.isVideo,
            c = e.offerTime,
            d = e.silenceReason,
            m = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
              callCreatorWid: t,
              callId: n,
              groupJid: i,
            }),
            p = m.callCreatorUserWid,
            _ = m.chatId,
            f = m.fromMe,
            g = m.msgKeyId,
            h =
              s === !0 ||
              c == null ||
              !o("WATimeUtils").sameDay(
                o("WATimeUtils").castToUnixTime(c),
                o("WATimeUtils").unixTime(),
              ),
            y,
            C = {
              type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
              viewMode: h
                ? o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME
                : o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              kind: o("WAWebMsgType").MsgKind.CallLog,
              from: p,
              callOutcome: a,
              callSilenceReason: d,
              isVideoCall: u,
              callCreator: t,
              t: c != null ? c : o("WATimeUtils").unixTime(),
            },
            b = {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              from: p,
              futureproofType: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
              t: c != null ? c : o("WATimeUtils").unixTime(),
            },
            v = l && i ? i : _;
          (l && n != null
            ? i &&
              (d === "vc_wave_all"
                ? (y = babelHelpers.extends(
                    {
                      id: new (r("WAWebMsgKey"))({
                        remote: v,
                        fromMe: f,
                        id: g,
                        participant: t,
                      }),
                      to: i,
                      author: t,
                    },
                    b,
                  ))
                : (y = babelHelpers.extends(
                    {
                      id: new (r("WAWebMsgKey"))({
                        remote: _,
                        fromMe: f,
                        id: g,
                      }),
                      to: i,
                      author: t,
                    },
                    C,
                  )))
            : d === "vc_wave_all"
              ? (y = babelHelpers.extends(
                  {
                    id: new (r("WAWebMsgKey"))({ remote: v, fromMe: f, id: g }),
                    to: o(
                      "WAWebUserPrefsMeUser",
                    ).getMeDevicePnOrThrow_DO_NOT_USE(),
                  },
                  b,
                ))
              : (y = babelHelpers.extends(
                  {
                    id: new (r("WAWebMsgKey"))({ remote: _, fromMe: f, id: g }),
                    to: o(
                      "WAWebUserPrefsMeUser",
                    ).getMeDevicePnOrThrow_DO_NOT_USE(),
                  },
                  C,
                )),
            y != null &&
              (yield o(
                "WAWebVoipActionWriteCallLogImpl",
              ).writeVoipCallLogMessageImpl(v, y, s === !0, s !== !0)));
        })),
        s.apply(this, arguments)
      );
    }
    l.generateCallLogOfferNotice = e;
  },
  98,
);
