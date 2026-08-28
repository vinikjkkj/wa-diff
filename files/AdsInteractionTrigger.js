__d(
  "AdsInteractionTrigger",
  ["AdsInteractionTriggerEvent", "MainPageUrl", "SimpleHook"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e.event === r("AdsInteractionTriggerEvent").CODE &&
        e.callsite != null &&
        e.interactionID != null &&
        e.realStartTime != null
      );
    }
    var s = new (o("SimpleHook").SimpleHook)(),
      u = new (o("SimpleHook").SimpleHook)();
    function c(e, t) {
      var n,
        r = babelHelpers.extends({}, e.triggerContext, t.triggerContext);
      return babelHelpers.extends({}, t, {
        key: e.key,
        interaction: e.interaction,
        startTime: e.startTime,
        url: (n = t.url) != null ? n : e.url,
        triggerContext: r,
      });
    }
    var d = null;
    function m() {
      if (d === null) {
        var e;
        d =
          ((e = o("MainPageUrl").mainPageUrl.searchParams) == null
            ? void 0
            : e.get("itdebug")) === "1";
      }
      return d;
    }
    ((l.isCodeInteractionStartInfo = e),
      (l.onInteractionStart = s),
      (l.onInteractionEnd = u),
      (l.mergeInteractionStartInfo = c),
      (l.isDebugEnabled = m));
  },
  98,
);
