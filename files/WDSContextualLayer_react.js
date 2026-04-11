__d(
  "WDSContextualLayer.react",
  [
    "BaseContextualLayerAnchorRoot.react",
    "WDSGlobalContext",
    "WDSToastContainerID",
    "deferredLoadComponent",
    "react",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo,
      m = u.useState,
      p = r("deferredLoadComponent")(
        r("requireDeferred")("WDSToastProvider.react").__setRef(
          "WDSContextualLayer.react",
        ),
      );
    function _(e) {
      var t = e.children,
        n = m(new Map()),
        a = n[0],
        i = n[1],
        l = c(function (e, t) {
          i(function (n) {
            var r = new Map(n);
            return (r.set(e, t), r);
          });
        }, []),
        u = c(function (e) {
          i(function (t) {
            var n = new Map(t);
            return (n.delete(e), n);
          });
        }, []),
        _ = c(
          function () {
            (a.forEach(function (e) {
              e();
            }),
              i(new Map()));
          },
          [a],
        ),
        f = d(
          function () {
            return {
              currentOpenMenus: a,
              registerMenu: l,
              unregisterMenu: u,
              closeAllMenus: _,
            };
          },
          [a, l, u, _],
        );
      return s.jsx(o("WDSGlobalContext").WDSContext.Provider, {
        value: f,
        children: s.jsx(r("BaseContextualLayerAnchorRoot.react"), {
          children: s.jsx(p, {
            target: "#" + r("WDSToastContainerID"),
            children: t,
          }),
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.WDSContextualLayer = _));
  },
  98,
);
