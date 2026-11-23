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
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "queryContactsAndGroupsGroupTimelinePage",
          function (e) {
            return u(e);
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.LOW },
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
    async function u(e) {
      var t,
        n = e.beforeInternalId,
        r = e.groupId,
        a = e.limit,
        i = e.sinceTs,
        l = await o("WAWebSchemaMessage")
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
          .map(c),
        nextBeforeInternalId:
          l.length === a && (t = l[l.length - 1].internalId) != null ? t : null,
      };
    }
    function c(e) {
      var t;
      return {
        author: d(e.author),
        fromMe: r("WAWebMsgKey").fromString(e.id).fromMe,
        mentionedJidList: ((t = e.mentionedJidList) != null ? t : [])
          .map(d)
          .filter(function (e) {
            return e != null;
          }),
        quotedParticipant: d(e.quotedParticipant),
        t: e.t,
      };
    }
    function d(e) {
      return o("WAWebWidFactory").isWidlike(e) && e != null
        ? o("WAWebWidFactory").createWidFromWidLike(e)
        : null;
    }
    ((l.queryGroupTimelinePageJob = e), (l.isGroupTimelineMsgType = s));
  },
  98,
);
