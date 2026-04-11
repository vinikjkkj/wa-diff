__d(
  "WAWebPollResultSnapshotUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      isVotedForByMe: !1,
      isCurrentLeader: !1,
      percentageOfAll: 0,
      percentageOfMostVotedForOption: 0,
      votes: [],
      mode: "pollResultSnapshot",
      count: 0,
    };
    function l(t) {
      var n = new Map(),
        r = 0,
        o = 0;
      t.forEach(function (t) {
        var a = t.option,
          i = t.optionVoteCount;
        (n.set(a, babelHelpers.extends({}, e, { count: i })),
          (r = Math.max(r, i)),
          (o += i));
      });
      for (var a of n.values())
        ((a.percentageOfMostVotedForOption = r === 0 ? 0 : a.count / r),
          (a.percentageOfAll = o === 0 ? 0 : a.count / o),
          (a.isCurrentLeader = r > 0 && a.count === r));
      return n;
    }
    i.aggegateVoteSnapshot = l;
  },
  66,
);
