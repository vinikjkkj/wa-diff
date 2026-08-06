__d(
  "WAWebE2EProtoUtils",
  [
    "WABase64",
    "WAJids",
    "WALogger",
    "WATypeUtils",
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonProcessingError",
    "WAWebApiContact",
    "WAWebBackendJobs.flow",
    "WAWebBatchedStatusIdUtils",
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebConvertToTextWithoutSpecialEmojis",
    "WAWebDecodeJid",
    "WAWebEphemeralityTypes",
    "WAWebHandleMsgCommon",
    "WAWebHsmGatingUtils",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebInteractiveResponseMessageType",
    "WAWebIsCagGroupCache",
    "WAWebLidMigrationUtils",
    "WAWebMobilePlatforms",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebNonEmptyString",
    "WAWebPollResultSnapshotPollTypeEnvelopeEnabled",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebVerifyProtobufMsgObjectKeys",
    "WAWebWid",
    "WAWebWidFactory",
    "err",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 3;
    function f(t, n) {
      var a, i, l, s, u, c;
      n === void 0 && (n = 0);
      var d =
        (a = o("WAWebVerifyProtobufMsgObjectKeys").getUnwrappedProtobufMessage(
          t,
        )) != null
          ? a
          : t;
      if (r("justknobx")._("2451") && n >= _)
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "typeAttributeFromProtobuf: nesting depth exceeded limit of ",
                  "",
                ])),
              _,
            )
            .tags("messaging")
            .sendLogs("type-attr-proto-max-depth"),
          o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text
        );
      if (d.ephemeralMessage) {
        var m = d.ephemeralMessage.message;
        return m
          ? f(m, n + 1)
          : o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text;
      }
      if (d.groupMentionedMessage) {
        var p = d.groupMentionedMessage.message;
        return p
          ? f(p, n + 1)
          : o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text;
      }
      if (d.botInvokeMessage) {
        var g = d.botInvokeMessage.message;
        return g
          ? f(g, n + 1)
          : o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text;
      }
      if (d.botForwardedMessage) {
        var h = d.botForwardedMessage.message;
        return h
          ? f(h, n + 1)
          : o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text;
      }
      if (d.deviceSentMessage) {
        var y = d.deviceSentMessage.message;
        return y
          ? f(y, n + 1)
          : o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text;
      }
      return d.reactionMessage || d.encReactionMessage
        ? o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.reaction
        : d.eventMessage ||
            d.encEventResponseMessage ||
            ((i = d.secretEncryptedMessage) == null
              ? void 0
              : i.secretEncType) ===
              o("WAWebProtobufsE2E.pb")
                .Message$SecretEncryptedMessage$SecretEncType.EVENT_EDIT
          ? o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.event
          : ((l = d.secretEncryptedMessage) == null
                ? void 0
                : l.secretEncType) ===
              o("WAWebProtobufsE2E.pb")
                .Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT
            ? o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text
            : d.pollCreationMessage ||
                d.pollCreationMessageV2 ||
                d.pollCreationMessageV3 ||
                d.pollCreationMessageV5 ||
                d.pollCreationMessageV6 ||
                d.pollUpdateMessage ||
                ((s = d.secretEncryptedMessage) == null
                  ? void 0
                  : s.secretEncType) ===
                  o("WAWebProtobufsE2E.pb")
                    .Message$SecretEncryptedMessage$SecretEncType.POLL_EDIT ||
                ((u = d.secretEncryptedMessage) == null
                  ? void 0
                  : u.secretEncType) ===
                  o("WAWebProtobufsE2E.pb")
                    .Message$SecretEncryptedMessage$SecretEncType
                    .POLL_ADD_OPTION
              ? o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll
              : ((c = d.extendedTextMessage) == null
                    ? void 0
                    : c.matchedText) != null &&
                  d.extendedTextMessage.matchedText.trim() !== ""
                ? o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.media
                : d.conversation ||
                    d.extendedTextMessage ||
                    d.templateButtonReplyMessage ||
                    d.protocolMessage ||
                    d.interactiveMessage ||
                    d.keepInChatMessage ||
                    d.requestPhoneNumberMessage ||
                    d.editedMessage ||
                    d.pinInChatMessage ||
                    d.encCommentMessage ||
                    d.newsletterAdminInviteMessage ||
                    d.newsletterFollowerInviteMessageV2 ||
                    d.messageHistoryNotice ||
                    d.albumMessage ||
                    d.richResponseMessage
                  ? o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text
                  : d.pollResultSnapshotMessage || d.pollResultSnapshotMessageV3
                    ? r("WAWebPollResultSnapshotPollTypeEnvelopeEnabled")()
                      ? o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll
                      : o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text
                    : o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.media;
    }
    function g(e) {
      if (
        o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e) ===
        o("WAWebMsgType").MSG_TYPE.COMMENT
      ) {
        var t = o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e),
          n = o("WAWebWidFactory").asUserWidOrThrow(
            r("nullthrows")(t.participant, "undefined participant"),
          ),
          a = o("WAWebLidMigrationUtils").toUserLidOrThrow(n);
        return {
          threadMsgId: t.id,
          threadMsgSenderLid: r("nullthrows")(a, "undefined lid"),
        };
      }
    }
    function h(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s =
          (t = o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).getUnwrappedProtobufMessage(e)) != null
            ? t
            : e;
      if (
        s.reactionMessage ||
        s.encReactionMessage ||
        ((n = s.pollUpdateMessage) != null && n.vote) ||
        s.keepInChatMessage ||
        s.editedMessage ||
        s.pinInChatMessage ||
        ((r = s.botInvokeMessage) == null ||
        (r = r.message) == null ||
        (r = r.protocolMessage) == null
          ? void 0
          : r.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .REQUEST_WELCOME_MESSAGE ||
        s.encEventResponseMessage ||
        ((a = s.secretEncryptedMessage) == null ? void 0 : a.secretEncType) ===
          o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType
            .EVENT_EDIT ||
        ((i = s.secretEncryptedMessage) == null ? void 0 : i.secretEncType) ===
          o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType
            .POLL_EDIT ||
        ((l = s.secretEncryptedMessage) == null ? void 0 : l.secretEncType) ===
          o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType
            .POLL_ADD_OPTION ||
        s.messageHistoryNotice ||
        s.conditionalRevealMessage
      )
        return o("WAWebBackendJobs.flow").DecryptFailType.Hide;
      var u = s.protocolMessage;
      return u &&
        (u.type ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .EPHEMERAL_SYNC_RESPONSE ||
          u.type ===
            o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
              .REQUEST_WELCOME_MESSAGE ||
          u.editedMessage ||
          u.type ===
            o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
              .GROUP_MEMBER_LABEL_CHANGE ||
          u.type ===
            o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
              .MESSAGE_UNSCHEDULE ||
          u.type ===
            o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
              .AI_METADATA_OPERATION)
        ? o("WAWebBackendJobs.flow").DecryptFailType.Hide
        : o("WAWebBackendJobs.flow").DecryptFailType.Show;
    }
    function y(e) {
      var t,
        n = ["XUS", "XDX", "USDP"],
        r =
          o("WAWebNonEmptyString").asMaybeNonEmptyString(
            e == null || (t = e.primaryAmount) == null
              ? void 0
              : t.currencyCode,
          ) || (e == null ? void 0 : e.currency);
      return r != null && n.includes(r.toUpperCase());
    }
    function C(e, t) {
      var n;
      return !(
        e.remote.isGroup() &&
        !(
          (n = e.participant) != null &&
          n.equals(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE())
        ) &&
        !t.equals(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE())
      );
    }
    function b(e) {
      var t = e.bizInfo,
        n = e.msgContext,
        r = e.name;
      return r != null || (t == null ? void 0 : t.nativeFlowName) != null
        ? v({ name: r, bizInfo: t, msgContext: n })
        : !0;
    }
    function v(e) {
      var t = e.bizInfo,
        n = e.msgContext,
        o = e.name;
      return n !== "relay" && o != null
        ? !0
        : (t == null ? void 0 : t.nativeFlowName) == null || o == null
          ? !1
          : r("WAWebInteractiveMessagesNativeFlowName").cast(
                t.nativeFlowName,
              ) === r("WAWebInteractiveMessagesNativeFlowName").MIXED
            ? !0
            : o != null &&
              r("WAWebInteractiveMessagesNativeFlowName").cast(
                t.nativeFlowName,
              ) === o;
    }
    function S(e) {
      return (
        e === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS ||
        e === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS ||
        e === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS ||
        e === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD ||
        e === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
      );
    }
    function R(e) {
      var t,
        n,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m = e.interactiveMessage,
        p = m == null || (t = m.nativeFlowMessage) == null ? void 0 : t.buttons;
      if (
        p != null &&
        p.length > 0 &&
        !o(
          "WAWebBizTemplateAndInteractiveMessagesUtils",
        ).buttonsViolateButtonImprovementsConstraints(
          p.map(function (e) {
            return { nativeFlowButton: e };
          }),
        )
      )
        return String(
          o(
            "WAWebBizTemplateAndInteractiveMessagesUtils",
          ).getNativeFlowNameByButtonName(p[0].name),
        );
      if (
        ((n = e.buttonsMessage) == null || (n = n.buttons) == null
          ? void 0
          : n.length) === 1
      ) {
        var _;
        return String(
          o(
            "WAWebBizTemplateAndInteractiveMessagesUtils",
          ).getNativeFlowNameByButtonName(
            (_ = e.buttonsMessage.buttons[0].nativeFlowInfo) == null
              ? void 0
              : _.name,
          ),
        );
      }
      var f =
        !(p != null && p.length) &&
        (((a =
          m == null || (i = m.body) == null || (i = i.text) == null
            ? void 0
            : i.length) != null
          ? a
          : 0) > 0 ||
          ((l =
            m == null || (s = m.header) == null || (s = s.title) == null
              ? void 0
              : s.length) != null
            ? l
            : 0) > 0 ||
          ((u =
            m == null || (c = m.footer) == null || (c = c.text) == null
              ? void 0
              : c.length) != null
            ? u
            : 0) > 0 ||
          (m == null || (d = m.header) == null ? void 0 : d.imageMessage) !=
            null) &&
        !(m != null && m.shopStorefrontMessage);
      if (f) return String(r("WAWebInteractiveMessagesNativeFlowName").MIXED);
    }
    var L = [
      "novi_login",
      "novi_report_transaction",
      "novi_hub",
      "novi_view_code",
      "novi_view_transaction",
      "novi_view_bank_detail",
      "novi_view_card_detail",
      "wa_payment_transaction_details",
      "wa_payment_learn_more",
      "wa_payment_fbpin_reset",
    ];
    function E(e) {
      return e.some(function (e) {
        return (
          (e.nativeFlowInfo &&
            e.nativeFlowInfo.name != null &&
            L.includes(e.nativeFlowInfo.name)) ||
          (e.buttonId != null && L.includes(e.buttonId))
        );
      });
    }
    function k(e) {
      return e === r("WAWebInteractiveMessageType").NATIVE_FLOW
        ? o("WAWebHsmGatingUtils").interactiveNativeFlowMessagesEnabled()
        : e === r("WAWebInteractiveMessageType").SHOPS_STOREFRONT
          ? o("WAWebHsmGatingUtils").shopsInteractiveMessageEnabled()
          : e === r("WAWebInteractiveMessageType").CAROUSEL
            ? !0
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function I(e) {
      switch (e) {
        case r("WAWebInteractiveMessageType").NATIVE_FLOW:
          return "nativeFlowMessage";
        case r("WAWebInteractiveMessageType").SHOPS_STOREFRONT:
          return "shopStorefrontMessage";
        case r("WAWebInteractiveMessageType").CAROUSEL:
          return "carouselMessage";
      }
    }
    function T(e) {
      for (var t of r("WAWebInteractiveMessageType").members())
        if (I(t) in e) return t;
      return null;
    }
    function D(e, t) {
      var n = t == null ? void 0 : t.messageVersion;
      if (n == null || e == null) return !1;
      switch (e) {
        case r("WAWebInteractiveMessageType").NATIVE_FLOW:
          return n <= 1;
        case r("WAWebInteractiveMessageType").SHOPS_STOREFRONT:
          return n <= 1;
        case r("WAWebInteractiveMessageType").CAROUSEL:
          return n <= 1;
      }
    }
    function x(e) {
      switch (e) {
        case r("WAWebInteractiveResponseMessageType").NATIVE_FLOW:
          return "nativeFlowResponseMessage";
      }
    }
    function $(e) {
      for (var t of r("WAWebInteractiveResponseMessageType").members())
        if (x(t) in e) return t;
      return null;
    }
    function P(e) {
      switch (e) {
        case r("WAWebInteractiveResponseMessageType").NATIVE_FLOW:
          return o(
            "WAWebHsmGatingUtils",
          ).interactiveNativeFlowResponseMessagesEnabled();
      }
    }
    function N(e) {
      var t = e.bizInfo,
        n = e.message,
        o = e.msgContext,
        a = e.type;
      switch (a) {
        case r("WAWebInteractiveResponseMessageType").NATIVE_FLOW: {
          var i = r("nullthrows")(n.nativeFlowResponseMessage),
            l = r("nullthrows")(
              r("WAWebInteractiveMessagesNativeFlowName").cast(i.name),
            ),
            s = r("nullthrows")(i.version);
          if (
            s > 1 ||
            ((t == null ? void 0 : t.nativeFlowName) != null &&
              !v({ name: l, bizInfo: t, msgContext: o }))
          )
            throw r("err")("Invalid message");
          return {
            name: l,
            version: s,
            type: a,
            paramsJson: r("nullthrows")(i.paramsJson),
          };
        }
      }
    }
    function M(e, t) {
      if (e != null) {
        var n = e.id;
        if (n != null)
          return F(n, e, t, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon);
      }
    }
    function w(e, t) {
      if (e != null) {
        var n = e.id;
        if (n != null)
          return F(n, e, t, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message);
      }
    }
    function A(e) {
      var t = e.info,
        n = e.msgMeta,
        a = e.realType,
        i = o("WAWebAddonProcessingError").validateMsgMeta(n, a),
        l = i.threadMsgId,
        s = i.threadMsgSenderJid;
      return new (r("WAWebMsgKey"))({
        id: l,
        fromMe: o("WAWebUserPrefsMeUser").isMeAccount(s),
        remote: t.chat,
        participant: s,
      });
    }
    function F(e, t, n, a) {
      var i, l, c, d;
      if (n != null && (i = n.id) != null && i.fromMe)
        if (
          ((l = !!t.fromMe),
          (d = o("WAWebDecodeJid").decodeJid(t.remoteJid)),
          t.fromMe === !0)
        ) {
          if (d instanceof r("WAWebWid") && !(d.isUser() || d.isNewsletter())) {
            var g,
              h,
              y = r("WAWebIsCagGroupCache").isCag(d),
              C = y && a !== o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon;
            ((g = n.author) != null && g.isLid()) ||
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[translateKeyToLocalReference] isCag=",
                    "",
                  ])),
                y,
              ),
              o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[translateKeyToLocalReference] non LID msg author found",
                    ])),
                )
                .sendLogs("translate-msg-key-non-lid-author"));
            var b =
              C || !((h = n.author) != null && h.isLid())
                ? o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()
                : o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            c = b;
          }
        } else c = o("WAWebDecodeJid").decodeJid(t.participant);
      else {
        d = n.id.remote;
        var m = r("WAWebIsCagGroupCache").isCag(d);
        if (t.fromMe === !0) {
          var p;
          if (
            ((l = !1),
            (c = n.author),
            m &&
              (p = c) != null &&
              p.isLid() &&
              a !== o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon)
          ) {
            var _ = o("WAWebApiContact").getPhoneNumber(n.author);
            _ != null && (c = _);
          }
        } else {
          var f = o("WAWebDecodeJid").decodeJid(t.participant);
          f instanceof r("WAWebWid")
            ? ((l = o("WAWebUserPrefsMeUser").isMeAccount(f)),
              (!d.isUser() || f.isBot()) &&
                (l
                  ? (c = o(
                      "WAWebUserPrefsMeUser",
                    ).getMeUserMatchingAddressingModeOrThrow(f))
                  : (c = f)))
            : (l = !0);
        }
      }
      (n.type === o("WAWebMsgType").MSG_TYPE.REACTION &&
        d != null &&
        ((d instanceof r("WAWebWid") && d.isBroadcast() && !d.isStatus()) ||
          o("WAJids").interpretAndValidateJid(d.toString()).jidType ===
            "broadcast") &&
        ((d = o("WAWebDecodeJid").decodeJid(t.participant)), (c = void 0)),
        d instanceof r("WAWebWid") &&
          c instanceof r("WAWebWid") &&
          d.isUser() &&
          d.equals(c) &&
          (c = void 0));
      var v =
        d instanceof r("WAWebWid") && d.isStatus()
          ? o("WAWebBatchedStatusIdUtils").normalizeStatusStanzaId(e)
          : e;
      return new (r("WAWebMsgKey"))({
        id: v,
        fromMe: l,
        remote: d,
        participant: c,
      });
    }
    function O(e) {
      return e == null ||
        e === "" ||
        o("WAWebMobilePlatforms").getMobilePlatform() ===
          o("WAWebMobilePlatforms").PLATFORMS.ANDROID
        ? e
        : o(
            "WAWebConvertToTextWithoutSpecialEmojis",
          ).convertToTextWithoutSpecialEmojis(e);
    }
    function B(e) {
      var t = { fromMe: e.fromMe, id: e.id },
        n = W(e.remote),
        r = W(e.participant);
      return (
        o("WATypeUtils").isString(n) && (t.remoteJid = n),
        o("WATypeUtils").isString(r) && (t.participant = r),
        t
      );
    }
    function W(e) {
      if (e instanceof r("WAWebWid")) return e.toString({ legacy: !0 });
      if (o("WATypeUtils").isString(e))
        return e.replace(/@c.us$/, "@s.whatsapp.net");
    }
    function q(e) {
      return e != null && e !== "" ? o("WABase64").decodeB64(e) : void 0;
    }
    function U(e) {
      var t = W(e.to),
        n = { fromMe: !0, id: e.id.id };
      return (o("WATypeUtils").isString(t) && (n.remoteJid = t), n);
    }
    function V(e, t, n) {
      t.viewOnce ||
        (t.directPath == null &&
          t.staticUrl == null &&
          o("WALogger")
            .LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "directPath missing from msg type ",
                  "",
                ])),
              e,
            )
            .sendLogs("outgoing-" + e + "-message-missing-direct-path"),
        t.fileSha256 == null &&
          o("WALogger")
            .LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "fileSha256 missing from msg type ",
                  "",
                ])),
              e,
            )
            .sendLogs("outgoing-" + e + "-message-missing-file-sha"),
        !n &&
          t.fileEncSha256 == null &&
          o("WALogger")
            .LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "fileEncSha256 missing from msg type ",
                  "",
                ])),
              e,
            )
            .sendLogs("outgoing-" + e + "-message-missing-file-enc-sha"),
        t.url == null &&
          t.staticUrl == null &&
          !n &&
          o("WALogger")
            .LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "url(deprecatedMms3Url) missing from msg type ",
                  "",
                ])),
              e,
            )
            .sendLogs("outgoing-" + e + "-message-missing-mms3-url"));
    }
    function H(e, t, n) {
      var r, a, i;
      switch (e) {
        case o("WAWebEphemeralityTypes").DisappearingModeInitiator
          .ChangedInChat:
          r = o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
            .CHANGED_IN_CHAT;
          break;
        case o("WAWebEphemeralityTypes").DisappearingModeInitiator
          .InitiatedByMe:
          r = o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
            .INITIATED_BY_ME;
          break;
        case o("WAWebEphemeralityTypes").DisappearingModeInitiator
          .InitiatedByOther:
          r = o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
            .INITIATED_BY_OTHER;
          break;
        case o("WAWebEphemeralityTypes").DisappearingModeInitiator
          .BizUpgradeFbHosting:
          r = o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
            .INITIATED_BY_OTHER;
          break;
      }
      if (t)
        switch (t) {
          case o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings:
            a = o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.CHAT_SETTING;
            break;
          case o("WAWebEphemeralityTypes").DisappearingModeTrigger
            .AccountSettings:
            a = o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger
              .ACCOUNT_SETTING;
            break;
          case o("WAWebEphemeralityTypes").DisappearingModeTrigger.BulkChange:
            a = o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.BULK_CHANGE;
            break;
          case o("WAWebEphemeralityTypes").DisappearingModeTrigger.Unknown:
            a = o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.UNKNOWN;
            break;
          case o("WAWebEphemeralityTypes").DisappearingModeTrigger
            .UnknownGroups:
            a = o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger
              .UNKNOWN_GROUPS;
            break;
          case o("WAWebEphemeralityTypes").DisappearingModeTrigger
            .BizSupportFbHosting:
            a = o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.UNKNOWN;
            break;
        }
      return (
        n != null && (i = n),
        { initiator: r, trigger: a, initiatedByMe: i }
      );
    }
    function G(e) {
      return e;
    }
    ((l.typeAttributeFromProtobuf = f),
      (l.extractCommentTargetIdAndSenderLid = g),
      (l.decryptFailAttributeFromProtobuf = h),
      (l.hasUnsupportedCurrency = y),
      (l.isEitherSenderOrReceiverOfPaymentMessage = C),
      (l.shouldParseNFM = b),
      (l.isValidNativeFlowName = v),
      (l.isOrderNativeFlow = S),
      (l.getBizNativeFlowName = R),
      (l.hasUnsupportedButtons = E),
      (l.isInteractiveMessageTypeEnabled = k),
      (l.getInteractiveMessageFieldNameForType = I),
      (l.getInteractiveMessageTypeForProto = T),
      (l.isSupportedInteractiveMessageVersion = D),
      (l.getInteractiveResponseMessageFieldNameForType = x),
      (l.getInteractiveResponseMessageTypeForProto = $),
      (l.isInteractiveResponseMessageTypeEnabled = P),
      (l.getInteractiveResponsePayload = N),
      (l.translateAddonMessageKeyToLocalReference = M),
      (l.translateRegularMessageKeyToLocalReference = w),
      (l.createMsgKeyFromThreadInfo = A),
      (l.translateKeyToLocalReference = F),
      (l.convertToTextWithoutSpecialEmojis = O),
      (l.encodeKey = B),
      (l.encodeJid = W),
      (l.encodeBytes = q),
      (l.createMessageKey = U),
      (l.validateOutgoingRequiredMediaProperties = V),
      (l.disappearingModeInitiatorToProto = H),
      (l.getMutableMessageProtobuf = G));
  },
  98,
);
