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
              style: babelHelpers.extends({}, t, {
                aspectRatio: D != null ? D : void 0,
              }),
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
      var t = e.aspectRatio,
        n = e.children,
        r = e.hideSizerWhereSupported,
        a = o("WebBloksEnvironmentContext").useDataBloksName();
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(
            "div",
            babelHelpers.extends({}, a("bk.components.AspectRatio"), {
              className: o("WebBloksStyle").classNames(
                R.aspectRatioContainer,
                r && L.sizerHidden,
              ),
              style: { aspectRatio: t },
              children: s.jsx("svg", {
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                height: 1,
                width: t,
                className: R.aspectRatioSVG,
              }),
            }),
          ),
          s.jsx(
            "div",
            babelHelpers.extends({}, a("bk.components.AspectRatio"), {
              className: R.aspectRatioContent,
              children: n,
            }),
          ),
        ],
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
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
      var t = e.children,
        n = e.contextNode,
        r = e.elementRef,
        a = e.style,
        i = o("WebBloksComponentContext").useWebBloksContext(),
        l = i.bloksContext,
        s = i.executeCatch;
      function u(e) {
        var t = a == null ? void 0 : a.getExpression(b),
          r = a == null ? void 0 : a.getExpression(v);
        switch (e.state) {
          case "entered":
            t != null && s(n, t, [l]);
            break;
          case "exited":
            r != null && s(n, r, [l]);
            break;
        }
      }
      var c = o("WebBloksViewpoint").useViewpoint({
        id: a.clientId.toString(),
        action: u,
      });
      return (
        d(
          function () {
            c.current = r.current;
          },
          [r, c],
        ),
        t
      );
    }
    ((T.displayName = T.name + " [from " + i.id + "]"), (l.default = S));
  },
  98,
);
