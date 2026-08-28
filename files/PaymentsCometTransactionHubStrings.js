__d(
  "PaymentsCometTransactionHubStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "Default"),
      u = s._(/*BTDS*/ "Confirmed"),
      c = s._(/*BTDS*/ "Confirmed, Default");
    function d(e) {
      return {
        error_description: s._(
          /*BTDS*/ "A temporary problem occurred when trying to complete your request. Please try again later",
        ),
        error_title: "",
        extra_data: JSON.stringify(e),
      };
    }
    var m = {
      error_description: s._(
        /*BTDS*/ "A temporary problem occurred when trying to complete your request. Please try again later",
      ),
      error_title: "",
    };
    ((l.DEFAULT_LABEL = e),
      (l.CONFIRMED_LABEL = u),
      (l.CONFIRMED_AND_DEFAULT_LABEL = c),
      (l.convertGenericUserFacingError = d),
      (l.UNCAUGHT_ERROR_MESSAGE = m));
  },
  226,
);
