__d(
  "WAWebStatusLoadingQuoted.react",
  [
    "WAWebBackIcon.react",
    "WAWebLazyLoadLoading.react",
    "WAWebModalManager",
    "WAWebXViewerIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.error,
        n = e.retry,
        a = e.text,
        i = function () {
          return o("WAWebModalManager").ModalManager.closeMedia();
        };
      return s.jsxs("div", {
        className:
          "x10l6tqk x13vifvy x1o0tod x1bpt9pm xh8yej3 x5yr21d x1280gxy",
        "data-animate-status-viewer": !0,
        children: [
          s.jsx("button", {
            className: "x10l6tqk xoyzfg9 x1i4sgur xhtitgo x17t9dm2",
            onClick: i,
            children: s.jsx(o("WAWebXViewerIcon.react").XViewerIcon, {}),
          }),
          s.jsx("button", {
            className: "x10l6tqk xoyzfg9 x18hw5r0 xhtitgo x78zum5 x17t9dm2",
            onClick: i,
            children: s.jsx(o("WAWebBackIcon.react").BackIcon, {
              directional: !0,
            }),
          }),
          s.jsx(r("WAWebLazyLoadLoading.react"), {
            error: t,
            text: a,
            retry: n,
          }),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
