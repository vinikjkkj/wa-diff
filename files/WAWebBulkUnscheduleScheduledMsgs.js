__d(
  "WAWebBulkUnscheduleScheduledMsgs",
  [
    "Promise",
    "WALogger",
    "WAWebChatCollection",
    "WAWebScheduledMsgActionLogger",
    "WAWebUnscheduleMsgAction",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = o("WAWebChatCollection").ChatCollection.get(t);
          (i != null &&
            a.length > 0 &&
            o("WAWebScheduledMsgActionLogger").logScheduledMsgTapUnschedule(
              i,
              a.length,
            ),
            yield a.reduce(
              function (n, a) {
                return n.then(function () {
                  return o("WAWebUnscheduleMsgAction")
                    .unscheduleMsgAction(t, a, { shouldLogTap: !1 })
                    .catch(function (t) {
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[scheduled_msg][bulk-unschedule] failed to unschedule one message",
                            ])),
                        )
                        .catching(r("getErrorSafe")(t))
                        .sendLogs("scheduled-msg-bulk-unschedule-fail");
                    });
                });
              },
              (s || (s = n("Promise"))).resolve(),
            ));
        })),
        c.apply(this, arguments)
      );
    }
    l.bulkUnscheduleScheduledMsgs = u;
  },
  98,
);
