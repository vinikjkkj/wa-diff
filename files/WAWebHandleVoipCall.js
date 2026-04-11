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
    "WAWebUserPrefsMeUser",
    "WAWebVoipBackendLoadable",
    "WAWebVoipGatingUtils",
    "WAWebVoipHandleIncomingSignalingMessage",
    "WAWebVoipLidUtils",
    "WAWebVoipSendGroupCallRekeyRetryReceiptJob",
    "WAWebVoipSignalingEnums",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(e) {
      return (
        o("WAWebVoipSignalingEnums").TYPE[e.tag().toUpperCase()] ||
        o("WAWebVoipSignalingEnums").TYPE.NONE
      );
    }
    var g = new (r("WADeprecatedWapParser"))("callParser", function (e) {
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
        g = m.hasAttr("group-jid")
          ? o("WAWebJidToWid").jidWithTypeToWid(m.attrJidWithType("group-jid"))
          : null,
        h = m.hasAttr("caller_pn")
          ? o("WAWebJidToWid").jidWithTypeToWid(m.attrJidWithType("caller_pn"))
          : null,
        y = m.maybeAttrString("username"),
        C = m.maybeAttrString("caller_country_code"),
        b = m.maybeAttrString("notify"),
        v =
          (t = m.maybeChild("group_info")) == null
            ? void 0
            : t.mapChildren(function (e) {
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
                  guest_name: e.maybeAttrString("guest_name"),
                };
              }),
        S = {
          call_id: p,
          call_creator: _,
          caller_pn: h,
          peer_jid: c,
          peer_platform: (n = e.maybeAttrString("platform")) != null ? n : "",
          peer_app_version:
            (a = e.maybeAttrString("version")) != null ? a : "0",
          is_offline: e.hasAttr("offline"),
          type: f(m),
          common: { call_id: p, peer_jid: c.toString(), type: String(f(m)) },
          group_jid: g,
          caller_username: y,
          caller_country_code: C,
          caller_push_name: b,
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
    function h(t) {
      var n = g.parse(t);
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
    function y(e, t, n, r, o, a) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, f) {
            var g = e.call_creator,
              h = e.call_id;
            if (o("WAWebVoipGatingUtils").isCallingEnabled()) {
              var y = yield o(
                  "WAWebVoipBackendLoadable",
                ).requireVoipJsBackend(),
                C = y.WAWebVoipInit;
              if (!C.VoipInitEventEmitter.getIsVoipInited()) {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: not initialized, init before processing msg",
                    ])),
                );
                try {
                  yield C.initWAWebVoip();
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
                    "NO_ACK"
                  );
                }
              }
            }
            if (
              o("WAWebVoipGatingUtils").isCallingEnabled() &&
              o("WAWebVoipGatingUtils").isGroupCallMessage(e) &&
              !o("WAWebVoipGatingUtils").isGroupCallingEnabled()
            ) {
              var b,
                v =
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
                      isVideo: (b = e.isVideoCall) != null ? b : !1,
                      callId: e.call_id,
                      isOffline: e.is_offline,
                      callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
                        .Missed,
                    },
                    v,
                  ),
                ),
                (_ || (_ = n("Promise"))).resolve("NO_ACK")
              );
            }
            switch (e.type) {
              case o("WAWebVoipSignalingEnums").TYPE.OFFER:
                if (
                  (S(t, a, h, g, e.type),
                  o("WAWebVoipGatingUtils").isCallingEnabled())
                ) {
                  var L = yield o(
                    "WAWebVoipBackendLoadable",
                  ).requireVoipJsBackend();
                  yield L.WAWebHandleVoipCallOffer.handleVoipCallOffer(e, i);
                } else
                  yield o(
                    "WAWebVoipHandleIncomingSignalingMessage",
                  ).handleVoipIncomingSignalingMessage(e, i);
                return "NO_ACK";
              case o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY:
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: received ENC_REKEY stanza from ",
                      ", call_id=",
                      ", stanzaId=",
                      "",
                    ])),
                  t.toString(),
                  h != null ? h : "unknown",
                  a,
                );
                try {
                  var E = yield o(
                      "WAWebVoipHandleIncomingSignalingMessage",
                    ).handleVoipIncomingEncRekey(e, i),
                    k = E.retryCount,
                    I = E.shouldRetry;
                  I
                    ? (o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: ENC_REKEY requires retry, retryCount=",
                            ", sending retry receipt",
                          ])),
                        String(k != null ? k : 0),
                      ),
                      yield r("WAWebVoipSendGroupCallRekeyRetryReceiptJob")(
                        a,
                        e,
                        k,
                      ))
                    : S(
                        t,
                        a,
                        h,
                        g,
                        o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY,
                      );
                } catch (e) {
                  o("WALogger").ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
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
                  S(t, a, h, g, e.type),
                  yield o(
                    "WAWebVoipHandleIncomingSignalingMessage",
                  ).handleVoipIncomingSignalingMessage(e, i),
                  "NO_ACK"
                );
              case o("WAWebVoipSignalingEnums").TYPE.OFFER_NOTICE:
                return r("WAWebEnvironment").isWindows
                  ? (o("WALogger").ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "handleVoipIncomingSignalingMessage: offer notice unsupported on win",
                        ])),
                    ),
                    (_ || (_ = n("Promise"))).resolve("NO_ACK"))
                  : r("WAWebHandleVoipOfferNotice")(f);
              default:
                return (
                  yield o(
                    "WAWebVoipHandleIncomingSignalingMessage",
                  ).handleVoipIncomingSignalingMessage(e, i),
                  R(t, a, l)
                );
            }
          },
        )),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = h(e);
          if (t == null) return (_ || (_ = n("Promise"))).resolve("NO_ACK");
          var r = t.from,
            a = t.message,
            i = t.payloadTag,
            l = t.senderLid,
            s = t.stanzaId,
            u = t.voipNode;
          return (
            l != null &&
              (yield o(
                "WAWebVoipLidUtils",
              ).attemptPersistLidMappingAndUserAttributes({
                jid: l,
                phoneNumber: r,
                flushImmediately: !0,
              })),
            yield o("WAWebVoipLidUtils").persistAttributesAndLidMappingsForCall(
              a,
            ),
            y(a, r, s, u, i, e)
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n, r, a) {
      var i;
      switch (a) {
        case o("WAWebVoipSignalingEnums").TYPE.OFFER:
          i = o("WAWap").wap("offer", {
            "call-id": o("WAWap").CUSTOM_STRING(n),
            "call-creator": o("WAWebCommsWapMd").JID(r),
          });
          break;
        case o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY:
          i = o("WAWap").wap("enc_rekey", {
            "call-id": o("WAWap").CUSTOM_STRING(n),
            "call-creator": o("WAWebCommsWapMd").JID(r),
          });
          break;
        case o("WAWebVoipSignalingEnums").TYPE.ACCEPT:
          i = o("WAWap").wap("accept", {
            "call-id": o("WAWap").CUSTOM_STRING(n),
            "call-creator": o("WAWebCommsWapMd").JID(r),
          });
          break;
        case o("WAWebVoipSignalingEnums").TYPE.REJECT:
          i = o("WAWap").wap("reject", {
            "call-id": o("WAWap").CUSTOM_STRING(n),
            "call-creator": o("WAWebCommsWapMd").JID(r),
          });
          break;
      }
      o("WADeprecatedSendIq").deprecatedCastStanza(
        o("WAWap").wap(
          "receipt",
          {
            to: o("WAWebCommsWapMd").JID(e),
            id: o("WAWap").CUSTOM_STRING(t),
            from: e.isLid()
              ? o("WAWebCommsWapMd").JID(
                  o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
                )
              : o("WAWebCommsWapMd").JID(
                  o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                ),
          },
          i,
        ),
      );
    }
    function R(e, t, n) {
      return o("WAWap").wap("ack", {
        to: o("WAWebCommsWapMd").JID(e),
        id: o("WAWap").CUSTOM_STRING(t),
        class: "call",
        type: o("WAWap").MAYBE_CUSTOM_STRING(n),
      });
    }
    l.handleCall = b;
  },
  98,
);
