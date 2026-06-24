__d(
  "WAWebBizBroadcastsSegmentDetection",
  [],
  function (t, n, r, o, a, i) {
    var e = [
        "region",
        "tier",
        "category",
        "status",
        "type",
        "group",
        "segment",
        "plan",
        "source",
        "role",
        "level",
        "stage",
        "lead stage",
        "country",
        "state",
        "city",
        "branch",
        "store",
        "department",
      ],
      l = [
        "region",
        "regi\xF3n",
        "categoria",
        "categor\xEDa",
        "tipo",
        "grupo",
        "segmento",
        "plan",
        "fuente",
        "nivel",
        "ciudad",
        "sucursal",
        "estado",
        "pais",
        "pa\xEDs",
      ],
      s = [
        "regiao",
        "regi\xE3o",
        "categoria",
        "tipo",
        "grupo",
        "plano",
        "fonte",
        "nivel",
        "n\xEDvel",
        "cidade",
        "filial",
        "estado",
      ],
      u = [
        "region",
        "r\xE9gion",
        "categorie",
        "cat\xE9gorie",
        "type",
        "groupe",
        "plan",
        "source",
        "niveau",
        "ville",
        "succursale",
        "pays",
      ],
      c = [
        "region",
        "kategorie",
        "typ",
        "gruppe",
        "plan",
        "quelle",
        "ebene",
        "stadt",
        "filiale",
        "land",
        "status",
      ],
      d = [
        "kategori",
        "tipe",
        "grup",
        "sumber",
        "tingkat",
        "kota",
        "cabang",
        "status",
        "negara",
      ],
      m = p([].concat(e, l, s, u, c, d));
    function p(e) {
      var t = new Set();
      for (var n of e) t.add(_(n));
      return t;
    }
    function _(e) {
      return typeof e != "string"
        ? ""
        : e
            .toLowerCase()
            .replace(/[_\-]+/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }
    var f = 2,
      g = 20,
      h = 50;
    function y(e, t, n) {
      for (var r = new Set(n), o = [], a = 0; a < e.length; a++)
        if (!r.has(a)) {
          var i = C(e[a], a, t);
          i != null && o.push(i);
        }
      if (
        (o.sort(function (e, t) {
          return t.score - e.score;
        }),
        o.length === 0)
      )
        return { alternatives: [], best: null };
      var l = o[0],
        s = o.slice(1);
      return { alternatives: s, best: l };
    }
    function C(e, t, n) {
      var r = b(n, t),
        o = r.size;
      if (o < f || o > g) return null;
      var a = m.has(_(e)),
        i = v(o, a);
      return {
        cardinality: o,
        columnIndex: t,
        header: e,
        matchesKeyword: a,
        score: i,
        segmentCounts: r,
      };
    }
    function b(e, t) {
      var n = new Map();
      for (var r of e) {
        var o,
          a = r[t];
        if (typeof a == "string") {
          var i = a.trim();
          i !== "" && n.set(i, ((o = n.get(i)) != null ? o : 0) + 1);
        }
      }
      return n;
    }
    function v(e, t) {
      var n = 100 / e,
        r = t ? h : 0;
      return n + r;
    }
    i.detectSegmentColumn = y;
  },
  66,
);
