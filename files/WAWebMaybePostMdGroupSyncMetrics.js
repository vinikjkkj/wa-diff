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
    function c(t, n, a, i) {
      var l = d(t, n),
        c = l.added,
        m = l.removed;
      if (c !== 0 || m !== 0) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "postGroupParticipantSyncMetric: added: ",
              ", removed: ",
              "",
            ])),
          c,
          m,
        );
        var p = new (o(
          "WAWebMdGroupParticipantMissAckWamEvent",
        ).MdGroupParticipantMissAckWamEvent)();
        ((p.messageIsRevoke = o("WAWebSendMsgCommonApi").isRevokeMsg(a)),
          (p.groupSizeBucket = r("WAWebWamNumberToClientGroupSizeBucket")(
            (i == null ? void 0 : i.participantCount) || 0,
          )),
          (p.typeOfGroup =
            (i == null ? void 0 : i.wamTypeOfGroup) ||
            o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM.GROUP),
          (p.isLid = p.isLid =
            t.some(function (e) {
              return e.isLid();
            })),
          (p.participantAddCount = c),
          (p.participantRemoveCount = m),
          p.commitAndWaitForFlush().catch(function (e) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "maybePostGroupSyncMetrics: event commit failed with ",
                  "",
                ])),
              e,
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
