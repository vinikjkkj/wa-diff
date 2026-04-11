__d(
  "WASmaxOutProfilePictureGetIQMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutProfilePictureServerDomainIQMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.iqTarget,
        n = o(
          "WASmaxOutProfilePictureServerDomainIQMixin",
        ).mergeServerDomainIQMixin(
          o("WASmaxJsx").smax("iq", { target: o("WAWap").JID(t) }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeGetIQMixin = s;
  },
  98,
);
