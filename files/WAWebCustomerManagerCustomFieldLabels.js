__d(
  "WAWebCustomerManagerCustomFieldLabels",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e === "TEXT"
        ? s._(/*BTDS*/ "Text")
        : e === "NUMERIC"
          ? s._(/*BTDS*/ "Number")
          : e === "MONEY"
            ? s._(/*BTDS*/ "Money")
            : e === "DATE"
              ? s._(/*BTDS*/ "Date")
              : e === "ENUM"
                ? s._(/*BTDS*/ "Dropdown")
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function u(e) {
      return e.type === "MONEY" && e.currency != null
        ? e.name + " (" + e.currency + ")"
        : e.name;
    }
    ((l.getCustomFieldTypeLabel = e), (l.getCustomFieldColumnLabel = u));
  },
  226,
);
