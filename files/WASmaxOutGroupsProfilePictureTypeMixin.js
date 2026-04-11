__d(
  "WASmaxOutGroupsProfilePictureTypeMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.pictureType,
        n = o("WASmaxJsx").smax("picture", {
          type: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeProfilePictureTypeMixin = s;
  },
  98,
);
