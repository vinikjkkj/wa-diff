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
    function u(t) {
      var n = t.trim().toLowerCase();
      if (n === "") return null;
      for (var r of o("WAWebCustomerProfileAcquisitionSource")
        .PROFILE_ACQUISITION_SOURCE_ORDER) {
        var a = e(r);
        if (a != null && String(a).toLowerCase() === n) return r;
      }
      return null;
    }
    ((l.getProfileAcquisitionSourceLabel = e),
      (l.getProfileAcquisitionSourceIdFromLabel = u));
  },
  226,
);
