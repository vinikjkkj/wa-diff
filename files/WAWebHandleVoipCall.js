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
    "WAWebVoipGatingUtils",
    "WAWebVoipHandleIncomingSignalingMessage",
    "WAWebVoipLidUtils",
    "WAWebVoipSendGroupCallRekeyRetryReceiptJob",
    "WAWebVoipSignalingEnums",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    function b(e) {
      return (
        o("WAWebVoipSignalingEnums").TYPE[e.tag().toUpperCase()] ||
        o("WAWebVoipSignalingEnums").TYPE.NONE
      );
    }
    var v = new (r("WADeprecatedWapParser"))("callParser", function (e) {
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
        v =
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
        S = {
          call_id: p,
          call_creator: _,
          caller_pn: g,
          peer_jid: c,
          peer_platform: (n = e.maybeAttrString("platform")) != null ? n : "",
          peer_app_version:
            (a = e.maybeAttrString("version")) != null ? a : "0",
          is_offline: e.hasAttr("offline"),
          type: b(m),
          common: { call_id: p, peer_jid: c.toString(), type: String(b(m)) },
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
          group_info_updates: v,
        };
      return {
        from: c,
        senderLid: d,
        stanzaId: e.attrString("id"),
        payloadTag: m.tag(),
        message: S,
        callCreator: _,
        voipNode: m,
      };
    });
    function S(t) {
      var n = v.parse(t);
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
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebVoipGatingUtils").isCallingEnabled()) return !1;
          var e = yield o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
            t = e.WAWebVoipInit;
          if (t.VoipInitEventEmitter.getIsVoipInited()) return !0;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: not initialized, init before processing msg",
              ])),
          );
          try {
            (yield t.initWAWebVoip("incoming"),
              !t.VoipInitEventEmitter.getIsVoipInited() &&
                t.VoipInitEventEmitter.getDidVoipInitError() &&
                (yield t.retryWAWebVoipInitAfterFailure()));
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: Failed to initialize VoIP",
                    ])),
                )
                .sendLogs("voip: init-failed-on-stanza"),
              !1
            );
          }
          if (t.VoipInitEventEmitter.getIsVoipInited()) return !0;
          if (o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling()) {
            var n;
            return (
              o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: skip call stanza, unsupported browser: ",
                      "",
                    ])),
                  (n = o(
                    "WAWebVoipGatingUtils",
                  ).getUnsupportedBrowserReason()) != null
                    ? n
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
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Failed to initialize VoIP",
                  ])),
              )
              .sendLogs("voip: init-resolved-not-inited-on-stanza"),
            !1
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n, r, o, a) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            var u = e.call_creator,
              c = e.call_id,
              d = yield R();
            if (
              d &&
              o("WAWebVoipGatingUtils").isGroupCallMessage(e) &&
              !o("WAWebVoipGatingUtils").isGroupCallingEnabled()
            ) {
              var h,
                y =
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
                      isVideo: (h = e.isVideoCall) != null ? h : !1,
                      callId: e.call_id,
                      isOffline: e.is_offline,
                      callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
                        .Missed,
                    },
                    y,
                  ),
                ),
                (C || (C = n("Promise"))).resolve("NO_ACK")
              );
            }
            switch (e.type) {
              case o("WAWebVoipSignalingEnums").TYPE.OFFER:
                if (
                  (D({
                    callCreator: u,
                    callId: c,
                    from: t,
                    stanzaId: a,
                    type: e.type,
                  }),
                  d)
                ) {
                  var b = yield o(
                    "WAWebVoipBackendLoadable",
                  ).requireVoipJsBackend();
                  yield b.WAWebHandleVoipCallOffer.handleVoipCallOffer(e, i);
                } else
                  yield o(
                    "WAWebVoipHandleIncomingSignalingMessage",
                  ).handleVoipIncomingSignalingMessage(e, i, !1);
                return "NO_ACK";
              case o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY:
                if (!d)
                  return (
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: ENC_REKEY received while VoIP stack is unavailable, returning NO_ACK",
                        ])),
                    ),
                    "NO_ACK"
                  );
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: received ENC_REKEY stanza from ",
                      ", call_id=",
                      ", stanzaId=",
                      "",
                    ])),
                  t.toString(),
                  c != null ? c : "unknown",
                  a,
                );
                try {
                  var v = yield o(
                      "WAWebVoipHandleIncomingSignalingMessage",
                    ).handleVoipIncomingEncRekey(e, i),
                    S = v.retryCount,
                    L = v.shouldRetry;
                  L
                    ? (o("WALogger").LOG(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: ENC_REKEY requires retry, retryCount=",
                            ", sending retry receipt",
                          ])),
                        String(S != null ? S : 0),
                      ),
                      yield r("WAWebVoipSendGroupCallRekeyRetryReceiptJob")(
                        a,
                        e,
                        S,
                      ))
                    : D({
                        callCreator: u,
                        callId: c,
                        from: t,
                        stanzaId: a,
                        type: o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY,
                      });
                } catch (e) {
                  o("WALogger").ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ENC_REKEY handling failed: ",
                        "",
                      ])),
                    e,
                  );
                }
                return "NO_ACK";
              case o("WAWebVoipSignalingEnums").TYPE.ACCEPT:
              case o("WAWebVoipSignalingEnums").TYPE.REJECT:
                return (
                  D({
                    callCreator: u,
                    callId: c,
                    from: t,
                    stanzaId: a,
                    type: e.type,
                  }),
                  yield o(
                    "WAWebVoipHandleIncomingSignalingMessage",
                  ).handleVoipIncomingSignalingMessage(e, i, d),
                  "NO_ACK"
                );
              case o("WAWebVoipSignalingEnums").TYPE.OFFER_NOTICE:
                return r("WAWebEnvironment").isWindows
                  ? (o("WALogger").ERROR(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "handleVoipIncomingSignalingMessage: offer notice unsupported on win",
                        ])),
                    ),
                    (C || (C = n("Promise"))).resolve("NO_ACK"))
                  : r("WAWebHandleVoipOfferNotice")(s);
              default:
                return (
                  yield o(
                    "WAWebVoipHandleIncomingSignalingMessage",
                  ).handleVoipIncomingSignalingMessage(e, i, d),
                  x(t, a, l)
                );
            }
          },
        )),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = S(e);
          if (t == null) return (C || (C = n("Promise"))).resolve("NO_ACK");
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
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
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
            r("WAWebEnvironment").isGuest &&
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
              ),
            E(i, a, u, c, l, e)
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
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
    function x(e, t, n) {
      return o("WAWap").wap("ack", {
        to: o("WAWebCommsWapMd").JID(e),
        id: o("WAWap").CUSTOM_STRING(t),
        class: "call",
        type: o("WAWap").MAYBE_CUSTOM_STRING(n),
      });
    }
    ((l.canUseVoipStackForCallMessage = R), (l.handleCall = I));
  },
  98,
);
