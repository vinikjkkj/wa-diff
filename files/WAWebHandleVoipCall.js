__d(
  "WAWebHandleVoipCall",
  [
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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e) {
      return (
        o("WAWebVoipSignalingEnums").TYPE[e.tag().toUpperCase()] ||
        o("WAWebVoipSignalingEnums").TYPE.NONE
      );
    }
    var y = new (r("WADeprecatedWapParser"))("callParser", function (e) {
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
        y = m.maybeAttrString("username"),
        C = m.maybeAttrString("caller_country_code"),
        b = m.maybeAttrString("notify"),
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
          type: h(m),
          common: { call_id: p, peer_jid: c.toString(), type: String(h(m)) },
          group_jid: f,
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
    function C(t) {
      var n = y.parse(t);
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
    async function b() {
      if (!o("WAWebVoipGatingUtils").isCallingEnabled()) return !1;
      var e = await o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
        t = e.WAWebVoipInit;
      if (t.VoipInitEventEmitter.getIsVoipInited()) return !0;
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "voip: not initialized, init before processing msg",
          ])),
      );
      try {
        (await t.initWAWebVoip(),
          !t.VoipInitEventEmitter.getIsVoipInited() &&
            t.VoipInitEventEmitter.getDidVoipInitError() &&
            (await t.retryWAWebVoipInitAfterFailure()));
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
      return t.VoipInitEventEmitter.getIsVoipInited()
        ? !0
        : (o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Failed to initialize VoIP",
                ])),
            )
            .sendLogs("voip: init-resolved-not-inited-on-stanza"),
          !1);
    }
    async function v(e, t, n, a, i, l) {
      var s = e.call_creator,
        u = e.call_id,
        c = await b();
      if (
        c &&
        o("WAWebVoipGatingUtils").isGroupCallMessage(e) &&
        !o("WAWebVoipGatingUtils").isGroupCallingEnabled()
      ) {
        var g,
          h =
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
                isVideo: (g = e.isVideoCall) != null ? g : !1,
                callId: e.call_id,
                isOffline: e.is_offline,
                callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Missed,
              },
              h,
            ),
          ),
          Promise.resolve("NO_ACK")
        );
      }
      switch (e.type) {
        case o("WAWebVoipSignalingEnums").TYPE.OFFER:
          if ((R(t, n, u, s, e.type), c)) {
            var y = await o("WAWebVoipBackendLoadable").requireVoipJsBackend();
            await y.WAWebHandleVoipCallOffer.handleVoipCallOffer(e, a);
          } else
            await o(
              "WAWebVoipHandleIncomingSignalingMessage",
            ).handleVoipIncomingSignalingMessage(e, a, !1);
          return "NO_ACK";
        case o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY:
          if (!c)
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: ENC_REKEY received while VoIP stack is unavailable, returning NO_ACK",
                  ])),
              ),
              "NO_ACK"
            );
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: received ENC_REKEY stanza from ",
                ", call_id=",
                ", stanzaId=",
                "",
              ])),
            t.toString(),
            u != null ? u : "unknown",
            n,
          );
          try {
            var C = await o(
                "WAWebVoipHandleIncomingSignalingMessage",
              ).handleVoipIncomingEncRekey(e, a),
              v = C.retryCount,
              S = C.shouldRetry;
            S
              ? (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ENC_REKEY requires retry, retryCount=",
                      ", sending retry receipt",
                    ])),
                  String(v != null ? v : 0),
                ),
                await r("WAWebVoipSendGroupCallRekeyRetryReceiptJob")(n, e, v))
              : R(t, n, u, s, o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY);
          } catch (e) {
            o("WALogger").ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
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
            R(t, n, u, s, e.type),
            await o(
              "WAWebVoipHandleIncomingSignalingMessage",
            ).handleVoipIncomingSignalingMessage(e, a, c),
            "NO_ACK"
          );
        case o("WAWebVoipSignalingEnums").TYPE.OFFER_NOTICE:
          return r("WAWebEnvironment").isWindows
            ? (o("WALogger").ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "handleVoipIncomingSignalingMessage: offer notice unsupported on win",
                  ])),
              ),
              Promise.resolve("NO_ACK"))
            : r("WAWebHandleVoipOfferNotice")(l);
        default:
          return (
            await o(
              "WAWebVoipHandleIncomingSignalingMessage",
            ).handleVoipIncomingSignalingMessage(e, a, c),
            L(t, n, i)
          );
      }
    }
    async function S(e) {
      var t = C(e);
      if (t == null) return Promise.resolve("NO_ACK");
      var n = t.from,
        r = t.message,
        a = t.payloadTag,
        i = t.senderLid,
        l = t.stanzaId,
        s = t.voipNode;
      return (
        i != null &&
          (n.isLid() &&
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "handleCall: sender_lid in a lid call",
                  ])),
              )
              .sendLogs("lid-call-sender-lid"),
          await o(
            "WAWebVoipLidUtils",
          ).attemptPersistLidMappingAndUserAttributes({
            jid: i,
            phoneNumber: n,
            flushImmediately: !0,
          })),
        await o("WAWebVoipLidUtils").persistAttributesAndLidMappingsForCall(r),
        v(r, n, l, s, a, e)
      );
    }
    function R(e, t, n, r, a) {
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
    function L(e, t, n) {
      return o("WAWap").wap("ack", {
        to: o("WAWebCommsWapMd").JID(e),
        id: o("WAWap").CUSTOM_STRING(t),
        class: "call",
        type: o("WAWap").MAYBE_CUSTOM_STRING(n),
      });
    }
    l.handleCall = S;
  },
  98,
);
