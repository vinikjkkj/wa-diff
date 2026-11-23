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
    "WAWebUserUtils",
    "compactMap",
    "uniqueBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = ["unresolvedOptionHashes"];
    function m(t, n, a) {
      a === void 0 && (a = !0);
      var i = o("WAWebMaxPerGroup").maxPerGroup(
          t,
          function (e) {
            return e.senderTimestampMs;
          },
          o("WAWebPollsGetVoteKey").getVoteKey,
        ),
        l = r("compactMap")(n || [], function (e) {
          return o(
            "WAWebPollsPollVoteCollection",
          ).PollVoteCollection.getByMsgKey(e);
        }),
        m = [];
      for (var p of i) {
        var _ = o(
            "WAWebPollsPollVoteCollection",
          ).PollVoteCollection.getForParentAddressingModeInsensitive([
            p.parentMsgKey,
          ]),
          f = _[0],
          g = f.getVoteFromSenderAddressingModeInsensitive(p.sender);
        if (
          g != null &&
          (g.senderTimestampMs > p.senderTimestampMs ||
            g.msgKey.equals(p.msgKey))
        ) {
          (o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(
            o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
          ) &&
            g.ack !== p.ack &&
            ((g.ack = p.ack),
            (g.isSendFailure = p.ack === o("WAAckLevel").ACK.FAILED)),
            p.ack != null &&
              p.ack >= o("WAAckLevel").ACK.SENT &&
              (g.lastSuccessfulSelectedOptionLocalIds =
                p.selectedOptionLocalIds));
          continue;
        }
        g != null && l.push(g);
        var h = p.lastSuccessfulSelectedOptionLocalIds;
        g != null &&
          (g.ack != null && g.ack >= o("WAAckLevel").ACK.SENT
            ? (h = g.selectedOptionLocalIds)
            : g.lastSuccessfulSelectedOptionLocalIds != null &&
              (h = g.lastSuccessfulSelectedOptionLocalIds));
        var y = p.unresolvedOptionHashes,
          C = babelHelpers.objectWithoutPropertiesLoose(p, d);
        m.push(
          o("WAWebPollsPollVoteCollection").createPollVoteModel(
            babelHelpers.extends({}, C, {
              lastSuccessfulSelectedOptionLocalIds: h,
              isSendFailure:
                a &&
                p.ack === o("WAAckLevel").ACK.CLOCK &&
                o("WAWebUserUtils").isMeAccount(p.sender),
            }),
          ),
        );
      }
      (m.length > 0 &&
        o("WAWebPollsPollVoteCollection").PollVoteCollection.add(m),
        l.length > 0 &&
          o("WAWebPollsPollVoteCollection").PollVoteCollection.remove(l),
        (async function () {
          if (
            !(a || o("WAWebNotificationHelpers").isOfflineResumeInProgress())
          ) {
            var n = r("uniqueBy")(
                t
                  .filter(function (e) {
                    return !o("WAWebUserUtils").isMeAccount(e.sender);
                  })
                  .map(function (e) {
                    return e.parentMsgKey;
                  }),
                String,
              ),
              i = [],
              l = await o(
                "WAWebMsgCollection",
              ).MsgCollection.hydrateOrGetMessages(Array.from(n, String)),
              c = 0,
              d = 0,
              m = [],
              p = async function (n) {
                if (!o("WAWebMsgGetters").getIsSentByMe(n)) return 1;
                var e = o("WAWebFrontendMsgGetters").getAsPollCreation(n);
                if (
                  e == null &&
                  n.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT
                ) {
                  c++;
                  var r = await o(
                      "WAWebMsgCollection",
                    ).MsgCollection.getMessagesById([n.id.toString()]),
                    a = r.messages;
                  e = o("WAWebFrontendMsgGetters").getAsPollCreation(a[0]);
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
                } else i.push(e);
              };
            for (var _ of l) await p(_);
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
            await o("WAWebAddonHydrationUtils").hydrateAddons({
              ids: n,
              hydrationType: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
            });
            for (var h of i) {
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
        })().catch(function (e) {
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
