__d(
  "WASendMsgRPC",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAFrankingTypes",
    "WAGetDeviceIdentityMixin",
    "WAJids",
    "WALogger",
    "WAParseFranking",
    "WASmaxMessagePublishIndividualRPC",
    "WATimeUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(e, t, n, r, a) {
      a === void 0 && (a = !1);
      var i = o("WAJids").interpretAsGroupJid(e.protocolMsgId.chat),
        l =
          e.messageType.type === "text" &&
          e.messageType.invitedParticipantUserJid != null;
      if (t.type === "direct_user") {
        var s = {
            individualIndividualSingle: {
              messageTo: t.message.to,
              individualIndividualRetryMixinArgs: p(e.count, t.recipient),
              contentMixinsArgs: m(e, t.message),
              encTypeIndividualMixinArgs: _(t.message),
              encVersionArgs: f(t.message),
            },
          },
          u = e.type === "direct" ? e.originalMsgTimestampMs : void 0,
          C = {
            messageId: e.externalId,
            deviceIdentityMixinArgs: o(
              "WAGetDeviceIdentityMixin",
            ).getDeviceIdentityMixin(e.deviceIdentity),
            hasNoExtraFanout: e.messageType.isInvisible === !0 ? !0 : null,
            messageEditOrMessagePinOrRevokeMixinGroupArgs: g(e.messageType),
            clientFrankingTagMixinArgs:
              n != null && n.frankingTag
                ? { frankingTagElementValue: n.frankingTag }
                : null,
            hasMetaHideDecryptionPlaceholder: y(e.messageType) ? !0 : null,
            groupInviteTargetMixinArgs:
              l && i != null ? { metaGroupInvite: i } : null,
            coexV2IndividualMixinsArgs: s,
            internalTestMixinArgs: a
              ? { testConfig: "armadillo_express" }
              : null,
            armadilloOriginalMessageTimestampMixinArgs:
              u != null ? { metaOriginalMsgT: u } : null,
          };
        r == null || r.addPoint("send_individual_rpc");
        var b = await o("WASmaxMessagePublishIndividualRPC").sendIndividualRPC(
          C,
        );
        if (b.name === "IndividualResponseSuccess") {
          var v,
            S =
              ((v = b.value.deviceListStaleMixin) == null ? void 0 : v.phash) !=
              null
                ? {
                    type: "mismatch",
                    local: null,
                    server: b.value.deviceListStaleMixin.phash,
                  }
                : { type: "ok" },
            R =
              b.value.serverFrankingTagMixin != null && n != null
                ? babelHelpers.extends({}, n, {
                    reportingTag: o("WAFrankingTypes").castToReportingTag(
                      b.value.serverFrankingTagMixin
                        .frankingReportingTagElementValue,
                    ),
                  })
                : null;
          return {
            type: "success",
            ts: o("WATimeUtils").castToUnixTime(b.value.t),
            phash: S,
            count: null,
            reportingMeta: R,
          };
        } else {
          var L, E;
          return (
            b.name,
            {
              type: "error",
              errorCode: parseInt(b.value.error, 10),
              backoff: parseInt(
                String(
                  (L = b.value.messageNackRetryAttributesMixin) == null
                    ? void 0
                    : L.backoff,
                ),
                10,
              ),
              applicationError:
                (E = b.value.applicationNegativeAckMixin) == null
                  ? void 0
                  : E.applicationError,
            }
          );
        }
      }
      var k = e.messageType.isInvisible === !0 ? "false" : o("WAWap").DROP_ATTR,
        I =
          t.participant != null
            ? o("WAWap").JID(t.participant)
            : o("WAWap").DROP_ATTR,
        T =
          t.phash != null && t.type === "group"
            ? o("WAWap").CUSTOM_STRING(t.phash)
            : o("WAWap").DROP_ATTR;
      function D() {
        return e.messageType.type === "text" && e.messageType.isRevoked
          ? "7"
          : e.messageType.type === "text" && e.messageType.isEdit === !0
            ? "1"
            : o("WAWap").DROP_ATTR;
      }
      var x = D();
      function $() {
        return l && i != null
          ? o("WAWap").wap("meta", {
              "decrypt-fail": "hide",
              group_invite: o("WAWap").CUSTOM_STRING(i),
            })
          : y(e.messageType)
            ? o("WAWap").wap("meta", { "decrypt-fail": "hide" })
            : null;
      }
      var P = $(),
        N = a
          ? o("WAWap").wap("test", {
              config: o("WAWap").CUSTOM_STRING("armadillo_express"),
            })
          : null,
        M =
          e.deviceIdentity != null
            ? o("WAWap").wap("device-identity", null, e.deviceIdentity)
            : null,
        w =
          (n == null ? void 0 : n.frankingTag) != null
            ? o("WAWap").wap(
                "franking",
                null,
                o("WAWap").wap("franking_tag", null, n.frankingTag),
              )
            : null,
        A = null;
      t.participants != null &&
        (A = o("WAWap").wap(
          "participants",
          null,
          t.participants.map(function (e) {
            return c(e);
          }),
        ));
      var F = null;
      t.message != null && (F = c(t.message, !0));
      var O = o("WAWap").wap(
        "message",
        {
          device_fanout: k,
          edit: x,
          id: o("WAWap").CUSTOM_STRING(e.externalId),
          participant: I,
          phash: T,
          to: o("WAWap").JID(t.messageTo),
          type: e.messageType.type,
        },
        P,
        w,
        A,
        F,
        M,
        N,
      );
      (h(e.externalId), r == null || r.addPoint("send_stanza_and_return_ack"));
      var B = await o("WADeprecatedSendIq").deprecatedSendStanzaAndReturnAck(
        O,
        {
          id: e.externalId,
          class: "message",
          from: t.messageTo,
          participant: t.participant != null ? t.participant : null,
        },
      );
      r == null || r.addPoint("send_msg_ack_parser");
      var W = d.parse(B);
      if (W.success) {
        r == null || r.addPoint("send_msg_ack_parser_success");
        var q = W.success,
          U = q.applicationError,
          V = q.backoff,
          H = q.errorCode;
        if (H == null) {
          var G,
            z = W.success,
            j = z.count,
            K = z.phash,
            Q = z.ts,
            X =
              n != null
                ? babelHelpers.extends({}, n, {
                    reportingTag:
                      (G = W.success.reportingMeta) == null
                        ? void 0
                        : G.reportingTag,
                  })
                : null;
          return {
            type: "success",
            ts: Q,
            phash:
              K == null || K === t.phash
                ? { type: "ok" }
                : { type: "mismatch", local: t.phash, server: K },
            count: j,
            reportingMeta: X,
          };
        } else
          return (
            r == null ||
              r.addPoint("send_msg_ack_parser_failed", {
                int: { errorCode: H, applicationError: U },
              }),
            { type: "error", errorCode: H, applicationError: U, backoff: V }
          );
      } else return { type: "parsing_error" };
    }
    function c(e, t) {
      var n;
      t === void 0 && (t = !1);
      var r = o("WAWap").DROP_ATTR;
      e.encType === "device" &&
        e.isStateless === !0 &&
        e.type === "pkmsg" &&
        (r = "false");
      var a = o("WAWap").wap(
        "enc",
        {
          count:
            e.count != null ? o("WAWap").INT(e.count) : o("WAWap").DROP_ATTR,
          mediatype:
            e.mediaType != null
              ? o("WAWap").CUSTOM_STRING(e.mediaType)
              : o("WAWap").DROP_ATTR,
          state: r,
          type: o("WAWap").CUSTOM_STRING(e.type),
          v: o("WAWap").CUSTOM_STRING(e.v),
        },
        (n = e.ciphertext) != null ? n : [],
      );
      return t || e.encType === "group"
        ? a
        : o("WAWap").wap("to", { jid: o("WAWap").DEVICE_JID(e.to) }, a);
    }
    var d = new (r("WADeprecatedWapParser"))("sendMsgAck", function (e) {
      return (
        e.assertTag("ack"),
        {
          count: e.maybeAttrInt("count"),
          errorCode: e.maybeAttrInt("error"),
          phash: e.maybeAttrString("phash"),
          applicationError: e.maybeAttrInt("application_error"),
          ts: e.attrTime("t"),
          reportingMeta: o("WAParseFranking").parseFrankingNode(
            e.maybeChild("franking"),
          ),
          backoff: e.maybeAttrInt("backoff"),
        }
      );
    });
    function m(t, n) {
      if (t.messageType.type === "reaction")
        return { isContentTypeReaction: !0 };
      if (t.messageType.type === "text") return { isContentTypeText: !0 };
      if ((t.messageType.type, n.mediaType != null)) {
        var r = {
          contentTypeMediaOrMedianotifyMixinGroupArgs: {
            isContentTypeMedia: !0,
          },
          encMediaTypeEncMediaTypeOrEncMediaTypeDeprecatedMixinGroupArgs: {
            encMediaType: { encMediatype: n.mediaType },
          },
        };
        return { contentTypeMediaSingle: r };
      }
      return (
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "WASendMsgRPC: Wrong media type: ",
              "",
            ])),
          t.messageType.mediaType,
        ),
        { isContentTypeText: !0 }
      );
    }
    function p(e, t) {
      var n = e != null ? { encCount: e } : null,
        r = t != null ? { messageRecipient: t } : null;
      return {
        encRetryMixinArgs: n,
        individualIndividualRetryToPeerMixinArgs: r,
      };
    }
    function _(e) {
      return { encType: e.type, encElementValue: e.ciphertext };
    }
    function f(e) {
      return e.v === "2" ? { isEncVersion2: !0 } : { isEncVersion3: !0 };
    }
    function g(e) {
      return e.type === "text" && e.isRevoked ? { isRevoke: !0 } : null;
    }
    function h(e) {
      try {
        var t = BigInt(e);
      } catch (t) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[WASendMsgRPC] Sending message with not allowed stanzaId: ",
              ", error: ",
              "",
            ])),
          e,
          t,
        );
      }
    }
    function y(e) {
      return e.type === "reaction" || e.isInvisible === !0 || e.isEdit === !0;
    }
    l.sendStanza = u;
  },
  98,
);
