__d(
  "WAWebVoipStackInterface",
  [
    "JSResourceForInteraction",
    "WAWebVoipGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled()) return null;
          var e = yield r("JSResourceForInteraction")(
              "WAWebVoipStackInterfaceImpl",
            )
              .__setRef("WAWebVoipStackInterface")
              .load(),
            t = e.getVoipStackInterfaceImpl;
          return t();
        })),
        s.apply(this, arguments)
      );
    }
    l.getVoipStackInterface = e;
  },
  98,
);
