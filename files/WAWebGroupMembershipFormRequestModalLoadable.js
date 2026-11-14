__d(
  "WAWebGroupMembershipFormRequestModalLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
    "WAWebModal.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebGroupMembershipFormRequestModal.react",
        )
          .__setRef("WAWebGroupMembershipFormRequestModalLoadable")
          .load();
      }, "GroupMembershipFormRequestModal"),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingModal.react"), {
            theme: o("WAWebModal.react").ModalTheme.Flex,
            title: s._(/*BTDS*/ "View group request"),
            error: !!t.error,
          });
        },
      });
    l.GroupMembershipFormRequestModalLoadable = d;
  },
  226,
);
