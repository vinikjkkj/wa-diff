__d(
  "WAWebMexTransferCommunityOwnershipJob",
  [
    "WAWebGroupQueryJob",
    "WAWebMexClient",
    "WAWebMexTransferCommunityOwnershipJobMutation.graphql",
    "WAWebWidFactory",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexTransferCommunityOwnershipJobMutation.graphql"));
    async function u(e) {
      var t,
        n = e.localParentGroupAddressingMode,
        a = e.mexInput,
        i = { input: a },
        l = await o("WAWebMexClient").fetchQuery(s, i),
        u = l.xwa2_group_update_users_role,
        c = u == null ? void 0 : u.group_id,
        d =
          u == null || (t = u.lid_migration_state) == null
            ? void 0
            : t.addressing_mode,
        m = !!d !== n;
      m !== n &&
        !r("isStringNullOrEmpty")(c) &&
        (await o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
          id: o("WAWebWidFactory").createWid(c),
          request: "interactive",
        }));
    }
    l.mexTransferCommunityOwnershipJob = u;
  },
  98,
);
