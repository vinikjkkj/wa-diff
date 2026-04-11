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
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "wa-biz-name",
      u = /X-([^;:]+)(?:;[^:]+)*:(.+)/,
      c = {
        "X-ABLabel": [/X-ABLabel(?:;([^:]+))*:(.+)/, 1],
        ADR: [/ADR(?:;([^:]+))*:;;(.*);(.*);(.*);(.*);(.*)/, 5],
        "X-ABADR": [/X-ABADR(?:;([^:]+))*:(.*)/, 1],
        URL: [/URL(?:;([^:]+))*:(.*)/, 1],
        EMAIL: [/EMAIL(?:;([^:]+))*:(.+)/, 1],
        TEL: [/TEL(?:;([^:]+))*:(.+)/, 1],
      },
      d = {
        N: [/N(?:;([^:]+))*:([^;]*);([^;]*);([^;]*);([^;]*);(.*)/, 5],
        FN: [/FN(?:;([^:]+))*:(.*)/, 1],
        NICKNAME: [/NICKNAME(?:;([^:]+))*:(.*)/, 1],
        "X-PHONETIC-FIRST-NAME": [/X-PHONETIC-FIRST-NAME(?:;([^:]+))*:(.*)/, 1],
        "X-PHONETIC-LAST-NAME": [/X-PHONETIC-LAST-NAME(?:;([^:]+))*:(.*)/, 1],
        ORG: [/ORG(?:;([^:]+))*:([^;]*)(?:;(.*))*/, 2],
        TITLE: [/TITLE(?:;([^:]+))*:(.*)/, 1],
        TEL: [/TEL(?:;([^:]+))*:(.*)/, 1],
        PHOTO: [/PHOTO(?:;([^:]+))*:(.*)/, 1],
        BDAY: [/BDAY(?:;([^:]+))*:(.*)/, 1],
        URL: [/URL(?:;([^:]+))*:(.+)/, 1],
        EMAIL: [/EMAIL(?:;([^:]+))*:(.+)/, 1],
      },
      m = function (t, n, r, o) {
        ((this.type = t),
          (this.index = n),
          (this.properties = r || {}),
          (this.value = o));
      };
    function p(e, t, n) {
      (e[t] || (e[t] = []), e[t].push(n));
    }
    function _(e) {
      var t = {};
      return (
        e &&
          e.split(";").forEach(function (e) {
            var n = e.split(/=/);
            if (n.length === 1) {
              var r = n[0];
              p(t, r.toLowerCase(), !0);
            } else if (n.length === 2) {
              var o = n[0],
                a = n[1];
              p(t, o.toLowerCase(), a.toLowerCase());
            }
          }),
        t
      );
    }
    function f(e) {
      if (e)
        return e
          .replace(/^_\$!<([^>]*)>!\$_$/, "$1")
          .replace(/\\,/, ",")
          .replace(/\\;/, ";")
          .replace(/\\\\/, "\\");
    }
    function g(e) {
      var t = {};
      return (
        r("lodash").forOwn(e, function (e, n) {
          t[n] = r("lodash").sortBy(e, function (e) {
            return e.index;
          });
        }),
        t
      );
    }
    function h(e) {
      var t = [/-([^-]*)-([^-]*)-([^-]*)/, /([^-]*)-([^-]*)-([^-]*)/],
        n = e;
      return (
        r("lodash").forEach(t, function (t) {
          var o = e.match(t);
          if (o) {
            var a = !o[1].length || o[1] === "1604",
              i = a ? "0000" : o[1];
            return (
              (n = r("WAWeb-moment")(i + "-" + o[2] + "-" + o[3]).format("l")),
              a && (n = n.replace(/[.,-\/\s]*0000[.,-\/\s]*/, "")),
              !1
            );
          }
        }),
        n
      );
    }
    function y(e) {
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
    function C(e) {
      if (o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled()) {
        var t = ((e == null ? void 0 : e.SERVICE) || []).find(function (e) {
          return e.type.toLowerCase() === "wa-lid";
        });
        if (t != null && t.value)
          return o("WAWebWidFactory").createUserLidOrThrow(t.value, "lid");
      }
      return null;
    }
    function b(e) {
      var t = y(e).map(function (e) {
          return e;
        }),
        n = C(e);
      return (n != null && (t = t.concat(n)), t);
    }
    function v(t) {
      var n =
          t == null
            ? void 0
            : t
                .replace(/\r?\n|\r/g, "\n")
                .replace(/\n^[ \t]/gm, "")
                .split("\n")
                .filter(function (e) {
                  return e.trim().length !== 0;
                }),
        r = {},
        a = {};
      if (!(n == null || n.length < 3)) {
        var i = n[0].trim().toUpperCase(),
          l = n[1].trim().toUpperCase(),
          s = n[n.length - 1].trim().toUpperCase(),
          f = l === "VERSION:2.1" || l === "VERSION:3.0" || l === "VERSION:4.0";
        if (i !== "BEGIN:VCARD" || !f || s !== "END:VCARD") {
          var h = String(i === "BEGIN:VCARD"),
            y = String(f),
            C = String(s === "END:VCARD");
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
              h,
              y,
              C,
              n.length,
            )
            .sendLogs("vcard-fault");
          return;
        }
        for (var b = 2; b < n.length - 1; b++) {
          var v,
            S = n[b],
            R = S.match(/item(\d+)\.(.*)/),
            L = R ? R[2] : S,
            E = (v = L.match(/([^:;]*)[:;].*/)) == null ? void 0 : v[1];
          if (E != null) {
            var k = R ? c : d,
              I = E,
              T = E,
              D = void 0,
              x = void 0;
            if (k[I]) {
              var $ = k[I],
                P = $[0],
                N = $[1],
                M = L.match(P);
              M &&
                ((D = _(M[1])), (x = N === 1 ? (x = M[2]) : M.slice(2, 2 + N)));
            } else {
              var w = L.match(u);
              w && ((T = "SERVICE"), (I = w[1]), (x = w[2]), (D = {}));
            }
            var A = Array.isArray(x) ? x : [x];
            if (
              A.some(function (e) {
                return o("WATypeUtils").isString(e) && e.trim();
              })
            )
              if (R) {
                var F = R[1];
                a[F]
                  ? a[F].fields.push(new m(I, null, D, x))
                  : (a[F] = {
                      type: I,
                      index: b,
                      key: T,
                      properties: D,
                      value: x,
                      fields: [],
                    });
              } else p(r, T, new m(I, b, D, x));
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
              p(r, i, new m(s, o, l, u)));
          }),
          g(r)
        );
      }
    }
    function S(e) {
      if (e) {
        var t = e.PHOTO;
        if (t != null && t[0] && r("WAWebURLUtils").isData(t[0].value))
          return t[0].value;
      }
    }
    function R(e) {
      var t = e.match(/BEGIN:VCARD([^]*?)END:VCARD/g);
      return t
        ? r("compactMap")(t, function (e) {
            return v(e);
          })
        : [];
    }
    function L(e) {
      return (e.SERVICE || []).some(function (e) {
        return e.type.toLowerCase() === s && e.value;
      });
    }
    ((l.WA_BIZ_NAME = s),
      (l.Field = m),
      (l.clean = f),
      (l.vcardGetDate = h),
      (l.vcardPhoneNumberWids = y),
      (l.vcardLidWid = C),
      (l.vcardAllWids = b),
      (l.parseVcard = v),
      (l.vcardThumbnail = S),
      (l.parseMultiVcard = R),
      (l.vcardIsBiz = L));
  },
  98,
);
