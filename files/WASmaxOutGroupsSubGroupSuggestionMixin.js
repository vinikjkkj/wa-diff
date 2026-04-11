__d(
  "WASmaxOutGroupsSubGroupSuggestionMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsGroupCreatorPhoneNumberMixin",
    "WASmaxOutGroupsSubGroupSuggestionWithoutCreatorMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.subGroupSuggestionCreator,
        n = e.groupCreatorPhoneNumberMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutGroupsGroupCreatorPhoneNumberMixin")
            .mergeGroupCreatorPhoneNumberMixin,
          o(
            "WASmaxOutGroupsSubGroupSuggestionWithoutCreatorMixin",
          ).mergeSubGroupSuggestionWithoutCreatorMixin(
            o("WASmaxJsx").smax("sub_group_suggestion", {
              creator: o("WAWap").USER_JID(t),
            }),
            e,
          ),
          n,
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSubGroupSuggestionMixin = s;
  },
  98,
);
