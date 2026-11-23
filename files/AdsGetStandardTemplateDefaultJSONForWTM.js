__d(
  "AdsGetStandardTemplateDefaultJSONForWTM",
  [
    "AdsGetStandardTemplateDefaultJSONWithDestination",
    "AdsMessengerVisualEditorUtils",
    "CTXChatBuilderFeatureGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      return o("CTXChatBuilderFeatureGating").enableWTMNudge(
        "messenger",
        null,
        t,
        !1,
      )
        ? r("AdsGetStandardTemplateDefaultJSONWithDestination")(
            e,
            null,
            t,
            n,
            a,
            "messenger",
          )
        : o("AdsMessengerVisualEditorUtils").getStandardTemplateDefaultJSON(
            e,
            null,
            n,
            a,
            "messenger",
            t,
          );
    }
    l.default = e;
  },
  98,
);
