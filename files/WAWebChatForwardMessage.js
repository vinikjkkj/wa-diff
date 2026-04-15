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
    "WAWebMessagingGatingUtils",
    "WAWebMmsMediaTypes",
    "WAWebMsgDataUtils",
    "WAWebMsgGetters",
    "WAWebMsgModelFromData",
    "WAWebMsgType",
    "WAWebNewsletterSendMsgAction",
    "WAWebSendMsgChatAction",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "lodash",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = ["type"],
      u,
      c = "\n \u0336 \u0336 \u0336 \u0336 \u0336 \u0336\n";
    function d(e) {
      return !!(o("WAWebFrontendMsgGetters").getAsMms(e) && !e.ctwaContext);
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.appendedText,
            a = e.chat,
            i = e.includeCaption,
            l = i === void 0 ? !1 : i,
            m = e.msg,
            p = e.multicast,
            f = p === void 0 ? !1 : p;
          if (d(m) || o("WAWebFileUtils").isDocument(m))
            return o("WAWebMediaForwardMediaMsg").forwardMediaMsg(m, a, f, l);
          var g = C(m, a);
          if (o("WAWebBotUtils").isMetaAiBot(a.id)) {
            if (t != null && t !== "") {
              var h = g.body || "";
              h === "" ? (g.body = t) : (g.body = h + c + t);
            }
            if (o("WAWebBotGating").isAiChatThreadsEnabled())
              return o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(a, {
                type: "MetaAiForward",
                query: g.body,
              });
          }
          var y = yield o("WAWebMsgDataUtils").genOutgoingMsgData(a, m.type),
            b = y.type,
            v = babelHelpers.objectWithoutPropertiesLoose(y, s),
            S = Object.assign(
              g,
              babelHelpers.extends({}, v, {
                participant: void 0,
                star: !1,
                isForwarded:
                  o("WAWebMsgGetters").getShouldDisplayAsForwarded(m),
                forwardedFromWeb: !0,
                forwardingScore: m.getForwardingScoreWhenForwarded(),
                multicast: f,
                messageSecret:
                  o(
                    "WAWebMessagingGatingUtils",
                  ).isReportingTokenSendingEnabled() &&
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
                  m.isQuestion || m.questionReplyQuotedMessage != null,
                forwardable: S,
                destination: a.id,
                source: m.id.remote,
                isOriginalMsgForwarded: m.isForwarded,
              }),
            );
          var R = yield _(S);
          return (
            o("WAWebSendMsgChatAction").addAndSendMsgToChat(a, R),
            (u || (u = n("Promise"))).resolve()
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              ? g(e)
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
            return g(e);
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
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
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.appendedText,
            a = t.chat,
            i = t.includeCaption,
            l = i === void 0 ? !1 : i,
            s = t.msgs,
            u = t.multicast,
            c = u === void 0 ? !1 : u,
            p = a.contact;
          if (o("WAWebContactGetters").getIsUser(p) && p.isContactBlocked)
            throw new (r("WAWebContactBlockedErrorAction"))(
              "Forwarded to contact is blocked",
              p,
            );
          var _ = [];
          for (var f of s) {
            var g = l || o("WAWebMsgGetters").getHasOriginatedFromNewsletter(f);
            try {
              (yield m({
                chat: a,
                msg: f,
                multicast: c,
                includeCaption: g,
                appendedText: n,
              }),
                o(
                  "WAWebIncrementNewsletterForwardCounterAction",
                ).incrementNewsletterForwardCounter(f, a));
            } catch (t) {
              (o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[chat forward message] error during forwarding message",
                  ])),
              ),
                d(f) && _.push(f));
            }
          }
          return _;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
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
    ((l.forwardMessages = h), (l.getForwardedMessageFields = C));
  },
  98,
);
