__d(
  "WAWebBizAiKnowledgeReviewDeleteMutation",
  [
    "WAWebBizAiKnowledgeReviewDeleteMutation.graphql",
    "WAWebBoolFunc",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiKnowledgeReviewDeleteMutation.graphql"));
    function u(e) {
      return o("WAWebRelayClient")
        .commitMutation(s, { id: e }, { environmentType: "facebook" })
        .then(function (e) {
          var t,
            n,
            r =
              (t =
                e == null ||
                (n = e.xfb_maiba_delete_potential_knowledge_mutation) == null
                  ? void 0
                  : n.success) != null
                ? t
                : !1;
          return r;
        })
        .catch(o("WAWebBoolFunc").returnFalse);
    }
    l.deletePendingData = u;
  },
  98,
);
