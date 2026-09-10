__d(
  "WAWebMessageAssociationGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "futureproof_associated_child_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_wrap_associated_child_message_enabled",
      );
    }
    ((l.isFutureproofAssociatedChildEnabled = e),
      (l.shouldWrapAssociatedChildOnSend = s));
  },
  98,
);
