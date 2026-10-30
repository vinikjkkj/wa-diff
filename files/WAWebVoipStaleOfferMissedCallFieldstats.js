__d(
  "WAWebVoipStaleOfferMissedCallFieldstats",
  [
    "Promise",
    "WALogger",
    "WARandomHex",
    "WAWebBackendApi",
    "WAWebCallWamEvent",
    "WAWebPonyfillsIdleCallback",
    "WAWebVoipClosedTabCallRingFields",
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
      c,
      d = 16,
      m = 1e3,
      p = 27,
      _ = 127,
      f = new Set([
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
      g = new Map([
        [
          "accepted_elsewhere",
          (c = o("WAWebWamEnumCallTermReason")).CALL_TERM_REASON
            .ACCEPTED_ELSEWHERE,
        ],
        ["call_is_full", c.CALL_TERM_REASON.CALL_IS_FULL],
        ["device_switch", c.CALL_TERM_REASON.DEVICE_SWITCH],
        ["group_call_ended", c.CALL_TERM_REASON.GROUP_CALL_ENDED],
        ["heartbeat", c.CALL_TERM_REASON.HEARTBEAT_TERMINATE],
        ["media_rx_timeout", c.CALL_TERM_REASON.MEDIA_TX_RX_TIMEOUT],
        ["media_tx_timeout", c.CALL_TERM_REASON.MEDIA_TX_RX_TIMEOUT],
        ["rejected_elsewhere", c.CALL_TERM_REASON.REJECTED_ELSEWHERE],
        ["relay_bind_failed", c.CALL_TERM_REASON.RELAY_BIND_FAILED],
        ["screened_elsewhere", c.CALL_TERM_REASON.ACCEPTED_ELSEWHERE],
        ["setup_failed", c.CALL_TERM_REASON.SETUP_FAILED],
        ["timeout", c.CALL_TERM_REASON.RINGING_TIMEOUT],
        ["user_invisible", c.CALL_TERM_REASON.USER_INVISIBLE],
        ["user_removed", c.CALL_TERM_REASON.USER_REMOVED],
      ]);
    function h(t, n, a) {
      if (n.hasChild("uploadfieldstat")) {
        var i = !1,
          l = function () {
            i ||
              ((i = !0),
              C(t, n, a).catch(function (t) {
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
          self.setTimeout(l, m));
      }
    }
    function y(e, t, n, r) {
      return t === "terminate"
        ? I(e, n, r)
        : t === "accept"
          ? T(
              e,
              o("WAWebWamEnumCallTermReason").CALL_TERM_REASON
                .ACCEPTED_ELSEWHERE,
            )
          : t === "reject"
            ? T(
                e,
                o("WAWebWamEnumCallTermReason").CALL_TERM_REASON
                  .REJECTED_ELSEWHERE,
              )
            : e;
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = yield (u || (u = n("Promise"))).all([
              o("WAWebBackendApi").frontendSendAndReceive(
                "getUnifiedSessionId",
              ),
              o("WAWebVoipClosedTabCallRingFields").takeClosedTabCallRingFields(
                e.call_id,
              ),
            ]),
            i = a[0],
            l = a[1],
            c = v(e, r());
          (new (o("WAWebCallWamEvent").CallWamEvent)(
            babelHelpers.extends(
              {
                callOfferElapsedT: e.e,
                callPeerAppVersion: e.peer_app_version.slice(0, p),
                callPeerPlatform: f.has(e.peer_platform)
                  ? e.peer_platform
                  : "unknown",
                callRandomId: o("WARandomHex").randomHex(d).toLowerCase(),
                callReplayerId: "",
                callResult: R(c),
                callSide: o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE,
                callTermReason: c,
                callTestBucket: L(t),
                callWakeupSource: o("WAWebWamEnumCallWakeupSource")
                  .CALL_WAKEUP_SOURCE.NONE,
                fieldStatsRowType: o("WAWebWamEnumFieldStatsRowType")
                  .FIELD_STATS_ROW_TYPE.BOTH,
                isLidCall: e.call_creator.isLid() ? !0 : null,
                videoEnabled: e.isVideoCall === !0,
              },
              i == null ? null : { unifiedSessionId: i },
              l,
            ),
          ).commit(),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] stale offer missed call WAM event committed",
                ])),
            ));
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      var n,
        r = t == null ? void 0 : t.terminated;
      return r != null
        ? r
        : e.is_call_ended === !0
          ? S(e.terminate_reason)
          : (n = t == null ? void 0 : t.answered) != null
            ? n
            : o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.RINGING_TIMEOUT;
    }
    function S(e) {
      var t;
      return (t = g.get(e != null ? e : "")) != null
        ? t
        : o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.ENDED_BY_PEER;
    }
    function R(e) {
      return e ===
        o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.ACCEPTED_ELSEWHERE ||
        e === o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.DEVICE_SWITCH
        ? o("WAWebWamEnumCallResultType").CALL_RESULT_TYPE.ACCEPTED_ELSEWHERE
        : e ===
            o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.REJECTED_ELSEWHERE
          ? o("WAWebWamEnumCallResultType").CALL_RESULT_TYPE.REJECTED_ELSEWHERE
          : o("WAWebWamEnumCallResultType").CALL_RESULT_TYPE.MISSED_NO_RECEIPT;
    }
    function L(e) {
      try {
        var t = e.maybeChild("voip_settings");
        if (t == null) return "";
        var n = k(JSON.parse(E(t)));
        return n == null ? "" : n.slice(0, _);
      } catch (e) {
        return "";
      }
    }
    function E(e) {
      var t = e.contentBytes();
      return t instanceof Uint8Array ? new TextDecoder().decode(t) : String(t);
    }
    function k(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.test;
      if (t == null || typeof t != "object") return null;
      var n = t.name;
      return typeof n == "string" ? n : null;
    }
    function I(e, t, n) {
      return e.terminated != null || n.maybeAttrString("joinable") === "1"
        ? e
        : babelHelpers.extends({}, e, { terminated: S(t.terminate_reason) });
    }
    function T(e, t) {
      return e.answered == null
        ? babelHelpers.extends({}, e, { answered: t })
        : e;
    }
    ((l.logStaleOfferMissedCallFieldstats = h),
      (l.applyFollowUpStanza = y),
      (l.getStaleOfferCallTermReason = v));
  },
  98,
);
