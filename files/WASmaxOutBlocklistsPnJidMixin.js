__d(
  "WASmaxOutBlocklistsPnJidMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.anyPnJid,
        n = o("WASmaxJsx").smax("smax$any", { pn_jid: o("WAWap").JID(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergePnJidMixin = s;
  },
  98,
);
