__d(
  "WAWebVoipCheckOngoingCalls",
  [
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipStackInterface",
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
          var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (e != null) {
            yield o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.waitUntilLoaded();
            var t = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getModelsArray();
            if (t.length !== 0) {
              var n = [],
                r = [];
              for (var a of t) {
                var i,
                  l = (i = a.id) == null ? void 0 : i.id,
                  s = a.callCreator;
                l != null && s != null && (n.push(l), r.push(s.toString()));
              }
              n.length > 0 && (yield e.checkOngoingCalls(n, r));
            }
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.checkOngoingCalls = e;
  },
  98,
);
