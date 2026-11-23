__d(
  "MAIBAA2UIv09FormDataContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect,
      m = s.createContext({
        getFormData: function () {
          return {};
        },
        isDirty: !1,
        removeFieldValue: function () {},
        selectionCount: 0,
        updateFieldValue: function () {},
        updateValidationValue: function () {},
        validationValues: {},
      });
    function p(e, t, n) {
      var r = c(m),
        o = r.removeFieldValue,
        a = r.updateFieldValue,
        i = r.updateValidationValue;
      d(
        function () {
          a(e, t);
          var r = n != null ? n : typeof t == "string" ? t : null;
          return (
            r != null && i(e, r),
            function () {
              o(e);
            }
          );
        },
        [e, t, n, o, a, i],
      );
    }
    ((l.A2UIv09FormDataContext = m), (l.useV09FormFieldRegistration = p));
  },
  98,
);
