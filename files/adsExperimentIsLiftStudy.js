__d(
  "adsExperimentIsLiftStudy",
  ["AdsTALStudyType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      o("AdsTALStudyType").AdStudyTypeName.LIFT,
      o("AdsTALStudyType").AdStudyTypeName.CONTINUOUS_LIFT_CONFIG,
    ];
    function s(t) {
      return e.some(function (e) {
        return (t == null ? void 0 : t.type) === e;
      });
    }
    l.isLiftStudy = s;
  },
  98,
);
