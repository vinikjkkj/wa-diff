__d(
  "WAWebSetContactManagerHiddenAction",
  [
    "WAWebContactManagerHiddenError",
    "WAWebContactManagerMetadataSync",
    "WAWebSchemaContactManagerMetadata",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !o(
              "WAWebSchemaContactManagerMetadata",
            ).canUseContactManagerMetadataTable()
          )
            throw new (o(
              "WAWebContactManagerHiddenError",
            ).ContactManagerHiddenError)("metadata_table_unavailable");
          if (e == null)
            throw new (o(
              "WAWebContactManagerHiddenError",
            ).ContactManagerHiddenError)("missing_metadata_key");
          yield r(
            "WAWebContactManagerMetadataSync",
          ).sendContactManagerMetadataUpdate({ id: e, isHidden: t });
        })),
        s.apply(this, arguments)
      );
    }
    l.setContactManagerHidden = e;
  },
  98,
);
