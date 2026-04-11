__d(
  "WAWebGetFBAccountPages",
  [
    "WAWebGetFBAccountPagesQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r,
            a =
              e !== void 0 ? e : (e = n("WAWebGetFBAccountPagesQuery.graphql")),
            i = yield o("WAWebRelayClient").fetchQuery(
              a,
              { userId: t.bp_id },
              { accessToken: t.token, environmentType: "facebook" },
            ),
            l =
              i == null ||
              (r = i.user) == null ||
              (r = r.facebook_pages) == null
                ? void 0
                : r.nodes;
          return l == null
            ? []
            : l
                .filter(function (e) {
                  return (
                    e.permitted_tasks.includes("PROFILE_PLUS_ADVERTISE") ||
                    e.permitted_tasks.includes("ADVERTISE")
                  );
                })
                .map(function (e) {
                  var t, n, r, o;
                  return {
                    id: (t = e.id) != null ? t : "",
                    name: (n = e.name) != null ? n : "",
                    profile_picture:
                      (r = (o = e.profile_picture) == null ? void 0 : o.uri) !=
                      null
                        ? r
                        : "",
                  };
                });
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
