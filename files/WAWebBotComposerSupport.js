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
        r = t.isFeatureEnabled,
        a = t.isProductGateOn;
      if (!r) return e.COMPOSE;
      var i = o("WAWebBotSupportState").evaluateBotSupport(n, a);
      return i.kind === o("WAWebBotSupportState").BotSupportStateKind.UNRESOLVED
        ? e.DEPRECATED
        : i.kind === o("WAWebBotSupportState").BotSupportStateKind.SUPPORTED
          ? e.COMPOSE
          : i.kind === o("WAWebBotSupportState").BotSupportStateKind.UNSUPPORTED
            ? e.UPGRADE
            : i.kind ===
                o("WAWebBotSupportState").BotSupportStateKind.DEPRECATED
              ? e.DEPRECATED
              : i.kind === o("WAWebBotSupportState").BotSupportStateKind.DELETED
                ? o("WAWebBotSupportState").hasCustomDeletedTombstone(i)
                  ? e.DELETED
                  : e.DEPRECATED
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        i.kind,
                    );
                  })();
    }
    ((l.BotComposerTreatment = e), (l.getBotComposerTreatment = s));
  },
  98,
);
