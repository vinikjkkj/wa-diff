__d(
  "WAWebAddonSelectUtils",
  [
    "WAWebAddonConstants",
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonInfraError",
    "WAWebAddonProcessMsgsUtils",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Map([
        [
          (e = o("WAWebMsgType")).MSG_TYPE.PIN_MESSAGE,
          (s = o("WAWebAddonConstants")).AddonTableMode.Pin,
        ],
        [e.MSG_TYPE.COMMENT, s.AddonTableMode.Comment],
        [e.MSG_TYPE.POLL_UPDATE, s.AddonTableMode.PollVote],
        [e.MSG_TYPE.REACTION_ENC, s.AddonTableMode.Reaction],
        [e.MSG_TYPE.REACTION, s.AddonTableMode.Reaction],
        [e.MSG_TYPE.EVENT_RESPONSE, s.AddonTableMode.EventResponse],
        [e.MSG_TYPE.EVENT_EDIT_ENCRYPTED, s.AddonTableMode.None],
        [e.MSG_TYPE.POLL_EDIT_ENCRYPTED, s.AddonTableMode.None],
        [e.MSG_TYPE.POLL_ADD_OPTION_ENCRYPTED, s.AddonTableMode.None],
        [e.MSG_TYPE.MESSAGE_EDIT_ENCRYPTED, s.AddonTableMode.Unified],
      ]);
    function c(e) {
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
      var t = u.get(e);
      if (t == null)
        throw new (o("WAWebAddonInfraError").AddonInfraError)(
          o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedMsgType,
          "received " + e + " msgType",
        );
      return t;
    }
    function d(e) {
      return c(o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e));
    }
    function m(e) {
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
    function p(e) {
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
    ((l.getTableModeByMsgType = c),
      (l.getAddonTableMode = d),
      (l.createAddonParentSelector = m),
      (l.createAddonSelector = p));
  },
  98,
);
