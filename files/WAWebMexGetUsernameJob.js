__d(
  "WAWebMexGetUsernameJob",
  [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexGetUsernameJobQuery.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t =
            e !== void 0 ? e : (e = n("WAWebMexGetUsernameJobQuery.graphql"));
          try {
            var r,
              a = yield o("WAWebMexClient").fetchQuery(t, {}),
              i = (r = a.xwa2_username_get) == null ? void 0 : r.username_info;
            return {
              username: i == null ? void 0 : i.username,
              state: i == null ? void 0 : i.state,
              pin: i == null ? void 0 : i.pin,
            };
          } catch (e) {
            if (
              e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
              e.statusCode === 404
            )
              return { username: null, state: null, pin: null };
            throw e;
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.mexGetUsernameQueryJob = s;
  },
  98,
);
