__d(
  "WAXmlFormatter",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e
          .replace(/>\s{0,}</g, "><")
          .replace(/</g, "~::~<")
          .replace(/\s*xmlns:/g, "~::~xmlns:")
          .replace(/\s*xmlns=/g, "~::~xmlns=")
          .split("~::~"),
        n = t.length,
        r = !1,
        o = 0,
        a = "",
        i = 0,
        s = ["\n"];
      for (i = 0; i < 100; i++) s.push(s[i] + "    ");
      var u = function (t, n) {
        var e = /^<[\w:\-.,]+/.exec(t[n - 1]),
          r = /^<\/[\w:\-.,]+/.exec(t[n]);
        return e != null && r != null && e[0] === r[0];
      };
      for (i = 0; i < n; i++)
        t[i].search(/<!/) > -1
          ? ((a += s[o] + t[i]),
            (r = !0),
            (t[i].search(/-->/) > -1 ||
              t[i].search(/\]>/) > -1 ||
              t[i].search(/!DOCTYPE/) > -1) &&
              (r = !1))
          : t[i].search(/-->/) > -1 || t[i].search(/\]>/) > -1
            ? ((a += t[i]), (r = !1))
            : u(t, i)
              ? ((a += t[i]), r || o--)
              : t[i].search(/<\w/) > -1 &&
                  t[i].search(/<\//) === -1 &&
                  t[i].search(/\/>/) === -1
                ? ((t[i] = l(t[i])),
                  (a = r ? (a += t[i]) : (a += s[o++] + t[i])))
                : t[i].search(/<\w/) > -1 && t[i].search(/<\//) > -1
                  ? (a = r ? (a += t[i]) : (a += s[o] + t[i]))
                  : t[i].search(/<\//) > -1
                    ? (a = r ? (a += t[i]) : (a += s[o === 0 ? o : --o] + t[i]))
                    : t[i].search(/\/>/) > -1
                      ? (a = r ? (a += t[i]) : (a += s[o] + t[i]))
                      : t[i].search(/<\?/) > -1 ||
                          t[i].search(/xmlns:/) > -1 ||
                          t[i].search(/xmlns=/) > -1
                        ? (a += s[o] + t[i])
                        : (a += t[i]);
      return a[0] === "\n" ? a.slice(1) : a;
    }
    function l(e) {
      var t = e.match(/(<query.*>|<result>)(\{.*\})/);
      if (t === null) return e;
      try {
        var n = t[1],
          r = JSON.stringify(JSON.parse(t[2]), null, 2);
        return n + "\n" + r;
      } catch (t) {
        return e + "[Error formatting JSON]";
      }
    }
    i.default = e;
  },
  66,
);
