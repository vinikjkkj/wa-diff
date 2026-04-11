__d(
  "Actor",
  [
    "BaseActorProvider",
    "CometRelayEnvironmentFactory",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = s.jsx(
              o("BaseActorProvider").BaseActorProvider,
              babelHelpers.extends({}, e, {
                relayEnvironmentFactory: o("CometRelayEnvironmentFactory")
                  .CometRelayEnvironmentFactory,
                children: e.children,
              }),
            )),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function d() {
      var e = o("react-compiler-runtime").c(5),
        t = u(o("BaseActorProvider").ActorContext),
        n;
      e[0] !== t ? ((n = t.get()), (e[0] = t), (e[1] = n)) : (n = e[1]);
      var r;
      return (
        e[2] !== t.set || e[3] !== n
          ? ((r = [n, t.set]), (e[2] = t.set), (e[3] = n), (e[4] = r))
          : (r = e[4]),
        r
      );
    }
    ((l.ActorProvider = c), (l.useActor = d));
  },
  98,
);
