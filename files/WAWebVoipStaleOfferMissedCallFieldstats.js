__d(
  "WAWebVoipStaleOfferMissedCallFieldstats",
  [
    "WALogger",
    "WARandomHex",
    "WAWebBackendApi",
    "WAWebCallWamEvent",
    "WAWebPonyfillsIdleCallback",
    "WAWebWamEnumCallResultType",
    "WAWebWamEnumCallSide",
    "WAWebWamEnumCallTermReason",
    "WAWebWamEnumCallWakeupSource",
    "WAWebWamEnumFieldStatsRowType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 16,
      d = 1e3,
      m = 27,
      p = 127,
      _ = new Set([
        "android",
        "capi",
        "ios_tablet",
        "ipad",
        "iphone",
        "kaios",
        "mac_os_electron",
        "macos",
        "portal",
        "smba",
        "smbi",
        "unknown",
        "wearm",
        "web",
        "windows",
        "windows_electron",
        "wp",
      ]),
      f = new Map([
        [
          "accepted_elsewhere",
          (u = o("WAWebWamEnumCallTermReason")).CALL_TERM_REASON
            .ACCEPTED_ELSEWHERE,
        ],
        ["call_is_full", u.CALL_TERM_REASON.CALL_IS_FULL],
        ["device_switch", u.CALL_TERM_REASON.DEVICE_SWITCH],
        ["group_call_ended", u.CALL_TERM_REASON.GROUP_CALL_ENDED],
        ["heartbeat", u.CALL_TERM_REASON.HEARTBEAT_TERMINATE],
        ["media_rx_timeout", u.CALL_TERM_REASON.MEDIA_TX_RX_TIMEOUT],
        ["media_tx_timeout", u.CALL_TERM_REASON.MEDIA_TX_RX_TIMEOUT],
        ["rejected_elsewhere", u.CALL_TERM_REASON.REJECTED_ELSEWHERE],
        ["relay_bind_failed", u.CALL_TERM_REASON.RELAY_BIND_FAILED],
        ["screened_elsewhere", u.CALL_TERM_REASON.ACCEPTED_ELSEWHERE],
        ["setup_failed", u.CALL_TERM_REASON.SETUP_FAILED],
        ["timeout", u.CALL_TERM_REASON.RINGING_TIMEOUT],
        ["user_invisible", u.CALL_TERM_REASON.USER_INVISIBLE],
        ["user_removed", u.CALL_TERM_REASON.USER_REMOVED],
      ]);
    function g(t, n, a) {
      if (n.hasChild("uploadfieldstat")) {
        var i = !1,
          l = function () {
            i ||
              ((i = !0),
              y(t, n, a).catch(function (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] stale offer fieldstats failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .tags("non-sad")
                  .sendLogs(
                    "voip-deferred-boot-stale-offer-fieldstats-failed",
                    {
                      sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                      sampling: 0.01,
                    },
                  );
              }));
          };
        (o("WAWebPonyfillsIdleCallback").requestIdleCallback(l),
          self.setTimeout(l, d));
      }
    }
    function h(e, t, n, r) {
      return t === "terminate"
        ? k(e, n, r)
        : t === "accept"
          ? I(
              e,
              o("WAWebWamEnumCallTermReason").CALL_TERM_REASON
                .ACCEPTED_ELSEWHERE,
            )
          : t === "reject"
            ? I(
                e,
                o("WAWebWamEnumCallTermReason").CALL_TERM_REASON
                  .REJECTED_ELSEWHERE,
              )
            : e;
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebBackendApi").frontendSendAndReceive(
              "getUnifiedSessionId",
            ),
            a = b(e, n());
          (new (o("WAWebCallWamEvent").CallWamEvent)(
            babelHelpers.extends(
              {
                callOfferElapsedT: e.e,
                callPeerAppVersion: e.peer_app_version.slice(0, m),
                callPeerPlatform: _.has(e.peer_platform)
                  ? e.peer_platform
                  : "unknown",
                callRandomId: o("WARandomHex").randomHex(c).toLowerCase(),
                callReplayerId: "",
                callResult: S(a),
                callSide: o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE,
                callTermReason: a,
                callTestBucket: R(t),
                callWakeupSource: o("WAWebWamEnumCallWakeupSource")
                  .CALL_WAKEUP_SOURCE.NONE,
                fieldStatsRowType: o("WAWebWamEnumFieldStatsRowType")
                  .FIELD_STATS_ROW_TYPE.BOTH,
                isLidCall: e.call_creator.isLid() ? !0 : null,
                videoEnabled: e.isVideoCall === !0,
              },
              r == null ? null : { unifiedSessionId: r },
            ),
          ).commit(),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] stale offer missed call WAM event committed",
                ])),
            ));
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      var n,
        r = t == null ? void 0 : t.terminated;
      return r != null
        ? r
        : e.is_call_ended === !0
          ? v(e.terminate_reason)
          : (n = t == null ? void 0 : t.answered) != null
            ? n
            : o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.RINGING_TIMEOUT;
    }
    function v(e) {
      var t;
      return (t = f.get(e != null ? e : "")) != null
        ? t
        : o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.ENDED_BY_PEER;
    }
    function S(e) {
      return e ===
        o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.ACCEPTED_ELSEWHERE ||
        e === o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.DEVICE_SWITCH
        ? o("WAWebWamEnumCallResultType").CALL_RESULT_TYPE.ACCEPTED_ELSEWHERE
        : e ===
            o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.REJECTED_ELSEWHERE
          ? o("WAWebWamEnumCallResultType").CALL_RESULT_TYPE.REJECTED_ELSEWHERE
          : o("WAWebWamEnumCallResultType").CALL_RESULT_TYPE.MISSED_NO_RECEIPT;
    }
    function R(e) {
      try {
        var t = e.maybeChild("voip_settings");
        if (t == null) return "";
        var n = E(JSON.parse(L(t)));
        return n == null ? "" : n.slice(0, p);
      } catch (e) {
        return "";
      }
    }
    function L(e) {
      var t = e.contentBytes();
      return t instanceof Uint8Array ? new TextDecoder().decode(t) : String(t);
    }
    function E(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.test;
      if (t == null || typeof t != "object") return null;
      var n = t.name;
      return typeof n == "string" ? n : null;
    }
    function k(e, t, n) {
      return e.terminated != null || n.maybeAttrString("joinable") === "1"
        ? e
        : babelHelpers.extends({}, e, { terminated: v(t.terminate_reason) });
    }
    function I(e, t) {
      return e.answered == null
        ? babelHelpers.extends({}, e, { answered: t })
        : e;
    }
    ((l.logStaleOfferMissedCallFieldstats = g),
      (l.applyFollowUpStanza = h),
      (l.getStaleOfferCallTermReason = b));
  },
  98,
);
