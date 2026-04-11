__d(
  "WAWebBizBroadcastsContactErrorMessage",
  ["fbt", "WAWebBizBroadcastsTypedError"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e === o("WAWebBizBroadcastsTypedError").PhoneError.INVALID
        ? s._(/*BTDS*/ "Invalid number")
        : e === o("WAWebBizBroadcastsTypedError").PhoneError.DUPLICATE
          ? s._(/*BTDS*/ "Duplicate number")
          : e === o("WAWebBizBroadcastsTypedError").PhoneError.NOT_WHATSAPP_USER
            ? s._(/*BTDS*/ "Not on WhatsApp")
            : e === o("WAWebBizBroadcastsTypedError").NameError.INVALID
              ? s._(/*BTDS*/ "Invalid name")
              : e === o("WAWebBizBroadcastsTypedError").NameError.EMPTY
                ? s._(/*BTDS*/ "Empty name")
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    l.default = e;
  },
  226,
);
