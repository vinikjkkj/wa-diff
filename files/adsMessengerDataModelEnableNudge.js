__d(
  "adsMessengerDataModelEnableNudge",
  [
    "AdsMessengerConstants",
    "adsMessengerDataModelClone",
    "getByPath",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("adsMessengerDataModelClone")(e);
      return (
        r("getByPath")(t, ["auto_follow_up", "text"]) == null &&
          r("setByPath")(
            t,
            ["auto_follow_up", "text"],
            String(o("AdsMessengerConstants").DEFAULT_INITIAL_NUDGE_MESSAGE),
          ),
        (t.auto_follow_up_disabled = !1),
        t
      );
    }
    l.default = e;
  },
  98,
);
