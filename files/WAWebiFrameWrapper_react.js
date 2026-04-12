__d(
  "WAWebiFrameWrapper.react",
  [
    "SecureMessageListener",
    "WAWebErrorBoundary.react",
    "react",
    "stylex",
    "useWAWebGalaxyFlowIframeReadyTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useState;
    function f(t) {
      var n = t.containerXStyle,
        a = t.fallback,
        i = t.id,
        l = t.iframeLoadedEvent,
        s = t.iframeRef,
        c = t.innerXStyle,
        f = t.messageEventHandler,
        g = t.onClose,
        h = t.onError,
        y = t.onLoad,
        C = t.sandbox,
        b = t.supportedOrigins,
        v = t.uri,
        S = _(!1),
        R = S[0],
        L = S[1],
        E = r("useWAWebGalaxyFlowIframeReadyTimeout")({
          onTimeout: function () {
            (h == null || h(), a(g));
          },
        }),
        k = E.markIframeReady;
      m(
        function () {
          var e = new (r("SecureMessageListener"))(window);
          return (
            e
              .setSupportedOrigins(b)
              .setEventHandler(function (e) {
                if (e.data != null && typeof e.data == "string") {
                  var t = JSON.parse(e.data),
                    n = t.eventName;
                  if (n === l) {
                    (k(), y == null || y(), L(!0));
                    return;
                  }
                }
                f(e);
              })
              .beginListening(),
            function () {
              e.stopListening();
            }
          );
        },
        [l, k, f, y, b, v],
      );
      var I = p(
          function () {
            return { opacity: R ? 1 : 0 };
          },
          [R],
        ),
        T = d(
          function () {
            return a(g);
          },
          [a, g],
        );
      return u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
        name: "iframe-wrapper",
        fallback: T,
        children: u.jsxs(
          "div",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props(n), {
            children: [
              !R && a(g),
              u.jsx("div", {
                style: I,
                children: u.jsx(
                  "iframe",
                  babelHelpers.extends(
                    {
                      frameBorder: "0",
                      sandbox: C,
                      src: v,
                      ref: s,
                      id: i,
                      title: i,
                    },
                    e.props(c),
                  ),
                ),
              }),
            ],
          }),
        ),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
