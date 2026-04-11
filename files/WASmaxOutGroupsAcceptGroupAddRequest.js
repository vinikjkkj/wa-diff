__d(
  "WASmaxOutGroupsAcceptGroupAddRequest",
  ["WASmaxJsx", "WASmaxOutGroupsBaseSetGroupMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.acceptCode,
        n = e.acceptExpiration,
        r = e.acceptAdmin,
        a = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax("accept", {
              code: o("WAWap").CUSTOM_STRING(t),
              expiration: o("WAWap").INT(n),
              admin: o("WAWap").USER_JID(r),
            }),
          ),
          e,
        );
      return a;
    }
    l.makeAcceptGroupAddRequest = e;
  },
  98,
);
