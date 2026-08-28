__d(
  "PsiClientSearchTypesSerializers",
  ["PsiClientSearchTypesTypes", "ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { conversations: [], queries: [] };
    }
    function u() {
      return {};
    }
    function c() {
      return { messages: [] };
    }
    function d() {
      return {};
    }
    function m() {
      return {};
    }
    function p() {
      return {};
    }
    function _() {
      return {};
    }
    function f(t, n) {
      if (
        (n.writeStructBegin("PSIToolQueryPlan"),
        n.writeFieldBegin({
          fname: "conversations",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.conversations != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.conversations.length,
        });
        for (var o of t.conversations) n.writeString(o);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: a.length,
        });
        for (var i of a) n.writeString(i);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "queries", ftype: e.LIST, fid: 2 }),
        t.queries != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.queries.length,
        });
        for (var l of t.queries) n.writeString(l);
        n.writeListEnd();
      } else {
        var s = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: s.length,
        });
        for (var u of s) n.writeString(u);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        t.timeStart != null &&
          (n.writeFieldBegin({
            fname: "timeStart",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 3,
          }),
          n.writeI32(t.timeStart),
          n.writeFieldEnd()),
        t.timeEnd != null &&
          (n.writeFieldBegin({
            fname: "timeEnd",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 4,
          }),
          n.writeI32(t.timeEnd),
          n.writeFieldEnd()),
        t.maxRelevant != null &&
          (n.writeFieldBegin({
            fname: "maxRelevant",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 5,
          }),
          n.writeI32(t.maxRelevant),
          n.writeFieldEnd()),
        t.maxRelevantPerQuery != null &&
          (n.writeFieldBegin({
            fname: "maxRelevantPerQuery",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 6,
          }),
          n.writeI32(t.maxRelevantPerQuery),
          n.writeFieldEnd()),
        t.minRelevantPerQuery != null &&
          (n.writeFieldBegin({
            fname: "minRelevantPerQuery",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 7,
          }),
          n.writeI32(t.minRelevantPerQuery),
          n.writeFieldEnd()),
        t.distanceThreshold != null &&
          (n.writeFieldBegin({
            fname: "distanceThreshold",
            ftype: (e || (e = r("ThriftTypes"))).FLOAT,
            fid: 8,
          }),
          n.writeFloat(t.distanceThreshold),
          n.writeFieldEnd()),
        t.contextWindowAbove != null &&
          (n.writeFieldBegin({
            fname: "contextWindowAbove",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 9,
          }),
          n.writeI32(t.contextWindowAbove),
          n.writeFieldEnd()),
        t.contextWindowBelow != null &&
          (n.writeFieldBegin({
            fname: "contextWindowBelow",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 10,
          }),
          n.writeI32(t.contextWindowBelow),
          n.writeFieldEnd()),
        t.includeLastNMessages != null &&
          (n.writeFieldBegin({
            fname: "includeLastNMessages",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 11,
          }),
          n.writeI32(t.includeLastNMessages),
          n.writeFieldEnd()),
        t.maxTotal != null &&
          (n.writeFieldBegin({
            fname: "maxTotal",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 12,
          }),
          n.writeI32(t.maxTotal),
          n.writeFieldEnd()),
        t.inclusionIds != null)
      ) {
        (n.writeFieldBegin({
          fname: "inclusionIds",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 13,
        }),
          n.writeListBegin({ etype: e.I64, size: t.inclusionIds.length }));
        for (var c of t.inclusionIds) n.writeI64(BigInt(c));
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.exclusionIds != null) {
        (n.writeFieldBegin({
          fname: "exclusionIds",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 14,
        }),
          n.writeListBegin({ etype: e.I64, size: t.exclusionIds.length }));
        for (var d of t.exclusionIds) n.writeI64(BigInt(d));
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.query_scope != null) {
        var m;
        (n.writeFieldBegin({
          fname: "query_scope",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 15,
        }),
          n.writeI32((m = t.query_scope) != null ? m : 0),
          n.writeFieldEnd());
      }
      if (
        (t.timeStartMs != null &&
          (n.writeFieldBegin({
            fname: "timeStartMs",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 16,
          }),
          n.writeI64(BigInt(t.timeStartMs)),
          n.writeFieldEnd()),
        t.timeEndMs != null &&
          (n.writeFieldBegin({
            fname: "timeEndMs",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 17,
          }),
          n.writeI64(BigInt(t.timeEndMs)),
          n.writeFieldEnd()),
        t.queryType != null &&
          (n.writeFieldBegin({
            fname: "queryType",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 18,
          }),
          n.writeString(t.queryType),
          n.writeFieldEnd()),
        t.disambiguationQuestion != null &&
          (n.writeFieldBegin({
            fname: "disambiguationQuestion",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 19,
          }),
          n.writeString(t.disambiguationQuestion),
          n.writeFieldEnd()),
        t.threadIdsToInclude != null)
      ) {
        (n.writeFieldBegin({
          fname: "threadIdsToInclude",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 20,
        }),
          n.writeListBegin({
            etype: e.STRING,
            size: t.threadIdsToInclude.length,
          }));
        for (var p of t.threadIdsToInclude) n.writeString(p);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.threadIdsToExclude != null) {
        (n.writeFieldBegin({
          fname: "threadIdsToExclude",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 21,
        }),
          n.writeListBegin({
            etype: e.STRING,
            size: t.threadIdsToExclude.length,
          }));
        for (var _ of t.threadIdsToExclude) n.writeString(_);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function g(t, n) {
      if ((n.writeStructBegin("TEEMessage"), t.type != null)) {
        var o;
        (n.writeFieldBegin({
          fname: "type",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
          n.writeI32((o = t.type) != null ? o : 0),
          n.writeFieldEnd());
      }
      if (
        (t.text != null &&
          (n.writeFieldBegin({
            fname: "text",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.text),
          n.writeFieldEnd()),
        t.senderName != null &&
          (n.writeFieldBegin({
            fname: "senderName",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.senderName),
          n.writeFieldEnd()),
        t.timestamp_seconds != null &&
          (n.writeFieldBegin({
            fname: "timestamp_seconds",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 4,
          }),
          n.writeI64(BigInt(t.timestamp_seconds)),
          n.writeFieldEnd()),
        t.timezone_offset_hour != null &&
          (n.writeFieldBegin({
            fname: "timezone_offset_hour",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 5,
          }),
          n.writeI32(t.timezone_offset_hour),
          n.writeFieldEnd()),
        t.senderId != null &&
          (n.writeFieldBegin({
            fname: "senderId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 6,
          }),
          n.writeI64(BigInt(t.senderId)),
          n.writeFieldEnd()),
        t.distances != null)
      ) {
        (n.writeFieldBegin({
          fname: "distances",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 7,
        }),
          n.writeListBegin({ etype: e.DOUBLE, size: t.distances.length }));
        for (var a of t.distances) n.writeDouble(a);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (
        (t.messageId != null &&
          (n.writeFieldBegin({
            fname: "messageId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 8,
          }),
          n.writeString(t.messageId),
          n.writeFieldEnd()),
        t.expandedFromMessageIds != null)
      ) {
        (n.writeFieldBegin({
          fname: "expandedFromMessageIds",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 9,
        }),
          n.writeListBegin({
            etype: e.STRING,
            size: t.expandedFromMessageIds.length,
          }));
        for (var i of t.expandedFromMessageIds) n.writeString(i);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (t.isE2ee != null &&
        (n.writeFieldBegin({
          fname: "isE2ee",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 10,
        }),
        n.writeBool(t.isE2ee),
        n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function h(t, n) {
      if (
        (n.writeStructBegin("PSIConversation"),
        t.conversationName != null &&
          (n.writeFieldBegin({
            fname: "conversationName",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.conversationName),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "messages",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
        t.messages != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.messages.length,
        });
        for (var o of t.messages) g(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) g(i, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        t.conversationId != null &&
          (n.writeFieldBegin({
            fname: "conversationId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 3,
          }),
          n.writeI64(BigInt(t.conversationId)),
          n.writeFieldEnd()),
        t.chatType != null)
      ) {
        var l;
        (n.writeFieldBegin({
          fname: "chatType",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 4,
        }),
          n.writeI32((l = t.chatType) != null ? l : 0),
          n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function y(t, n) {
      if ((n.writeStructBegin("PSIToolQueryData"), t.conversations != null)) {
        (n.writeFieldBegin({
          fname: "conversations",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.conversations.length }));
        for (var o of t.conversations) h(o, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (t.queryType != null &&
        (n.writeFieldBegin({
          fname: "queryType",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 2,
        }),
        n.writeString(t.queryType),
        n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function C(t, n) {
      if ((n.writeStructBegin("ChatMessage"), t.role != null)) {
        var o;
        (n.writeFieldBegin({
          fname: "role",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
          n.writeI32((o = t.role) != null ? o : 0),
          n.writeFieldEnd());
      }
      (t.content != null &&
        (n.writeFieldBegin({
          fname: "content",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 2,
        }),
        n.writeString(t.content),
        n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function b(t, n) {
      if (
        (n.writeStructBegin("AIChatResponsePSIMetadata"),
        t.psiToolQueryPlan != null &&
          (n.writeFieldBegin({
            fname: "psiToolQueryPlan",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          f(t.psiToolQueryPlan, n),
          n.writeFieldEnd()),
        t.nextTurnDestination != null)
      ) {
        var o;
        (n.writeFieldBegin({
          fname: "nextTurnDestination",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
          n.writeI32((o = t.nextTurnDestination) != null ? o : 0),
          n.writeFieldEnd());
      }
      (t.skipReplayPrompt != null &&
        (n.writeFieldBegin({
          fname: "skipReplayPrompt",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 3,
        }),
        n.writeBool(t.skipReplayPrompt),
        n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function v(t, n) {
      if (
        (n.writeStructBegin("AIChatRequestPSIMetadata"),
        t.psiToolQueryData != null &&
          (n.writeFieldBegin({
            fname: "psiToolQueryData",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          y(t.psiToolQueryData, n),
          n.writeFieldEnd()),
        t.conversationHistory != null)
      ) {
        (n.writeFieldBegin({
          fname: "conversationHistory",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
          n.writeListBegin({
            etype: e.STRUCT,
            size: t.conversationHistory.length,
          }));
        for (var o of t.conversationHistory) C(o, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.previousTurnDestination != null) {
        var a;
        (n.writeFieldBegin({
          fname: "previousTurnDestination",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 3,
        }),
          n.writeI32((a = t.previousTurnDestination) != null ? a : 0),
          n.writeFieldEnd());
      }
      (t.timezone_offset_hour != null &&
        (n.writeFieldBegin({
          fname: "timezone_offset_hour",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 4,
        }),
        n.writeI32(t.timezone_offset_hour),
        n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function S(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.conversations = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = t.readString();
                n.conversations.push(c);
              }
            } else t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.queries = [];
              for (var d = t.readListBegin(), m = 0; m < d.size; m++) {
                var p = t.readString();
                n.queries.push(p);
              }
            } else t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.timeStart = t.readI32())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.timeEnd = t.readI32())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.maxRelevant = t.readI32())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.maxRelevantPerQuery = t.readI32())
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.minRelevantPerQuery = t.readI32())
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).FLOAT
              ? (n.distanceThreshold = t.readFloat())
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.contextWindowAbove = t.readI32())
              : t.skip(i);
            break;
          case 10:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.contextWindowBelow = t.readI32())
              : t.skip(i);
            break;
          case 11:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.includeLastNMessages = t.readI32())
              : t.skip(i);
            break;
          case 12:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.maxTotal = t.readI32())
              : t.skip(i);
            break;
          case 13:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.inclusionIds = [];
              for (var _ = t.readListBegin(), f = 0; f < _.size; f++) {
                var g = t.readI64().toString();
                n.inclusionIds.push(g);
              }
            } else t.skip(i);
            break;
          case 14:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.exclusionIds = [];
              for (var h = t.readListBegin(), y = 0; y < h.size; y++) {
                var C = t.readI64().toString();
                n.exclusionIds.push(C);
              }
            } else t.skip(i);
            break;
          case 15:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.query_scope = o(
                  "PsiClientSearchTypesTypes",
                ).PSIToolQueryPlanScope.cast(t.readI32()))
              : t.skip(i);
            break;
          case 16:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.timeStartMs = t.readI64().toString())
              : t.skip(i);
            break;
          case 17:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.timeEndMs = t.readI64().toString())
              : t.skip(i);
            break;
          case 18:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.queryType = t.readString())
              : t.skip(i);
            break;
          case 19:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.disambiguationQuestion = t.readString())
              : t.skip(i);
            break;
          case 20:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.threadIdsToInclude = [];
              for (var b = t.readListBegin(), v = 0; v < b.size; v++) {
                var S = t.readString();
                n.threadIdsToInclude.push(S);
              }
            } else t.skip(i);
            break;
          case 21:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.threadIdsToExclude = [];
              for (var R = t.readListBegin(), L = 0; L < R.size; L++) {
                var E = t.readString();
                n.threadIdsToExclude.push(E);
              }
            } else t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.conversations === void 0 && (n.conversations = []),
        n.queries === void 0 && (n.queries = []),
        n
      );
    }
    function R(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.type = o("PsiClientSearchTypesTypes").TEEMessageType.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.text = t.readString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.senderName = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.timestamp_seconds = t.readI64().toString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.timezone_offset_hour = t.readI32())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.senderId = t.readI64().toString())
              : t.skip(i);
            break;
          case 7:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.distances = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = t.readDouble();
                n.distances.push(c);
              }
            } else t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.messageId = t.readString())
              : t.skip(i);
            break;
          case 9:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.expandedFromMessageIds = [];
              for (var d = t.readListBegin(), m = 0; m < d.size; m++) {
                var p = t.readString();
                n.expandedFromMessageIds.push(p);
              }
            } else t.skip(i);
            break;
          case 10:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isE2ee = t.readBool())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function L(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.conversationName = t.readString())
              : t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.messages = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = R(t);
                n.messages.push(c);
              }
            } else t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.conversationId = t.readI64().toString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.chatType = o(
                  "PsiClientSearchTypesTypes",
                ).PSIConversationType.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.messages === void 0 && (n.messages = []), n);
    }
    function E(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.conversations = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = L(t);
                n.conversations.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.queryType = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function k(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.role = o("PsiClientSearchTypesTypes").ChatRole.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.content = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function I(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.psiToolQueryPlan = S(t))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.nextTurnDestination = o(
                  "PsiClientSearchTypesTypes",
                ).InfraStackType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.skipReplayPrompt = t.readBool())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function T(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.psiToolQueryData = E(t))
              : t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.conversationHistory = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = k(t);
                n.conversationHistory.push(c);
              }
            } else t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.previousTurnDestination = o(
                  "PsiClientSearchTypesTypes",
                ).InfraStackType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.timezone_offset_hour = t.readI32())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    ((l.PSIToolQueryPlan$DefaultConstructor = s),
      (l.TEEMessage$DefaultConstructor = u),
      (l.PSIConversation$DefaultConstructor = c),
      (l.PSIToolQueryData$DefaultConstructor = d),
      (l.ChatMessage$DefaultConstructor = m),
      (l.AIChatResponsePSIMetadata$DefaultConstructor = p),
      (l.AIChatRequestPSIMetadata$DefaultConstructor = _),
      (l.serializePSIToolQueryPlan = f),
      (l.serializeTEEMessage = g),
      (l.serializePSIConversation = h),
      (l.serializePSIToolQueryData = y),
      (l.serializeChatMessage = C),
      (l.serializeAIChatResponsePSIMetadata = b),
      (l.serializeAIChatRequestPSIMetadata = v),
      (l.deserializePSIToolQueryPlan = S),
      (l.deserializeTEEMessage = R),
      (l.deserializePSIConversation = L),
      (l.deserializePSIToolQueryData = E),
      (l.deserializeChatMessage = k),
      (l.deserializeAIChatResponsePSIMetadata = I),
      (l.deserializeAIChatRequestPSIMetadata = T));
  },
  98,
);
