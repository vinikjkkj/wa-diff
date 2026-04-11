__d(
  "WAWebNonJidMentionUtils",
  ["WAWebNonJidMentionType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) return !1;
      var t = r("WAWebNonJidMentionType").MENTION_ALL;
      return (e & t) === t;
    }
    l.hasMentionAll = e;
  },
  98,
);
