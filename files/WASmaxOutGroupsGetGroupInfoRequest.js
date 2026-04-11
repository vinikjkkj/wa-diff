__d(
  "WASmaxOutGroupsGetGroupInfoRequest",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsAddRequestMixin",
    "WASmaxOutGroupsBaseGetGroupMixin",
    "WASmaxOutGroupsCodeMixin",
    "WASmaxOutGroupsGetGroupInfoRequestTypeMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.addRequestExpiration,
        n = o("WASmaxOutGroupsCodeMixin").mergeCodeMixin(
          o("WASmaxOutGroupsAddRequestMixin").mergeAddRequestMixin(
            o("WASmaxJsx").smax("add_request", {
              expiration: o("WAWap").INT(t),
            }),
            e,
          ),
          e,
        );
      return n;
    }
    function s(t) {
      var n = t.addRequestArgs,
        r = t.queryPhash,
        a = t.getGroupInfoRequestTypeMixinArgs,
        i = o("WASmaxOutGroupsBaseGetGroupMixin").mergeBaseGetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutGroupsGetGroupInfoRequestTypeMixin")
                .mergeGetGroupInfoRequestTypeMixin,
              o("WASmaxJsx").smax(
                "query",
                {
                  phash: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
                },
                o("WASmaxChildren").OPTIONAL_CHILD(e, n),
              ),
              a,
            ),
          ),
          t,
        );
      return i;
    }
    ((l.makeGetGroupInfoRequestQueryAddRequest = e),
      (l.makeGetGroupInfoRequest = s));
  },
  98,
);
