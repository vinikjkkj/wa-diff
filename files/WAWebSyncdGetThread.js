__d(
  "WAWebSyncdGetThread",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebSchemaThreadsMetadata",
    "WAWebThreadsMetadataIdUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WAWebThreadsMetadataIdUtils").craftThreadMetadataDBId(t),
            r = yield o("WAWebSchemaThreadsMetadata")
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
        })),
        u.apply(this, arguments)
      );
    }
    l.resolveThreadForMutationIndex = s;
  },
  98,
);
