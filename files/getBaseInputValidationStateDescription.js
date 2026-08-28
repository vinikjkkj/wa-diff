__d(
  "getBaseInputValidationStateDescription",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = e.label,
        n = e.validationState;
      switch (n) {
        case "CORRECT":
          return s._(/*BTDS*/ "Input {Label of form input} is valid.", [
            s._param("Label of form input", t),
          ]);
        case "ERROR":
          return s._(/*BTDS*/ "Input {Label of form input} is invalid.", [
            s._param("Label of form input", t),
          ]);
        case "LOADING":
          return s._(
            /*BTDS*/ "Input {Label of form input} is being validated.",
            [s._param("Label of form input", t)],
          );
        case "WARN":
          return s._(/*BTDS*/ "Input {Label of form input} has a warning.", [
            s._param("Label of form input", t),
          ]);
      }
    }
    l.default = e;
  },
  226,
);
