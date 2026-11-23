__d(
  "WAWebNewsletterAdminProfileEnforcementDetailScreenDrawerLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebNewsletterAdminProfileEnforcementDetailScreenDrawer.react",
        )
          .__setRef(
            "WAWebNewsletterAdminProfileEnforcementDetailScreenDrawerLoadable",
          )
          .load();
        return e;
      }, "NewsletterAdminProfileEnforcementDetailScreenDrawer"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.WAWebNewsletterAdminProfileEnforcementDetailScreenDrawerLoadable = c;
  },
  98,
);
