__d(
  "WAWebAlbumsFormatAlbumMessageText",
  [
    "fbt",
    "WAWebAlbumMessageUtils",
    "WAWebFbtIntlList",
    "WAWebMessageAssociationUIUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.associatedMessages,
        n = e.msg,
        a = o("WAWebAlbumMessageUtils").getAlbumPhotoAndVideoCountText(
          t != null
            ? t
            : o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(
                n.id,
              ),
        );
      return a.length === 0
        ? s._(/*BTDS*/ "Album")
        : r("WAWebFbtIntlList")(
            a,
            r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
            r("WAWebFbtIntlList").DELIMITERS.COMMA,
          ).toString();
    }
    l.default = e;
  },
  226,
);
