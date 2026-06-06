__d(
  "WAWebQueryAndUpdateGroupsMetadataByJidsJob",
  [
    "WALogger",
    "WAWebDefinePersistedJob",
    "WAWebQueryAndUpdateGroupMetadataJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebDefinePersistedJob")
        .defineWebPersistedJob()
        .finalStep("queryAndUpdateGroupsMetadataByJids", async function (t) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "queryAndUpdateGroupsMetadataByJidsJob: started persisted job",
              ])),
          ),
            await o(
              "WAWebQueryAndUpdateGroupMetadataJob",
            ).queryAndUpdateAllGroupMetadata({
              batchQueryArgs: {
                groupJids: t,
                queryContext: "per_group_dirty_recovery_truncatable",
              },
            }));
        })
        .end();
    l.queryAndUpdateGroupsMetadataByJidsJob = s;
  },
  98,
);
