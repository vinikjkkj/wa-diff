__d(
  "WAWebSetContactManagerHiddenAction",
  [
    "WAWebContactManagerMetadataSync",
    "WAWebSchemaContactManagerMetadata",
    "asyncToGeneratorRuntime",
    "err",
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
            throw r("err")("Contact manager hidden contacts are unavailable");
          if (e == null)
            throw r("err")("Contact manager metadata key is unavailable");
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
