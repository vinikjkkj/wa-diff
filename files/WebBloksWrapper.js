__d(
  "WebBloksWrapper",
  [
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksEnvironmentContext",
    "WebBloksExtensions",
    "WebBloksModel",
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
      f = "flex",
      g = "bk.style.Base",
      h = "collection",
      y = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      C = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      b = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      v = o("WebBloksModel").defineWebBloksAttributeKey("(");
    function S(e, t, n, r) {
      var a;
      r === void 0 && (r = null);
      var i = o("WebBloksEnvironmentContext").useDataBloksName(),
        l = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        u = l.extensionHandlers,
        d = o("WebBloksComponentContext").useWebBloksContext(),
        S = o("WebBloksTheme").useTheme().getTheme(),
        R = e.getStyle(f),
        k = e.getStyle(g),
        I =
          (a = R == null ? void 0 : R.get(y)) != null
            ? a
            : k == null
              ? void 0
              : k.get(C),
        T = null,
        D = e.getStyle(h),
        x =
          (D == null ? void 0 : D.get(b)) != null ||
          (D == null ? void 0 : D.get(v)) != null,
        $ = e.get(o("WebBloksConstants").EXTENSIONS_ATTRIBUTE_KEY),
        P = m(
          function () {
            return o("WebBloksExtensions").processExtensions($, u);
          },
          [u, $],
        ),
        N = p(e);
      ((N.current = e),
        c(function () {
          if (!(!P || P.length === 0)) {
            var e = [],
              t = function (n) {
                var t = u.get(n.getWireStyleId()),
                  o = t == null ? void 0 : t.onMount;
                if (o != null) {
                  var a = function () {
                    return o(n, N, d, r);
                  };
                  e.push(a);
                }
              };
            for (var n of P) t(n);
            if (e.length !== 0)
              return (
                d.bloksContext.objectSet.mountEffectsQueue.enqueue(
                  N.current.clientId,
                  e,
                ),
                function () {
                  d.bloksContext.objectSet.mountEffectsQueue.dispose(
                    N.current.clientId,
                  );
                }
              );
          }
        }, []));
      var M = I != null || x || !!(P && P.length > 0),
        w = babelHelpers.extends({}, i(e.styleId), {
          ref: n,
          id: e.get(o("WebBloksConstants").HTML_ID_ATTRIBUTE_KEY),
        });
      if (!M)
        return {
          hasWrapper: !1,
          wrapper: _,
          wrapperProps: w,
          stylesFromExtensions: T,
        };
      var A = I != null;
      if (P)
        for (var F of P) {
          var O = u.get(F.getWireStyleId());
          O &&
            (O.hasLayoutWrapper != null && O.hasLayoutWrapper(F) && (A = !0),
            O.getStyles && (T = babelHelpers.extends({}, T, O.getStyles(F, S))),
            (w = babelHelpers.extends(
              {},
              w,
              O.getProps == null ? void 0 : O.getProps(F, e, d),
            )));
        }
      var B = function (a) {
        var r = a,
          i = e.get(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY);
        if (
          (I != null && (r = s.jsx(L, { aspectRatio: I, children: r })),
          x &&
            i != null &&
            (r = s.jsx(E, {
              style: i,
              contextNode: e,
              elementRef: n,
              children: r,
            })),
          P)
        )
          for (var l of P) {
            var c = u.get(l.getWireStyleId());
            if (c) {
              var d = c.wrap;
              d && (r = d(l, r, e, n));
            }
          }
        return A
          ? s.jsx("div", {
              className: o("WebBloksStyle").WebBloksStyles.container,
              style: babelHelpers.extends({}, t, { aspectRatio: I }),
              children: r,
            })
          : r;
      };
      return {
        hasWrapper: A,
        wrapper: B,
        wrapperProps: w,
        stylesFromExtensions: T,
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
