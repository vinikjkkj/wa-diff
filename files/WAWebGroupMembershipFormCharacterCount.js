__d(
  "WAWebGroupMembershipFormCharacterCount",
  ["fbt", "WAWebL10N"],
  function (t, n, r, o, a, i, l, s) {
    var e = 0.9;
    function u(t, n) {
      return t < n * e ? null : c(t, n);
    }
    function c(e, t) {
      return s._(/*BTDS*/ "{current-count}\/{max-count}", [
        s._param("current-count", r("WAWebL10N").n(e)),
        s._param("max-count", r("WAWebL10N").n(t)),
      ]);
    }
    ((l.getGroupMembershipFormCharacterCountText = u),
      (l.formatGroupMembershipFormCharacterCount = c));
  },
  226,
);
