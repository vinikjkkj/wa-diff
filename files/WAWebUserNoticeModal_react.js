__d(
  "WAWebUserNoticeModal.react",
  [
    "cx",
    "WALogger",
    "WAWebAlertNoticeIcon.react",
    "WAWebButton.react",
    "WAWebConnModel",
    "WAWebDomSanitize",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNoticeModel",
    "WAWebPDFNLogging",
    "WAWebSocketModel",
    "WAWebText.react",
    "WAWebThemeContext",
    "WAWebWamEnumUserNoticeEvent",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebModelValues",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useEffect,
      _ = d.useState,
      f = function () {};
    function g(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.btn,
        a = e.onClick,
        i = e.primary,
        l = i === void 0 ? !1 : i;
      if ((r("vulture")("uWZEmAvc4naYpmaXHBE6X1DSDtI="), n == null))
        return null;
      var s = "UserNoticeModalPopup-" + n.action + "Btn",
        u = "popup-controls-" + n.action,
        d = l ? "primary" : "secondary",
        m;
      return (
        t[0] !== n.label || t[1] !== s || t[2] !== a || t[3] !== d || t[4] !== u
          ? ((m = c.jsx(
              o("WAWebButton.react").Button,
              { testid: void 0, type: d, onClick: a, children: n.label },
              s,
            )),
            (t[0] = n.label),
            (t[1] = s),
            (t[2] = a),
            (t[3] = d),
            (t[4] = u),
            (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    function h(t) {
      var n = t.notice;
      r("vulture")("t5LxBqm1BDH3qEDaR9-gEEnERk0=");
      var a = o("useWAWebModelValues").useModelValues(n, [
          "noticeId",
          "blocking",
          "blockingModal",
        ]),
        i = m(o("WAWebThemeContext").ThemeContext),
        l = a.blockingModal,
        s = _(!1),
        u = s[0],
        d = s[1],
        h = function () {
          r("WAWebNoticeModel").blocking ||
            o("WAWebModalManager").ModalManager.close();
        };
      o("useWAWebListener").useListener(
        r("WAWebNoticeModel"),
        "change:blocking",
        h,
      );
      var y = function () {
          return (
            r("WAWebNoticeModel").noticeId != null &&
            r("WAWebNoticeModel").blockingModal != null &&
            r("WAWebNoticeModel").blocking === !0
          );
        },
        C = function () {
          y() &&
            (u ||
              (o("WAWebPDFNLogging").logUserNoticeEvent({
                noticeId: r("WAWebNoticeModel").noticeId,
                noticeContentVersion: r("WAWebNoticeModel").policyVersion,
                noticeEvent: o("WAWebWamEnumUserNoticeEvent").USER_NOTICE_EVENT
                  .BLOCKING_MODAL_APPEAR,
              }),
              d(!0)));
        },
        b = function () {
          d(!1);
        };
      (o("useWAWebListener").useListener(
        r("WAWebNoticeModel"),
        "change:noticeId",
        b,
      ),
        o("useWAWebListener").useListener(
          r("WAWebNoticeModel"),
          "change:blockingModal change:blocking",
          C,
        ),
        p(function () {
          C();
        }, []));
      var v = function () {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "user notice modal, user clicked logout",
              ])),
          ),
            o("WAWebModalManager").ModalManager.close(),
            o("WAWebSocketModel").Socket.logout());
        },
        S = function () {
          location.reload();
        },
        R = function (t) {
          if (t) {
            if (t.action === "logout") return v;
            if (t.action === "refresh") return S;
          }
          return f;
        };
      if (!l || !y()) return null;
      var L = l.body,
        E = l.iconDescription,
        k = E === void 0 ? "" : E,
        I = l.iconSvg,
        T = l.primaryButton,
        D = l.secondaryButton,
        x = l.title,
        $;
      I && ($ = i.theme === "light" ? I.light : I.dark);
      var P = c.jsx(o("WAWebAlertNoticeIcon.react").AlertNoticeIcon, {
          "aria-label": k,
        }),
        N = $ && o("WAWebDomSanitize").sanitizeNoticeSVG($),
        M = N
          ? c.jsx("span", {
              "aria-label": k,
              dangerouslySetInnerHTML: { __html: N },
            })
          : P,
        w = c.jsx(g, { btn: D, onClick: R(D) }),
        A = c.jsx(g, { btn: T, primary: !0, onClick: R(T) }),
        F = [w, A],
        O = { enter: R(T) },
        B = x ? o("WAWebDomSanitize").sanitizeNoticeText(x) : null,
        W = L ? o("WAWebDomSanitize").sanitizeNoticeText(L) : null;
      return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: O,
        children: c.jsx("div", {
          className: o("WAWebConnModel").Conn.isSMB ? "_alz9" : "_alza",
          children: c.jsx(o("WAWebModal.react").Modal, {
            actions: F,
            type: o("WAWebModal.react").ModalTheme.Flex,
            children: c.jsxs("div", {
              className: "x1htk8sl xrlsmeg",
              children: [
                c.jsx(o("WAWebFlex.react").FlexRow, {
                  className: "_alz7",
                  align: "center",
                  justify: "center",
                  children: M,
                }),
                c.jsx(o("WAWebText.react").WAWebTextLarge, {
                  margin: [32, 32, 0, 32],
                  textAlign: "center",
                  children: c.jsx("div", {
                    dangerouslySetInnerHTML: { __html: B },
                  }),
                }),
                c.jsx(o("WAWebText.react").WAWebTextMuted, {
                  color: "white",
                  margin: 32,
                  children: c.jsx("div", {
                    dangerouslySetInnerHTML: { __html: W },
                  }),
                }),
              ],
            }),
          }),
        }),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
