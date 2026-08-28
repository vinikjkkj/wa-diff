__d(
  "MeetingAssistantStateMeetingAssistantStateSerializers",
  ["MeetingAssistantStateMeetingAssistantStateTypes", "ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {};
    }
    function u() {
      return {
        transcription_status: o(
          "MeetingAssistantStateMeetingAssistantStateTypes",
        ).TranscriptionStatus.cast(0),
      };
    }
    function c() {
      return {
        transcription_status: o(
          "MeetingAssistantStateMeetingAssistantStateTypes",
        ).TranscriptionStatus.cast(0),
        assistant_status: o(
          "MeetingAssistantStateMeetingAssistantStateTypes",
        ).AssistantStatus.cast(0),
        attachToId: "0",
        ownerId: "0",
      };
    }
    function d(t, n) {
      if (
        (n.writeStructBegin("ParticipantInputState"),
        t.requested_transcription_status != null)
      ) {
        var o;
        (n.writeFieldBegin({
          fname: "requested_transcription_status",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
          n.writeI32((o = t.requested_transcription_status) != null ? o : 0),
          n.writeFieldEnd());
      }
      if (t.transcription_consent_status != null) {
        var a;
        (n.writeFieldBegin({
          fname: "transcription_consent_status",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
          n.writeI32((a = t.transcription_consent_status) != null ? a : 0),
          n.writeFieldEnd());
      }
      (t.transcription_consent_status_reason != null &&
        (n.writeFieldBegin({
          fname: "transcription_consent_status_reason",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 3,
        }),
        n.writeString(t.transcription_consent_status_reason),
        n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function m(t, n) {
      if (
        (n.writeStructBegin("ParticipantOutputState"),
        n.writeFieldBegin({
          fname: "transcription_status",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.transcription_status != null)
      ) {
        var a;
        n.writeI32((a = t.transcription_status) != null ? a : 0);
      } else {
        var i = o(
          "MeetingAssistantStateMeetingAssistantStateTypes",
        ).TranscriptionStatus.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if ((n.writeFieldEnd(), t.able_to_start_transcription != null)) {
        var l;
        (n.writeFieldBegin({
          fname: "able_to_start_transcription",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
          n.writeI32((l = t.able_to_start_transcription) != null ? l : 0),
          n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function p(t, n) {
      if (
        (n.writeStructBegin("ConferenceOutputState"),
        n.writeFieldBegin({
          fname: "transcription_status",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.transcription_status != null)
      ) {
        var a;
        n.writeI32((a = t.transcription_status) != null ? a : 0);
      } else {
        var i = o(
          "MeetingAssistantStateMeetingAssistantStateTypes",
        ).TranscriptionStatus.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "assistant_status", ftype: e.I32, fid: 2 }),
        t.assistant_status != null)
      ) {
        var l;
        n.writeI32((l = t.assistant_status) != null ? l : 0);
      } else {
        var s = o(
          "MeetingAssistantStateMeetingAssistantStateTypes",
        ).AssistantStatus.cast(0);
        n.writeI32(s != null ? s : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "attachToId", ftype: e.I64, fid: 3 }),
        t.attachToId != null)
      )
        n.writeI64(BigInt(t.attachToId));
      else {
        var u = "0";
        n.writeI64(BigInt(u));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "ownerId", ftype: e.I64, fid: 4 }),
        t.ownerId != null)
      )
        n.writeI64(BigInt(t.ownerId));
      else {
        var c = "0";
        n.writeI64(BigInt(c));
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function _(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.requested_transcription_status = o(
                  "MeetingAssistantStateMeetingAssistantStateTypes",
                ).TranscriptionStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.transcription_consent_status = o(
                  "MeetingAssistantStateMeetingAssistantStateTypes",
                ).TranscriptionConsentStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.transcription_consent_status_reason = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function f(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.transcription_status = o(
                  "MeetingAssistantStateMeetingAssistantStateTypes",
                ).TranscriptionStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.able_to_start_transcription = o(
                  "MeetingAssistantStateMeetingAssistantStateTypes",
                ).AbilityToStartTranscription.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.transcription_status === void 0 &&
          (n.transcription_status = o(
            "MeetingAssistantStateMeetingAssistantStateTypes",
          ).TranscriptionStatus.cast(0)),
        n
      );
    }
    function g(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.transcription_status = o(
                  "MeetingAssistantStateMeetingAssistantStateTypes",
                ).TranscriptionStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.assistant_status = o(
                  "MeetingAssistantStateMeetingAssistantStateTypes",
                ).AssistantStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.attachToId = t.readI64().toString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.ownerId = t.readI64().toString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.transcription_status === void 0 &&
          (n.transcription_status = o(
            "MeetingAssistantStateMeetingAssistantStateTypes",
          ).TranscriptionStatus.cast(0)),
        n.assistant_status === void 0 &&
          (n.assistant_status = o(
            "MeetingAssistantStateMeetingAssistantStateTypes",
          ).AssistantStatus.cast(0)),
        n.attachToId === void 0 && (n.attachToId = "0"),
        n.ownerId === void 0 && (n.ownerId = "0"),
        n
      );
    }
    ((l.ParticipantInputState$DefaultConstructor = s),
      (l.ParticipantOutputState$DefaultConstructor = u),
      (l.ConferenceOutputState$DefaultConstructor = c),
      (l.serializeParticipantInputState = d),
      (l.serializeParticipantOutputState = m),
      (l.serializeConferenceOutputState = p),
      (l.deserializeParticipantInputState = _),
      (l.deserializeParticipantOutputState = f),
      (l.deserializeConferenceOutputState = g));
  },
  98,
);
