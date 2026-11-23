__d(
  "WAWebQueryAndUpdateGroupsMetadataByJidsJob",
  [
    "WALogger",
    "WAWebDefinePersistedJob",
    "WAWebQueryAndUpdateGroupMetadataJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return o(
        "WAWebQueryAndUpdateGroupMetadataJob",
      ).queryAndUpdateAllGroupMetadata({
        batchQueryArgs: {
          groupJids: e,
          queryContext: "per_group_dirty_recovery_truncatable",
        },
      });
    }
    var u = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .finalStep("queryAndUpdateGroupsMetadataByJids", async function (t) {
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "queryAndUpdateGroupsMetadataByJidsJob: started persisted job",
            ])),
        ),
          await s(t));
      })
      .end();
    ((l.queryAndUpdateDirtyGroupsMetadata = s),
      (l.queryAndUpdateGroupsMetadataByJidsJob = u));
  },
  98,
);
