__d(
  "WASmaxOutMessagePublishMetaUnscheduleMessageMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.keyRkid,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax(
            "meta",
            { type: "scheduled_message" },
            o("WASmaxJsx").smax("key", { rkid: o("WAWap").CUSTOM_STRING(t) }),
          ),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMetaUnscheduleMessageMixin = s;
  },
  98,
);
