__d(
  "WAWebBizBroadcastsSmartCSVImportSelectColumnsScreenLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebBizBroadcastsSmartCSVImportSelectColumnsScreen.react",
        )
          .__setRef(
            "WAWebBizBroadcastsSmartCSVImportSelectColumnsScreenLoadable",
          )
          .load();
        return e;
      }, "BusinessBroadcastSmartCSVImportSelectColumnsScreen");
    async function c(e) {
      var t = await u();
      o("WAWebModalManager").ModalManager.open(
        s.jsx(t, babelHelpers.extends({}, e)),
      );
    }
    l.openSmartCSVImportSelectColumnsScreenLoadable = c;
  },
  98,
);
