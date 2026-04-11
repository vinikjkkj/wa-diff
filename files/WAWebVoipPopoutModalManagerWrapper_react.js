__d(
  "WAWebVoipPopoutModalManagerWrapper.react",
  [
    "WALogger",
    "WAUpperFirst",
    "WAWebFocusTracer",
    "WAWebKeyboardRotateFocusModal.react",
    "WAWebKeyboardTabUtils",
    "WAWebPopover.react",
    "WAWebUimContext",
    "WAWebUimUie.react",
    "WAWebVelocityTransitionGroup",
    "WAWebVoipDarkThemeRoot.react",
    "WAWebVoipFullScreenContext",
    "WAWebVoipPopoutModalManager",
    "WAWebVoipUiPopoutWindowContext",
    "react",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.cloneElement,
      p = d.useCallback,
      _ = d.useContext,
      f = d.useRef,
      g = d.useState,
      h = { DEFAULT: "modal", NONE: "none" },
      y = "modal",
      C = "support",
      b = "media";
    function v(t) {
      var n,
        a = t.contextMenuRef,
        i = t.popoverPortalId,
        l = t.type,
        u = _(r("WAWebVoipUiPopoutWindowContext")),
        d = _(r("WAWebVoipFullScreenContext")),
        C = d.isFullScreen,
        b = (n = u.documentEl) != null ? n : document,
        v = f(null),
        S = f(!1),
        R = f(null),
        L = g(),
        E = L[0],
        k = L[1],
        I = r("useWAWebIsKeyboardUser")(),
        T = I.isKeyboardUser,
        D = g(void 0),
        x = D[0],
        $ = D[1],
        P = g(null),
        N = P[0],
        M = P[1],
        w = g({ type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE }),
        A = w[0],
        F = w[1],
        O = g(h.DEFAULT),
        B = O[0],
        W = O[1],
        q = g(void 0),
        U = q[0],
        V = q[1],
        H = g(!1),
        G = H[0],
        z = H[1],
        j = function () {
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[VoipPopoutModalManager] requestFocus called ",
                  "",
                ])),
              l,
            ),
            !!v.current)
          ) {
            var t = v.current.getElement();
            !t || t.contains(b.activeElement) || r("WAWebFocusTracer").focus(t);
          }
        },
        K = function () {
          if (v.current) {
            var e = v.current.getElement();
            e && r("WAWebFocusTracer").focus(e);
          }
        },
        Q = function (t) {
          var e,
            n = i != null ? i : o("WAWebPopover.react").ANCHOR_PORTAL_ID;
          return (e = b.getElementById(n)) == null ? void 0 : e.contains(t);
        },
        X = function (t) {
          var e = t.relatedTarget,
            n = a == null ? void 0 : a.current,
            r = n ? n.isOpen() : !1;
          return E != null
            ? E
            : (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[VoipPopoutModalManager] forceShouldRequestFocus=null",
                  ])),
              ),
              e instanceof HTMLElement &&
                !t.currentTarget.contains(e) &&
                !Q(e) &&
                !r &&
                S.current === !1);
        },
        Y = function (t) {
          X(t) && j();
        },
        J = function (t, n) {
          var e;
          (n === void 0 && (n = {}),
            (R.current = T ? b.activeElement || b.body : null));
          var r = n.transition || h.DEFAULT,
            a =
              (e = n.focusType) != null
                ? e
                : { type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            i = n,
            s = i.blockClose,
            u = i.uim;
          x && (r = h.NONE);
          var c = "VoipPopoutModalManager" + l + Date.now(),
            d = t;
          (l === y && (d = m(t, { requestFocus: K })),
            (S.current = !1),
            F(a),
            $(d),
            M(c),
            W(r),
            V(u),
            z(s != null ? s : !1));
        },
        Z = function (t) {
          t(S.current === !0 ? !1 : !!x);
        },
        ee = p(
          function (e) {
            x &&
              ($(void 0),
              M(null),
              e && W(e),
              (S.current = !0),
              r("WAWebFocusTracer").focus(R.current));
          },
          [x],
        ),
        te = p(
          function (e) {
            e === N &&
              (ee(),
              o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.trigger(
                "close_" + l,
              ));
          },
          [ee, N, l],
        ),
        ne = p(
          function () {
            te(N);
          },
          [N, te],
        ),
        re = function (t) {
          var e;
          t((e = v.current) == null ? void 0 : e.getElement());
        };
      (o("useWAWebListener").useListener(
        o("WAWebVoipPopoutModalManager").VoipPopoutModalManager,
        "open_" + l,
        J,
      ),
        o("useWAWebListener").useListener(
          o("WAWebVoipPopoutModalManager").VoipPopoutModalManager,
          "exists_" + l,
          Z,
        ),
        o("useWAWebListener").useListener(
          o("WAWebVoipPopoutModalManager").VoipPopoutModalManager,
          "close_" + l,
          ee,
        ),
        o("useWAWebListener").useListener(
          o("WAWebVoipPopoutModalManager").VoipPopoutModalManager,
          "get_ref",
          re,
        ),
        o("useWAWebListener").useListener(
          o("WAWebVoipPopoutModalManager").VoipPopoutModalManager,
          "set_force_should_request_focus_" + l,
          k,
        ));
      var oe;
      if (x) {
        var ae = c.jsx(r("WAWebVoipDarkThemeRoot.react"), { children: x }),
          ie = C
            ? c.jsx("div", { className: "dark color-refresh", children: ae })
            : ae;
        oe = c.jsx(
          o("WAWebUimUie.react").UIE,
          {
            displayName: "VoipPopoutModal" + r("WAUpperFirst")(t.type),
            escapable: !G,
            popable: !G,
            ref: v,
            requestFocus: j,
            requestDismiss: ne,
            children: c.jsx(r("WAWebKeyboardRotateFocusModal.react"), {
              focusType: A,
              onBlur: Y,
              children: ie,
            }),
          },
          N,
        );
      }
      return c.jsx(r("WAWebUimContext").Consumer, {
        children: function (t) {
          return c.jsx(r("WAWebUimContext").Provider, {
            value: U || t,
            children: c.jsx(r("WAWebVelocityTransitionGroup"), {
              transitionName: B,
              children: oe,
            }),
          });
        },
      });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"),
      (l.ModalType = y),
      (l.SupportType = C),
      (l.MediaType = b),
      (l.VoipPopoutModalManagerWrapper = v));
  },
  98,
);
