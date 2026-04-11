__d(
  "ReactKonvaCore",
  [
    "ReactKonvaHostConfig",
    "ReactKonvaItsFine",
    "ReactKonvaMakeUpdates",
    "ReactReconcilerConstants_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
    "ReactReconciler_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
    "konva-7.2.3",
    "react",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("ReactKonvaItsFine").FiberProvider,
      s = n("ReactKonvaItsFine").useContextBridge,
      u = n("ReactKonvaMakeUpdates").applyNodeProps,
      c = n("ReactKonvaMakeUpdates").toggleStrictMode,
      d = n(
        "ReactReconcilerConstants_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
      ).LegacyRoot,
      m = n("konva-7.2.3")("/lib/Core.js"),
      p = e || (e = n("react")),
      _ = e,
      f = _.useLayoutEffect,
      g = _.useRef;
    function h(e) {
      var t = g({});
      return (
        f(function () {
          t.current = e;
        }),
        f(function () {
          return function () {
            t.current = {};
          };
        }, []),
        t.current
      );
    }
    var y = function (t) {
      var e = g(),
        n = g(),
        r = g(),
        o = h(t),
        a = s(),
        l = function (n) {
          var e = t.forwardedRef;
          e && (typeof e == "function" ? e(n) : (e.current = n));
        };
      return (
        f(function () {
          return (
            (n.current = new m.Stage({
              width: t.width,
              height: t.height,
              container: e.current,
            })),
            l(n.current),
            (r.current = i.KonvaRenderer.createContainer(
              n.current,
              d,
              !1,
              null,
            )),
            i.KonvaRenderer.updateContainerSync(
              p.createElement(a, {}, t.children),
              r.current,
            ),
            i.KonvaRenderer.flushSyncWork(),
            function () {
              m.isBrowser &&
                (l(null),
                i.KonvaRenderer.updateContainerSync(null, r.current, null),
                i.KonvaRenderer.flushSyncWork(),
                n.current.destroy());
            }
          );
        }, []),
        f(function () {
          (l(n.current),
            u(n.current, t, o),
            i.KonvaRenderer.updateContainerSync(
              p.createElement(a, {}, t.children),
              r.current,
              null,
            ),
            i.KonvaRenderer.flushSyncWork());
        }),
        p.createElement("div", {
          ref: e,
          id: t.id,
          accessKey: t.accessKey,
          className: t.className,
          role: t.role,
          style: t.style,
          tabIndex: t.tabIndex,
          title: t.title,
        })
      );
    };
    ((i.Layer = "Layer"),
      (i.FastLayer = "FastLayer"),
      (i.Group = "Group"),
      (i.Label = "Label"),
      (i.Rect = "Rect"),
      (i.Circle = "Circle"),
      (i.Ellipse = "Ellipse"),
      (i.Wedge = "Wedge"),
      (i.Line = "Line"),
      (i.Sprite = "Sprite"),
      (i.Image = "Image"),
      (i.Text = "Text"),
      (i.TextPath = "TextPath"),
      (i.Star = "Star"),
      (i.Ring = "Ring"),
      (i.Arc = "Arc"),
      (i.Tag = "Tag"),
      (i.Path = "Path"),
      (i.RegularPolygon = "RegularPolygon"),
      (i.Arrow = "Arrow"),
      (i.Shape = "Shape"),
      (i.Transformer = "Transformer"),
      (i.KonvaRenderer = n("ReactReconciler_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")(
        n("ReactKonvaHostConfig"),
      )),
      i.KonvaRenderer.injectIntoDevTools({
        findHostInstanceByFiber: function () {
          return null;
        },
        bundleType: 0,
        version: p.version,
        rendererPackageName: "react-konva",
      }),
      (i.Stage = p.forwardRef(function (e, t) {
        return p.createElement(
          l,
          {},
          p.createElement(y, babelHelpers.extends({}, e, { forwardedRef: t })),
        );
      })),
      (i.useStrictMode = c));
  },
  null,
);
