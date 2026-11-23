__d(
  "WAWebAlbumAssociationRevokePolicy",
  [
    "WAWebABProps",
    "WAWebAssociationRevokePolicy",
    "WAWebMessageAssociation.flow",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      associationType: o("WAWebMessageAssociation.flow").MessageAssociationType
        .MEDIA_ALBUM,
      parentType: o("WAWebMsgType").MSG_TYPE.ALBUM,
      getTombstone: function () {
        return o("WAWebABProps").getABPropConfigValue(
          "album_v2_receiving_enabled",
        )
          ? o("WAWebAssociationRevokePolicy").ParentRevokePolicy.HideTombstone
          : o("WAWebAssociationRevokePolicy").ParentRevokePolicy.ShowTombstone;
      },
    };
    l.albumAssociationRevokePolicy = e;
  },
  98,
);
