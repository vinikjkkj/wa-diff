__d(
  "adsGetObjectiveName",
  [
    "fbt",
    "AdsAPIObjectiveStringsStatic",
    "AdsAPIObjectives",
    "AdsODAXObjectiveStrings",
    "FBLogger",
    "adsGetKPIObjectiveData",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, a, i) {
      var l;
      if (
        (a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        i === !0 && e === r("AdsAPIObjectives").OUTCOME_SALES)
      )
        return s._(/*BTDS*/ "Awareness and Sales");
      if (n === !0)
        return a
          ? o("AdsODAXObjectiveStrings").getObjectiveNameLowerCase(e)
          : o("AdsODAXObjectiveStrings").getObjectiveName(e);
      var u = a
        ? r("adsGetKPIObjectiveData")(e, t).lowercaseName
        : r("adsGetKPIObjectiveData")(e, t).name ||
          ((l = o("AdsAPIObjectiveStringsStatic").result[e]) == null
            ? void 0
            : l.name);
      return u == null
        ? (r("FBLogger")("ads")
            .blameToPreviousFrame()
            .mustfix(
              'Objective "%s" does not have a "%s" value',
              e,
              a ? "lowercase" : "translated",
            ),
          e)
        : u;
    }
    l.default = e;
  },
  226,
);
