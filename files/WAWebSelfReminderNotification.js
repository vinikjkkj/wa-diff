__d(
  "WAWebSelfReminderNotification",
  [
    "fbt",
    "WAWebBaseNotification",
    "WAWebMuteCollection",
    "WAWebNotificationIconUtils",
    "WAWebScheduleSelfReminderAction",
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
          return {
            wid: this.$WASelfReminderNotification$p_1.id,
            msgId: this.$WASelfReminderNotification$p_2.toString(),
            alwaysHighlightMsg: !0,
            title: s._(/*BTDS*/ "Reminder").toString(),
            body:
              o("WAWebMuteCollection").MuteCollection.getGlobalPreviews() &&
              this.$WASelfReminderNotification$p_1.isLocked !== !0
                ? u(this.$WASelfReminderNotification$p_3)
                : s._(/*BTDS*/ "You have a reminder").toString(),
            requireInteraction: !0,
          };
        }),
        t
      );
    })(o("WAWebBaseNotification").WABaseNotification);
    function u(e) {
      var t = o("WAWebScheduleSelfReminderAction")
        .buildSelfReminderText("")
        .trim();
      return e.startsWith(t) ? e.slice(t.length).trimStart() : e;
    }
    l.WASelfReminderNotification = e;
  },
  226,
);
