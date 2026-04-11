__d(
  "WAWebQueryAndUpdateGroupsMetadataByJidsJob",
  [
    "WALogger",
    "WAWebDefinePersistedJob",
    "WAWebQueryAndUpdateGroupMetadataJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebDefinePersistedJob")
        .defineWebPersistedJob()
        .finalStep(
          "queryAndUpdateGroupsMetadataByJids",
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "queryAndUpdateGroupsMetadataByJidsJob: started persisted job",
                    ])),
                ),
                  yield o(
                    "WAWebQueryAndUpdateGroupMetadataJob",
                  ).queryAndUpdateAllGroupMetadata({
                    batchQueryArgs: {
                      groupJids: t,
                      queryContext: "per_group_dirty_recovery_truncatable",
                    },
                  }));
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        )
        .end();
    l.queryAndUpdateGroupsMetadataByJidsJob = s;
  },
  98,
);
