__d(
  "WAWebSendQuickReplyAddOrEditMutation",
  [
    "invariant",
    "WATimeUtils",
    "WAWebQuickRepliesSync",
    "WAWebQuickReplyGatingUtils",
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
          var t = e.count,
            a = e.id,
            i = e.keywords,
            l = e.message,
            u = e.shortcut;
          o("WAWebQuickReplyGatingUtils").quickRepliesManagementEnabled() ||
            s(0, 73617);
          var c = o("WATimeUtils").unixTime(),
            d = r("WAWebQuickRepliesSync").getQuickReplyAddOrEditMutation({
              count: t,
              id: a,
              keywords: i,
              message: l,
              shortcut: u,
              timestamp: c,
            });
          yield o("WAWebSyncdCoreApi").lockForSync(
            ["quick-reply"],
            [d],
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var n = e[0];
                  return n.createOrMerge(a, {
                    id: a,
                    shortcut: u,
                    message: l,
                    count: t,
                    keywords: i,
                    ts: c,
                  });
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.sendQuickReplyAddOrEditMutation = e;
  },
  98,
);
