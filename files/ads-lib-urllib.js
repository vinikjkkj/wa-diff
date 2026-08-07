__d(
  "ads-lib-urllib",
  ["URISchemes", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return _(g.normalize(e.trim()));
    }
    var u =
        /^(?:(\w+):)?(?:\/\/([^\/:?#]*)(?::(\d+))?)?([^#?]*)(?:\?([^#]*))?(?:#(.*))?/,
      c = "invalid.invalid",
      d = ["\u200B"],
      m = d.map(function (e) {
        return new RegExp(e, "g");
      });
    function p(e) {
      var t = new RegExp(
        "[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]",
      );
      return t.test(e) ? c : e;
    }
    function _(e) {
      var t = e.toString().trim().match(u) || [],
        n = t[1] || "",
        r = p(t[2] || ""),
        o = t[4] || "",
        a = {
          protocol: n,
          domain: r,
          port: t[3] || "",
          path: o,
          query_s: t[5] || "",
          fragment: t[6] || "",
        };
      if (!r && o.indexOf("\\") !== -1) return {};
      var i = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");
      return !n && i.test(e.toString()) ? {} : a;
    }
    function f(e) {
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
    var g = {
        normalize: function (n) {
          if (!n) return n;
          var t = _(n);
          return (e || (e = o("URISchemes"))).isAllowed(t.protocol)
            ? (!r("isTruthy")(t.protocol) &&
                r("isTruthy")(t.path) &&
                t.path.indexOf("/") !== 0 &&
                r("isTruthy")(t.path) &&
                t.path.indexOf("\\") !== 0 &&
                (t.protocol = "http"),
              f(t))
            : "";
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
        isUrl: function (t) {
          if (!r("isTruthy")(t)) return !1;
          var e = s(t);
          return (
            r("isTruthy")(e.domain) && e.domain !== c && g.isUrlSimple(e.domain)
          );
        },
        isPotentialUrl: function (t) {
          if (!r("isTruthy")(t)) return !0;
          var e = s(t);
          return r("isTruthy")(e.domain) && e.domain !== c;
        },
        getDomain: function (t) {
          if (!t) return null;
          var e = s(t);
          return r("isTruthy")(e.domain) && e.domain !== c ? e.domain : null;
        },
        cleanupUrl: function (t) {
          return t
            ? m.reduce(function (e, t) {
                return e.replace(t, "");
              }, t.trim())
            : null;
        },
      },
      h = g;
    l.default = h;
  },
  98,
);
