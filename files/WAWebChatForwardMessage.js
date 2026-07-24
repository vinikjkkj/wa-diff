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
    var _ = "\n \u0336 \u0336 \u0336 \u0336 \u0336 \u0336\n";
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.appendedText,
            i = t.associationOptions,
            l = t.chat,
            u = t.includeCaption,
            c = u === void 0 ? !1 : u,
            d = t.msg,
            f = t.multicast,
            g = f === void 0 ? !1 : f;
          if (p(d) || o("WAWebFileUtils").isDocument(d))
            return o("WAWebMediaForwardMediaMsg").forwardMediaMsg({
              appendedText: a,
              chat: l,
              includeCaption: c,
              msg: d,
              multicast: g,
              associationOptions: i,
            });
          var y = k(d, l);
          if (L(d) && (y.body == null || y.body === ""))
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
          if (o("WAWebBotUtils").isMetaAiBot(l.id)) {
            if (a != null && a !== "") {
              var C = y.body || "";
              C === "" ? (y.body = a) : (y.body = C + _ + a);
            }
            if (o("WAWebBotGating").isAiChatThreadsEnabled())
              return o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(l, {
                type: "MetaAiForward",
                query: y.body,
              });
          }
          var b = yield o("WAWebMsgDataUtils").genOutgoingMsgData(l, d.type),
            v = b.type,
            S = babelHelpers.objectWithoutPropertiesLoose(b, e),
            R = Object.assign(
              y,
              babelHelpers.extends({}, S, {
                participant: void 0,
                star: !1,
                isForwarded:
                  o("WAWebMsgGetters").getShouldDisplayAsForwarded(d),
                forwardedFromWeb: !0,
                forwardingScore:
                  o("WAWebMsgModelUtils").getMsgForwardingScoreWhenForwarded(d),
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
                  d.isQuestion || d.questionReplyQuotedMessage != null,
                forwardable: R,
                destination: l.id,
                source: d.id.remote,
                isOriginalMsgForwarded: d.isForwarded,
              }),
            );
          var E = yield h(R),
            I = o("WAWebSendMsgChatAction").addAndSendMsgToChat(l, E),
            T = I[0],
            D = I[1],
            x = yield (m || (m = n("Promise"))).all([T, D]),
            $ = x[0],
            P = x[1];
          return babelHelpers.extends({}, P, { msg: $ });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              ? C(e)
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
            return C(e);
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
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
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  f({
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
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var _ = [];
          for (var g of l) {
            var h = i || o("WAWebMsgGetters").getHasOriginatedFromNewsletter(g);
            try {
              var y,
                C = yield f({
                  chat: n,
                  msg: g,
                  multicast: u,
                  includeCaption: h,
                  appendedText: t,
                });
              (o(
                "WAWebIncrementNewsletterForwardCounterAction",
              ).incrementNewsletterForwardCounter(g, n),
                b({
                  chat: n,
                  multicast: u,
                  includeCaption: h,
                  originalMsg: g,
                  forwardedParentMsgId:
                    C == null || (y = C.msg) == null ? void 0 : y.id,
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
                p(g) && _.push(g));
            }
          }
          return _;
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      if (e.type !== o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) return !1;
      var t = o("WAWebMsgGetters").getSender(e);
      return t != null && o("WAWebBotUtils").isHatchBot(t);
    }
    function E(e, t) {
      var n;
      return L(e)
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
    function k(e, t) {
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
      c || l.add("aiProvenance");
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
      var m = E(e, d);
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
    ((l.forwardMessages = S), (l.getForwardedMessageFields = k));
  },
  98,
);
