__d(
  "WAWebBrSenderPixKeyAttribution",
  ["WAWebContactGetters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { kind: "none" };
    function s(t) {
      var n;
      if (
        t == null ||
        (!o("WAWebContactGetters").getIsEnterprise(t) &&
          !o("WAWebContactGetters").getIsSmb(t))
      )
        return e;
      var r = (
        (n = o("WAWebContactGetters").getVerifiedName(t)) != null ? n : ""
      ).trim();
      return r === "" ? e : { bankName: r, kind: "verified", logoUrl: "" };
    }
    l.resolveSenderPixKeyAttribution = s;
  },
  98,
);
