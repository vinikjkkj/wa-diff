__d(
  "WAWebBugnubLoadable",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(async function () {
      var e = await r("JSResourceForInteraction")("WAWebBugnub.react")
        .__setRef("WAWebBugnubLoadable")
        .load();
      return e.openBugnubPopup;
    }, "bugnub");
    function s() {
      e().then(function (e) {
        e();
      });
    }
    l.default = s;
  },
  98,
);
