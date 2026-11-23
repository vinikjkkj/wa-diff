__d(
  "WAMsgTransport.pb",
  ["WACommon.pb", "WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { NOOP: 0, UPSERT: 1, DELETE: 2, UPSERT_AND_DELETE: 3 },
      u = {},
      c = {},
      d = {},
      m = {},
      p = {},
      _ = {},
      f = {},
      g = {},
      h = {},
      y = {},
      C = {};
    ((u.name = "MessageTransport"),
      (u.internalSpec = {
        payload: [1, (e = o("WAProtoConst")).TYPES.MESSAGE, c],
        protocol: [2, e.TYPES.MESSAGE, d],
      }),
      (c.name = "MessageTransport$Payload"),
      (c.internalSpec = {
        applicationPayload: [
          1,
          e.TYPES.MESSAGE,
          o("WACommon.pb").SubProtocolSpec,
        ],
        futureProof: [3, e.TYPES.ENUM, o("WACommon.pb").FUTURE_PROOF_BEHAVIOR],
      }),
      (d.name = "MessageTransport$Protocol"),
      (d.internalSpec = {
        integral: [1, e.TYPES.MESSAGE, h],
        ancillary: [2, e.TYPES.MESSAGE, m],
      }),
      (m.name = "MessageTransport$Protocol$Ancillary"),
      (m.internalSpec = {
        skdm: [2, e.TYPES.MESSAGE, g],
        deviceListMetadata: [3, e.TYPES.MESSAGE, C],
        icdc: [4, e.TYPES.MESSAGE, _],
        backupDirective: [5, e.TYPES.MESSAGE, p],
      }),
      (p.name = "MessageTransport$Protocol$Ancillary$BackupDirective"),
      (p.internalSpec = {
        messageId: [1, e.TYPES.STRING],
        actionType: [2, e.TYPES.ENUM, s],
        supplementalKey: [3, e.TYPES.STRING],
      }),
      (_.name = "MessageTransport$Protocol$Ancillary$ICDCParticipantDevices"),
      (_.internalSpec = {
        senderIdentity: [1, e.TYPES.MESSAGE, f],
        recipientIdentities: [2, e.FLAGS.REPEATED | e.TYPES.MESSAGE, f],
        recipientUserJids: [3, e.FLAGS.REPEATED | e.TYPES.STRING],
      }),
      (f.name =
        "MessageTransport$Protocol$Ancillary$ICDCParticipantDevices$ICDCIdentityListDescription"),
      (f.internalSpec = {
        seq: [1, e.TYPES.INT32],
        signingDevice: [2, e.TYPES.BYTES],
        unknownDevices: [3, e.FLAGS.REPEATED | e.TYPES.BYTES],
        unknownDeviceIds: [4, e.FLAGS.REPEATED | e.TYPES.INT32],
      }),
      (g.name =
        "MessageTransport$Protocol$Ancillary$SenderKeyDistributionMessage"),
      (g.internalSpec = {
        groupId: [1, e.TYPES.STRING],
        axolotlSenderKeyDistributionMessage: [2, e.TYPES.BYTES],
      }),
      (h.name = "MessageTransport$Protocol$Integral"),
      (h.internalSpec = {
        padding: [1, e.TYPES.BYTES],
        dsm: [2, e.TYPES.MESSAGE, y],
      }),
      (y.name = "MessageTransport$Protocol$Integral$DeviceSentMessage"),
      (y.internalSpec = {
        destinationJid: [1, e.TYPES.STRING],
        phash: [2, e.TYPES.STRING],
      }),
      (C.name = "DeviceListMetadata"),
      (C.internalSpec = {
        senderKeyHash: [1, e.TYPES.BYTES],
        senderTimestamp: [2, e.TYPES.UINT64],
        recipientKeyHash: [8, e.TYPES.BYTES],
        recipientTimestamp: [9, e.TYPES.UINT64],
      }),
      (l.MESSAGE_TRANSPORT_PROTOCOL_ANCILLARY_BACKUP_DIRECTIVE_ACTION_TYPE = s),
      (l.MessageTransportSpec = u),
      (l.MessageTransport$PayloadSpec = c),
      (l.MessageTransport$ProtocolSpec = d),
      (l.MessageTransport$Protocol$AncillarySpec = m),
      (l.MessageTransport$Protocol$Ancillary$BackupDirectiveSpec = p),
      (l.MessageTransport$Protocol$Ancillary$ICDCParticipantDevicesSpec = _),
      (l.MessageTransport$Protocol$Ancillary$ICDCParticipantDevices$ICDCIdentityListDescriptionSpec =
        f),
      (l.MessageTransport$Protocol$Ancillary$SenderKeyDistributionMessageSpec =
        g),
      (l.MessageTransport$Protocol$IntegralSpec = h),
      (l.MessageTransport$Protocol$Integral$DeviceSentMessageSpec = y),
      (l.DeviceListMetadataSpec = C));
  },
  98,
);
