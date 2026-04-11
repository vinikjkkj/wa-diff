__d(
  "WAWebGroupMembershipApprovalRequestCollection",
  ["WAWebCollection", "WAWebGroupMembershipApprovalRequestModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(r("WAWebCollection"));
    ((e.model = r("WAWebGroupMembershipApprovalRequestModel")),
      (e.comparator = function (e, t) {
        return t.t - e.t;
      }),
      (l.default = e));
  },
  98,
);
