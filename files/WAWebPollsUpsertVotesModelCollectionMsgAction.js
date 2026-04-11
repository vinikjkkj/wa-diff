__d(
  "WAWebPollsUpsertVotesModelCollectionMsgAction",
  [
    "WAAbortError",
    "WAAckLevel",
    "WALogger",
    "WAWebAddonGatingUtils",
    "WAWebAddonHydrationUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMaxPerGroup",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNotificationBackend",
    "WAWebNotificationHelpers",
    "WAWebPollsGatingUtils",
    "WAWebPollsGetVoteKey",
    "WAWebPollsPollVoteCollection",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "compactMap",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t, a, i) {
      i === void 0 && (i = !0);
      var l = o("WAWebMaxPerGroup").maxPerGroup(
          t,
          function (e) {
            return e.senderTimestampMs;
          },
          o("WAWebPollsGetVoteKey").getVoteKey,
        ),
        c = r("compactMap")(a || [], function (e) {
          return o(
            "WAWebPollsPollVoteCollection",
          ).PollVoteCollection.getByMsgKey(e);
        }),
        d = [];
      for (var m of l) {
        var p = o(
            "WAWebPollsPollVoteCollection",
          ).PollVoteCollection.getForParentAddressingModeInsensitive([
            m.parentMsgKey,
          ]),
          _ = p[0],
          f = _.getVoteFromSenderAddressingModeInsensitive(m.sender);
        if (
          f != null &&
          (f.senderTimestampMs > m.senderTimestampMs ||
            f.msgKey.equals(m.msgKey))
        ) {
          (o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(
            o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
          ) &&
            f.ack !== m.ack &&
            ((f.ack = m.ack),
            (f.isSendFailure = m.ack === o("WAAckLevel").ACK.FAILED)),
            m.ack != null &&
              m.ack >= o("WAAckLevel").ACK.SENT &&
              (f.lastSuccessfulSelectedOptionLocalIds =
                m.selectedOptionLocalIds));
          continue;
        }
        f != null && c.push(f);
        var g = m.lastSuccessfulSelectedOptionLocalIds;
        (f != null &&
          (f.ack != null && f.ack >= o("WAAckLevel").ACK.SENT
            ? (g = f.selectedOptionLocalIds)
            : f.lastSuccessfulSelectedOptionLocalIds != null &&
              (g = f.lastSuccessfulSelectedOptionLocalIds)),
          d.push(
            o("WAWebPollsPollVoteCollection").createPollVoteModel(
              babelHelpers.extends({}, m, {
                lastSuccessfulSelectedOptionLocalIds: g,
                isSendFailure:
                  i &&
                  m.ack === o("WAAckLevel").ACK.CLOCK &&
                  o("WAWebUserPrefsMeUser").isMeAccount(m.sender),
              }),
            ),
          ));
      }
      (d.length > 0 &&
        o("WAWebPollsPollVoteCollection").PollVoteCollection.add(d),
        c.length > 0 &&
          o("WAWebPollsPollVoteCollection").PollVoteCollection.remove(c),
        o("WAWebPollsGatingUtils").arePollsNotificationsEnabled() &&
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (
              !(i || o("WAWebNotificationHelpers").isOfflineResumeInProgress())
            ) {
              var n = r("lodash").uniqBy(
                  t
                    .filter(function (e) {
                      return !o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
                    })
                    .map(function (e) {
                      return e.parentMsgKey;
                    }),
                  String,
                ),
                a = [],
                l = yield o(
                  "WAWebMsgCollection",
                ).MsgCollection.hydrateOrGetMessages(Array.from(n, String)),
                c = 0,
                d = 0,
                m = [],
                p = function* (n) {
                  if (!o("WAWebMsgGetters").getIsSentByMe(n)) return 1;
                  var e = o("WAWebFrontendMsgGetters").getAsPollCreation(n);
                  if (
                    e == null &&
                    n.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT
                  ) {
                    c++;
                    var r = yield o(
                        "WAWebMsgCollection",
                      ).MsgCollection.getMessagesById([n.id.toString()]),
                      i = r.messages;
                    e = o("WAWebFrontendMsgGetters").getAsPollCreation(i[0]);
                  }
                  if (e == null) {
                    var l = t
                      .filter(function (e) {
                        return e.parentMsgKey.equals(n.id);
                      })
                      .map(function (e) {
                        return e.msgKey.toString();
                      })
                      .join(", ");
                    (d++,
                      m.push({
                        msgId: n.id.toString(),
                        msgType: n.type,
                        msgVoteKeys: l,
                      }));
                  } else a.push(e);
                };
              for (var _ of l) yield* p(_);
              if (
                (c > 0 &&
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "rehydrated ",
                        " poll create msgs from the db",
                      ])),
                    c,
                  ),
                d > 0)
              ) {
                var f = m.slice(0, 3),
                  g = f
                    .map(function (e) {
                      return (
                        "Msg " +
                        e.msgId +
                        " (type: " +
                        e.msgType +
                        "), votes " +
                        e.msgVoteKeys
                      );
                    })
                    .join("; ");
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[upsertVotes][notif] ",
                        " msgs not pollCreation, samples: ",
                        "",
                      ])),
                    d,
                    g,
                  )
                  .sendLogs("msgs-not-poll-creation-msg");
              }
              yield o("WAWebAddonHydrationUtils").hydrateAddons({
                ids: n,
                hydrationType: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
              });
              for (var h of a) {
                var y = o(
                    "WAWebPollsPollVoteCollection",
                  ).PollVoteCollection.getForParentAddressingModeInsensitive([
                    h.id,
                  ]),
                  C = y[0];
                C.getUnreadCount() > 0 &&
                  o("WAWebNotificationBackend")
                    .showPollVoteNotification(h)
                    .catch(
                      o("WAAbortError").catchAbort(function (e) {
                        o("WALogger").LOG(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "[Polls] Aborted notification ",
                              "",
                            ])),
                          e,
                        );
                      }),
                    );
              }
            }
          })());
    }
    l.upsertVotesModelCollection = c;
  },
  98,
);
