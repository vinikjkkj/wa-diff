__d(
  "WASmaxOutPreKeysSetOpAddMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax(
        "iq",
        null,
        o("WASmaxJsx").smax("op", { mode: "add" }),
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeSetOpAddMixin = s;
  },
  98,
);
