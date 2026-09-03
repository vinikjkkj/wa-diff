__d(
  "WAWebBizBroadcastProDownloadProgressCardLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadLoading.react",
    "WAWebModalLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebModalLoadable")(
        r("JSResourceForInteraction")(
          "WAWebBizBroadcastProDownloadProgressCard.react",
        ).__setRef("WAWebBizBroadcastProDownloadProgressCardLoadable"),
        "BizBroadcastProDownloadProgressCard",
        c,
      );
    function c(e) {
      var t = !!e.error;
      return t
        ? s.jsx(s.Fragment, {})
        : s.jsx("div", {
            "data-testid": "bb_pro_download_progress_card_loading",
            className: "x10sdc74 x1n2onr6 xauvat3",
            children: s.jsx(r("WAWebLazyLoadLoading.react"), { error: !1 }),
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.WAWebBizBroadcastProDownloadProgressCardLoadable = u));
  },
  98,
);
