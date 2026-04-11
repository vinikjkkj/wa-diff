__d(
  "WAWebVcardUtils",
  [
    "fbt",
    "WATypeUtils",
    "WAWebFbtIntlList",
    "WAWebVcardParsingUtils",
    "err",
    "lodash",
  ],
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
            jabber: s._(/*BTDS*/ "Jabber"),
            "skype-username": s._(/*BTDS*/ "Skype"),
            skype: s._(/*BTDS*/ "Skype"),
            msn: s._(/*BTDS*/ "Windows Live"),
            aim: s._(/*BTDS*/ "AIM"),
            yahoo: s._(/*BTDS*/ "Yahoo"),
            icq: s._(/*BTDS*/ "ICQ"),
            "wa-biz-description": s._(/*BTDS*/ "Description"),
          }),
          (t[o("WAWebVcardParsingUtils").WA_BIZ_NAME] = s._(
            /*BTDS*/ "Business name",
          )),
          t),
        a = e.properties["X-ABLabel"] || n[e.type.toLowerCase()];
      if (a != null && a !== "")
        return o("WAWebVcardParsingUtils").clean(String(a));
      var i = {
        TEL: [
          [["cell"], s._(/*BTDS*/ "Mobile")],
          [["iphone"], s._(/*BTDS*/ "iPhone")],
          [["main"], s._(/*BTDS*/ "Main")],
          [["home", "fax"], s._(/*BTDS*/ "Home fax")],
          [["work", "fax"], s._(/*BTDS*/ "Work fax")],
          [["home"], s._(/*BTDS*/ "Home")],
          [["work"], s._(/*BTDS*/ "Work")],
          [["pager"], s._(/*BTDS*/ "Pager")],
          [[], s._(/*BTDS*/ "Home")],
        ],
        EMAIL: [
          [["home"], s._(/*BTDS*/ "Home")],
          [["work"], s._(/*BTDS*/ "Work")],
          [["internet"], s._(/*BTDS*/ "Email")],
        ],
        URL: [
          [["home"], s._(/*BTDS*/ "Home")],
          [["work"], s._(/*BTDS*/ "Work")],
        ],
        ADR: [
          [["home"], s._(/*BTDS*/ "Home")],
          [["work"], s._(/*BTDS*/ "Work")],
        ],
      };
      return (
        (a = e.type),
        r("lodash").forOwn(i, function (t) {
          if (t) {
            var n,
              r,
              o = t[0],
              i = t[1];
            if (
              Array.from(
                new Set(o).difference(
                  new Set(
                    (n =
                      (r = e.properties) == null || (r = r.type) == null
                        ? void 0
                        : r.map(function (e) {
                            return e.toLowerCase();
                          })) != null
                      ? n
                      : [],
                  ),
                ),
              ).length === 0
            )
              return ((a = i), !1);
          }
        }),
        a
      );
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
        ? t
          ? e.length === 1
            ? t
            : s._(
                /*BTDS*/ '_j{"*":"{contactName} and {count} other contacts","_1":"{contactName} and 1 other contact"}',
                [s._plural(e.length - 1, "count"), s._param("contactName", t)],
              )
          : s._(/*BTDS*/ '_j{"*":"{count} contacts","_1":"1 contact"}', [
              s._plural(e.length, "count"),
            ])
        : s._(/*BTDS*/ "No contacts");
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
