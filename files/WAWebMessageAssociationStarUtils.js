__d(
  "WAWebMessageAssociationStarUtils",
  ["WAWebMessageAssociationConfig"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o("WAWebMessageAssociationConfig").getChildStarringPolicy(
        e.associationType,
      ).detachOnStarChange && e.detachAssociatedMsg();
    }
    l.detachAssociatedMsgOnStarChange = e;
  },
  98,
);
