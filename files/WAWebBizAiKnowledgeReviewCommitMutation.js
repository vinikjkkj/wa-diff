__d(
  "WAWebBizAiKnowledgeReviewCommitMutation",
  [
    "WAWebBizAiKnowledgeReviewCommitMutation.graphql",
    "WAWebBizAiRelayClient",
    "WAWebBoolFunc",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiKnowledgeReviewCommitMutation.graphql"));
    function u(e) {
      return o("WAWebBizAiRelayClient")
        .commitMutation(s, { ids: e })
        .then(function (e) {
          var t,
            n,
            r =
              (t =
                e == null ||
                (n = e.xfb_maiba_approve_potential_knowledge) == null
                  ? void 0
                  : n.success) != null
                ? t
                : !1;
          return r;
        })
        .catch(o("WAWebBoolFunc").returnFalse);
    }
    l.commitPendingData = u;
  },
  98,
);
