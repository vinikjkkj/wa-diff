__d(
  "WAWebContactManagerCustomerProfileDecoders",
  ["WATimeUtils", "WAWebCustomerProfileAcquisitionSource", "WAWebLeadStage"],
  function (t, n, r, o, a, i, l) {
    var e = 0,
      s = 4;
    function u(e) {
      return e === "INTAKE"
        ? o("WAWebLeadStage").LeadStage.INTAKE
        : e === "QUALIFIED"
          ? o("WAWebLeadStage").LeadStage.QUALIFIED
          : e === "CONVERTED"
            ? o("WAWebLeadStage").LeadStage.CONVERTED
            : e === "LOST"
              ? o("WAWebLeadStage").LeadStage.LOST
              : e === "NOT_QUALIFIED"
                ? o("WAWebLeadStage").LeadStage.NOT_QUALIFIED
                : e === "NONE"
                  ? o("WAWebLeadStage").LeadStage.NONE
                  : null;
    }
    function c(t) {
      return t === "CTWA" ? e : t === "REFERRAL" ? s : null;
    }
    function d(e) {
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
    function m(e) {
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
    function p(e) {
      return e != null ? o("WATimeUtils").castToUnixTime(e) : null;
    }
    function _(e) {
      var t = 0;
      for (var n of e) n != null && n > t && (t = n);
      return o("WATimeUtils").castToUnixTime(t);
    }
    ((l.toLeadStageType = u),
      (l.toAcquisitionSourceId = c),
      (l.toProfileAcquisitionSourceId = d),
      (l.fromProfileAcquisitionSourceId = m),
      (l.toOptionalUnixTime = p),
      (l.latestUpdateTs = _));
  },
  98,
);
