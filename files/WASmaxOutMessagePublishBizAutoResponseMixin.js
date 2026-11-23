__d(
  "WASmaxOutMessagePublishBizAutoResponseMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.bizAutoResponse,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("biz", {
            auto_response: o("WAWap").CUSTOM_STRING(t),
          }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBizAutoResponseMixin = s;
  },
  98,
);
