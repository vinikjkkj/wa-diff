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
    function e(e, t) {
      var n,
        r = o("WAWebAddonCrossWindowUtils").getAddonProcessorType(t);
      return babelHelpers.extends(
        {
          id: e.newMsgKey,
          type: o("WAWebMsgType").MSG_TYPE.REVOKED,
          kind: o("WAWebMsgType").MsgKind.RevokedAddon,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          subtype: e.subtype === "admin_revoke" ? "admin" : "sender",
          revokeTimestamp: (n = e.revokeTimestamp) != null ? n : void 0,
        },
        o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          t.id,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        {
          revokeAddonType: r,
          protocolMessageKey: t.id,
          t: o("WAWebMsgGetters").getT(t),
          parentMsgKey: o("WAWebAddonProcessMsgsUtils").getParentMsgKey(t),
        },
      );
    }
    function s(e) {
      return babelHelpers.extends(
        {},
        o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(e),
        { id: e.id },
        o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          e.id,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        {
          type: o("WAWebMsgType").MSG_TYPE.REVOKED,
          kind: o("WAWebMsgType").MsgKind.RevokedAddon,
          subtype: e.subtype === "admin_revoke" ? "admin" : "sender",
          revokeTimestamp: e.revokeTimestamp,
          revokeAddonType: e.revokeAddonType,
          protocolMessageKey: e.protocolMessageKey,
          parentMsgKey: e.targetMessageKey,
        },
      );
    }
    ((l.revokeMsgInfoToRevokeMsgData = e),
      (l.protocolRevokeToRevokeMsgData = s));
  },
  98,
);
