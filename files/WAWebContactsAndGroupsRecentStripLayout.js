__d(
  "WAWebContactsAndGroupsRecentStripLayout",
  [],
  function (t, n, r, o, a, i) {
    var e = 177,
      l = 16;
    function s(t) {
      var n = Math.max(1, Math.floor((t + l) / (e + l)));
      return (t - (n - 1) * l) / n;
    }
    ((i.MIN_CARD_WIDTH = e), (i.CARD_GAP = l), (i.getCardWidth = s));
  },
  66,
);
