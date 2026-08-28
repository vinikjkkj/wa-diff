__d(
  "AdsImageDialogPanelUtils",
  ["AdsImageDialogPanelLoggerEvents", "AdsInterfacesLogger", "JSResource"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      r("JSResource").loadAll(
        [
          r("JSResource")("AdsInterfacesLoggerConfigColumns").__setRef(
            "AdsImageDialogPanelUtils",
          ),
        ],
        function (n) {
          var o;
          r("AdsInterfacesLogger").log({
            data:
              ((o = {}), (o[n.EVENT_SOURCE] = e), (o[n.SEARCH_STRING] = t), o),
            eventName: r("AdsImageDialogPanelLoggerEvents").FILTER_EMPTY_RESULT,
            eventCategory: "user_action",
          });
        },
      );
    }
    l.logEmptySearchResult = e;
  },
  98,
);
