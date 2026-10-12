__d(
  "WAWebVoipDeferredBootStaleCalls",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCoreActionsODS",
    "WAWebVoipBootInitDecision",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipIncomingOfferRoute",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStaleOfferMissedCallFieldstats",
    "WAWebVoipWaCallEnums",
    "WAWebWamEnumCallTermReason",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 100,
      d = 0,
      m = new Set([
        "accept",
        "connect_stat",
        "flowcontrol",
        "interruption",
        "mute_v2",
        "preaccept",
        "ready",
        "reject",
        "relay_info_update",
        "relaylatency",
        "screen",
        "screen_share",
        "terminate",
        "transport",
        "video",
      ]),
      p = new Set(["accepted_elsewhere", "screened_elsewhere"]),
      _ = new Set(),
      f = new Set();
    function g(t, n) {
      try {
        var a =
          t.type === o("WAWebVoipSignalingEnums").TYPE.OFFER ? C(t) : S(t, n);
        return (a != null && T(a, t), a);
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] stale call claim failed",
                ])),
            )
            .catching(r("getErrorSafe")(t)),
          null
        );
      }
    }
    function h(e, t, n) {
      try {
        e: {
          if (e === "offer") {
            (L(t),
              o(
                "WAWebVoipStaleOfferMissedCallFieldstats",
              ).logStaleOfferMissedCallFieldstats(t, n));
            break e;
          }
          if (e === "follow_up") {
            E(t);
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        }
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] stale call log write failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .tags("non-sad")
          .sendLogs("voip-deferred-boot-stale-call-log-failed", {
            sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
            sampling: 0.01,
          });
      }
    }
    function y() {
      (_.clear(), f.clear());
    }
    function C(e) {
      var t = e.call_id;
      return f.has(t) || !b(e)
        ? (_.delete(t), R(f, t), null)
        : (R(_, t), "offer");
    }
    function b(e) {
      return o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited() ||
        !o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled()
        ? !1
        : o("WAWebVoipIncomingOfferRoute").getIncomingOfferRoute(e, v) ===
            "stale";
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_voip_incoming_offer_init_freshness_ms",
      );
    }
    function S(e, t) {
      return _.has(e.call_id) &&
        m.has(t) &&
        e.peer_jid.isUser() &&
        !o("WAWebVoipGatingUtils").isGroupCallMessage(e)
        ? "follow_up"
        : null;
    }
    function R(e, t) {
      if ((e.delete(t), e.add(t), e.size > c)) {
        var n = e.values().next().value;
        n != null && e.delete(n);
      }
    }
    function L(e) {
      (o("WAWebCoreActionsODS").logCallIncomingMissed(),
        o("WAWebBackendApi").frontendFireAndForget(
          "generateCallLogFromEventCallMissed",
          { callMissedData: k(e) },
        ));
    }
    function E(e) {
      var t;
      e.type !== o("WAWebVoipSignalingEnums").TYPE.TERMINATE ||
        !p.has((t = e.terminate_reason) != null ? t : "") ||
        o("WAWebBackendApi").frontendFireAndForget(
          "generateCallLogFromEventUpdate1to1",
          {
            call1to1LogData: {
              CallId: e.call_id,
              PeerJid: o("WAWebWidFactory").asUserWidOrThrow(e.peer_jid),
              Result: o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere,
            },
          },
        );
    }
    function k(e) {
      var t = I(e.terminate_reason);
      return babelHelpers.extends(
        {
          CallId: e.call_id,
          PeerUserJid: o("WAWebWidFactory").asUserWidOrThrow(e.peer_jid),
          GroupJid: null,
          IsVideoCall: e.isVideoCall === !0,
          GroupInfo: null,
          CallParticipantInfos: [],
          TimeElapsedSinceCallOffer: e.e,
          SilenceReason: d,
        },
        t == null ? null : { CallTermReason: t },
      );
    }
    function I(e) {
      return e === "accepted_elsewhere" || e === "screened_elsewhere"
        ? o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.ACCEPTED_ELSEWHERE
        : e === "rejected_elsewhere"
          ? o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.REJECTED_ELSEWHERE
          : e === "device_switch"
            ? o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.DEVICE_SWITCH
            : null;
    }
    function T(e, t) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          e: {
            if (e === "offer") {
              o("WAWebCoreActionsODS").logCallIncomingDeferredBootStaleOffer();
              break e;
            }
            if (e === "follow_up") {
              o(
                "WAWebCoreActionsODS",
              ).logCallIncomingDeferredBootStaleFollowUp();
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          }
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] stale call stanza without init stanza=",
                " type=",
                " call_ended=",
                " queued_ms=",
                "",
              ])),
            e,
            t.type,
            String(t.is_call_ended === !0),
            t.e,
          );
        },
      );
    }
    ((l.claimStaleCallStanza = g),
      (l.writeStaleCallLog = h),
      (l.resetStaleCallsForTesting = y));
  },
  98,
);
