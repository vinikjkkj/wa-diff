__d(
  "WAWebExperienceIdWamFields",
  ["WAWebExperienceIdGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (!o("WAWebExperienceIdGatingUtils").isExperienceIdReceiveEnabled())
        return null;
      var t = e.experienceIds;
      return t == null || t.length === 0 ? null : t;
    }
    function s(e) {
      return e == null || e.length === 0 ? null : e.join(",");
    }
    ((l.getExperienceIds = e), (l.getExperienceIdsWamValue = s));
  },
  98,
);
