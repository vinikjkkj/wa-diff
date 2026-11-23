__d(
  "WAWebForwardMessageModalLoadable",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(async function () {
      var e = await r("JSResourceForInteraction")(
        "WAWebForwardMessageModal.react",
      )
        .__setRef("WAWebForwardMessageModalLoadable")
        .load();
      return e;
    }, "ForwardMessageModal");
    l.requireBundle = e;
  },
  98,
);
