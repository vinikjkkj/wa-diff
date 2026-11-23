__d(
  "WAWebSharableEventCreationNotSupportedModalLoadable",
  ["JSResourceForInteraction", "WAWebModalLoadable"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebModalLoadable")(async function () {
      return (
        await r("JSResourceForInteraction")(
          "WAWebSharableEventCreationNotSupportedModal.react",
        )
          .__setRef("WAWebSharableEventCreationNotSupportedModalLoadable")
          .load()
      ).SharableEventCreationNotSupportedModal;
    }, "SharableEventCreationNotSupportedModal");
    l.SharableEventCreationNotSupportedModalLoadable = e;
  },
  98,
);
