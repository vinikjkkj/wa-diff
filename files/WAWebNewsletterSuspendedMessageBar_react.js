__d(
  "WAWebNewsletterSuspendedMessageBar.react",
  [
    "WAWebButton.react",
    "WAWebCommonNewsletterStrings",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebNewsletterDeleteDrawer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = e.chat,
        n = u(
          function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              s.jsx(r("WAWebNewsletterDeleteDrawer.react"), {
                chat: t,
                onCancel: o("WAWebDrawerManager").closeDrawerRight,
              }),
            );
          },
          [t],
        ),
        a = s.jsx(o("WAWebButton.react").WAWebButtonSecondaryDestructive, {
          onClick: n,
          testid: void 0,
          children: o("WAWebCommonNewsletterStrings").getDeleteChannelText(),
        });
      return s.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        children: a,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
