__d(
  "WAWebProfileDrawerLoadableRequireBundle",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(async function () {
      var e = await r("JSResourceForInteraction")("WAWebProfileDrawer.react")
        .__setRef("WAWebProfileDrawerLoadableRequireBundle")
        .load();
      return e;
    }, "ProfileDrawer");
    l.requireBundle = e;
  },
  98,
);
