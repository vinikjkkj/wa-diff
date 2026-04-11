__d(
  "WASmaxOutPrivacyGetContactBlacklistGetContactBlacklistPNMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPrivacyCategoryNamesForContactBlacklistMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.categoryNamesForContactBlacklistMixinArgs,
        n = o("WASmaxJsx").smax(
          "privacy",
          null,
          o(
            "WASmaxOutPrivacyCategoryNamesForContactBlacklistMixin",
          ).mergeCategoryNamesForContactBlacklistMixin(
            o("WASmaxJsx").smax("list", { value: "contact_blacklist" }),
            t,
          ),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeGetContactBlacklistGetContactBlacklistPNMixin = s;
  },
  98,
);
