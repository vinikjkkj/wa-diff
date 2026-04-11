__d(
  "WAWebHardRefreshModal.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebDialogEventLogger",
    "WAWebFbtCommon",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebUpdater",
    "WAWebWamEnumDialogNameType",
    "WDSButtonGroup.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = n("$InternalEnum")({ DISMISS: "dismiss", REFRESH: "refresh" });
    function d() {
      (r("WAWebDialogEventLogger")({
        dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE
          .HARD_REFRESH,
        source: c.REFRESH,
      }),
        o("WAWebUpdater").Updater.restart());
    }
    var m = function () {
      (r("WAWebDialogEventLogger")({
        dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE
          .HARD_REFRESH,
        source: c.DISMISS,
      }),
        o("WAWebModalManager").ModalManager.close());
    };
    function p() {
      return u.jsx(o("WAWebModal.react").Modal, {
        onOverlayClick: m,
        type: o("WAWebModal.react").ModalTheme.HardRefresh,
        title: u.jsx(r("WDSText.react"), {
          colorName: "contentDefault",
          type: "Headline1",
          children: s._(/*BTDS*/ "WhatsApp will refresh in 1 min"),
        }),
        actions: u.jsx(r("WDSButtonGroup.react"), {
          orientation: "horizontal",
          width: "hug",
          primaryButtonProps: {
            variant: "filled",
            type: "default",
            onPress: d,
            testid: "popup-controls-refresh",
            label: s._(/*BTDS*/ "Refresh now"),
          },
          tertiaryButtonProps: {
            variant: "borderless",
            type: "default",
            onPress: m,
            testid: "popup-controls-ok",
            label: r("WAWebFbtCommon")("OK"),
          },
        }),
        children: u.jsx(r("WDSText.react"), {
          type: "Body1",
          colorName: "contentDeemphasized",
          children: s._(
            /*BTDS*/ "WhatsApp will automatically refresh to update to a new version.",
          ),
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
