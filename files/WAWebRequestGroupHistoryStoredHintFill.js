__d(
  "WAWebRequestGroupHistoryStoredHintFill",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebGroupHistoryStoredHint",
    "WAWebGroupHistoryStoredHintGating",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebRefreshGroupHistoryStoredHintJob",
      ).__setRef("WAWebRequestGroupHistoryStoredHintFill");
    async function u(e) {
      var t = e.filter(function (e) {
        return (
          e.groupHistoryLastCountedMessageTimestamp == null &&
          o("WAWebGroupHistoryStoredHint").isGroupHistoryStoredHintEvent({
            id: e.id,
            type: e.type,
            subtype: e.subtype,
            recipients: e.recipients,
            templateParams: e.templateParams,
          })
        );
      });
      t.length === 0 ||
        !o(
          "WAWebGroupHistoryStoredHintGating",
        ).isGroupHistoryStoredHintEnabled() ||
        (await Promise.all(
          t.map(function (e) {
            return c(e.id);
          }),
        ));
    }
    async function c(t) {
      try {
        var n = await s.load(),
          a = n.fillGroupHistoryStoredHint;
        await a(t);
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "group history stored hint fill request failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("group-history-stored-hint-fill-request-failed");
      }
    }
    l.requestGroupHistoryStoredHintFills = u;
  },
  98,
);
