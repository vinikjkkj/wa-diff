__d(
  "WASmaxOutStatusPublishStatusDirectedRetryParticipantMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.statusParticipant,
        n = o("WASmaxJsx").smax("status", { participant: o("WAWap").JID(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusDirectedRetryParticipantMixin = s;
  },
  98,
);
