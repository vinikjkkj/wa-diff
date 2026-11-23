__d(
  "WAWebStringsWithMultiplePluralParts",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return s
        ._(/*BTDS*/ "", [
          s._plural(e, "count"),
          s._plural(e),
          s._param("contact", t),
        ])
        .toString();
    }
    function u(e, t) {
      return s
        ._(/*BTDS*/ "", [
          s._plural(e, "count"),
          s._plural(e),
          s._param("contact", t),
        ])
        .toString();
    }
    function c(e, t, n) {
      return d(e, t, n).toString();
    }
    function d(e, t, n) {
      return n
        ? s._(/*BTDS*/ "", [
            s._plural(t),
            s._plural(t),
            s._param("group-names", e.formattedNames),
          ])
        : s._(/*BTDS*/ "", [
            s._plural(t),
            s._plural(t),
            s._param("group-names", e.formattedNames),
          ]);
    }
    function m(e, t, n) {
      return p(e, t, n).toString();
    }
    function p(e, t, n) {
      return n
        ? s._(/*BTDS*/ "", [
            s._plural(t),
            s._plural(t),
            s._param("group-names", e.formattedNames),
          ])
        : s._(/*BTDS*/ "", [
            s._plural(t),
            s._plural(t),
            s._param("group-names", e.formattedNames),
          ]);
    }
    ((l.getCannotForwardCapabilityContactString = e),
      (l.getCannotForwardFileMissingAndCapabilityContactString = u),
      (l.getCommunityGroupsAddedString = c),
      (l.getCommunityGroupsAddedStringComponent = d),
      (l.getCommunityGroupsRemovedString = m),
      (l.getCommunityGroupsRemovedStringComponent = p));
  },
  226,
);
