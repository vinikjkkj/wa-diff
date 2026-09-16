__d(
  "WAWebBotComposerSupport",
  ["$InternalEnum", "WAWebBotSupportState"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
      "COMPOSE",
      "UPGRADE",
      "DEPRECATED",
      "DELETED",
    ]);
    function s(t) {
      var n = t.input,
        r = t.isProductGateOn,
        a = o("WAWebBotSupportState").evaluateBotSupport(n, r);
      return a.kind === o("WAWebBotSupportState").BotSupportStateKind.UNRESOLVED
        ? e.DEPRECATED
        : a.kind === o("WAWebBotSupportState").BotSupportStateKind.SUPPORTED
          ? e.COMPOSE
          : a.kind === o("WAWebBotSupportState").BotSupportStateKind.UNSUPPORTED
            ? e.UPGRADE
            : a.kind ===
                o("WAWebBotSupportState").BotSupportStateKind.DEPRECATED
              ? e.DEPRECATED
              : a.kind === o("WAWebBotSupportState").BotSupportStateKind.DELETED
                ? o("WAWebBotSupportState").hasCustomDeletedTombstone(a)
                  ? e.DELETED
                  : e.DEPRECATED
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        a.kind,
                    );
                  })();
    }
    ((l.BotComposerTreatment = e), (l.getBotComposerTreatment = s));
  },
  98,
);
