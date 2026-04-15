__d(
  "WAWebSyncdOrphan",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WAWebGetSyncAction",
    "WAWebHistorySyncLidChatGating",
    "WAWebMiscGatingUtils",
    "WAWebSyncdCollectionHandler",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdDisabled",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g;
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          if (o("WAWebSyncdDisabled").isSyncdDisabled())
            return (g || (g = n("Promise"))).resolve();
          yield (g || (g = n("Promise"))).all([
            C(e),
            v(t),
            o("WAWebSyncdDbCallbacksApi")
              .bulkGetAccountLid(t)
              .then(function (e) {
                return R(e.filter(Boolean));
              }),
            r != null && r.length > 0 ? D(r) : void 0,
          ]);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSyncdDbCallbacksApi").getAdditionalLidMsgKeys(
              e,
            ),
            n = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
              ? yield o(
                  "WAWebSyncdDbCallbacksApi",
                ).getAdditionalHistoryChatIdMsgKeys(e)
              : [];
          yield E(e.concat(t, n), o("WASyncdConst").SyncModelType.Msg);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
            ? yield o("WAWebSyncdDbCallbacksApi").getAdditionalHistoryChatIds(e)
            : [];
          yield E(e.concat(t), o("WASyncdConst").SyncModelType.Chat);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield E(e, o("WASyncdConst").SyncModelType.Account);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (o("WAWebSyncdDisabled").isSyncdDisabled())
            return (g || (g = n("Promise"))).resolve();
          var r = yield o(
            "WAWebGetSyncAction",
          ).getSyncActionsByModelInfosInTransaction(
            e.map(function (e) {
              return [e, t, o("WASyncdConst").SyncActionState.Orphan];
            }),
          );
          yield o("WAWebSyncdCollectionHandler").applyIndividualMutations(r);
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebSyncdDisabled").isSyncdDisabled())
            return (g || (g = n("Promise"))).resolve();
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: start applyAllOrphansAndUnsupported",
              ])),
          );
          var t = yield o(
            "WAWebGetSyncAction",
          ).getSyncActionsByActionStatesInTransaction([
            o("WASyncdConst").SyncActionState.Orphan,
            o("WASyncdConst").SyncActionState.Unsupported,
          ]);
          (yield o("WAWebSyncdCollectionHandler").applyIndividualMutations(t),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: end applyAllOrphansAndUnsupported",
                ])),
            ));
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield E(e, o("WASyncdConst").SyncModelType.Thread);
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield E(e, o("WASyncdConst").SyncModelType.Agent);
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield E(e, o("WASyncdConst").SyncModelType.ChatAssignment);
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield E(e, o("WASyncdConst").SyncModelType.UserStatusMute);
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            return (g || (g = n("Promise"))).resolve();
          var r =
            yield o(
              "WAWebGetSyncAction",
            ).getOrphanSyncActionsByModelTypeInTransaction(e);
          if (r.length === 0) {
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
            (yield o("WAWebSyncdCollectionHandler").applyIndividualMutations(r),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: finished applying all orphans for type ",
                  ", count=",
                  "",
                ])),
              e,
              r.length,
            ));
        })),
        O.apply(this, arguments)
      );
    }
    function B() {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
          (yield F(
            o("WASyncdConst").SyncModelType.FavoriteSticker,
            function () {
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
            },
          ),
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: checkOrphanFavoriteStickers: finished",
                ])),
            ));
        })),
        W.apply(this, arguments)
      );
    }
    ((l.checkOrphanMutations = h),
      (l.checkOrphanMessages = C),
      (l.checkOrphanChats = v),
      (l.applyAllOrphansAndUnsupported = I),
      (l.checkOrphanThreads = D),
      (l.checkOrphanAgents = $),
      (l.checkOrphanChatAssignments = N),
      (l.checkOrphanUserStatusMutes = w),
      (l.checkOrphanFavoriteStickers = B));
  },
  98,
);
