__d(
  "WAWebCustomerManagerRequestErrors",
  ["WAWebCustomerManagerAccessDeniedError", "WAWebGraphQLServerError"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o(
        "WAWebGraphQLServerError",
      ).isContactManagerSubscriptionRequiredError(e)
        ? new (o(
            "WAWebCustomerManagerAccessDeniedError",
          ).CustomerManagerAccessDeniedError)()
        : e;
    }
    l.asCustomerManagerRequestError = e;
  },
  98,
);
