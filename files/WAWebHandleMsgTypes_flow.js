__d(
  "WAWebHandleMsgTypes.flow",
  ["$InternalEnum"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = n("$InternalEnum"))({ Self: 1, Bsp: 2, Capi: 3 }),
      u = e({ OnPremise: 1, Facebook: 2 }),
      c = e.Mirrored([
        "SUCCESS",
        "RETRY",
        "HSM_MISMATCH",
        "BACKFILL",
        "PARSE_ERROR",
        "PARSE_VALIDATION_ERROR",
        "SIGNAL_OLD_COUNTER_ERROR",
      ]),
      d = e.Mirrored([
        "E2E",
        "FANOUT",
        "BOT_UNAVAILABLE_FANOUT",
        "HOSTED_UNAVAILABLE_FANOUT",
        "VIEW_ONCE_UNAVAILABLE_FANOUT",
      ]),
      m = e({
        NO_OVERWRITE: 0,
        RETRY: 1,
        FUTURE_PROOF: 2,
        PEER_RETRY: 3,
        VOIP_CALL_LOG: 4,
      }),
      p = Object.freeze({
        CHAT: "chat",
        GROUP: "group",
        PEER_BROADCAST: "peer_broadcast",
        OTHER_BROADCAST: "other_broadcast",
        DIRECT_PEER_STATUS: "direct_peer_status",
        OTHER_STATUS: "other_status",
      });
    ((l.ActualActorsEnumType = s),
      (l.HostStorageEnumType = u),
      (l.E2EProcessResult = c),
      (l.PlaceholderType = d),
      (l.MessageOverwriteOption = m),
      (l.MESSAGE_TYPE = p));
  },
  98,
);
