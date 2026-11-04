__d(
  "WAWebContactsAndGroupsAttentionCardGrid",
  [],
  function (t, n, r, o, a, i) {
    var e = 12;
    function l(t, n, r) {
      if (n == null || t === 0) return null;
      var o = Math.max(1, Math.floor((n + e) / (r + e))),
        a = Math.ceil(t / o);
      return Math.ceil(t / a);
    }
    ((i.ATTENTION_CARD_GAP = e), (i.getAttentionCardColumns = l));
  },
  66,
);
