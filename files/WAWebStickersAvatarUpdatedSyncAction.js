__d(
  "WAWebStickersAvatarUpdatedSyncAction",
  [
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebAvatarGatingUtils",
    "WAWebHasAvatar",
    "WAWebProtobufSyncAction.pb",
    "WAWebRecentStickerCollectionMd",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.AvatarUpdated;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this;
                if (!o("WAWebAvatarGatingUtils").avatarsOnWebEnabled())
                  return (
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: avatar updated sync: mutation not supported",
                        ])),
                    ),
                    t.map(function () {
                      return {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      };
                    })
                  );
                var r = 0,
                  a = 0,
                  i = 0,
                  l = t.map(function (e) {
                    var t;
                    if (e.operation !== "set")
                      return (
                        r++,
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Unsupported,
                        }
                      );
                    var l =
                      (t = e.value.avatarUpdatedAction) == null
                        ? void 0
                        : t.eventType;
                    if (l == null)
                      return (
                        a++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          n.collectionName,
                        )
                      );
                    var s = o(
                      "WAWebUserPrefsMultiDevice",
                    ).getPairingTimestamp();
                    if (s != null) {
                      var u = o("WATimeUtils").castMilliSecondsToUnixTime(
                        e.timestamp,
                      );
                      if (u <= o("WATimeUtils").castToUnixTime(s))
                        return (
                          i++,
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Skipped,
                          }
                        );
                    }
                    switch (l) {
                      case o("WAWebProtobufSyncAction.pb")
                        .SyncActionValue$AvatarUpdatedAction$AvatarEventType
                        .CREATED:
                      case o("WAWebProtobufSyncAction.pb")
                        .SyncActionValue$AvatarUpdatedAction$AvatarEventType
                        .UPDATED:
                        o("WAWebHasAvatar").saveHasAvatarOnTempStorage(!0);
                        break;
                      case o("WAWebProtobufSyncAction.pb")
                        .SyncActionValue$AvatarUpdatedAction$AvatarEventType
                        .DELETED:
                        o("WAWebHasAvatar").saveHasAvatarOnTempStorage(!1);
                        break;
                    }
                    return (
                      o(
                        "WAWebRecentStickerCollectionMd",
                      ).RecentStickerCollectionMd.removeAllRecentAvatarStickers(),
                      { actionState: o("WASyncdConst").SyncActionState.Success }
                    );
                  });
                return (
                  r > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: avatar updated sync: ",
                          " operations not supported",
                        ])),
                      r,
                    ),
                  a > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd] avatarUpdatedSync: ",
                          " mutations missing event",
                        ])),
                      a,
                    ),
                  i > 0 &&
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd] avatarUpdatedSync: ",
                          " events before pairing, skipped",
                        ])),
                      i,
                    ),
                  l
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);
