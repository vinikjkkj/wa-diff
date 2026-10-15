__d(
  "WAWebCustomerManagerRequestErrors",
  [
    "WAWebCustomerManagerAccessDeniedError",
    "WAWebCustomerManagerAccessDeniedNotifier",
    "WAWebGraphQLServerError",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o(
        "WAWebGraphQLServerError",
      ).isContactManagerSubscriptionRequiredError(e)
        ? (o(
            "WAWebCustomerManagerAccessDeniedNotifier",
          ).notifyCustomerManagerAccessDenied(),
          new (o(
            "WAWebCustomerManagerAccessDeniedError",
          ).CustomerManagerAccessDeniedError)())
        : e;
    }
    l.asCustomerManagerRequestError = e;
  },
  98,
);
