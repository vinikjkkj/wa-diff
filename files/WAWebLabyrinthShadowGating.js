__d(
  "WAWebLabyrinthShadowGating",
  ["gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return !r("gkx")("23871") && !r("gkx")("7031")
        ? "storage-unavailable"
        : r("justknobx")._("8502")
          ? "killswitch-on"
          : r("gkx")("22127")
            ? "enabled"
            : "gated-off";
    }
    l.getLabyrinthShadowGate = e;
  },
  98,
);
