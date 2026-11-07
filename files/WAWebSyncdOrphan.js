__d(
  "WAWebSyncdOrphan",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebGetSyncAction",
    "WAWebHistorySyncLidChatGating",
    "WAWebMiscGatingUtils",
    "WAWebStorageCrashAnnotations",
    "WAWebSyncdCollectionHandler",
    "WAWebSyncdConst",
    "WAWebSyncdCrashAnnotations",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdDisabled",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = [
        o("WAWebSyncdConst").SyncActionState.Orphan,
        o("WAWebSyncdConst").SyncActionState.Unsupported,
      ];
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          if (o("WAWebSyncdDisabled").isSyncdDisabled())
            return (g || (g = n("Promise"))).resolve();
          yield (g || (g = n("Promise"))).all([
            b(e),
            S(t),
            o("WAWebSyncdDbCallbacksApi")
              .bulkGetAccountLid(t)
              .then(function (e) {
                return L(e.filter(Boolean));
              }),
            r != null && r.length > 0 ? x(r) : void 0,
          ]);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSyncdDbCallbacksApi").getAdditionalLidMsgKeys(
              e,
            ),
            n = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
              ? yield o(
                  "WAWebSyncdDbCallbacksApi",
                ).getAdditionalHistoryChatIdMsgKeys(e)
              : [];
          yield k(e.concat(t, n), o("WAWebSyncdConst").SyncModelType.Msg);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
            ? yield o("WAWebSyncdDbCallbacksApi").getAdditionalHistoryChatIds(e)
            : [];
          yield k(e.concat(t), o("WAWebSyncdConst").SyncModelType.Chat);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield k(e, o("WAWebSyncdConst").SyncModelType.Account);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (o("WAWebSyncdDisabled").isSyncdDisabled())
            return (g || (g = n("Promise"))).resolve();
          var r = yield o(
            "WAWebGetSyncAction",
          ).getSyncActionsByModelInfosInTransaction(
            e.map(function (e) {
              return [e, t, o("WAWebSyncdConst").SyncActionState.Orphan];
            }),
          );
          yield o("WAWebSyncdCollectionHandler").applyIndividualMutations(r);
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebSyncdDisabled").isSyncdDisabled())
            return (g || (g = n("Promise"))).resolve();
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: start applyAllOrphansAndUnsupported",
              ])),
          );
          var t = o(
            "WAWebSyncdCrashAnnotations",
          ).annotateCrashWithOrphanApplyStart();
          try {
            o("WAWebStorageCrashAnnotations").annotateCrashWithIdbReadCaller(
              "SyncdOrphan.applyAllOrphansAndUnsupported",
              h,
            );
            var r =
              yield o(
                "WAWebGetSyncAction",
              ).getSyncActionsByActionStatesInTransaction(h);
            yield o("WAWebSyncdCollectionHandler").applyIndividualMutations(r);
          } finally {
            o("WAWebSyncdCrashAnnotations").annotateCrashWithOrphanApplyEnd(t);
          }
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: end applyAllOrphansAndUnsupported",
              ])),
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield k(e, o("WAWebSyncdConst").SyncModelType.Thread);
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield k(e, o("WAWebSyncdConst").SyncModelType.Agent);
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield k(e, o("WAWebSyncdConst").SyncModelType.ChatAssignment);
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield k(e, o("WAWebSyncdConst").SyncModelType.UserStatusMute);
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        B.apply(this, arguments)
      );
    }
    function W() {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
          (yield O(
            o("WAWebSyncdConst").SyncModelType.FavoriteSticker,
            function () {
              var e = o("WAWebABProps").getABPropConfigValue(
                "favorite_sticker_sync_after_pairing_enabled_web",
              );
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
        q.apply(this, arguments)
      );
    }
    ((l.checkOrphanMutations = y),
      (l.checkOrphanMessages = b),
      (l.checkOrphanChats = S),
      (l.applyAllOrphansAndUnsupported = T),
      (l.checkOrphanAgents = P),
      (l.checkOrphanChatAssignments = M),
      (l.checkOrphanUserStatusMutes = A),
      (l.checkOrphanFavoriteStickers = W));
  },
  98,
);
