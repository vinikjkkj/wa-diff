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
    "WAWebPollsGetVoteKey",
    "WAWebPollsPollVoteCollection",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "compactMap",
    "uniqueBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = ["unresolvedOptionHashes"];
    function m(t, a, i) {
      i === void 0 && (i = !0);
      var l = o("WAWebMaxPerGroup").maxPerGroup(
          t,
          function (e) {
            return e.senderTimestampMs;
          },
          o("WAWebPollsGetVoteKey").getVoteKey,
        ),
        m = r("compactMap")(a || [], function (e) {
          return o(
            "WAWebPollsPollVoteCollection",
          ).PollVoteCollection.getByMsgKey(e);
        }),
        p = [];
      for (var _ of l) {
        var f = o(
            "WAWebPollsPollVoteCollection",
          ).PollVoteCollection.getForParentAddressingModeInsensitive([
            _.parentMsgKey,
          ]),
          g = f[0],
          h = g.getVoteFromSenderAddressingModeInsensitive(_.sender);
        if (
          h != null &&
          (h.senderTimestampMs > _.senderTimestampMs ||
            h.msgKey.equals(_.msgKey))
        ) {
          (o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(
            o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
          ) &&
            h.ack !== _.ack &&
            ((h.ack = _.ack),
            (h.isSendFailure = _.ack === o("WAAckLevel").ACK.FAILED)),
            _.ack != null &&
              _.ack >= o("WAAckLevel").ACK.SENT &&
              (h.lastSuccessfulSelectedOptionLocalIds =
                _.selectedOptionLocalIds));
          continue;
        }
        h != null && m.push(h);
        var y = _.lastSuccessfulSelectedOptionLocalIds;
        h != null &&
          (h.ack != null && h.ack >= o("WAAckLevel").ACK.SENT
            ? (y = h.selectedOptionLocalIds)
            : h.lastSuccessfulSelectedOptionLocalIds != null &&
              (y = h.lastSuccessfulSelectedOptionLocalIds));
        var C = _.unresolvedOptionHashes,
          b = babelHelpers.objectWithoutPropertiesLoose(_, d);
        p.push(
          o("WAWebPollsPollVoteCollection").createPollVoteModel(
            babelHelpers.extends({}, b, {
              lastSuccessfulSelectedOptionLocalIds: y,
              isSendFailure:
                i &&
                _.ack === o("WAAckLevel").ACK.CLOCK &&
                o("WAWebUserPrefsMeUser").isMeAccount(_.sender),
            }),
          ),
        );
      }
      (p.length > 0 &&
        o("WAWebPollsPollVoteCollection").PollVoteCollection.add(p),
        m.length > 0 &&
          o("WAWebPollsPollVoteCollection").PollVoteCollection.remove(m),
        n("asyncToGeneratorRuntime")
          .asyncToGenerator(function* () {
            if (
              !(i || o("WAWebNotificationHelpers").isOfflineResumeInProgress())
            ) {
              var n = r("uniqueBy")(
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
          })()
          .catch(function (e) {
            return o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[upsertVotes][notif] failed to show poll vote notifications: ",
                  "",
                ])),
              e,
            );
          }));
    }
    l.upsertVotesModelCollection = m;
  },
  98,
);
