__d(
  "createKeyCommandWidget",
  ["FBLogger", "createKeyCommandWrapper", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect;
    function m(e) {
      e === void 0 && (e = !0);
      var t = s.createContext(),
        n = r("createKeyCommandWrapper")(e, t);
      function a(e, n, a) {
        var i = o("react-compiler-runtime").c(6),
          l = n === void 0 ? !1 : n,
          s = c(t),
          u,
          m;
        (i[0] !== e || i[1] !== a || i[2] !== l || i[3] !== s
          ? ((u = function () {
              if (!s) {
                l ||
                  r("FBLogger")("comet_ax").mustfix(
                    "Attempting to register a key command outside of its widget scope. Calls to useKeyCommand must be within its widget's wrapper.",
                  );
                return;
              }
              if (e) return s.addCommands(e, a);
            }),
            (m = [s, e, l, a]),
            (i[0] = e),
            (i[1] = a),
            (i[2] = l),
            (i[3] = s),
            (i[4] = u),
            (i[5] = m))
          : ((u = i[4]), (m = i[5])),
          d(u, m));
      }
      return { Context: t, Wrapper: n, useKeyCommands: a };
    }
    l.default = m;
  },
  98,
);
