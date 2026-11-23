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
        ? s._(/*BTDS*/ "")
        : e ===
            o("WAWebCustomerProfileAcquisitionSource")
              .PROFILE_ACQUISITION_SOURCE_ORGANIC
          ? s._(/*BTDS*/ "")
          : e ===
              o("WAWebCustomerProfileAcquisitionSource")
                .PROFILE_ACQUISITION_SOURCE_REFERRAL
            ? s._(/*BTDS*/ "")
            : e ===
                o("WAWebCustomerProfileAcquisitionSource")
                  .PROFILE_ACQUISITION_SOURCE_UNKNOWN
              ? s._(/*BTDS*/ "")
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
      for (var s of c()) {
        var u = s[0],
          d = s[1],
          m = s[2];
        if (n === d || m.toString().toLowerCase() === n) return u;
      }
      return null;
    }
    function c() {
      return [
        [
          o("WAWebCustomerProfileAcquisitionSource")
            .PROFILE_ACQUISITION_SOURCE_CTWA,
          "ctwa ad",
          s._(/*BTDS*/ ""),
        ],
        [
          o("WAWebCustomerProfileAcquisitionSource")
            .PROFILE_ACQUISITION_SOURCE_ORGANIC,
          "organic",
          s._(/*BTDS*/ ""),
        ],
      ];
    }
    ((l.getProfileAcquisitionSourceLabel = e),
      (l.getProfileAcquisitionSourceIdFromLabel = u));
  },
  226,
);
