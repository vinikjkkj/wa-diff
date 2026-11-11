__d(
  "WAWebMexPlaygroundModal",
  [
    "WALogger",
    "WAWebKeyboardHotKeys.react",
    "WAWebMexRelayEnvironment",
    "asyncToGeneratorRuntime",
    "graphiql",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.onClose,
        r = d,
        a;
      t[0] !== n ? ((a = { escape: n }), (t[0] = n), (t[1] = a)) : (a = t[1]);
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx("div", {
            className:
              "xtsfpqs xixxii4 x13vifvy x1o0tod x9f619 xh8yej3 x5yr21d",
            children: u.jsx(o("graphiql").GraphiQL, { fetcher: r }),
          })),
          (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== a
          ? ((l = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: a,
              children: i,
            })),
            (t[3] = a),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield o("WAWebMexRelayEnvironment").sendMexIq(t);
            return n.result != null ? JSON.parse(n.result) : { iqError: n };
          } catch (t) {
            var r = t;
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX] GraphiQL fetcher Error",
                  ])),
              )
              .tags("GQL", "MEX");
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.default = c;
  },
  98,
);
