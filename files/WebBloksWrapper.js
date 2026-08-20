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
        a = o("WebBloksEnvironmentContext").useDataBloksName(),
        i = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        l = i.extensionHandlers,
        u = o("WebBloksComponentContext").useWebBloksContext(),
        d = o("WebBloksTheme").useTheme().getTheme(),
        f = e.getStyle("flex"),
        g = e.getStyle("bk.style.Base"),
        C =
          (r = f == null ? void 0 : f.get("aspect_ratio")) != null
            ? r
            : g == null
              ? void 0
              : g.get("aspect_ratio"),
        b = null,
        v = e.getStyle("collection"),
        S =
          (v == null ? void 0 : v.get("on_appear")) != null ||
          (v == null ? void 0 : v.get("on_disappear")) != null,
        R = e.get("extensions"),
        L = m(
          function () {
            return o("WebBloksExtensions").processExtensions(R, l);
          },
          [l, R],
        ),
        E = p(e);
      ((E.current = e),
        c(function () {
          if (!(!L || L.length === 0)) {
            var e = [],
              t = function (n) {
                var t = l.get(n.styleId),
                  r = t == null ? void 0 : t.onMount;
                if (r != null) {
                  var o = function () {
                    return r(n, E, u);
                  };
                  e.push(o);
                }
              };
            for (var n of L) t(n);
            if (e.length !== 0)
              return (
                u.bloksContext.objectSet.mountEffectsQueue.enqueue(
                  E.current.clientId,
                  e,
                ),
                function () {
                  u.bloksContext.objectSet.mountEffectsQueue.dispose(
                    E.current.clientId,
                  );
                }
              );
          }
        }, []));
      var k = C != null || S || !!(L && L.length > 0),
        I = babelHelpers.extends({}, a(e.styleId), {
          ref: n,
          id: e.get("html_id"),
        });
      if (!k)
        return {
          hasWrapper: !1,
          wrapper: _,
          wrapperProps: I,
          stylesFromExtensions: b,
        };
      var T = C != null;
      if (L)
        for (var D of L) {
          var x = l.get(D.styleId);
          x &&
            (x.hasLayoutWrapper != null && x.hasLayoutWrapper(D) && (T = !0),
            x.getStyles && (b = babelHelpers.extends({}, b, x.getStyles(D, d))),
            (I = babelHelpers.extends(
              {},
              I,
              x.getProps == null ? void 0 : x.getProps(D, e, u),
            )));
        }
      var $ = function (a) {
        var r = a,
          i = e.get("_style");
        if (
          (C != null && (r = s.jsx(h, { aspectRatio: C, children: r })),
          S &&
            i != null &&
            (r = s.jsx(y, {
              style: i,
              contextNode: e,
              elementRef: n,
              children: r,
            })),
          L)
        )
          for (var u of L) {
            var c = l.get(u.styleId);
            if (c) {
              var d = c.wrap;
              d && (r = d(u, r, e, n));
            }
          }
        return T
          ? s.jsx("div", {
              className: o("WebBloksStyle").WebBloksStyles.container,
              style: babelHelpers.extends({}, t, { aspectRatio: C }),
              children: r,
            })
          : r;
      };
      return {
        hasWrapper: T,
        wrapper: $,
        wrapperProps: I,
        stylesFromExtensions: b,
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
            className: g.aspectRatioSVG,
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
              className: g.aspectRatioContainer,
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
              className: g.aspectRatioContent,
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
