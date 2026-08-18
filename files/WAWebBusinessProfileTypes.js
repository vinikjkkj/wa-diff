__d(
  "WAWebBusinessProfileTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = "wa.me/",
      l = { UNKNOWN: 0, LOW: 1, HIGH: 2 };
    function s(e) {
      if (e != null)
        return e === "unknown"
          ? l.UNKNOWN
          : e === "low"
            ? l.LOW
            : e === "high"
              ? l.HIGH
              : l.UNKNOWN;
    }
    var u = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
      c = {
        OPEN_24H: "open_24h",
        SPECIFIC_HOURS: "specific_hours",
        APPOINTMENT_ONLY: "appointment_only",
      },
      d = n("$InternalEnum")({
        CATALOG: "catalog",
        NONE: "none",
        SHOP: "shop",
        META_CATALOG: "smb_meta_catalog",
      });
    function m(e) {
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
    var p = {
        limitedLiabilityPartnership: "Limited liability partnership",
        soleProprietorship: "Sole proprietorship",
        partnership: "Partnership",
        publicCompany: "Public Company",
        privateCompany: "Private Company",
        other: "Other",
      },
      _ = { WEBSITE: 256, DESCRIPTION: 512, EMAIL: 128, ADDRESS: 256 };
    ((i.BUSINESS_URL_DOMAIN = e),
      (i.VERIFIED_LEVEL = l),
      (i.convertLevel = s),
      (i.DAYS_OF_WEEK = u),
      (i.BUSINESS_HOUR_MODES = c),
      (i.CommerceExperienceTypes = d),
      (i.isBusinessHoursDayName = m),
      (i.businessTypeOptions = p),
      (i.BUSINESS_PROFILE_FIELDS_LENGTH = _));
  },
  66,
);
