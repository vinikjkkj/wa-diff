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
    "WAWebForwardAssociationConfig",
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
    "WAWebMessageAssociationUIUtils",
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
    "WAWebViewMode.flow",
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
      d,
      m;
    function p(e) {
      return !!(o("WAWebFrontendMsgGetters").getAsMms(e) && !e.ctwaContext);
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.appendedText,
            i = t.associationOptions,
            l = t.chat,
            u = t.includeCaption,
            c = u === void 0 ? !1 : u,
            d = t.msg,
            _ = t.multicast,
            f = _ === void 0 ? !1 : _;
          if (p(d) || o("WAWebFileUtils").isDocument(d))
            return o("WAWebMediaForwardMediaMsg").forwardMediaMsg({
              appendedText: a,
              chat: l,
              includeCaption: c,
              msg: d,
              multicast: f,
              associationOptions: i,
            });
          var h = E(d, l);
          if (R(d) && (h.body == null || h.body === ""))
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
          var y = yield o("WAWebMsgDataUtils").genOutgoingMsgData(l, d.type),
            C = y.type,
            b = babelHelpers.objectWithoutPropertiesLoose(y, e),
            v = Object.assign(
              h,
              babelHelpers.extends({}, b, {
                participant: void 0,
                star: !1,
                isForwarded:
                  o("WAWebMsgGetters").getShouldDisplayAsForwarded(d),
                forwardedFromWeb: !0,
                forwardingScore:
                  o("WAWebMsgModelUtils").getMsgForwardingScoreWhenForwarded(d),
                multicast: f,
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
                  d.isQuestion || d.questionReplyQuotedMessage != null,
                forwardable: v,
                destination: l.id,
                source: d.id.remote,
                isOriginalMsgForwarded: d.isForwarded,
              }),
            );
          var S = yield g(v),
            L = o("WAWebSendMsgChatAction").addAndSendMsgToChat(l, S),
            k = L[0],
            I = L[1],
            T = yield (m || (m = n("Promise"))).all([k, I]),
            D = T[0],
            x = T[1];
          return babelHelpers.extends({}, x, { msg: D });
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                forwardedFromWeb: !0,
                timeout: o("WAWebMediaConstants").MMS_THUMBNAIL_UPLOAD_TIMEOUT,
                isViewOnce: !1,
              }),
              s = l.filehash,
              u = l.mediaEntry;
            return (u == null ? void 0 : u.getMediaKey()) == null
              ? y(e)
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
            return y(e);
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
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
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.forwardedParentMsgId,
            r = e.includeCaption,
            a = e.multicast,
            i = e.originalMsg;
          if (n != null) {
            var l = o(
              "WAWebMessageAssociationUIUtils",
            ).getHiddenAssociatedMessages(
              i.id,
              o("WAWebViewMode.flow").ViewModeSurface.CHAT,
            );
            for (var s of l) {
              var c = s.associationType;
              if (c != null) {
                var d = o(
                  "WAWebForwardAssociationConfig",
                ).getForwardAssociationConfig(c);
                d != null &&
                  _({
                    chat: t,
                    msg: s,
                    multicast: a,
                    includeCaption: r,
                    associationOptions: {
                      parentMsgKey: n,
                      associationType: d.associationType,
                      viewMode: d.viewMode,
                    },
                  }).catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[chat forward message] error forwarding associated child",
                          ])),
                      )
                      .sendLogs("forward-associated-child-fail");
                  });
              }
            }
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.appendedText,
            n = e.chat,
            a = e.includeCaption,
            i = a === void 0 ? !1 : a,
            l = e.msgs,
            s = e.multicast,
            u = s === void 0 ? !1 : s,
            m = n.contact;
          if (o("WAWebContactGetters").getIsUser(m) && m.isContactBlocked)
            throw new (r("WAWebContactBlockedErrorAction"))(
              "Forwarded to contact is blocked",
              m,
            );
          var f = [];
          for (var g of l) {
            var h = i || o("WAWebMsgGetters").getHasOriginatedFromNewsletter(g);
            try {
              var y,
                b = yield _({
                  chat: n,
                  msg: g,
                  multicast: u,
                  includeCaption: h,
                  appendedText: t,
                });
              (o(
                "WAWebIncrementNewsletterForwardCounterAction",
              ).incrementNewsletterForwardCounter(g, n),
                C({
                  chat: n,
                  multicast: u,
                  includeCaption: h,
                  originalMsg: g,
                  forwardedParentMsgId:
                    b == null || (y = b.msg) == null ? void 0 : y.id,
                }).catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[chat forward message] error forwarding associated children",
                        ])),
                    )
                    .sendLogs("forward-associated-children-fail");
                }));
            } catch (e) {
              (o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[chat forward message] error during forwarding message",
                  ])),
              ),
                p(g) && f.push(g));
            }
          }
          return f;
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      if (e.type !== o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) return !1;
      var t = o("WAWebMsgGetters").getSender(e);
      return t != null && o("WAWebBotUtils").isHatchBot(t);
    }
    function L(e, t) {
      var n;
      return R(e)
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
    function E(e, t) {
      var n,
        a,
        i,
        l = new Set([
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
          "groupHistoryIndividualMessageInfo",
          "hasPaidPartnershipLabel",
          "newsletterAdminProfile",
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
      var m = L(e, d);
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
    ((l.forwardMessages = v), (l.getForwardedMessageFields = E));
  },
  98,
);
