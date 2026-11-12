__d(
  "WAWebSelfReminderNotification",
  [
    "fbt",
    "WAWebBaseNotification",
    "WAWebMuteCollection",
    "WAWebNotificationIconUtils",
    "WAWebScheduleSelfReminderAction",
    "WAWebSlashCommandsUsageLogger",
    "WAWebUserUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t(t) {
        var n,
          r = t.chat,
          o = t.msgKey,
          a = t.text;
        return (
          (n = e.call(this) || this),
          (n.$WASelfReminderNotification$p_1 = r),
          (n.$WASelfReminderNotification$p_2 = o),
          (n.$WASelfReminderNotification$p_3 = a),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var r = t.prototype;
      return (
        (r.buildKey = function () {
          return (
            "self-reminder:" + this.$WASelfReminderNotification$p_2.toString()
          );
        }),
        (r.getChatKind = function () {
          return null;
        }),
        (r.matchesChat = function (t) {
          return t.id.equals(this.$WASelfReminderNotification$p_1.id);
        }),
        (r.getIcon = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebNotificationIconUtils").WHATSAPP_DEFAULT_ICON;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (r.getBannerOptions = function () {
          var e = this;
          return {
            wid: this.$WASelfReminderNotification$p_1.id,
            msgId: this.$WASelfReminderNotification$p_2.toString(),
            alwaysHighlightMsg: !0,
            title: c(
              this.$WASelfReminderNotification$p_1,
              u(this.$WASelfReminderNotification$p_1),
            ),
            body: u(this.$WASelfReminderNotification$p_1)
              ? o("WAWebScheduleSelfReminderAction").withoutReminderPrefix(
                  this.$WASelfReminderNotification$p_3,
                )
              : s._(/*BTDS*/ "You have a reminder").toString(),
            requireInteraction: !0,
            onClick: function () {
              return o("WAWebSlashCommandsUsageLogger").logReminderUsage(
                "reminder_open",
                e.$WASelfReminderNotification$p_1,
              );
            },
          };
        }),
        t
      );
    })(o("WAWebBaseNotification").WABaseNotification);
    function u(e) {
      return (
        o("WAWebMuteCollection").MuteCollection.getGlobalPreviews() &&
        e.isLocked !== !0
      );
    }
    function c(e, t) {
      return t && !o("WAWebUserUtils").isMeAccount(e.id)
        ? s
            ._(/*BTDS*/ "Reminder \u00b7 {chat name}", [
              s._param("chat name", e.title()),
            ])
            .toString()
        : s._(/*BTDS*/ "Reminder").toString();
    }
    ((l.WASelfReminderNotification = e), (l.canShowReminderContent = u));
  },
  226,
);
