__d(
  "WAWebAddonProcessRevokeDataUtils",
  [
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonProcessMsgsUtils",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebProcessBaseMsgInfo",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
        var e,
          r = o("WAWebAddonCrossWindowUtils").getAddonProcessorType(n);
        return babelHelpers.extends(
          {
            id: t.newMsgKey,
            type: o("WAWebMsgType").MSG_TYPE.REVOKED,
            kind: o("WAWebMsgType").MsgKind.RevokedAddon,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            subtype: t.subtype === "admin_revoke" ? "admin" : "sender",
            revokeTimestamp: (e = t.revokeTimestamp) != null ? e : void 0,
          },
          o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
            n.id,
            o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
          ),
          {
            revokeAddonType: r,
            protocolMessageKey: n.id,
            t: o("WAWebMsgGetters").getT(n),
            parentMsgKey: o("WAWebAddonProcessMsgsUtils").getParentMsgKey(n),
          },
        );
      },
      s = function (t) {
        return babelHelpers.extends(
          {},
          o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(t),
          { id: t.id },
          o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
            t.id,
            o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
          ),
          {
            type: o("WAWebMsgType").MSG_TYPE.REVOKED,
            kind: o("WAWebMsgType").MsgKind.RevokedAddon,
            subtype: t.subtype === "admin_revoke" ? "admin" : "sender",
            revokeTimestamp: t.revokeTimestamp,
            revokeAddonType: t.revokeAddonType,
            protocolMessageKey: t.protocolMessageKey,
            parentMsgKey: t.targetMessageKey,
          },
        );
      };
    ((l.revokeMsgInfoToRevokeMsgData = e),
      (l.protocolRevokeToRevokeMsgData = s));
  },
  98,
);
