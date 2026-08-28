__d(
  "AdsDDAStrings",
  ["fbt", "GeoLink.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ "Data-driven attribution"),
      d = s._(/*BTDS*/ "Incremental"),
      m = function (t) {
        return s._(
          /*BTDS*/ "Incremental conversions are estimated with a statistical model driven by lift test data. {=m2}",
          [
            s._implicitParam(
              "=m2",
              u.jsx(r("GeoLink.react"), {
                onClick: function () {
                  return t("258047838115232");
                },
                children: s._(/*BTDS*/ "Learn more."),
              }),
            ),
          ],
        );
      };
    function p(e) {
      return e == null || e === ""
        ? null
        : s._(/*BTDS*/ "Incremental {Original column label}", [
            s._param("Original column label", e),
          ]);
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.DATA_DRIVEN_ATTRIBUTION_LABEL = c),
      (l.DATA_DRIVEN_ATTRIBUTION_WINDOW_TYPE_LABEL = d),
      (l.DATA_DRIVEN_ATTRIBUTION_RESULTS_DESCRIPTION = m),
      (l.getIncrementalColumnLabel = p));
  },
  226,
);
