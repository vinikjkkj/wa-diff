__d(
  "WAWebBizGetWidFromPathCustomUrlAction",
  [
    "WALogger",
    "WAWebBizGetCustomUrlUserGraphql",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r = yield o("WAWebBizGetCustomUrlUserGraphql").queryCustomUrlUser(
              t,
            );
          if (r.type === "error")
            return (
              r.errorCode !== 404 &&
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[custom-url] Error fetching user by custom url ",
                        " ",
                        "",
                      ])),
                    r.errorCode,
                    r.errorText,
                  )
                  .sendLogs("get-user-by-custom-url-graphql-error"),
              null
            );
          var a = (n = r.user) == null ? void 0 : n.jid;
          return a != null
            ? o("WAWebWidFactory").createUserWidOrThrow(a)
            : null;
        })),
        u.apply(this, arguments)
      );
    }
    l.getWidfromPath = s;
  },
  98,
);
