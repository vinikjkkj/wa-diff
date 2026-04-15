__d(
  "WAWebWamoSubManagementWarningPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      return (
        r("vulture")("QFgBF9uj75TwXx8k1DdN2ToV148="),
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: o("WAWebModalManager").closeModalManager,
          okText: r("WAWebFbtCommon")("OK"),
          children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
            children: [
              u.jsx(o("WAWebText.react").WAWebTextLargeRefreshed, {
                xstyle: o("WAWebUISpacing").uiMargin.bottom10,
                children: s._(
                  /*BTDS*/ "Manage subscription from primary device",
                ),
              }),
              u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
                children: s._(
                  /*BTDS*/ "You subscribed to this channel from a different device. You can manage your subscription or unfollow this channel from your primary device.",
                ),
              }),
            ],
          }),
        })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.WamoSubManagementWarningPopup = c));
  },
  226,
);
