__d(
  "WASmaxInBizCtwaNativeAdEnums",
  ["WAJids"],
  function (t, n, r, o, a, i, l) {
    var e = {
        CITY: "CITY",
        COUNTRY: "COUNTRY",
        CUSTOM_LOCATION: "CUSTOM_LOCATION",
        NEIGHBORHOOD: "NEIGHBORHOOD",
        REGION: "REGION",
        ZIP: "ZIP",
      },
      s = { FACEBOOK: "FACEBOOK", INSTAGRAM: "INSTAGRAM" },
      u = { false: "false", true: "true" },
      c = { image: "image", video: "video" },
      d = { kilometer: "kilometer", mile: "mile" },
      m = {
        validators: [
          o("WAJids").validateDomainJid,
          o("WAJids").validateUserJid,
        ],
        typeName: "DomainJid|UserJid",
      };
    ((l.ENUM_CITY_COUNTRY_CUSTOMLOCATION_NEIGHBORHOOD_REGION_ZIP = e),
      (l.ENUM_FACEBOOK_INSTAGRAM = s),
      (l.ENUM_FALSE_TRUE = u),
      (l.ENUM_IMAGE_VIDEO = c),
      (l.ENUM_KILOMETER_MILE = d),
      (l.DOMAINJID_USERJID = m));
  },
  98,
);
