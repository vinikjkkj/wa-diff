__d(
  "WAWebAddMemberInviteOptionsLoadable",
  [
    "JSResourceForInteraction",
    "WAWebAddMemberInviteOptionsLabel",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebAddMemberInviteOptions.react",
          )
            .__setRef("WAWebAddMemberInviteOptionsLoadable")
            .load();
          return e;
        }),
        "AddMemberInviteOptions",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), {
            title: o(
              "WAWebAddMemberInviteOptionsLabel",
            ).getInviteOptionsLabel(),
            error: !!t.error,
          });
        },
      });
    l.WAWebAddMemberInviteOptionsLoadable = c;
  },
  98,
);
