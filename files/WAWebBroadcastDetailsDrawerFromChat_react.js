__d(
  "WAWebBroadcastDetailsDrawerFromChat.react",
  [
    "WAJids",
    "WAWebBizBroadcastCampaignDataLayer",
    "WAWebBusinessBroadcastDetailsDrawer.react",
    "WAWebDrawerManager",
    "WAWebWamEnumEntryPoint",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useState;
    function p(e) {
      var t = e.chat,
        n = m(null),
        a = n[0],
        i = n[1];
      d(
        function () {
          var e = o("WAJids").toBroadcastJid(t.id.toString());
          o("WAWebBizBroadcastCampaignDataLayer")
            .loadBroadcastCampaigns()
            .then(function (t) {
              var n = t.find(function (t) {
                return t.broadcastJid === e;
              });
              n != null && i(n);
            });
        },
        [t.id],
      );
      var l = c(
        function (e) {
          a != null && i(babelHelpers.extends({}, a, { campaignName: e }));
        },
        [a],
      );
      return (
        a &&
        s.jsx(r("WAWebBusinessBroadcastDetailsDrawer.react"), {
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
          item: a,
          onClose: o("WAWebDrawerManager").closeDrawerRight,
          onRenameSuccess: l,
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
