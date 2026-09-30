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
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (
            (n === void 0 && (n = []),
            !!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled())
          ) {
            var r = t.filter(function (e) {
              return e.isFbidBot();
            });
            if (!(r.length === 0 && n.length === 0)) {
              var a = yield e.load(),
                i = a.maybeQueryGroupAgentRosters,
                l = a.maybeSyncGroupBotSupportFields;
              (l(r), i(n));
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
