__d(
  "WAWebChatForwardMessage",
  [
    "Promise",
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
    "WAWebForwardAssociatedChildren",
    "WAWebForwardRichResponseHandler",
    "WAWebFrontendMsgGetters",
    "WAWebGeneratePollVotesSnapshotFromPoll",
    "WAWebGetAiBotContextForForwardedMsg",
    "WAWebGetNewsletterContextForForwardedMsg",
    "WAWebGetPlainTextFromBotMsg",
    "WAWebIncrementNewsletterForwardCounterAction",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMediaConstants",
    "WAWebMediaForwardMediaMsg",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaOpaqueData",
    "WAWebMediaUploadMmsThumbnail",
    "WAWebMessagingGatingUtils",
    "WAWebMetaAiForwardedText",
    "WAWebMmsMediaTypes",
    "WAWebMsgDataUtils",
    "WAWebMsgGetters",
    "WAWebMsgModelFromData",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNewsletterSendMsgAction",
    "WAWebSendMsgChatAction",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "filterObject",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["type"],
      s,
      u,
      c,
      d;
    function m(e) {
      return !!(o("WAWebFrontendMsgGetters").getAsMms(e) && !e.ctwaContext);
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.appendedText,
            i = t.associationOptions,
            l = t.chat,
            u = t.includeCaption,
            c = u === void 0 ? !1 : u,
            p = t.msg,
            _ = t.multicast,
            g = _ === void 0 ? !1 : _;
          if (m(p) || o("WAWebFileUtils").isDocument(p))
            return o("WAWebMediaForwardMediaMsg").forwardMediaMsg({
              appendedText: a,
              chat: l,
              includeCaption: c,
              msg: p,
              multicast: g,
              associationOptions: i,
            });
          var h = S(p, l);
          if (b(p) && (h.body == null || h.body === ""))
            return (
              o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[chat forward message] skipping Hatch forward with empty body",
                    ])),
                )
                .sendLogs("forward-hatch-empty-body"),
              null
            );
          if (
            o("WAWebBotUtils").isMetaAiBot(l.id) &&
            (a != null &&
              a !== "" &&
              (h.body = o(
                "WAWebMetaAiForwardedText",
              ).composeMetaAiForwardedText(h.body, a)),
            o("WAWebBotGating").isAiChatThreadsEnabled())
          )
            return o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(l, {
              type: "MetaAiForward",
              query: h.body,
            });
          var y = yield o("WAWebMsgDataUtils").genOutgoingMsgData(l, p.type),
            C = y.type,
            v = babelHelpers.objectWithoutPropertiesLoose(y, e),
            R = Object.assign(
              h,
              babelHelpers.extends({}, v, {
                participant: void 0,
                star: !1,
                isForwarded:
                  o("WAWebMsgGetters").getShouldDisplayAsForwarded(p),
                forwardedFromWeb: !0,
                forwardingScore:
                  o("WAWebMsgModelUtils").getMsgForwardingScoreWhenForwarded(p),
                multicast: g,
                messageSecret:
                  o(
                    "WAWebMessagingGatingUtils",
                  ).isReportingTokenSendingEnabled() &&
                  self.crypto.getRandomValues(new Uint8Array(32)),
              }),
            );
          if (r("WAWebWid").isNewsletter(l.id))
            return o("WAWebNewsletterSendMsgAction").forwardNewsletterMessage(
              l,
              o(
                "WAWebGetNewsletterContextForForwardedMsg",
              ).maybeStripNewsletterForwardMetadata({
                isQuestionOrQuestionReply:
                  p.isQuestion || p.questionReplyQuotedMessage != null,
                forwardable: R,
                destination: l.id,
                source: p.id.remote,
                isOriginalMsgForwarded: p.isForwarded,
              }),
            );
          var L = yield f(R),
            E = o("WAWebSendMsgChatAction").addAndSendMsgToChat(l, L),
            k = E[0],
            I = E[1],
            T = yield (d || (d = n("Promise"))).all([k, I]),
            D = T[0],
            x = T[1];
          return babelHelpers.extends({}, x, { msg: D });
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebFrontendMsgGetters").getAsUrl(
            o("WAWebMsgModelFromData").msgModelFromMsgData(e),
          );
          if (t == null) return e;
          var n = t.mediaKeyTimestamp,
            a = t.thumbnailHQ;
          if (a == null || n != null) return e;
          try {
            var i,
              l = yield r("WAWebMediaUploadMmsThumbnail")({
                thumbnail: yield r("WAWebMediaOpaqueData").createFromBase64Jpeg(
                  a,
                ),
                mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_LINK,
                mediaKeyInfo: r("WAWebCryptoRandomMediaKey")(),
                uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(
                  o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
                ),
                fileOrigin: null,
                forwardedFromWeb: !0,
                timeout: o("WAWebMediaConstants").MMS_THUMBNAIL_UPLOAD_TIMEOUT,
                isViewOnce: !1,
              }),
              s = l.filehash,
              u = l.mediaEntry;
            return (u == null ? void 0 : u.getMediaKey()) == null
              ? h(e)
              : babelHelpers.extends({}, e, {
                  thumbnailDirectPath: u == null ? void 0 : u.directPath,
                  thumbnailSha256: s,
                  thumbnailEncSha256:
                    (i = u == null ? void 0 : u.getEncfilehash()) != null
                      ? i
                      : void 0,
                  mediaKey: u == null ? void 0 : u.getMediaKey(),
                  mediaKeyTimestamp:
                    u == null ? void 0 : u.getMediaKeyTimestamp(),
                });
          } catch (t) {
            return h(e);
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
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
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.appendedText,
            n = e.chat,
            a = e.includeCaption,
            i = a === void 0 ? !1 : a,
            l = e.msgs,
            s = e.multicast,
            d = s === void 0 ? !1 : s,
            _ = n.contact;
          if (o("WAWebContactGetters").getIsUser(_) && _.isContactBlocked)
            throw new (r("WAWebContactBlockedErrorAction"))(
              "Forwarded to contact is blocked",
              _,
            );
          var f = [];
          for (var g of l) {
            var h = i || o("WAWebMsgGetters").getHasOriginatedFromNewsletter(g);
            try {
              var y,
                C = yield p({
                  chat: n,
                  msg: g,
                  multicast: d,
                  includeCaption: h,
                  appendedText: t,
                });
              (o(
                "WAWebIncrementNewsletterForwardCounterAction",
              ).incrementNewsletterForwardCounter(g, n),
                o("WAWebForwardAssociatedChildren")
                  .maybeForwardAssociatedChildren({
                    chat: n,
                    multicast: d,
                    includeCaption: h,
                    originalMsg: g,
                    forwardedParentMsgId:
                      C == null || (y = C.msg) == null ? void 0 : y.id,
                    sendChild: p,
                  })
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[chat forward message] error forwarding associated children",
                          ])),
                      )
                      .sendLogs("forward-associated-children-fail");
                  }));
            } catch (e) {
              (o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[chat forward message] error during forwarding message",
                  ])),
              ),
                m(g) && f.push(g));
            }
          }
          return f;
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      if (e.type !== o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) return !1;
      var t = o("WAWebMsgGetters").getSender(e);
      return t != null && o("WAWebBotUtils").isHatchBot(t);
    }
    function v(e, t) {
      var n;
      return b(e)
        ? ((t.body =
            (n = o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(e, {
              includeBodyFallback: !1,
            })) != null
              ? n
              : ""),
          (t.type = o("WAWebMsgType").MSG_TYPE.CHAT),
          (t.kind = o("WAWebMsgType").MsgKind.Chat),
          (t.richResponse = void 0),
          (t.unifiedResponse = void 0),
          (t.unifiedResponseRawData = void 0),
          (t.botSignatureVerificationMetadata = void 0),
          !0)
        : !1;
    }
    function S(e, t) {
      var n,
        a,
        i,
        l = new Set([
          "buttons",
          "caption",
          "pairedMediaType",
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
          "botResponseId",
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
          "groupHistoryIndividualMessageInfo",
          "hasPaidPartnershipLabel",
          "newsletterAdminProfile",
          "experienceIds",
        ]),
        s =
          e.isDynamicReplyButtonsMsg === !0 &&
          e.type === o("WAWebMsgType").MSG_TYPE.CHAT;
      s || l.add("footer");
      var u =
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER;
      (u && (l.delete("caption"), l.delete("footer")),
        ((n = e.quotedMsg) == null ? void 0 : n.type) !==
          o("WAWebMsgType").MSG_TYPE.PRODUCT &&
          (l.add("quotedMsg"),
          l.add("quotedParticipant"),
          l.add("quotedRemoteJid"),
          l.add("quotedStanzaID")));
      var c =
        o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
        r("WAWebWid").isNewsletter(t.id);
      (c || l.add("aiProvenance"),
        o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
          (l.add("isFromTemplate"),
          l.add("hydratedButtons"),
          l.add("carouselCardsParsed")));
      var d = r("filterObject")(e.toJSON(), function (e, t) {
        return !l.has(t);
      });
      (e.ctwaContext &&
        ((d.body = e.ctwaContext.sourceUrl),
        (d.type = o("WAWebMsgType").MSG_TYPE.CHAT),
        (d.mediaObject = void 0)),
        e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION &&
          ((d.type = o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT),
          (d.pollVotesSnapshot = o(
            "WAWebGeneratePollVotesSnapshotFromPoll",
          ).generatePollVotesSnapshotFromPoll(
            r("nullthrows")(o("WAWebFrontendMsgGetters").getAsPollCreation(e)),
          ))));
      var m = v(e, d);
      (e.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
        !m &&
        o("WAWebForwardRichResponseHandler").updateRichResponseFields(e, d),
        (d.forwardedNewsletterMessageInfo = o(
          "WAWebGetNewsletterContextForForwardedMsg",
        ).getNewsletterContextForForwardedMsg(e)),
        (d.forwardedAiBotMessageInfo = o(
          "WAWebGetAiBotContextForForwardedMsg",
        ).getAiBotContextForForwardedMsg(e)),
        o("WAWebChatEphemerality").isEphemeralSettingOn(t) &&
          ((d.ephemeralDuration = o(
            "WAWebChatEphemerality",
          ).getEphemeralSetting(t)),
          (d.afterReadDuration = o(
            "WAWebChatEphemerality",
          ).getAfterReadDurationForChat(t))));
      var p = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(t);
      p != null && (d.ephemeralSettingTimestamp = p);
      var _ = o("WAWebChatEphemerality").getDisappearingModeInitiator(t);
      _ != null && (d.disappearingModeInitiator = _);
      var f = o("WAWebChatEphemerality").getDisappearingModeTrigger(t);
      f != null && (d.disappearingModeTrigger = f);
      var g = o("WAWebChatEphemerality").getDisappearingModeInitiatedByMe(t);
      if (
        (g != null && (d.disappearingModeInitiatedByMe = g),
        !(
          ((a = e.id.remote) != null && a.isBot()) ||
          ((i = e.mentionedJidList) == null
            ? void 0
            : i.find(function (e) {
                return e.isBot();
              })) != null
        ) &&
          t.isCAGAdmin() &&
          (d.messageSecret = self.crypto.getRandomValues(new Uint8Array(32))),
        t.id.isBot())
      ) {
        var h,
          y =
            (h = o("WAWebBotProfileCollection").BotProfileCollection.get(
              t.id,
            )) == null
              ? void 0
              : h.personaId;
        y != null && (d.botPersonaId = y);
      }
      return d;
    }
    ((l.forwardMessages = y), (l.getForwardedMessageFields = S));
  },
  98,
);
