__d(
  "WAWebAddonConstants",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum").Mirrored([
        "Unified",
        "Pin",
        "Comment",
        "PollVote",
        "Reaction",
        "EventResponse",
        "None",
      ]),
      l = n("$InternalEnum").Mirrored([
        "OnlineReceive",
        "HistorySync",
        "Send",
        "SendRevoke",
        "SendRetry",
        "Revoke",
        "DeleteForMe",
        "DeleteWithParent",
        "Hydration",
        "MarkAsRead",
        "SetAck",
        "ProcessGroupHistoryBundle",
      ]),
      s = Object.freeze({
        Regular: "Regular",
        WithRevokes: "WithRevokes",
        DualEncrypted: "DualEncrypted",
        DualEncryptedWithMessageTraits: "DualEncryptedWithMessageTraits",
      }),
      u = Object.freeze({ PinInChat: 1 });
    ((i.AddonTableMode = e),
      (i.AddonProcessMode = l),
      (i.AddonProcessorType = s),
      (i.AddonMinimizedType = u));
  },
  66,
);
