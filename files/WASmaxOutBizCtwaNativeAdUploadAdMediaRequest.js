__d(
  "WASmaxOutBizCtwaNativeAdUploadAdMediaRequest",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutBizCtwaNativeAdHackBaseIQSetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.mediaId,
        n = e.mediaType,
        r = o("WASmaxJsx").smax("media", {
          id: o("WAWap").CUSTOM_STRING(t),
          type: o("WAWap").CUSTOM_STRING(n),
        });
      return r;
    }
    function s(e) {
      var t = e.mediaListId,
        n = e.mediaListType,
        r = o("WASmaxJsx").smax("media_list", {
          id: o("WAWap").CUSTOM_STRING(t),
          type: o("WAWap").CUSTOM_STRING(n),
        });
      return r;
    }
    function u(t) {
      var n = t.mediaArgs,
        r = t.mediaListArgs,
        a = o(
          "WASmaxOutBizCtwaNativeAdHackBaseIQSetRequestMixin",
        ).mergeHackBaseIQSetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "fb:thrift_iq", smax_id: o("WAWap").INT(74) },
            [o("WASmaxChildren").OPTIONAL_CHILD(e, n)].concat(
              o("WASmaxChildren").REPEATED_CHILD(s, r, 0, 10),
            ),
          ),
          t,
        );
      return a;
    }
    ((l.makeUploadAdMediaRequestMedia = e),
      (l.makeUploadAdMediaRequestMediaList = s),
      (l.makeUploadAdMediaRequest = u));
  },
  98,
);
