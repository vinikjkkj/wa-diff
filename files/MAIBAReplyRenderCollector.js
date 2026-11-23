__d(
  "MAIBAReplyRenderCollector",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = 1,
      p = 1e3,
      _ = 64,
      f = 4e3,
      g = /(^|[-_])(cta|button)($|[-_])/;
    function h() {
      var e = [];
      return {
        getElements: function () {
          return e.slice();
        },
        record: function (n) {
          e.push(n);
        },
      };
    }
    function y(e) {
      var t = [],
        n = !1;
      for (var r of e) {
        if (t.length >= _) {
          n = !0;
          break;
        }
        var o = [].concat(t, [
          { family: r.family, key: r.key, outcome: r.outcome },
        ]);
        if (JSON.stringify(o).length > f) {
          n = !0;
          break;
        }
        t.push(o[o.length - 1]);
      }
      var a = [];
      for (var i of e)
        i.outcome === "success" &&
          g.test(i.key) &&
          !a.includes(i.key) &&
          a.push(i.key);
      return {
        ctaActions: a,
        renderedElementsJSON: JSON.stringify(t),
        truncated: n,
      };
    }
    var C = c(null);
    function b() {
      return d(C);
    }
    ((l.MAIBA_REPLY_RENDER_SCHEMA_VERSION = m),
      (l.MAIBA_REPLY_RENDERED_SETTLE_MS = p),
      (l.MAIBA_REPLY_MAX_RENDERED_ELEMENTS = _),
      (l.MAIBA_REPLY_MAX_RENDERED_ELEMENTS_CHARS = f),
      (l.createMAIBAReplyRenderCollector = h),
      (l.summarizeMAIBARenderedElements = y),
      (l.MAIBAReplyRenderCollectorContext = C),
      (l.useMAIBAReplyRenderCollector = b));
  },
  98,
);
