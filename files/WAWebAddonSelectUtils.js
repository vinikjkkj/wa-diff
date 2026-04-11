__d(
  "WAWebAddonSelectUtils",
  [
    "WAWebABProps",
    "WAWebAddonConstants",
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonInfraError",
    "WAWebAddonProcessMsgsUtils",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e === o("WAWebMsgType").MSG_TYPE.REVOKED)
        throw new (o("WAWebAddonInfraError").AddonInfraError)(
          o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedMsgType,
          "revoke is not expected to cross this path",
        );
      if (e === o("WAWebMsgType").MSG_TYPE.PROTOCOL)
        throw new (o("WAWebAddonInfraError").AddonInfraError)(
          o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedMsgType,
          "protocol revoke is not expected to cross this path",
        );
      switch (e) {
        case o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE:
          return o("WAWebABProps").getABPropConfigValue(
            "unified_pin_addon_table_enabled",
          )
            ? o("WAWebAddonConstants").AddonTableMode.Unified
            : o("WAWebAddonConstants").AddonTableMode.Pin;
        case o("WAWebMsgType").MSG_TYPE.COMMENT:
          return o("WAWebAddonConstants").AddonTableMode.Comment;
        case o("WAWebMsgType").MSG_TYPE.POLL_UPDATE:
          return o("WAWebAddonConstants").AddonTableMode.PollVote;
        case o("WAWebMsgType").MSG_TYPE.REACTION_ENC:
        case o("WAWebMsgType").MSG_TYPE.REACTION:
          return o("WAWebAddonConstants").AddonTableMode.Reaction;
        case o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE:
          return o("WAWebAddonConstants").AddonTableMode.EventResponse;
        case o("WAWebMsgType").MSG_TYPE.EVENT_EDIT_ENCRYPTED:
        case o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED:
        case o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_ENCRYPTED:
          return o("WAWebAddonConstants").AddonTableMode.None;
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_EDIT_ENCRYPTED:
          return o("WAWebAddonConstants").AddonTableMode.Unified;
        default:
          throw new (o("WAWebAddonInfraError").AddonInfraError)(
            o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedMsgType,
            "received " + e + " msgType",
          );
      }
    }
    function s(t) {
      return e(o("WAWebAddonCrossWindowUtils").getAddonProcessorType(t));
    }
    function u(e) {
      return {
        getByParentMsgKey: function (n) {
          var t = e.get(n);
          if (t == null)
            throw new (o("WAWebAddonInfraError").AddonInfraError)(
              o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
            );
          return t;
        },
        getForAddon: function (n) {
          var t = e.get(
            o("WAWebAddonProcessMsgsUtils").getParentMsgKey(n).toString(),
          );
          if (t == null)
            throw new (o("WAWebAddonInfraError").AddonInfraError)(
              o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
            );
          return t;
        },
      };
    }
    function c(e) {
      return {
        get: function (n) {
          var t = e.get(n.toString());
          if (t == null)
            throw new (o("WAWebAddonInfraError").AddonInfraError)(
              o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
            );
          return t;
        },
        has: function (n) {
          return !!e.get(n.toString());
        },
      };
    }
    ((l.getTableModeByMsgType = e),
      (l.getAddonTableMode = s),
      (l.createAddonParentSelector = u),
      (l.createAddonSelector = c));
  },
  98,
);
