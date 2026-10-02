__d(
  "WAWebGroupAgentRemoveNotFoundJob",
  [
    "WATimeUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupType",
    "WAWebGroupsParticipantsApi",
    "WAWebHandleGroupNotificationAction",
    "WAWebMessageQueue",
    "WAWebMexFetchGroupInfoIncludBotsJob",
    "WAWebMsgKey",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "404";
    function s(t) {
      var n = t.participants
        .filter(function (t) {
          var n = t.code,
            r = t.userWid;
          return (
            n === e && o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(r)
          );
        })
        .map(function (e) {
          var t = e.userWid;
          return t;
        });
      return n.length === 0 ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? []
        : n;
    }
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = yield o(
              "WAWebMexFetchGroupInfoIncludBotsJob",
            ).mexGetGroupInfoIncludBots({
              groupId: e.toString(),
              queryContext: "out_of_sync_update",
            }),
            l = i == null ? void 0 : i.groupInfo;
          if (
            !(
              l == null || (i == null ? void 0 : i.participantPhashMatch) === !0
            )
          ) {
            var s = new Set(
                l.participants.map(function (e) {
                  var t = e.id;
                  return t.toString();
                }),
              ),
              u = t.filter(function (e) {
                return !s.has(e.toString());
              });
            u.length !== 0 &&
              (yield o("WAWebMessageQueue").onMessageQueue({
                chatWid: e,
                isOffline: !1,
                msgCategory: null,
                action: (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      var t = yield d(e),
                        n = u.filter(function (e) {
                          return t.has(e.toString());
                        });
                      if (n.length !== 0) {
                        var i = {
                            actionType:
                              o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
                            participants: n.map(function (e) {
                              return { id: e, isAdmin: !1, isSuperAdmin: !1 };
                            }),
                            reason: null,
                            isLidAddressingMode: a,
                          },
                          l = {
                            externalId: yield r("WAWebMsgKey").newId(),
                            chatId: e,
                            author: null,
                            authorPhoneNumber: null,
                            ts: o("WATimeUtils").unixTime(),
                            pushname: null,
                            actions: [i],
                            offline: null,
                            isLidAddressingMode: a,
                            hasIncompleteParticipantInformation: !1,
                          };
                        (yield o(
                          "WAWebHandleGroupNotificationAction",
                        ).handleAction({ action: i, meta: l }),
                          yield p(e, n));
                      }
                    },
                  );
                  function i() {
                    return t.apply(this, arguments);
                  }
                  return i;
                })(),
              }));
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          return new Set(
            (t =
              (n = yield o("WAWebGroupsParticipantsApi").getParticipants(e)) ==
              null
                ? void 0
                : n.participants) != null
              ? t
              : [],
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield d(e);
          if (
            t.some(function (e) {
              return n.has(e.toString());
            })
          )
            throw r("err")(
              "removeDepartedGroupAgents: stored participants list the agent",
            );
        })),
        _.apply(this, arguments)
      );
    }
    ((l.getNotFoundGroupAgentWids = s), (l.removeDepartedGroupAgents = u));
  },
  98,
);
