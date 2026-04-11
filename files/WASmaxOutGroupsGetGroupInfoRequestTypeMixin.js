__d(
  "WASmaxOutGroupsGetGroupInfoRequestTypeMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsGetGroupInfoRequestTypeAttributeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutGroupsGetGroupInfoRequestTypeAttributeMixin",
      ).mergeGetGroupInfoRequestTypeAttributeMixin(
        o("WASmaxJsx").smax("query", null),
        e,
      );
      return t;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeGetGroupInfoRequestTypeMixin = s;
  },
  98,
);
