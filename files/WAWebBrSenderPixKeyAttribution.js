__d(
  "WAWebBrSenderPixKeyAttribution",
  ["WAWebBrPartnerPixKeyAttribution", "WAWebContactGetters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { kind: "none" };
    function s(t) {
      var n;
      if (
        t == null ||
        (!o("WAWebContactGetters").getIsEnterprise(t) &&
          !o("WAWebContactGetters").getIsSmb(t)) ||
        o("WAWebContactGetters").getId(t).isBot()
      )
        return e;
      var r = (
        (n = o("WAWebContactGetters").getVerifiedName(t)) != null ? n : ""
      ).trim();
      return r === "" ? e : { bankName: r, kind: "verified", logoUrl: "" };
    }
    async function u(e, t) {
      var n, r;
      if (e.kind !== "verified" || t == null) return e;
      var a = await o("WAWebBrPartnerPixKeyAttribution").lookUpWithinWait(t),
        i = (n = a == null ? void 0 : a.bankName.trim()) != null ? n : "";
      return {
        bankName: i === "" ? e.bankName : i,
        kind: "verified",
        logoUrl: (r = a == null ? void 0 : a.imageUrl.trim()) != null ? r : "",
      };
    }
    ((l.resolveSenderPixKeyAttribution = s),
      (l.resolveSenderPixKeyAttributionFromCatalogue = u));
  },
  98,
);
