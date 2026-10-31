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
    function u(t) {
      var n,
        r = t.isHostedByViewer,
        a = t.status,
        i = t.viewerResponse;
      return a ===
        o("WAWebSharableEventStorageEnums").SharableEventStoredStatus.Canceled
        ? { text: s._(/*BTDS*/ "Canceled"), tone: e.Neutral }
        : a ===
            o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
              .Suspended
          ? { text: s._(/*BTDS*/ "Suspended"), tone: e.Negative }
          : r
            ? {
                text: o(
                  "WAWebSharableEventStrings",
                ).getSharableEventHostingLabel(),
                tone: e.Accent,
              }
            : i == null
              ? null
              : {
                  text:
                    (n = o(
                      "WAWebSharableEventStrings",
                    ).getSharableEventResponseLabel(i)) != null
                      ? n
                      : s._(/*BTDS*/ "Not responded"),
                  tone:
                    i ===
                    o("WAWebSharableEventStorageEnums")
                      .SharableEventStoredRsvpStatus.Going
                      ? e.Accent
                      : i ===
                          o("WAWebSharableEventStorageEnums")
                            .SharableEventStoredRsvpStatus.NotGoing
                        ? e.Negative
                        : i ===
                              o("WAWebSharableEventStorageEnums")
                                .SharableEventStoredRsvpStatus.Maybe ||
                            i ===
                              o("WAWebSharableEventStorageEnums")
                                .SharableEventStoredRsvpStatus.NoResponse
                          ? e.Neutral
                          : (function () {
                              throw Error(
                                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                  i,
                              );
                            })(),
                };
    }
    ((l.SharableEventCardLabelTone = e), (l.getSharableEventCardLabel = u));
  },
  226,
);
