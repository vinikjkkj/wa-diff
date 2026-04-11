__d(
  "Hyperion",
  ["Env", "ExecutionEnvironment", "hyperionCore", "hyperionDOM"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    (u || (u = r("ExecutionEnvironment"))).isInBrowser &&
      !(u || (u = r("ExecutionEnvironment"))).isInWorker &&
      (c || (c = r("Env"))).loadHyperion === !0 &&
      (e || (e = o("hyperionCore"))).intercept(
        t,
        (s || (s = o("hyperionDOM"))).IWindow.IWindowPrototype,
      );
  },
  34,
);
