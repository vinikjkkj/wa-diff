__d(
  "WAWebContactSearchExperienceLogger",
  ["WAWebContactSearchExperienceWamEvent", "WAWebWamEnumSearchActionName"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.log = function (t) {
            var e = new (o(
              "WAWebContactSearchExperienceWamEvent",
            ).ContactSearchExperienceWamEvent)(t);
            (e.isUsernameSearch == null && (e.isUsernameSearch = !1),
              e.commit());
          }),
          (t.logKeyPromptShown = function (t) {
            this.log(
              babelHelpers.extends({}, t, {
                isUsernameSearch: !0,
                searchActionName: o("WAWebWamEnumSearchActionName")
                  .SEARCH_ACTION_NAME.VIEW_PIN_VERIFICATION,
              }),
            );
          }),
          (t.logKeyEntryErrorShown = function (t, n) {
            this.log(
              babelHelpers.extends({}, t, {
                isUsernameSearch: !0,
                searchActionName: o("WAWebWamEnumSearchActionName")
                  .SEARCH_ACTION_NAME.PIN_VERFICATION_ERROR_SHOWN,
                keyEntryErrorType: n,
              }),
            );
          }),
          e
        );
      })(),
      s = new e();
    l.ContactSearchExperienceLogger = s;
  },
  98,
);
