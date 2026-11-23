__d(
  "MawMpsPayloadValidatorPreprocessor",
  [
    "MAWProtobufDeserializers",
    "MpsErrors",
    "MpsPreprocessor",
    "MpsTypes",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["directive", "message"],
      s = new Date(2e3, 1, 1).getTime(),
      u = new Date(2500, 1, 1).getTime();
    function c(e, t) {
      if (!e) throw o("MpsErrors").MpsErrors.error("invariant", "%s", t);
    }
    function d(e, t) {
      var n = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(
          t.payload,
        ),
        a = n.proto.metadata;
      switch (r("nullthrows")(e.actionType)) {
        case o("MpsTypes").ActionType.UpsertSupplemental: {
          c(e.supplementalKey != null, "supplemental key must be set");
          break;
        }
        case o("MpsTypes").ActionType.UpsertTopLevel: {
          c(
            e.targetMessageId === t.messageId,
            "messageId mismatch between directive and message",
          );
          break;
        }
        case o("MpsTypes").ActionType.DeleteTopLevelWithPlaceholder:
        case o("MpsTypes").ActionType.DeleteTopLevel:
        case o("MpsTypes").ActionType.Unknown:
        case o("MpsTypes").ActionType.Noop:
        case o("MpsTypes").ActionType.Preprocess:
        case o("MpsTypes").ActionType.DeleteSupplemental:
        case o("MpsTypes").ActionType.DeleteThread:
          break;
      }
      (c(
        e.expiryTimestampMs == null || e.isLocalOnly,
        "If expiryTimestampMs is set, isLocalOnly must be true. we do not want to upload ephemeral messages to the server. Action type: " +
          String(e.actionType),
      ),
        c(a != null, "metadata is missing in the protobuf"),
        c(
          (a == null ? void 0 : a.senderId) === t.senderId,
          "senderId mismatch between protobuf metadata and message",
        ),
        c(
          (a == null ? void 0 : a.timestampMs) === t.timestampMs ||
            (e == null ? void 0 : e.actionType) ===
              o("MpsTypes").ActionType.DeleteTopLevelWithPlaceholder,
          "timestamp mismatch between protobuf metadata and message",
        ),
        c(
          !t.senderId.includes("@"),
          "senderId should just be an FBID, got " + t.senderId + " instead",
        ));
      var i = t.threadId;
      (c(i.includes("@"), "threadId should be a JID, got " + i + " instead"),
        c(
          t.timestampMs > s,
          "timestampMs should be millisecond timestamps, got " +
            t.timestampMs.toString() +
            " instead",
        ),
        c(
          t.timestampMs < u,
          "timestampMs should be millisecond timestamps, got " +
            t.timestampMs.toString() +
            " instead",
        ));
    }
    function m(e, t) {
      try {
        d(e, t);
      } catch (e) {
        return o("MpsErrors").MpsErrors.classify(
          e,
          "payload_validator",
          "write_failed",
        );
      }
    }
    var p = o("MpsPreprocessor").preprocessor(function (t) {
      var n = t.ctx,
        o = t.payloadList,
        a = new Map();
      if (r("justknobx")._("1008") === !1)
        return { ctx: n, errors: a, payloadList: o };
      n.messageToQpl.all().addPoint("payload_validator_execution");
      var i = [];
      return (
        o.forEach(function (t) {
          var n = t.directive,
            r = t.message,
            o = babelHelpers.objectWithoutPropertiesLoose(t, e),
            l = m(n, r);
          l == null
            ? i.push(babelHelpers.extends({ directive: n, message: r }, o))
            : a.set(r.messageId, l);
        }),
        { ctx: n, errors: a, payloadList: i }
      );
    }, "payload_validator");
    l.MawMpsPayloadValidatorPreprocessor = p;
  },
  98,
);
