__d(
  "WAWebContactManagerCustomerProfileDecoders",
  [
    "WATimeUtils",
    "WAWebCustomerProfileAcquisitionSource",
    "WAWebLeadStage",
    "XFBWACustomerProfileAcquisitionSource.facebook",
    "XFBWACustomerProfileLeadStage.facebook",
  ],
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
    function c(e) {
      return r("XFBWACustomerProfileLeadStage.facebook").getName(
        e === o("WAWebLeadStage").LeadStage.INTAKE
          ? "INTAKE"
          : e === o("WAWebLeadStage").LeadStage.QUALIFIED
            ? "QUALIFIED"
            : e === o("WAWebLeadStage").LeadStage.CONVERTED
              ? "CONVERTED"
              : e === o("WAWebLeadStage").LeadStage.LOST
                ? "LOST"
                : e === o("WAWebLeadStage").LeadStage.NOT_QUALIFIED
                  ? "NOT_QUALIFIED"
                  : e === o("WAWebLeadStage").LeadStage.NONE
                    ? "NONE"
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })(),
      );
    }
    function d(t) {
      return t === "CTWA" ? e : t === "REFERRAL" ? s : null;
    }
    function m(t) {
      var n = t === e ? "CTWA" : t === s ? "REFERRAL" : null;
      return n != null
        ? r("XFBWACustomerProfileAcquisitionSource.facebook").getName(n)
        : null;
    }
    function p(e) {
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
    function _(e) {
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
    function f(e) {
      return e != null ? o("WATimeUtils").castToUnixTime(e) : null;
    }
    function g(e) {
      var t = 0;
      for (var n of e) n != null && n > t && (t = n);
      return o("WATimeUtils").castToUnixTime(t);
    }
    ((l.toLeadStageType = u),
      (l.toLeadStageFilterText = c),
      (l.toAcquisitionSourceId = d),
      (l.toAcquisitionSourceFilterText = m),
      (l.toProfileAcquisitionSourceId = p),
      (l.fromProfileAcquisitionSourceId = _),
      (l.toOptionalUnixTime = f),
      (l.latestUpdateTs = g));
  },
  98,
);
