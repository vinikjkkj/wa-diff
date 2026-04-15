__d(
  "WAWebSignupLoadingSpinner.react",
  [
    "WAWebSignupLoadingState",
    "WAWebSpinner.react",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.chat,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = o("WAWebSignupLoadingState").getSignupLoadingEmitter()),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] !== n.id
        ? ((i = function () {
            return o("WAWebSignupLoadingState").isSignupLoading(
              n.id.toString(),
            );
          }),
          (t[1] = n.id),
          (t[2] = i))
        : (i = t[2]);
      var l = r("useWAWebEventTargetValue")(
        a,
        o("WAWebSignupLoadingState").SIGNUP_LOADING_CHANGE_EVENT,
        i,
      );
      if (!l) return null;
      var u;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = { className: "x78zum5 xl56j7k x1p57kb1 xvg22vi" }), (t[3] = u))
        : (u = t[3]);
      var c;
      return (
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = s.jsx(
              "div",
              babelHelpers.extends({}, u, {
                "data-testid": void 0,
                children: s.jsx(o("WAWebSpinner.react").Spinner, {
                  size: 28,
                  stroke: 3,
                  color: "default",
                }),
              }),
            )),
            (t[4] = c))
          : (c = t[4]),
        c
      );
    }
    l.default = u;
  },
  98,
);
