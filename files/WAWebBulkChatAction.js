__d(
  "WAWebBulkChatAction",
  [
    "Promise",
    "WALogger",
    "WAPromiseEach",
    "WAWebActionToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react"));
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = a.failureToast,
            l = a.itemFailedLogTag,
            u = a.operation,
            c = a.partialFailureLogTag,
            d = a.successToast,
            m = Array.from(new Set(t)),
            p = yield o("WAPromiseEach").promiseEach(
              m,
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    try {
                      var n = yield u(t);
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
                          .sendLogs(l),
                        { chat: t, success: !1, error: n }
                      );
                    }
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
            f = [],
            g = [];
          return (
            p.forEach(function (e) {
              e.success
                ? f.push(e.chat)
                : g.push({ chat: e.chat, error: e.error });
            }),
            f.length > 0 && _(d(f.length)),
            g.length > 0 &&
              (_(i(g.length)),
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Bulk chat action failed for ",
                      " out of ",
                      " chats",
                    ])),
                  g.length,
                  m.length,
                )
                .sendLogs(c)),
            { successes: f, failures: g }
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = new (o("WAWebActionToast.react").ActionType)(e);
      o("WAWebToastManager").ToastManager.open(
        d.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: t,
          pendingAction: (u || (u = n("Promise"))).resolve(t),
        }),
      );
    }
    l.runBulkChatAction = m;
  },
  98,
);
