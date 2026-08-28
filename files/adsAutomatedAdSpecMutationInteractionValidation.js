__d(
  "adsAutomatedAdSpecMutationInteractionValidation",
  ["AdsPerfInteractionsController"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t = r("AdsPerfInteractionsController").getAllOngoingInteraction(),
        n =
          (e = t.get("am.editor")) != null
            ? e
            : t.get("am.editor.crepe_package");
      return n == null ? void 0 : n.interaction;
    }
    l.getOngoingInteraction = e;
  },
  98,
);
