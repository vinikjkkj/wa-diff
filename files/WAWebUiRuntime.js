__d(
  "WAWebUiRuntime",
  ["WAWebReactionUiServiceClient", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s(t) {
      e = {
        WAReactionUiService: o(
          "WAWebReactionUiServiceClient",
        ).reactionUiServiceClient(t),
      };
    }
    function u() {
      return e != null;
    }
    function c(t) {
      return r("nullthrows")(e)[t.id];
    }
    ((l.registerUiRun = s), (l.isWebDiUiEnabled = u), (l.uiRuntime = c));
  },
  98,
);
