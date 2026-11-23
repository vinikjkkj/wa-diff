__d(
  "WAWebUiRuntimeWebDi",
  ["WAWebReactionUiServiceWebLive", "WebDi.Fx", "WebDi.Run"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    async function s(e, t) {
      var n = await u();
      return (await n.run(o("WebDi.Fx").flatMap(t)(e))).getOrThrow();
    }
    function u() {
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
