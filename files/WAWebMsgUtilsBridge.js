__d(
  "WAWebMsgUtilsBridge",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = !!t.caption;
          t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
            (a = t.isCaptionByUser);
          var i = {
            messageType: o("WAWebWamMsgUtils").getWamMessageType(t),
            messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(t),
            mediaCaptionPresent: a,
            fastForwardEnabled: !0,
            messageIsFanout: !0,
            isFrequentlyForwarded:
              !!o("WAWebMsgGetters").getIsFrequentlyForwarded(t),
            isForwardedForward:
              o("WAWebMsgGetters").getNumTimesForwarded(t) > 1,
          };
          t.ephemeralDuration != null &&
            (i.ephemeralityDuration = t.ephemeralDuration);
          var l = o("WAWebMsgGetters").getWamDisappearingModeTrigger(t);
          l != null && (i.ephemeralityTriggerAction = l);
          var u = o("WAWebMsgGetters").getWamDisappearingModeInitiatedByMe(t);
          if (
            (u != null && (i.ephemeralityInitiator = u),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "createMessageForwardMetric",
                ])),
            ),
            !o("WAWebMsgGetters").getIsGroupMsg(t))
          ) {
            var c = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
              d = yield (s || (s = n("Promise"))).all([
                c != null ? r("WAWebLidAwareContactsDB").get(c.toJid()) : null,
                r("WAWebLidAwareContactsDB").get(t.to.toJid()),
              ]),
              m = d[0],
              p = d[1],
              _ = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(m);
            _ != null && (i.senderDefaultDisappearingDuration = _);
            var f = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(
              p,
            );
            f != null && (i.receiverDefaultDisappearingDuration = f);
          }
          var g = o("WAWebMsgGetters").getWamDisappearingModeInitiator(t);
          g != null && (i.disappearingChatInitiator = g);
          var h = yield o(
            "WAWebWamGroupMetadataMetricUtils",
          ).getGroupTypeFromChatWid(t.to);
          return (
            h != null && (i.typeOfGroup = h),
            new (o("WAWebForwardSendWamEvent").ForwardSendWamEvent)(i)
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          return ((t = e.quotedMsg) == null ? void 0 : t.type) !==
            o("WAWebMsgType").MSG_TYPE.PRODUCT ||
            !o("WAWebMsgGetters").getIsSentByMe(e)
            ? !1
            : o("WAWebBackendApi").frontendSendAndReceive(
                "isMessageSentToBusiness",
                { msgKey: e.id },
              );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o("WAWebChatThreadLoggingUtils").shouldIncrementMsgSendAndReceive(e)
          ) {
            if (
              o("WAWebABProps").getABPropConfigValue(
                "group_status_receiver_enabled",
              )
            ) {
              var t = o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(e);
              if (t !== "missing-stanza-id") {
                var n = yield o("WAWebDBMsgUtils").getMsgByMsgKey(t);
                if (n != null && o("WAWebMsgGetters").getIsGroupStatus(n)) {
                  var r = o("WAWebMsgGetters").getIsSentByMe(n),
                    a = o("WAWebMsgGetters").getIsReply(e);
                  return o(
                    "WAWebChatThreadLogging",
                  ).handleActivitiesForChatThreadLogging([
                    {
                      activityType: "groupStatusMsgSend",
                      chatId: e.id.remote,
                      ts: o("WATimeUtils").unixTime(),
                      isGroupStatusReplyOwnToOwn: a && r,
                      isGroupStatusReplyOwnToOthers: a && !r,
                    },
                  ]);
                }
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
                isPdpInquiry: yield d(e),
                isReply: o("WAWebMsgGetters").getIsReply(e),
                isEdit: o("WAWebMsgGetters").getIsEditProtocolMsg(e),
                isBot: o("WAWebMsgGetters").getIsBotQuery(e),
                isEventCreation:
                  e.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
                isEventResponse:
                  e.type === o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
              },
            ]);
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      (e.markMessageSendT(), e.commit());
    }
    ((l.createMessageForwardMetric = u),
      (l.logMessageSendForChatThreadLogging = p),
      (l.logMessageMetric = f));
  },
  98,
);
