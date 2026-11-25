__d(
  "WAWebTeamLinkEmployeeLid",
  ["WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e == null || e === "") return null;
      try {
        return o("WAWebWidFactory").createUserLidOrThrow(e, "lid");
      } catch (e) {
        return null;
      }
    }
    l.parseEmployeeLid = e;
  },
  98,
);
