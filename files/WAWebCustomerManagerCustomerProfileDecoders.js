__d(
  "WAWebCustomerManagerCustomerProfileDecoders",
  [
    "WATimeUtils",
    "WAWebCustomerProfileAcquisitionSource",
    "WAWebLeadStage",
    "XFBWACustomerProfileAcquisitionSource.facebook",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e == null
        ? null
        : o("WAWebLeadStage").getLeadStageFromNumber(Number.parseInt(e, 10));
    }
    function s(e) {
      return String(e);
    }
    function u(e) {
      var t = d(e);
      return t != null
        ? r("XFBWACustomerProfileAcquisitionSource.facebook").getName(t)
        : null;
    }
    function c(e) {
      return e === "CTWA"
        ? o("WAWebCustomerProfileAcquisitionSource")
            .PROFILE_ACQUISITION_SOURCE_CTWA
        : e === "ORGANIC"
          ? o("WAWebCustomerProfileAcquisitionSource")
              .PROFILE_ACQUISITION_SOURCE_ORGANIC
          : e === "REFERRAL"
            ? o("WAWebCustomerProfileAcquisitionSource")
                .PROFILE_ACQUISITION_SOURCE_REFERRAL
            : e === "UNKNOWN"
              ? o("WAWebCustomerProfileAcquisitionSource")
                  .PROFILE_ACQUISITION_SOURCE_UNKNOWN
              : null;
    }
    function d(e) {
      return e ===
        o("WAWebCustomerProfileAcquisitionSource")
          .PROFILE_ACQUISITION_SOURCE_CTWA
        ? "CTWA"
        : e ===
            o("WAWebCustomerProfileAcquisitionSource")
              .PROFILE_ACQUISITION_SOURCE_ORGANIC
          ? "ORGANIC"
          : e ===
              o("WAWebCustomerProfileAcquisitionSource")
                .PROFILE_ACQUISITION_SOURCE_REFERRAL
            ? "REFERRAL"
            : e ===
                o("WAWebCustomerProfileAcquisitionSource")
                  .PROFILE_ACQUISITION_SOURCE_UNKNOWN
              ? "UNKNOWN"
              : null;
    }
    function m(e) {
      return e != null ? o("WATimeUtils").castToUnixTime(e) : null;
    }
    function p(e) {
      var t = 0;
      for (var n of e) n != null && n > t && (t = n);
      return o("WATimeUtils").castToUnixTime(t);
    }
    function _(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.fieldName,
          o = n.source,
          a = n.ts,
          i = f(o);
        r != null && i != null && t.set(r, { author: i, ts: m(a) });
      }
      return t;
    }
    function f(e) {
      return e === "BIZAI" ? "AI" : e === "HUMAN" ? "HUMAN" : null;
    }
    function g(e) {
      var t, n;
      return e.fieldType === "TEXT"
        ? (t = e.textValue) != null
          ? t
          : ""
        : e.fieldType === "DATE"
          ? (n = e.dateValue) != null
            ? n
            : ""
          : e.fieldType === "NUMERIC"
            ? e.numericValue != null
              ? String(e.numericValue)
              : ""
            : e.fieldType === "MONEY"
              ? y(e)
              : e.fieldType === "ENUM"
                ? h(e)
                : "";
    }
    function h(e) {
      var t,
        n = e.enumLabels,
        r = e.enumOptionKey,
        o = e.enumOptionKeys;
      return r == null ? "" : (t = n[o.indexOf(r)]) != null ? t : "";
    }
    function y(e) {
      var t = e.currencyDecimalPlaces,
        n = e.moneyAmount;
      if (n == null || t == null) return "";
      var r = n < 0 ? "-" : "";
      return "" + r + C(Math.abs(n), t);
    }
    function C(e, t) {
      if (t <= 0) return String(e);
      var n = String(e).padStart(t + 1, "0");
      return n.slice(0, -t) + "." + n.slice(-t);
    }
    ((l.toLeadStageType = e),
      (l.toLeadStageFilterText = s),
      (l.toAcquisitionSourceFilterText = u),
      (l.toProfileAcquisitionSourceId = c),
      (l.fromProfileAcquisitionSourceId = d),
      (l.toOptionalUnixTime = m),
      (l.latestUpdateTs = p),
      (l.toFieldUpdates = _),
      (l.formatCustomFieldValue = g));
  },
  98,
);
