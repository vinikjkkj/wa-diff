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
    ((l.isMessageAssociationInfraEnabled = e),
      (l.isFutureproofAssociatedChildEnabled = s));
  },
  98,
);
