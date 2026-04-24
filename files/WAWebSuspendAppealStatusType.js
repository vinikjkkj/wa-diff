__d(
  "WAWebSuspendAppealStatusType",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return (function (e) {
        return e === "IN_REVIEW"
          ? "IN_REVIEW"
          : e === "APPROVED"
            ? "APPROVED"
            : e === "REJECTED"
              ? "REJECTED"
              : null;
      })(e == null ? void 0 : e.toUpperCase());
    }
    i.toSuspendAppealStatus = e;
  },
  66,
);
