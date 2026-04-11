__d(
  "WAWebContactTypeNames",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e === 0
        ? s._(/*BTDS*/ "None")
        : e === 1
          ? s._(/*BTDS*/ "Customer")
          : e === 2
            ? s._(/*BTDS*/ "Colleague")
            : e === 3
              ? s._(/*BTDS*/ "Vendor")
              : e === 4
                ? s._(/*BTDS*/ "Personal")
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    l.getContactTypeName = e;
  },
  226,
);
