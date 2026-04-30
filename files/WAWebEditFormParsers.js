__d(
  "WAWebEditFormParsers",
  ["WAWebSmbUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.address,
        n = e.businessHours,
        r = e.categories,
        a = e.description,
        i = e.email,
        l = e.latitude,
        s = e.longitude,
        u = e.memberSinceText,
        c = e.profileOptions,
        d = e.website,
        m = d || [],
        p = m[0],
        _ = m[1];
      return {
        address: t,
        categories: r || [],
        description: a,
        email: i,
        hours: o("WAWebSmbUtils").getBusinessHoursForEdit(n),
        latitude: l,
        longitude: s,
        memberSinceText: u,
        primaryWebsite: p == null ? void 0 : p.url,
        profileOptions: c,
        secondaryWebsite: _ == null ? void 0 : _.url,
      };
    }
    l.convertRawBusinessProfile = e;
  },
  98,
);
