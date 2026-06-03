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
    "asyncToGeneratorRuntime",
    "lodash",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = ["type"],
      d;
    function m(e) {
      return !!(o("WAWebFrontendMsgGetters").getAsMms(e) && !e.ctwaContext);
    }
    var p = "\n \u0336 \u0336 \u0336 \u0336 \u0336 \u0336\n";
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.appendedText,
            a = e.associationOptions,
            i = e.chat,
            l = e.includeCaption,
            s = l === void 0 ? !1 : l,
            u = e.msg,
            _ = e.multicast,
            f = _ === void 0 ? !1 : _;
          if (m(u) || o("WAWebFileUtils").isDocument(u))
            return o("WAWebMediaForwardMediaMsg").forwardMediaMsg({
              appendedText: t,
              chat: i,
              includeCaption: s,
              msg: u,
              multicast: f,
              associationOptions: a,
            });
          var h = R(u, i);
          if (o("WAWebBotUtils").isMetaAiBot(i.id)) {
            if (t != null && t !== "") {
              var y = h.body || "";
              y === "" ? (h.body = t) : (h.body = y + p + t);
            }
            if (o("WAWebBotGating").isAiChatThreadsEnabled())
              return o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(i, {
                type: "MetaAiForward",
                query: h.body,
              });
          }
          var C = yield o("WAWebMsgDataUtils").genOutgoingMsgData(i, u.type),
            b = C.type,
            v = babelHelpers.objectWithoutPropertiesLoose(C, c),
            S = Object.assign(
              h,
              babelHelpers.extends({}, v, {
                participant: void 0,
                star: !1,
                isForwarded:
                  o("WAWebMsgGetters").getShouldDisplayAsForwarded(u),
                forwardedFromWeb: !0,
                forwardingScore:
                  o("WAWebMsgModelUtils").getMsgForwardingScoreWhenForwarded(u),
                multicast: f,
                messageSecret:
                  o(
                    "WAWebMessagingGatingUtils",
                  ).isReportingTokenSendingEnabled() &&
                  self.crypto.getRandomValues(new Uint8Array(32)),
              }),
            );
          if (r("WAWebWid").isNewsletter(i.id))
            return o("WAWebNewsletterSendMsgAction").forwardNewsletterMessage(
              i,
              o(
                "WAWebGetNewsletterContextForForwardedMsg",
              ).maybeStripNewsletterForwardMetadata({
                isQuestionOrQuestionReply:
                  u.isQuestion || u.questionReplyQuotedMessage != null,
                forwardable: S,
                destination: i.id,
                source: u.id.remote,
                isOriginalMsgForwarded: u.isForwarded,
              }),
            );
          var L = yield g(S),
            E = o("WAWebSendMsgChatAction").addAndSendMsgToChat(i, L),
            k = E[0],
            I = E[1],
            T = yield (d || (d = n("Promise"))).all([k, I]),
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
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chat,
            r = t.forwardedParentMsgId,
            a = t.includeCaption,
            i = t.multicast,
            l = t.originalMsg;
          if (r != null) {
            var s = o(
              "WAWebMessageAssociationUIUtils",
            ).getHiddenAssociatedMessages(
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
                  _({
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
            c = e.multicast,
            d = c === void 0 ? !1 : c,
            p = n.contact;
          if (o("WAWebContactGetters").getIsUser(p) && p.isContactBlocked)
            throw new (r("WAWebContactBlockedErrorAction"))(
              "Forwarded to contact is blocked",
              p,
            );
          var f = [];
          for (var g of l) {
            var h = i || o("WAWebMsgGetters").getHasOriginatedFromNewsletter(g);
            try {
              var y,
                b = yield _({
                  chat: n,
                  msg: g,
                  multicast: d,
                  includeCaption: h,
                  appendedText: t,
                });
              (o(
                "WAWebIncrementNewsletterForwardCounterAction",
              ).incrementNewsletterForwardCounter(g, n),
                C({
                  chat: n,
                  multicast: d,
                  includeCaption: h,
                  originalMsg: g,
                  forwardedParentMsgId:
                    b == null || (y = b.msg) == null ? void 0 : y.id,
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
                m(g) && f.push(g));
            }
          }
          return f;
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
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
    ((l.forwardMessages = v), (l.getForwardedMessageFields = R));
  },
  98,
);
