__d(
  "WAWebContactFormsUrl",
  ["WAWebL10N"],
  function (t, n, r, o, a, i, l) {
    var e = "https://www.whatsapp.com/contact/forms/";
    function s(t) {
      return "" + e + t;
    }
    function u(e, t, n) {
      return (
        n === void 0 && (n = "aus_ref"),
        s(t) +
          "?b=" +
          e +
          "&ref=" +
          n +
          "&lang=" +
          r("WAWebL10N").getNormalizedLocale()
      );
    }
    function c(e, t) {
      t === void 0 && (t = "uk_ref");
      var n = "";
      return (
        e != null && (n = "&b=" + e),
        s("2144717662630519") +
          "?ref=" +
          t +
          "&lang=" +
          r("WAWebL10N").getNormalizedLocale() +
          n
      );
    }
    function d() {
      return "https://help.meta.com/requests/1353992216220127";
    }
    ((l.getReportContentAUSFormUrl = u),
      (l.getReportContentUKFormUrl = c),
      (l.getReportContentUSNCIIFormUrl = d));
  },
  98,
);
