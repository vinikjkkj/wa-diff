__d(
  "WASmaxOutSpamMessageWithNewsletterQuestionResponseMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.messageServerId,
        n = e.messageResponseServerId,
        r = o("WASmaxJsx").smax("message", {
          server_id: o("WAWap").INT(t),
          response_server_id: o("WAWap").CUSTOM_STRING(n),
        });
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMessageWithNewsletterQuestionResponseMixin = s;
  },
  98,
);
