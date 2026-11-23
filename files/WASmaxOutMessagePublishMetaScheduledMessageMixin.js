__d(
  "WASmaxOutMessagePublishMetaScheduledMessageMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.metaSt,
        n = e.keyRkid,
        r = e.keyElementValue,
        a = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax(
            "meta",
            { type: "scheduled_message", st: o("WAWap").INT(t) },
            o("WASmaxJsx").smax(
              "key",
              { rkid: o("WAWap").CUSTOM_STRING(n) },
              r,
            ),
          ),
        );
      return a;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMetaScheduledMessageMixin = s;
  },
  98,
);
