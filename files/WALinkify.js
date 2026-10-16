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
        r = e[0],
        a = e.index + n,
        i = e.index,
        l = e[I] === "_";
      if (l && i - 1 && /\S/.test(e.input[i - 1])) return null;
      var s = e[$];
      if (s && s.startsWith("xn--") && !o("WATopLevelDomains").TLD.has(Q(s)))
        return null;
      if (e[P]) {
        var u = parseInt(e[P].slice(1), 10);
        if (e[P][1] === "0" || !(0 < u && u < 65536)) return null;
      }
      var d =
        [w, M, N].find(function (t) {
          return e && e[t];
        }) || 0;
      if (d) {
        var m = [],
          p = e[d];
        p.slice(-1) === "_" &&
          r[a - 1] === "_" &&
          ((r = r.slice(0, -1)), (e[d] = p = p.slice(0, -1)));
        for (var _ = 0, f = 0, g = 0; g < p.length; g++) {
          var h = p.charCodeAt(g);
          h === f
            ? ((f = m.pop() || 0), f === 0 && (_ = g))
            : F.has(h)
              ? (f !== 0 && m.push(f), (f = F.get(h)))
              : A.has(h) || (f === 0 && (_ = g));
        }
        if (_ !== p.length - 1)
          if (d === M && f !== 0) r = r.slice(n);
          else {
            var y = e.slice(T, d);
            (y.splice($ - T, 1),
              (r =
                y
                  .filter(function (e) {
                    return e;
                  })
                  .join("") + p.slice(0, _ + 1)),
              (O.lastIndex = a + r.length));
          }
        else r = r.slice(n);
      } else r = r.slice(n);
      var C = r,
        b = e[T],
        v = !!(b && b.match(c));
      if (t && !v) return null;
      if (b) b = b.toLowerCase();
      else if (e[D]) {
        b = "mailto:";
        var S = e[D].slice(0, -1);
        C = z(S, e[x]);
      } else
        (C.toLowerCase().indexOf("irc.") === 0
          ? (b = "irc://")
          : C.toLowerCase().indexOf("ftp.") === 0
            ? (b = "ftp://")
            : (b = "http://"),
          (C = b + C));
      var R = e[x];
      return {
        href: C,
        url: r,
        index: a,
        input: e.input,
        scheme: b,
        username: e[D],
        domain: R,
        port: e[P],
        path: e[N],
        params: e[M],
        anchor: e[w],
        isHttp: v,
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
      try {
        return r("punycode").toUnicode(e);
      } catch (t) {
        return e;
      }
    }
    function X(e) {
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
    ((l.findLinks = V), (l.findLink = H), (l.validateEmail = X));
  },
  98,
);
