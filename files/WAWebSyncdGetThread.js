__d(
  "WAWebSyncdGetThread",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebSchemaThreadsMetadata",
    "WAWebThreadsMetadataIdUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var n = o("WAWebThreadsMetadataIdUtils").craftThreadMetadataDBId(t),
        r = await o("WAWebSchemaThreadsMetadata")
          .getThreadsMetadataTable()
          .get(n);
      return r == null
        ? {
            success: !1,
            orphanModel: {
              modelId: t.toString(),
              modelType: o("WASyncdConst").SyncModelType.Thread,
            },
          }
        : (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd] resolveThreadForMutationIndex: thread found",
              ])),
          ),
          { success: !0, thread: r });
    }
    l.resolveThreadForMutationIndex = s;
  },
  98,
);
