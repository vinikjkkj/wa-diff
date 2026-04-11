__d(
  "WAWebSyncdValidateMutations",
  [
    "WACryptoUtils",
    "WALogger",
    "WALongInt",
    "WASyncdConst",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdActionUtils",
    "WAWebSyncdError",
    "WAWebSyncdMetricFatalError",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = [
        (m = o("WASyncdConst")).Actions.Agent,
        m.Actions.AndroidUnsupportedActions,
        m.Actions.Archive,
        m.Actions.BotWelcomeRequest,
        m.Actions.ChatAssignment,
        m.Actions.ChatAssignmentOpenedStatus,
        m.Actions.ChatLockSettings,
        m.Actions.ClearChat,
        m.Actions.Contact,
        m.Actions.CustomPaymentMethods,
        m.Actions.DeleteChat,
        m.Actions.DeleteMessageForMe,
        m.Actions.DeviceCapabilities,
        m.Actions.DisableLinkPreviews,
        m.Actions.ExternalWebBeta,
        m.Actions.FavoriteSticker,
        m.Actions.LabelEdit,
        m.Actions.LabelJid,
        m.Actions.LabelReordering,
        m.Actions.LocaleSetting,
        m.Actions.LockChat,
        m.Actions.MarkChatAsRead,
        m.Actions.MarketingMessage,
        m.Actions.MarketingMessageBroadcast,
        m.Actions.Mute,
        m.Actions.Nux,
        m.Actions.PaymentInfo,
        m.Actions.Pin,
        m.Actions.PinDEPRECATED,
        m.Actions.PnForLidChat,
        m.Actions.PrimaryFeature,
        m.Actions.PrimaryVersion,
        m.Actions.QuickReply,
        m.Actions.RemoveRecentSticker,
        m.Actions.Sentinel,
        m.Actions.SettingPushName,
        m.Actions.ShareOwnPn,
        m.Actions.Star,
        m.Actions.StatusPrivacy,
        m.Actions.Subscription,
        m.Actions.TimeFormat,
        m.Actions.UnarchiveChatsSetting,
        m.Actions.UserStatusMute,
        m.Actions.Favorites,
        m.Actions.NoteEdit,
      ];
    function _(e, t) {
      var n = new Set();
      t.forEach(function (t) {
        var r = t.version.version;
        if (n.has(r))
          throw (
            o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
              o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                .DUPLICATE_PATCH_VERSION_IN_COLLECTION,
              { collection: e },
            ),
            new (o("WAWebSyncdError").SyncdFatalError)(
              "duplicate patch version in collection",
            )
          );
        n.add(r);
      });
    }
    function f(e) {
      return e == null ? !0 : p.includes(e);
    }
    function g(t) {
      var n = o("WASyncdConst").Actions.cast(
          o("WAWebSyncdActionUtils").getMutationNameFromIndex(
            t.collection,
            t.index,
          ),
        ),
        r =
          t.operation ===
          o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET
            ? "SET"
            : "REMOVE";
      f(n)
        ? o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: duplicate ",
                " mutation: ",
                "",
              ])),
            r,
            n,
          )
        : o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: duplicate ",
                " mutation: [not specified]",
              ])),
            r,
          );
    }
    function h(e, t, n) {
      var r = new Set(),
        a = new Set();
      t.forEach(function (i) {
        var l = !1;
        if (
          (i.operation ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET &&
            (r.has(i.index) ? (g(i), (l = !0)) : r.add(i.index)),
          i.operation ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
              .REMOVE && (a.has(i.index) ? (g(i), (l = !0)) : a.add(i.index)),
          l)
        )
          e: {
            if (n === o("WASyncdConst").SyncDataType.Patch) {
              throw (
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                  o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                    .SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_PATCH,
                  { collection: e },
                ),
                new (o("WAWebSyncdError").SyncdFatalError)(
                  "same index for multiple mutations in patch",
                )
              );
              break e;
            }
            if (n === o("WASyncdConst").SyncDataType.Snapshot) {
              (o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_SNAPSHOT,
                { collection: e, isFatal: !1 },
              ),
                y(t));
              break e;
            }
            if (n === o("WASyncdConst").SyncDataType.Local) {
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "validation not required for local mutations",
                  ])),
              );
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                n,
            );
          }
      });
    }
    function y(e) {
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: all duplicated actions:",
          ])),
      );
      var t = new Map();
      e.forEach(function (e) {
        if (t.has(e.index)) {
          g(e);
          var n = t.get(e.index);
          if (n == null) return;
          var r = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
              e.binarySyncData,
            ).value,
            a = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
              n.binarySyncData,
            ).value;
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: is using same timestamp? ",
                "\n          is same key? ",
                "",
              ])),
            (r == null ? void 0 : r.timestamp) ===
              (a == null ? void 0 : a.timestamp),
            o("WACryptoUtils").arrayBuffersEqual(
              e.keyId,
              n == null ? void 0 : n.keyId,
            ),
          );
        }
        t.set(e.index, e);
      });
    }
    function C(e, t) {
      return t.map(function (t) {
        var n = o("decodeProtobuf").decodeProtobuf(
            o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
            t.binarySyncData,
          ),
          r = n.value;
        if (!r)
          throw (
            o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
              o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                .MISSING_ACTION_VALUE,
              { collection: e },
            ),
            new (o("WAWebSyncdError").SyncdFatalError)("missing action value")
          );
        var a = o("WALongInt").maybeNumberOrThrowIfTooLarge(r.timestamp);
        if (a == null)
          throw (
            o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
              o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                .MISSING_ACTION_TIMESTAMP,
              { collection: e },
            ),
            new (o("WAWebSyncdError").SyncdFatalError)(
              "missing action timestamp",
            )
          );
        return {
          index: t.index,
          version: t.version,
          keyId: t.keyId,
          indexMac: t.indexMac,
          valueMac: t.valueMac,
          collection: t.collection,
          binarySyncData: t.binarySyncData,
          timestamp: a,
        };
      });
    }
    ((l.validateNoDuplicatePatchVersionInCollection = _),
      (l.validateNoSameIndexForMultipleMutations = h),
      (l.validateAndTypeSetMutations = C));
  },
  98,
);
