__d(
  "WAWebChatThemeWrites",
  ["WALogger", "WAWebDbErrors", "WAWebSettingsSyncBridge", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n, a) {
      (a === void 0 && (a = "app"),
        o("WAWebSettingsSyncBridge")
          .sendSettingChange(t, n, a)
          .catch(function (n) {
            n instanceof o("WAWebDbErrors").DbOnLogoutAbort ||
              n instanceof o("WAWebDbErrors").DbClosedOnTakeover ||
              n instanceof o("WAWebDbErrors").DbNotFoundOnTakeover ||
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[chat-theme] ",
                      " sync failed",
                    ])),
                  t,
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("chat-theme-setting-sync-fail");
          }));
    }
    function c(e) {
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[chat-theme] model write failed",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .tags("chat-theme");
    }
    ((l.syncChatThemeSetting = u), (l.settleChatThemeModelWrite = c));
  },
  98,
);
