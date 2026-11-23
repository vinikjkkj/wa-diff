__d(
  "WAWebBulkChatAction",
  [
    "WALogger",
    "WAPromiseEach",
    "WAWebActionToast.react",
    "WAWebToastManager",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react"));
    async function d(t, n) {
      var a = n.failureToast,
        i = n.itemFailedLogTag,
        l = n.operation,
        u = n.partialFailureLogTag,
        c = n.successToast,
        d = Array.from(new Set(t)),
        p = await o("WAPromiseEach").promiseEach(d, async function (t) {
          try {
            var n = await l(t);
            return { chat: t, success: n, error: null };
          } catch (n) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Bulk chat action threw for one chat",
                    ])),
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs(i),
              { chat: t, success: !1, error: n }
            );
          }
        }),
        _ = [],
        f = [];
      return (
        p.forEach(function (e) {
          e.success ? _.push(e.chat) : f.push({ chat: e.chat, error: e.error });
        }),
        _.length > 0 && m(c(_.length)),
        f.length > 0 &&
          (m(a(f.length)),
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Bulk chat action failed for ",
                  " out of ",
                  " chats",
                ])),
              f.length,
              d.length,
            )
            .sendLogs(u)),
        { successes: _, failures: f }
      );
    }
    function m(e) {
      var t = new (o("WAWebActionToast.react").ActionType)(e);
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: t,
          pendingAction: Promise.resolve(t),
        }),
      );
    }
    l.runBulkChatAction = d;
  },
  98,
);
