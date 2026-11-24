__d(
  "WAWebGroupSettingsServiceWebLive",
  [
    "JSResourceForInteraction",
    "WAWebGroupModifyInfoJob",
    "WAWebGroupSettingsService",
    "WAWebMexUpdateGroupPropertyJob",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
        "WAWebGroupMembershipFormSaveJob",
      ).__setRef("WAWebGroupSettingsServiceWebLive"),
      s = o("WAWebGroupSettingsService").GroupSettingsService.make(
        function* () {
          var t = {
            setGroupSubject: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return o("WAWebGroupModifyInfoJob").setGroupSubject(t, n);
              });
            },
            setGroupDescription: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return o("WAWebGroupModifyInfoJob").setGroupDescription(t);
              });
            },
            setGroupProperty: function (t, n, r) {
              return o("WebDi.Async").fromPromise(function () {
                return o("WAWebGroupModifyInfoJob").setGroupProperty(t, n, r);
              });
            },
            setEphemeralGroupProperty: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return o("WAWebGroupModifyInfoJob").setEphemeralGroupProperty(
                  t,
                );
              });
            },
            mexUpdateGroupPropertyJob: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return o(
                  "WAWebMexUpdateGroupPropertyJob",
                ).mexUpdateGroupPropertyJob(t, n);
              });
            },
            saveGroupMembershipForm: function (n, r) {
              return o("WebDi.Async").fromPromise(function () {
                return e.load().then(function (e) {
                  var t = e.saveGroupMembershipFormJob;
                  return t(n, r);
                });
              });
            },
          };
          return t;
        },
      );
    l.GroupSettingsServiceWebLive = s;
  },
  98,
);
