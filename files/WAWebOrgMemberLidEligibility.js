__d(
  "WAWebOrgMemberLidEligibility",
  ["WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e == null || !e.isLid() || (e.device != null && e.device !== 0)
        ? null
        : o("WAWebWidFactory").asUserLidOrThrow(e);
    }
    function s(t) {
      if (t == null || t === "" || t.includes("@")) return null;
      try {
        return e(o("WAWebWidFactory").createWid(t + "@lid"));
      } catch (e) {
        return null;
      }
    }
    ((l.getWAWebOrgMemberLid = e), (l.parseWAWebOrgMemberLidUser = s));
  },
  98,
);
