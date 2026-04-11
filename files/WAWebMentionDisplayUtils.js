__d(
  "WAWebMentionDisplayUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.startsWith("@") ? e.slice(1) : e;
      return "@" + t;
    }
    i.addAtPrefixForMention = e;
  },
  66,
);
