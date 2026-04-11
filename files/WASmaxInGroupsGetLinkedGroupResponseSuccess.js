__d(
  "WASmaxInGroupsGetLinkedGroupResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsLinkedGroupInfoMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "linked_group");
      if (!r.success) return r;
      var a = o("WASmaxInGroupsLinkedGroupInfoMixin").parseLinkedGroupInfoMixin(
        r.value,
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!i.success) return i;
      var l = o(
        "WASmaxInGroupsGroupAddressingModeMixin",
      ).parseGroupAddressingModeMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { linkedGroupLinkedGroupInfoMixin: a.value },
          i.value,
          { groupAddressingModeMixin: l.success ? l.value : null },
        ),
      );
    }
    l.parseGetLinkedGroupResponseSuccess = e;
  },
  98,
);
