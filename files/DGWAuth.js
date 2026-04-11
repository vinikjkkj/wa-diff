__d(
  "DGWAuth",
  ["$InternalEnum", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      TEST: "0:0",
      FACEBOOK: "1:0",
      INTERNALFB: "2:0",
      OCULUS: "3:0",
      ENTERPRISEFB: "7:0",
      RECRUITINGFB: "8:0",
      INSTAGRAM: "6:0",
      HORIZON_WEB: "12:0",
      SPARK_WEB: "13:0",
      ABRA: "15:0",
      GUEST: "19:0",
    });
    function s(t) {
      if (t === "TEST") return e.TEST;
      if (t === "FACEBOOK") return e.FACEBOOK;
      if (t === "INTERNALFB") return e.INTERNALFB;
      if (t === "OCULUS") return e.OCULUS;
      if (t === "ENTERPRISEFB") return e.ENTERPRISEFB;
      if (t === "RECRUITINGFB") return e.RECRUITINGFB;
      if (t === "INSTAGRAM") return e.INSTAGRAM;
      if (t === "HORIZON_WEB") return e.HORIZON_WEB;
      if (t === "SPARK_WEB") return e.SPARK_WEB;
      if (t === "ABRA") return e.ABRA;
      if (t === "GUEST") return e.GUEST;
      throw r("err")("failed to convert string to DGWAuth Type");
    }
    function u(t) {
      if (t === e.TEST) return "TEST";
      if (t === e.FACEBOOK) return "FACEBOOK";
      if (t === e.INTERNALFB) return "INTERNALFB";
      if (t === e.OCULUS) return "OCULUS";
      if (t === e.ENTERPRISEFB) return "ENTERPRISEFB";
      if (t === e.RECRUITINGFB) return "RECRUITINGFB";
      if (t === e.INSTAGRAM) return "INSTAGRAM";
      if (t === e.HORIZON_WEB) return "HORIZON_WEB";
      if (t === e.SPARK_WEB) return "SPARK_WEB";
      if (t === e.ABRA) return "ABRA";
      if (t === e.GUEST) return "GUEST";
      throw r("err")("failed to convert DGWAuth to string");
    }
    ((l.DGWAuth = e), (l.fromStringToDGWAuth = s), (l.fromDGWAuthToString = u));
  },
  98,
);
