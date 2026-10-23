__d(
  "WAWebCustomerProfileAcquisitionSourceNames",
  [
    "fbt",
    "WAWebCustomerManagerCustomerProfileDecoders",
    "WAWebCustomerProfileAcquisitionSource",
  ],
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
        var a;
        if (
          ((a = o(
            "WAWebCustomerManagerCustomerProfileDecoders",
          ).toAcquisitionSourceFilterText(r)) == null
            ? void 0
            : a.toLowerCase()) === n
        )
          return r;
      }
      for (var i of o("WAWebCustomerProfileAcquisitionSource")
        .PROFILE_ACQUISITION_SOURCE_ORDER) {
        var l = e(i);
        if (l != null && String(l).toLowerCase() === n) return i;
      }
      return null;
    }
    ((l.getProfileAcquisitionSourceLabel = e),
      (l.getProfileAcquisitionSourceIdFromLabel = u));
  },
  226,
);
