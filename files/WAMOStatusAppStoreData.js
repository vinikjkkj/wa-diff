__d(
  "WAMOStatusAppStoreData",
  [
    "AdsDML",
    "AdsDMLUtils",
    "AdsUEditorSelectAppProvider",
    "adsCreateSelector",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoize")(function () {
        var e = n("AdsUEditorSelectAppProvider");
        return r("adsCreateSelector")(
          [e.toFluxSelector()],
          function (t) {
            return t.selectedAppStore;
          },
          { name: i.id },
        );
      }),
      s = r("memoize")(function () {
        return o("AdsDMLUtils").selectorToQuery(e(), { name: i.id });
      });
    function u() {
      return o("AdsDML").subscribeQueryLive(s());
    }
    ((l.getSelectedAppStoreSelector = e), (l.getSelectedAppStoreLiveState = u));
  },
  98,
);
