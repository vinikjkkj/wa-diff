__d(
  "WASmaxInBizLinkingFBPageResponseBaseMixin",
  [
    "WAResultOrError",
    "WASmaxInBizLinkingAdStatusMixin",
    "WASmaxInBizLinkingEnums",
    "WASmaxInBizLinkingHasDisplayNameMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "profile_sync");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "state",
        o("WASmaxInBizLinkingEnums").ENUM_DISABLE_IMPORT,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ state: n.value })
        : n;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "fb_page");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "profile_sync", e);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(t, "id");
      if (!a.success) return a;
      var i = o(
        "WASmaxInBizLinkingHasDisplayNameMixin",
      ).parseHasDisplayNameMixin(t);
      if (!i.success) return i;
      var l = o("WASmaxInBizLinkingAdStatusMixin").parseAdStatusMixin(t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ id: a.value }, i.value, l.value, {
              profileSync: r.value,
            }),
          )
        : l;
    }
    ((l.parseFBPageResponseBaseProfileSync = e),
      (l.parseFBPageResponseBaseMixin = s));
  },
  98,
);
