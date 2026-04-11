__d(
  "WAWebSendQuickReplyAddOrEditMutation",
  [
    "invariant",
    "WATimeUtils",
    "WAWebBizGatingUtils",
    "WAWebQuickRepliesSync",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n, r, o) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            o("WAWebBizGatingUtils").quickRepliesManagementEnabled() ||
              s(0, 73617);
            var u = o("WATimeUtils").unixTime(),
              c = r("WAWebQuickRepliesSync").getQuickReplyAddOrEditMutation(
                e,
                t,
                a,
                i,
                l,
                u,
              );
            yield o("WAWebSyncdCoreApi").lockForSync(
              ["quick-reply"],
              [c],
              (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    var r = n[0];
                    return r.createOrMerge(e, {
                      id: e,
                      shortcut: t,
                      message: a,
                      count: i,
                      keywords: l,
                      ts: u,
                    });
                  },
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })(),
            );
          },
        )),
        u.apply(this, arguments)
      );
    }
    l.sendQuickReplyAddOrEditMutation = e;
  },
  98,
);
