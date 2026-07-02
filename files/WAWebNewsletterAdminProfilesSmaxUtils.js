__d(
  "WAWebNewsletterAdminProfilesSmaxUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t, n;
      return e == null || e.name == null
        ? null
        : {
            id: e.id,
            name: e.name.elementValue,
            pictureDirectPath: (t = e.picture) == null ? void 0 : t.directPath,
            pictureId: (n = e.picture) == null ? void 0 : n.id,
          };
    }
    i.mapAdminProfileInfoFromAdminProfileMixin = e;
  },
  66,
);
