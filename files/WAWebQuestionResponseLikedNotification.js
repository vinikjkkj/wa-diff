__d(
  "WAWebQuestionResponseLikedNotification",
  [
    "fbt",
    "WAWebBaseNotification",
    "WAWebChatEntryPoint",
    "WAWebChatFlowTypes",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebMsgCollection",
    "WAWebMuteCollection",
    "WAWebNewsletterCollection",
    "WAWebNotificationController",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebOpenLastActiveChatAction",
    "WAWebQuestionsRenderingUtils",
    "WAWebWamEnumNotificationTypeEnum",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["newsletterJid"];
    function u(t) {
      var n = t.newsletterJid,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = r("WAWebNewsletterCollection").get(
          o("WAWebWidFactory").createWid(n),
        );
      return i == null
        ? Promise.resolve(null)
        : o(
            "WAWebNotificationController",
          ).WANotificationController.triggerNotification(
            new c(babelHelpers.extends({}, a, { chat: i })),
          );
    }
    var c = (function (e) {
      function t(t) {
        var n,
          r = t.chat,
          o = t.isOffline,
          a = t.questionMsgKey,
          i = t.responseId,
          l = t.responseText;
        return (
          (n = e.call(this) || this),
          (n.chat = r),
          (n.isOffline = o),
          (n.questionMsgKey = a),
          (n.responseId = i),
          (n.responseText = l),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.shouldPlaySound = function () {
          return (
            e.prototype.shouldPlaySound.call(this) &&
            o("WAWebNotificationHelpers").shouldPlaySoundGranular(this.chat)
          );
        }),
        (n.shouldShowBanner = function () {
          return (
            e.prototype.shouldShowBanner.call(this) &&
            o("WAWebNotificationHelpers").shouldEnableNotificationGranular(
              this.chat,
            )
          );
        }),
        (n.buildKey = function () {
          return (
            "question-response-liked:" +
            this.chat.id.toString() +
            ":" +
            this.responseId
          );
        }),
        (n.getBannerOptions = function () {
          var e = this,
            t = this.questionMsgKey;
          return {
            wid: this.chat.id,
            tag: this.buildKey(),
            title: o("WAWebNotificationHelpers").getNotificationTitle(
              this.chat,
            ),
            body: this.getBody(),
            doNotOpenChat: t != null,
            onClick:
              t != null
                ? function () {
                    return void e.openQuestion(t);
                  }
                : void 0,
          };
        }),
        (n.getBody = function () {
          return o("WAWebMuteCollection").MuteCollection.getGlobalPreviews()
            ? s
                ._(/*BTDS*/ "", [s._param("response_text", this.responseText)])
                .toString()
            : s._(/*BTDS*/ "").toString();
        }),
        (n.openQuestion = async function (t) {
          (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
            o(
              "WAWebOpenLastActiveChatAction",
            ).cancelPendingLastActiveChatRestore());
          var e = await o("WAWebCmd").Cmd.openChatAt({
              chat: this.chat,
              msgContext: o("WAWebChatMessageSearch").getSearchContext({
                chat: this.chat,
                msgKey: t,
              }),
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                .Notification,
            }),
            n = o("WAWebMsgCollection").MsgCollection.get(t);
          e &&
            n != null &&
            o("WAWebQuestionsRenderingUtils").maybeOpenMyQuestionResponses(n);
        }),
        (n.getIcon = async function () {
          return o("WAWebNotificationIconUtils").getChatNotificationIcon(
            this.chat,
            this.abortController.signal,
          );
        }),
        (n.matchesChat = function (t) {
          return t.equals(this.chat);
        }),
        (n.getChatKind = function () {
          return o("WAWebChatFlowTypes").ChatKindType.Newsletter;
        }),
        (n.getNotificationDeliveryWamEventData = async function () {
          return {
            uiNotificationType: o("WAWebWamEnumNotificationTypeEnum")
              .NOTIFICATION_TYPE_ENUM.CHANNEL_QUESTION_RESPONSE_LIKED,
            triggeredByOfflineMessage: this.isOffline,
          };
        }),
        t
      );
    })(o("WAWebBaseNotification").WABaseNotification);
    ((l.showQuestionResponseLikedNotification = u),
      (l.WAQuestionResponseLikedNotification = c));
  },
  226,
);
