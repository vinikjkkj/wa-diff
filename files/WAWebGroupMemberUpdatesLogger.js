__d(
  "WAWebGroupMemberUpdatesLogger",
  [
    "WAWebGroupMemberUpdatesWamEvent",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWamEnumGroupMemberUpdatesCurrentScreen",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {
          this.$1 = r("WAWebPonyfillsCryptoRandomUUID")();
        }
        var t = e.prototype;
        return (
          (t.startSession = function () {
            this.$1 = r("WAWebPonyfillsCryptoRandomUUID")();
          }),
          (t.log = function (t) {
            var e = new (o(
              "WAWebGroupMemberUpdatesWamEvent",
            ).GroupMemberUpdatesWamEvent)(t);
            ((e.groupMemberUpdatesSessionId = this.$1), e.commit());
          }),
          (t.logOnMemberUpdatesScreen = function (t, n, r) {
            this.log({
              groupMemberUpdatesActionName: t,
              groupMemberUpdatesCurrentScreen: o(
                "WAWebWamEnumGroupMemberUpdatesCurrentScreen",
              ).GROUP_MEMBER_UPDATES_CURRENT_SCREEN.GROUP_MEMBER_UPDATES_SCREEN,
              fetchedMessageCount: n,
              fetchedMessageLatency: r,
            });
          }),
          (t.logOnContactInfoScreen = function (t) {
            this.log({
              groupMemberUpdatesActionName: t,
              groupMemberUpdatesCurrentScreen: o(
                "WAWebWamEnumGroupMemberUpdatesCurrentScreen",
              ).GROUP_MEMBER_UPDATES_CURRENT_SCREEN.GROUP_MEMBER_CONTACT_INFO,
            });
          }),
          e
        );
      })(),
      s = new e();
    l.GroupMemberUpdatesLogger = s;
  },
  98,
);
