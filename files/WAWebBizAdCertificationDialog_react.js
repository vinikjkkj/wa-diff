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
      var t = e.adAccountID,
        n = e.loggerContext,
        a = e.onAccept,
        i = e.onClose,
        l = _(!1),
        c = l[0],
        h = l[1],
        y = _(!1),
        C = y[0],
        b = y[1],
        v = p(null),
        S = p(!1),
        R = r("useWAWebBizAdCertifyMutation")();
      (m(
        function () {
          n != null &&
            !S.current &&
            ((S.current = !0),
            r("WAWebBizAdLogger").log({
              event: "non_discrimination_modal_impression",
              loggerContext: n,
              adAccountID: t,
            }));
        },
        [t, n],
      ),
        m(function () {
          var e = v.current;
          if (e != null) {
            var t = e.scrollHeight > e.clientHeight;
            t || b(!0);
          }
        }, []));
      var L = d(function (e) {
          var t = e.currentTarget,
            n = t.clientHeight,
            r = t.scrollHeight,
            o = t.scrollTop,
            a = o + n >= r - g;
          a && b(!0);
        }, []),
        E = function () {
          (o("WAWebModalManager").ModalManager.close(), i());
        },
        k = function () {
          (n != null &&
            r("WAWebBizAdLogger").log({
              event: "consent_non_discrimination",
              loggerContext: n,
              adAccountID: t,
            }),
            h(!0),
            R(
              function () {
                (h(!1), o("WAWebModalManager").ModalManager.close(), a());
              },
              function (e) {
                h(!1);
              },
            ));
        };
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        xstyle: f.root,
        children: [
          u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: f.header,
            children: u.jsx(r("WDSButton.react"), {
              Icon: o("WAWebXIcon.react").XIcon,
              onPress: E,
              size: "medium",
              variant: "borderless",
            }),
          }),
          u.jsx("div", {
            className: "x114jws4 x1odjw0f",
            onScroll: L,
            ref: v,
            children: u.jsx(r("WAWebBizAdCertificationContent.react"), {}),
          }),
          u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "end",
            xstyle: f.footer,
            children: u.jsx(r("WDSButton.react"), {
              disabled: !C,
              label: s._(/*BTDS*/ "I Accept"),
              loading: c,
              onPress: k,
              size: "medium",
              variant: "filled",
            }),
          }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.adAccountID,
        n = e.environment,
        r = e.loggerContext,
        a = e.onAccept,
        i = e.onClose;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        type: o("WAWebModal.react").ModalTheme.Auto,
        children: u.jsx(o("CometRelay").RelayEnvironmentProvider, {
          environment: n,
          children: u.jsx(h, {
            adAccountID: t,
            loggerContext: r,
            onAccept: a,
            onClose: i,
          }),
        }),
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
