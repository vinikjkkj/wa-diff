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
      var t = o("react-compiler-runtime").c(10),
        n = e.displayAuthor,
        r = e.displayType,
        a = e.errorFallback,
        i = e.fallback,
        l = e.isForwardedCopy,
        u = e.msgKey,
        c;
      t[0] !== n ||
      t[1] !== r ||
      t[2] !== a ||
      t[3] !== i ||
      t[4] !== l ||
      t[5] !== u
        ? ((c = s.jsx(_, {
            displayAuthor: n,
            displayType: r,
            errorFallback: a,
            fallback: i,
            isForwardedCopy: l,
            msgKey: u,
          })),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l),
          (t[5] = u),
          (t[6] = c))
        : (c = t[6]);
      var d;
      return (
        t[7] !== i || t[8] !== c
          ? ((d = s.jsx(m.Provider, { value: i, children: c })),
            (t[7] = i),
            (t[8] = c),
            (t[9] = d))
          : (d = t[9]),
        d
      );
    }
    function g() {
      return d(m);
    }
    l.default = f;
  },
  98,
);
