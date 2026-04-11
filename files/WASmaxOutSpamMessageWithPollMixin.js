__d(
  "WASmaxOutSpamMessageWithPollMixin",
  ["WASmaxJsx", "WASmaxMixins", "WASmaxOutSpamContentTypePollCreationMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutSpamContentTypePollCreationMixin",
      ).mergeContentTypePollCreationMixin(
        o("WASmaxJsx").smax("message", null),
        e,
      );
      return t;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMessageWithPollMixin = s;
  },
  98,
);
