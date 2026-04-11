__d(
  "WAWebEditFormParsers",
  ["WAWebSmbUtils"],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
      var e = t.address,
        n = t.businessHours,
        r = t.categories,
        a = t.description,
        i = t.email,
        l = t.latitude,
        s = t.longitude,
        u = t.memberSinceText,
        c = t.profileOptions,
        d = t.website,
        m = d || [],
        p = m[0],
        _ = m[1];
      return {
        address: e,
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
    };
    l.convertRawBusinessProfile = e;
  },
  98,
);
