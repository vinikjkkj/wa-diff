__d(
  "ads-lib-urllib",
  ["isTruthy"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return p(f.normalize(e.trim()));
    }
    var s =
        /^(?:(\w+):)?(?:\/\/([^\/:?#]*)(?::(\d+))?)?([^#?]*)(?:\?([^#]*))?(?:#(.*))?/,
      u = "invalid.invalid",
      c = ["\u200B"],
      d = c.map(function (e) {
        return new RegExp(e, "g");
      });
    function m(e) {
      var t = new RegExp(
        "[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]",
      );
      return t.test(e) ? u : e;
    }
    function p(e) {
      var t = e.toString().trim().match(s) || [],
        n = {
          protocol: t[1] || "",
          domain: m(t[2] || ""),
          port: t[3] || "",
          path: t[4] || "",
          query_s: t[5] || "",
          fragment: t[6] || "",
        };
      if (!n.domain && n.path.indexOf("\\") !== -1) return {};
      var r = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");
      return !n.protocol && r.test(e.toString()) ? {} : n;
    }
    function _(e) {
      var t = "";
      return (
        r("isTruthy")(e.protocol) && (t += e.protocol + "://"),
        r("isTruthy")(e.domain) && (t += e.domain),
        r("isTruthy")(e.port) && (t += ":" + e.port),
        r("isTruthy")(e.domain) && !r("isTruthy")(e.path) && (t += "/"),
        r("isTruthy")(e.path) && (t += e.path),
        r("isTruthy")(e.query_s) && (t += "?" + e.query_s),
        r("isTruthy")(e.fragment) && (t += "#" + e.fragment),
        t
      );
    }
    var f = {
        normalize: function (t) {
          if (!t) return t;
          var e = p(t);
          return (
            !r("isTruthy")(e.protocol) &&
              r("isTruthy")(e.path) &&
              e.path.indexOf("/") !== 0 &&
              r("isTruthy")(e.path) &&
              e.path.indexOf("\\") !== 0 &&
              (e.protocol = "http"),
            _(e)
          );
        },
        isUrlSimple: function (t) {
          var e = t.trim().split(".");
          return (
            e.length > 1 &&
            e.filter(function (e) {
              return !e;
            }).length === 0
          );
        },
        isUrl: function (n) {
          if (!r("isTruthy")(n)) return !1;
          var t = e(n);
          return (
            r("isTruthy")(t.domain) && t.domain !== u && f.isUrlSimple(t.domain)
          );
        },
        isPotentialUrl: function (n) {
          if (!r("isTruthy")(n)) return !0;
          var t = e(n);
          return r("isTruthy")(t.domain) && t.domain !== u;
        },
        getDomain: function (n) {
          if (!n) return null;
          var t = e(n);
          return r("isTruthy")(t.domain) && t.domain !== u ? t.domain : null;
        },
        cleanupUrl: function (t) {
          return t
            ? d.reduce(function (e, t) {
                return e.replace(t, "");
              }, t.trim())
            : null;
        },
      },
      g = f;
    l.default = g;
  },
  98,
);
