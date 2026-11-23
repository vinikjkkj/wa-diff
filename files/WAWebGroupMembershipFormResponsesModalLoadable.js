__d(
  "WAWebGroupMembershipFormResponsesModalLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "WAWebModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebGroupMembershipFormRequestResponsesModal.react",
        )
          .__setRef("WAWebGroupMembershipFormResponsesModalLoadable")
          .load();
      }, "GroupMembershipFormRequestResponsesModal"),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingModal.react"), {
            theme: o("WAWebModal.react").ModalTheme.Flex,
            title: s._(/*BTDS*/ ""),
            error: !!t.error,
          });
        },
      });
    l.GroupMembershipFormRequestResponsesModalLoadable = d;
  },
  226,
);
