__d(
  "WAWebUimUie.react",
  [
    "WAWebUim",
    "WAWebUimContext",
    "WAWebUimUtils",
    "react",
    "react-compiler-runtime",
    "useStable",
    "useWAWebOnUnmount",
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
        m = a.popable,
        h = m === void 0 ? !1 : m,
        y = a.escapable,
        b = y === void 0 ? !1 : y,
        v = a.displayName,
        S = a.children,
        R = a.dismissOnWindowResize,
        L = R === void 0 ? !1 : R,
        E = r("useWAWebUIM")(),
        k = C(a.requestFocus),
        I = r("useWAWebStableCallback")(a.requestDismiss),
        T = g(null),
        D = p(function () {
          var e = T.current;
          if (e != null)
            return o("WAWebUimUtils").isCrossWindowHTMLElement(e) ||
              e instanceof HTMLElement
              ? e
              : e.getElement == null
                ? void 0
                : e.getElement();
        }, []),
        x = r("useStable")(function () {
          var e,
            t = {
              displayName: v,
              popable: h,
              escapable: b,
              uimState: l,
              requestFocus: k,
              requestDismiss: I,
              getNode: D,
              dismissOnWindowResize: L,
            };
          return (e = E == null ? void 0 : E.branch(t)) != null
            ? e
            : new (o("WAWebUim").UIM)(t);
        });
      if (
        (_(
          function () {
            x.setState(l);
          },
          [l, x],
        ),
        r("useWAWebOnUnmount")(function () {
          x.pop(o("WAWebUim").DismissReason.LIFECYCLE, c);
        }),
        f(n, function () {
          return {
            activate: function () {
              x.activate();
            },
            getElement: D,
          };
        }),
        !S)
      )
        return null;
      var $ = function (t) {
          var e,
            n =
              (e =
                t == null || t.getComponent == null
                  ? void 0
                  : t.getComponent()) != null
                ? e
                : t;
          T.current = n;
          var r = S.ref;
          r && (typeof r == "function" ? r(n) : (r.current = n));
        },
        P = d(S, { ref: $ });
      return u.jsx(r("WAWebUimContext").Provider, { value: x, children: P });
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
