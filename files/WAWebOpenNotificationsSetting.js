__d(
  "WAWebOpenNotificationsSetting",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebNotificationsFlow.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e,
        t,
        n = new URLSearchParams(
          ((e = window.location.search) != null ? e : "").toLowerCase(),
        ),
        r = ((t = n.get("ns")) != null ? t : "") === "1";
      r &&
        (o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "notifications" }
            : s.jsx(o("WAWebNotificationsFlow.react").NotificationsFlow, {
                onEnd: o("WAWebDrawerManager").closeDrawerLeft,
              }),
          {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            transition: "pop-drawer-fast",
          },
        ),
        window.history.pushState({}, "", window.location.origin));
    }
    l.handleOpenNotificationsSettingDeeplink = u;
  },
  98,
);
