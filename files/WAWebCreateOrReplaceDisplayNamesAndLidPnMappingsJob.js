__d(
  "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
  [
    "WAWebDBCreateLidPnMappings",
    "WAWebEnvironment",
    "WAWebRunInBatches",
    "WAWebUpdateLidMetadataApi",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      r("WAWebEnvironment").isWindows
        ? await o("WAWebRunInBatches").runInBatches(e, function (e) {
            return s(e, t);
          })
        : await s(e, t);
    }
    async function s(e, t) {
      var n = [],
        r = [];
      for (var a of e)
        if (a != null) {
          var i = a.id,
            l = o("WAWebWidFactory").asUserWidOrThrow(i);
          if (l.isLid()) {
            var s = a.displayName,
              u = a.phoneNumber;
            (s != null && n.push({ lid: l, data: { displayNameLID: s } }),
              u != null &&
                r.push({
                  lid: l,
                  pn: o("WAWebWidFactory").asUserWidOrThrow(u),
                }));
          } else {
            var c = a.lid;
            c != null &&
              r.push({
                lid: o("WAWebWidFactory").asUserLidOrThrow(c),
                pn: o("WAWebWidFactory").asUserWidOrThrow(i),
              });
          }
        }
      await Promise.all(
        [
          n.length > 0
            ? o("WAWebUpdateLidMetadataApi").updateLidMetadata({ updates: n })
            : null,
          r.length > 0
            ? o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: r,
                flushImmediately: t,
                learningSource: "other",
              })
            : null,
        ].filter(Boolean),
      );
    }
    ((l.createOrReplaceDisplayNamesAndLidPnMappingsInBatches = e),
      (l.createOrReplaceDisplayNamesAndLidPnMappings = s));
  },
  98,
);
