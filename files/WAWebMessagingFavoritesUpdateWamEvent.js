__d(
  "WAWebMessagingFavoritesUpdateWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumFavoritesUpdateEntryPoint"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MessagingFavoritesUpdate: [
            5460,
            {
              contactFavCountAfterUpdate: [1, e.TYPES.INTEGER],
              contactFavCountBeforeUpdate: [2, e.TYPES.INTEGER],
              favoritesUpdateEntryPoint: [
                3,
                o("WAWebWamEnumFavoritesUpdateEntryPoint")
                  .FAVORITES_UPDATE_ENTRY_POINT,
              ],
              groupFavCountAfterUpdate: [4, e.TYPES.INTEGER],
              groupFavCountBeforeUpdate: [5, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MessagingFavoritesUpdate: [] },
      );
    l.MessagingFavoritesUpdateWamEvent = s;
  },
  98,
);
