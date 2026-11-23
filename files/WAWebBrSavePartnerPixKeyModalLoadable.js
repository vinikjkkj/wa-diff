__d(
  "WAWebBrSavePartnerPixKeyModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebBrSavePartnerPixKeyModal.react",
        )
          .__setRef("WAWebBrSavePartnerPixKeyModalLoadable")
          .load();
        return e;
      }, "BrSavePartnerPixKeyModal"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    l.BrSavePartnerPixKeyModalLoadable = c;
  },
  98,
);
