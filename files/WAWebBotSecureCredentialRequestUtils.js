__d(
  "WAWebBotSecureCredentialRequestUtils",
  ["WAWebUnifiedResponseUtils", "isStringNotNullAndNotWhitespaceOnly"],
  function (t, n, r, o, a, i, l) {
    var e = new Set(["PASSWORD", "USERNAME"]);
    function s(e) {
      var t = e.footer_sections,
        n = e.sections,
        r = []
          .concat(n, t != null ? t : [])
          .flatMap(function (e) {
            return o("WAWebUnifiedResponseUtils").getPrimitives(e.view_model);
          })
          .filter(
            o("WAWebUnifiedResponseUtils").isSecureCredentialRequest,
          ).length;
      return (
        r === 1 &&
        n.some(function (e) {
          return (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.__typename === "GenAISingleLayoutViewModel" &&
              ((typeof e.primitive == "object" && e.primitive !== null) ||
                typeof e.primitive == "function") &&
              e.primitive.__typename ===
                "GenAISecureCredentialRequestPrimitive" &&
              "fields" in e.primitive
            ) {
              var t = e.primitive.fields,
                n = e.primitive;
              return u(t) && c(n);
            }
            return !1;
          })(e.view_model);
        })
      );
    }
    function u(t) {
      return (
        Array.isArray(t) &&
        t.some(function (e) {
          return e != null;
        }) &&
        t.every(function (t) {
          return t == null || e.has(String(t.name));
        })
      );
    }
    function c(e) {
      e: {
        var t = e;
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.__typename === "GenAISecureCredentialRequestPrimitive"
        ) {
          var n = t,
            r = n.fields,
            o = n.host,
            a = n.page_url,
            i = n.request_id,
            l = n.status,
            s = n.title;
          return (
            [i, s, o, a].every(d) &&
            Array.isArray(r) &&
            r.some(function (e) {
              return d(e == null ? void 0 : e.label);
            }) &&
            l === "PENDING" &&
            m(a, o)
          );
        }
        return !1;
      }
    }
    function d(e) {
      return (
        typeof e == "string" && r("isStringNotNullAndNotWhitespaceOnly")(e)
      );
    }
    function m(e, t) {
      try {
        var n = new URL(e),
          r = n.hostname,
          o = n.password,
          a = n.protocol,
          i = n.username;
        return a === "https:" && i === "" && o === "" && p(r) === p(t);
      } catch (e) {
        return !1;
      }
    }
    function p(e) {
      return e
        .trim()
        .toLowerCase()
        .replace(/^www\./, "");
    }
    ((l.isLoneTopLevelLoginRequest = s),
      (l.isLoginRequest = u),
      (l.normalizeHost = p));
  },
  98,
);
