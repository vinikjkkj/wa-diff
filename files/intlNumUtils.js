__d(
  "intlNumUtils",
  ["FbtHooks", "NumberFormatConsts", "escapeRegex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3,
      u = [
        "\u0433\u0440\u043D.",
        "\u0434\u0435\u043D.",
        "\u043B\u0432.",
        "\u043C\u0430\u043D.",
        "\u0564\u0580.",
        "\u062C.\u0645.",
        "\u062F.\u0625.",
        "\u062F.\u0627.",
        "\u062F.\u0628.",
        "\u062F.\u062A.",
        "\u062F.\u062C.",
        "\u062F.\u0639.",
        "\u062F.\u0643.",
        "\u062F.\u0644.",
        "\u062F.\u0645.",
        "\u0631.\u0633.",
        "\u0631.\u0639.",
        "\u0631.\u0642.",
        "\u0631.\u064A.",
        "\u0644.\u0633.",
        "\u0644.\u0644.",
        "\u0783.",
        "B/.",
        "Bs.",
        "Fr.",
        "kr.",
        "L.",
        "p.",
        "S/.",
      ],
      c = {};
    function d(e) {
      return (c[e] || (c[e] = new RegExp(e, "i")), c[e]);
    }
    var m = d(
      u.reduce(function (e, t, n) {
        return e + (n ? "|" : "") + "(" + r("escapeRegex")(t) + ")";
      }, ""),
    );
    function p(e, t, n, o, a, i, l) {
      (n === void 0 && (n = ""),
        o === void 0 && (o = "."),
        a === void 0 && (a = 0),
        i === void 0 && (i = { primaryGroupSize: s, secondaryGroupSize: s }));
      var u = i.primaryGroupSize || s,
        c = i.secondaryGroupSize || u,
        m = l && l.digits,
        p;
      t == null
        ? (p = e.toString())
        : typeof e == "string"
          ? (p = v(e, t))
          : (p = C(e, t));
      var f = p.split("."),
        g = f[0],
        h = f[1];
      if (Math.abs(parseInt(g, 10)).toString().length >= a) {
        var y = "",
          b = "$1" + n + "$2$3",
          S = "(\\d)(\\d{" + (u - 0) + "})($|\\D)";
        if (((y = g.replace(d(S), b)), y != g)) {
          g = y;
          for (
            var R = "(\\d)(\\d{" + (c - 0) + "})(" + r("escapeRegex")(n) + ")",
              L = d(R);
            (y = g.replace(L, b)) != g;
          )
            g = y;
        }
      }
      m != null && ((g = _(g, m)), (h = h && _(h, m)));
      var E = g;
      return (h && (E += o + h), E);
    }
    function _(e, t) {
      for (var n = "", r = 0; r < e.length; ++r) {
        var o = t[e.charCodeAt(r) - 48];
        n += o !== void 0 ? o : e[r];
      }
      return n;
    }
    function f(t, n) {
      var o = r("NumberFormatConsts").get(
        (e || (e = r("FbtHooks"))).getViewerContext().locale,
      );
      return p(
        t,
        n,
        "",
        o.decimalSeparator,
        o.minDigitsForThousandsSeparator,
        o.standardDecimalPatternInfo,
        o.numberingSystemData,
      );
    }
    function g(t, n) {
      var o = r("NumberFormatConsts").get(
        (e || (e = r("FbtHooks"))).getViewerContext().locale,
      );
      return p(
        t,
        n,
        o.numberDelimiter,
        o.decimalSeparator,
        o.minDigitsForThousandsSeparator,
        o.standardDecimalPatternInfo,
        o.numberingSystemData,
      );
    }
    function h(e) {
      return e && Math.floor(Math.log10(Math.abs(e)));
    }
    function y(e, t, n) {
      var r = h(e),
        o = e;
      r < n && (o = e * Math.pow(10, -r + n));
      var a = Math.pow(10, h(o) - n + 1),
        i = Math.round(o / a) * a;
      return r < n && ((i /= Math.pow(10, -r + n)), t == null)
        ? g(i, n - r - 1)
        : g(i, t);
    }
    function C(e, t) {
      var n = t == null ? 0 : t,
        r = Math.pow(10, n),
        o = (Math.round(e * r) / r).toString();
      if (!n || o.indexOf("e-") !== -1) return o;
      var a = o.indexOf("."),
        i = 0;
      a === -1 ? ((o += "."), (i = n)) : (i = n - (o.length - a - 1));
      for (var l = 0, s = i; l < s; l++) o += "0";
      return o;
    }
    var b = function (t, n) {
      for (var e = t, r = 0; r < n; r++) e += "0";
      return e;
    };
    function v(e, t) {
      var n = e.indexOf("."),
        r = n === -1 ? e : e.slice(0, n),
        o = n === -1 ? "" : e.slice(n + 1);
      return t != null ? r + "." + b(o.slice(0, t), t - o.length) : r;
    }
    function S(e, t, n) {
      n === void 0 && (n = "");
      var o = L(),
        a = e;
      (o &&
        (a = e
          .split("")
          .map(function (e) {
            return o[e] || e;
          })
          .join("")
          .trim()),
        (a = a.replace(/^[^\d]*\-/, "")),
        (a = a.replace(m, "")));
      var i = r("escapeRegex")(t),
        l = r("escapeRegex")(n),
        s = d("^[^\\d]*\\d.*" + i + ".*\\d[^\\d]*$");
      if (!s.test(a)) {
        var u = d("(^[^\\d]*)" + i + "(\\d*[^\\d]*$)");
        if (u.test(a)) return ((a = a.replace(u, "$1$2")), R(a));
        var c = d("^[^\\d]*[\\d " + r("escapeRegex")(l) + "]*[^\\d]*$");
        return (c.test(a) || (a = ""), R(a));
      }
      var p = d("(^[^\\d]*[\\d " + l + "]*)" + i + "(\\d*[^\\d]*$)");
      return ((a = p.test(a) ? a.replace(p, "$1$2") : ""), R(a));
    }
    function R(e) {
      var t = e
          .replace(/[^0-9\u0001\u0002]/g, "")
          .replace("", ".")
          .replace("", "-"),
        n = Number(t);
      return t === "" || isNaN(n) ? null : n;
    }
    function L() {
      var t = r("NumberFormatConsts").get(
          (e || (e = r("FbtHooks"))).getViewerContext().locale,
        ),
        n = {},
        o = t.numberingSystemData && t.numberingSystemData.digits;
      if (o == null) return null;
      for (var a = 0; a < o.length; a++) n[o.charAt(a)] = a.toString();
      return n;
    }
    function E(t) {
      var n = r("NumberFormatConsts").get(
        (e || (e = r("FbtHooks"))).getViewerContext().locale,
      );
      return S(t, n.decimalSeparator || ".", n.numberDelimiter);
    }
    var k = {
      formatNumber: f,
      formatNumberRaw: p,
      formatNumberWithThousandDelimiters: g,
      formatNumberWithLimitedSigFig: y,
      parseNumber: E,
      parseNumberRaw: S,
      truncateLongNumber: v,
      getFloatString: function (t, n, r) {
        var e = String(t),
          o = e.split("."),
          a = k.getIntegerString(o[0], n);
        return o.length === 1 ? a : a + r + o[1];
      },
      getIntegerString: function (t, n) {
        var e = n;
        e === "" && (e = ",");
        for (var r = String(t), o = /(\d+)(\d{3})/; o.test(r); )
          r = r.replace(o, "$1" + e + "$2");
        return r;
      },
    };
    i.exports = k;
  },
  34,
);
