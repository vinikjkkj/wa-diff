__d(
  "WAWebBusinessProfileTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = { UNKNOWN: 0, LOW: 1, HIGH: 2 };
    function l(t) {
      if (t != null)
        return t === "unknown"
          ? e.UNKNOWN
          : t === "low"
            ? e.LOW
            : t === "high"
              ? e.HIGH
              : e.UNKNOWN;
    }
    var s = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
      u = {
        OPEN_24H: "open_24h",
        SPECIFIC_HOURS: "specific_hours",
        APPOINTMENT_ONLY: "appointment_only",
      },
      c = n("$InternalEnum")({
        CATALOG: "catalog",
        NONE: "none",
        SHOP: "shop",
        META_CATALOG: "smb_meta_catalog",
      });
    function d(e) {
      return (
        e === "sun" ||
        e === "mon" ||
        e === "tue" ||
        e === "wed" ||
        e === "thu" ||
        e === "fri" ||
        e === "sat"
      );
    }
    var m = {
        limitedLiabilityPartnership: "Limited liability partnership",
        soleProprietorship: "Sole proprietorship",
        partnership: "Partnership",
        publicCompany: "Public Company",
        privateCompany: "Private Company",
        other: "Other",
      },
      p = { WEBSITE: 256, DESCRIPTION: 512, EMAIL: 128, ADDRESS: 256 };
    ((i.VERIFIED_LEVEL = e),
      (i.convertLevel = l),
      (i.DAYS_OF_WEEK = s),
      (i.BUSINESS_HOUR_MODES = u),
      (i.CommerceExperienceTypes = c),
      (i.isBusinessHoursDayName = d),
      (i.businessTypeOptions = m),
      (i.BUSINESS_PROFILE_FIELDS_LENGTH = p));
  },
  66,
);
