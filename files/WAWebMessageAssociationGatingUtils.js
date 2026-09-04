__d(
  "WAWebMessageAssociationGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "message_association_infra_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "futureproof_associated_child_enabled",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_wrap_associated_child_message_enabled",
      );
    }
    ((l.isMessageAssociationInfraEnabled = e),
      (l.isFutureproofAssociatedChildEnabled = s),
      (l.shouldWrapAssociatedChildOnSend = u));
  },
  98,
);
