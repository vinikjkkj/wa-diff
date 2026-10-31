__d(
  "WAWebAiModeSelectorUtils",
  [
    "fbt",
    "WAWebBotModeSelectionTypes",
    "WAWebDynamicAIModesCache",
    "WAWebMetaAiRingAssetResolver",
    "WDSIconIcBolt.react",
    "WDSIconIcShoppingBag.react",
    "WDSIconWdsIcMetaAiReasoning.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e ===
        o("WAWebBotModeSelectionTypes").BotUserSelectionMode.ThinkHard
        ? s._(/*BTDS*/ "Thinking")
        : e === o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default ||
            e === null ||
            e === void 0
          ? s._(/*BTDS*/ "Fast")
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function u(e) {
      return e ===
        o("WAWebBotModeSelectionTypes").BotUserSelectionMode.ThinkHard
        ? s._(/*BTDS*/ "Thinks longer for in-depth responses")
        : e === o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default ||
            e === null ||
            e === void 0
          ? s._(/*BTDS*/ "Answers right away")
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function c(e) {
      return (function (e) {
        if (e === "THINKING") return r("WDSIconWdsIcMetaAiReasoning.react");
        if (e === "SHOPPING") return r("WDSIconIcShoppingBag.react");
        if (e === "FAST") return r("WDSIconIcBolt.react");
        {
          var t = e;
          return o("WAWebMetaAiRingAssetResolver").getMetaAiRingIcon();
        }
      })(e);
    }
    function d() {
      var t = o("WAWebDynamicAIModesCache").getDefaultDynamicAIMode();
      return { icon: c(t.type), title: String(e()), subtitle: String(u()) };
    }
    ((l.getBotUserSelectModeTitle = e),
      (l.getBotUserSelectModeSubtitle = u),
      (l.getDynamicModeIcon = c),
      (l.getDefaultDynamicResolvedBotMode = d));
  },
  226,
);
