__d(
  "adsAutomatedAdSpecMutation",
  [
    "adsAutomatedAdSpecMutationChangeEventListener",
    "adsAutomatedAdSpecMutationInfiniteLoopValidation",
    "adsAutomatedAdSpecMutationInteractionValidation",
    "adsAutomatedAdSpecMutationLogger",
    "adsAutomatedAdSpecMutationPublishedValidation",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e ? s(t) : t.mutationFn();
    }
    function s(e) {
      var t = e.adgroupIDs,
        n = e.campaignGroupIDs,
        a = e.campaignIDs,
        i = e.mutationFn,
        l = e.reasons,
        s = e.useCaseName;
      if (
        !(
          o(
            "adsAutomatedAdSpecMutationInfiniteLoopValidation",
          ).checkHasInfiniteLoops(s, n, a, t) &&
          (o("adsAutomatedAdSpecMutationLogger").logMutationInfiniteLoops(s),
          r("justknobx")._("3393"))
        )
      ) {
        var u = o(
            "adsAutomatedAdSpecMutationInteractionValidation",
          ).getOngoingInteraction(),
          c = !o(
            "adsAutomatedAdSpecMutationPublishedValidation",
          ).checkAllAdObjectsHaveDraft(n, a, t),
          d = o(
            "adsAutomatedAdSpecMutationChangeEventListener",
          ).startCapturingChangeEvents();
        try {
          i();
        } finally {
          var m = d() > 0;
          o("adsAutomatedAdSpecMutationLogger").logMutation(
            s,
            l,
            n,
            a,
            t,
            u,
            c,
            m,
          );
        }
      }
    }
    ((l.maybeHandleAutomatedAdSpecMutation = e),
      (l.handleAutomatedAdSpecMutation = s));
  },
  98,
);
