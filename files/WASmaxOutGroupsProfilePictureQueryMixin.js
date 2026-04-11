__d(
  "WASmaxOutGroupsProfilePictureQueryMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.pictureQuery,
        n = o("WASmaxJsx").smax("picture", {
          query: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeProfilePictureQueryMixin = s;
  },
  98,
);
