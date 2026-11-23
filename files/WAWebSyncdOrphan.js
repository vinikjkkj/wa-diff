__d(
  "WAWebSyncdOrphan",
  [
    "WALogger",
    "WAPromiseLoop",
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
    "WAWebSyncdGetChat",
    "WAWebWidFactory",
    "getErrorSafe",
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
      h,
      y,
      C = 500,
      b = [
        o("WAWebSyncdConst").SyncActionState.Orphan,
        o("WAWebSyncdConst").SyncActionState.Unsupported,
      ];
    async function v(e, t, n) {
      if (o("WAWebSyncdDisabled").isSyncdDisabled()) return Promise.resolve();
      await Promise.all([
        S(e),
        R(t),
        o("WAWebSyncdDbCallbacksApi")
          .bulkGetAccountLid(t)
          .then(function (e) {
            return L(e.filter(Boolean));
          }),
        n != null && n.length > 0 ? F(n) : void 0,
      ]);
    }
    async function S(e) {
      var t = await o("WAWebSyncdDbCallbacksApi").getAdditionalLidMsgKeys(e),
        n = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
          ? await o(
              "WAWebSyncdDbCallbacksApi",
            ).getAdditionalHistoryChatIdMsgKeys(e)
          : [];
      await E(e.concat(t, n), o("WAWebSyncdConst").SyncModelType.Msg);
    }
    async function R(e) {
      var t = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
        ? await o("WAWebSyncdDbCallbacksApi").getAdditionalHistoryChatIds(e)
        : [];
      await E(e.concat(t), o("WAWebSyncdConst").SyncModelType.Chat);
    }
    async function L(e) {
      await E(e, o("WAWebSyncdConst").SyncModelType.Account);
    }
    async function E(e, t) {
      if (o("WAWebSyncdDisabled").isSyncdDisabled()) return Promise.resolve();
      var n = await o(
        "WAWebGetSyncAction",
      ).getSyncActionsByModelInfosInTransaction(
        e.map(function (e) {
          return [e, t, o("WAWebSyncdConst").SyncActionState.Orphan];
        }),
      );
      await o("WAWebSyncdCollectionHandler").applyIndividualMutations(n);
    }
    async function k() {
      if (o("WAWebSyncdDisabled").isSyncdDisabled()) return Promise.resolve();
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
        if (
          o("WAWebABProps").getABPropConfigValue(
            "web_syncd_batched_orphan_apply",
          )
        )
          await I();
        else {
          o("WAWebStorageCrashAnnotations").annotateCrashWithIdbReadCaller(
            "SyncdOrphan.applyAllOrphansAndUnsupported",
            b,
          );
          var n =
            await o(
              "WAWebGetSyncAction",
            ).getSyncActionsByActionStatesInTransaction(b);
          await o("WAWebSyncdCollectionHandler").applyIndividualMutations(n);
        }
      } finally {
        o("WAWebSyncdCrashAnnotations").annotateCrashWithOrphanApplyEnd(t);
      }
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: end applyAllOrphansAndUnsupported",
          ])),
      );
    }
    async function I() {
      var e = await T();
      e.sort(function (e, t) {
        return e.timestamp - t.timestamp;
      });
      var t = e.flatMap(function (e, t) {
          return e.action === o("WAWebSyncdConst").Actions.Star ? [t] : [];
        }),
        n = 0,
        r = 0;
      (await A(e.length, async function (a) {
        for (var i = a + C, l = e.slice(a, i); n < t.length && t[n] < i; ) n++;
        var s =
            n < t.length &&
            l.some(function (e) {
              return e.action === o("WAWebSyncdConst").Actions.ClearChat;
            })
              ? await x(
                  l,
                  t.slice(n).map(function (t) {
                    return e[t];
                  }),
                )
              : [],
          u = await D(
            l.map(function (e) {
              return e.index;
            }),
          );
        ((r += u.length),
          await o("WAWebSyncdCollectionHandler").applyIndividualMutations(
            u,
            s,
            a > 0 && i < e.length,
          ));
      }),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: applied ",
              " of ",
              " orphan and unsupported actions in batches of ",
              "",
            ])),
          r,
          e.length,
          C,
        ));
    }
    async function T() {
      o("WAWebStorageCrashAnnotations").annotateCrashWithIdbReadCaller(
        "SyncdOrphan.applyAllOrphansAndUnsupported",
        b,
      );
      var e =
          await o(
            "WAWebGetSyncAction",
          ).getSyncActionIndexesByActionStatesInTransaction(b),
        t = [],
        n = 0;
      return (
        await A(e.length, async function (r) {
          var a = await o(
            "WAWebGetSyncAction",
          ).getSyncActionsByIndexesInTransaction(e.slice(r, r + C));
          for (var i of a) {
            var l = w(i.index);
            (l == null && n++,
              t.push({
                index: i.index,
                timestamp: i.timestamp,
                action: l == null ? void 0 : l.action,
                chat: l == null ? void 0 : l.chat,
              }));
          }
        }),
        n > 0 &&
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: ",
                " orphan and unsupported actions have an unreadable index",
              ])),
            n,
          ),
        t
      );
    }
    async function D(e) {
      if (e.length === 0) return [];
      var t =
        await o("WAWebGetSyncAction").getSyncActionsByIndexesInTransaction(e);
      return t.filter(function (e) {
        return b.includes(e.actionState);
      });
    }
    async function x(e, t) {
      var n = e.filter(function (e) {
        return e.action === o("WAWebSyncdConst").Actions.ClearChat;
      });
      if (n.length === 0) return [];
      var r = await $(n);
      return D(
        t
          .filter(function (e) {
            return r == null || (e.chat != null && r.has(e.chat.toString()));
          })
          .map(function (e) {
            return e.index;
          }),
      );
    }
    async function $(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.chat;
        if (r == null) return null;
        t.set(r.toString(), r);
      }
      var a = await Promise.all(
          Array.from(t.values(), function (e) {
            return o("WAWebSyncdGetChat")
              .resolveChatForMutationIndex(e)
              .catch(function (e) {
                return (M(e), null);
              });
          }),
        ),
        i = new Set(t.keys());
      for (var l of a)
        if (l == null || (l.success && !P(i, l.chat))) return null;
      return i;
    }
    function P(e, t) {
      for (var n of [t.id, t.accountLid])
        if (n != null) {
          var r = N(n);
          if (r == null) return !1;
          e.add(r.toString());
        }
      return !0;
    }
    function N(e) {
      try {
        return o("WAWebWidFactory").createWid(e);
      } catch (e) {
        return null;
      }
    }
    function M(e) {
      try {
        o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: could not resolve a cleared chat, passing every later star: ",
                "",
              ])),
            r("getErrorSafe")(e).message,
          )
          .sendLogs("syncd-orphan-apply-cleared-chat-unresolved");
      } catch (e) {}
    }
    function w(e) {
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return null;
      }
      if (!Array.isArray(t) || typeof t[0] != "string") return null;
      var n = o("WAWebSyncdConst").Actions.cast(t[0]),
        r =
          (n === o("WAWebSyncdConst").Actions.ClearChat ||
            n === o("WAWebSyncdConst").Actions.Star) &&
          typeof t[1] == "string"
            ? N(t[1])
            : null;
      return { action: n, chat: r };
    }
    function A(e, t) {
      return o("WAPromiseLoop").promiseLoop(async function (n, r) {
        return r >= e ? (n(), r) : (await t(r), r + C);
      }, 0);
    }
    async function F(e) {
      await E(e, o("WAWebSyncdConst").SyncModelType.Thread);
    }
    async function O(e) {
      await E(e, o("WAWebSyncdConst").SyncModelType.Agent);
    }
    async function B(e) {
      await E(e, o("WAWebSyncdConst").SyncModelType.ChatAssignment);
    }
    async function W(e) {
      await E(e, o("WAWebSyncdConst").SyncModelType.UserStatusMute);
    }
    async function q(e, t) {
      if (
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
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
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
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
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: finished applying all orphans for type ",
              ", count=",
              "",
            ])),
          e,
          n.length,
        ));
    }
    async function U() {
      if (
        (o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: checkOrphanFavoriteStickers",
            ])),
        ),
        !o("WAWebMiscGatingUtils").isFavoriteStickersEnabled())
      ) {
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "[syncd] checkOrphanFavoriteStickers: not enabled",
            ])),
        );
        return;
      }
      (await q(o("WAWebSyncdConst").SyncModelType.FavoriteSticker, function () {
        var e = o("WAWebABProps").getABPropConfigValue(
          "favorite_sticker_sync_after_pairing_enabled_web",
        );
        return (
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd] checkOrphanFavoriteStickers: syncAfterPairing=",
                "",
              ])),
            e,
          ),
          e
        );
      }),
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: checkOrphanFavoriteStickers: finished",
            ])),
        ));
    }
    ((l.ORPHAN_APPLY_BATCH_SIZE = C),
      (l.checkOrphanMutations = v),
      (l.checkOrphanMessages = S),
      (l.checkOrphanChats = R),
      (l.applyAllOrphansAndUnsupported = k),
      (l.checkOrphanAgents = O),
      (l.checkOrphanChatAssignments = B),
      (l.checkOrphanUserStatusMutes = W),
      (l.checkOrphanFavoriteStickers = U));
  },
  98,
);
