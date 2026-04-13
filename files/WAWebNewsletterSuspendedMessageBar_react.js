__d(
  "WAWebNewsletterSuspendedMessageBar.react",
  [
    "WAWebButton.react",
    "WAWebCommonNewsletterStrings",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebNewsletterDeleteDrawer.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.chat,
        a;
      t[0] !== n
        ? ((a = function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              s.jsx(r("WAWebNewsletterDeleteDrawer.react"), {
                chat: n,
                onCancel: o("WAWebDrawerManager").closeDrawerRight,
              }),
            );
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebCommonNewsletterStrings").getDeleteChannelText()),
          (t[2] = l))
        : (l = t[2]);
      var u;
      if (t[3] !== i) {
        var c = s.jsx(o("WAWebButton.react").WAWebButtonSecondaryDestructive, {
          onClick: i,
          testid: void 0,
          children: l,
        });
        ((u = s.jsx(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          children: c,
        })),
          (t[3] = i),
          (t[4] = u));
      } else u = t[4];
      return u;
    }
    l.default = c;
  },
  98,
);
