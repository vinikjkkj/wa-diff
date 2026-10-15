__d(
  "WAWebVoipDeferredBootStaleCalls",
  [
    "WABase64",
    "WACyrb53Hash",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCoreActionsODS",
    "WAWebDbEncryptionKey",
    "WAWebVoipBootInitDecision",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipIncomingOfferRoute",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStaleOfferMissedCallFieldstats",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 100,
      m = 1e3,
      p = 1e3,
      _ = 0,
      f = new Set([
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
      g = new Set(["accepted_elsewhere", "screened_elsewhere"]),
      h = new Set(),
      y = new Set(),
      C = new Map(),
      b = new Set();
    function v(e, t, n) {
      var r = L(e, t);
      return (r === "follow_up" && D(e, t, n), r);
    }
    function S(e, t, n) {
      try {
        e: {
          if (e === "offer") {
            P(t.call_id, n) ||
              (N(t),
              o(
                "WAWebVoipStaleOfferMissedCallFieldstats",
              ).logStaleOfferMissedCallFieldstats(t, n, function () {
                return C.get(t.call_id);
              }));
            break e;
          }
          if (e === "follow_up") {
            M(t);
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        }
      } catch (e) {
        A(e);
      }
    }
    function R() {
      (h.clear(), y.clear(), C.clear(), b.clear());
    }
    function L(t, n) {
      try {
        var a =
          t.type === o("WAWebVoipSignalingEnums").TYPE.OFFER ? E(t) : T(t, n);
        return (a != null && O(a, t), a);
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
    function E(e) {
      var t = e.call_id;
      return y.has(t) || !k(e)
        ? (h.delete(t), x(y, t, d), null)
        : (x(h, t, d), "offer");
    }
    function k(e) {
      return o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited() ||
        !o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled()
        ? !1
        : o("WAWebVoipIncomingOfferRoute").getIncomingOfferRoute(e, I) ===
            "stale";
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_voip_incoming_offer_init_freshness_ms",
      );
    }
    function T(e, t) {
      return h.has(e.call_id) &&
        f.has(t) &&
        e.peer_jid.isUser() &&
        !o("WAWebVoipGatingUtils").isGroupCallMessage(e)
        ? "follow_up"
        : null;
    }
    function D(e, t, n) {
      try {
        var a,
          i = e.call_id,
          l = (a = C.get(i)) != null ? a : {},
          u = o("WAWebVoipStaleOfferMissedCallFieldstats").applyFollowUpStanza(
            l,
            t,
            e,
            n,
          );
        u !== l && (C.set(i, u), $(C, m));
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] stale follow-up record failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    function x(e, t, n) {
      (e.delete(t), e.add(t), $(e, n));
    }
    function $(e, t) {
      if (e.size > t) {
        var n = e.keys().next().value;
        n != null && e.delete(n);
      }
    }
    function P(e, t) {
      var n = t.maybeChild("enc");
      if (n == null || !n.hasContent()) return !1;
      var a = n.contentBytes();
      if (a.length === 0) return !1;
      var i =
          e +
          ":" +
          a.length +
          ":" +
          r("WACyrb53Hash")(o("WABase64").encodeB64(a)),
        l = b.has(i);
      return (x(b, i, p), l);
    }
    function N(e) {
      o("WAWebCoreActionsODS").logCallIncomingMissed();
      var t = Date.now();
      w(function () {
        o("WAWebBackendApi").frontendFireAndForget(
          "generateCallLogFromEventCallMissed",
          { callMissedData: F(e, Date.now() - t) },
        );
      });
    }
    function M(e) {
      var t;
      e.type !== o("WAWebVoipSignalingEnums").TYPE.TERMINATE ||
        !g.has((t = e.terminate_reason) != null ? t : "") ||
        w(function () {
          o("WAWebBackendApi").frontendFireAndForget(
            "generateCallLogFromEventUpdate1to1",
            {
              call1to1LogData: {
                CallId: e.call_id,
                PeerJid: o("WAWebWidFactory").asUserWidOrThrow(e.peer_jid),
                Result: o("WAWebVoipWaCallEnums").CallLogResult
                  .AcceptedElsewhere,
              },
            },
          );
        });
    }
    function w(e) {
      o("WAWebDbEncryptionKey")
        .DbEncKeyStore.waitForFinalDbMsgEncKey()
        .then(e)
        .catch(A);
    }
    function A(e) {
      o("WALogger")
        .ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
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
    function F(e, t) {
      return {
        CallId: e.call_id,
        PeerUserJid: o("WAWebWidFactory").asUserWidOrThrow(e.peer_jid),
        GroupJid: null,
        IsVideoCall: e.isVideoCall === !0,
        GroupInfo: null,
        CallParticipantInfos: [],
        TimeElapsedSinceCallOffer: e.e + t,
        SilenceReason: _,
        CallTermReason: o(
          "WAWebVoipStaleOfferMissedCallFieldstats",
        ).getStaleOfferCallTermReason(e, C.get(e.call_id)),
      };
    }
    function O(e, t) {
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
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.claimStaleCallStanza = v),
      (l.writeStaleCallLog = S),
      (l.resetStaleCallsForTesting = R));
  },
  98,
);
