__d(
  "WAWebVoipStaleOfferMissedCallFieldstats",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebCallWamEvent",
    "WAWebPonyfillsIdleCallback",
    "WAWebVoipClosedTabCallRingFields",
    "WAWebVoipNativeMissedCallRandomId",
    "WAWebWamEnumCallResultType",
    "WAWebWamEnumCallSide",
    "WAWebWamEnumCallTermReason",
    "WAWebWamEnumCallWakeupSource",
    "WAWebWamEnumFieldStatsRowType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 1e3,
      d = 27,
      m = 127,
      p = new Set([
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
      _ = new Map([
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
    function f(t, n, a) {
      if (n.hasChild("uploadfieldstat")) {
        var i = !1,
          l = function () {
            i ||
              ((i = !0),
              h(t, n, a).catch(function (t) {
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
          self.setTimeout(l, c));
      }
    }
    function g(e, t, n, r) {
      return t === "terminate"
        ? L(e, n, r)
        : t === "accept"
          ? E(
              e,
              o("WAWebWamEnumCallTermReason").CALL_TERM_REASON
                .ACCEPTED_ELSEWHERE,
            )
          : t === "reject"
            ? E(
                e,
                o("WAWebWamEnumCallTermReason").CALL_TERM_REASON
                  .REJECTED_ELSEWHERE,
              )
            : e;
    }
    async function h(e, t, n) {
      var r = await Promise.all([
          o("WAWebBackendApi").frontendSendAndReceive("getUnifiedSessionId"),
          o("WAWebVoipClosedTabCallRingFields").takeClosedTabCallRingFields(
            e.call_id,
          ),
        ]),
        a = r[0],
        i = r[1],
        l = y(e, n());
      (new (o("WAWebCallWamEvent").CallWamEvent)(
        babelHelpers.extends(
          {
            callOfferElapsedT: e.e,
            callPeerAppVersion: e.peer_app_version.slice(0, d),
            callPeerPlatform: p.has(e.peer_platform)
              ? e.peer_platform
              : "unknown",
            callRandomId: o(
              "WAWebVoipNativeMissedCallRandomId",
            ).getNativeMissedCallRandomId(Date.now()),
            callReplayerId: "",
            callResult: b(l),
            callSide: o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE,
            callTermReason: l,
            callTestBucket: v(t),
            callWakeupSource: o("WAWebWamEnumCallWakeupSource")
              .CALL_WAKEUP_SOURCE.NONE,
            fieldStatsRowType: o("WAWebWamEnumFieldStatsRowType")
              .FIELD_STATS_ROW_TYPE.BOTH,
            isLidCall: e.call_creator.isLid() ? !0 : null,
            videoEnabled: e.isVideoCall === !0,
          },
          a == null ? null : { unifiedSessionId: a },
          i,
        ),
      ).commit(),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [deferred-boot] stale offer missed call WAM event committed",
            ])),
        ));
    }
    function y(e, t) {
      var n,
        r = t == null ? void 0 : t.terminated;
      return r != null
        ? r
        : e.is_call_ended === !0
          ? C(e.terminate_reason)
          : (n = t == null ? void 0 : t.answered) != null
            ? n
            : o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.RINGING_TIMEOUT;
    }
    function C(e) {
      var t;
      return (t = _.get(e != null ? e : "")) != null
        ? t
        : o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.ENDED_BY_PEER;
    }
    function b(e) {
      return e ===
        o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.ACCEPTED_ELSEWHERE ||
        e === o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.DEVICE_SWITCH
        ? o("WAWebWamEnumCallResultType").CALL_RESULT_TYPE.ACCEPTED_ELSEWHERE
        : e ===
            o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.REJECTED_ELSEWHERE
          ? o("WAWebWamEnumCallResultType").CALL_RESULT_TYPE.REJECTED_ELSEWHERE
          : o("WAWebWamEnumCallResultType").CALL_RESULT_TYPE.MISSED_NO_RECEIPT;
    }
    function v(e) {
      try {
        var t = e.maybeChild("voip_settings");
        if (t == null) return "";
        var n = R(JSON.parse(S(t)));
        return n == null ? "" : n.slice(0, m);
      } catch (e) {
        return "";
      }
    }
    function S(e) {
      var t = e.contentBytes();
      return t instanceof Uint8Array ? new TextDecoder().decode(t) : String(t);
    }
    function R(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.test;
      if (t == null || typeof t != "object") return null;
      var n = t.name;
      return typeof n == "string" ? n : null;
    }
    function L(e, t, n) {
      return e.terminated != null || n.maybeAttrString("joinable") === "1"
        ? e
        : babelHelpers.extends({}, e, { terminated: C(t.terminate_reason) });
    }
    function E(e, t) {
      return e.answered == null
        ? babelHelpers.extends({}, e, { answered: t })
        : e;
    }
    ((l.logStaleOfferMissedCallFieldstats = f),
      (l.applyFollowUpStanza = g),
      (l.getStaleOfferCallTermReason = y));
  },
  98,
);
