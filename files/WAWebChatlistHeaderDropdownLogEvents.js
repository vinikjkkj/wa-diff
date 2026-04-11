__d(
  "WAWebChatlistHeaderDropdownLogEvents",
  ["WAWebWamEnumWebcMenuType", "WAWebWebcMenuWamEvent"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = new (o("WAWebWebcMenuWamEvent").WebcMenuWamEvent)({
        webcMenuAction: o("WAWebWamEnumWebcMenuType").WEBC_MENU_TYPE
          .THREADS_SCREEN_CLICK,
        webcMenuItemLabel: e,
      });
      t.commit();
    }
    l.logMenuEvent = e;
  },
  98,
);
