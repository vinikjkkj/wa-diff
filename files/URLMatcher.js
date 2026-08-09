__d(
  "URLMatcher",
  ["URLMatcherConfig"],
  function (t, n, r, o, a, i) {
    var e = "!\"#%&'()*,-./:;<>?@[\\]^_`{|}",
      l = "\u2000-\u206F\xAB\xBB\uFF08\uFF09",
      s = "(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])",
      u = "(?:https?)://",
      c = "(?:(^|\\s)(?:" + s + "[.]){3}" + s + ")",
      d = c,
      m = "\\[(?:(?:[A-Fa-f0-9]{1,4}::?){1,7}[A-Fa-f0-9]{1,4})\\]",
      p = "(?:\\b)www\\d{0,3}[.]",
      _ = "[^\\s" + e + l + "]",
      f = "(?:(?:(?:[.:\\-_%@]|" + _ + ")*" + _ + ")|" + m + ")",
      g = "(?::\\d+){0,1}",
      h = "(?=[/?#])",
      y = n("URLMatcherConfig").tlds,
      C =
        "(?:(?:" +
        u +
        f +
        g +
        ")|(?:" +
        d +
        g +
        ")|(?:" +
        m +
        g +
        ")|(?:" +
        p +
        f +
        y +
        g +
        ")|(?:" +
        f +
        y +
        g +
        h +
        "))",
      b =
        "(?:(?:" +
        u +
        f +
        g +
        ")|(?:" +
        d +
        g +
        ")|(?:" +
        m +
        g +
        ")|(?:" +
        p +
        f +
        y +
        g +
        ")|(?:" +
        f +
        y +
        g +
        "))",
      v = "[/#?]",
      S = "\\([^\\s()<>]+\\)",
      R = "[^\\s()<>?#]+",
      L = new RegExp(C, "im"),
      E = "^\\[[0-9]{1,4}:[0-9]{1,4}:[A-Fa-f0-9]{1,4}\\]",
      k = new RegExp(E, "im"),
      I = "(?:(?:" + v + ")(?:(?:" + S + "|" + R + ")*)*)*",
      T = new RegExp("((?:" + b + ")(?:" + I + "))", "im");
    function D() {
      T.compile();
    }
    var x = new RegExp("((?:" + u + f + g + ")|(?:" + p + f + y + g + "))"),
      $ = /[\s\'\";]/,
      P = new RegExp(v, "im"),
      N = new RegExp(
        "[\\s!\"#%&'()*,./:;<>?@[\\]^`{|}\xAB\xBB\u2000-\u206F\uFF08\uFF09]",
        "im",
      ),
      M = new RegExp("[\\s()<>?#]", "im"),
      w = new RegExp("\\s()<>"),
      A = function (t) {
        return t != null && t.indexOf("@") !== -1 ? (x.exec(t) ? t : null) : t;
      },
      F = function (t) {
        return new RegExp("((?:" + C + ")(?:" + I + "))", t);
      };
    function O() {
      return T.source;
    }
    var B = function (t) {
        return U(t, F("im"));
      },
      W = function (t) {
        return V(t, F("igm"));
      },
      q = function (t) {
        return U(t, T);
      },
      U = function (t, n) {
        var e = n.exec(t);
        return e == null || e.length === 0 ? null : A(e[1] || null);
      },
      V = function (t, n) {
        var e = t.match(n);
        return e == null ? [] : e.filter(Boolean) || [];
      },
      H = function (t) {
        return L.exec(t);
      },
      G = function (t) {
        return !$.test(t.charAt(t.length - 1));
      },
      z = function (t) {
        var e = t,
          n = !1;
        do {
          var r,
            o = L.exec(e);
          if (!o) return null;
          if (
            (((r = o[1]) == null ? void 0 : r.trim()) === "" &&
              ((o[0] = o[0].trim()), (o.index += o[1].length)),
            (n = !1),
            o[0][0] === "[" && o.index > 0 && e[o.index - 1] === "@")
          ) {
            var a = k.exec(o[0]);
            a && ((n = !0), (e = e.substr(o.index + a[0].length)));
          }
        } while (n);
        if (!o) return null;
        var i = e.substr(o.index + o[0].length);
        if (i.length === 0 || !P.test(i[0])) return A(o[0]);
        for (
          var l = 0,
            s = 0,
            u = 1,
            c = ["(", "["],
            d = [")", "]"],
            m = 0,
            p = s,
            _ = 1;
          _ < i.length;
          _++
        ) {
          var f = i[_];
          if (p === s) {
            if (c.includes(f)) ((m += 1), (p = u));
            else if (P.test(f) || !N.test(f)) l = _;
            else if (M.test(f)) break;
          } else if (c.includes(f)) m += 1;
          else if (d.includes(f)) ((m -= 1), m === 0 && ((p = s), (l = _)));
          else if (w.test(f)) break;
        }
        return A(o[0] + i.substring(0, l + 1));
      },
      j = {
        compilePermissiveHostPathMatcher: D,
        permissiveHostPathMatch: q,
        permissiveMatch: B,
        permissiveMultiMatch: W,
        matchToPattern: U,
        multiMatchToPattern: V,
        matchHost: H,
        trigger: G,
        match: z,
        getPermissiveHostPathMatcherSource: O,
      };
    a.exports = j;
  },
  null,
);
