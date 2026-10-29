__d(
  "WAWebSharableEventCardLabel",
  [
    "fbt",
    "$InternalEnum",
    "WAWebSharableEventStorageEnums",
    "WAWebSharableEventStrings",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = n("$InternalEnum")({
      Accent: "accent",
      Negative: "negative",
      Neutral: "neutral",
    });
    function u(t, n) {
      var r;
      return t
        ? {
            text: o("WAWebSharableEventStrings").getSharableEventCreatorLabel(),
            tone: e.Accent,
          }
        : n == null
          ? null
          : {
              text:
                (r = o(
                  "WAWebSharableEventStrings",
                ).getSharableEventResponseLabel(n)) != null
                  ? r
                  : s._(/*BTDS*/ "Not responded"),
              tone:
                n ===
                o("WAWebSharableEventStorageEnums")
                  .SharableEventStoredRsvpStatus.Going
                  ? e.Accent
                  : n ===
                      o("WAWebSharableEventStorageEnums")
                        .SharableEventStoredRsvpStatus.NotGoing
                    ? e.Negative
                    : n ===
                          o("WAWebSharableEventStorageEnums")
                            .SharableEventStoredRsvpStatus.Maybe ||
                        n ===
                          o("WAWebSharableEventStorageEnums")
                            .SharableEventStoredRsvpStatus.NoResponse
                      ? e.Neutral
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              n,
                          );
                        })(),
            };
    }
    ((l.SharableEventCardLabelTone = e), (l.getSharableEventCardLabel = u));
  },
  226,
);
