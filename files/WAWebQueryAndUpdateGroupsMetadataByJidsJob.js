__d(
  "WAWebQueryAndUpdateGroupsMetadataByJidsJob",
  [
    "WALogger",
    "WAWebDefinePersistedJob",
    "WAWebQueryAndUpdateGroupMetadataJob",
    "asyncToGeneratorRuntime",
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
      .finalStep(
        "queryAndUpdateGroupsMetadataByJids",
        (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "queryAndUpdateGroupsMetadataByJidsJob: started persisted job",
                ])),
            ),
              yield s(t));
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
      )
      .end();
    ((l.queryAndUpdateDirtyGroupsMetadata = s),
      (l.queryAndUpdateGroupsMetadataByJidsJob = u));
  },
  98,
);
