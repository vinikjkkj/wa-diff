__d(
  "WAWebManagedAccountModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebManagedAccountModal.react",
        )
          .__setRef("WAWebManagedAccountModalLoadable")
          .load();
        return e;
      }, "ManagedAccountModal"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebManagedAccountModalLoadable = c;
  },
  98,
);
