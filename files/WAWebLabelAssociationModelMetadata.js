__d(
  "WAWebLabelAssociationModelMetadata",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      if (e == null || e === "") return [];
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return [];
      }
      return Array.isArray(t)
        ? t.flatMap(function (e) {
            if (e == null || typeof e != "object") return [];
            var t = e.isDetected,
              n = e.isLatestModel,
              r = e.modelName;
            return typeof r == "string" &&
              typeof n == "boolean" &&
              typeof t == "boolean"
              ? [{ modelName: r, isLatestModel: n, isDetected: t }]
              : [];
          })
        : [];
    }
    i.parseLabelAssociationModelMetadata = e;
  },
  66,
);
