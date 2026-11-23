__d(
  "WAWebBizGetWidFromPathCustomUrlAction",
  ["WALogger", "WAWebBizGetCustomUrlUserGraphql", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n,
        r = await o("WAWebBizGetCustomUrlUserGraphql").queryCustomUrlUser(t);
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
      return a != null ? o("WAWebWidFactory").createUserWidOrThrow(a) : null;
    }
    l.getWidfromPath = s;
  },
  98,
);
