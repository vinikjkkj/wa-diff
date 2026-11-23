__d(
  "WAWebMsgUtilsBridge",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAfterReadUtils",
    "WAWebBackendApi",
    "WAWebChatThreadLogging",
    "WAWebChatThreadLoggingUtils",
    "WAWebDBMsgUtils",
    "WAWebDBProcessReplyMsgs",
    "WAWebEphemeralityResolver",
    "WAWebForwardSendWamEvent",
    "WAWebLidAwareContactsDB",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebWamGroupMetadataMetricUtils",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = !!t.caption;
      t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT && (n = t.isCaptionByUser);
      var a = {
        messageType: o("WAWebWamMsgUtils").getWamMessageType(t),
        messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(t),
        mediaCaptionPresent: n,
        fastForwardEnabled: !0,
        messageIsFanout: !0,
        isFrequentlyForwarded:
          !!o("WAWebMsgGetters").getIsFrequentlyForwarded(t),
        isForwardedForward: o("WAWebMsgGetters").getNumTimesForwarded(t) > 1,
      };
      t.ephemeralDuration != null &&
        (a.ephemeralityDuration = t.ephemeralDuration);
      var i = o("WAWebMsgGetters").getWamDisappearingModeTrigger(t);
      i != null && (a.ephemeralityTriggerAction = i);
      var l = o("WAWebMsgGetters").getWamDisappearingModeInitiatedByMe(t);
      if (
        (l != null && (a.ephemeralityInitiator = l),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "createMessageForwardMetric",
            ])),
        ),
        !o("WAWebMsgGetters").getIsGroupMsg(t))
      ) {
        var s = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
          u = await Promise.all([
            s != null ? r("WAWebLidAwareContactsDB").get(s.toJid()) : null,
            r("WAWebLidAwareContactsDB").get(t.to.toJid()),
          ]),
          c = u[0],
          d = u[1],
          m = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(c);
        m != null && (a.senderDefaultDisappearingDuration = m);
        var p = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(d);
        p != null && (a.receiverDefaultDisappearingDuration = p);
      }
      var _ = o("WAWebMsgGetters").getWamDisappearingModeInitiator(t);
      _ != null && (a.disappearingChatInitiator = _);
      var f = await o(
        "WAWebWamGroupMetadataMetricUtils",
      ).getGroupTypeFromChatWid(t.to);
      return (
        f != null && (a.typeOfGroup = f),
        new (o("WAWebForwardSendWamEvent").ForwardSendWamEvent)(a)
      );
    }
    async function u(e) {
      var t;
      return ((t = e.quotedMsg) == null ? void 0 : t.type) !==
        o("WAWebMsgType").MSG_TYPE.PRODUCT ||
        !o("WAWebMsgGetters").getIsSentByMe(e)
        ? !1
        : o("WAWebBackendApi").frontendSendAndReceive(
            "isMessageSentToBusiness",
            { msgKey: e.id },
          );
    }
    async function c(e) {
      var t;
      if (
        o("WAWebChatThreadLoggingUtils").shouldIncrementMsgSendAndReceive(e)
      ) {
        var n = o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(e);
        if (n !== "missing-stanza-id") {
          var r = await o("WAWebDBMsgUtils").getMsgByMsgKey(n);
          if (r != null && o("WAWebMsgGetters").getIsGroupStatus(r)) {
            var a = o("WAWebMsgGetters").getIsSentByMe(r),
              i = o("WAWebMsgGetters").getIsReply(e);
            return o(
              "WAWebChatThreadLogging",
            ).handleActivitiesForChatThreadLogging([
              {
                activityType: "groupStatusMsgSend",
                chatId: e.id.remote,
                ts: o("WATimeUtils").unixTime(),
                isGroupStatusReplyOwnToOwn: i && a,
                isGroupStatusReplyOwnToOthers: i && !a,
              },
            ]);
          }
        }
        o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
          {
            activityType: "msgSend",
            chatId: e.id.remote,
            ts: o("WATimeUtils").unixTime(),
            isViewOnce: !!e.isViewOnce,
            isReaction: o("WAWebMsgGetters").getIsReaction(e),
            isForwarded: o("WAWebMsgGetters").getIsForwarded(e),
            isCommerceMessage: o(
              "WAWebChatThreadLoggingUtils",
            ).isCommerceMessage(e),
            isPdpInquiry: await u(e),
            isReply: o("WAWebMsgGetters").getIsReply(e),
            isEdit: o("WAWebMsgGetters").getIsEditProtocolMsg(e),
            isBot: o("WAWebMsgGetters").getIsBotQuery(e),
            isEventCreation:
              e.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
            isEventResponse:
              e.type === o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
            isAfterRead: o("WAWebAfterReadUtils").isAfterReadEnabled()
              ? ((t = e.afterReadDuration) != null ? t : 0) > 0
              : void 0,
          },
        ]);
      }
    }
    function d(e) {
      (e.markMessageSendT(), e.commit());
    }
    ((l.createMessageForwardMetric = s),
      (l.logMessageSendForChatThreadLogging = c),
      (l.logMessageMetric = d));
  },
  98,
);
