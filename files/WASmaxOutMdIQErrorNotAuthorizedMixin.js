__d(
  "WASmaxOutMdIQErrorNotAuthorizedMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("error", {
        text: "not-authorized",
        code: o("WAWap").INT(401),
      });
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeIQErrorNotAuthorizedMixin = s;
  },
  98,
);
