__d(
  "WAWebBizAdCertificationDialog.react",
  [
    "fbt",
    "CometRelay",
    "WAWebBizAdCertificationContent.react",
    "WAWebBizAdLogger",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebXIcon.react",
    "WDSButton.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCertifyMutation",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef,
      _ = c.useState,
      f = {
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          paddingTop: "xl7twdi",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          rowGap: "x1f0uite",
          width: "xht4xr3",
          $$css: !0,
        },
        header: { columnGap: "xs2akgl", $$css: !0 },
        footer: { columnGap: "xs2akgl", paddingTop: "x1p57kb1", $$css: !0 },
      },
      g = 10;
    function h(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.adAccountID,
        a = e.loggerContext,
        i = e.onAccept,
        l = e.onClose,
        c = _(!1),
        d = c[0],
        h = c[1],
        y = _(!1),
        C = y[0],
        b = y[1],
        v = p(null),
        S = p(!1),
        R = r("useWAWebBizAdCertifyMutation")(),
        L,
        E;
      (t[0] !== n || t[1] !== a
        ? ((L = function () {
            a != null &&
              !S.current &&
              ((S.current = !0),
              r("WAWebBizAdLogger").log({
                event: "non_discrimination_modal_impression",
                loggerContext: a,
                adAccountID: n,
              }));
          }),
          (E = [n, a]),
          (t[0] = n),
          (t[1] = a),
          (t[2] = L),
          (t[3] = E))
        : ((L = t[2]), (E = t[3])),
        m(L, E));
      var k, I;
      (t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function () {
            var e = v.current;
            if (e != null) {
              var t = e.scrollHeight > e.clientHeight;
              t || b(!0);
            }
          }),
          (I = []),
          (t[4] = k),
          (t[5] = I))
        : ((k = t[4]), (I = t[5])),
        m(k, I));
      var T;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function (t) {
            var e = t.currentTarget,
              n = e.clientHeight,
              r = e.scrollHeight,
              o = e.scrollTop,
              a = o + n >= r - g;
            a && b(!0);
          }),
          (t[6] = T))
        : (T = t[6]);
      var D = T,
        x;
      t[7] !== l
        ? ((x = function () {
            (o("WAWebModalManager").ModalManager.close(), l());
          }),
          (t[7] = l),
          (t[8] = x))
        : (x = t[8]);
      var $ = x,
        P;
      t[9] !== n || t[10] !== R || t[11] !== a || t[12] !== i
        ? ((P = function () {
            (a != null &&
              r("WAWebBizAdLogger").log({
                event: "consent_non_discrimination",
                loggerContext: a,
                adAccountID: n,
              }),
              h(!0),
              R(
                function () {
                  (h(!1), o("WAWebModalManager").ModalManager.close(), i());
                },
                function (e) {
                  h(!1);
                },
              ));
          }),
          (t[9] = n),
          (t[10] = R),
          (t[11] = a),
          (t[12] = i),
          (t[13] = P))
        : (P = t[13]);
      var N = P,
        M;
      t[14] !== $
        ? ((M = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: f.header,
            children: u.jsx(r("WDSButton.react"), {
              Icon: o("WAWebXIcon.react").XIcon,
              onPress: $,
              size: "medium",
              variant: "borderless",
            }),
          })),
          (t[14] = $),
          (t[15] = M))
        : (M = t[15]);
      var w;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = "x114jws4 x1odjw0f"), (t[16] = w))
        : (w = t[16]);
      var A;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = u.jsx("div", {
            className: w,
            onScroll: D,
            ref: v,
            children: u.jsx(r("WAWebBizAdCertificationContent.react"), {}),
          })),
          (t[17] = A))
        : (A = t[17]);
      var F = !C,
        O;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = s._(/*BTDS*/ "I Accept")), (t[18] = O))
        : (O = t[18]);
      var B;
      t[19] !== N || t[20] !== d || t[21] !== F
        ? ((B = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "end",
            xstyle: f.footer,
            children: u.jsx(r("WDSButton.react"), {
              disabled: F,
              label: O,
              loading: d,
              onPress: N,
              size: "medium",
              variant: "filled",
            }),
          })),
          (t[19] = N),
          (t[20] = d),
          (t[21] = F),
          (t[22] = B))
        : (B = t[22]);
      var W;
      return (
        t[23] !== B || t[24] !== M
          ? ((W = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: f.root,
              children: [M, A, B],
            })),
            (t[23] = B),
            (t[24] = M),
            (t[25] = W))
          : (W = t[25]),
        W
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.adAccountID,
        r = e.environment,
        a = e.loggerContext,
        i = e.onAccept,
        l = e.onClose,
        s;
      t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l
        ? ((s = u.jsx(h, {
            adAccountID: n,
            loggerContext: a,
            onAccept: i,
            onClose: l,
          })),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = s))
        : (s = t[4]);
      var c;
      return (
        t[5] !== r || t[6] !== s
          ? ((c = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              type: o("WAWebModal.react").ModalTheme.Auto,
              children: u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                environment: r,
                children: s,
              }),
            })),
            (t[5] = r),
            (t[6] = s),
            (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    l.default = y;
  },
  226,
);
