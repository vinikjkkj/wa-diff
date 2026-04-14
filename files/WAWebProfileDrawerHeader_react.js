__d(
  "WAWebProfileDrawerHeader.react",
  [
    "WAWebBizGatingUtils",
    "WAWebBusinessProfileLabels",
    "WAWebCloseRefreshedIcon.react",
    "WAWebDrawerManager",
    "WDSButton.react",
    "WDSIconIcVisibility.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        title: { flexGrow: "x1iyjqo2", $$css: !0 },
        buttonPreview: { width: "x2pejg6", $$css: !0 },
        buttonSave: { width: "x2pejg6", $$css: !0 },
      };
    function c(e) {
      var t = e.hasChanges,
        n = t === void 0 ? !1 : t,
        a = e.isSaving,
        i = a === void 0 ? !1 : a,
        l = e.onClose,
        c = e.onSave,
        d = e.saveDisabled,
        m = d === void 0 ? !1 : d,
        p = e.title,
        _ = function () {
          l ? l() : o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
        },
        f = function () {
          c && c();
        },
        g =
          p != null
            ? p
            : o("WAWebBusinessProfileLabels").getProfileTitleLabel(),
        h = o("WAWebBusinessProfileLabels").getPreviewButtonLabel(),
        y = o("WAWebBusinessProfileLabels").getSaveButtonLabel(),
        C = o("WAWebBizGatingUtils").businessProfilePreviewEnabled();
      return s.jsxs("header", {
        className:
          "x6s0dn4 xw6alqk x1o4lnc x1t7ytsu xpilrb4 x9f619 x78zum5 x1okw0bk x8a3fw1 x1aj3ljl x1peatla x1iw51ew xde1mab xh8yej3",
        "data-testid": void 0,
        children: [
          s.jsx(r("WDSButton.react"), {
            size: "medium",
            variant: "borderless",
            Icon: o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon,
            onPress: _,
          }),
          s.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            xstyle: u.title,
            children: g,
          }),
          C &&
            s.jsx(r("WDSButton.react"), {
              Icon: r("WDSIconIcVisibility.react"),
              label: h,
              variant: "outline",
              xstyle: u.buttonPreview,
            }),
          s.jsx(r("WDSButton.react"), {
            label: y,
            xstyle: u.buttonSave,
            onPress: f,
            disabled: !n || i || m,
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
