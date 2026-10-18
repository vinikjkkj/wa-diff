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
      var r = k(e, t);
      return (r === "follow_up" && N(e, t, n), r);
    }
    function L(e, t, n) {
      try {
        e: {
          if (e === "offer") {
            A(t.call_id, n) ||
              (F(t),
              o(
                "WAWebVoipStaleOfferMissedCallFieldstats",
              ).logStaleOfferMissedCallFieldstats(t, n, function () {
                return v.get(t.call_id);
              }));
            break e;
          }
          if (e === "follow_up") {
            O(t);
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        }
      } catch (e) {
        W(e);
      }
    }
    function E() {
      (C.clear(), b.clear(), v.clear(), S.clear());
    }
    function k(t, n) {
      try {
        var a =
          t.type === o("WAWebVoipSignalingEnums").TYPE.OFFER ? I(t) : P(t, n);
        return (a != null && U(a, t), a);
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
    function I(e) {
      var t = e.call_id;
      return b.has(t) || !T(e)
        ? (C.delete(t), M(b, t, m), null)
        : (M(C, t, m), "offer");
    }
    function T(e) {
      return o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited()
        ? D() &&
            o("WAWebVoipIncomingOfferRoute").getIncomingOfferRoute(e, $) ===
              "stale"
        : o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled() &&
            o("WAWebVoipIncomingOfferRoute").getIncomingOfferRoute(e, x) ===
              "stale";
    }
    function D() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getWasVoipInitedByHiddenPrewarm() &&
        o("WAWebVoipBootInitDecision").isDeferredVoipBootHiddenPrewarmEnabled()
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_voip_incoming_offer_init_freshness_ms",
      );
    }
    function $() {
      var e = x();
      return e > 0 ? Math.max(e, g) : e;
    }
    function P(e, t) {
      return C.has(e.call_id) &&
        h.has(t) &&
        e.peer_jid.isUser() &&
        !o("WAWebVoipGatingUtils").isGroupCallMessage(e)
        ? "follow_up"
        : null;
    }
    function N(e, t, n) {
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
        u !== l && (v.set(i, u), w(v, p));
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
    function M(e, t, n) {
      (e.delete(t), e.add(t), w(e, n));
    }
    function w(e, t) {
      if (e.size > t) {
        var n = e.keys().next().value;
        n != null && e.delete(n);
      }
    }
    function A(e, t) {
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
      return (M(S, i, _), l);
    }
    function F(e) {
      o("WAWebCoreActionsODS").logCallIncomingMissed();
      var t = Date.now();
      B(function () {
        o("WAWebBackendApi").frontendFireAndForget(
          "generateCallLogFromEventCallMissed",
          { callMissedData: q(e, Date.now() - t) },
        );
      });
    }
    function O(e) {
      var t;
      e.type !== o("WAWebVoipSignalingEnums").TYPE.TERMINATE ||
        !y.has((t = e.terminate_reason) != null ? t : "") ||
        B(function () {
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
    function B(e) {
      o("WAWebDbEncryptionKey")
        .DbEncKeyStore.waitForFinalDbMsgEncKey()
        .then(e)
        .catch(W);
    }
    function W(e) {
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
    function q(e, t) {
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
    function U(e, t) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          var n = String(t.is_call_ended === !0);
          if (
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited()
          ) {
            (V(e),
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
    function V(e) {
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
    ((l.claimStaleCallStanza = R),
      (l.writeStaleCallLog = L),
      (l.resetStaleCallsForTesting = E));
  },
  98,
);
