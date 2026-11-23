__d(
  "WAWebMexPlaygroundModal",
  [
    "WALogger",
    "WAWebKeyboardHotKeys.react",
    "WAWebMexRelayEnvironment",
    "graphiql",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.onClose,
        r = async function (n) {
          try {
            var t = await o("WAWebMexRelayEnvironment").sendMexIq(n);
            return t.result != null ? JSON.parse(t.result) : { iqError: t };
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX] GraphiQL fetcher Error",
                  ])),
              )
              .tags("GQL", "MEX");
          }
        };
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: { escape: n },
        children: u.jsx("div", {
          className: "xtsfpqs xixxii4 x13vifvy x1o0tod x9f619 xh8yej3 x5yr21d",
          children: u.jsx(o("graphiql").GraphiQL, { fetcher: r }),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
