__d(
  "WAWebBulkUnscheduleScheduledMsgs",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebScheduledMsgActionLogger",
    "WAWebUnscheduleMsgAction",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t, n) {
      var a = o("WAWebChatCollection").ChatCollection.get(t);
      (a != null &&
        n.length > 0 &&
        o("WAWebScheduledMsgActionLogger").logScheduledMsgTapUnschedule(
          a,
          n.length,
        ),
        await n.reduce(function (n, a) {
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
        }, Promise.resolve()));
    }
    l.bulkUnscheduleScheduledMsgs = s;
  },
  98,
);
