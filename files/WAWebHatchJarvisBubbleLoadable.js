__d(
  "WAWebHatchJarvisBubbleLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = c(null),
      p = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebHatchJarvisBubble.react")
            .__setRef("WAWebHatchJarvisBubbleLoadable")
            .load();
        }),
        "HatchJarvisBubble",
      ),
      _ = r("WAWebLoadable")({
        loader: p,
        loading: function () {
          return s.jsx(g, {});
        },
        renderLoadingImmediately: !0,
      });
    function f(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.displayAuthor,
        r = e.displayType,
        a = e.errorFallback,
        i = e.fallback,
        l = e.msgKey,
        u;
      t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i || t[4] !== l
        ? ((u = s.jsx(_, {
            displayAuthor: n,
            displayType: r,
            errorFallback: a,
            fallback: i,
            msgKey: l,
          })),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l),
          (t[5] = u))
        : (u = t[5]);
      var c;
      return (
        t[6] !== i || t[7] !== u
          ? ((c = s.jsx(m.Provider, { value: i, children: u })),
            (t[6] = i),
            (t[7] = u),
            (t[8] = c))
          : (c = t[8]),
        c
      );
    }
    function g() {
      return d(m);
    }
    l.default = f;
  },
  98,
);
