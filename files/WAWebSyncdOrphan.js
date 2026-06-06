__d(
  "WAWebSyncdOrphan",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebGetSyncAction",
    "WAWebHistorySyncLidChatGating",
    "WAWebMiscGatingUtils",
    "WAWebSyncdCollectionHandler",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdDisabled",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f;
    async function g(e, t, n) {
      if (o("WAWebSyncdDisabled").isSyncdDisabled()) return Promise.resolve();
      await Promise.all([
        h(e),
        y(t),
        o("WAWebSyncdDbCallbacksApi")
          .bulkGetAccountLid(t)
          .then(function (e) {
            return C(e.filter(Boolean));
          }),
        n != null && n.length > 0 ? S(n) : void 0,
      ]);
    }
    async function h(e) {
      var t = await o("WAWebSyncdDbCallbacksApi").getAdditionalLidMsgKeys(e),
        n = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
          ? await o(
              "WAWebSyncdDbCallbacksApi",
            ).getAdditionalHistoryChatIdMsgKeys(e)
          : [];
      await b(e.concat(t, n), o("WASyncdConst").SyncModelType.Msg);
    }
    async function y(e) {
      var t = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
        ? await o("WAWebSyncdDbCallbacksApi").getAdditionalHistoryChatIds(e)
        : [];
      await b(e.concat(t), o("WASyncdConst").SyncModelType.Chat);
    }
    async function C(e) {
      await b(e, o("WASyncdConst").SyncModelType.Account);
    }
    async function b(e, t) {
      if (o("WAWebSyncdDisabled").isSyncdDisabled()) return Promise.resolve();
      var n = await o(
        "WAWebGetSyncAction",
      ).getSyncActionsByModelInfosInTransaction(
        e.map(function (e) {
          return [e, t, o("WASyncdConst").SyncActionState.Orphan];
        }),
      );
      await o("WAWebSyncdCollectionHandler").applyIndividualMutations(n);
    }
    async function v() {
      if (o("WAWebSyncdDisabled").isSyncdDisabled()) return Promise.resolve();
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: start applyAllOrphansAndUnsupported",
          ])),
      );
      var t = await o(
        "WAWebGetSyncAction",
      ).getSyncActionsByActionStatesInTransaction([
        o("WASyncdConst").SyncActionState.Orphan,
        o("WASyncdConst").SyncActionState.Unsupported,
      ]);
      (await o("WAWebSyncdCollectionHandler").applyIndividualMutations(t),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: end applyAllOrphansAndUnsupported",
            ])),
        ));
    }
    async function S(e) {
      await b(e, o("WASyncdConst").SyncModelType.Thread);
    }
    async function R(e) {
      await b(e, o("WASyncdConst").SyncModelType.Agent);
    }
    async function L(e) {
      await b(e, o("WASyncdConst").SyncModelType.ChatAssignment);
    }
    async function E(e) {
      await b(e, o("WASyncdConst").SyncModelType.UserStatusMute);
    }
    async function k(e, t) {
      if (
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: applying all orphans for type ",
              "",
            ])),
          e,
        ),
        o("WAWebSyncdDisabled").isSyncdDisabled())
      )
        return Promise.resolve();
      var n =
        await o(
          "WAWebGetSyncAction",
        ).getOrphanSyncActionsByModelTypeInTransaction(e);
      if (n.length === 0) {
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: no orphans for type ",
              " to apply",
            ])),
          e,
        );
        return;
      }
      (t != null && !t()) ||
        (await o("WAWebSyncdCollectionHandler").applyIndividualMutations(n),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: finished applying all orphans for type ",
              ", count=",
              "",
            ])),
          e,
          n.length,
        ));
    }
    async function I() {
      if (
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: checkOrphanFavoriteStickers",
            ])),
        ),
        !o("WAWebMiscGatingUtils").isFavoriteStickersEnabled())
      ) {
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[syncd] checkOrphanFavoriteStickers: not enabled",
            ])),
        );
        return;
      }
      (await k(o("WASyncdConst").SyncModelType.FavoriteSticker, function () {
        var e = o(
          "WAWebMiscGatingUtils",
        ).isFavoriteStickerSyncAfterPairingEnabled();
        return (
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd] checkOrphanFavoriteStickers: syncAfterPairing=",
                "",
              ])),
            e,
          ),
          e
        );
      }),
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: checkOrphanFavoriteStickers: finished",
            ])),
        ));
    }
    ((l.checkOrphanMutations = g),
      (l.checkOrphanMessages = h),
      (l.checkOrphanChats = y),
      (l.applyAllOrphansAndUnsupported = v),
      (l.checkOrphanAgents = R),
      (l.checkOrphanChatAssignments = L),
      (l.checkOrphanUserStatusMutes = E),
      (l.checkOrphanFavoriteStickers = I));
  },
  98,
);
