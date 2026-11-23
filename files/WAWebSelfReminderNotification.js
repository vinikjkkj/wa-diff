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
      var n = t.prototype;
      return (
        (n.buildKey = function () {
          return (
            "self-reminder:" + this.$WASelfReminderNotification$p_2.toString()
          );
        }),
        (n.getChatKind = function () {
          return null;
        }),
        (n.matchesChat = function (t) {
          return t.id.equals(this.$WASelfReminderNotification$p_1.id);
        }),
        (n.getIcon = async function () {
          return o("WAWebNotificationIconUtils").WHATSAPP_DEFAULT_ICON;
        }),
        (n.getBannerOptions = function () {
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
              : s._(/*BTDS*/ "").toString(),
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
        ? s._(/*BTDS*/ "", [s._param("chat name", e.title())]).toString()
        : s._(/*BTDS*/ "").toString();
    }
    ((l.WASelfReminderNotification = e), (l.canShowReminderContent = u));
  },
  226,
);
