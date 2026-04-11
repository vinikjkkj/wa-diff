__d(
  "WAWebNotificationsStatusReactionNotification",
  [
    "WANullthrows",
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebMuteCollection",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebNotificationsBaseReactionNotification",
    "WAWebReactionNotificationUtils",
    "WAWebStatusNotificationUtils",
    "asyncToGeneratorRuntime",
    "cr:7293",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = n("cr:7293")) != null ? e : {},
      u = s.getStatusReactionsSetting,
      c = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.shouldMute = function (n) {
            var t = e.prototype.shouldMute.call(this, n);
            return t != null
              ? t
              : (u == null ? void 0 : u()) === !1
                ? r("WAWebNotificationMuteReason").MutedStatusReaction
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
                ).MuteCollection.getGlobalStatusNotificationReactionsEnabled()
              : e.prototype.shouldShowBanner.call(this);
          }),
          (a.matchesChat = function (t) {
            return t.id.isStatus();
          }),
          (a.getChatKind = function () {
            return null;
          }),
          (a.getIcon = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return o("WAWebNotificationIconUtils").getNotificationIconByWid(
                o("WAWebReactionNotificationUtils").getReactionSenderJid(
                  this.reactionMsg,
                ),
                this.abortController.signal,
                o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getBannerOptions = function () {
            var e = this.parentMsg,
              t = o(
                "WAWebReactionNotificationUtils",
              ).getNotificationPartsForStatusReaction(e, this.reactionMsg),
              n = t.action,
              a = t.author,
              i = t.body,
              l = o("WAWebGetNotificationStrings").getNotificationBody({
                action: n,
                body: i,
                msgDir: o("WAWebFrontendMsgGetters").getDir(e),
              }),
              s = function () {
                o("WAWebStatusNotificationUtils").openStatusViewer(e);
              };
            return {
              wid: e.id.remote,
              msgId: e.id.toString(),
              onClick: s,
              tag: e.id.toString(),
              doNotOpenChat: !0,
              title: r("WANullthrows")(a),
              body: l,
            };
          }),
          (a.shouldMuteDueToAppState = function (n) {
            return r("WAWebEnvironment").isWindows
              ? !1
              : e.prototype.shouldMuteDueToAppState.call(this, n);
          }),
          t
        );
      })(
        o("WAWebNotificationsBaseReactionNotification")
          .WABaseReactionNotification,
      );
    l.WAStatusReactionNotification = c;
  },
  98,
);
