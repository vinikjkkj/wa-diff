__d(
  "AdsTALAdAccountImpactingStudiesPreloaderUtilsLegacy",
  ["AdsTALAdAccountImpactingStudiesPreloader", "cr:4079"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = n("cr:4079") != null ? new (n("cr:4079"))() : null;
      return e == null
        ? null
        : {
            asyncData: r("AdsTALAdAccountImpactingStudiesPreloader").preloader,
            instance: e,
          };
    }
    l.getImpactingStudiesPreloader = e;
  },
  98,
);
