__d(
  "WebBloksWrapper",
  [
    "WebBloksComponentContext",
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
      };
    function f(e, t, n) {
      var r,
        a = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        i = a.extensionHandlers,
        l = a.omitDataBloksName,
        u = o("WebBloksComponentContext").useWebBloksContext(),
        d = o("WebBloksTheme").useTheme().getTheme(),
        f = e.getValues(),
        g = e.getStyle("flex"),
        C = e.getStyle("bk.style.Base"),
        b =
          (r = g == null ? void 0 : g.get("aspect_ratio")) != null
            ? r
            : C == null
              ? void 0
              : C.get("aspect_ratio"),
        v = null,
        S = e.getStyle("collection"),
        R =
          (S == null ? void 0 : S.get("on_appear")) != null ||
          (S == null ? void 0 : S.get("on_disappear")) != null,
        L = e.get("extensions"),
        E = m(
          function () {
            return o("WebBloksExtensions").processExtensions(L, i);
          },
          [i, L],
        ),
        k = p(e);
      ((k.current = e),
        c(function () {
          if (!(!E || E.length === 0)) {
            var e = [],
              t = function (n) {
                var t = i.get(n.styleId),
                  r = t == null ? void 0 : t.onMount;
                if (r != null) {
                  var o = function () {
                    return r(n, k, u);
                  };
                  e.push(o);
                }
              };
            for (var n of E) t(n);
            if (e.length !== 0)
              return (
                u.bloksContext.objectSet.mountEffectsQueue.enqueue(
                  k.current.clientId,
                  e,
                ),
                function () {
                  u.bloksContext.objectSet.mountEffectsQueue.dispose(
                    k.current.clientId,
                  );
                }
              );
          }
        }, []));
      var I = b != null || R || !!(E && E.length > 0),
        T = babelHelpers.extends(
          {},
          l ? null : { "data-bloks-name": e.styleId },
          { ref: n, id: e.get("html_id") },
        );
      if (!I)
        return {
          hasWrapper: !1,
          wrapper: _,
          wrapperProps: T,
          stylesFromExtensions: v,
        };
      var D = b != null;
      if (E)
        for (var x of E) {
          var $ = i.get(x.styleId);
          $ &&
            ($.hasLayoutWrapper != null && $.hasLayoutWrapper(x) && (D = !0),
            $.getStyles && (v = babelHelpers.extends({}, v, $.getStyles(x, d))),
            (T = babelHelpers.extends(
              {},
              T,
              $.getProps == null ? void 0 : $.getProps(x, e, u),
            )));
        }
      var P = function (a) {
        var r = a;
        if (
          (b != null && (r = s.jsx(h, { aspectRatio: b, children: r })),
          R &&
            f._style != null &&
            (r = s.jsx(y, {
              style: f._style,
              contextNode: e,
              elementRef: n,
              children: r,
            })),
          E)
        )
          for (var l of E) {
            var u = i.get(l.styleId);
            if (u) {
              var c = u.wrap;
              c && (r = c(l, r, e, n));
            }
          }
        return D
          ? s.jsx("div", {
              className: o("WebBloksStyle").WebBloksStyles.container,
              style: babelHelpers.extends({}, t, { aspectRatio: b }),
              children: r,
            })
          : r;
      };
      return {
        hasWrapper: D,
        wrapper: P,
        wrapperProps: T,
        stylesFromExtensions: v,
      };
    }
    var g = o("WebBloksStyle").createStyles({
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
    function h(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.aspectRatio,
        r = e.children,
        a;
      t[0] !== n
        ? ((a = s.jsx("div", {
            "data-bloks-name": "bk.components.AspectRatio",
            className: g.aspectRatioContainer,
            style: { aspectRatio: n },
            children: s.jsx("svg", {
              "aria-hidden": "true",
              xmlns: "http://www.w3.org/2000/svg",
              height: 1,
              width: n,
              className: g.aspectRatioSVG,
            }),
          })),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] !== r
        ? ((i = s.jsx("div", {
            "data-bloks-name": "bk.components.AspectRatio",
            className: g.aspectRatioContent,
            children: r,
          })),
          (t[2] = r),
          (t[3] = i))
        : (i = t[3]);
      var l;
      return (
        t[4] !== a || t[5] !== i
          ? ((l = s.jsxs(s.Fragment, { children: [a, i] })),
            (t[4] = a),
            (t[5] = i),
            (t[6] = l))
          : (l = t[6]),
        l
      );
    }
    function y(e) {
      var t = e.children,
        n = e.contextNode,
        r = e.elementRef,
        a = e.style;
      return o("WebBloksSSRUtils").canUseDOM
        ? s.jsx(C, { contextNode: n, style: a, elementRef: r, children: t })
        : t;
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
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
            var e = i == null ? void 0 : i.getExpression("on_appear"),
              n = i == null ? void 0 : i.getExpression("on_disappear");
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
    l.default = f;
  },
  98,
);
