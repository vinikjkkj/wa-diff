__d(
  "WAWebHandleBrigadingUpdateNotification",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsIndexedDBStorage",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(t, n) {
      var a,
        i = (a = n.xwa2_notify_brigading) == null ? void 0 : a.state;
      if (i == null)
        throw r("err")(
          "[mex][notification][handleBrigadingNotification] state is null",
        );
      try {
        switch (i) {
          case "ENFORCED":
          case "NOT_ENFORCED":
          case "DETECTED": {
            (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              "WABrigadingState",
              i,
            ),
              c(i));
            break;
          }
          case "NOT_DETECTED":
            (await o("WAWebUserPrefsGeneral").clearBrigadingstate(), c(null));
            break;
          default:
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[mex][brigading] unhandled state: ",
                  "",
                ])),
              i,
            );
        }
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "setWABrigadingState: failed to set to indexedDB, state: ",
                "",
              ])),
            i,
          )
          .sendLogs("setWABrigadingState-failed");
      }
    }
    function c(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "triggerBrigadingStateChangeFromBridge",
        { newState: e },
      );
    }
    l.mexHandleBrigadingNotification = u;
  },
  98,
);
