__d(
  "WASmaxOutGroupsGetInviteGroupInfoRequest",
  ["WASmaxJsx", "WASmaxOutGroupsBaseGetServerMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.inviteCode,
        n = o("WASmaxOutGroupsBaseGetServerMixin").mergeBaseGetServerMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax("invite", {
              code: o("WAWap").CUSTOM_STRING(t),
            }),
          ),
        );
      return n;
    }
    l.makeGetInviteGroupInfoRequest = e;
  },
  98,
);
