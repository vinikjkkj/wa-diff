__d(
  "MAIBAR21FBGate.entrypointutils",
  ["MAIBAR21MBSGate.entrypointutils", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        r("gkx")("29388") &&
        o("MAIBAR21MBSGate.entrypointutils").isMAIBAR21MBSActorEnabled() &&
        r("qex")._("6067") === !0
      );
    }
    l.isMAIBAR21FBActorEnabled = e;
  },
  98,
);
