__d(
  "WAWebCrosspostingMsgHydration",
  [
    "WAWebCrosspostingBackendGatingUtils",
    "WAWebCrosspostingDBOperations",
    "WAWebMsgGetters",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o("WAWebMsgGetters").getIsStatus(e) &&
            o("WAWebCrosspostingBackendGatingUtils").statusCrosspostingEnabled()
          ) {
            var t = e.id.toString(),
              n = yield o(
                "WAWebCrosspostingDBOperations",
              ).getCrosspostingInfoForMessage(t);
            n != null && (e.crosspostingInfo = n);
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            e.length !== 0 &&
            o("WAWebCrosspostingBackendGatingUtils").statusCrosspostingEnabled()
          ) {
            var t = e.map(function (e) {
                return e.id.toString();
              }),
              n = yield o(
                "WAWebCrosspostingDBOperations",
              ).getCrosspostingInfoForMessagesBulk(t);
            for (var r of e) {
              var a = n.get(r.id.toString());
              a != null && (r.crosspostingInfo = a);
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    ((l.hydrateCrosspostingInfo = e), (l.hydrateCrosspostingInfoBulk = u));
  },
  98,
);
