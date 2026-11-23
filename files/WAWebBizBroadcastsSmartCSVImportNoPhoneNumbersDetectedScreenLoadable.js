__d(
  "WAWebBizBroadcastsSmartCSVImportNoPhoneNumbersDetectedScreenLoadable",
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
          "WAWebBizBroadcastsSmartCSVImportNoPhoneNumbersDetectedScreen.react",
        )
          .__setRef(
            "WAWebBizBroadcastsSmartCSVImportNoPhoneNumbersDetectedScreenLoadable",
          )
          .load();
        return e;
      }, "BusinessBroadcastSmartCSVImportNoPhoneNumbersDetectedScreen");
    async function c(e) {
      var t = await u();
      o("WAWebModalManager").ModalManager.open(
        s.jsx(t, babelHelpers.extends({}, e)),
      );
    }
    l.openSmartCSVImportNoPhoneNumbersDetectedScreenLoadable = c;
  },
  98,
);
