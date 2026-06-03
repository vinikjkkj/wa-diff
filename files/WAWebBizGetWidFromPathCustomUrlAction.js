__d(
  "WAWebBizGetWidFromPathCustomUrlAction",
  [
    "WALogger",
    "WAWebBizCustomUrlGetUserGraphql",
    "WAWebBizGetCustomUrlUserGraphql",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "justknobx",
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
          if (r("justknobx")._("707")) {
            var a = yield o(
              "WAWebBizCustomUrlGetUserGraphql",
            ).queryCustomUrlGetUser(t);
            return a.type !== "success"
              ? (a.errorCode !== 404 &&
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[custom-url] Error fetching user by custom url v2 ",
                          " ",
                          "",
                        ])),
                      a.errorCode,
                      a.errorText,
                    )
                    .sendLogs("get-user-by-custom-url-v2-graphql-error"),
                null)
              : a.lid != null
                ? o("WAWebWidFactory").createUserWidOrThrow(a.lid)
                : null;
          }
          var i = yield o("WAWebBizGetCustomUrlUserGraphql").queryCustomUrlUser(
            t,
          );
          if (i.type === "error")
            return (
              i.errorCode !== 404 &&
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[custom-url] Error fetching user by custom url ",
                        " ",
                        "",
                      ])),
                    i.errorCode,
                    i.errorText,
                  )
                  .sendLogs("get-user-by-custom-url-graphql-error"),
              null
            );
          var l = (n = i.user) == null ? void 0 : n.jid;
          return l != null
            ? o("WAWebWidFactory").createUserWidOrThrow(l)
            : null;
        })),
        c.apply(this, arguments)
      );
    }
    l.getWidfromPath = u;
  },
  98,
);
