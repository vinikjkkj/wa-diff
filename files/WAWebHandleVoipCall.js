__d(
  "WAWebHandleVoipCall",
  [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebBackendApi",
    "WAWebCommsWapMd",
    "WAWebCoreActionsODS",
    "WAWebEnvironment",
    "WAWebHandleVoipOfferNotice",
    "WAWebHandleVoipTransfer",
    "WAWebJidToWid",
    "WAWebPageVisibilityRecency",
    "WAWebVoipAvailabilityCheckpoints",
    "WAWebVoipBackendLoadable",
    "WAWebVoipCallStateUtils",
    "WAWebVoipCalleeOfferToRingStore",
    "WAWebVoipChunkLoadFailFast",
    "WAWebVoipColdPathEarlyStart",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipDeferredBootStaleCalls",
    "WAWebVoipGatingUtils",
    "WAWebVoipHandleIncomingSignalingMessage",
    "WAWebVoipIncomingOfferBlockedLog",
    "WAWebVoipIncomingOfferReceivedWallClockStore",
    "WAWebVoipIncomingOfferRoute",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipInitReliabilityGates",
    "WAWebVoipLidUtils",
    "WAWebVoipLobbyVisibilityStore",
    "WAWebVoipLocalCallStateStore",
    "WAWebVoipSendGroupCallRekeyRetryReceiptJob",
    "WAWebVoipSignalingEnums",
    "WAWebVoipTabStateAtOfferStore",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWasmArtifactRecoveryEvents",
    "asyncToGeneratorRuntime",
    "cr:6324",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N = (e = n("cr:6324")) != null ? e : {},
      M = N.maybeOverrideJestE2ERelayEndpoints,
      w = "incoming";
    function A(e) {
      var t = o("WAWebVoipSignalingEnums").TYPE;
      return t[e.tag().toUpperCase()] || o("WAWebVoipSignalingEnums").TYPE.NONE;
    }
    var F = new (r("WADeprecatedWapParser"))("callParser", function (e) {
      var t, n, a, i, l, s, u;
      e.assertTag("call");
      var c = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("from")),
        d = e.hasAttr("sender_lid")
          ? o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("sender_lid"))
          : null,
        m = e.mapFirstChild(function (e) {
          return e;
        });
      if (!m) throw r("err")("Unrecognized call stanza");
      var p = m.attrString("call-id"),
        _ = o("WAWebJidToWid").jidWithTypeToWid(
          m.attrJidWithType("call-creator"),
        ),
        f = m.hasAttr("group-jid")
          ? o("WAWebJidToWid").jidWithTypeToWid(m.attrJidWithType("group-jid"))
          : null,
        g = m.hasAttr("caller_pn")
          ? o("WAWebJidToWid").jidWithTypeToWid(m.attrJidWithType("caller_pn"))
          : null,
        h = m.maybeAttrString("username"),
        y = m.maybeAttrString("caller_country_code"),
        C = m.maybeAttrString("notify"),
        b =
          (t = m.maybeChild("group_info")) == null
            ? void 0
            : t.mapChildren(function (e) {
                var t,
                  n,
                  r =
                    (t =
                      (n = e.maybeAttrString("push_name")) != null
                        ? n
                        : e.maybeAttrString("guest_name")) != null
                      ? t
                      : null;
                return {
                  jid: o("WAWebJidToWid").jidWithTypeToWid(
                    e.attrJidWithType("jid"),
                  ),
                  user_pn: e.hasAttr("user_pn")
                    ? o("WAWebJidToWid").jidWithTypeToWid(
                        e.attrJidWithType("user_pn"),
                      )
                    : null,
                  username: e.maybeAttrString("username"),
                  push_name: r,
                  account_kind: e.maybeAttrString("account_kind"),
                  guest_name: r,
                };
              }),
        v = babelHelpers.extends(
          {
            call_id: p,
            call_creator: _,
            caller_pn: g,
            peer_jid: c,
            peer_platform: (n = e.maybeAttrString("platform")) != null ? n : "",
            peer_app_version:
              (a = e.maybeAttrString("version")) != null ? a : "0",
            is_offline: e.hasAttr("offline"),
          },
          O(m),
          {
            type: A(m),
            common: { call_id: p, peer_jid: c.toString(), type: String(A(m)) },
            group_jid: f,
            caller_username: h,
            caller_country_code: y,
            caller_push_name: C,
            isVideoCall: m.hasChild("video"),
            silence_reason:
              (i =
                (l = m.maybeChild("silence")) == null
                  ? void 0
                  : l.maybeAttrString("reason")) != null
                ? i
                : void 0,
            t:
              (s = e.maybeAttrTime("t")) != null
                ? s
                : o("WATimeUtils").castToUnixTime(0),
            e: o("WATimeUtils").castUnixTimeToMillisTime(
              (u = e.maybeAttrTime("e")) != null
                ? u
                : o("WATimeUtils").castToUnixTime(0),
            ),
            group_info_updates: b,
          },
        );
      return {
        from: c,
        senderLid: d,
        stanzaId: e.attrString("id"),
        payloadTag: m.tag(),
        message: v,
        callCreator: _,
        voipNode: m,
      };
    });
    function O(e) {
      return e.tag() === "terminate"
        ? {
            has_terminate_transaction_id: !1,
            is_call_ended: !1,
            terminate_reason: e.maybeAttrString("reason"),
          }
        : B(e);
    }
    function B(e) {
      if (e.maybeAttrString("is_call_ended") !== "1")
        return {
          has_terminate_transaction_id: !1,
          is_call_ended: !1,
          terminate_reason: null,
        };
      var t = e.maybeChild("terminate_hint");
      return t == null
        ? {
            has_terminate_transaction_id: !1,
            is_call_ended: !0,
            terminate_reason: e.maybeAttrString("terminate_reason"),
          }
        : {
            has_terminate_transaction_id: t.hasAttr("terminate_transaction_id"),
            is_call_ended: !0,
            terminate_reason: t.maybeAttrString("terminate_reason"),
          };
    }
    function W(e) {
      var t = F.parse(e);
      return t.error
        ? (o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            t.error.toString(),
          ),
          null)
        : t.success;
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (!o("WAWebVoipGatingUtils").isCallingEnabled()) return !1;
          if (
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited()
          )
            return !0;
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] intent init_start trigger=",
                    "",
                  ])),
                w,
              );
            },
          );
          var a = self.performance.now(),
            i = yield o("WAWebVoipBackendLoadable")
              .requireVoipJsBackendForCall()
              .catch(function (e) {
                throw (
                  e instanceof
                    o("WAWebVoipChunkLoadFailFast").VoipChunkLoadError ||
                    o(
                      "WAWebVoipDeferredBootLogging",
                    ).safelyLogVoipDeferredBootEvent(function () {
                      o("WALogger")
                        .ERROR(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [deferred-boot] intent backend_load_failed trigger=",
                              "",
                            ])),
                          w,
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("voip: backend-load-failed-on-stanza");
                    }),
                  e instanceof
                    o("WAWebVoipChunkLoadFailFast").VoipChunkLoadError || !V()
                    ? e
                    : new (o("WAWebVoipChunkLoadFailFast").VoipChunkLoadError)()
                );
              }),
            l = i.WAWebVoipInit;
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] intent backend_ready trigger=",
                    "",
                  ])),
                w,
              );
            },
          );
          var s = !1;
          try {
            if (l.VoipInitEventEmitter.getIsVoipInited())
              return (
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent init_ready trigger=",
                        " source=concurrent_init retry_requested=false",
                      ])),
                    w,
                  );
                }),
                !0
              );
            if (
              (yield l.initWAWebVoip(
                w,
                void 0,
                e,
                Math.round(self.performance.now() - a),
                t,
              ),
              !l.VoipInitEventEmitter.getIsVoipInited() &&
                l.VoipInitEventEmitter.getDidVoipInitError() &&
                ((s = !0),
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent retry_requested trigger=",
                        "",
                      ])),
                    w,
                  );
                }),
                yield l.retryWAWebVoipInitAfterFailure()),
              l.VoipInitEventEmitter.getIsVoipInited())
            )
              return (
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent init_ready trigger=",
                        " source=intent_init retry_requested=",
                        "",
                      ])),
                    w,
                    s,
                  );
                }),
                !0
              );
          } catch (e) {
            return (
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger")
                    .ERROR(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] intent init_failed trigger=",
                          "",
                        ])),
                      w,
                    )
                    .sendLogs("voip: init-failed-on-stanza");
                },
              ),
              !1
            );
          }
          if (o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling()) {
            var u;
            return (
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent init_terminal trigger=",
                        " result=unsupported retry_requested=",
                        "",
                      ])),
                    w,
                    s,
                  );
                },
              ),
              o("WALogger")
                .LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: skip call stanza, unsupported browser: ",
                      "",
                    ])),
                  (u = o(
                    "WAWebVoipGatingUtils",
                  ).getUnsupportedBrowserReason()) != null
                    ? u
                    : "unknown",
                )
                .sendLogs("voip-call-stanza-unsupported-browser", {
                  sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                  sampling: 0.01,
                }),
              !1
            );
          }
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] intent init_terminal trigger=",
                    " result=not_inited retry_requested=",
                    "",
                  ])),
                w,
                s,
              );
            },
          );
          var c =
            (e == null ? void 0 : e.isFreshOffer) === !0
              ? ["fresh_offer"]
              : ["non-sad", "other_stanza"];
          return (
            (n = o("WALogger").ERROR(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Failed to initialize VoIP",
                ])),
            )).tags
              .apply(n, c)
              .sendLogs("voip: init-resolved-not-inited-on-stanza"),
            !1
          );
        })),
        U.apply(this, arguments)
      );
    }
    function V() {
      return (
        navigator.onLine !== !1 &&
        o("WAWebVoipInitReliabilityGates").isVoipInitChunkFixEnabled()
      );
    }
    var H = null,
      G = !1;
    function z(e) {
      return e ? "available" : "fallback";
    }
    function j(e) {
      if (e instanceof o("WAWebVoipChunkLoadFailFast").VoipChunkLoadError)
        return "chunk_reload_required";
      throw e;
    }
    function K(e, t) {
      return {
        isCallEnded: e.is_call_ended === !0,
        isFreshOffer:
          e.type === o("WAWebVoipSignalingEnums").TYPE.OFFER &&
          o("WAWebVoipIncomingOfferRoute").isFreshIncomingOffer(e),
        isGroup: Q(e),
        isOffline: e.is_offline === !0,
        msgType: e.type,
        payloadTag: t,
        queuedMs: e.e,
      };
    }
    function Q(e) {
      return (
        o("WAWebVoipGatingUtils").isGroupCallMessage(e) ||
        e.peer_jid.isGroupCall() ||
        e.has_terminate_transaction_id === !0
      );
    }
    function X(e) {
      return (
        e.type === o("WAWebVoipSignalingEnums").TYPE.OFFER &&
        e.silence_reason == null &&
        o("WAWebVoipIncomingOfferRoute").isFreshIncomingOffer(e) &&
        o("WAWebVoipGatingUtils").isCallingEnabled() &&
        !o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling()
      );
    }
    function Y(e, t, n) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          if ((Z(), H != null))
            return { availability: "reload_required", kind: H };
          if (
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipStackUnresponsive()
          )
            return (
              e.type === o("WAWebVoipSignalingEnums").TYPE.OFFER &&
                o("WAWebCoreActionsODS").logCallIncomingHeldStackUnresponsive(),
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent blocked trigger=",
                        " reason=stack_unresponsive",
                      ])),
                    w,
                  );
                },
              ),
              { availability: "reload_required", kind: "unresponsive" }
            );
          var a = e.type === o("WAWebVoipSignalingEnums").TYPE.OFFER;
          e.type === o("WAWebVoipSignalingEnums").TYPE.TERMINATE &&
            o("WAWebBackendApi").frontendFireAndForget(
              "finishVoipInitReloadRecovery",
              { callId: e.call_id },
            );
          var i = q(K(e, t), r).then(z, j);
          if (!a) return ne(yield i);
          var l = o("WAWebBackendApi")
            .frontendSendAndReceive("startVoipInitReloadRecovery", {
              callId: e.call_id,
              canRing: o("WAWebVoipIncomingOfferRoute").isFreshIncomingOffer(e),
            })
            .then(
              function (e) {
                return e === "artifact_unavailable"
                  ? "artifact_reload_required"
                  : e === "cancelled"
                    ? i
                    : e === "unavailable"
                      ? "reload_required"
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              e,
                          );
                        })();
              },
              function () {
                return i;
              },
            );
          try {
            var s = yield (P || (P = n("Promise"))).race([i, l]);
            return ne(s);
          } finally {
            o("WAWebBackendApi").frontendFireAndForget(
              "finishVoipInitReloadRecovery",
              { callId: e.call_id },
            );
          }
        })),
        J.apply(this, arguments)
      );
    }
    function Z() {
      H != null &&
        (H === "artifact" ||
          o("WAWebVoipInitReliabilityGates").isVoipInitUnlatchEnabled()) &&
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited() &&
        te(null);
    }
    function ee() {
      G ||
        ((G = !0),
        o("WAWebVoipWasmArtifactRecoveryEvents").onVoipWasmArtifactRecovered(
          function () {
            H === "artifact" && te(null);
          },
        ));
    }
    function te(e) {
      ((H = e),
        o(
          "WAWebVoipAvailabilityCheckpoints",
        ).reportVoipBackendReloadRequirement(e));
    }
    function ne(e) {
      e: {
        if (e === "artifact_reload_required") {
          var t = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          return (
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] intent blocked trigger=",
                      " reason=artifact_reload_required inited=",
                      "",
                    ])),
                  w,
                  t,
                );
              },
            ),
            t || (te("artifact"), ee()),
            { availability: "reload_required", kind: "artifact" }
          );
          break e;
        }
        if (e === "reload_required") {
          return (
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] intent blocked trigger=",
                      " reason=reload_required",
                    ])),
                  w,
                );
              },
            ),
            te("stuck"),
            { availability: "reload_required", kind: "stuck" }
          );
          break e;
        }
        if (e === "chunk_reload_required") {
          return (
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] intent blocked trigger=",
                      " reason=chunk_load_failed",
                    ])),
                  w,
                );
              },
            ),
            te("chunk"),
            o("WAWebBackendApi").frontendFireAndForget(
              "markVoipChunkUnavailable",
            ),
            { availability: "reload_required", kind: "chunk" }
          );
          break e;
        }
        if (e === "available")
          return { availability: "available", kind: "none" };
        if (e === "fallback") return { availability: "fallback", kind: "none" };
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function re(e) {
      return (
        e === o("WAWebVoipSignalingEnums").TYPE.OFFER ||
        e === o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY ||
        e === o("WAWebVoipSignalingEnums").TYPE.ACCEPT ||
        e === o("WAWebVoipSignalingEnums").TYPE.REJECT
      );
    }
    function oe(e, t, n, r, o) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l = e.call_creator,
              s = e.call_id;
            if (!i)
              return (
                o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ENC_REKEY received while VoIP stack is unavailable, returning NO_ACK",
                    ])),
                ),
                "NO_ACK"
              );
            o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: received ENC_REKEY stanza from ",
                  ", call_id=",
                  ", stanzaId=",
                  "",
                ])),
              t.toString(),
              s != null ? s : "unknown",
              n,
            );
            try {
              var u = yield o(
                  "WAWebVoipHandleIncomingSignalingMessage",
                ).handleVoipIncomingEncRekey(e, a),
                c = u.retryCount,
                d = u.shouldRetry;
              d
                ? (o("WALogger").LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ENC_REKEY requires retry, retryCount=",
                        ", sending retry receipt",
                      ])),
                    String(c != null ? c : 0),
                  ),
                  yield r("WAWebVoipSendGroupCallRekeyRetryReceiptJob")(
                    n,
                    e,
                    c,
                  ))
                : ge({
                    callCreator: l,
                    callId: s,
                    from: t,
                    stanzaId: n,
                    type: o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY,
                  });
            } catch (e) {
              o("WALogger").ERROR(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: ENC_REKEY handling failed: ",
                    "",
                  ])),
                e,
              );
            }
            return "NO_ACK";
          },
        )),
        ae.apply(this, arguments)
      );
    }
    function ie(e, t, n, r, o) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l = e.call_creator,
              s = e.call_id;
            switch (e.type) {
              case o("WAWebVoipSignalingEnums").TYPE.OFFER:
                if (
                  (ge({
                    callCreator: l,
                    callId: s,
                    from: t,
                    stanzaId: n,
                    type: e.type,
                  }),
                  i)
                ) {
                  var u = yield o(
                    "WAWebVoipBackendLoadable",
                  ).requireVoipJsBackend();
                  yield u.WAWebHandleVoipCallOffer.handleVoipCallOffer(e, a);
                } else
                  yield o(
                    "WAWebVoipHandleIncomingSignalingMessage",
                  ).handleVoipIncomingSignalingMessage(e, a, !1);
                return "NO_ACK";
              case o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY:
                return oe(e, t, n, a, i);
              case o("WAWebVoipSignalingEnums").TYPE.ACCEPT:
              case o("WAWebVoipSignalingEnums").TYPE.REJECT:
                return (
                  ge({
                    callCreator: l,
                    callId: s,
                    from: t,
                    stanzaId: n,
                    type: e.type,
                  }),
                  yield o(
                    "WAWebVoipHandleIncomingSignalingMessage",
                  ).handleVoipIncomingSignalingMessage(e, a, i),
                  "NO_ACK"
                );
              default:
                throw r("err")("Unexpected receipt-bearing call message");
            }
          },
        )),
        le.apply(this, arguments)
      );
    }
    function se(e) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.canUseVoipStack,
            n = e.from,
            a = e.message,
            i = e.node,
            l = e.payloadTag,
            s = e.stanzaId,
            u = e.voipNode;
          return re(a.type)
            ? ie(a, n, s, u, t)
            : a.type === o("WAWebVoipSignalingEnums").TYPE.OFFER_NOTICE
              ? r("WAWebEnvironment").isWindows &&
                !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()
                ? (o("WALogger").ERROR(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "handleVoipIncomingSignalingMessage: offer notice unsupported on win",
                      ])),
                  ),
                  "NO_ACK")
                : r("WAWebHandleVoipOfferNotice")(i)
              : (l === "transfer" && t
                  ? yield o("WAWebHandleVoipTransfer").handleVoipTransfer(a, u)
                  : yield o(
                      "WAWebVoipHandleIncomingSignalingMessage",
                    ).handleVoipIncomingSignalingMessage(a, u, t),
                he({ ackString: l, from: n, stanzaId: s }));
        })),
        ue.apply(this, arguments)
      );
    }
    function ce(e) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebPageVisibilityRecency").snapshotPageVisibility();
          M == null || M(e);
          var a = W(e);
          if (a == null) return (P || (P = n("Promise"))).resolve("NO_ACK");
          var i = a.from,
            l = a.message,
            s = a.payloadTag,
            u = a.senderLid,
            c = a.stanzaId,
            d = a.voipNode,
            m = o("WAWebVoipDeferredBootStaleCalls").claimStaleCallStanza(
              l,
              s,
              d,
            );
          (l.type === o("WAWebVoipSignalingEnums").TYPE.OFFER &&
            o("WAWebVoipCallStateUtils").isCallTerminal(
              o("WAWebVoipLocalCallStateStore").getLocalCallState(),
            ) &&
            (o("WAWebVoipCalleeOfferToRingStore").recordCalleeOfferReceived(
              l.call_id,
            ),
            o(
              "WAWebVoipIncomingOfferReceivedWallClockStore",
            ).recordIncomingOfferReceivedWallClock(l.call_id),
            o("WAWebVoipTabStateAtOfferStore").recordTabStateAtOffer(
              l.call_id,
              t.visibility,
            ),
            o("WAWebVoipLobbyVisibilityStore").recordIncomingRing(
              l.call_id,
              o("WAWebVoipGatingUtils").isGroupCallMessage(l),
            )),
            me(l, m, t));
          try {
            (u != null &&
              (i.isLid() &&
                o("WALogger")
                  .ERROR(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "handleCall: sender_lid in a lid call",
                      ])),
                  )
                  .sendLogs("lid-call-sender-lid"),
              u.isUser() &&
                (yield o(
                  "WAWebVoipLidUtils",
                ).attemptPersistLidMappingAndUserAttributes({
                  jid: u,
                  phoneNumber: i.isUser() ? i : null,
                  flushImmediately: !0,
                }))),
              yield o(
                "WAWebVoipLidUtils",
              ).persistAttributesAndLidMappingsForCall(l));
          } catch (e) {
            o("WALogger")
              .ERROR(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: identity persistence failed, continuing to dispatch",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-identity-persistence-failed", {
                sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                sampling: 0.01,
              });
          }
          return (
            o("WAWebVoipGatingUtils").isGuestViewer() &&
              l.group_info_updates != null &&
              o("WAWebBackendApi").frontendFireAndForget(
                "hydrateGuestParticipantContacts",
                {
                  participants: l.group_info_updates.map(function (e) {
                    return {
                      jid: e.jid,
                      pushName: e.push_name,
                      username: e.username,
                      isGuestUser:
                        o("WAWebVoipWaCallEnums").wireStringToAccountKind(
                          e.account_kind,
                        ) === o("WAWebVoipWaCallEnums").AccountKind.Guest,
                    };
                  }),
                },
              ),
            pe({
              arrival: t,
              callMessage: {
                from: i,
                message: l,
                node: e,
                payloadTag: s,
                stanzaId: c,
                voipNode: d,
              },
              staleCallStanza: m,
            })
          );
        })),
        de.apply(this, arguments)
      );
    }
    function me(e, t, n) {
      t == null &&
        e.type === o("WAWebVoipSignalingEnums").TYPE.OFFER &&
        o("WAWebVoipIncomingOfferRoute").isFreshIncomingOffer(e) &&
        !Q(e) &&
        o("WAWebVoipColdPathEarlyStart").startVoipColdPathEarly("incoming", n);
    }
    function pe(e) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.arrival,
            n = e.callMessage,
            r = e.staleCallStanza;
          if (r != null) return fe(r, n);
          var a = Y(n.message, n.payloadTag, t),
            i = yield X(n.message)
              ? o(
                  "WAWebVoipIncomingOfferBlockedLog",
                ).watchIncomingOfferDecision(n.message.call_id, Q(n.message), a)
              : a,
            l = i.availability;
          return l === "reload_required"
            ? (o("WALogger").LOG(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: retaining call stanza until user reloads, type=",
                    "",
                  ])),
                n.payloadTag,
              ),
              "NO_ACK")
            : se(
                babelHelpers.extends({}, n, {
                  canUseVoipStack: l === "available",
                }),
              );
        })),
        _e.apply(this, arguments)
      );
    }
    function fe(e, t) {
      var n = t.from,
        r = t.message,
        a = t.payloadTag,
        i = t.stanzaId,
        l = t.voipNode,
        s = re(r.type);
      return (
        s &&
          ge({
            callCreator: r.call_creator,
            callId: r.call_id,
            from: n,
            stanzaId: i,
            type: r.type,
          }),
        o("WAWebVoipDeferredBootStaleCalls").writeStaleCallLog(e, r, l),
        s ? "NO_ACK" : he({ ackString: a, from: n, stanzaId: i })
      );
    }
    function ge(e) {
      var t = e.callCreator,
        n = e.callId,
        r = e.from,
        a = e.stanzaId,
        i = e.type,
        l;
      switch (i) {
        case o("WAWebVoipSignalingEnums").TYPE.OFFER:
          l = o("WAWap").wap("offer", {
            "call-id": o("WAWap").CUSTOM_STRING(n),
            "call-creator": o("WAWebCommsWapMd").JID(t),
          });
          break;
        case o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY:
          l = o("WAWap").wap("enc_rekey", {
            "call-id": o("WAWap").CUSTOM_STRING(n),
            "call-creator": o("WAWebCommsWapMd").JID(t),
          });
          break;
        case o("WAWebVoipSignalingEnums").TYPE.ACCEPT:
          l = o("WAWap").wap("accept", {
            "call-id": o("WAWap").CUSTOM_STRING(n),
            "call-creator": o("WAWebCommsWapMd").JID(t),
          });
          break;
        case o("WAWebVoipSignalingEnums").TYPE.REJECT:
          l = o("WAWap").wap("reject", {
            "call-id": o("WAWap").CUSTOM_STRING(n),
            "call-creator": o("WAWebCommsWapMd").JID(t),
          });
          break;
      }
      o("WADeprecatedSendIq").deprecatedCastStanza(
        o("WAWap").wap(
          "receipt",
          { to: o("WAWebCommsWapMd").JID(r), id: o("WAWap").CUSTOM_STRING(a) },
          l,
        ),
      );
    }
    function he(e) {
      var t = e.ackString,
        n = e.from,
        r = e.stanzaId;
      return o("WAWap").wap("ack", {
        to: o("WAWebCommsWapMd").JID(n),
        id: o("WAWap").CUSTOM_STRING(r),
        class: "call",
        type: o("WAWap").MAYBE_CUSTOM_STRING(t),
      });
    }
    ((l.parseCallNode = W),
      (l.canUseVoipStackForCallMessage = q),
      (l.handleCall = ce));
  },
  98,
);
