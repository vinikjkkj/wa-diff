__d(
  "useWAWebBizAdCreateDraftMutation",
  [
    "CometRelay",
    "FBLogger",
    "Promise",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(5),
        t = o("CometRelay").useMutation(d),
        a = t[0],
        i = t[1],
        l;
      e[0] !== a
        ? ((l = function (t) {
            return new (s || (s = n("Promise")))(function (e) {
              a({
                variables: { input: t },
                onCompleted: function (n, o) {
                  var t;
                  if (o != null && o.length > 0) {
                    (r("FBLogger")("wa_ctwa_web")
                      .catching(r("getErrorSafe")(o[0]))
                      .warn("Draft create mutation returned errors"),
                      e({ success: !1, error: "mutation_failed" }));
                    return;
                  }
                  var a =
                    n == null || (t = n.create_ads_ctwa_draft) == null
                      ? void 0
                      : t.id;
                  a != null
                    ? e({ success: !0, draftID: a })
                    : (r("FBLogger")("wa_ctwa_web").warn(
                        "Draft create mutation returned null draft ID",
                      ),
                      e({ success: !1, error: "mutation_failed" }));
                },
                onError: function (n) {
                  (r("FBLogger")("wa_ctwa_web")
                    .catching(r("getErrorSafe")(n))
                    .warn(
                      "Draft create mutation failed in useWAWebBizAdCreateDraftMutation",
                    ),
                    e({ success: !1, error: "mutation_failed" }));
                },
              });
            });
          }),
          (e[0] = a),
          (e[1] = l))
        : (l = e[1]);
      var u = l,
        c;
      return (
        e[2] !== u || e[3] !== i
          ? ((c = [u, i]), (e[2] = u), (e[3] = i), (e[4] = c))
          : (c = e[4]),
        c
      );
    }
    l.default = m;
  },
  98,
);
