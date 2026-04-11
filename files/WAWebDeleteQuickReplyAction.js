__d(
  "WAWebDeleteQuickReplyAction",
  [
    "invariant",
    "WATimeUtils",
    "WAWebBizGatingUtils",
    "WAWebQuickRepliesSync",
    "WAWebQuickReplyCollection",
    "WAWebQuickReplyLogging",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WAWebBizGatingUtils").quickRepliesManagementEnabled() ||
            s(0, 73617),
            o("WAWebQuickReplyLogging").logQuickReplyDeleteEvent());
          var t = o("WATimeUtils").unixTime(),
            a = r("WAWebQuickRepliesSync").getQuickReplyDeleteMutation(e, t);
          (yield o("WAWebSyncdCoreApi").lockForSync(
            ["quick-reply"],
            [a],
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = t[0];
                  return n.remove(e);
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          ),
            o("WAWebQuickReplyCollection").QuickReplyCollection.remove(e)[0]);
        })),
        u.apply(this, arguments)
      );
    }
    l.deleteQuickReplyAction = e;
  },
  98,
);
