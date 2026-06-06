__d(
  "WAWebStatusNotification",
  [
    "fbt",
    "WANullthrows",
    "WAWebABProps",
    "WAWebBaseNotification",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebMsgGetters",
    "WAWebMuteCollection",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebStatusCollection",
    "WAWebStatusNotificationUtils",
    "WAWebWamEnumNotificationTypeEnum",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t(t) {
        var n,
          a = t.msg;
        return (
          (n = e.call(this) || this),
          (n.msg = a),
          (n.status = o(
            "WAWebStatusCollection",
          ).StatusCollection.getStatusModel(
            r("WANullthrows")(
              o("WAWebMsgGetters").getSender(n.msg),
              "[WAStatusNotification]: status poster cannot be null",
            ),
            !1,
          )),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var a = t.prototype;
      return (
        (a.shouldMute = function (t) {
          var e, n;
          return o("WAWebNotificationHelpers").appIsActive()
            ? r("WAWebNotificationMuteReason").AppState
            : (e = this.status) != null &&
                e.contact &&
                o("WAWebContactGetters").getCalculatedStatusMute(
                  (n = this.status) == null ? void 0 : n.contact,
                )
              ? r("WAWebNotificationMuteReason").MutedStatus
              : o("WAWebNotificationHelpers").isOfflineResumeInProgress()
                ? r("WAWebNotificationMuteReason").OfflineResumeInProgress
                : null;
        }),
        (a.shouldPlaySound = function () {
          if (!e.prototype.shouldPlaySound.call(this)) return !1;
          var t = o("WAWebABProps").getABPropConfigValue(
            "wa_web_enable_granular_notifications",
          );
          return t
            ? o(
                "WAWebMuteCollection",
              ).MuteCollection.getGlobalStatusSoundsEnabled()
            : e.prototype.shouldPlaySound.call(this);
        }),
        (a.shouldShowBanner = function () {
          if (!e.prototype.shouldShowBanner.call(this)) return !1;
          var t = o("WAWebABProps").getABPropConfigValue(
            "wa_web_enable_granular_notifications",
          );
          return t
            ? o(
                "WAWebMuteCollection",
              ).MuteCollection.getGlobalStatusNotificationsEnabled()
            : e.prototype.shouldShowBanner.call(this);
        }),
        (a.getBannerOptions = function () {
          var e = this,
            t = s._(/*BTDS*/ "Mentioned you privately in a status").toString(),
            n = this.status
              ? o("WAWebFrontendContactGetters").getFormattedName(
                  this.status.contact,
                )
              : o("WAWebFrontendContactGetters").getFormattedName(
                  r("WANullthrows")(
                    o("WAWebContactCollection").ContactCollection.get(
                      this.msg.author,
                    ),
                  ),
                ),
            a = o("WAWebGetNotificationStrings").getNotificationBody({
              body: t,
              msgDir: o("WAWebFrontendMsgGetters").getDir(this.msg),
            }),
            i = function () {
              o("WAWebStatusNotificationUtils").openStatusViewer(e.msg);
            };
          return {
            wid: this.msg.author,
            title: r("WANullthrows")(n),
            body: a,
            onClick: i,
          };
        }),
        (a.buildKey = function () {
          return "status-msg:" + this.msg.id.toString();
        }),
        (a.getIcon = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebNotificationIconUtils").getNotificationIconByWid(
              r("WANullthrows")(o("WAWebMsgGetters").getSender(this.msg)),
              this.abortController.signal,
              o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
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
                .NOTIFICATION_TYPE_ENUM.STATUS_MENTION,
              triggeredByOfflineMessage: this.msg.isOffline === !0,
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
    l.WAStatusNotification = e;
  },
  226,
);
