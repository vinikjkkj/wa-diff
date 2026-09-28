__d(
  "WAWebSyncGroupBotSupportFields",
  [
    "JSResourceForInteraction",
    "WAWebBotGroupGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
      "WAWebMaybeSyncBotSupportFields",
    ).__setRef("WAWebSyncGroupBotSupportFields");
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
          ) {
            var n = t.filter(function (e) {
              return e.isFbidBot();
            });
            if (n.length !== 0) {
              var r = yield e.load(),
                a = r.maybeSyncGroupBotSupportFields;
              a(n);
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.maybeLazySyncGroupBotSupportFields = s;
  },
  98,
);
