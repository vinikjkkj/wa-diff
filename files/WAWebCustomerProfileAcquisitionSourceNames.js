__d(
  "WAWebCustomerProfileAcquisitionSourceNames",
  ["fbt", "WAWebCustomerProfileAcquisitionSource"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e ===
        o("WAWebCustomerProfileAcquisitionSource")
          .PROFILE_ACQUISITION_SOURCE_CTWA
        ? s._(/*BTDS*/ "CTWA ad")
        : e ===
            o("WAWebCustomerProfileAcquisitionSource")
              .PROFILE_ACQUISITION_SOURCE_ORGANIC
          ? s._(/*BTDS*/ "Organic")
          : e ===
              o("WAWebCustomerProfileAcquisitionSource")
                .PROFILE_ACQUISITION_SOURCE_REFERRAL
            ? s._(/*BTDS*/ "Referral")
            : e ===
                o("WAWebCustomerProfileAcquisitionSource")
                  .PROFILE_ACQUISITION_SOURCE_UNKNOWN
              ? s._(/*BTDS*/ "Unknown")
              : null;
    }
    l.getProfileAcquisitionSourceLabel = e;
  },
  226,
);
