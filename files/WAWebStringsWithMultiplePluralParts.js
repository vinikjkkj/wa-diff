__d(
  "WAWebStringsWithMultiplePluralParts",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return s
        ._(
          /*BTDS*/ '_j{"*":{"*":"{count} messages couldn\'t be forwarded because {contact} is on a version of WhatsApp that doesn\'t support them."},"_1":{"_1":"1 message couldn\'t be forwarded because {contact} is on a version of WhatsApp that doesn\'t support it."}}',
          [s._plural(e, "count"), s._plural(e), s._param("contact", t)],
        )
        .toString();
    }
    function u(e, t) {
      return s
        ._(
          /*BTDS*/ '_j{"*":{"*":"{count} messages couldn\'t be forwarded because the file is missing or {contact} is on a version of WhatsApp that doesn\'t support them."},"_1":{"_1":"1 message couldn\'t be forwarded because the file is missing or {contact} is on a version of WhatsApp that doesn\'t support it."}}',
          [s._plural(e, "count"), s._plural(e), s._param("contact", t)],
        )
        .toString();
    }
    function c(e, t) {
      return d(e, t).toString();
    }
    function d(e, t) {
      return s._(
        /*BTDS*/ '_j{"*":{"*":"Groups {group-names} were added"},"_1":{"_1":"Group {group-names} was added"}}',
        [s._plural(t), s._plural(t), s._param("group-names", e.formattedNames)],
      );
    }
    function m(e, t) {
      return p(e, t).toString();
    }
    function p(e, t) {
      return s._(
        /*BTDS*/ '_j{"*":{"*":"The groups {group-names} were removed"},"_1":{"_1":"The group {group-names} was removed"}}',
        [s._plural(t), s._plural(t), s._param("group-names", e.formattedNames)],
      );
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
