__d(
  "WAWebHatchConnectorsListDecoder",
  ["WATypeUtils", "WAWebHatchJsonReaders", "WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [".fbcdn.net", ".whatsapp.net"];
    function s(e) {
      var t = o("WAWebHatchJsonReaders").readArray(e, "connectors");
      return t == null ? null : c(t);
    }
    function u(e) {
      var t,
        n = s(e);
      return n == null
        ? null
        : {
            connectors: n,
            nextCursor:
              (t = o("WAWebHatchJsonReaders").readNonEmptyString(
                e,
                "next_cursor",
              )) != null
                ? t
                : null,
          };
    }
    function c(e) {
      var t = [];
      for (var n of e) {
        var r = d(n);
        r != null && t.push(r);
      }
      return t;
    }
    function d(e) {
      var t = o("WAWebHatchJsonReaders").readTrimmedString(e, "id"),
        n = o("WAWebHatchJsonReaders").readTrimmedString(e, "name");
      return o("WAWebHatchJsonReaders").isBlankText(t) ||
        o("WAWebHatchJsonReaders").isBlankText(n)
        ? null
        : babelHelpers.extends(
            {
              id: t,
              name: n,
              description: o("WAWebHatchJsonReaders").trimToNull(
                o("WAWebHatchJsonReaders").readTrimmedString(e, "description"),
              ),
              iconUrl: m(e),
              state: p(e),
              managementKind: _(e),
              supportsMultipleAccounts:
                o("WAWebHatchJsonReaders").readBool(
                  e,
                  "supports_multiple_accounts",
                ) === !0,
              isCustom:
                o("WAWebHatchJsonReaders").readBool(e, "is_custom") === !0,
              consent: f(o("WAWebHatchJsonReaders").readObject(e, "consent")),
            },
            o("WAWebHatchJsonReaders").readBool(e, "needs_reauth") === !0
              ? { needsReauth: !0 }
              : null,
          );
    }
    function m(t) {
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
    function p(e) {
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
    function _(e) {
      return (function (e) {
        return e === "auth"
          ? "auth"
          : e === "policy_only"
            ? "policy_only"
            : "unknown";
      })(o("WAWebHatchJsonReaders").readTrimmedString(e, "management_kind"));
    }
    function f(e) {
      var t,
        n =
          (t = o("WAWebHatchJsonReaders").readObject(e, "hatch")) != null
            ? t
            : e,
        r = g(n),
        a = y(n, "footer_paragraphs"),
        i = y(n, "callout_paragraphs");
      return i.length > 0
        ? {
            bullets: r,
            footerParagraphs: a,
            calloutParagraphs: i,
            calloutTitle: o("WAWebHatchJsonReaders").trimToNull(
              o("WAWebHatchJsonReaders").readTrimmedString(n, "callout_title"),
            ),
          }
        : r.length === 0 && a.length === 0
          ? null
          : { bullets: r, footerParagraphs: a };
    }
    function g(e) {
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
            icon: h(n),
            title: o("WAWebHatchJsonReaders").trimToNull(
              o("WAWebHatchJsonReaders").readTrimmedString(n, "title"),
            ),
            text: a,
          });
      }
      return t;
    }
    function h(e) {
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
    function y(e, t) {
      var n = [];
      for (var r of (a = o("WAWebHatchJsonReaders").readArray(e, t)) != null
        ? a
        : []) {
        var a,
          i = o("WATypeUtils").isString(r)
            ? o("WAWebHatchJsonReaders").trimToNull(r)
            : null;
        i != null && n.push(i);
      }
      return n;
    }
    ((l.decodeHatchConnectorsList = s),
      (l.decodeHatchConnectorsPage = u),
      (l.decodeHatchConnectorRows = c),
      (l.decodeHatchConnectConsent = f));
  },
  98,
);
