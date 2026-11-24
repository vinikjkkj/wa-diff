__d(
  "MAIBACreativeSuggestionsWorkspaceUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 18e4;
    function l(e, t, n) {
      return (
        "creative-suggestions-" +
        e +
        "-" +
        t +
        (n != null && n !== "" ? "-" + n : "")
      );
    }
    function s(e, t) {
      return (e != null ? e : "none") + ":" + (t != null ? t : "none");
    }
    function u(e, t, n) {
      return e === "pending" || n === s(e, t);
    }
    function c(t) {
      var n,
        r = (n = t.generation_status) != null ? n : null;
      if (r !== "optimistic") return r;
      var o = Number(t.generation_requested_at_ms);
      return Date.now() - o < e ? r : null;
    }
    function d(e, t, n, r, o) {
      var a, i;
      return {
        __typename: "XFBMAIBAWorkspaceObject",
        attributes_json: JSON.stringify(
          babelHelpers.extends(
            { account_id: e },
            o != null && o !== "" ? { adgroup_id: o } : {},
            {
              generation_requested_at_ms: String(Date.now()),
              generation_status: "optimistic",
              idea_id: n,
              unit_id: t,
            },
          ),
        ),
        blocks_json: "[]",
        entity_type: "EMBED",
        is_pill_hidden: !0,
        request_id: null,
        subtitle: null,
        title: (a = r == null ? void 0 : r.title) != null ? a : null,
        version: ((i = r == null ? void 0 : r.version) != null ? i : 0) + 1,
        workspace_id: l(t, n, o),
        workspace_type: "creative_suggestions",
      };
    }
    ((i.GENERATE_MORE_TIMEOUT_MS = e),
      (i.creativeSuggestionsWorkspaceID = l),
      (i.creativeSuggestionsGenerationStateKey = s),
      (i.isCreativeSuggestionsGenerationPending = u),
      (i.creativeSuggestionsGenerationStatus = c),
      (i.buildOptimisticGenerateMoreWorkspace = d));
  },
  66,
);
