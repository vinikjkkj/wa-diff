__d(
  "WAWebGetDsbInfoAction",
  ["WALogger", "WAWebGetDsbInfoJob"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      try {
        var n = await o("WAWebGetDsbInfoJob").getDsbInfo(t);
        return n;
      } catch (t) {
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[DSAR][getDsbInfoAction] DSB ref fetch failed",
                ])),
            )
            .tags("newsletter", "wa-ice", "DSAR")
            .sendLogs("newsletter-get-dsb-info-action"),
          t
        );
      }
    }
    l.getDsbInfoAction = s;
  },
  98,
);
