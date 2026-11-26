__d(
  "WAWebHatchJarvisBubbleLoadable",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadFailureSignal.react",
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
      p = c.useMemo,
      _ = d(null),
      f = d(null),
      g = r("JSResourceForInteraction")(
        "WAWebHatchJarvisForwardSendPolicy",
      ).__setRef("WAWebHatchJarvisBubbleLoadable"),
      h = r("WAWebLazyLoadedRetriable")(async function () {
        return (
          g.load().catch(function (t) {
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
      y = r("WAWebLoadable")({
        loader: h,
        loading: function (t) {
          var e = t.error;
          return u.jsx(b, { hasFailed: e != null });
        },
        renderLoadingImmediately: !0,
      });
    function C(e) {
      var t = e.contentKey,
        n = e.displayAuthor,
        r = e.displayType,
        o = e.errorFallback,
        a = e.fallback,
        i = e.isForwardedCopy,
        l = e.msgKey,
        s = e.onContentError,
        c = p(
          function () {
            return s == null ? null : { contentKey: t, onContentError: s };
          },
          [t, s],
        );
      return u.jsx(_.Provider, {
        value: a,
        children: u.jsx(f.Provider, {
          value: c,
          children: u.jsx(y, {
            displayAuthor: n,
            displayType: r,
            errorFallback: o,
            fallback: a,
            isForwardedCopy: i,
            msgKey: l,
          }),
        }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.hasFailed,
        n = m(_),
        o = m(f);
      return u.jsxs(u.Fragment, {
        children: [
          n,
          t && o != null
            ? u.jsx(r("WAWebLazyLoadFailureSignal.react"), {
                contentKey: o.contentKey,
                onLoadFailure: o.onContentError,
              })
            : null,
        ],
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = C));
  },
  98,
);
