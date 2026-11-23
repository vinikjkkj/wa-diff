__d(
  "WAWebVcardUtils",
  ["fbt", "WATypeUtils", "WAWebFbtIntlList", "WAWebVcardParsingUtils", "err"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t,
        n,
        a = (t = e.ORG) == null ? void 0 : t[0],
        i = (n = e.TITLE) == null ? void 0 : n[0];
      if (a && Array.isArray(a.value) && a.value.length > 0) {
        var l,
          s = null;
        i != null && i.value && (s = ("" + i.value).trim());
        var u = a.value,
          c = u[0],
          d = babelHelpers.arrayLikeToArray(u).slice(1);
        d.push(c);
        var m = r("WAWebFbtIntlList")(
          d
            .map(function (e) {
              return o("WATypeUtils").isString(e) ? e.trim() : "";
            })
            .filter(function (e) {
              return e.length;
            }),
          r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ).toString();
        return (
          (s || "") + ((l = s) != null && l.length && m.length ? " - " : "") + m
        );
      }
      return "";
    }
    function u(e) {
      var t,
        n =
          ((t = {
            jabber: s._(/*BTDS*/ ""),
            "skype-username": s._(/*BTDS*/ ""),
            skype: s._(/*BTDS*/ ""),
            msn: s._(/*BTDS*/ ""),
            aim: s._(/*BTDS*/ ""),
            yahoo: s._(/*BTDS*/ ""),
            icq: s._(/*BTDS*/ ""),
            "wa-biz-description": s._(/*BTDS*/ ""),
          }),
          (t[o("WAWebVcardParsingUtils").WA_BIZ_NAME] = s._(/*BTDS*/ "")),
          t),
        r = e.properties["X-ABLabel"] || n[e.type.toLowerCase()];
      if (r != null && r !== "")
        return o("WAWebVcardParsingUtils").clean(String(r));
      var a = {
        TEL: [
          [["cell"], s._(/*BTDS*/ "")],
          [["iphone"], s._(/*BTDS*/ "")],
          [["main"], s._(/*BTDS*/ "")],
          [["home", "fax"], s._(/*BTDS*/ "")],
          [["work", "fax"], s._(/*BTDS*/ "")],
          [["home"], s._(/*BTDS*/ "")],
          [["work"], s._(/*BTDS*/ "")],
          [["pager"], s._(/*BTDS*/ "")],
          [[], s._(/*BTDS*/ "")],
        ],
        EMAIL: [
          [["home"], s._(/*BTDS*/ "")],
          [["work"], s._(/*BTDS*/ "")],
          [["internet"], s._(/*BTDS*/ "")],
        ],
        URL: [
          [["home"], s._(/*BTDS*/ "")],
          [["work"], s._(/*BTDS*/ "")],
        ],
        ADR: [
          [["home"], s._(/*BTDS*/ "")],
          [["work"], s._(/*BTDS*/ "")],
        ],
      };
      r = e.type;
      var i = a[e.type];
      if (i != null) {
        var l,
          u,
          c = new Set(
            (l =
              (u = e.properties) == null || (u = u.type) == null
                ? void 0
                : u.map(function (e) {
                    return e.toLowerCase();
                  })) != null
              ? l
              : [],
          );
        for (var d of i) {
          var m = d[0],
            p = d[1];
          if (new Set(m).difference(c).size === 0) {
            r = p;
            break;
          }
        }
      }
      return r;
    }
    function c(e) {
      return d(
        e.map(function (e) {
          return e.displayName;
        }),
      ).toString();
    }
    function d(e) {
      var t = e.find(function (e) {
        return !!e;
      });
      return e.length
        ? t == null || t === ""
          ? s._(/*BTDS*/ "", [s._plural(e.length, "count")])
          : e.length === 1
            ? t
            : s._(/*BTDS*/ "", [
                s._plural(e.length - 1, "count"),
                s._param("contactName", t),
              ])
        : s._(/*BTDS*/ "");
    }
    function m(e) {
      if (e.length === 0) throw r("err")("No vcards provided");
      return e.length === 1
        ? e[0]
        : {
            displayName: c(e),
            vcard: e
              .map(function (e) {
                return e.vcard;
              })
              .join("\n"),
            isMultiVcard: !0,
          };
    }
    ((l.vcardGetOrganizationString = e),
      (l.vcardGetType = u),
      (l.getNameString = c),
      (l.getNameStringFromNames = d),
      (l.mergeVcards = m));
  },
  226,
);
