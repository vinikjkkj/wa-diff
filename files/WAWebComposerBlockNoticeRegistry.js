__d(
  "WAWebComposerBlockNoticeRegistry",
  [
    "WALogger",
    "WAWebComposerBlockNoticePluginGetNoticeRegistry",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      for (var n of r("WAWebComposerBlockNoticePluginGetNoticeRegistry"))
        try {
          var a = n(t);
          if (a != null) return a;
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "composer block notice provider failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("composer-block-notice-provider-failed");
        }
      return null;
    }
    l.getComposerEarlyBlockNotice = s;
  },
  98,
);
