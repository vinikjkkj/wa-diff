__d(
  "WAWebGuestMessagingProfilePicApi",
  ["WAWebSchemaProfilePicThumb", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebSchemaProfilePicThumb")
            .getProfilePicThumbTable()
            .get(e);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebSchemaProfilePicThumb")
            .getProfilePicThumbTable()
            .createOrReplace(e);
        })),
        c.apply(this, arguments)
      );
    }
    ((l.fetchProfilePicFromDB = e), (l.persistProfilePic = u));
  },
  98,
);
