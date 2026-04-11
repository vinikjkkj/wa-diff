__d(
  "WASmaxOutPushConfigSetSetConfigMixin",
  ["WASmaxJsx", "WASmaxMixins", "WASmaxOutPushConfigConfigMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.configMixinsArgs,
        n = o("WASmaxJsx").smax(
          "iq",
          null,
          o("WASmaxOutPushConfigConfigMixins").mergeConfigMixins(
            o("WASmaxJsx").smax("config", null),
            t,
          ),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSetSetConfigMixin = s;
  },
  98,
);
