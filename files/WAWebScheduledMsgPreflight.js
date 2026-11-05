__d(
  "WAWebScheduledMsgPreflight",
  [
    "fbt",
    "WALogger",
    "WAWebScheduledMsgLimitDialog.react",
    "WAWebScheduledMsgStore",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "once",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          a === void 0 && (a = !0);
          var i;
          try {
            i = yield o("WAWebScheduledMsgStore").isChatAtScheduleLimit(t);
          } catch (t) {
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] Failed to check the scheduled message count before sending",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("scheduled-msg-preflight-count-fail"),
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  action:
                    n == null || !a
                      ? null
                      : {
                          actionText: s._(/*BTDS*/ "Retry"),
                          onAction: r("once")(n),
                          testid: "scheduled-msg-preflight-retry",
                        },
                  msg: s._(/*BTDS*/ "Failed to schedule a message"),
                }),
              ),
              t
            );
          }
          return i
            ? (o(
                "WAWebScheduledMsgLimitDialog.react",
              ).showScheduledMsgLimitReachedDialog(),
              !1)
            : !0;
        })),
        m.apply(this, arguments)
      );
    }
    l.canScheduleMessage = d;
  },
  226,
);
