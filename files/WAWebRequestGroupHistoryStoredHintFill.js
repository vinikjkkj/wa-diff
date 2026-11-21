__d(
  "WAWebRequestGroupHistoryStoredHintFill",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebGroupHistoryStoredHint",
    "WAWebGroupHistoryStoredHintGating",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("JSResourceForInteraction")(
        "WAWebRefreshGroupHistoryStoredHintJob",
      ).__setRef("WAWebRequestGroupHistoryStoredHintFill");
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            (yield (s || (s = n("Promise"))).all(
              t.map(function (e) {
                return m(e.id);
              }),
            ));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield u.load(),
              a = n.fillGroupHistoryStoredHint;
            yield a(t);
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
        })),
        p.apply(this, arguments)
      );
    }
    l.requestGroupHistoryStoredHintFills = c;
  },
  98,
);
