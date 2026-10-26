__d(
  "WAWebVcardParsingUtils",
  [
    "WALogger",
    "WATypeUtils",
    "WAWeb-moment",
    "WAWebURLUtils",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "wa-biz-name",
      u = 5e6,
      c = 4096,
      d = 100,
      m = 16 * 1024,
      p = 257,
      _ = "BEGIN:VCARD",
      f = "END:VCARD",
      g = /^X-([^;:]+)(?:;[^:]+)?:(.+)/,
      h = {
        "X-ABLabel": [/^X-ABLabel(?:;([^:]+))?:(.+)/, 1],
        ADR: [/^ADR(?:;([^:]+))?:;;(.*);(.*);(.*);(.*);(.*)/, 5],
        "X-ABADR": [/^X-ABADR(?:;([^:]+))?:(.*)/, 1],
        URL: [/^URL(?:;([^:]+))?:(.*)/, 1],
        EMAIL: [/^EMAIL(?:;([^:]+))?:(.+)/, 1],
        TEL: [/^TEL(?:;([^:]+))?:(.+)/, 1],
      },
      y = {
        N: [/^N(?:;([^:]+))?:([^;]*);([^;]*);([^;]*);([^;]*);(.*)/, 5],
        FN: [/^FN(?:;([^:]+))?:(.*)/, 1],
        NICKNAME: [/^NICKNAME(?:;([^:]+))?:(.*)/, 1],
        "X-PHONETIC-FIRST-NAME": [
          /^X-PHONETIC-FIRST-NAME(?:;([^:]+))?:(.*)/,
          1,
        ],
        "X-PHONETIC-LAST-NAME": [/^X-PHONETIC-LAST-NAME(?:;([^:]+))?:(.*)/, 1],
        ORG: [/^ORG(?:;([^:]+))?:([^;]*)(?:;(.*))?/, 2],
        TITLE: [/^TITLE(?:;([^:]+))?:(.*)/, 1],
        TEL: [/^TEL(?:;([^:]+))?:(.*)/, 1],
        PHOTO: [/^PHOTO(?:;([^:]+))?:(.*)/, 1],
        BDAY: [/^BDAY(?:;([^:]+))?:(.*)/, 1],
        URL: [/^URL(?:;([^:]+))?:(.+)/, 1],
        EMAIL: [/^EMAIL(?:;([^:]+))?:(.+)/, 1],
      },
      C = function (t) {
        var e = t.index,
          n = t.properties,
          r = t.type,
          o = t.value;
        ((this.type = r),
          (this.index = e),
          (this.properties = n || {}),
          (this.value = o));
      };
    function b(e, t, n) {
      (Object.hasOwn(e, t) || (e[t] = []), e[t].push(n));
    }
    function v(e) {
      var t = {};
      return (
        e == null ||
          e === "" ||
          e.split(";").forEach(function (e) {
            var n = e.split(/=/);
            if (n.length === 1) {
              var r = n[0];
              b(t, r.toLowerCase(), !0);
            } else if (n.length === 2) {
              var o = n[0],
                a = n[1];
              b(t, o.toLowerCase(), a.toLowerCase());
            }
          }),
        t
      );
    }
    function S(e) {
      if (!(e == null || e === ""))
        return e
          .replace(/^_\$!<([^>]*)>!\$_$/, "$1")
          .replace(/\\,/, ",")
          .replace(/\\;/, ";")
          .replace(/\\\\/, "\\");
    }
    function R(e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          var r,
            o = (r = e[n]) != null ? r : [];
          t[n] = [].concat(o).sort(function (e, t) {
            var n, r;
            return (
              ((n = e.index) != null ? n : 0) - ((r = t.index) != null ? r : 0)
            );
          });
        }),
        t
      );
    }
    function L(e) {
      var t = [/-([^-]*)-([^-]*)-([^-]*)/, /^([^-]*)-([^-]*)-([^-]*)/],
        n = e;
      for (var o of t) {
        var a = e.match(o);
        if (a) {
          var i = !a[1].length || a[1] === "1604",
            l = i ? "0000" : a[1];
          ((n = r("WAWeb-moment")(l + "-" + a[2] + "-" + a[3]).format("l")),
            i && (n = n.replace(/[.,-\/\s]*0000[.,-\/\s]*/, "")));
          break;
        }
      }
      return n;
    }
    function E(e) {
      var t = [];
      return (
        e != null &&
          e.TEL &&
          e.TEL.forEach(function (e) {
            var n, r;
            ((n =
              (r = e.properties) == null || (r = r.waid) == null
                ? void 0
                : r.length) != null
              ? n
              : 0) > 0 &&
              (t = t.concat(
                e.properties.waid.map(function (e) {
                  return o("WAWebWidFactory").createUserWidOrThrow(e);
                }),
              ));
          }),
        t
      );
    }
    function k(e) {
      if (o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled()) {
        var t;
        if (((t = e == null ? void 0 : e.TEL) != null ? t : []).length > 0)
          return null;
        var n = ((e == null ? void 0 : e.SERVICE) || []).find(function (e) {
          return e.type.toLowerCase() === "wa-lid";
        });
        if (n != null && n.value)
          return o("WAWebWidFactory").createUserLidOrThrow(n.value, "lid");
      }
      return null;
    }
    function I(e) {
      var t = E(e).map(function (e) {
          return e;
        }),
        n = k(e);
      return (n != null && (t = t.concat(n)), t);
    }
    function T(t) {
      var n = t == null ? null : D(t),
        r = {},
        a = {};
      if (!(n == null || n.length < 3)) {
        var i = n[0].trim().toUpperCase(),
          l = n[1].trim().toUpperCase(),
          s = n[n.length - 1].trim().toUpperCase(),
          u = l === "VERSION:2.1" || l === "VERSION:3.0" || l === "VERSION:4.0";
        if (i !== "BEGIN:VCARD" || !u || s !== "END:VCARD") {
          var c = String(i === "BEGIN:VCARD"),
            d = String(u),
            m = String(s === "END:VCARD");
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[vcard] parse failed hdr=",
                  " ver=",
                  " ftr=",
                  " lines=",
                  "",
                ])),
              c,
              d,
              m,
              n.length,
            )
            .sendLogs("vcard-fault");
          return;
        }
        for (var p = 2; p < n.length - 1; p++) {
          var _,
            f = n[p],
            g = f.match(/item(\d+)\.(.*)/),
            S = g ? g[2] : f,
            L = (_ = S.match(/^([^:;]*)[:;]/)) == null ? void 0 : _[1];
          if (L != null) {
            var E = g ? h : y,
              k = L,
              I = L,
              T = {},
              x = void 0;
            if (Object.hasOwn(E, k)) {
              var P = E[k],
                N = P[0],
                M = P[1],
                w = S.match(N);
              w &&
                ((T = v(w[1])), (x = M === 1 ? (x = w[2]) : w.slice(2, 2 + M)));
            } else {
              var A = $(S);
              A && ((I = "SERVICE"), (k = A[1]), (x = A[2]), (T = {}));
            }
            var F = Array.isArray(x) ? x : [x];
            if (
              F.some(function (e) {
                return o("WATypeUtils").isString(e) && e.trim();
              })
            )
              if (g) {
                var O = g[1];
                a[O]
                  ? a[O].fields.push(
                      new C({ index: null, properties: T, type: k, value: x }),
                    )
                  : (a[O] = {
                      type: k,
                      index: p,
                      key: I,
                      properties: T,
                      value: x,
                      fields: [],
                    });
              } else
                b(r, I, new C({ index: p, properties: T, type: k, value: x }));
          }
        }
        return (
          Object.keys(a).forEach(function (e) {
            var t = a[e],
              n = t.fields,
              o = t.index,
              i = t.key,
              l = t.properties,
              s = t.type,
              u = t.value;
            (n.forEach(function (e) {
              l[e.type] = e.value;
            }),
              b(r, i, new C({ index: o, properties: l, type: s, value: u })));
          }),
          R(r)
        );
      }
    }
    function D(e) {
      if (!(e.length > u)) {
        var t = e.trimEnd(),
          n = Math.max(t.lastIndexOf("\n"), t.lastIndexOf("\r")) + 1;
        if (!(t.length - n > m)) {
          var r = x(t.slice(0, n));
          return (r.push(t.slice(n)), r);
        }
      }
    }
    function x(e) {
      for (
        var t = [],
          n = /\r\n?|\n/g,
          r = "",
          o = 0,
          a = 0,
          i = function () {
            t.length < d - 1 &&
              r.length <= m &&
              r.trim().length !== 0 &&
              t.push(r);
          };
        o < e.length;
      ) {
        var l;
        if (a === c || t.length === d - 1) return t;
        var s = n.exec(e),
          u = (l = s == null ? void 0 : s.index) != null ? l : e.length,
          p = e.slice(o, u);
        ((o = s != null ? n.lastIndex : e.length),
          a++,
          a > 1 && /^[ \t]/.test(p)
            ? r.length <= m && (r += p.slice(1))
            : (i(), (r = p)));
      }
      return (i(), t);
    }
    function $(e) {
      var t = e.indexOf("X-");
      return t === -1 ? null : e.slice(t).match(g);
    }
    function P(e) {
      if (e) {
        var t = e.PHOTO;
        if (t != null && t[0] && r("WAWebURLUtils").isData(t[0].value))
          return t[0].value;
      }
    }
    function N(e) {
      if (e.length > u) return [];
      for (var t = [], n = e.indexOf(_); n !== -1 && t.length < p; ) {
        var o = e.indexOf(f, n + _.length);
        if (o === -1) break;
        (t.push(e.slice(n, o + f.length)), (n = e.indexOf(_, o + f.length)));
      }
      return r("compactMap")(t, function (e) {
        return T(e);
      });
    }
    function M(e) {
      return (e.SERVICE || []).some(function (e) {
        return e.type.toLowerCase() === s && e.value;
      });
    }
    ((l.WA_BIZ_NAME = s),
      (l.MAX_VCARDS_PER_MESSAGE = p),
      (l.Field = C),
      (l.clean = S),
      (l.vcardGetDate = L),
      (l.vcardPhoneNumberWids = E),
      (l.vcardLidWid = k),
      (l.vcardAllWids = I),
      (l.parseVcard = T),
      (l.vcardThumbnail = P),
      (l.parseMultiVcard = N),
      (l.vcardIsBiz = M));
  },
  98,
);
