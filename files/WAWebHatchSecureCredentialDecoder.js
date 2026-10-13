__d(
  "WAWebHatchSecureCredentialDecoder",
  ["WATypeUtils", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["https://agent.meta.ai", "https://muse.ai"],
      s = "/connect/browser-credentials";
    function u(e) {
      var t = o("WAWebHatchJsonReaders").readArray(e, "items");
      if (t == null) return null;
      var n = [];
      for (var r of t) {
        var a = _(r);
        a != null && n.push(a);
      }
      return {
        items: n,
        nextCursor: o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(e, "next_cursor"),
        ),
      };
    }
    function c(e, t) {
      var n = _(e);
      return n == null ||
        n.id !== t ||
        o("WAWebHatchJsonReaders").readTrimmedString(e, "credential_type") !==
          "browser"
        ? null
        : babelHelpers.extends({}, n, {
            agentPermission: p(
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
    function d(e) {
      return o("WAWebHatchJsonReaders").trimToNull(
        o("WAWebHatchJsonReaders").readTrimmedString(e, "id"),
      );
    }
    function m(e) {
      var t,
        n = o("WAWebHatchJsonReaders").readObject(e, "chat_event"),
        r = o("WAWebHatchJsonReaders").readObject(
          o("WAWebHatchJsonReaders").readObject(n, "payload"),
          "data",
        );
      if (
        o("WAWebHatchJsonReaders").readString(r, "type") !== "credentials_vault"
      )
        return null;
      var a =
          (t = o("WAWebHatchJsonReaders").trimToNull(
            o("WAWebHatchJsonReaders").readTrimmedString(n, "chat_id"),
          )) != null
            ? t
            : o("WAWebHatchJsonReaders").trimToNull(
                o("WAWebHatchJsonReaders").readTrimmedString(e, "chat_id"),
              ),
        i = g(
          o("WAWebHatchJsonReaders").readString(
            o("WAWebHatchJsonReaders").readObject(r, "data"),
            "url",
          ),
        );
      if (a == null || i == null) return null;
      var l = i.get("capture_authorization");
      return l == null || l === ""
        ? { sessionId: a }
        : { captureAuthorization: l, sessionId: a };
    }
    function p(e, t) {
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
    function _(e) {
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
            origins: f(e, "origins"),
            protectedFieldNames: f(e, "protected_field_names"),
          };
    }
    function f(e, t) {
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
    function g(e) {
      var t = y(e);
      if (e == null || t == null || !h(t) || e.split("#", 1)[0].includes("?"))
        return null;
      var n = new URLSearchParams(t.hash.slice(1)),
        r = Array.from(n.keys());
      if (new Set(r).size !== r.length) return null;
      var o = y(n.get("page_url"));
      return (o == null ? void 0 : o.protocol) === "https:" && !C(o) ? n : null;
    }
    function h(t) {
      return e.includes(t.origin) && t.pathname === s && !C(t);
    }
    function y(e) {
      if (e == null) return null;
      try {
        return new URL(e);
      } catch (e) {
        return null;
      }
    }
    function C(e) {
      return e.username !== "" || e.password !== "";
    }
    ((l.decodeHatchSecureCredentialCatalogPage = u),
      (l.decodeHatchSecureCredentialDetails = c),
      (l.decodeHatchSecureCredentialCaptureId = d),
      (l.decodeHatchSecureCredentialCaptureContext = m),
      (l.decodeHatchSecureCredentialAgentPermission = p));
  },
  98,
);
