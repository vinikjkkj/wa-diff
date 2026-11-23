__d(
  "WASmaxOutMessagePublishBizAcceptTsMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.bizAcceptTs,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("biz", { accept_ts: o("WAWap").INT(t) }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBizAcceptTsMixin = s;
  },
  98,
);
