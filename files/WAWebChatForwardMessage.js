__d(
  "WAWebChatForwardMessage",
  [
    "WALogger",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebChatEphemerality",
    "WAWebContactBlockedErrorAction",
    "WAWebContactGetters",
    "WAWebCryptoRandomMediaKey",
    "WAWebFileUtils",
    "WAWebForwardAssociationConfig",
    "WAWebFrontendMsgGetters",
    "WAWebGeneratePollVotesSnapshotFromPoll",
    "WAWebGetAiBotContextForForwardedMsg",
    "WAWebGetNewsletterContextForForwardedMsg",
    "WAWebIncrementNewsletterForwardCounterAction",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMediaConstants",
    "WAWebMediaForwardMediaMsg",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaOpaqueData",
    "WAWebMediaUploadMmsThumbnail",
    "WAWebMessageAssociationUIUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMmsMediaTypes",
    "WAWebMsgDataUtils",
    "WAWebMsgGetters",
    "WAWebMsgModelFromData",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNewsletterSendMsgAction",
    "WAWebSendMsgChatAction",
    "WAWebViewMode.flow",
    "WAWebWid",
    "lodash",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = ["type"];
    function d(e) {
      return !!(o("WAWebFrontendMsgGetters").getAsMms(e) && !e.ctwaContext);
    }
    var m = `
 \u0336 \u0336 \u0336 \u0336 \u0336 \u0336
`;
    async function p(e) {
      var t = e.appendedText,
        n = e.associationOptions,
        a = e.chat,
        i = e.includeCaption,
        l = i === void 0 ? !1 : i,
        s = e.msg,
        u = e.multicast,
        p = u === void 0 ? !1 : u;
      if (d(s) || o("WAWebFileUtils").isDocument(s))
        return o("WAWebMediaForwardMediaMsg").forwardMediaMsg({
          appendedText: t,
          chat: a,
          includeCaption: l,
          msg: s,
          multicast: p,
          associationOptions: n,
        });
      var f = y(s, a);
      if (o("WAWebBotUtils").isMetaAiBot(a.id)) {
        if (t != null && t !== "") {
          var g = f.body || "";
          g === "" ? (f.body = t) : (f.body = g + m + t);
        }
        if (o("WAWebBotGating").isAiChatThreadsEnabled())
          return o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(a, {
            type: "MetaAiForward",
            query: f.body,
          });
      }
      var h = await o("WAWebMsgDataUtils").genOutgoingMsgData(a, s.type),
        C = h.type,
        b = babelHelpers.objectWithoutPropertiesLoose(h, c),
        v = Object.assign(
          f,
          babelHelpers.extends({}, b, {
            participant: void 0,
            star: !1,
            isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded(s),
            forwardedFromWeb: !0,
            forwardingScore:
              o("WAWebMsgModelUtils").getMsgForwardingScoreWhenForwarded(s),
            multicast: p,
            messageSecret:
              o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
              self.crypto.getRandomValues(new Uint8Array(32)),
          }),
        );
      if (r("WAWebWid").isNewsletter(a.id))
        return o("WAWebNewsletterSendMsgAction").forwardNewsletterMessage(
          a,
          o(
            "WAWebGetNewsletterContextForForwardedMsg",
          ).maybeStripNewsletterForwardMetadata({
            isQuestionOrQuestionReply:
              s.isQuestion || s.questionReplyQuotedMessage != null,
            forwardable: v,
            destination: a.id,
            source: s.id.remote,
            isOriginalMsgForwarded: s.isForwarded,
          }),
        );
      var S = await _(v),
        R = o("WAWebSendMsgChatAction").addAndSendMsgToChat(a, S),
        L = R[0],
        E = R[1],
        k = await Promise.all([L, E]),
        I = k[0],
        T = k[1];
      return babelHelpers.extends({}, T, { msg: I });
    }
    async function _(e) {
      var t = o("WAWebFrontendMsgGetters").getAsUrl(
        o("WAWebMsgModelFromData").msgModelFromMsgData(e),
      );
      if (t == null) return e;
      var n = t.mediaKeyTimestamp,
        a = t.thumbnailHQ;
      if (a == null || n != null) return e;
      try {
        var i,
          l = await r("WAWebMediaUploadMmsThumbnail")({
            thumbnail: await r("WAWebMediaOpaqueData").createFromBase64Jpeg(a),
            mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_LINK,
            mediaKeyInfo: r("WAWebCryptoRandomMediaKey")(),
            uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(
              o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
            ),
            forwardedFromWeb: !0,
            timeout: o("WAWebMediaConstants").MMS_THUMBNAIL_UPLOAD_TIMEOUT,
            isViewOnce: !1,
          }),
          s = l.filehash,
          u = l.mediaEntry;
        return (u == null ? void 0 : u.getMediaKey()) == null
          ? f(e)
          : babelHelpers.extends({}, e, {
              thumbnailDirectPath: u == null ? void 0 : u.directPath,
              thumbnailSha256: s,
              thumbnailEncSha256:
                (i = u == null ? void 0 : u.getEncfilehash()) != null
                  ? i
                  : void 0,
              mediaKey: u == null ? void 0 : u.getMediaKey(),
              mediaKeyTimestamp: u == null ? void 0 : u.getMediaKeyTimestamp(),
            });
      } catch (t) {
        return f(e);
      }
    }
    function f(e) {
      return babelHelpers.extends({}, e, {
        thumbnailHQ: void 0,
        thumbnailDirectPath: void 0,
        thumbnailSha256: void 0,
        thumbnailEncSha256: void 0,
        mediaKey: void 0,
        mediaKeyTimestamp: void 0,
        thumbnailHeight: void 0,
        thumbnailWidth: void 0,
      });
    }
    async function g(t) {
      var n = t.chat,
        r = t.forwardedParentMsgId,
        a = t.includeCaption,
        i = t.multicast,
        l = t.originalMsg;
      if (r != null) {
        var s = o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(
          l.id,
          o("WAWebViewMode.flow").ViewModeSurface.CHAT,
        );
        for (var u of s) {
          var c = u.associationType;
          if (c != null) {
            var d = o(
              "WAWebForwardAssociationConfig",
            ).getForwardAssociationConfig(c);
            d != null &&
              p({
                chat: n,
                msg: u,
                multicast: i,
                includeCaption: a,
                associationOptions: {
                  parentMsgKey: r,
                  associationType: d.associationType,
                  viewMode: d.viewMode,
                },
              }).catch(function (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[chat forward message] error forwarding associated child",
                      ])),
                  )
                  .sendLogs("forward-associated-child-fail");
              });
          }
        }
      }
    }
    async function h(e) {
      var t = e.appendedText,
        n = e.chat,
        a = e.includeCaption,
        i = a === void 0 ? !1 : a,
        l = e.msgs,
        c = e.multicast,
        m = c === void 0 ? !1 : c,
        _ = n.contact;
      if (o("WAWebContactGetters").getIsUser(_) && _.isContactBlocked)
        throw new (r("WAWebContactBlockedErrorAction"))(
          "Forwarded to contact is blocked",
          _,
        );
      var f = [];
      for (var h of l) {
        var y = i || o("WAWebMsgGetters").getHasOriginatedFromNewsletter(h);
        try {
          var C,
            b = await p({
              chat: n,
              msg: h,
              multicast: m,
              includeCaption: y,
              appendedText: t,
            });
          (o(
            "WAWebIncrementNewsletterForwardCounterAction",
          ).incrementNewsletterForwardCounter(h, n),
            g({
              chat: n,
              multicast: m,
              includeCaption: y,
              originalMsg: h,
              forwardedParentMsgId:
                b == null || (C = b.msg) == null ? void 0 : C.id,
            }).catch(function (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[chat forward message] error forwarding associated children",
                    ])),
                )
                .sendLogs("forward-associated-children-fail");
            }));
        } catch (e) {
          (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[chat forward message] error during forwarding message",
              ])),
          ),
            d(h) && f.push(h));
        }
      }
      return f;
    }
    function y(e, t) {
      var n,
        a,
        i,
        l = [
          "buttons",
          "caption",
          "broadcast",
          "ephemeralDuration",
          "ephemeralSettingTimestamp",
          "ephemeralStartTimestamp",
          "ephemeralOutOfSync",
          "disappearingModeInitiatedByMe",
          "disappearingModeTrigger",
          "afterReadDuration",
          "expiredTimestamp",
          "dynamicReplyButtons",
          "replyButtons",
          "isMdHistoryMsg",
          "bizPrivacyStatus",
          "kicState",
          "kicKey",
          "kicTimestampMs",
          "kicNotified",
          "rcat",
          "latestEditMsgKey",
          "latestEditSenderTimestampMs",
          "invokedBotWid",
          "botMessageSecret",
          "botEditType",
          "botFeedbackKind",
          "botFeedbackText",
          "botTargetSenderJid",
          "bizBotType",
          "botPersonaId",
          "botRespOrInvocationRevokeBotWid",
          "botResponseTargetId",
          "botPluginType",
          "botPluginReferenceIndex",
          "botPluginSearchProvider",
          "botPluginSearchUrl",
          "botEditTargetId",
          "lastBotEditBodyLength",
          "botPluginMaybeParent",
          "rowId",
          "serverId",
          "viewCount",
          "messageSecret",
          "forwardsCount",
          "pollOptions",
          "pollSelectableOptionsCount",
          "pollInvalidated",
          "isQuestion",
          "questionReplyQuotedMessage",
          "questionResponsesCount",
          "readQuestionResponsesCount",
          "groupHistoryBundleMessageKey",
          "hasPaidPartnershipLabel",
          "newsletterAdminProfile",
        ],
        s =
          e.isDynamicReplyButtonsMsg === !0 &&
          e.type === o("WAWebMsgType").MSG_TYPE.CHAT;
      s || (l = ["footer"].concat(l));
      var u =
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER;
      (u &&
        (l = l.filter(function (e) {
          return e !== "caption" && e !== "footer";
        })),
        ((n = e.quotedMsg) == null ? void 0 : n.type) !==
          o("WAWebMsgType").MSG_TYPE.PRODUCT &&
          (l = [
            "quotedMsg",
            "quotedParticipant",
            "quotedRemoteJid",
            "quotedStanzaID",
          ].concat(l)));
      var c = r("lodash").omit(e.toJSON(), l);
      (e.ctwaContext &&
        ((c.body = e.ctwaContext.sourceUrl),
        (c.type = o("WAWebMsgType").MSG_TYPE.CHAT),
        (c.mediaObject = void 0)),
        e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION &&
          ((c.type = o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT),
          (c.pollVotesSnapshot = o(
            "WAWebGeneratePollVotesSnapshotFromPoll",
          ).generatePollVotesSnapshotFromPoll(
            r("nullthrows")(o("WAWebFrontendMsgGetters").getAsPollCreation(e)),
          ))),
        (c.forwardedNewsletterMessageInfo = o(
          "WAWebGetNewsletterContextForForwardedMsg",
        ).getNewsletterContextForForwardedMsg(e)),
        (c.forwardedAiBotMessageInfo = o(
          "WAWebGetAiBotContextForForwardedMsg",
        ).getAiBotContextForForwardedMsg(e)),
        o("WAWebChatEphemerality").isEphemeralSettingOn(t) &&
          ((c.ephemeralDuration = o(
            "WAWebChatEphemerality",
          ).getEphemeralSetting(t)),
          (c.afterReadDuration = o(
            "WAWebChatEphemerality",
          ).getAfterReadDurationForChat(t))));
      var d = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(t);
      d != null && (c.ephemeralSettingTimestamp = d);
      var m = o("WAWebChatEphemerality").getDisappearingModeInitiator(t);
      m != null && (c.disappearingModeInitiator = m);
      var p = o("WAWebChatEphemerality").getDisappearingModeTrigger(t);
      p != null && (c.disappearingModeTrigger = p);
      var _ = o("WAWebChatEphemerality").getDisappearingModeInitiatedByMe(t);
      if (
        (_ != null && (c.disappearingModeInitiatedByMe = _),
        !(
          ((a = e.id.remote) != null && a.isBot()) ||
          ((i = e.mentionedJidList) == null
            ? void 0
            : i.find(function (e) {
                return e.isBot();
              })) != null
        ) &&
          t.isCAGAdmin() &&
          (c.messageSecret = self.crypto.getRandomValues(new Uint8Array(32))),
        t.id.isBot())
      ) {
        var f,
          g =
            (f = o("WAWebBotProfileCollection").BotProfileCollection.get(
              t.id,
            )) == null
              ? void 0
              : f.personaId;
        g != null && (c.botPersonaId = g);
      }
      return c;
    }
    ((l.forwardMessages = h), (l.getForwardedMessageFields = y));
  },
  98,
);
