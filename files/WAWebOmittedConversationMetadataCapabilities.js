__d(
  "WAWebOmittedConversationMetadataCapabilities",
  [
    "WALogger",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebSchemaVersions",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 216,
      c = -1;
    function d(t) {
      var n,
        a =
          (n = o("WAWebSchemaVersions").hasSchemaVersions()
            ? o("WAWebSchemaVersions")
                .getSchemaVersions()
                .get(o("WAWebSchemaVersions").DatabaseNames.ModelStorage)
            : null) != null
            ? n
            : r("justknobx")._("1617"),
        i = a === c || r("justknobx")._("1854");
      i || a >= u
        ? ((t.supportOmittedConversationMetadata = !0),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[odhs-v2] [SETUP] ENABLED: capability 28 advertised; model-storage=",
                ".",
              ])),
            a,
          ))
        : o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[odhs-v2] [SETUP] DISABLED: model-storage=",
                "; require model-storage-version=",
                " before pairing.",
              ])),
            a,
            u,
          );
    }
    function m() {
      return (
        o("WAWebModelStorageUtils")
          .getStorage()
          .doesLocalSchemaIncludeVersion(
            o(
              "WAWebModelStorageVersions",
            ).omittedConversationMetadataCreateTable(),
          ) &&
        o("WAWebModelStorageUtils")
          .getStorage()
          .doesLocalSchemaIncludeVersion(
            o(
              "WAWebModelStorageVersions",
            ).omittedConversationMetadataSnapshotCreateTable(),
          )
      );
    }
    ((l.configureOmittedMetadataReceiver = d), (l.canReadOmittedMetadata = m));
  },
  98,
);
