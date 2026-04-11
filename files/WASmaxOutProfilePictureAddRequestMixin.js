__d(
  "WASmaxOutProfilePictureAddRequestMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.addRequestCode,
        n = e.addRequestAdmin,
        r = e.addRequestExpiration,
        a = o("WASmaxJsx").smax(
          "picture",
          null,
          o("WASmaxJsx").smax("add_request", {
            code: o("WAWap").CUSTOM_STRING(t),
            admin: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, n),
            expiration: o("WAWap").INT(r),
          }),
        );
      return a;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeAddRequestMixin = s;
  },
  98,
);
