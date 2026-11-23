__d(
  "WAWebGroupSettingsServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebGroupSettingsService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")("WAWebGroupModifyInfoJob").__setRef(
        "WAWebGroupSettingsServiceWebLive",
      ),
      u = r("JSResourceForInteraction")(
        "WAWebMexUpdateGroupPropertyJob",
      ).__setRef("WAWebGroupSettingsServiceWebLive"),
      c = r("JSResourceForInteraction")(
        "WAWebGroupMembershipFormSaveJob",
      ).__setRef("WAWebGroupSettingsServiceWebLive"),
      d = o("WAWebGroupSettingsService").GroupSettingsService.make(
        function* () {
          var t = yield* o("WebDi.Async").fromPromise(function () {
              return (e || (e = n("Promise"))).all([
                s.load(),
                u.load(),
                c.load(),
              ]);
            }),
            r = t[0],
            a = r.setEphemeralGroupProperty,
            i = r.setGroupDescription,
            l = r.setGroupProperty,
            d = r.setGroupSubject,
            m = t[1].mexUpdateGroupPropertyJob,
            p = t[2].saveGroupMembershipFormJob,
            _ = {
              setGroupSubject: function (t, n) {
                return o("WebDi.Async").fromPromise(function () {
                  return d(t, n);
                });
              },
              setGroupDescription: function (t) {
                return o("WebDi.Async").fromPromise(function () {
                  return i(t);
                });
              },
              setGroupProperty: function (t, n, r) {
                return o("WebDi.Async").fromPromise(function () {
                  return l(t, n, r);
                });
              },
              setEphemeralGroupProperty: function (t) {
                return o("WebDi.Async").fromPromise(function () {
                  return a(t);
                });
              },
              mexUpdateGroupPropertyJob: function (t, n) {
                return o("WebDi.Async").fromPromise(function () {
                  return m(t, n);
                });
              },
              saveGroupMembershipForm: function (t, n) {
                return o("WebDi.Async").fromPromise(function () {
                  return p(t, n);
                });
              },
            };
          return _;
        },
      );
    l.GroupSettingsServiceWebLive = d;
  },
  98,
);
