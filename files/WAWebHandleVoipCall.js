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
    "WAWebCallLogMsgData.flow",
    "WAWebCommsWapMd",
    "WAWebEnvironment",
    "WAWebHandleVoipOfferNotice",
    "WAWebJidToWid",
    "WAWebVoipBackendLoadable",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipHandleIncomingSignalingMessage",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipLidUtils",
    "WAWebVoipSendGroupCallRekeyRetryReceiptJob",
    "WAWebVoipSignalingEnums",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
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
      x = "incoming";
    function $(e) {
      return (
        o("WAWebVoipSignalingEnums").TYPE[e.tag().toUpperCase()] ||
        o("WAWebVoipSignalingEnums").TYPE.NONE
      );
    }
    var P = new (r("WADeprecatedWapParser"))("callParser", function (e) {
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
        v = {
          call_id: p,
          call_creator: _,
          caller_pn: g,
          peer_jid: c,
          peer_platform: (n = e.maybeAttrString("platform")) != null ? n : "",
          peer_app_version:
            (a = e.maybeAttrString("version")) != null ? a : "0",
          is_offline: e.hasAttr("offline"),
          type: $(m),
          common: { call_id: p, peer_jid: c.toString(), type: String($(m)) },
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
        };
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
    function N(t) {
      var n = P.parse(t);
      return n.error
        ? (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            n.error.toString(),
          ),
          null)
        : n.success;
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] intent init_start trigger=",
                    "",
                  ])),
                x,
              );
            },
          );
          var e = yield o("WAWebVoipBackendLoadable")
              .requireVoipJsBackend()
              .catch(function (e) {
                throw (
                  o(
                    "WAWebVoipDeferredBootLogging",
                  ).safelyLogVoipDeferredBootEvent(function () {
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [deferred-boot] intent backend_load_failed trigger=",
                            "",
                          ])),
                        x,
                      )
                      .sendLogs("voip: backend-load-failed-on-stanza");
                  }),
                  e
                );
              }),
            t = e.WAWebVoipInit;
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] intent backend_ready trigger=",
                    "",
                  ])),
                x,
              );
            },
          );
          var n = !1;
          try {
            if (t.VoipInitEventEmitter.getIsVoipInited())
              return (
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent init_ready trigger=",
                        " source=concurrent_init retry_requested=false",
                      ])),
                    x,
                  );
                }),
                !0
              );
            if (
              (yield t.initWAWebVoip(x),
              !t.VoipInitEventEmitter.getIsVoipInited() &&
                t.VoipInitEventEmitter.getDidVoipInitError() &&
                ((n = !0),
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent retry_requested trigger=",
                        "",
                      ])),
                    x,
                  );
                }),
                yield t.retryWAWebVoipInitAfterFailure()),
              t.VoipInitEventEmitter.getIsVoipInited())
            )
              return (
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent init_ready trigger=",
                        " source=intent_init retry_requested=",
                        "",
                      ])),
                    x,
                    n,
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
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] intent init_failed trigger=",
                          "",
                        ])),
                      x,
                    )
                    .sendLogs("voip: init-failed-on-stanza");
                },
              ),
              !1
            );
          }
          if (o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling()) {
            var r;
            return (
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent init_terminal trigger=",
                        " result=unsupported retry_requested=",
                        "",
                      ])),
                    x,
                    n,
                  );
                },
              ),
              o("WALogger")
                .LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: skip call stanza, unsupported browser: ",
                      "",
                    ])),
                  (r = o(
                    "WAWebVoipGatingUtils",
                  ).getUnsupportedBrowserReason()) != null
                    ? r
                    : "unknown",
                )
                .sendLogs("voip-call-stanza-unsupported-browser", {
                  sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                  sampling: 0.01,
                }),
              !1
            );
          }
          return (
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] intent init_terminal trigger=",
                      " result=not_inited retry_requested=",
                      "",
                    ])),
                  x,
                  n,
                );
              },
            ),
            o("WALogger")
              .ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Failed to initialize VoIP",
                  ])),
              )
              .sendLogs("voip: init-resolved-not-inited-on-stanza"),
            !1
          );
        })),
        w.apply(this, arguments)
      );
    }
    var A = null;
    function F() {
      A = null;
    }
    function O(e) {
      return e ? "available" : "fallback";
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if ((q(), A != null)) return "reload_required";
          var t = e.type === o("WAWebVoipSignalingEnums").TYPE.OFFER;
          e.type === o("WAWebVoipSignalingEnums").TYPE.TERMINATE &&
            o("WAWebBackendApi").frontendFireAndForget(
              "finishVoipInitReloadRecovery",
              { callId: e.call_id },
            );
          var r = M().then(O);
          if (!t) return r;
          var a = o("WAWebBackendApi")
            .frontendSendAndReceive("startVoipInitReloadRecovery", {
              callId: e.call_id,
            })
            .then(
              function (e) {
                return e === "artifact_unavailable"
                  ? "artifact_reload_required"
                  : e === "cancelled"
                    ? r
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
                return r;
              },
            );
          try {
            var i = yield (D || (D = n("Promise"))).race([r, a]);
            return U(i);
          } finally {
            o("WAWebBackendApi").frontendFireAndForget(
              "finishVoipInitReloadRecovery",
              { callId: e.call_id },
            );
          }
        })),
        W.apply(this, arguments)
      );
    }
    function q() {
      A === "artifact" &&
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited() &&
        (A = null);
    }
    function U(e) {
      e: {
        if (e === "artifact_reload_required") {
          var t = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          return (
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] intent blocked trigger=",
                      " reason=artifact_reload_required inited=",
                      "",
                    ])),
                  x,
                  t,
                );
              },
            ),
            t || (A = "artifact"),
            "reload_required"
          );
          break e;
        }
        if (e === "reload_required") {
          return (
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] intent blocked trigger=",
                      " reason=reload_required",
                    ])),
                  x,
                );
              },
            ),
            (A = "stuck"),
            "reload_required"
          );
          break e;
        }
        if (e === "available") return "available";
        if (e === "fallback") return "fallback";
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function V(e) {
      return (
        e === o("WAWebVoipSignalingEnums").TYPE.OFFER ||
        e === o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY ||
        e === o("WAWebVoipSignalingEnums").TYPE.ACCEPT ||
        e === o("WAWebVoipSignalingEnums").TYPE.REJECT
      );
    }
    function H(e, t, n, r, o) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l = e.call_creator,
              s = e.call_id;
            if (!i)
              return (
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ENC_REKEY received while VoIP stack is unavailable, returning NO_ACK",
                    ])),
                ),
                "NO_ACK"
              );
            o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
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
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
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
                : J({
                    callCreator: l,
                    callId: s,
                    from: t,
                    stanzaId: n,
                    type: o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY,
                  });
            } catch (e) {
              o("WALogger").ERROR(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: ENC_REKEY handling failed: ",
                    "",
                  ])),
                e,
              );
            }
            return "NO_ACK";
          },
        )),
        G.apply(this, arguments)
      );
    }
    function z(e, t, n, r, o) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l = e.call_creator,
              s = e.call_id;
            switch (e.type) {
              case o("WAWebVoipSignalingEnums").TYPE.OFFER:
                if (
                  (J({
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
                return H(e, t, n, a, i);
              case o("WAWebVoipSignalingEnums").TYPE.ACCEPT:
              case o("WAWebVoipSignalingEnums").TYPE.REJECT:
                return (
                  J({
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
        j.apply(this, arguments)
      );
    }
    function K(e, t, n, r, o, a, i) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, u) {
            if (
              u &&
              o("WAWebVoipGatingUtils").isGroupCallMessage(e) &&
              !o("WAWebVoipGatingUtils").isGroupCallingEnabled()
            ) {
              var c,
                d =
                  e.group_jid != null
                    ? { isGroup: !0, groupJid: e.group_jid }
                    : { isGroup: !0, groupJid: null };
              return (
                o("WAWebBackendApi").frontendFireAndForget(
                  "generateCallLogOfferNotice",
                  babelHelpers.extends(
                    {
                      callCreatorWid: e.call_creator,
                      offerTime: e.t,
                      isVideo: (c = e.isVideoCall) != null ? c : !1,
                      callId: e.call_id,
                      isOffline: e.is_offline,
                      callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
                        .Missed,
                    },
                    d,
                  ),
                ),
                (D || (D = n("Promise"))).resolve("NO_ACK")
              );
            }
            if (V(e.type)) return z(e, t, a, i, u);
            switch (e.type) {
              case o("WAWebVoipSignalingEnums").TYPE.OFFER_NOTICE:
                return r("WAWebEnvironment").isWindows &&
                  !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()
                  ? (o("WALogger").ERROR(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "handleVoipIncomingSignalingMessage: offer notice unsupported on win",
                        ])),
                    ),
                    (D || (D = n("Promise"))).resolve("NO_ACK"))
                  : r("WAWebHandleVoipOfferNotice")(s);
              default:
                return (
                  yield o(
                    "WAWebVoipHandleIncomingSignalingMessage",
                  ).handleVoipIncomingSignalingMessage(e, i, u),
                  Z({ ackString: l, from: t, stanzaId: a })
                );
            }
          },
        )),
        Q.apply(this, arguments)
      );
    }
    function X(e) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = N(e);
          if (t == null) return (D || (D = n("Promise"))).resolve("NO_ACK");
          var a = t.from,
            i = t.message,
            l = t.payloadTag,
            s = t.senderLid,
            u = t.stanzaId,
            c = t.voipNode;
          try {
            (s != null &&
              (a.isLid() &&
                o("WALogger")
                  .ERROR(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "handleCall: sender_lid in a lid call",
                      ])),
                  )
                  .sendLogs("lid-call-sender-lid"),
              s.isUser() &&
                (yield o(
                  "WAWebVoipLidUtils",
                ).attemptPersistLidMappingAndUserAttributes({
                  jid: s,
                  phoneNumber: a.isUser() ? a : null,
                  flushImmediately: !0,
                }))),
              yield o(
                "WAWebVoipLidUtils",
              ).persistAttributesAndLidMappingsForCall(i));
          } catch (e) {
            o("WALogger")
              .ERROR(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: identity persistence failed, continuing to dispatch",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-identity-persistence-failed", {
                sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                sampling: 0.01,
              });
          }
          o("WAWebVoipGatingUtils").isGuestViewer() &&
            i.group_info_updates != null &&
            o("WAWebBackendApi").frontendFireAndForget(
              "hydrateGuestParticipantContacts",
              {
                participants: i.group_info_updates.map(function (e) {
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
            );
          var d = yield B(i);
          return d === "reload_required"
            ? (o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: retaining call stanza until user reloads, type=",
                    "",
                  ])),
                l,
              ),
              "NO_ACK")
            : K(i, a, u, c, l, e, d === "available");
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e) {
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
    function Z(e) {
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
    ((l.canUseVoipStackForCallMessage = M),
      (l.resetVoipInitReloadRequiredForTest = F),
      (l.handleCall = X));
  },
  98,
);
