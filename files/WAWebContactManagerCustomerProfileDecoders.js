__d(
  "WAWebContactManagerCustomerProfileDecoders",
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
    ((l.toLeadStageType = e),
      (l.toLeadStageFilterText = s),
      (l.toAcquisitionSourceFilterText = u),
      (l.toProfileAcquisitionSourceId = c),
      (l.fromProfileAcquisitionSourceId = d),
      (l.toOptionalUnixTime = m),
      (l.latestUpdateTs = p));
  },
  98,
);
