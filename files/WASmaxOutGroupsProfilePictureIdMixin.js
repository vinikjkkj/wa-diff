__d(
  "WASmaxOutGroupsProfilePictureIdMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.pictureId,
        n = o("WASmaxJsx").smax("picture", { id: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeProfilePictureIdMixin = s;
  },
  98,
);
