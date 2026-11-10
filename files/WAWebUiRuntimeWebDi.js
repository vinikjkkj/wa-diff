__d(
  "WAWebUiRuntimeWebDi",
  [
    "WAWebReactionUiServiceWebLive",
    "WebDi.Fx",
    "WebDi.Run",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield c();
          return (yield n.run(o("WebDi.Fx").flatMap(t)(e))).getOrThrow();
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      return (
        e == null &&
          (e = o("WebDi.Run")
            .runtime([
              o("WAWebReactionUiServiceWebLive").ReactionUiServiceWebLive,
            ])
            .catch(function (t) {
              throw ((e = null), t);
            })),
        e
      );
    }
    l.run = s;
  },
  98,
);
