__d(
  "WAWebSignupLoadingSpinner.react",
  [
    "WAWebSignupLoadingState",
    "WAWebSpinner.react",
    "react",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.chat,
        n = r("useWAWebEventTargetValue")(
          o("WAWebSignupLoadingState").getSignupLoadingEmitter(),
          o("WAWebSignupLoadingState").SIGNUP_LOADING_CHANGE_EVENT,
          function () {
            return o("WAWebSignupLoadingState").isSignupLoading(
              t.id.toString(),
            );
          },
        );
      return n
        ? s.jsx("div", {
            className: "x78zum5 xl56j7k x1p57kb1 xvg22vi",
            "data-testid": void 0,
            children: s.jsx(o("WAWebSpinner.react").Spinner, {
              size: 28,
              stroke: 3,
              color: "default",
            }),
          })
        : null;
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
