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
      R = "(?:[" + S + "]|[^\\s\0-\x7F\xAB\xBB\u2018\u2019\u201C\u201D@.])",
      L = "(?:" + R + ")+(?:\\.(?:" + R + ")+)*",
      E = "^|\\W\\.|[^/\\w.]|_",
      k =
        "(" +
        E +
        ")(" +
        u +
        ")?(" +
        L +
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
      I = 1,
      T = 2,
      D = 3,
      x = 4,
      $ = 5,
      P = 6,
      N = 7,
      M = 8,
      w = 9,
      A = new Map([
        [34, 34],
        [41, 40],
        [62, 60],
        [93, 91],
        [125, 123],
        [187, 171],
        [8217, 8216],
        [8221, 8220],
      ]),
      F = new Map([
        [34, 34],
        [40, 41],
        [60, 62],
        [91, 93],
        [123, 125],
        [171, 187],
        [8216, 8217],
        [8220, 8221],
      ]),
      O = new RegExp("" + k, "ig"),
      B = new RegExp("\\.(?:" + m + ")", "i"),
      W = /[\u3002\uFF0E\uFF61]/g;
    function q(e) {
      return e == null ? "" : e.replace(W, ".");
    }
    function U(t) {
      try {
        return O.exec(t);
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
    function V(e, t) {
      t === void 0 && (t = !1);
      var n = q(e);
      if (!B.test(n)) return [];
      O.lastIndex = 0;
      for (var r = [], o; (o = U(n)); ) {
        var a = G(o, t);
        a && r.push(a);
      }
      return r;
    }
    function H(e, t) {
      t === void 0 && (t = !1);
      var n = q(e);
      return B.test(n) ? ((O.lastIndex = 0), G(U(n), t)) : null;
    }
    function G(e, t) {
      if ((t === void 0 && (t = !1), !e)) return null;
      var n = e[I].length,
        a = e[0],
        i = e.index + n,
        l = e.index,
        s = e[I] === "_";
      if (s && l - 1 && /\S/.test(e.input[l - 1])) return null;
      var u = e[$];
      if (
        u &&
        u.startsWith("xn--") &&
        !o("WATopLevelDomains").TLD.has(r("punycode").toUnicode(u))
      )
        return null;
      if (e[P]) {
        var d = parseInt(e[P].slice(1), 10);
        if (e[P][1] === "0" || !(0 < d && d < 65536)) return null;
      }
      var m =
        [w, M, N].find(function (t) {
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
            : F.has(y)
              ? (g !== 0 && p.push(g), (g = F.get(y)))
              : A.has(y) || (g === 0 && (f = h));
        }
        if (f !== _.length - 1)
          if (m === M && g !== 0) a = a.slice(n);
          else {
            var C = e.slice(T, m);
            (C.splice($ - T, 1),
              (a =
                C.filter(function (e) {
                  return e;
                }).join("") + _.slice(0, f + 1)),
              (O.lastIndex = i + a.length));
          }
        else a = a.slice(n);
      } else a = a.slice(n);
      var b = a,
        v = e[T],
        S = !!(v && v.match(c));
      if (t && !S) return null;
      if (v) v = v.toLowerCase();
      else if (e[D]) {
        v = "mailto:";
        var R = e[D].slice(0, -1);
        b = z(R, e[x]);
      } else
        (b.toLowerCase().indexOf("irc.") === 0
          ? (v = "irc://")
          : b.toLowerCase().indexOf("ftp.") === 0
            ? (v = "ftp://")
            : (v = "http://"),
          (b = v + b));
      var L = e[x];
      return {
        href: b,
        url: a,
        index: i,
        input: e.input,
        scheme: v,
        username: e[D],
        domain: L,
        port: e[P],
        path: e[N],
        params: e[M],
        anchor: e[w],
        isHttp: S,
      };
    }
    function z(e, t) {
      var n = Array.from(e, j).join("");
      return "mailto:" + n + "@" + K(t);
    }
    function j(e) {
      return e.charCodeAt(0) < 128 ? e : encodeURIComponent(e);
    }
    function K(e) {
      try {
        return r("punycode").toASCII(e);
      } catch (t) {
        return e;
      }
    }
    function Q(e) {
      var t = H(e);
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
    ((l.findLinks = V), (l.findLink = H), (l.validateEmail = Q));
  },
  98,
);
