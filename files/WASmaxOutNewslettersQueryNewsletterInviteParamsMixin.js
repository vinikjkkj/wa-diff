__d(
  "WASmaxOutNewslettersQueryNewsletterInviteParamsMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.anyKey,
        n = e.anyViewRole,
        r = o("WASmaxJsx").smax("smax$any", {
          type: "invite",
          key: o("WAWap").CUSTOM_STRING(t),
          view_role: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
        });
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeQueryNewsletterInviteParamsMixin = s;
  },
  98,
);
