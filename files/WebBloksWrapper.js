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
        u = l.cssOnlyAspectRatio,
        d = l.extensionHandlers,
        S = o("WebBloksComponentContext").useWebBloksContext(),
        R = o("WebBloksTheme").useTheme().getTheme(),
        L = e.getStyle(f),
        T = e.getStyle(g),
        D =
          (a = L == null ? void 0 : L.get(y)) != null
            ? a
            : T == null
              ? void 0
              : T.get(C),
        x = null,
        $ = e.getStyle(h),
        P =
          ($ == null ? void 0 : $.get(b)) != null ||
          ($ == null ? void 0 : $.get(v)) != null,
        N = e.get(o("WebBloksConstants").EXTENSIONS_ATTRIBUTE_KEY),
        M = m(
          function () {
            return o("WebBloksExtensions").processExtensions(N, d);
          },
          [d, N],
        ),
        w = p(e);
      (c(
        function () {
          w.current = e;
        },
        [e],
      ),
        c(function () {
          if (!(!M || M.length === 0)) {
            var e = [],
              t = function (n) {
                var t = d.get(n.getWireStyleId()),
                  o = t == null ? void 0 : t.onMount;
                if (o != null) {
                  var a = function () {
                    return o(n, w, S, r);
                  };
                  e.push(a);
                }
              };
            for (var n of M) t(n);
            if (e.length !== 0)
              return (
                S.bloksContext.objectSet.mountEffectsQueue.enqueue(
                  w.current.clientId,
                  e,
                ),
                function () {
                  S.bloksContext.objectSet.mountEffectsQueue.dispose(
                    w.current.clientId,
                  );
                }
              );
          }
        }, []));
      var A = D != null || P || !!(M && M.length > 0),
        F = babelHelpers.extends({}, i(e.styleId), {
          ref: n,
          id: e.get(o("WebBloksConstants").HTML_ID_ATTRIBUTE_KEY),
        });
      if (!A)
        return {
          hasWrapper: !1,
          wrapper: _,
          wrapperProps: F,
          stylesFromExtensions: x,
        };
      var O = D != null;
      if (M)
        for (var B of M) {
          var W = d.get(B.getWireStyleId());
          W &&
            (W.hasLayoutWrapper != null && W.hasLayoutWrapper(B) && (O = !0),
            W.getStyles && (x = babelHelpers.extends({}, x, W.getStyles(B, R))),
            (F = babelHelpers.extends(
              {},
              F,
              W.getProps == null ? void 0 : W.getProps(B, e, S),
            )));
        }
      var q = function (a) {
        var r = a,
          i = e.get(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY);
        if (
          (D != null &&
            (r = s.jsx(k, {
              aspectRatio: D,
              hideSizerWhereSupported: u && !E(M, d),
              children: r,
            })),
          P &&
            i != null &&
            (r = s.jsx(I, {
              style: i,
              contextNode: e,
              elementRef: n,
              children: r,
            })),
          M)
        )
          for (var l of M) {
            var c = d.get(l.getWireStyleId());
            if (c) {
              var m = c.wrap;
              m && (r = m(l, r, e, n));
            }
          }
        return O
          ? s.jsx("div", {
              className: o("WebBloksStyle").WebBloksStyles.container,
              style: babelHelpers.extends({}, t, { aspectRatio: D }),
              children: r,
            })
          : r;
      };
      return {
        hasWrapper: O,
        wrapper: q,
        wrapperProps: F,
        stylesFromExtensions: x,
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
      }),
      L = o("WebBloksStyle").createStylesIfSupported(
        { type: "regular", key: "aspect-ratio", value: "1" },
        { sizerHidden: { display: "none" } },
      );
    function E(e, t) {
      return e == null
        ? !1
        : e.some(function (e) {
            var n = t.get(e.getWireStyleId());
            return (
              (n == null ? void 0 : n.wrap) != null &&
              (n.hasLayoutWrapper == null ? void 0 : n.hasLayoutWrapper(e)) ===
                !0
            );
          });
    }
    function k(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.aspectRatio,
        r = e.children,
        a = e.hideSizerWhereSupported,
        i = o("WebBloksEnvironmentContext").useDataBloksName(),
        l;
      t[0] !== i
        ? ((l = i("bk.components.AspectRatio")), (t[0] = i), (t[1] = l))
        : (l = t[1]);
      var u = a && L.sizerHidden,
        c;
      t[2] !== u
        ? ((c = o("WebBloksStyle").classNames(R.aspectRatioContainer, u)),
          (t[2] = u),
          (t[3] = c))
        : (c = t[3]);
      var d, m;
      t[4] !== n
        ? ((d = { aspectRatio: n }),
          (m = s.jsx("svg", {
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            height: 1,
            width: n,
            className: R.aspectRatioSVG,
          })),
          (t[4] = n),
          (t[5] = d),
          (t[6] = m))
        : ((d = t[5]), (m = t[6]));
      var p;
      t[7] !== l || t[8] !== c || t[9] !== d || t[10] !== m
        ? ((p = s.jsx(
            "div",
            babelHelpers.extends({}, l, {
              className: c,
              style: d,
              children: m,
            }),
          )),
          (t[7] = l),
          (t[8] = c),
          (t[9] = d),
          (t[10] = m),
          (t[11] = p))
        : (p = t[11]);
      var _;
      t[12] !== i
        ? ((_ = i("bk.components.AspectRatio")), (t[12] = i), (t[13] = _))
        : (_ = t[13]);
      var f;
      t[14] !== r || t[15] !== _
        ? ((f = s.jsx(
            "div",
            babelHelpers.extends({}, _, {
              className: R.aspectRatioContent,
              children: r,
            }),
          )),
          (t[14] = r),
          (t[15] = _),
          (t[16] = f))
        : (f = t[16]);
      var g;
      return (
        t[17] !== p || t[18] !== f
          ? ((g = s.jsxs(s.Fragment, { children: [p, f] })),
            (t[17] = p),
            (t[18] = f),
            (t[19] = g))
          : (g = t[19]),
        g
      );
    }
    function I(e) {
      var t = e.children,
        n = e.contextNode,
        r = e.elementRef,
        a = e.style;
      return o("WebBloksSSRUtils").canUseDOM
        ? s.jsx(T, { contextNode: n, style: a, elementRef: r, children: t })
        : t;
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
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
