__d(
  "WAWebHatchSecureCredentialDecoder",
  ["WATypeUtils", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebHatchJsonReaders").readArray(e, "items");
      if (t == null) return null;
      var n = [];
      for (var r of t) {
        var a = d(r);
        a != null && n.push(a);
      }
      return {
        items: n,
        nextCursor: o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(e, "next_cursor"),
        ),
      };
    }
    function s(e, t) {
      var n = d(e);
      return n == null ||
        n.id !== t ||
        o("WAWebHatchJsonReaders").readTrimmedString(e, "credential_type") !==
          "browser"
        ? null
        : babelHelpers.extends({}, n, {
            agentPermission: c(
              n.protectedFieldNames,
              o("WAWebHatchJsonReaders").readString(e, "agent_permission"),
            ),
            passwordPresent:
              o("WAWebHatchJsonReaders").readBool(e, "password_present") === !0,
            username: o("WAWebHatchJsonReaders").trimToNull(
              o("WAWebHatchJsonReaders").readTrimmedString(e, "username"),
            ),
          });
    }
    function u(e) {
      return o("WAWebHatchJsonReaders").trimToNull(
        o("WAWebHatchJsonReaders").readTrimmedString(e, "id"),
      );
    }
    function c(e, t) {
      return e.length === 0 ||
        new Set(e).size !== e.length ||
        !e.every(function (e) {
          return e === "username" || e === "password";
        })
        ? null
        : t === "ask"
          ? "ask"
          : t === "allow_for_origin" || t === "allow"
            ? "allow_for_origin"
            : null;
    }
    function d(e) {
      var t = o("WAWebHatchJsonReaders").readTrimmedString(e, "id");
      return o("WAWebHatchJsonReaders").isBlankText(t)
        ? null
        : {
            available:
              o("WAWebHatchJsonReaders").readBool(e, "available") === !0,
            id: t,
            label: o("WAWebHatchJsonReaders").trimToNull(
              o("WAWebHatchJsonReaders").readTrimmedString(e, "label"),
            ),
            origins: m(e, "origins"),
            protectedFieldNames: m(e, "protected_field_names"),
          };
    }
    function m(e, t) {
      var n = [];
      for (var r of (a = o("WAWebHatchJsonReaders").readArray(e, t)) != null
        ? a
        : []) {
        var a,
          i = o("WATypeUtils").isString(r) ? r.trim() : "";
        i !== "" && n.push(i);
      }
      return n;
    }
    ((l.decodeHatchSecureCredentialCatalogPage = e),
      (l.decodeHatchSecureCredentialDetails = s),
      (l.decodeHatchSecureCredentialCaptureId = u),
      (l.decodeHatchSecureCredentialAgentPermission = c));
  },
  98,
);
