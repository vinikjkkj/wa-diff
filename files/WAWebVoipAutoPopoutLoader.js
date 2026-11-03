__d(
  "WAWebVoipAutoPopoutLoader",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")("WAWebVoipAutoPopout")
          .__setRef("WAWebVoipAutoPopoutLoader")
          .load();
      }, "WAWebVoipAutoPopout"),
      s = null;
    function u() {
      return s;
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          s = yield e();
        })),
        d.apply(this, arguments)
      );
    }
    ((l.getAutoPopout = u), (l.loadAutoPopout = c));
  },
  98,
);
