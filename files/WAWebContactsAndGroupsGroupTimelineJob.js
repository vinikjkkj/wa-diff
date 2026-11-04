__d(
  "WAWebContactsAndGroupsGroupTimelineJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebAddonGatingUtils",
    "WAWebDBMessageUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMessage",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "queryContactsAndGroupsGroupTimelinePage",
          function (e) {
            return u(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW },
        )
        .waitUntilCompleted(e);
    }
    function s(e) {
      return (
        !o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(e) &&
        e !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT &&
        !o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(e)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.beforeInternalId,
            r = e.groupId,
            a = e.limit,
            i = e.sinceTs,
            l = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(
                ["internalId"],
                o("WAWebDBMessageUtils").beginningOfChat(r),
                n != null ? n : o("WAWebDBMessageUtils").endOfChat(r),
                { limit: a, reverse: !0, shouldDecrypt: !1 },
                function (e) {
                  return e.t < i;
                },
              );
          return {
            msgs: l
              .filter(function (e) {
                var t;
                return s((t = e.futureproofType) != null ? t : e.type);
              })
              .map(d),
            nextBeforeInternalId:
              l.length === a && (t = l[l.length - 1].internalId) != null
                ? t
                : null,
          };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t;
      return {
        author: m(e.author),
        fromMe: r("WAWebMsgKey").fromString(e.id).fromMe,
        mentionedJidList: ((t = e.mentionedJidList) != null ? t : [])
          .map(m)
          .filter(function (e) {
            return e != null;
          }),
        quotedParticipant: m(e.quotedParticipant),
        t: e.t,
      };
    }
    function m(e) {
      return o("WAWebWidFactory").isWidlike(e) && e != null
        ? o("WAWebWidFactory").createWidFromWidLike(e)
        : null;
    }
    ((l.queryGroupTimelinePageJob = e), (l.isGroupTimelineMsgType = s));
  },
  98,
);
