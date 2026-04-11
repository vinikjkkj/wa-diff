__d(
  "WALinkify",
  ["WALogger", "WATopLevelDomains", "punycode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = Array.from(o("WATopLevelDomains").TLD).join("|"),
      u = "(?:http|https)://|mailto:",
      c = /^https?:\/\/$/gi,
      d = "\\w|[^\\s\0-\x7F\xAB\xBB\u2018\u2019\u201C\u201D]|%[0-9a-f][0-9a-f]",
      m = s + "|xn--(?:" + d + ")+",
      p = "(?:" + d + ")|(?:" + d + ")(?:" + d + "|-)*(?:" + d + ")",
      _ = "(?!_)(?:(?:" + p + ")\\.)+(" + m + ")(?!\\." + p + ")",
      f = ":\\d{1,5}",
      g = "@!.?,(\\[{<\xAB\u2018\u201C:",
      h = "(?:" + d + "|[^\\s%])",
      y = "/" + h + "*?",
      C = "[" + g + "]*(?!" + h + "|#)",
      b = "\\?(?!" + C + ")" + h + "*?",
      v = "#" + h + "*?",
      S = "0-9a-z!#$%&'*+/=?^_`{|}~\\-",
      R = "\\b\\w[" + S + "]*(?:\\.[" + S + "]+)*",
      L = "^|\\W\\.|[^/\\w.]|_",
      E =
        "(" +
        L +
        ")(" +
        u +
        ")?(" +
        R +
        "@)?(" +
        _ +
        ")(?:(?!" +
        p +
        ")|(?=_))(?:(?=[^:/?#])|(" +
        f +
        ")?(" +
        y +
        ")?(" +
        b +
        ")?(" +
        v +
        ")?(?=" +
        C +
        "))",
      k = 1,
      I = 2,
      T = 3,
      D = 4,
      x = 5,
      $ = 6,
      P = 7,
      N = 8,
      M = 9,
      w = new Map([
        [34, 34],
        [41, 40],
        [62, 60],
        [93, 91],
        [125, 123],
        [187, 171],
        [8217, 8216],
        [8221, 8220],
      ]),
      A = new Map([
        [34, 34],
        [40, 41],
        [60, 62],
        [91, 93],
        [123, 125],
        [171, 187],
        [8216, 8217],
        [8220, 8221],
      ]),
      F = new RegExp("" + E, "ig"),
      O = new RegExp("\\.(?:" + m + ")", "i");
    function B(t) {
      try {
        return F.exec(t);
      } catch (n) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "text size: ",
                  ", error: ",
                  "",
                ])),
              t.length,
              String(n),
            )
            .sendLogs("linkify-regex-error"),
          null
        );
      }
    }
    function W(e, t) {
      if ((t === void 0 && (t = !1), !O.test(e))) return [];
      F.lastIndex = 0;
      for (var n = [], r; (r = B(e)); ) {
        var o = U(r, t);
        o && n.push(o);
      }
      return n;
    }
    function q(e, t) {
      return (
        t === void 0 && (t = !1),
        O.test(e) ? ((F.lastIndex = 0), U(B(e), t)) : null
      );
    }
    function U(e, t) {
      if ((t === void 0 && (t = !1), !e)) return null;
      var n = e[k].length,
        a = e[0],
        i = e.index + n,
        l = e.index,
        s = e[k] === "_";
      if (s && l - 1 && /\S/.test(e.input[l - 1])) return null;
      var u = e[x];
      if (
        u &&
        u.startsWith("xn--") &&
        !o("WATopLevelDomains").TLD.has(r("punycode").toUnicode(u))
      )
        return null;
      if (e[$]) {
        var d = parseInt(e[$].slice(1), 10);
        if (e[$][1] === "0" || !(0 < d && d < 65536)) return null;
      }
      var m =
        [M, N, P].find(function (t) {
          return e && e[t];
        }) || 0;
      if (m) {
        var p = [],
          _ = e[m];
        _.slice(-1) === "_" &&
          a[i - 1] === "_" &&
          ((a = a.slice(0, -1)), (e[m] = _ = _.slice(0, -1)));
        for (var f = 0, g = 0, h = 0; h < _.length; h++) {
          var y = _.charCodeAt(h);
          y === g
            ? ((g = p.pop() || 0), g === 0 && (f = h))
            : A.has(y)
              ? (g !== 0 && p.push(g), (g = A.get(y)))
              : w.has(y) || (g === 0 && (f = h));
        }
        if (f !== _.length - 1)
          if (m === N && g !== 0) a = a.slice(n);
          else {
            var C = e.slice(I, m);
            (C.splice(x - I, 1),
              (a =
                C.filter(function (e) {
                  return e;
                }).join("") + _.slice(0, f + 1)),
              (F.lastIndex = i + a.length));
          }
        else a = a.slice(n);
      } else a = a.slice(n);
      var b = a,
        v = e[I],
        S = !!(v && v.match(c));
      if (t && !S) return null;
      v
        ? (v = v.toLowerCase())
        : (b.toLowerCase().indexOf("irc.") === 0
            ? (v = "irc://")
            : b.toLowerCase().indexOf("ftp.") === 0
              ? (v = "ftp://")
              : e[T]
                ? (v = "mailto:")
                : (v = "http://"),
          (b = v + b));
      var R = e[D];
      return {
        href: b,
        url: a,
        index: i,
        input: e.input,
        scheme: v,
        username: e[T],
        domain: R,
        port: e[$],
        path: e[P],
        params: e[N],
        anchor: e[M],
        isHttp: S,
      };
    }
    function V(e) {
      var t = q(e);
      return t &&
        t.url === e &&
        t.scheme === "mailto:" &&
        t.username != null &&
        t.username !== "" &&
        (t.params == null || t.params === "") &&
        (t.anchor == null || t.anchor === "")
        ? t
        : null;
    }
    ((l.findLinks = W), (l.findLink = q), (l.validateEmail = V));
  },
  98,
);
