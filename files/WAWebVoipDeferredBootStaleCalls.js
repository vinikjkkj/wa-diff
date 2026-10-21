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
      d,
      m = 100,
      p = 1e3,
      _ = 1e3,
      f = 0,
      g = 9e4,
      h = new Set([
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
      y = new Set(["accepted_elsewhere", "screened_elsewhere"]),
      C = new Set(),
      b = new Set(),
      v = new Map(),
      S = new Set();
    function R(e, t, n) {
      var r = E(e, t);
      return (r === "follow_up" && P(e, t, n), r);
    }
    function L(e, t, n) {
      try {
        e: {
          if (e === "offer") {
            w(t.call_id, n) ||
              (A(t),
              o(
                "WAWebVoipStaleOfferMissedCallFieldstats",
              ).logStaleOfferMissedCallFieldstats(t, n, function () {
                return v.get(t.call_id);
              }));
            break e;
          }
          if (e === "follow_up") {
            F(t);
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        }
      } catch (e) {
        B(e);
      }
    }
    function E(t, n) {
      try {
        var a =
          t.type === o("WAWebVoipSignalingEnums").TYPE.OFFER ? k(t) : $(t, n);
        return (a != null && q(a, t), a);
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
    function k(e) {
      var t = e.call_id;
      return b.has(t) || !I(e)
        ? (C.delete(t), N(b, t, m), null)
        : (N(C, t, m), "offer");
    }
    function I(e) {
      return o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited()
        ? T() &&
            o("WAWebVoipIncomingOfferRoute").getIncomingOfferRoute(e, x) ===
              "stale"
        : o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled() &&
            o("WAWebVoipIncomingOfferRoute").getIncomingOfferRoute(e, D) ===
              "stale";
    }
    function T() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getWasVoipInitedByHiddenPrewarm() &&
        o("WAWebVoipBootInitDecision").isDeferredVoipBootHiddenPrewarmEnabled()
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_voip_incoming_offer_init_freshness_ms",
      );
    }
    function x() {
      var e = D();
      return e > 0 ? Math.max(e, g) : e;
    }
    function $(e, t) {
      return C.has(e.call_id) &&
        h.has(t) &&
        e.peer_jid.isUser() &&
        !o("WAWebVoipGatingUtils").isGroupCallMessage(e)
        ? "follow_up"
        : null;
    }
    function P(e, t, n) {
      try {
        var a,
          i = e.call_id,
          l = (a = v.get(i)) != null ? a : {},
          u = o("WAWebVoipStaleOfferMissedCallFieldstats").applyFollowUpStanza(
            l,
            t,
            e,
            n,
          );
        u !== l && (v.set(i, u), M(v, p));
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
    function N(e, t, n) {
      (e.delete(t), e.add(t), M(e, n));
    }
    function M(e, t) {
      if (e.size > t) {
        var n = e.keys().next().value;
        n != null && e.delete(n);
      }
    }
    function w(e, t) {
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
        l = S.has(i);
      return (N(S, i, _), l);
    }
    function A(e) {
      o("WAWebCoreActionsODS").logCallIncomingMissed();
      var t = Date.now();
      O(function () {
        o("WAWebBackendApi").frontendFireAndForget(
          "generateCallLogFromEventCallMissed",
          { callMissedData: W(e, Date.now() - t) },
        );
      });
    }
    function F(e) {
      var t;
      e.type !== o("WAWebVoipSignalingEnums").TYPE.TERMINATE ||
        !y.has((t = e.terminate_reason) != null ? t : "") ||
        O(function () {
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
    function O(e) {
      o("WAWebDbEncryptionKey")
        .DbEncKeyStore.waitForFinalDbMsgEncKey()
        .then(e)
        .catch(B);
    }
    function B(e) {
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
    function W(e, t) {
      return {
        CallId: e.call_id,
        PeerUserJid: o("WAWebWidFactory").asUserWidOrThrow(e.peer_jid),
        GroupJid: null,
        IsVideoCall: e.isVideoCall === !0,
        GroupInfo: null,
        CallParticipantInfos: [],
        TimeElapsedSinceCallOffer: e.e + t,
        SilenceReason: f,
        CallTermReason: o(
          "WAWebVoipStaleOfferMissedCallFieldstats",
        ).getStaleOfferCallTermReason(e, v.get(e.call_id)),
      };
    }
    function q(e, t) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          var n = String(t.is_call_ended === !0);
          if (
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited()
          ) {
            (U(e),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] stale call stanza with init stanza=",
                    " type=",
                    " call_ended=",
                    " queued_ms=",
                    "",
                  ])),
                e,
                t.type,
                n,
                t.e,
              ));
            return;
          }
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
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] stale call stanza without init stanza=",
                " type=",
                " call_ended=",
                " queued_ms=",
                "",
              ])),
            e,
            t.type,
            n,
            t.e,
          );
        },
      );
    }
    function U(e) {
      e: {
        if (e === "offer") {
          o(
            "WAWebCoreActionsODS",
          ).logCallIncomingDeferredBootStaleOfferAfterHiddenPrewarm();
          break e;
        }
        if (e === "follow_up") {
          o("WAWebCoreActionsODS").logCallIncomingDeferredBootStaleFollowUp();
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    ((l.claimStaleCallStanza = R), (l.writeStaleCallLog = L));
  },
  98,
);
