__d(
  "hasFormatTransformationWithDataSource",
  ["DeepRecordUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r,
        a,
        i = o("DeepRecordUtils").maybeToPlainObject(e),
        l =
          (r =
            i == null || (a = i.creative) == null
              ? void 0
              : a.format_transformation_spec) != null
            ? r
            : [];
      return l.some(function (e) {
        var r,
          o = e.data_source;
        return (
          e.format === t &&
          o != null &&
          (o.length === 0 || ((r = o.includes(n)) != null ? r : !1))
        );
      });
    }
    l.hasFormatTransformationWithDataSource = e;
  },
  98,
);
