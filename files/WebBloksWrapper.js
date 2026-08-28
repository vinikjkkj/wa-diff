__d(
  "WebBloksWrapper",
  [
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksEnvironmentContext",
    "WebBloksExtensions",
    "WebBloksSSRUtils",
    "WebBloksStyle",
    "WebBloksTheme",
    "WebBloksViewpoint",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useLayoutEffect,
      m = u.useMemo,
      p = u.useRef,
      _ = function (t) {
        return t;
      },
      f = "\u3438",
      g = "\u5E89",
      h = "\u3436",
      y = "$",
      C = "#",
      b = "&",
      v = "(";
    function S(e, t, n) {
      var r,
        a = o("WebBloksEnvironmentContext").useDataBloksName(),
        i = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        l = i.extensionHandlers,
        u = o("WebBloksComponentContext").useWebBloksContext(),
        d = o("WebBloksTheme").useTheme().getTheme(),
        S = e.getStyle(f),
        R = e.getStyle(g),
        k =
          (r = S == null ? void 0 : S.get(y)) != null
            ? r
            : R == null
              ? void 0
              : R.get(C),
        I = null,
        T = e.getStyle(h),
        D =
          (T == null ? void 0 : T.get(b)) != null ||
          (T == null ? void 0 : T.get(v)) != null,
        x = e.get(o("WebBloksConstants").EXTENSIONS_ATTRIBUTE_KEY),
        $ = m(
          function () {
            return o("WebBloksExtensions").processExtensions(x, l);
          },
          [l, x],
        ),
        P = p(e);
      ((P.current = e),
        c(function () {
          if (!(!$ || $.length === 0)) {
            var e = [],
              t = function (n) {
                var t = l.get(n.styleId),
                  r = t == null ? void 0 : t.onMount;
                if (r != null) {
                  var o = function () {
                    return r(n, P, u);
                  };
                  e.push(o);
                }
              };
            for (var n of $) t(n);
            if (e.length !== 0)
              return (
                u.bloksContext.objectSet.mountEffectsQueue.enqueue(
                  P.current.clientId,
                  e,
                ),
                function () {
                  u.bloksContext.objectSet.mountEffectsQueue.dispose(
                    P.current.clientId,
                  );
                }
              );
          }
        }, []));
      var N = k != null || D || !!($ && $.length > 0),
        M = babelHelpers.extends({}, a(e.styleId), {
          ref: n,
          id: e.get("html_id"),
        });
      if (!N)
        return {
          hasWrapper: !1,
          wrapper: _,
          wrapperProps: M,
          stylesFromExtensions: I,
        };
      var w = k != null;
      if ($)
        for (var A of $) {
          var F = l.get(A.styleId);
          F &&
            (F.hasLayoutWrapper != null && F.hasLayoutWrapper(A) && (w = !0),
            F.getStyles && (I = babelHelpers.extends({}, I, F.getStyles(A, d))),
            (M = babelHelpers.extends(
              {},
              M,
              F.getProps == null ? void 0 : F.getProps(A, e, u),
            )));
        }
      var O = function (a) {
        var r = a,
          i = e.get(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY);
        if (
          (k != null && (r = s.jsx(L, { aspectRatio: k, children: r })),
          D &&
            i != null &&
            (r = s.jsx(E, {
              style: i,
              contextNode: e,
              elementRef: n,
              children: r,
            })),
          $)
        )
          for (var u of $) {
            var c = l.get(u.styleId);
            if (c) {
              var d = c.wrap;
              d && (r = d(u, r, e, n));
            }
          }
        return w
          ? s.jsx("div", {
              className: o("WebBloksStyle").WebBloksStyles.container,
              style: babelHelpers.extends({}, t, { aspectRatio: k }),
              children: r,
            })
          : r;
      };
      return {
        hasWrapper: w,
        wrapper: O,
        wrapperProps: M,
        stylesFromExtensions: I,
      };
    }
    var R = o("WebBloksStyle").createStyles({
      aspectRatioContainer: {
        width: "100%",
        pointerEvents: "none",
        overflow: "hidden",
      },
      aspectRatioContent: {
        bottom: 0,
        left: 0,
        overflow: "hidden",
        position: "absolute",
        right: 0,
        top: 0,
        padding: "inherit",
      },
      aspectRatioSVG: { height: "100%", width: "100%", display: "flex" },
    });
    function L(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.aspectRatio,
        r = e.children,
        a = o("WebBloksEnvironmentContext").useDataBloksName(),
        i;
      t[0] !== a
        ? ((i = a("bk.components.AspectRatio")), (t[0] = a), (t[1] = i))
        : (i = t[1]);
      var l, u;
      t[2] !== n
        ? ((l = { aspectRatio: n }),
          (u = s.jsx("svg", {
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            height: 1,
            width: n,
            className: R.aspectRatioSVG,
          })),
          (t[2] = n),
          (t[3] = l),
          (t[4] = u))
        : ((l = t[3]), (u = t[4]));
      var c;
      t[5] !== i || t[6] !== l || t[7] !== u
        ? ((c = s.jsx(
            "div",
            babelHelpers.extends({}, i, {
              className: R.aspectRatioContainer,
              style: l,
              children: u,
            }),
          )),
          (t[5] = i),
          (t[6] = l),
          (t[7] = u),
          (t[8] = c))
        : (c = t[8]);
      var d;
      t[9] !== a
        ? ((d = a("bk.components.AspectRatio")), (t[9] = a), (t[10] = d))
        : (d = t[10]);
      var m;
      t[11] !== r || t[12] !== d
        ? ((m = s.jsx(
            "div",
            babelHelpers.extends({}, d, {
              className: R.aspectRatioContent,
              children: r,
            }),
          )),
          (t[11] = r),
          (t[12] = d),
          (t[13] = m))
        : (m = t[13]);
      var p;
      return (
        t[14] !== c || t[15] !== m
          ? ((p = s.jsxs(s.Fragment, { children: [c, m] })),
            (t[14] = c),
            (t[15] = m),
            (t[16] = p))
          : (p = t[16]),
        p
      );
    }
    function E(e) {
      var t = e.children,
        n = e.contextNode,
        r = e.elementRef,
        a = e.style;
      return o("WebBloksSSRUtils").canUseDOM
        ? s.jsx(k, { contextNode: n, style: a, elementRef: r, children: t })
        : t;
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.children,
        r = e.contextNode,
        a = e.elementRef,
        i = e.style,
        l = o("WebBloksComponentContext").useWebBloksContext(),
        s = l.bloksContext,
        u = l.executeCatch,
        c;
      t[0] !== s || t[1] !== r || t[2] !== u || t[3] !== i
        ? ((c = function (t) {
            var e = i == null ? void 0 : i.getExpression(b),
              n = i == null ? void 0 : i.getExpression(v);
            e: switch (t.state) {
              case "entered": {
                e != null && u(r, e, [s]);
                break e;
              }
              case "exited":
                n != null && u(r, n, [s]);
            }
          }),
          (t[0] = s),
          (t[1] = r),
          (t[2] = u),
          (t[3] = i),
          (t[4] = c))
        : (c = t[4]);
      var m = c,
        p;
      t[5] !== i.clientId
        ? ((p = i.clientId.toString()), (t[5] = i.clientId), (t[6] = p))
        : (p = t[6]);
      var _;
      t[7] !== m || t[8] !== p
        ? ((_ = { id: p, action: m }), (t[7] = m), (t[8] = p), (t[9] = _))
        : (_ = t[9]);
      var f = o("WebBloksViewpoint").useViewpoint(_),
        g,
        h;
      return (
        t[10] !== a || t[11] !== f
          ? ((g = function () {
              f.current = a.current;
            }),
            (h = [a, f]),
            (t[10] = a),
            (t[11] = f),
            (t[12] = g),
            (t[13] = h))
          : ((g = t[12]), (h = t[13])),
        d(g, h),
        n
      );
    }
    l.default = S;
  },
  98,
);
