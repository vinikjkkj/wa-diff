__d(
  "WAWebOpenNotificationsSetting",
  [
    "WALogger",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebDrawerManagerGlobalContext",
    "WAWebKeyboardTabUtils",
    "WAWebNotificationsFlowLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = !1;
    function d() {
      var e,
        t,
        n = new URLSearchParams(
          ((e = window.location.search) != null ? e : "").toLowerCase(),
        ),
        r = ((t = n.get("ns")) != null ? t : "") === "1";
      ((r || c) && ((c = !1), p()),
        r && window.history.pushState({}, "", window.location.origin));
    }
    function m() {
      if (
        o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("left") ==
        null
      ) {
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "requestOpenNotificationsSettings: left drawer not ready, opening when the main screen mounts",
            ])),
        ),
          (c = !0));
        return;
      }
      p();
    }
    function p() {
      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
        o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
          ? { descriptorType: "notifications" }
          : u.jsx(
              o("WAWebNotificationsFlowLoadable").NotificationsFlowLoadable,
              { onEnd: o("WAWebDrawerManager").closeDrawerLeft },
            ),
        {
          focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
          transition: "pop-drawer-fast",
        },
      );
    }
    ((l.handleOpenNotificationsSettingDeeplink = d),
      (l.requestOpenNotificationsSettings = m));
  },
  98,
);
