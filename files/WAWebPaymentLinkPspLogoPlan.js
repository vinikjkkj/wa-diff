__d(
  "WAWebPaymentLinkPspLogoPlan",
  ["WAWebPaymentLinkPspLogoAllowlist"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      if (e == null) return null;
      var r = o("WAWebPaymentLinkPspLogoAllowlist").getPspLogoSources(e),
        a = (n = s(e)) != null ? n : u(t);
      return r.length === 0 || a == null
        ? null
        : { brandName: a, pspId: e, sources: r };
    }
    function s(e) {
      return e === "getnet"
        ? "Getnet"
        : e === "cielo"
          ? "Cielo"
          : e === "mercadopago"
            ? "Mercado Pago"
            : e === "sumup"
              ? "SumUp"
              : e === "rede"
                ? "Rede"
                : e === "stone"
                  ? "Stone"
                  : e === "pag_seguro"
                    ? "PagBank"
                    : null;
    }
    function u(e) {
      var t = e == null ? void 0 : e.trim();
      return t == null || t === "" ? null : t;
    }
    ((l.getPaymentLinkPspLogoPlan = e), (l.getPspBrandName = s));
  },
  98,
);
