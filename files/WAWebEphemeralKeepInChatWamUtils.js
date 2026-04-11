__d(
  "WAWebEphemeralKeepInChatWamUtils",
  [
    "WAWebChatCollection",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatThreadLogging",
    "WAWebDBMsgUtils",
    "WAWebFrontendMsgGetters",
    "WAWebKeepInChatErrorsWamEvent",
    "WAWebKeepInChatPerfWamEvent",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumKicActionType",
    "WAWebWamEnumKicErrorCodeType",
    "WAWebWamEnumKicRequestTypeType",
    "WAWebWamEnumResponseType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      switch (e) {
        case o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL:
          t = o("WAWebWamEnumKicRequestTypeType").KIC_REQUEST_TYPE_TYPE.KEEP;
          break;
        case o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL:
          t = o("WAWebWamEnumKicRequestTypeType").KIC_REQUEST_TYPE_TYPE.UNKEEP;
          break;
        default:
          break;
      }
      return t;
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WAWebChatCollection").ChatCollection.get(t.id.remote),
            r = new (o("WAWebKeepInChatPerfWamEvent").KeepInChatPerfWamEvent)({
              response: o("WAWebWamEnumResponseType").RESPONSE_TYPE.ERROR,
              requestSendTime: t.t,
              chatEphemeralityDuration:
                (n && o("WAWebChatEphemerality").getEphemeralSetting(n)) || 0,
            }),
            a;
          (n &&
            (a = yield o("WAWebChatThreadLogging").getChatThreadID(
              n.id.toJid(),
            )),
            a != null && r.set({ threadId: a }));
          var i = e(t.keepType);
          i && r.set({ kicRequestType: i });
          var l = yield o("WAWebDBMsgUtils").getMsgByMsgKey(t.keptMessageKey);
          return (
            l &&
              r.set({
                kicMessageEphemeralityDuration:
                  (l == null ? void 0 : l.ephemeralDuration) || 0,
              }),
            r
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return e === o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL
        ? o("WAWebWamEnumKicActionType").KIC_ACTION_TYPE.KEEP_MESSAGE
        : o("WAWebWamEnumKicActionType").KIC_ACTION_TYPE.UNKEEP_MESSAGE;
    }
    function d(e, t) {
      var n,
        r,
        a = e != null ? o("WAWebFrontendMsgGetters").getChat(e) : null,
        i = new (o("WAWebKeepInChatErrorsWamEvent").KeepInChatErrorsWamEvent)({
          kicAction: c(t),
          isAGroup: a != null && o("WAWebChatGetters").getIsGroup(a),
          isAdmin:
            a != null &&
            o("WAWebChatGetters").getIsGroup(a) &&
            ((n = a.groupMetadata) == null
              ? void 0
              : n.participants.iAmAdmin()),
          canEditDmSettings:
            a != null && o("WAWebChatGetters").getIsGroup(a)
              ? (r = a.groupMetadata) == null
                ? void 0
                : r.canSetEphemeralSetting()
              : !0,
          kicMessageEphemeralityDuration:
            (e == null ? void 0 : e.ephemeralDuration) || 0,
        });
      return i;
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield s(e);
          (t.set({
            kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE
              .OLDER_REQUEST,
          }),
            t.commit());
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield s(e);
          (t.set({
            kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE
              .TIE_BREAK_IGNORED,
          }),
            t.commit());
        })),
        f.apply(this, arguments)
      );
    }
    ((l.parseKeepTypeToMetric = e),
      (l.getBaseErrorLog = d),
      (l.logOlderRequestKic = m),
      (l.logTieBreakIgnoredKic = _));
  },
  98,
);
