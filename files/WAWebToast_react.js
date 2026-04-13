__d(
  "WAWebToast.react",
  [
    "WAWebAccessibility.react",
    "WAWebFbtCommon",
    "WAWebFocusTracer",
    "WAWebKeyboardConstants",
    "WAWebKeyboardTabUtils",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebXAltIcon.react",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
    "uniqueID",
    "useLazyRef",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useImperativeHandle,
      _ = d.useRef,
      f = 4e3,
      g = {
        btnSuccess: { color: "x1du590y", fontWeight: "x117nqv4", $$css: !0 },
        button: {
          color: "x17daq4n",
          cursor: "x1ypdohk",
          fontSize: "x1f6kntn",
          lineHeight: "x1evy7pa",
          flexShrink: "x2lah0s",
          ":focus-visible_borderStartStartRadius": "xfuo7wg",
          ":focus-visible_borderStartEndRadius": "xepj7l6",
          ":focus-visible_borderEndEndRadius": "x1911790",
          ":focus-visible_borderEndStartRadius": "xpxzo57",
          $$css: !0,
        },
        close: {
          color: "xto31z9",
          ":focus-visible_borderStartStartRadius": "xfuo7wg",
          ":focus-visible_borderStartEndRadius": "xepj7l6",
          ":focus-visible_borderEndEndRadius": "x1911790",
          ":focus-visible_borderEndStartRadius": "xpxzo57",
          $$css: !0,
        },
        right: {
          insetInlineEnd: "xtijo5x",
          left: null,
          right: null,
          $$css: !0,
        },
        toast: {
          alignItems: "x6s0dn4",
          backgroundColor: "x1e6sl3u",
          borderStartStartRadius: "x2yqj0j",
          borderStartEndRadius: "x1u1eq46",
          borderEndEndRadius: "x1fxmhz6",
          borderEndStartRadius: "xr2wkf5",
          color: "x17t9dm2",
          display: "x78zum5",
          fontSize: "x1f6kntn",
          lineHeight: "x1evy7pa",
          $$css: !0,
        },
      };
    function h(e) {
      return (e === void 0 && (e = ""), r("uniqueID")(e || "toast"));
    }
    function y(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.msg,
        s = i.action,
        u = i.duration,
        d = u === void 0 ? f : u,
        m = i.visibile,
        _ = m === void 0 ? !0 : m,
        g = r("useLazyRef")(function () {
          return h();
        }).current,
        y = (n = i.id) != null ? n : g,
        b = o("useWAWebTimeout").useTimeout(
          function () {
            o("WAWebToastManager").ToastManager.close(y);
          },
          d,
          { immediate: !0 },
        ),
        S = b[0],
        R = function () {
          o("WAWebToastManager").ToastManager.close(y);
        };
      if (
        (p(a, function () {
          return { restartDelay: S };
        }),
        !_)
      )
        return c.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
          text: l,
          assertive: !0,
        });
      var L;
      if (s) {
        var E = Array.isArray(s) ? s : [s];
        L = E.map(function (e, t) {
          return c.jsx(
            C,
            {
              buttonText: e.actionText,
              onClick: e.dismiss === !0 ? R : e.onAction,
              theme: e.theme,
            },
            e.actionText.toString() + t,
          );
        });
      }
      return c.jsx(v, { actionText: l, actionButtons: L });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.buttonText,
        a = e.onClick,
        i = e.ref,
        l = e.theme,
        u;
      t[0] !== l
        ? ((u = (s || (s = r("stylex"))).props(
            g.button,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            o("WAWebUISpacing").uiMargin.start15,
            l === "success" && g.btnSuccess,
          )),
          (t[0] = l),
          (t[1] = u))
        : (u = t[1]);
      var d;
      return (
        t[2] !== n || t[3] !== a || t[4] !== i || t[5] !== u
          ? ((d = c.jsx(
              "button",
              babelHelpers.extends({}, u, { onClick: a, ref: i, children: n }),
            )),
            (t[2] = n),
            (t[3] = a),
            (t[4] = i),
            (t[5] = u),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    function b(e) {
      var t = e.buttonText,
        n = e.onClick,
        a = e.ref;
      return c.jsx(
        "button",
        babelHelpers.extends(
          {},
          (s || (s = r("stylex"))).props(
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            g.close,
            o("WAWebUISpacing").uiMargin.start15,
          ),
          {
            onClick: n,
            "aria-label": r("WAWebFbtCommon")("Close"),
            ref: a,
            children: c.jsx(o("WAWebXAltIcon.react").XAltIcon, {}),
          },
        ),
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.actionButtons,
        a = e.actionText,
        i = e.dismissButton,
        l = e.focusButtonRef,
        u = e.toastPosition,
        d;
      t[0] !== l
        ? ((d = function () {
            var e = l == null ? void 0 : l.current;
            e instanceof HTMLButtonElement && e.focus();
          }),
          (t[0] = l),
          (t[1] = d))
        : (d = t[1]);
      var p;
      (t[2] !== a || t[3] !== l
        ? ((p = [a, l]), (t[2] = a), (t[3] = l), (t[4] = p))
        : (p = t[4]),
        m(d, p));
      var f = _(null),
        h;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function (t) {
            if (
              t.key === o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.TAB
            ) {
              var e = f.current;
              if (e != null && e.contains(document.activeElement)) {
                var n = o("WAWebKeyboardTabUtils").getNextTabbableElement(
                  e,
                  t.shiftKey
                    ? o("WAWebKeyboardTabUtils").TabDirection.BACKWARD
                    : o("WAWebKeyboardTabUtils").TabDirection.FORWARD,
                  o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                );
                n != null &&
                  (t.stopPropagation(),
                  t.preventDefault(),
                  r("WAWebFocusTracer").focus(n));
              }
            }
          }),
          (t[5] = h))
        : (h = t[5]);
      var y = h,
        C;
      t[6] !== u
        ? ((C = (s || (s = r("stylex"))).props(
            g.toast,
            o("WAWebUISpacing").uiPadding.vert12,
            o("WAWebUISpacing").uiPadding.horiz16,
            u === "RIGHT" && g.right,
          )),
          (t[6] = u),
          (t[7] = C))
        : (C = t[7]);
      var b;
      t[8] !== a
        ? ((b = c.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
            text: a,
            assertive: !0,
          })),
          (t[8] = a),
          (t[9] = b))
        : (b = t[9]);
      var v;
      return (
        t[10] !== n || t[11] !== a || t[12] !== i || t[13] !== C || t[14] !== b
          ? ((v = c.jsxs(
              "div",
              babelHelpers.extends({}, C, {
                ref: f,
                tabIndex: 0,
                onKeyDown: y,
                "data-testid": void 0,
                children: [a, n, i, b],
              }),
            )),
            (t[10] = n),
            (t[11] = a),
            (t[12] = i),
            (t[13] = C),
            (t[14] = b),
            (t[15] = v))
          : (v = t[15]),
        v
      );
    }
    function S(e) {
      var t = e.action,
        n = e.msg,
        a = h(),
        i = null;
      (o("WAWebToastManager").ToastManager.open(
        c.jsx(y, {
          id: a,
          msg: n,
          action: {
            actionText: r("WAWebFbtCommon")("Undo"),
            onAction: function () {
              i &&
                (window.clearTimeout(i),
                (i = null),
                o("WAWebToastManager").ToastManager.close(a));
            },
          },
        }),
      ),
        (i = window.setTimeout(function () {
          t();
        }, f)));
    }
    ((l.genId = h),
      (l.Toast = y),
      (l.ToastActionBtn = C),
      (l.ToastDismissBtn = b),
      (l.ToastBody = v),
      (l.openUndoToast = S));
  },
  98,
);
