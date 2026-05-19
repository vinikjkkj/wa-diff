__d(
  "WAWebMaybePostMdGroupSyncMetrics",
  [
    "WALogger",
    "WAWebMdGroupParticipantMissAckWamEvent",
    "WAWebSendMsgCommonApi",
    "WAWebWamEnumTypeOfGroupEnum",
    "WAWebWamNumberToClientGroupSizeBucket",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t) {
      var n = t.currentParticipantList,
        a = t.groupData,
        i = t.msgProtobuf,
        l = t.oldParticipantList,
        c = d(l, n),
        m = c.added,
        p = c.removed;
      if (m !== 0 || p !== 0) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "postGroupParticipantSyncMetric: added: ",
              ", removed: ",
              "",
            ])),
          m,
          p,
        );
        var _ = new (o(
          "WAWebMdGroupParticipantMissAckWamEvent",
        ).MdGroupParticipantMissAckWamEvent)();
        ((_.messageIsRevoke = o("WAWebSendMsgCommonApi").isRevokeMsg(i)),
          (_.groupSizeBucket = r("WAWebWamNumberToClientGroupSizeBucket")(
            (a == null ? void 0 : a.participantCount) || 0,
          )),
          (_.typeOfGroup =
            (a == null ? void 0 : a.wamTypeOfGroup) ||
            o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM.GROUP),
          (_.isLid = _.isLid =
            l.some(function (e) {
              return e.isLid();
            })),
          (_.participantAddCount = m),
          (_.participantRemoveCount = p),
          _.commitAndWaitForFlush().catch(function (e) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "maybePostGroupSyncMetrics: event commit failed with ",
                  "",
                ])),
              String(e),
            );
          }));
      }
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "postGroupParticipantSyncMetric: skip, no change",
          ])),
      );
    }
    function d(e, t) {
      var n = new Set(e.map(String)),
        o = new Set(t.map(String));
      return {
        added: r("countWhere")(t, function (e) {
          return !n.has(String(e));
        }),
        removed: r("countWhere")(e, function (e) {
          return !o.has(String(e));
        }),
      };
    }
    ((l.maybePostGroupSyncMetrics = c), (l.computeParticipantChange = d));
  },
  98,
);
