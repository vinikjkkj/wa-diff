__d(
  "WAWebCommentNotification",
  [
    "fbt",
    "WANullthrows",
    "WAWebBaseNotification",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebMsgCollection",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebWamEnumNotificationTypeEnum",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t(t) {
        var n,
          r = t.commentMsg;
        ((n = e.call(this) || this), (n.commentMsg = r));
        var a = o("WAWebMsgCollection").MsgCollection.get(
          n.commentMsg.parentMsgKey,
        );
        return (a != null && (n.parentMsg = a), n);
      }
      babelHelpers.inheritsLoose(t, e);
      var a = t.prototype;
      return (
        (a.shouldMute = function (t) {
          return this.parentMsg == null
            ? r("WAWebNotificationMuteReason").ParentMsgMissing
            : o("WAWebNotificationHelpers").shouldMuteDueToAppState(t)
              ? r("WAWebNotificationMuteReason").AppState
              : o("WAWebNotificationHelpers").isMutedAndNotMentioned(
                    this.parentMsg,
                  )
                ? r("WAWebNotificationMuteReason").MutedChat
                : o("WAWebNotificationHelpers").isArchivedAndNotMentioned(
                      this.parentMsg,
                    )
                  ? r("WAWebNotificationMuteReason").ArchivedChat
                  : o("WAWebNotificationHelpers").isOfflineResumeInProgress()
                    ? r("WAWebNotificationMuteReason").OfflineResumeInProgress
                    : null;
        }),
        (a.shouldPlaySound = function () {
          if (!e.prototype.shouldPlaySound.call(this)) return !1;
          var t = o("WAWebFrontendMsgGetters").getChat(this.commentMsg);
          return (
            o("WAWebNotificationHelpers").shouldPlaySoundGranular(t) &&
            !o("WAWebNotificationHelpers").shouldSquelch(t, !1)
          );
        }),
        (a.shouldShowBanner = function () {
          if (!e.prototype.shouldShowBanner.call(this)) return !1;
          var t = o("WAWebFrontendMsgGetters").getChat(this.commentMsg);
          return o("WAWebNotificationHelpers").shouldEnableNotificationGranular(
            t,
          );
        }),
        (a.getBannerOptions = function () {
          var e = o("WAWebFrontendMsgGetters").getChat(this.commentMsg);
          return {
            wid: e.id,
            title: o("WAWebNotificationHelpers").getNotificationTitle(e),
            body: o("WAWebGetNotificationStrings").getNotificationBody(
              babelHelpers.extends({}, u(this.commentMsg)),
            ),
          };
        }),
        (a.buildKey = function () {
          return "comment:" + this.commentMsg.id.toString();
        }),
        (a.getIcon = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = o("WAWebFrontendMsgGetters").getChat(this.commentMsg);
            return o("WAWebNotificationIconUtils").getChatNotificationIcon(
              e,
              this.abortController.signal,
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.getNotificationDeliveryWamEventData = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return {
              uiNotificationType: o("WAWebWamEnumNotificationTypeEnum")
                .NOTIFICATION_TYPE_ENUM.OTHER,
              triggeredByOfflineMessage: this.commentMsg.isOffline === !0,
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
    function u(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(
          r("WANullthrows")(e.author, "comment author cannot be null"),
        ),
        n = t ? o("WAWebFrontendContactGetters").getFormattedUser(t) : "",
        a = s._(/*BTDS*/ "{name} replied to your announcement message", [
          s._param("name", n),
        ]);
      return { body: a.toString() };
    }
    l.WACommentNotification = e;
  },
  226,
);
