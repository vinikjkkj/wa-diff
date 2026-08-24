__d(
  "WAWebBulkUnscheduleScheduledMsgs",
  [
    "Promise",
    "WALogger",
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
          yield a.reduce(
            function (n, a) {
              return n.then(function () {
                return o("WAWebUnscheduleMsgAction")
                  .unscheduleMsgAction(t, a)
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
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.bulkUnscheduleScheduledMsgs = u;
  },
  98,
);
