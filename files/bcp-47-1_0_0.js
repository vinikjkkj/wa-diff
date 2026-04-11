__d(
  "bcp-47-1.0.0",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      var e = {}.hasOwnProperty,
        t = "-",
        n = "x",
        r = t.charCodeAt(0),
        o = n.charCodeAt(0),
        a = 97,
        i = 122,
        s = 48,
        u = 57,
        c = 8,
        d = 4,
        m = 3,
        p = 2,
        _ = 3,
        f = 8,
        g = 5,
        h = 4,
        y = 8,
        C = 8,
        b = 1,
        v = 2,
        S = 3,
        R = 4,
        L = 5,
        E = 6,
        k = {};
      ((k[b] = "Too long variant, expected at most 8 characters"),
        (k[v] = "Too long extension, expected at most 8 characters"),
        (k[S] =
          "Too many extended language subtags, expected at most 3 subtags"),
        (k[R] =
          "Empty extension, extensions must have at least 2 characters of content"),
        (k[L] = "Too long private-use area, expected at most 8 characters"),
        (k[E] = "Found superfluous content after tag"));
      var I = [
          "art-lojban",
          "cel-gaulish",
          "no-bok",
          "no-nyn",
          "zh-guoyu",
          "zh-hakka",
          "zh-min",
          "zh-min-nan",
          "zh-xiang",
        ],
        T = {
          "en-gb-oed": "en-GB-oxendict",
          "i-ami": "ami",
          "i-bnn": "bnn",
          "i-default": null,
          "i-enochian": null,
          "i-hak": "hak",
          "i-klingon": "tlh",
          "i-lux": "lb",
          "i-mingo": null,
          "i-navajo": "nv",
          "i-pwn": "pwn",
          "i-tao": "tao",
          "i-tay": "tay",
          "i-tsu": "tsu",
          "sgn-be-fr": "sfb",
          "sgn-be-nl": "vgt",
          "sgn-ch-de": "sgg",
          "art-lojban": "jbo",
          "cel-gaulish": null,
          "no-bok": "nb",
          "no-nyn": "nn",
          "zh-guoyu": "cmn",
          "zh-hakka": "hak",
          "zh-min": null,
          "zh-min-nan": "nan",
          "zh-xiang": "hsn",
        };
      function D(e) {
        return e >= s && e <= u;
      }
      function x(e) {
        return e >= a && e <= i;
      }
      function $(e) {
        return D(e) || x(e);
      }
      function P(e) {
        return e === o;
      }
      function N(e) {
        return e === r;
      }
      function M() {
        return {
          language: null,
          extendedLanguageSubtags: [],
          script: null,
          region: null,
          variants: [],
          extensions: [],
          privateuse: [],
          irregular: null,
          regular: null,
        };
      }
      function w(n, r) {
        var o = r || {},
          a = o.warning,
          i = o.forgiving,
          l = o.normalize,
          s = {},
          u,
          A,
          F,
          O,
          B,
          W;
        if ((l == null && (l = !0), n == null))
          throw new Error("Expected string, got `" + n + "`");
        function q(e) {
          return n.charCodeAt(e);
        }
        function U(e, t) {
          return (a && a(k[t], t, e), i ? s : M());
        }
        if (
          ((s = M()),
          (n = String(n)),
          (u = n),
          (n = n.toLowerCase()),
          e.call(T, n))
        )
          return l && T[n]
            ? w(T[n])
            : ((s[I.indexOf(n) === -1 ? "irregular" : "regular"] = u), s);
        for (F = 0, A = q(F); x(A); ) (F++, (A = q(F)));
        if (F < p || F > c) F = 0;
        else {
          if (F > d) s.language = u.slice(0, F);
          else if (F > m) s.language = u.slice(0, F);
          else
            for (
              B = 0, s.language = u.slice(0, F);
              N(q(F)) &&
              x(q(F + 1)) &&
              x(q(F + 2)) &&
              x(q(F + 3)) &&
              !x(q(F + 4));
            ) {
              if (B >= _) return U(F, S);
              (s.extendedLanguageSubtags.push(u.slice(F + 1, F + 4)),
                (F = F + 4),
                B++);
            }
          for (
            N(q(F)) &&
              x(q(F + 1)) &&
              x(q(F + 2)) &&
              x(q(F + 3)) &&
              x(q(F + 4)) &&
              !x(q(F + 5)) &&
              ((s.script = u.slice(F + 1, F + 5)), (F += 5)),
              N(q(F)) &&
                (x(q(F + 1)) && x(q(F + 2)) && !x(q(F + 3))
                  ? ((s.region = u.slice(F + 1, F + 3)), (F += 3))
                  : D(q(F + 1)) &&
                    D(q(F + 2)) &&
                    D(q(F + 3)) &&
                    !D(q(F + 4)) &&
                    ((s.region = u.slice(F + 1, F + 4)), (F += 4)));
            N(q(F));
          ) {
            for (W = F + 1, O = 0; $(q(W)); )
              if ((W++, O++, O > f)) return U(W, b);
            if (O >= g) (s.variants.push(u.slice(F + 1, W)), (F = W));
            else if (D(q(F + 1)) && O >= h)
              (s.variants.push(u.slice(F + 1, W)), (F = W));
            else break;
          }
          for (
            ;
            N(q(F)) &&
            !(P(q(F + 1)) || !$(q(F + 1)) || !N(q(F + 2)) || !$(q(F + 3)));
          ) {
            for (W = F + 2, B = 0; N(q(W)) && $(q(W + 1)) && $(q(W + 2)); )
              for (W = W + 2, O = 2, B++; $(q(W)); ) {
                if (O > y) return U(W, v);
                (W++, O++);
              }
            if (!B) return U(W, R);
            (s.extensions.push({
              singleton: u.charAt(F + 1),
              extensions: u.slice(F + 3, W).split(t),
            }),
              (F = W));
          }
        }
        if ((F === 0 && P(q(0))) || (F !== 1 && N(q(F)) && P(q(F + 1))))
          for (W = F = F ? F + 2 : 1; N(q(W)) && $(q(W + 1)); ) {
            for (W += 2, O = 1; $(q(W)); ) {
              if (O >= C) return U(W, L);
              (W++, O++);
            }
            (s.privateuse.push(u.slice(F + 1, W)), (F = W));
          }
        return F !== n.length ? U(F, E) : s;
      }
      function A(e) {
        var r = [],
          o,
          a,
          i,
          l;
        if (e && (e.irregular || e.regular)) return e.irregular || e.regular;
        if (e && e.language)
          for (
            r = r.concat(
              e.language,
              e.extendedLanguageSubtags || [],
              e.script || [],
              e.region || [],
              e.variants || [],
            ),
              o = e.extensions || [],
              a = -1,
              l = o.length;
            ++a < l;
          )
            ((i = o[a]),
              i.singleton &&
                i.extensions &&
                i.extensions.length &&
                (r = r.concat(i.singleton, i.extensions)));
        return (
          e &&
            e.privateuse &&
            e.privateuse.length &&
            (r = r.concat(n, e.privateuse)),
          r.join(t)
        );
      }
      var F = {};
      ((F.parse = w), (F.stringify = A), (l.exports = F));
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
