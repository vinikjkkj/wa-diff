__d(
  "WAWebNotificationsNewsletterRoleChangeNotification",
  [
    "fbt",
    "WAWebBaseNotification",
    "WAWebChatFlowTypes",
    "WAWebContactCollection",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebParticipantListUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFormat",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this) || this),
            (n.mode = t.mode),
            (n.admin = t.admin),
            (n.user = t.user),
            (n.chat = t.chat),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.shouldPlaySound = function () {
            return e.prototype.shouldPlaySound.call(this)
              ? o("WAWebNotificationHelpers").shouldPlaySoundGranular(this.chat)
              : !1;
          }),
          (n.shouldShowBanner = function () {
            return e.prototype.shouldShowBanner.call(this)
              ? o("WAWebNotificationHelpers").shouldEnableNotificationGranular(
                  this.chat,
                )
              : !1;
          }),
          (n.buildKey = function () {
            return (
              "newsladmin:" +
              this.chat.id.toString() +
              ":" +
              this.mode +
              ":" +
              this.user.toString()
            );
          }),
          (n.getBannerOptions = function () {
            var e = this.getNotificationUser(),
              t = o("WAWebUserPrefsMeUser").isMeAccount(this.user);
            return {
              wid: this.chat.id,
              title: this.chat.name,
              body: u[this.mode](e, t).toString(),
            };
          }),
          (n.getNotificationUser = function () {
            var e = this.mode === "ownership" ? this.admin : this.user;
            if (e == null) return null;
            var t = o("WAWebContactCollection").ContactCollection.get(e);
            return t != null
              ? o("WAWebParticipantListUtils").getFirstNameForContact(t)
              : o("WAWebWidFormat").widToFormattedUser(this.user);
          }),
          (n.getIcon = async function () {
            return o("WAWebNotificationIconUtils").getChatNotificationIcon(
              this.chat,
              this.abortController.signal,
            );
          }),
          (n.matchesChat = function (t) {
            return this.chat.equals(t);
          }),
          (n.getChatKind = function () {
            return o("WAWebChatFlowTypes").ChatKindType.Newsletter;
          }),
          t
        );
      })(o("WAWebBaseNotification").WABaseNotification),
      u = {
        promote: function (t, n) {
          return n
            ? s._(/*BTDS*/ "You are now an admin.")
            : s._(/*BTDS*/ "{who} is now an admin.", [s._param("who", t)]);
        },
        demote: function (t, n) {
          return n
            ? s._(/*BTDS*/ "You are no longer an admin.")
            : s._(/*BTDS*/ "{who} is no longer an admin.", [
                s._param("who", t),
              ]);
        },
        ownership: function (t) {
          return t == null
            ? s._(/*BTDS*/ "You are now the channel owner.")
            : s._(/*BTDS*/ "{who} made you the channel owner.", [
                s._param("who", t),
              ]);
        },
      };
    l.WANewsletterRoleChangeNotification = e;
  },
  226,
);
