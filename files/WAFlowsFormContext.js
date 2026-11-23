__d(
  "WAFlowsFormContext",
  ["invariant", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.createContext,
      m = c.useContext,
      p = d({
        getValue: function () {},
        setValue: function () {},
        getError: function () {},
        setFocus: function () {},
        setBlur: function () {},
        isFocused: function () {
          return !1;
        },
        isFormValid: function () {
          return !0;
        },
        isLastChild: function () {
          return !0;
        },
        getNextInput: function () {},
      });
    function _() {
      var e = m(p);
      return (e != null || s(0, 73578), e);
    }
    ((l.WAFlowsFormContext = p), (l.useWAFlowsForm = _));
  },
  98,
);
