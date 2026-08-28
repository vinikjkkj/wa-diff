__d(
  "AdsMetadataWebsiteSourceItemTypes",
  [
    "fbt",
    "$InternalEnum",
    "AdsMetadataConnectedSourcesConstants",
    "DateConsts",
    "DateTime",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = n("$InternalEnum")({
        SITE_LINK: "site_link",
        INCENTIVE: "incentive",
      }),
      u = n("$InternalEnum")({
        PIXEL: "pixel",
        SPEC: "spec",
        DOMAIN_PREDICTION: "domain_prediction",
      }),
      c = n("$InternalEnum")({
        RETAILER_LINKS: "retailer_links",
        DISCOVERY_LINKS: "discovery_links",
      });
    function d(e, t) {
      if (!r("isTruthy")(e) || !r("isTruthy")(t)) return "";
      var n = new (r("DateTime"))(e, 1),
        a = new (r("DateTime"))(t - o("DateConsts").SEC_PER_DAY, 1),
        i = n.format("m/d/Y"),
        l = a.format("m/d/Y");
      return (
        " (" +
        o("AdsMetadataConnectedSourcesConstants").VALID.toString() +
        " " +
        i +
        " - " +
        l +
        ") "
      );
    }
    function m(e, t) {
      return e === "PERCENTAGE_OFF"
        ? s
            ._(/*BTDS*/ "{promotion amount}\u0025 off", [
              s._param("promotion amount", Math.round(t)),
            ])
            .toString()
        : e === "AMOUNT_OFF"
          ? s
              ._(/*BTDS*/ "${promotion amount} off", [
                s._param("promotion amount", Math.round(t)),
              ])
              .toString()
          : "";
    }
    function p(e) {
      var t,
        n = (t = e.required_code) != null ? t : "",
        o = d(e.start_date, e.end_date),
        a = r("isTruthy")(n) ? ": " : "";
      return "" + a + n + o;
    }
    function _(e) {
      return m(e.promotion_type, e.promotion_value);
    }
    function f(e) {
      var t = p(e),
        n = _(e);
      return t + "-" + n;
    }
    function g(e) {
      return e.description + "-" + e.primaryText;
    }
    ((l.AdsMetadataWebsiteSourceItemType = e),
      (l.UrlSource = u),
      (l.SalesChannel = c),
      (l.getDescription = p),
      (l.getPrimaryText = _),
      (l.getPromotionItemKey = f),
      (l.getItemKey = g));
  },
  226,
);
