__d(
  "WAWebPageLoadTierStats",
  ["CometQPLPayloadStore", "performance"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map([
        ["avif", "img"],
        ["css", "css"],
        ["gif", "img"],
        ["ico", "img"],
        ["jpeg", "img"],
        ["jpg", "img"],
        ["js", "js"],
        ["mjs", "js"],
        ["otf", "font"],
        ["png", "img"],
        ["svg", "img"],
        ["ttf", "font"],
        ["webp", "img"],
        ["woff", "font"],
        ["woff2", "font"],
      ]);
    function u() {
      var e = c(),
        t = d(),
        n = m(t),
        r = {},
        o = {
          cache_count: 0,
          cache_rate: 0,
          decoded_body_size: 0,
          encoded_body_size: 0,
          total_count: 0,
          transfer_size: 0,
        };
      for (var a of e) {
        var i = a.refs,
          l = a.url,
          s = n.get(v(l));
        if (s) {
          ((o.decoded_body_size += s.decodedBodySize),
            (o.encoded_body_size += s.encodedBodySize),
            (o.transfer_size += +s.transferSize),
            (o.total_count += 1),
            +s.transferSize == 0 && (o.cache_count += 1));
          for (var u of i) {
            var _,
              f,
              g = u + "_start",
              h = u + "_end";
            ((r[g] = Math.min(
              s.requestStart,
              (_ = r[g]) != null ? _ : Number.POSITIVE_INFINITY,
            )),
              (r[h] = Math.max(
                s.responseEnd,
                (f = r[h]) != null ? f : Number.NEGATIVE_INFINITY,
              )));
          }
        }
      }
      return (
        o.total_count > 0 &&
          (o.cache_rate = Math.round((o.cache_count / o.total_count) * 100)),
        [r, babelHelpers.extends({}, o, p(e, t))]
      );
    }
    function c() {
      var e = o("CometQPLPayloadStore").getPayloadMap();
      if (!e) return [];
      var t = Object.values(e).at(0);
      return t ? Object.values(t) : [];
    }
    function d() {
      return typeof (e || (e = r("performance"))).getEntriesByType != "function"
        ? []
        : (e || (e = r("performance"))).getEntriesByType("resource");
    }
    function m(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = v(e.name);
          t.set(n, e);
        }),
        t
      );
    }
    function p(e, t) {
      var n = _(e),
        r = f(),
        o = new Set();
      for (var a of t) {
        var i,
          l = v(a.name),
          s = b(l);
        if (!(s == null || o.has(l) || !n.has(s.host))) {
          o.add(l);
          var u = (i = r[y(s.pathname)]) != null ? i : r.other;
          h(u, a);
        }
      }
      return C(r);
    }
    function _(e) {
      var t = new Set();
      for (var n of e) {
        var r,
          o = n.url,
          a = (r = b(o)) == null ? void 0 : r.host;
        a != null && t.add(a);
      }
      return t;
    }
    function f() {
      return { css: g(), font: g(), img: g(), js: g(), other: g() };
    }
    function g() {
      return {
        count: 0,
        decodedBodySize: 0,
        encodedBodySize: 0,
        transferSize: 0,
      };
    }
    function h(e, t) {
      ((e.count += 1),
        (e.decodedBodySize += t.decodedBodySize),
        (e.encodedBodySize += t.encodedBodySize),
        (e.transferSize += +t.transferSize));
    }
    function y(e) {
      var t,
        n = e.slice(e.lastIndexOf(".") + 1).toLowerCase();
      return (t = s.get(n)) != null ? t : "other";
    }
    function C(e) {
      return {
        static_css_count: e.css.count,
        static_css_decoded_body_size: e.css.decodedBodySize,
        static_css_encoded_body_size: e.css.encodedBodySize,
        static_css_transfer_size: e.css.transferSize,
        static_font_count: e.font.count,
        static_font_decoded_body_size: e.font.decodedBodySize,
        static_font_encoded_body_size: e.font.encodedBodySize,
        static_font_transfer_size: e.font.transferSize,
        static_img_count: e.img.count,
        static_img_decoded_body_size: e.img.decodedBodySize,
        static_img_encoded_body_size: e.img.encodedBodySize,
        static_img_transfer_size: e.img.transferSize,
        static_js_count: e.js.count,
        static_js_decoded_body_size: e.js.decodedBodySize,
        static_js_encoded_body_size: e.js.encodedBodySize,
        static_js_transfer_size: e.js.transferSize,
        static_other_count: e.other.count,
        static_other_decoded_body_size: e.other.decodedBodySize,
        static_other_encoded_body_size: e.other.encodedBodySize,
        static_other_transfer_size: e.other.transferSize,
      };
    }
    function b(e) {
      try {
        return new URL(e);
      } catch (e) {
        return null;
      }
    }
    function v(e) {
      return e.split("#")[0];
    }
    l.getTierStats = u;
  },
  98,
);
