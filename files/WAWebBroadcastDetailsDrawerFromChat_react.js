__d(
  "WAWebBroadcastDetailsDrawerFromChat.react",
  [
    "WAJids",
    "WAWebBizBroadcastCampaignDataLayer",
    "WAWebBusinessBroadcastDetailsDrawer.react",
    "WAWebDrawerManager",
    "WAWebWamEnumEntryPoint",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.chat,
        a = m(null),
        i = a[0],
        l = a[1],
        u,
        c;
      (t[0] !== n.id
        ? ((u = function () {
            var e = o("WAJids").toBroadcastJid(n.id.toString());
            o("WAWebBizBroadcastCampaignDataLayer")
              .loadBroadcastCampaigns()
              .then(function (t) {
                var n = t.find(function (t) {
                  return t.broadcastJid === e;
                });
                n != null && l(n);
              });
          }),
          (c = [n.id]),
          (t[0] = n.id),
          (t[1] = u),
          (t[2] = c))
        : ((u = t[1]), (c = t[2])),
        d(u, c));
      var p;
      t[3] !== i
        ? ((p = function (t) {
            i != null && l(babelHelpers.extends({}, i, { campaignName: t }));
          }),
          (t[3] = i),
          (t[4] = p))
        : (p = t[4]);
      var _ = p,
        f;
      return (
        t[5] !== i || t[6] !== _
          ? ((f =
              i &&
              s.jsx(r("WAWebBusinessBroadcastDetailsDrawer.react"), {
                entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
                item: i,
                onClose: o("WAWebDrawerManager").closeDrawerRight,
                onRenameSuccess: _,
              })),
            (t[5] = i),
            (t[6] = _),
            (t[7] = f))
          : (f = t[7]),
        f
      );
    }
    l.default = p;
  },
  98,
);
