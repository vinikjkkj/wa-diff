__d(
  "useWAWebBizAdCreateDraftMutation",
  [
    "CometRelay",
    "FBLogger",
    "Promise",
    "getErrorSafe",
    "react",
    "useWAWebBizAdCreateDraftMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (u || (u = o("react"))).useCallback,
      d =
        e !== void 0 ? e : (e = n("useWAWebBizAdCreateDraftMutation.graphql"));
    function m() {
      var e = o("CometRelay").useMutation(d),
        t = e[0],
        a = e[1],
        i = c(
          function (e) {
            return new (s || (s = n("Promise")))(function (n) {
              t({
                variables: { input: e },
                onCompleted: function (t, o) {
                  var e;
                  if (o != null && o.length > 0) {
                    (r("FBLogger")("wa_ctwa_web")
                      .catching(r("getErrorSafe")(o[0]))
                      .warn("Draft create mutation returned errors"),
                      n({ success: !1, error: "mutation_failed" }));
                    return;
                  }
                  var a =
                    t == null || (e = t.create_ads_ctwa_draft) == null
                      ? void 0
                      : e.id;
                  a != null
                    ? n({ success: !0, draftID: a })
                    : (r("FBLogger")("wa_ctwa_web").warn(
                        "Draft create mutation returned null draft ID",
                      ),
                      n({ success: !1, error: "mutation_failed" }));
                },
                onError: function (t) {
                  (r("FBLogger")("wa_ctwa_web")
                    .catching(r("getErrorSafe")(t))
                    .warn(
                      "Draft create mutation failed in useWAWebBizAdCreateDraftMutation",
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
