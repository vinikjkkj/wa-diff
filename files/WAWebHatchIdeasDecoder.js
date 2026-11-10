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
            r = o("WAWebHatchJsonReaders").decodeOrNull(function () {
              return d(t);
            });
          if (r == null) return 1;
          var a =
            (e = n.get(r.id)) != null
              ? e
              : {
                  cardIds: new Set(),
                  cards: [],
                  subtitle: null,
                  title: r.title,
                };
          (n.set(r.id, a), a.subtitle == null && (a.subtitle = r.subtitle));
          var i = function (t) {
            var e = o("WAWebHatchJsonReaders").decodeOrNull(function () {
              return m(t, []);
            });
            e != null &&
              !a.cardIds.has(e.id) &&
              (a.cardIds.add(e.id), a.cards.push(e));
          };
          for (var l of r.rawCards) i(l);
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
      return o("WAWebHatchJsonReaders").decodeOrNull(function () {
        var t = o("WAWebHatchJsonReaders").readField(e, "card"),
          n = o("WAWebHatchJsonReaders").readField(t, "items");
        if (!o("WAWebHatchJsonReaders").isObject(t) || !Array.isArray(n))
          throw new (o("WAWebHatchJsonReaders").HatchMalformedJsonError)();
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
      if (!Array.isArray(t))
        throw new (o("WAWebHatchJsonReaders").HatchMalformedJsonError)();
      return {
        id: o("WAWebHatchJsonReaders").requireId(e, "id"),
        title: o("WAWebHatchJsonReaders").requireString(e, "title"),
        subtitle: o("WAWebHatchJsonReaders").nonBlank(
          o("WAWebHatchJsonReaders").optString(e, "subtitle"),
        ),
        rawCards: t,
      };
    }
    function m(e, t) {
      var n,
        r,
        a,
        i,
        l = (i = o("WAWebHatchJsonReaders")).requireId(e, "id"),
        s = i.optObject(e, "content"),
        u = i.optObject(e, "presentation"),
        c = i.nonBlank(i.optString(e, "title")),
        d = i.nonBlank(i.optString(e, "summary"));
      return {
        id: l,
        title:
          (n =
            (r = o("WAWebHatchJsonReaders").nonBlank(
              o("WAWebHatchJsonReaders").optString(s, "title"),
            )) != null
              ? r
              : c) != null
            ? n
            : "",
        summary:
          (a = o("WAWebHatchJsonReaders").nonBlank(
            o("WAWebHatchJsonReaders").optString(s, "summary"),
          )) != null
            ? a
            : d,
        detail: o("WAWebHatchJsonReaders").nonBlank(
          o("WAWebHatchJsonReaders").optString(s, "detailDescription"),
        ),
        actionLabel: o("WAWebHatchJsonReaders").nonBlank(
          o("WAWebHatchJsonReaders").optString(u, "actionLabel"),
        ),
        iconPath: _(o("WAWebHatchJsonReaders").optObject(u, "icon")),
        isBuilt: f(e),
        items: t,
      };
    }
    function p(e) {
      var t = o("WAWebHatchJsonReaders").readField(e, "content");
      if (!o("WAWebHatchJsonReaders").isObject(t))
        throw new (o("WAWebHatchJsonReaders").HatchMalformedJsonError)();
      return {
        id: o("WAWebHatchJsonReaders").requireId(e, "id"),
        type: o("WAWebHatchJsonReaders").requireString(e, "type"),
        title: o("WAWebHatchJsonReaders").requireString(t, "title"),
        summary: o("WAWebHatchJsonReaders").nonBlank(
          o("WAWebHatchJsonReaders").optString(t, "summary"),
        ),
        selectable: o("WAWebHatchJsonReaders").requireBool(e, "selectable"),
        isSelected: o("WAWebHatchJsonReaders").requireBool(e, "isSelected"),
      };
    }
    function _(e) {
      var t;
      if (e == null) return null;
      var n = o("WAWebHatchJsonReaders").readField(e, "variants");
      if (!Array.isArray(n))
        throw new (o("WAWebHatchJsonReaders").HatchMalformedJsonError)();
      var r = n.map(function (e) {
          if (!o("WAWebHatchJsonReaders").isObject(e))
            throw new (o("WAWebHatchJsonReaders").HatchMalformedJsonError)();
          return {
            url: o("WAWebHatchJsonReaders").requireString(e, "url"),
            role: o("WAWebHatchJsonReaders").optString(e, "role"),
          };
        }),
        a =
          (t = r.find(function (e) {
            return e.role === s;
          })) != null
            ? t
            : r[0];
      return o("WAWebHatchJsonReaders").nonBlank(a == null ? void 0 : a.url);
    }
    function f(t) {
      var n = o("WAWebHatchJsonReaders").optString(t, "buildStatus"),
        r = o("WAWebHatchJsonReaders").optString(t, "build_status"),
        a = n == null || n === "" ? r : n;
      return a != null && e.has(a.toLowerCase());
    }
    ((l.decodeHatchIdeasFeed = u), (l.decodeHatchIdeaCard = c));
  },
  98,
);
