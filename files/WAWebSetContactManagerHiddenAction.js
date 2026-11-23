__d(
  "WAWebSetContactManagerHiddenAction",
  [
    "WAWebContactManagerHiddenError",
    "WAWebContactManagerMetadataSync",
    "WAWebSchemaContactManagerMetadata",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
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
      await r(
        "WAWebContactManagerMetadataSync",
      ).sendContactManagerMetadataUpdate({ id: e, isHidden: t });
    }
    l.setContactManagerHidden = e;
  },
  98,
);
