__d(
  "WASmaxOutGroupsNamedSubjectMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.anySubject,
        n = o("WASmaxJsx").smax("smax$any", {
          subject: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNamedSubjectMixin = s;
  },
  98,
);
