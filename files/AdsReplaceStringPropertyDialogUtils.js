__d(
  "AdsReplaceStringPropertyDialogUtils",
  [
    "AdsReplaceStringPropertyDialogConfig",
    "AdsUnifiedCreativeFieldUtils",
    "AdsUniformValue",
    "observeRuntimeType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l) {
      (r("observeRuntimeType")(
        n,
        "AdsReplaceStringPropertyDialogUtils.pullReplaceableInputs.specs",
      ),
        r("observeRuntimeType")(
          i,
          "AdsReplaceStringPropertyDialogUtils.pullReplaceableInputs.rawAdgroups",
        ),
        r("observeRuntimeType")(
          l,
          "AdsReplaceStringPropertyDialogUtils.pullReplaceableInputs.rawCampaignGroups",
        ));
      var s = {},
        u,
        c,
        d,
        m = r("AdsReplaceStringPropertyDialogConfig")[t];
      e.forEach(function (e, t) {
        s[e] = {};
      });
      var p = a.toObject(),
        _ = function (_) {
          ((d = m[_].resolverName),
            d
              ? ((u = o(
                  "AdsUnifiedCreativeFieldUtils",
                ).getBulkValueFromRawSpecs(d, i, l, p)),
                (c = o("AdsUnifiedCreativeFieldUtils").getBulkPathFromRawSpecs(
                  d,
                  i,
                  l,
                  p,
                )))
              : ((u = n[t]),
                (c = m[_].path && r("AdsUniformValue").create([m[_].path]))),
            e.forEach(function (e, t) {
              var n, r;
              s[e][_] = {
                value: (n = u.getValueForIndex(t)) != null ? n : "",
                path: (r = c) == null ? void 0 : r.getValueForIndex(t),
              };
            }));
        };
      for (var f in m) _(f);
      return s;
    }
    l.pullReplaceableInputs = e;
  },
  98,
);
