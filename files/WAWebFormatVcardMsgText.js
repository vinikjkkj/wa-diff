__d(
  "WAWebFormatVcardMsgText",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = t.vcardFormattedName;
      return n != null && n.length ? n : s._(/*BTDS*/ "Contact");
    }
    l.default = e;
  },
  226,
);
