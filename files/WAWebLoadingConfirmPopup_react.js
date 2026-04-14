__d(
  "WAWebLoadingConfirmPopup.react",
  [
    "WAWebConfirmPopup.react",
    "WAWebLazyLoadLoading.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.error,
        n = e.okText,
        a = e.title,
        i = function () {};
      return s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "loading-confirm" },
        title: a,
        onOK: i,
        okText: n,
        okDisabled: !0,
        onCancel: o("WAWebModalManager").closeModalManager,
        children: s.jsx("div", {
          className: "x1n2onr6 x1vd4hg5",
          children: s.jsx(r("WAWebLazyLoadLoading.react"), { error: t }),
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
