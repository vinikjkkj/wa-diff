__d(
  "WASmaxOutBizLinkingGetAccountNonceRequest",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutBizLinkingHackBaseIQGetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.identifierScope,
        n = o("WASmaxJsx").smax("identifier", {
          scope: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t) {
      var n = t.identifierArgs,
        r = o(
          "WASmaxOutBizLinkingHackBaseIQGetRequestMixin",
        ).mergeHackBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "fb:thrift_iq", smax_id: o("WAWap").INT(12) },
            o("WASmaxChildren").OPTIONAL_CHILD(e, n),
          ),
          t,
        );
      return r;
    }
    ((l.makeGetAccountNonceRequestIdentifier = e),
      (l.makeGetAccountNonceRequest = s));
  },
  98,
);
