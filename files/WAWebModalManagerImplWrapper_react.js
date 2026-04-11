__d(
  "WAWebModalManagerImplWrapper.react",
  [
    "WALogger",
    "WAUpperFirst",
    "WAWebDrawerManagerContext",
    "WAWebFocusTracer",
    "WAWebKeyboardRotateFocusModal.react",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebPopover.react",
    "WAWebUimContext",
    "WAWebUimUie.react",
    "WAWebVelocityTransitionGroup",
    "react",
    "uniqueID",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.cloneElement,
      p = d.useRef,
      _ = d.useState,
      f = { DEFAULT: "modal", NONE: "none" },
      g = "modal",
      h = "media",
      y = "alert",
      C = "support";
    function b(t) {
      var n,
        a,
        i = t.contextMenuRef,
        l = t.type,
        u = p(null),
        d = p(!1),
        h = p(null),
        y = _(),
        C = y[0],
        b = y[1],
        v = r("useWAWebIsKeyboardUser")(),
        S = v.isKeyboardUser,
        R = _(void 0),
        L = R[0],
        E = R[1],
        k = _(null),
        I = k[0],
        T = k[1],
        D = _({ type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE }),
        x = D[0],
        $ = D[1],
        P = _(f.DEFAULT),
        N = P[0],
        M = P[1],
        w = _(void 0),
        A = w[0],
        F = w[1],
        O = _(!1),
        B = O[0],
        W = O[1],
        q = function () {
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[ModalManager][requestFocus] focus on ",
                  " called",
                ])),
              l,
            ),
            !!u.current)
          ) {
            var t = u.current.getElement();
            !t ||
              t.contains(document.activeElement) ||
              r("WAWebFocusTracer").focus(t);
          }
        },
        U = function () {
          if (u.current) {
            var e = u.current.getElement();
            e && r("WAWebFocusTracer").focus(e);
          }
        },
        V = function (t) {
          var e;
          return (
            ((e = document.getElementById(
              o("WAWebPopover.react").ANCHOR_PORTAL_ID,
            )) == null
              ? void 0
              : e.contains(t)) || t.closest('[role="menu"]') != null
          );
        },
        H = function (t) {
          var e = t.relatedTarget,
            n = i == null ? void 0 : i.current,
            r = n ? n.isOpen() : !1;
          return C != null
            ? C
            : (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[ModalManager][requestFocus]: forceShouldRequestFocus = null",
                  ])),
              ),
              e instanceof HTMLElement &&
                !t.currentTarget.contains(e) &&
                !V(e) &&
                !r &&
                d.current === !1);
        },
        G = function (t) {
          H(t) && q();
        },
        z = function (t, n) {
          var e;
          (n === void 0 && (n = {}),
            (h.current = S ? document.activeElement || document.body : null));
          var a = n.transition || f.DEFAULT,
            i =
              (e = n.focusType) != null
                ? e
                : { type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            s = n,
            u = s.blockClose,
            c = s.uim;
          L && (a = f.NONE);
          var p = r("uniqueID")("ModalManager" + l),
            _ = t;
          (l === g && (_ = m(t, { requestFocus: U })),
            (d.current = !1),
            $(i),
            E(_),
            T(p),
            M(a),
            F(c),
            W(u != null ? u : !1));
        },
        j = function (t) {
          t(d.current === !0 ? !1 : !!L);
        },
        K = function (t) {
          L &&
            (E(void 0),
            T(null),
            t && M(t),
            (d.current = !0),
            r("WAWebFocusTracer").focus(h.current));
        },
        Q = function (t) {
          t === I &&
            (K(), o("WAWebModalManager").ModalManager.trigger("close_" + l));
        },
        X = function (t) {
          var e;
          t((e = u.current) == null ? void 0 : e.getElement());
        };
      ((n = o("useWAWebListener")).useListener(
        (a = o("WAWebModalManager")).ModalManager,
        "open_" + l,
        z,
      ),
        n.useListener(a.ModalManager, "exists_" + l, j),
        n.useListener(a.ModalManager, "close_" + l, K),
        n.useListener(a.ModalManager, "get_ref", X),
        n.useListener(
          a.ModalManager,
          "set_force_should_request_focus_" + l,
          b,
        ));
      var Y;
      return (
        L &&
          (Y = c.jsx(
            o("WAWebUimUie.react").UIE,
            {
              displayName: "Modal" + r("WAUpperFirst")(t.type),
              escapable: !B,
              ref: u,
              requestFocus: q,
              requestDismiss: Q.bind(null, I),
              children: c.jsx(r("WAWebKeyboardRotateFocusModal.react"), {
                focusType: x,
                onBlur: G,
                children: L,
              }),
            },
            I,
          )),
        c.jsx(
          o("WAWebDrawerManagerContext").DrawerManagerGlobalBridgeProvider,
          {
            children: c.jsx(r("WAWebUimContext").Consumer, {
              children: function (t) {
                return c.jsx(r("WAWebUimContext").Provider, {
                  value: A || t,
                  children: c.jsx(r("WAWebVelocityTransitionGroup"), {
                    transitionName: N,
                    children: Y,
                  }),
                });
              },
            }),
          },
        )
      );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"),
      (l.ModalType = g),
      (l.MediaType = h),
      (l.AlertType = y),
      (l.SupportType = C),
      (l.ModalManagerImplWrapper = b));
  },
  98,
);
