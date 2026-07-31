__d(
  "WAWebBizAiHandoffRemovalTimingUpdateMutation",
  [
    "WAWebBizAiHandoffRemovalTimingUpdateMutation.graphql",
    "XFBMetaAIBizAgentWAHandoffListRemovalTiming.facebook",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiHandoffRemovalTimingUpdateMutation.graphql"));
    function u(e) {
      return r("XFBMetaAIBizAgentWAHandoffListRemovalTiming.facebook").cast(e);
    }
    function c(e, t) {
      var n = e.getRoot(),
        r = n.getLinkedRecord(
          "xfb_meta_ai_biz_agent_wa_handoff_removal_timing",
        );
      (r == null &&
        ((r = e.create(
          "client:xfb_meta_ai_biz_agent_wa_handoff_removal_timing",
          "XFBMetaAIBizAgentWAHandoffRemovalTiming",
        )),
        n.setLinkedRecord(
          r,
          "xfb_meta_ai_biz_agent_wa_handoff_removal_timing",
        )),
        r.setValue(t, "timing"));
    }
    ((l.MUTATION = s),
      (l.castHandoffRemovalTiming = u),
      (l.writeHandoffTimingToStore = c));
  },
  98,
);
