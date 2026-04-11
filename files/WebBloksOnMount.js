__d(
  "WebBloksOnMount",
  ["WebBloksComponentContext", "WebBloksOnMountExtensionHandlerUtils", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c(e) {
      var t = e.children,
        n = e.node,
        r = o("WebBloksComponentContext").useWebBloksContext();
      return (
        u(function () {
          return (
            r.bloksContext.objectSet.mountEffectsQueue.enqueue(n.clientId, [
              function () {
                return o(
                  "WebBloksOnMountExtensionHandlerUtils",
                ).runMountEffects(n, { current: n }, r);
              },
            ]),
            function () {
              r.bloksContext.objectSet.mountEffectsQueue.dispose(n.clientId);
            }
          );
        }, []),
        t != null ? t : null
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
