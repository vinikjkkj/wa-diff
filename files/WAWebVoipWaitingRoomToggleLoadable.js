__d(
  "WAWebVoipWaitingRoomToggleLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = yield r("JSResourceForInteraction")(
          "WAWebVoipWaitingRoomToggleJob",
        )
          .__setRef("WAWebVoipWaitingRoomToggleLoadable")
          .load();
        return e.toggleWaitingRoomForCallLink;
      }),
      "WAWebVoipWaitingRoomToggle",
    );
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield e();
          return n(t);
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      e();
    }
    ((l.toggleWaitingRoomLoadable = s), (l.preloadWaitingRoomToggle = c));
  },
  98,
);
