__d(
  "usePasskeyUpsellEligibilityCheck",
  [
    "FXAccountsCenterPasskeyCreationUpsellRoot.entrypoint",
    "RelayHooks",
    "react-compiler-runtime",
    "useCDSEntryPointDialog",
    "usePasskeyUpsellEligibilityCheckMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("usePasskeyUpsellEligibilityCheckMutation.graphql"));
    function u() {
      var e = o("react-compiler-runtime").c(4),
        t = o("RelayHooks").useMutation(s),
        n = t[0],
        a;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { entrypoint: "post_reauth" }), (e[0] = a))
        : (a = e[0]);
      var i = r("useCDSEntryPointDialog")(
          r("FXAccountsCenterPasskeyCreationUpsellRoot.entrypoint"),
          a,
        ),
        l = i[0],
        u;
      return (
        e[1] !== n || e[2] !== l
          ? ((u = function (t, r) {
              n({
                onCompleted: function (t) {
                  t.xfb_upsell_passkey_post_reauth === !0
                    ? l({ next: null, onSuccess: r, variant: "dialog" }, r)
                    : r();
                },
                onError: function (t) {
                  r();
                },
                variables: { encryptedContext: t },
              });
            }),
            (e[1] = n),
            (e[2] = l),
            (e[3] = u))
          : (u = e[3]),
        u
      );
    }
    l.default = u;
  },
  98,
);
