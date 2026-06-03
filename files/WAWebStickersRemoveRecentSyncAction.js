__d(
  "WAWebStickersRemoveRecentSyncAction",
  [
    "WALogger",
    "WALongInt",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebMiscGatingUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebRecentStickerCollectionMd",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
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
            return o("WASyncdConst").Actions.RemoveRecentSticker;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this;
                if (!o("WAWebMiscGatingUtils").isRecentStickersMDEnabled())
                  return (
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: remove recent sticker operation not supported",
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
                  i = t.map(function (e) {
                    var t;
                    if (e.operation !== "set")
                      return (
                        r++,
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Unsupported,
                        }
                      );
                    var i = e.indexParts,
                      l = i[1];
                    if (l == null) return (a++, n.malformedActionIndex());
                    var s =
                        (t = e.value.removeRecentStickerAction) == null
                          ? void 0
                          : t.lastStickerSentTs,
                      u = o(
                        "WAWebRecentStickerCollectionMd",
                      ).RecentStickerCollectionMd.get(l);
                    if (!u)
                      return {
                        actionState: o("WASyncdConst").SyncActionState.Orphan,
                      };
                    var c = o("WALongInt").maybeNumberOrThrowIfTooLarge(s);
                    return (
                      (c == null ||
                        o("WALongInt").numberOrThrowIfTooLarge(u.timestamp) <=
                          c) &&
                        o(
                          "WAWebRecentStickerCollectionMd",
                        ).RecentStickerCollectionMd.removeAndSave(u),
                      { actionState: o("WASyncdConst").SyncActionState.Success }
                    );
                  });
                return (
                  r > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: remove recent sticker sync: ",
                          " operations not supported",
                        ])),
                      r,
                    ),
                  a > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: ",
                          " sticker hashes not provided",
                        ])),
                      a,
                    ),
                  i
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.generateRemoveStickerMutation = function (t) {
            var e = o("WATimeUtils").unixTimeMs(),
              n = {
                removeRecentStickerAction: { lastStickerSentTs: t.timestamp },
              };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [t.sticker.filehash],
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              version: this.getVersion(),
              value: n,
              timestamp: e,
              action: this.getAction(),
            });
          }),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
