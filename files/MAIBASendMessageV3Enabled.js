__d(
  "MAIBASendMessageV3Enabled",
  ["ALToolTab", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        r("gkx")("13253") ||
        r("gkx")("6401") ||
        (o("ALToolTab").getCurrentToolTab().tool === "Business Help Center" &&
          r("gkx")("22361"))
      );
    }
    l.MAIBASendMessageV3Enabled = e;
  },
  98,
);
