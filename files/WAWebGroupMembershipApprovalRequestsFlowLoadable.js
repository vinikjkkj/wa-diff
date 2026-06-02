__d(
  "WAWebGroupMembershipApprovalRequestsFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebGroupMembershipApprovalRequestsFlow.react",
        )
          .__setRef("WAWebGroupMembershipApprovalRequestsFlowLoadable")
          .load();
        return e;
      }, "GroupMembershipApprovalRequestsFlow"),
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
