__d(
  "WAWebGroupMembershipFormCharacterCounter",
  ["fbt", "WAWebGroupMembershipFormLimits", "WAWebL10N"],
  function (t, n, r, o, a, i, l, s) {
    var e = 0.9;
    function u(t, n) {
      if (n == null) return {};
      var a = o(
        "WAWebGroupMembershipFormLimits",
      ).countGroupMembershipFormCharacters(t);
      if (a < n * e) return {};
      var i = s._(/*BTDS*/ "{current-count}\/{max-count}", [
        s._param("current-count", r("WAWebL10N").n(a)),
        s._param("max-count", r("WAWebL10N").n(n)),
      ]);
      return a > n ? { error: !0, errorText: i } : { bottomText: i };
    }
    l.getGroupMembershipFormCounterProps = u;
  },
  226,
);
