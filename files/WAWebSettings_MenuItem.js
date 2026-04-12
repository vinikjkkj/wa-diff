__d(
  "WAWebSettings.MenuItem",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDevOnlyBadge.react",
    "WAWebDrawerManager",
    "WAWebMenuItems.react",
    "WAWebSettingsFlowLoadable",
    "WAWebSettingsStepIcon.react",
    "WAWebText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
        o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
          ? { descriptorType: "settings", initialStep: e }
          : s.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
              onEnd: o("WAWebDrawerManager").closeDrawerLeft,
              initialStep: e,
            }),
      );
    }
    function c(e) {
      var t,
        n,
        a,
        i = e.border,
        l = e.isRefresh,
        u = e.onSelect,
        c = e.setting,
        d = e.showIcon,
        m = d
          ? s.jsx(r("WAWebSettingsStepIcon.react"), {
              setting:
                (t = (n = c.parent) == null ? void 0 : n.step) != null
                  ? t
                  : c.step,
            })
          : " ",
        p;
      if (l === !0)
        p =
          (c == null ? void 0 : c.secondaryTitle) != null &&
          (c == null ? void 0 : c.secondaryTitle());
      else {
        var _;
        p = (_ = c.parent) == null ? void 0 : _.title();
      }
      var f =
          c.color != null
            ? s.jsx(o("WAWebText.react").WAWebTextColor, {
                color: c.color,
                children: c.title(),
              })
            : c.title(),
        g = c.color === "critical" ? "negative" : void 0;
      return s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
        optionId: c.id,
        onSelect: u,
        detailLeft: m,
        primary: f,
        secondary: p,
        detailRight:
          c.isDevOnly === !0 &&
          s.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {}),
        testid: void 0,
        border: i,
        isRefresh: l,
        textWrap: "wrap",
        colorScheme: g,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.onSelect,
        n = e.settings,
        r = new Set();
      return n.map(function (e) {
        var n = !1;
        if (e.parent == null || !r.has(e.parent.step)) {
          var o, a;
          ((n = !0),
            r.add(
              (o = (a = e.parent) == null ? void 0 : a.step) != null
                ? o
                : e.step,
            ));
        }
        return s.jsx(
          c,
          {
            setting: e,
            showIcon: n,
            onSelect: function () {
              return t(e);
            },
          },
          e.id,
        );
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.openSettingDrawer = u),
      (l.SettingsMenuItem = c),
      (l.SettingsMenu = d));
  },
  98,
);
