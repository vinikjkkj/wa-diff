__d(
  "WAWebUsernameCreationActionLogger",
  [
    "WATimeUtils",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUsernameCreationActionWamEvent",
    "WAWebWamEnumUsernameCreationActionName",
    "WAWebWamEnumUsernameCreationEntrypoint",
    "WAWebWamEnumUsernameSource",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {
          this.$1 = r("WAWebPonyfillsCryptoRandomUUID")();
        }
        var t = e.prototype;
        return (
          (t.log = function (t) {
            var e = t.errorCode,
              n = t.usernameCreationActionName,
              r = t.usernameCreationCurrentScreen,
              a = t.usernameCreationFlowType,
              i = t.usernameSource,
              l =
                i === void 0
                  ? o("WAWebWamEnumUsernameSource").USERNAME_SOURCE.USER_INPUT
                  : i,
              s = new (o(
                "WAWebUsernameCreationActionWamEvent",
              ).UsernameCreationActionWamEvent)({
                userJourneyEventMs: o("WATimeUtils").unixTimeMs(),
                usernameCreationUsernameSessionId: this.$1,
                usernameCreationActionName: n,
                usernameCreationCurrentScreen: r,
                usernameCreationErrorCd: e != null ? e : 0,
                usernameCreationEntrypoint: o(
                  "WAWebWamEnumUsernameCreationEntrypoint",
                ).USERNAME_CREATION_ENTRYPOINT.PROFILE_SETTING,
                usernameCreationFlowType: a,
                usernameSource: l,
              });
            s.commit();
          }),
          (t.logBackClicked = function (t, n) {
            var e = new (o(
              "WAWebUsernameCreationActionWamEvent",
            ).UsernameCreationActionWamEvent)({
              userJourneyEventMs: o("WATimeUtils").unixTimeMs(),
              usernameCreationUsernameSessionId: this.$1,
              usernameCreationCurrentScreen: t,
              usernameCreationActionName: o(
                "WAWebWamEnumUsernameCreationActionName",
              ).USERNAME_CREATION_ACTION_NAME.CLICK_BACK_BUTTON,
              usernameCreationErrorCd: 0,
              usernameCreationEntrypoint: o(
                "WAWebWamEnumUsernameCreationEntrypoint",
              ).USERNAME_CREATION_ENTRYPOINT.PROFILE_SETTING,
              usernameCreationFlowType: n,
              usernameSource: o("WAWebWamEnumUsernameSource").USERNAME_SOURCE
                .USER_INPUT,
            });
            e.commit();
          }),
          (t.resetSessionId = function () {
            this.$1 = r("WAWebPonyfillsCryptoRandomUUID")();
          }),
          (t.getSessionId = function () {
            return this.$1;
          }),
          e
        );
      })(),
      s = new e();
    l.UsernameCreationActionLogger = s;
  },
  98,
);
