__d(
  "React",
  [
    "FBLogger",
    "cr:1294158",
    "cr:15957",
    "react-compiler-runtime",
    "react-forget-runtime",
    "setupReactRefresh",
  ],
  function (t, n, r, o, a, i) {
    n("setupReactRefresh");
    var e = n("cr:1294158");
    (n("cr:15957"),
      n("react-forget-runtime").initReactForgetRuntime(e),
      n("react-compiler-runtime").initReactCompilerRuntime(e));
    var l = e.createFactory;
    ((e.createFactory = function () {
      return (
        n("FBLogger")("react", "createfactory").mustfix(
          "React.createFactory is not supported anymore",
        ),
        l.apply(void 0, arguments)
      );
    }),
      (e.useEffectEvent = e.experimental_useEffectEvent),
      (a.exports = e));
  },
  null,
);
