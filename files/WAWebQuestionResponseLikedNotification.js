__d(
  "WAWebQuestionResponseLikedNotification",
  [
    "fbt",
    "Promise",
    "WAWebBaseNotification",
    "WAWebChatEntryPoint",
    "WAWebChatFlowTypes",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebMuteCollection",
    "WAWebNewsletterCollection",
    "WAWebNotificationController",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebOpenLastActiveChatAction",
    "WAWebWamEnumNotificationTypeEnum",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["newsletterJid"],
      u;
    function c(t) {
      var a = t.newsletterJid,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = r("WAWebNewsletterCollection").get(
          o("WAWebWidFactory").createWid(a),
        );
      return l == null
        ? (u || (u = n("Promise"))).resolve(null)
        : o(
            "WAWebNotificationController",
          ).WANotificationController.triggerNotification(
            new d(babelHelpers.extends({}, i, { chat: l })),
          );
    }
    var d = (function (e) {
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
      var r = t.prototype;
      return (
        (r.shouldPlaySound = function () {
          return (
            e.prototype.shouldPlaySound.call(this) &&
            o("WAWebNotificationHelpers").shouldPlaySoundGranular(this.chat)
          );
        }),
        (r.shouldShowBanner = function () {
          return (
            e.prototype.shouldShowBanner.call(this) &&
            o("WAWebNotificationHelpers").shouldEnableNotificationGranular(
              this.chat,
            )
          );
        }),
        (r.buildKey = function () {
          return (
            "question-response-liked:" +
            this.chat.id.toString() +
            ":" +
            this.responseId
          );
        }),
        (r.getBannerOptions = function () {
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
                    return e.openQuestion(t);
                  }
                : void 0,
          };
        }),
        (r.getBody = function () {
          return o("WAWebMuteCollection").MuteCollection.getGlobalPreviews()
            ? s
                ._(/*BTDS*/ "Liked: {response_text}", [
                  s._param("response_text", this.responseText),
                ])
                .toString()
            : s._(/*BTDS*/ "Liked your response").toString();
        }),
        (r.openQuestion = function (t) {
          (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
            o(
              "WAWebOpenLastActiveChatAction",
            ).cancelPendingLastActiveChatRestore(),
            o("WAWebCmd").Cmd.openChatAt({
              chat: this.chat,
              msgContext: o("WAWebChatMessageSearch").getSearchContext({
                chat: this.chat,
                msgKey: t,
              }),
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                .Notification,
            }));
        }),
        (r.getIcon = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebNotificationIconUtils").getChatNotificationIcon(
              this.chat,
              this.abortController.signal,
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (r.matchesChat = function (t) {
          return t.equals(this.chat);
        }),
        (r.getChatKind = function () {
          return o("WAWebChatFlowTypes").ChatKindType.Newsletter;
        }),
        (r.getNotificationDeliveryWamEventData = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return {
              uiNotificationType: o("WAWebWamEnumNotificationTypeEnum")
                .NOTIFICATION_TYPE_ENUM.CHANNEL_QUESTION_RESPONSE_LIKED,
              triggeredByOfflineMessage: this.isOffline,
            };
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        t
      );
    })(o("WAWebBaseNotification").WABaseNotification);
    ((l.showQuestionResponseLikedNotification = c),
      (l.WAQuestionResponseLikedNotification = d));
  },
  226,
);
