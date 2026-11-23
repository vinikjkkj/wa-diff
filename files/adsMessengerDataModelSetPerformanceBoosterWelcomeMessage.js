__d(
  "adsMessengerDataModelSetPerformanceBoosterWelcomeMessage",
  [
    "AdsMessengerPageWelcomeMessageDataManager",
    "AdsUEditorHostIDs",
    "getPerformanceBoosterWelcomeMessageWithIcebreakers",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, i, l) {
      var s = r("getPerformanceBoosterWelcomeMessageWithIcebreakers")(e, t, n),
        u = s.didSwitchToIcebreakers,
        c = s.json;
      return (
        u &&
          r("AdsMessengerPageWelcomeMessageDataManager").createCustomTemplate(
            o,
            String(n),
            JSON.stringify(c),
            a,
            r("AdsUEditorHostIDs").EDITING,
            i,
            !0,
            l,
          ),
        r("setByPath")(c, ["is_user_editing"], !1),
        c
      );
    }
    l.default = e;
  },
  98,
);
