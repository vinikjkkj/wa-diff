__d(
  "WASmaxOutSpamReportedPushNameMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.messageReportedPushName,
        n = o("WASmaxJsx").smax("message", {
          reported_push_name: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeReportedPushNameMixin = s;
  },
  98,
);
