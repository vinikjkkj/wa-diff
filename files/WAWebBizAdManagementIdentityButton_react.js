__d(
  "WAWebBizAdManagementIdentityButton.react",
  [
    "fbt",
    "CometRelay",
    "WAWebBizAdCreationIdentityProfileImage.react",
    "WAWebBizAdManagementIdentityButton_facebookProfile.graphql",
    "WAWebBizNativeAdsIdentityLogger",
    "WAWebWamEnumLwiScreenAction",
    "WDSFocusStateStyles",
    "react",
    "stylex",
    "useWAWebBizAdCreationIdentityContext",
    "useWAWebBizAdCreationIdentitySelectionMenu.react",
    "useWAWebNativeAdsFlowIDContext",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useRef,
      f = {
        clickable: {
          cursor: "x1ypdohk",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          width: "x100vrsf",
          height: "x1vqgdyp",
          $$css: !0,
        },
      },
      g =
        e !== void 0
          ? e
          : (e = n(
              "WAWebBizAdManagementIdentityButton_facebookProfile.graphql",
            ));
    function h(e) {
      var t = e.facebookProfileRef,
        n = t === void 0 ? null : t,
        a = o("CometRelay").useFragment(g, n),
        i = r("useWAWebBizAdCreationIdentityContext")(),
        l = r("useWAWebNativeAdsFlowIDContext")(),
        c = p(
          function () {
            var e = i != null ? i : {},
              t = e.accountType,
              n = e.hasLinkedFbPage,
              r = e.isWAAEligible;
            o("WAWebBizNativeAdsIdentityLogger").logManageAdsIdentityEvent(
              o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                .LWI_ACTION_VIEW,
              t,
              r != null ? r : !1,
              n != null ? n : !1,
              l.manageAdsFlowID,
            );
          },
          [i, l.manageAdsFlowID],
        ),
        m = r("useWAWebBizAdCreationIdentitySelectionMenu.react")(!1, c),
        h = m.menuContent,
        y = m.onMenuOpen,
        C = _(null),
        b = r("useWDSMenu")({ targetRef: C, menu: h, dismissable: !0 }),
        v = b.menuPortal,
        S = b.openMenu,
        R = p(
          function () {
            (y(), S());
          },
          [y, S],
        );
      return d.jsxs(
        "div",
        babelHelpers.extends(
          {
            ref: C,
            onClick: R,
            role: "button",
            tabIndex: 0,
            onKeyDown: function (t) {
              (t.key === "Enter" || t.key === " ") && (t.preventDefault(), R());
            },
            "aria-label": String(s._(/*BTDS*/ "Account options")),
          },
          (u || (u = r("stylex"))).props(
            f.clickable,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          ),
          {
            children: [
              d.jsx("div", {
                className:
                  "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x6ikm8r x10wlt62 x100vrsf x1vqgdyp",
                children: d.jsx(
                  r("WAWebBizAdCreationIdentityProfileImage.react"),
                  { facebookProfileRef: a, size: 40 },
                ),
              }),
              v,
            ],
          },
        ),
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
