__d(
  "useWAWebBizAdDeleteDraftMutation",
  [
    "CometRelay",
    "FBLogger",
    "Promise",
    "getErrorSafe",
    "react",
    "useWAWebBizAdDeleteDraftMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (u || (u = o("react"))).useCallback,
      d =
        e !== void 0 ? e : (e = n("useWAWebBizAdDeleteDraftMutation.graphql"));
    function m() {
      var e = o("CometRelay").useMutation(d),
        t = e[0],
        a = e[1],
        i = c(
          function (e) {
            return new (s || (s = n("Promise")))(function (n) {
              t({
                variables: { input: { draft_id: e } },
                onCompleted: function (t, o) {
                  if (o != null && o.length > 0) {
                    (r("FBLogger")("wa_ctwa_web")
                      .catching(r("getErrorSafe")(o[0]))
                      .warn("Draft delete mutation returned errors"),
                      n({ success: !1, error: "mutation_failed" }));
                    return;
                  }
                  if ((t == null ? void 0 : t.delete_ads_ctwa_draft) !== !0) {
                    (r("FBLogger")("wa_ctwa_web").warn(
                      "Draft delete mutation returned non-true response",
                    ),
                      n({ success: !1, error: "mutation_failed" }));
                    return;
                  }
                  n({ success: !0 });
                },
                onError: function (t) {
                  (r("FBLogger")("wa_ctwa_web")
                    .catching(r("getErrorSafe")(t))
                    .warn(
                      "Draft delete mutation failed in useWAWebBizAdDeleteDraftMutation",
                    ),
                    n({ success: !1, error: "mutation_failed" }));
                },
              });
            });
          },
          [t],
        );
      return [i, a];
    }
    l.default = m;
  },
  98,
);
