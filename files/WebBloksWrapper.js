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
        a = o("WebBloksEnvironmentContext").useWebBloksEnvironment()
          .extensionHandlers,
        i = o("WebBloksComponentContext").useWebBloksContext(),
        l = o("WebBloksTheme").useTheme().getTheme(),
        u = e.getValues(),
        d = e.getStyle("flex"),
        f = e.getStyle("bk.style.Base"),
        g =
          (r = d == null ? void 0 : d.get("aspect_ratio")) != null
            ? r
            : f == null
              ? void 0
              : f.get("aspect_ratio"),
        C = null,
        b = e.getStyle("collection"),
        v =
          (b == null ? void 0 : b.get("on_appear")) != null ||
          (b == null ? void 0 : b.get("on_disappear")) != null,
        S = e.get("extensions"),
        R = m(
          function () {
            return o("WebBloksExtensions").processExtensions(S, a);
          },
          [a, S],
        ),
        L = p(e);
      ((L.current = e),
        c(function () {
          if (!(!R || R.length === 0)) {
            var e = [],
              t = function (n) {
                var t = a.get(n.styleId),
                  r = t == null ? void 0 : t.onMount;
                if (r != null) {
                  var o = function () {
                    return r(n, L, i);
                  };
                  e.push(o);
                }
              };
            for (var n of R) t(n);
            if (e.length !== 0)
              return (
                i.bloksContext.objectSet.mountEffectsQueue.enqueue(
                  L.current.clientId,
                  e,
                ),
                function () {
                  i.bloksContext.objectSet.mountEffectsQueue.dispose(
                    L.current.clientId,
                  );
                }
              );
          }
        }, []));
      var E = g != null || v || !!(R && R.length > 0),
        k = { "data-bloks-name": e.styleId, ref: n, id: e.get("html_id") };
      if (!E)
        return {
          hasWrapper: !1,
          wrapper: _,
          wrapperProps: k,
          stylesFromExtensions: C,
        };
      var I = g != null;
      if (R)
        for (var T of R) {
          var D = a.get(T.styleId);
          D &&
            (D.hasLayoutWrapper != null && D.hasLayoutWrapper(T) && (I = !0),
            D.getStyles && (C = babelHelpers.extends({}, C, D.getStyles(T, l))),
            Object.assign(
              k,
              D.getProps == null ? void 0 : D.getProps(T, e, i),
            ));
        }
      var x = function (i) {
        var r = i;
        if (
          (g != null && (r = s.jsx(h, { aspectRatio: g, children: r })),
          v &&
            u._style != null &&
            (r = s.jsx(y, {
              style: u._style,
              contextNode: e,
              elementRef: n,
              children: r,
            })),
          R)
        )
          for (var l of R) {
            var c = a.get(l.styleId);
            if (c) {
              var d = c.wrap;
              d && (r = d(l, r, e, n));
            }
          }
        return I
          ? s.jsx("div", {
              className: o("WebBloksStyle").WebBloksStyles.container,
              style: babelHelpers.extends({}, t, { aspectRatio: g }),
              children: r,
            })
          : r;
      };
      return {
        hasWrapper: I,
        wrapper: x,
        wrapperProps: k,
        stylesFromExtensions: C,
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
        ? C({ contextNode: n, children: t, style: a, elementRef: r })
        : t;
    }
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
