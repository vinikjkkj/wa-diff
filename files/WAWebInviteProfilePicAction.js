__d(
  "WAWebInviteProfilePicAction",
  ["WAWebGroupInviteProfilePicJob", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = { type: "preview", query: "url" },
            r = yield o(
              "WAWebGroupInviteProfilePicJob",
            ).queryGroupInviteLinkProfilePicJob(e, t, n);
          return r.url;
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = { type: "image", query: "url" },
              i = yield o(
                "WAWebGroupInviteProfilePicJob",
              ).queryGroupInviteMessageProfilePicJob(e, t, n, r, a);
            return i.url;
          },
        )),
        c.apply(this, arguments)
      );
    }
    ((l.queryGroupInviteLinkProfilePicURL = e),
      (l.queryGroupInviteMessageProfilePicURL = u));
  },
  98,
);
