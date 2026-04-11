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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(20),
        n = e.facebookProfileRef,
        a = n === void 0 ? null : n,
        i = o("CometRelay").useFragment(g, a),
        l = r("useWAWebBizAdCreationIdentityContext")(),
        c = r("useWAWebNativeAdsFlowIDContext")(),
        m;
      t[0] !== c.manageAdsFlowID || t[1] !== l
        ? ((m = function () {
            var e = l != null ? l : {},
              t = e.accountType,
              n = e.hasLinkedFbPage,
              r = e.isWAAEligible;
            o("WAWebBizNativeAdsIdentityLogger").logManageAdsIdentityEvent(
              o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                .LWI_ACTION_VIEW,
              t,
              r != null ? r : !1,
              n != null ? n : !1,
              c.manageAdsFlowID,
            );
          }),
          (t[0] = c.manageAdsFlowID),
          (t[1] = l),
          (t[2] = m))
        : (m = t[2]);
      var p = m,
        h = r("useWAWebBizAdCreationIdentitySelectionMenu.react")(!1, p),
        y = h.menuContent,
        C = h.onMenuOpen,
        b = _(null),
        v;
      t[3] !== y
        ? ((v = { targetRef: b, menu: y, dismissable: !0 }),
          (t[3] = y),
          (t[4] = v))
        : (v = t[4]);
      var S = r("useWDSMenu")(v),
        R = S.menuPortal,
        L = S.openMenu,
        E;
      t[5] !== C || t[6] !== L
        ? ((E = function () {
            (C(), L());
          }),
          (t[5] = C),
          (t[6] = L),
          (t[7] = E))
        : (E = t[7]);
      var k = E,
        I;
      t[8] !== k
        ? ((I = function (t) {
            (t.key === "Enter" || t.key === " ") && (t.preventDefault(), k());
          }),
          (t[8] = k),
          (t[9] = I))
        : (I = t[9]);
      var T;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s._(/*BTDS*/ "Account options")), (t[10] = T))
        : (T = t[10]);
      var D = String(T),
        x,
        $;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = (u || (u = r("stylex"))).props(
            f.clickable,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          )),
          ($ = {
            className:
              "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x6ikm8r x10wlt62 x100vrsf x1vqgdyp",
          }),
          (t[11] = x),
          (t[12] = $))
        : ((x = t[11]), ($ = t[12]));
      var P;
      t[13] !== i
        ? ((P = d.jsx(
            "div",
            babelHelpers.extends({}, $, {
              children: d.jsx(
                r("WAWebBizAdCreationIdentityProfileImage.react"),
                { facebookProfileRef: i, size: 40 },
              ),
            }),
          )),
          (t[13] = i),
          (t[14] = P))
        : (P = t[14]);
      var N;
      return (
        t[15] !== k || t[16] !== R || t[17] !== P || t[18] !== I
          ? ((N = d.jsxs(
              "div",
              babelHelpers.extends(
                {
                  ref: b,
                  onClick: k,
                  role: "button",
                  tabIndex: 0,
                  onKeyDown: I,
                  "aria-label": D,
                },
                x,
                { children: [P, R] },
              ),
            )),
            (t[15] = k),
            (t[16] = R),
            (t[17] = P),
            (t[18] = I),
            (t[19] = N))
          : (N = t[19]),
        N
      );
    }
    l.default = h;
  },
  226,
);
