__d(
  "WAWebGroupMembershipApprovalRequestsFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebGroupMembershipApprovalRequestsFlow.react",
          )
            .__setRef("WAWebGroupMembershipApprovalRequestsFlowLoadable")
            .load();
          return e;
        }),
        "GroupMembershipApprovalRequestsFlow",
      ),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), {
            error: !!t.error,
            cancellable: !1,
          });
        },
      });
    l.GroupMembershipApprovalRequestsFlowLoadable = c;
  },
  98,
);
