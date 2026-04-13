__d(
  "WAWebUimUie.react",
  [
    "WAWebUim",
    "WAWebUimContext",
    "WAWebUimUtils",
    "react",
    "react-compiler-runtime",
    "useStable",
    "useWAWebStableCallback",
    "useWAWebUIM",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.cloneElement,
      m = c.experimental_useEffectEvent,
      p = c.useCallback,
      _ = c.useEffect,
      f = c.useImperativeHandle,
      g = c.useRef,
      h = null;
    function y(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.uimState,
        l = i === void 0 ? o("WAWebUim").UIMState.ACTIVE : i,
        s = a.requestRecentFocusOnUnmount,
        c = s === void 0 ? !0 : s,
        h = a.popable,
        y = h === void 0 ? !1 : h,
        b = a.escapable,
        v = b === void 0 ? !1 : b,
        S = a.displayName,
        R = a.children,
        L = a.dismissOnWindowResize,
        E = L === void 0 ? !1 : L,
        k = r("useWAWebUIM")(),
        I = C(a.requestFocus),
        T = r("useWAWebStableCallback")(a.requestDismiss),
        D = g(null),
        x = p(function () {
          var e = D.current;
          if (e != null)
            return o("WAWebUimUtils").isCrossWindowHTMLElement(e) ||
              e instanceof HTMLElement
              ? e
              : e.getElement == null
                ? void 0
                : e.getElement();
        }, []),
        $ = r("useStable")(function () {
          var e = {
            displayName: S,
            popable: y,
            escapable: v,
            uimState: l,
            requestFocus: I,
            requestDismiss: T,
            getNode: x,
            dismissOnWindowResize: E,
          };
          return k != null
            ? new (o("WAWebUim").UIM)(e, k)
            : new (o("WAWebUim").UIM)(e);
        }),
        P = m(function () {
          $.pop(o("WAWebUim").DismissReason.LIFECYCLE, c);
        });
      if (
        (_(
          function () {
            return ($.register(), P);
          },
          [$],
        ),
        _(
          function () {
            $.setState(l);
          },
          [l, $],
        ),
        f(n, function () {
          return {
            activate: function () {
              $.activate();
            },
            getElement: x,
          };
        }),
        !R)
      )
        return null;
      var N = function (t) {
          var e,
            n =
              (e =
                t == null || t.getComponent == null
                  ? void 0
                  : t.getComponent()) != null
                ? e
                : t;
          D.current = n;
          var r = R.ref;
          r && (typeof r == "function" ? r(n) : (r.current = n));
        },
        M = d(R, { ref: N });
      return u.jsx(r("WAWebUimContext").Provider, { value: $, children: M });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = o("react-compiler-runtime").c(9),
        n = r("useWAWebUnmountSignal")(),
        a = g(!1),
        i = g(null),
        l;
      t[0] !== e
        ? ((l = function () {
            e &&
              (h && self.clearTimeout(h),
              (i.current = h =
                self.setTimeout(function () {
                  (e(), (i.current = h = null));
                }, 0)));
          }),
          (t[0] = e),
          (t[1] = l))
        : (l = t[1]);
      var s = l,
        u;
      t[2] !== s || t[3] !== e || t[4] !== n
        ? ((u = function () {
            e && !n.aborted ? s() : (a.current = !0);
          }),
          (t[2] = s),
          (t[3] = e),
          (t[4] = n),
          (t[5] = u))
        : (u = t[5]);
      var c = r("useWAWebStableCallback")(u),
        d = m(s),
        p;
      t[6] !== d
        ? ((p = function () {
            return (
              a.current && d(),
              function () {
                h && i.current === h && (self.clearTimeout(h), (h = null));
              }
            );
          }),
          (t[6] = d),
          (t[7] = p))
        : (p = t[7]);
      var f;
      return (
        t[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = []), (t[8] = f))
          : (f = t[8]),
        _(p, f),
        c
      );
    }
    l.UIE = y;
  },
  98,
);
