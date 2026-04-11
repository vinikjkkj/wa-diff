__d(
  "WAWebBizGetWidFromPathCustomUrlAction",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizGatingUtils",
    "WAWebBizGetCustomUrlUserGraphql",
    "WAWebBizGetCustomUserJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          if (
            o("WAWebBizGatingUtils").isGetCustomUrlUserGraphqlMigrationEnabled()
          ) {
            var r = yield d(t);
            r != null && (n = o("WAWebWidFactory").createUserWidOrThrow(r));
          } else
            try {
              var a = yield o("WAWebBizGetCustomUserJob").getUserByCustomURL(t);
              n = o("WAWebWidFactory").createUserWidOrThrow(a.user.jid);
            } catch (t) {
              if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError)
                return (
                  t.statusCode !== 404 &&
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[custom-url] Error fetching user by custom url",
                          ])),
                      )
                      .catching(t)
                      .sendLogs("get-user-by-custom-url-error"),
                  null
                );
              throw t;
            }
          return n;
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebBizGetCustomUrlUserGraphql").queryCustomUrlUser(
              e,
            );
          return n.type === "error"
            ? (n.errorCode !== 404 &&
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[custom-url] Error fetching user by custom url ",
                        " ",
                        "",
                      ])),
                    n.errorCode,
                    n.errorText,
                  )
                  .sendLogs("get-user-by-custom-url-graphql-error"),
              null)
            : (t = n.user) == null
              ? void 0
              : t.jid;
        })),
        m.apply(this, arguments)
      );
    }
    l.getWidfromPath = u;
  },
  98,
);
