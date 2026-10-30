__d(
  "WAWebHatchPermissionConnectorsDecoder",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    var e = new Set(["allow", "ask", "deny"]),
      s = new Set(["auth", "internal", "policy_only"]);
    function u(e) {
      var t,
        n = [],
        r =
          (t = o("WAWebHatchJsonReaders").readObject(e, "result")) != null
            ? t
            : e;
      for (var a of (i = o("WAWebHatchJsonReaders").readArray(
        r,
        "connectors",
      )) != null
        ? i
        : []) {
        var i,
          l = o("WAWebHatchJsonReaders").trimToNull(
            o("WAWebHatchJsonReaders").readTrimmedString(a, "connector"),
          );
        l != null &&
          n.push({
            connector: l,
            hasCustomPermissions: c(a),
            settings: p(
              o("WAWebHatchJsonReaders").readObject(
                o("WAWebHatchJsonReaders").readObject(a, "display"),
                "settings",
              ),
            ),
          });
      }
      return n;
    }
    function c(e) {
      var t = d(o("WAWebHatchJsonReaders").readObject(e, "methods")),
        n =
          t.length > 0
            ? t
            : d(o("WAWebHatchJsonReaders").readObject(e, "actions")),
        r = new Set(
          m(o("WAWebHatchJsonReaders").readObject(e, "method_sources"))
            .filter(function (e) {
              var t = e[1];
              return t === "user_override";
            })
            .map(function (e) {
              var t = e[0];
              return t;
            }),
        );
      return n.some(function (e) {
        return r.has(e);
      });
    }
    function d(t) {
      return m(t)
        .filter(function (t) {
          var n = t[1];
          return typeof n == "string" && e.has(n.trim());
        })
        .map(function (e) {
          var t = e[0];
          return t;
        });
    }
    function m(e) {
      return typeof e != "object" || e == null || Array.isArray(e)
        ? []
        : Object.keys(e)
            .filter(function (e) {
              return e.trim() !== "";
            })
            .map(function (t) {
              return [t.trim(), o("WAWebHatchJsonReaders").readField(e, t)];
            });
    }
    function p(e) {
      var t,
        n =
          (t = o("WAWebHatchJsonReaders").trimToNull(
            o("WAWebHatchJsonReaders").readTrimmedString(e, "management_kind"),
          )) != null
            ? t
            : o("WAWebHatchJsonReaders").trimToNull(
                o("WAWebHatchJsonReaders").readTrimmedString(
                  e,
                  "managementKind",
                ),
              );
      return n == null || !s.has(n)
        ? null
        : {
            managementKind: n,
            visible: o("WAWebHatchJsonReaders").readBool(e, "visible") === !0,
          };
    }
    l.decodeHatchPermissionConnectors = u;
  },
  98,
);
