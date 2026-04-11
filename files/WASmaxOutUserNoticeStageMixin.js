__d(
  "WASmaxOutUserNoticeStageMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.noticeId,
        n = e.noticeStage,
        r = o("WASmaxJsx").smax("notice", {
          id: o("WAWap").INT(t),
          stage: o("WAWap").INT(n),
        });
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStageMixin = s;
  },
  98,
);
