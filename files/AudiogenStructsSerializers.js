__d(
  "AudiogenStructsSerializers",
  ["AudiogenStructsTypes", "ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { voiceId: "" };
    }
    function u() {
      return { persona_version_id: "", voice_id: "" };
    }
    function c(t, n) {
      if (
        (n.writeStructBegin("AudioGenVoice"),
        n.writeFieldBegin({
          fname: "voiceId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.voiceId != null)
      )
        n.writeString(t.voiceId);
      else {
        var o = "";
        n.writeString(o);
      }
      if ((n.writeFieldEnd(), t.sentimentType != null)) {
        var a;
        (n.writeFieldBegin({
          fname: "sentimentType",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
          n.writeI32((a = t.sentimentType) != null ? a : 0),
          n.writeFieldEnd());
      }
      if (t.sentimentIntensity != null) {
        var i;
        (n.writeFieldBegin({
          fname: "sentimentIntensity",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 3,
        }),
          n.writeI32((i = t.sentimentIntensity) != null ? i : 0),
          n.writeFieldEnd());
      }
      if (t.emotion != null) {
        var l;
        (n.writeFieldBegin({
          fname: "emotion",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 4,
        }),
          n.writeI32((l = t.emotion) != null ? l : 0),
          n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function d(t, n) {
      if (
        (n.writeStructBegin("PersonaVoiceInfo"),
        n.writeFieldBegin({
          fname: "persona_version_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.persona_version_id != null)
      )
        n.writeString(t.persona_version_id);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "voice_id", ftype: e.STRING, fid: 2 }),
        t.voice_id != null)
      )
        n.writeString(t.voice_id);
      else {
        var a = "";
        n.writeString(a);
      }
      if ((n.writeFieldEnd(), t.voice_sentiment_type != null)) {
        var i;
        (n.writeFieldBegin({
          fname: "voice_sentiment_type",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 3,
        }),
          n.writeI32((i = t.voice_sentiment_type) != null ? i : 0),
          n.writeFieldEnd());
      }
      if (t.voice_sentiment_intensity != null) {
        var l;
        (n.writeFieldBegin({
          fname: "voice_sentiment_intensity",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 4,
        }),
          n.writeI32((l = t.voice_sentiment_intensity) != null ? l : 0),
          n.writeFieldEnd());
      }
      (t.bot_id != null &&
        (n.writeFieldBegin({
          fname: "bot_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 5,
        }),
        n.writeString(t.bot_id),
        n.writeFieldEnd()),
        t.welcome_message != null &&
          (n.writeFieldBegin({
            fname: "welcome_message",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.welcome_message),
          n.writeFieldEnd()),
        t.tts_tier != null &&
          (n.writeFieldBegin({
            fname: "tts_tier",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.tts_tier),
          n.writeFieldEnd()),
        t.arch != null &&
          (n.writeFieldBegin({
            fname: "arch",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 8,
          }),
          n.writeString(t.arch),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function m(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.voiceId = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.sentimentType = o("AudiogenStructsTypes").SentimentType.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.sentimentIntensity = o(
                  "AudiogenStructsTypes",
                ).SentimentIntensity.cast(t.readI32()))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.emotion = o("AudiogenStructsTypes").Emotion.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.voiceId === void 0 && (n.voiceId = ""), n);
    }
    function p(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.persona_version_id = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.voice_id = t.readString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.voice_sentiment_type = o(
                  "AudiogenStructsTypes",
                ).SentimentType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.voice_sentiment_intensity = o(
                  "AudiogenStructsTypes",
                ).SentimentIntensity.cast(t.readI32()))
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.bot_id = t.readString())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.welcome_message = t.readString())
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.tts_tier = t.readString())
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.arch = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.persona_version_id === void 0 && (n.persona_version_id = ""),
        n.voice_id === void 0 && (n.voice_id = ""),
        n
      );
    }
    ((l.AudioGenVoice$DefaultConstructor = s),
      (l.PersonaVoiceInfo$DefaultConstructor = u),
      (l.serializeAudioGenVoice = c),
      (l.serializePersonaVoiceInfo = d),
      (l.deserializeAudioGenVoice = m),
      (l.deserializePersonaVoiceInfo = p));
  },
  98,
);
