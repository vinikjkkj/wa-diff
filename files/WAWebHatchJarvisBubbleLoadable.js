__d(
  "WAWebHatchJarvisBubbleLoadable",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
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
      f = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        }),
        "HatchJarvisBubble",
      ),
      g = r("WAWebLoadable")({
        loader: f,
        loading: function () {
          return u.jsx(y, {});
        },
        renderLoadingImmediately: !0,
      });
    function h(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.displayAuthor,
        r = e.displayType,
        a = e.errorFallback,
        i = e.fallback,
        l = e.isForwardedCopy,
        s = e.msgKey,
        c;
      t[0] !== n ||
      t[1] !== r ||
      t[2] !== a ||
      t[3] !== i ||
      t[4] !== l ||
      t[5] !== s
        ? ((c = u.jsx(g, {
            displayAuthor: n,
            displayType: r,
            errorFallback: a,
            fallback: i,
            isForwardedCopy: l,
            msgKey: s,
          })),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l),
          (t[5] = s),
          (t[6] = c))
        : (c = t[6]);
      var d;
      return (
        t[7] !== i || t[8] !== c
          ? ((d = u.jsx(p.Provider, { value: i, children: c })),
            (t[7] = i),
            (t[8] = c),
            (t[9] = d))
          : (d = t[9]),
        d
      );
    }
    function y() {
      return m(p);
    }
    l.default = h;
  },
  98,
);
