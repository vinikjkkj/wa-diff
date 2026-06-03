__d(
  "WAWebMexTransferCommunityOwnershipJob",
  [
    "WAWebGroupQueryJob",
    "WAWebMexClient",
    "WAWebMexTransferCommunityOwnershipJobMutation.graphql",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexTransferCommunityOwnershipJobMutation.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.localParentGroupAddressingMode,
            a = e.mexInput,
            i = { input: a },
            l = yield o("WAWebMexClient").fetchQuery(s, i),
            u = l.xwa2_group_update_users_role,
            c = u == null ? void 0 : u.group_id,
            d =
              u == null || (t = u.lid_migration_state) == null
                ? void 0
                : t.addressing_mode,
            m = !!d !== n;
          m !== n &&
            !r("isStringNullOrEmpty")(c) &&
            (yield o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
              id: o("WAWebWidFactory").createWid(c),
              request: "interactive",
            }));
        })),
        c.apply(this, arguments)
      );
    }
    l.mexTransferCommunityOwnershipJob = u;
  },
  98,
);
