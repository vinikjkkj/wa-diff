__d(
  "WAWebHatchJarvisBubbleLoadable",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.createContext,
      m = c.useContext,
      p = d(null),
      _ = r("JSResourceForInteraction")(
        "WAWebHatchJarvisForwardSendPolicy",
      ).__setRef("WAWebHatchJarvisBubbleLoadable"),
      f = r("WAWebLazyLoadedRetriable")(async function () {
        return (
          _.load().catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[hatch-jarvis-forward] send policy failed to load",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("hatch-jarvis-forward-policy-load-failed");
          }),
          r("JSResourceForInteraction")("WAWebHatchJarvisBubble.react")
            .__setRef("WAWebHatchJarvisBubbleLoadable")
            .load()
        );
      }, "HatchJarvisBubble"),
      g = r("WAWebLoadable")({
        loader: f,
        loading: function () {
          return u.jsx(y, {});
        },
        renderLoadingImmediately: !0,
      });
    function h(e) {
      var t = e.displayAuthor,
        n = e.displayType,
        r = e.errorFallback,
        o = e.fallback,
        a = e.isForwardedCopy,
        i = e.msgKey;
      return u.jsx(p.Provider, {
        value: o,
        children: u.jsx(g, {
          displayAuthor: t,
          displayType: n,
          errorFallback: r,
          fallback: o,
          isForwardedCopy: a,
          msgKey: i,
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return m(p);
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
