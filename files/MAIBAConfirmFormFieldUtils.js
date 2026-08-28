__d(
  "MAIBAConfirmFormFieldUtils",
  [
    "fbt",
    "FBNucleusEnvelopeOutline24Icon.react",
    "FBNucleusPhoneOutline24Icon.react",
    "SimpleInterfaceUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = /^\+?(?=.*\d)[\d\s\-().]{7,20}$/,
      c =
        ((e = {}),
        (e.EMAIL = {
          icon: r("FBNucleusEnvelopeOutline24Icon.react"),
          placeholder: s._(/*BTDS*/ "Enter email address"),
          errorMessage: s._(/*BTDS*/ "Incorrect email"),
          validate: function (t) {
            return o("SimpleInterfaceUtils").getIsValidEmail(t);
          },
        }),
        (e.PHONE_NUMBER = {
          icon: r("FBNucleusPhoneOutline24Icon.react"),
          placeholder: s._(/*BTDS*/ "Enter phone number"),
          errorMessage: s._(/*BTDS*/ "Invalid phone number"),
          validate: function (t) {
            return u.test(t);
          },
        }),
        e);
    function d(e) {
      return e === "EMAIL" || e === "PHONE_NUMBER";
    }
    function m(e, t) {
      var n, r;
      return (n = (r = p(e)) == null ? void 0 : r.validate(t)) != null ? n : !1;
    }
    function p(e) {
      var t;
      return e == null ? null : (t = c[e]) != null ? t : null;
    }
    ((l.isSupportedFieldType = d),
      (l.isValidPrefilledValue = m),
      (l.getFieldConfig = p));
  },
  226,
);
