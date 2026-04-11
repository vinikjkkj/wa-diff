__d(
  "WASmaxOutGroupsSetSubjectRequest",
  [
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WASmaxOutGroupsSetSubjectChangeSubjectMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutGroupsSetSubjectChangeSubjectMixin",
      ).mergeSetSubjectChangeSubjectMixin(
        o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax("iq", null),
          e,
        ),
        e,
      );
      return t;
    }
    l.makeSetSubjectRequest = e;
  },
  98,
);
