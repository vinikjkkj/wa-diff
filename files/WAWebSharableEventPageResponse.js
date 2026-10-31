__d(
  "WAWebSharableEventPageResponse",
  ["WAWebSharableEventStorageEnums"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.isHostedByViewer ||
        e.status ===
          o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
            .Canceled ||
        e.status ===
          o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
            .Suspended
        ? null
        : {
            selectedResponse:
              e.viewerResponse ===
                o("WAWebSharableEventStorageEnums")
                  .SharableEventStoredRsvpStatus.Going &&
              e.viewerExtraGuestCount > 0
                ? "going_with_guest"
                : e.viewerResponse ===
                    o("WAWebSharableEventStorageEnums")
                      .SharableEventStoredRsvpStatus.Going
                  ? "going"
                  : e.viewerResponse ===
                      o("WAWebSharableEventStorageEnums")
                        .SharableEventStoredRsvpStatus.Maybe
                    ? "maybe"
                    : e.viewerResponse ===
                        o("WAWebSharableEventStorageEnums")
                          .SharableEventStoredRsvpStatus.NotGoing
                      ? "not_going"
                      : e.viewerResponse ===
                            o("WAWebSharableEventStorageEnums")
                              .SharableEventStoredRsvpStatus.NoResponse ||
                          e.viewerResponse === null ||
                          e.viewerResponse === void 0
                        ? null
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                e.viewerResponse,
                            );
                          })(),
          };
    }
    l.getSharableEventPageResponse = e;
  },
  98,
);
