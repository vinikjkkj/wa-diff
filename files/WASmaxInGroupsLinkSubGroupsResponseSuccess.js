__d(
  "WASmaxInGroupsLinkSubGroupsResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsLinkSubGroupsSuccessIqLinksLinkGroupMixinGroup",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "403",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ jid: n.value, error: r.value })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "group");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChild(t, "hidden_group");
      if (!r.success) return r;
      var a = o("WASmaxParseJid").attrGroupJid(t, "jid");
      if (!a.success) return a;
      var i = o(
          "WASmaxInGroupsLinkSubGroupsSuccessIqLinksLinkGroupMixinGroup",
        ).parseLinkSubGroupsSuccessIqLinksLinkGroupMixinGroup(t),
        l = o("WASmaxParseUtils").mapChildrenWithTag(
          t,
          "participant",
          0,
          19999,
          e,
        );
      return l.success
        ? o("WAResultOrError").makeResult({
            jid: a.value,
            linkSubGroupsSuccessIqLinksLinkGroupMixinGroup: i.success
              ? i.value
              : null,
            hasHiddenGroup: r.value != null,
            participant: l.value,
          })
        : l;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "links");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "link");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        a.value,
        "link_type",
        "sub_group",
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!l.success) return l;
      var u = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        c = o("WASmaxParseUtils").mapChildrenWithTag(
          a.value,
          "group",
          1,
          1e3,
          s,
        );
      return c.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ linksLinkLinkType: i.value }, l.value, {
              groupAddressingModeMixin: u.success ? u.value : null,
              linksLinkGroup: c.value,
            }),
          )
        : c;
    }
    ((l.parseLinkSubGroupsResponseSuccessLinksLinkGroupParticipant = e),
      (l.parseLinkSubGroupsResponseSuccessLinksLinkGroup = s),
      (l.parseLinkSubGroupsResponseSuccess = u));
  },
  98,
);
