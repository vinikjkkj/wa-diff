__d(
  "WAWebHatchIdeasDecoder",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["success", "complete"]),
      s = "thumbnail";
    function u(e) {
      var t = o("WAWebHatchJsonReaders").readArray(e, "sections");
      if (t == null) return null;
      var n = new Map(),
        r = function (t) {
          var e,
            r = h(function () {
              return d(t);
            });
          if (r == null) return 1;
          var o =
            (e = n.get(r.id)) != null
              ? e
              : {
                  cardIds: new Set(),
                  cards: [],
                  subtitle: null,
                  title: r.title,
                };
          (n.set(r.id, o), o.subtitle == null && (o.subtitle = r.subtitle));
          var a = function (t) {
            var e = h(function () {
              return m(t, []);
            });
            e != null &&
              !o.cardIds.has(e.id) &&
              (o.cardIds.add(e.id), o.cards.push(e));
          };
          for (var i of r.rawCards) a(i);
        };
      for (var a of t) r(a);
      return Array.from(n, function (e) {
        var t = e[0],
          n = e[1],
          r = n.cards,
          o = n.subtitle,
          a = n.title;
        return { id: t, title: a, subtitle: o, cards: r };
      });
    }
    function c(e) {
      return h(function () {
        var t = o("WAWebHatchJsonReaders").readField(e, "card"),
          n = o("WAWebHatchJsonReaders").readField(t, "items");
        if (!o("WAWebHatchJsonReaders").isObject(t) || !Array.isArray(n))
          throw new g();
        var r = [],
          a = new Set();
        for (var i of n) {
          var l = p(i);
          a.has(l.id) || (a.add(l.id), r.push(l));
        }
        return m(t, r);
      });
    }
    function d(e) {
      var t = o("WAWebHatchJsonReaders").readField(e, "cards");
      if (!Array.isArray(t)) throw new g();
      return {
        id: S(e, "id"),
        title: b(e, "title"),
        subtitle: R(y(e, "subtitle")),
        rawCards: t,
      };
    }
    function m(e, t) {
      var n,
        r,
        o,
        a = S(e, "id"),
        i = C(e, "content"),
        l = C(e, "presentation"),
        s = R(y(e, "title")),
        u = R(y(e, "summary"));
      return {
        id: a,
        title: (n = (r = R(y(i, "title"))) != null ? r : s) != null ? n : "",
        summary: (o = R(y(i, "summary"))) != null ? o : u,
        detail: R(y(i, "detailDescription")),
        actionLabel: R(y(l, "actionLabel")),
        iconPath: _(C(l, "icon")),
        isBuilt: f(e),
        items: t,
      };
    }
    function p(e) {
      var t = o("WAWebHatchJsonReaders").readField(e, "content");
      if (!o("WAWebHatchJsonReaders").isObject(t)) throw new g();
      return {
        id: S(e, "id"),
        type: b(e, "type"),
        title: b(t, "title"),
        summary: R(y(t, "summary")),
        selectable: v(e, "selectable"),
        isSelected: v(e, "isSelected"),
      };
    }
    function _(e) {
      var t;
      if (e == null) return null;
      var n = o("WAWebHatchJsonReaders").readField(e, "variants");
      if (!Array.isArray(n)) throw new g();
      var r = n.map(function (e) {
          if (!o("WAWebHatchJsonReaders").isObject(e)) throw new g();
          return { url: b(e, "url"), role: y(e, "role") };
        }),
        a =
          (t = r.find(function (e) {
            return e.role === s;
          })) != null
            ? t
            : r[0];
      return R(a == null ? void 0 : a.url);
    }
    function f(t) {
      var n = y(t, "buildStatus"),
        r = y(t, "build_status"),
        o = n == null || n === "" ? r : n;
      return o != null && e.has(o.toLowerCase());
    }
    var g = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    function h(e) {
      try {
        return e();
      } catch (e) {
        if (e instanceof g) return null;
        throw e;
      }
    }
    function y(e, t) {
      var n = o("WAWebHatchJsonReaders").readField(e, t);
      if (n == null) return null;
      if (typeof n != "string") throw new g();
      return n;
    }
    function C(e, t) {
      var n = o("WAWebHatchJsonReaders").readField(e, t);
      if (n == null) return null;
      if (!o("WAWebHatchJsonReaders").isObject(n)) throw new g();
      return n;
    }
    function b(e, t) {
      var n = y(e, t);
      if (n == null) throw new g();
      return n;
    }
    function v(e, t) {
      var n = o("WAWebHatchJsonReaders").readField(e, t);
      if (typeof n != "boolean") throw new g();
      return n;
    }
    function S(e, t) {
      var n = b(e, t);
      if (n === "") throw new g();
      return n;
    }
    function R(e) {
      return e == null || o("WAWebHatchJsonReaders").isBlankText(e) ? null : e;
    }
    ((l.decodeHatchIdeasFeed = u), (l.decodeHatchIdeaCard = c));
  },
  98,
);
