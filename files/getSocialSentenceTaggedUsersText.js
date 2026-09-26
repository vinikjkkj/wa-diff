__d(
  "getSocialSentenceTaggedUsersText",
  [
    "fbt",
    "FDSLink.react",
    "FDSText.react",
    "IntlVariations",
    "emptyFunction",
    "intlList",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      return t === r("emptyFunction")
        ? e
        : u.jsx(r("FDSText.react"), {
            color: "primary",
            type: "headlineEmphasized4",
            children: u.jsx(r("FDSLink.react"), { onClick: t, children: e }),
          });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t, n) {
      n === void 0 && (n = r("emptyFunction"));
      var o = t.length;
      if (o <= e)
        return r("intlList")(
          t.map(function (e) {
            var t = s._(/*BTDS*/ '_j{"*":"{name}"}', [
              s._name("name", e, r("IntlVariations").GENDER_UNKNOWN),
            ]);
            return c(t, n);
          }),
        );
      var a = o - e,
        i = s._(/*BTDS*/ '_j{"*":"{number} others","_1":"1 other"}', [
          s._plural(a, "number"),
        ]);
      return r("intlList")(
        t
          .slice(0, 3)
          .map(function (e) {
            var t = s._(/*BTDS*/ '_j{"*":"{name}"}', [
              s._name("name", e, r("IntlVariations").GENDER_UNKNOWN),
            ]);
            return c(t, n);
          })
          .concat([c(i, n)]),
      );
    }
    l.getSocialSentenceTaggedUsersText = d;
  },
  226,
);
