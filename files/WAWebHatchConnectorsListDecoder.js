__d(
  "WAWebHatchConnectorsListDecoder",
  ["WATypeUtils", "WAWebHatchJsonReaders", "WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [".fbcdn.net", ".whatsapp.net"];
    function s(e) {
      var t = o("WAWebHatchJsonReaders").readArray(e, "connectors");
      if (t == null) return null;
      var n = [];
      for (var r of t) {
        var a = u(r);
        a != null && n.push(a);
      }
      return n;
    }
    function u(e) {
      var t = o("WAWebHatchJsonReaders").readTrimmedString(e, "id"),
        n = o("WAWebHatchJsonReaders").readTrimmedString(e, "name");
      return o("WAWebHatchJsonReaders").isBlankText(t) ||
        o("WAWebHatchJsonReaders").isBlankText(n)
        ? null
        : {
            id: t,
            name: n,
            description: o("WAWebHatchJsonReaders").trimToNull(
              o("WAWebHatchJsonReaders").readTrimmedString(e, "description"),
            ),
            iconUrl: c(e),
            state: d(e),
            managementKind: m(e),
            supportsMultipleAccounts:
              o("WAWebHatchJsonReaders").readBool(
                e,
                "supports_multiple_accounts",
              ) === !0,
            isCustom:
              o("WAWebHatchJsonReaders").readBool(e, "is_custom") === !0,
            consent: p(o("WAWebHatchJsonReaders").readObject(e, "consent")),
          };
    }
    function c(t) {
      var n = o("WAWebHatchJsonReaders").trimToNull(
        o("WAWebHatchJsonReaders").readTrimmedString(t, "icon_url"),
      );
      if (n == null || r("WAWebURLUtils").isHttps(n) !== !0) return null;
      var a = r("WAWebURLUtils").hostname(n).toLowerCase();
      return e.some(function (e) {
        return a.endsWith(e);
      })
        ? n
        : null;
    }
    function d(e) {
      return (function (e) {
        return e === "connected"
          ? "connected"
          : e === "disconnected"
            ? "disconnected"
            : e === "coming_soon"
              ? "coming_soon"
              : "unknown";
      })(o("WAWebHatchJsonReaders").readTrimmedString(e, "state"));
    }
    function m(e) {
      return (function (e) {
        return e === "auth"
          ? "auth"
          : e === "policy_only"
            ? "policy_only"
            : "unknown";
      })(o("WAWebHatchJsonReaders").readTrimmedString(e, "management_kind"));
    }
    function p(e) {
      var t,
        n =
          (t = o("WAWebHatchJsonReaders").readObject(e, "hatch")) != null
            ? t
            : e,
        r = _(n),
        a = g(n);
      return r.length === 0 && a.length === 0
        ? null
        : { bullets: r, footerParagraphs: a };
    }
    function _(e) {
      var t = [];
      for (var n of (r = o("WAWebHatchJsonReaders").readArray(e, "bullets")) !=
      null
        ? r
        : []) {
        var r,
          a = o("WAWebHatchJsonReaders").trimToNull(
            o("WAWebHatchJsonReaders").readTrimmedString(n, "text"),
          );
        a != null &&
          t.push({
            icon: f(n),
            title: o("WAWebHatchJsonReaders").trimToNull(
              o("WAWebHatchJsonReaders").readTrimmedString(n, "title"),
            ),
            text: a,
          });
      }
      return t;
    }
    function f(e) {
      return (function (e) {
        return e === "storage"
          ? "storage"
          : e === "data_types"
            ? "data_types"
            : e === "caution"
              ? "caution"
              : e === "info"
                ? "info"
                : "unspecified";
      })(o("WAWebHatchJsonReaders").readTrimmedString(e, "icon"));
    }
    function g(e) {
      var t = [];
      for (var n of (r = o("WAWebHatchJsonReaders").readArray(
        e,
        "footer_paragraphs",
      )) != null
        ? r
        : []) {
        var r,
          a = o("WATypeUtils").isString(n)
            ? o("WAWebHatchJsonReaders").trimToNull(n)
            : null;
        a != null && t.push(a);
      }
      return t;
    }
    ((l.decodeHatchConnectorsList = s), (l.decodeHatchConnectConsent = p));
  },
  98,
);
