__d(
  "WASmaxOutSpamMessageWithHsmTemplateMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hsmTid,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("hsm", { tid: o("WAWap").CUSTOM_STRING(t) }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMessageWithHsmTemplateMixin = s;
  },
  98,
);
