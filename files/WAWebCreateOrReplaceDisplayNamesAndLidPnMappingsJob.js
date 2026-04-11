__d(
  "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
  [
    "Promise",
    "WAWebDBCreateLidPnMappings",
    "WAWebEnvironment",
    "WAWebRunInBatches",
    "WAWebUpdateLidMetadataApi",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          r("WAWebEnvironment").isWindows
            ? yield o("WAWebRunInBatches").runInBatches(e, function (e) {
                return c(e, t);
              })
            : yield c(e, t);
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = [],
            i = [];
          for (var l of t)
            if (l != null) {
              var s = l.id,
                u = o("WAWebWidFactory").asUserWidOrThrow(s);
              if (u.isLid()) {
                var c = l.displayName,
                  d = l.phoneNumber;
                (c != null && a.push({ lid: u, data: { displayNameLID: c } }),
                  d != null &&
                    i.push({
                      lid: u,
                      pn: o("WAWebWidFactory").asUserWidOrThrow(d),
                    }));
              } else {
                var m = l.lid;
                m != null &&
                  i.push({
                    lid: o("WAWebWidFactory").asUserLidOrThrow(m),
                    pn: o("WAWebWidFactory").asUserWidOrThrow(s),
                  });
              }
            }
          yield (e || (e = n("Promise"))).all(
            [
              a.length > 0
                ? o("WAWebUpdateLidMetadataApi").updateLidMetadata({
                    updates: a,
                  })
                : null,
              i.length > 0
                ? o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                    mappings: i,
                    flushImmediately: r,
                    learningSource: "other",
                  })
                : null,
            ].filter(Boolean),
          );
        })),
        d.apply(this, arguments)
      );
    }
    ((l.createOrReplaceDisplayNamesAndLidPnMappingsInBatches = s),
      (l.createOrReplaceDisplayNamesAndLidPnMappings = c));
  },
  98,
);
