__d(
  "MultiwayCommonSerializers",
  [
    "DataMessageSerializers",
    "DataMessageTypes",
    "MultiwayCommonTypes",
    "MultiwaySharedSerializers",
    "MultiwaySharedTypes",
    "StateSyncSerializers",
    "StateSyncTopicsConfigTypes",
    "StringToUtf8",
    "ThriftTypes",
    "Utf8ToString",
    "WebrtcSignalingCommonTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var e;
      return {
        message: "",
        responseStatusCode: (e = o(
          "MultiwayCommonTypes",
        )).RtcResponseStatusCode.cast(0),
        responseSubCode: e.RtcResponseSubCode.cast(0),
        apiStatusCode: e.RtcApiStatusCode.cast(0),
        rtcLogSeverity: e.RtcLogSeverity.cast(0),
      };
    }
    function u() {
      return {};
    }
    function c() {
      return { media: {} };
    }
    function d() {
      return { body: "", msid: "", mid: "" };
    }
    function m() {
      return { sourceKey: "", media: [], ssrcGroups: [] };
    }
    function p() {
      return { mediaStatus: {} };
    }
    function _() {
      return { sdpMLineIndex: "0", sdpMid: "" };
    }
    function f() {
      return { stateStore: {}, stateStoreV2: {} };
    }
    function g() {
      return { version: 0 };
    }
    function h() {
      return {
        encryptedTopic: "",
        encryptedData: Uint8Array.of(),
        senderId: Uint8Array.of(),
        messageType: o("MultiwayCommonTypes").E2eeDataMessageType.cast(0),
      };
    }
    function y() {
      return { fromVersion: "0", toVersion: "0", mediaUpdates: [] };
    }
    function C() {
      return {
        currentVersion: "0",
        mediaPath: o("MultiwaySharedTypes").MediaPath.cast(0),
      };
    }
    function b() {
      return { callerUserId: "", calleeUserId: "", sessionId: "" };
    }
    function v() {
      return {
        fromVersion: "0",
        toVersion: "0",
        mediaUpdates: [],
        renegotiationRequested: !1,
        multipleVideoStreamsAllowed: !1,
        mediaPath: o("MultiwaySharedTypes").MediaPath.cast(0),
        screenShareStreamAllowed: !1,
      };
    }
    function S() {
      return { currentVersion: "0" };
    }
    function R() {
      return {};
    }
    function L() {
      return {
        reason: o("MultiwayCommonTypes").HangupReason.cast(0),
        detailedReasonString: "",
      };
    }
    function E() {
      return { iceCandidateSdps: [] };
    }
    function k() {
      return {
        reason: o("MultiwayCommonTypes").DismissReason.cast(0),
        detailedReasonString: "",
      };
    }
    function I() {
      return { joinMode: o("MultiwayCommonTypes").JoinMode.cast(0) };
    }
    function T() {
      return { state: o("MultiwayCommonTypes").ParticipantCallState.cast(0) };
    }
    function D() {
      return {};
    }
    function x() {
      return {};
    }
    function $() {
      return {};
    }
    function P() {
      return { version: "0", participantStates: {}, groupsOfUsers: [] };
    }
    function N() {
      return { currentVersion: "0" };
    }
    function M() {
      return { subscriptions: [] };
    }
    function w() {
      return {
        message: o("DataMessageSerializers").DataMessage$DefaultConstructor(),
      };
    }
    function A() {
      return { deliveryResult: {} };
    }
    function F() {
      return { usersToInvite: new Set() };
    }
    function O() {
      return { smcTier: "", region: "", isUsfu: !1, isEdge: !1 };
    }
    function B() {
      return { offer: u(), deviceCapabilities: new Set() };
    }
    function W() {
      return {
        answer: u(),
        mediaStatus: {},
        initiator: "",
        isPendingApproval: !1,
        multipleVideoStreamsAllowed: !1,
        mediaPath: o("MultiwaySharedTypes").MediaPath.cast(0),
        groupsOfUsers: [],
        screenShareStreamAllowed: !1,
      };
    }
    function q() {
      return { deviceCapabilities: new Set() };
    }
    function U() {
      return {};
    }
    function V() {
      return { type: o("MultiwayCommonTypes").ClientEventType.cast(0) };
    }
    function H() {
      return { clientEvents: [] };
    }
    function G() {
      return {};
    }
    function z() {
      return {};
    }
    function j() {
      return {
        caller: "",
        otherParticipants: new Set(),
        ringType: o("MultiwayCommonTypes").RingType.cast(0),
        mediaPath: o("MultiwaySharedTypes").MediaPath.cast(0),
        isTransferCall: !1,
      };
    }
    function K() {
      return { deviceStatus: o("MultiwayCommonTypes").DeviceStatus.cast(0) };
    }
    function Q() {
      return { usersToRemove: new Set() };
    }
    function X() {
      return {
        topic: "",
        version: 0,
        topicId: o("StateSyncTopicsConfigTypes").TopicId.cast(0),
      };
    }
    function Y() {
      return { topic: "", version: 0 };
    }
    function J() {
      return {
        syncPayload: f(),
        topic: "",
        version: 0,
        topicId: o("StateSyncTopicsConfigTypes").TopicId.cast(0),
      };
    }
    function Z() {
      return { topic: "", version: 0 };
    }
    function ee() {
      return { topic: "", version: 0, data: Uint8Array.of() };
    }
    function te() {
      return { topic: "", version: 0 };
    }
    function ne() {
      return {
        approvalStatus: o("MultiwayCommonTypes").ApprovalStatus.cast(0),
        targetUsers: new Set(),
      };
    }
    function re() {
      return { id: "" };
    }
    function oe() {
      return { actorId: "", baseId: "" };
    }
    function ae() {
      return {
        type: o("MultiwayCommonTypes").MessageType.cast(0),
        conferenceName: "",
        transactionId: "",
        retryCount: 0,
      };
    }
    function ie() {
      return {};
    }
    function le() {
      return { messageHeader: ae(), messageBody: ie() };
    }
    function se() {
      return {
        users: new Set(),
        allowMultipleJoins: !1,
        dismissOthersOnFirstJoin: !1,
        aliasId: "",
      };
    }
    function ue() {
      return {};
    }
    function ce(t, n) {
      if (
        (n.writeStructBegin("RtcException"),
        n.writeFieldBegin({
          fname: "message",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.message != null)
      )
        n.writeString(t.message);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "responseStatusCode",
          ftype: e.I32,
          fid: 2,
        }),
        t.responseStatusCode != null)
      ) {
        var i;
        n.writeI32((i = t.responseStatusCode) != null ? i : 0);
      } else {
        var l = o("MultiwayCommonTypes").RtcResponseStatusCode.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "responseSubCode", ftype: e.I32, fid: 3 }),
        t.responseSubCode != null)
      ) {
        var s;
        n.writeI32((s = t.responseSubCode) != null ? s : 0);
      } else {
        var u = o("MultiwayCommonTypes").RtcResponseSubCode.cast(0);
        n.writeI32(u != null ? u : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "apiStatusCode", ftype: e.I32, fid: 4 }),
        t.apiStatusCode != null)
      ) {
        var c;
        n.writeI32((c = t.apiStatusCode) != null ? c : 0);
      } else {
        var d = o("MultiwayCommonTypes").RtcApiStatusCode.cast(0);
        n.writeI32(d != null ? d : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "rtcLogSeverity", ftype: e.I32, fid: 5 }),
        t.rtcLogSeverity != null)
      ) {
        var m;
        n.writeI32((m = t.rtcLogSeverity) != null ? m : 0);
      } else {
        var p = o("MultiwayCommonTypes").RtcLogSeverity.cast(0);
        n.writeI32(p != null ? p : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function de(t, n) {
      (n.writeStructBegin("SessionDescription"),
        t.sdpString != null &&
          (n.writeFieldBegin({
            fname: "sdpString",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.sdpString),
          n.writeFieldEnd()),
        t.sdpCompressionVersion != null &&
          (n.writeFieldBegin({
            fname: "sdpCompressionVersion",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 3,
          }),
          n.writeI64(BigInt(t.sdpCompressionVersion)),
          n.writeFieldEnd()),
        t.sdpCompressedData != null &&
          (n.writeFieldBegin({
            fname: "sdpCompressedData",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeBinary(t.sdpCompressedData),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function me(t, n) {
      if (
        (n.writeStructBegin("SessionDescriptionUpdate"),
        n.writeFieldBegin({
          fname: "media",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.media != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: Object.keys(t.media).length,
        });
        for (var o of Object.entries(t.media)) {
          var a = o[0],
            i = o[1];
          (n.writeI32(Number(a)), pe(i, n));
        }
        n.writeMapEnd();
      } else {
        var l = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: Object.keys(l).length,
        });
        for (var s of Object.entries(l)) {
          var u = s[0],
            c = s[1];
          (n.writeI32(Number(u)), pe(c, n));
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function pe(t, n) {
      if (
        (n.writeStructBegin("MediaDescriptionUpdate"),
        n.writeFieldBegin({
          fname: "body",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.body != null)
      )
        n.writeString(t.body);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "msid", ftype: e.STRING, fid: 2 }),
        t.msid != null)
      )
        n.writeString(t.msid);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "mid", ftype: e.STRING, fid: 3 }),
        t.mid != null)
      )
        n.writeString(t.mid);
      else {
        var i = "";
        n.writeString(i);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function _e(t, n) {
      if (
        (n.writeStructBegin("ServerMediaUpdate"),
        n.writeFieldBegin({
          fname: "sourceKey",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.sourceKey != null)
      )
        n.writeString(t.sourceKey);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "media", ftype: e.LIST, fid: 2 }),
        t.media != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.media.length,
        });
        for (var i of t.media)
          o("MultiwaySharedSerializers").serializeMedia(i, n);
        n.writeListEnd();
      } else {
        var l = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: l.length,
        });
        for (var s of l) o("MultiwaySharedSerializers").serializeMedia(s, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "ssrcGroups", ftype: e.LIST, fid: 3 }),
        t.ssrcGroups != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.ssrcGroups.length,
        });
        for (var u of t.ssrcGroups)
          o("MultiwaySharedSerializers").serializeSsrcGroup(u, n);
        n.writeListEnd();
      } else {
        var c = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: c.length,
        });
        for (var d of c)
          o("MultiwaySharedSerializers").serializeSsrcGroup(d, n);
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function fe(t, n) {
      if (
        (n.writeStructBegin("ClientMediaUpdate"),
        n.writeFieldBegin({
          fname: "mediaStatus",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.mediaStatus != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.BOOL,
          size: Object.keys(t.mediaStatus).length,
        });
        for (var a of Object.entries(t.mediaStatus)) {
          var i = a[0],
            l = a[1];
          (n.writeString(i), n.writeBool(l));
        }
        n.writeMapEnd();
      } else {
        var s = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.BOOL,
          size: Object.keys(s).length,
        });
        for (var u of Object.entries(s)) {
          var c = u[0],
            d = u[1];
          (n.writeString(c), n.writeBool(d));
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(),
        t.mediaStatusEx != null &&
          (n.writeFieldBegin({
            fname: "mediaStatusEx",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          o("MultiwaySharedSerializers").serializeClientMediaStatus(
            t.mediaStatusEx,
            n,
          ),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ge(t, n) {
      if (
        (n.writeStructBegin("IceCandidate"),
        t.candidateSdpString != null &&
          (n.writeFieldBegin({
            fname: "candidateSdpString",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.candidateSdpString),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "sdpMLineIndex",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 2,
        }),
        t.sdpMLineIndex != null)
      )
        n.writeI64(BigInt(t.sdpMLineIndex));
      else {
        var o = "0";
        n.writeI64(BigInt(o));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "sdpMid", ftype: e.STRING, fid: 3 }),
        t.sdpMid != null)
      )
        n.writeString(t.sdpMid);
      else {
        var a = "";
        n.writeString(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function he(t, n) {
      if (
        (n.writeStructBegin("SyncPayload"),
        n.writeFieldBegin({
          fname: "stateStore",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.stateStore != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(t.stateStore).length,
        });
        for (var a of Object.entries(t.stateStore)) {
          var i = a[0],
            l = a[1];
          (n.writeString(i), o("StateSyncSerializers").serializeState(l, n));
        }
        n.writeMapEnd();
      } else {
        var s = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(s).length,
        });
        for (var u of Object.entries(s)) {
          var c = u[0],
            d = u[1];
          (n.writeString(c), o("StateSyncSerializers").serializeState(d, n));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "stateStoreV2", ftype: e.MAP, fid: 4 }),
        t.stateStoreV2 != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: Object.keys(t.stateStoreV2).length,
        });
        for (var m of Object.entries(t.stateStoreV2)) {
          var p,
            _ = m[0],
            f = m[1];
          (n.writeI32((p = Number(_)) != null ? p : 0),
            o("StateSyncSerializers").serializeState(f, n));
        }
        n.writeMapEnd();
      } else {
        var g = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: Object.keys(g).length,
        });
        for (var h of Object.entries(g)) {
          var y,
            C = h[0],
            b = h[1];
          (n.writeI32((y = Number(C)) != null ? y : 0),
            o("StateSyncSerializers").serializeState(b, n));
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function ye(t, n) {
      if (
        (n.writeStructBegin("SyncAck"),
        n.writeFieldBegin({
          fname: "version",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.version != null)
      )
        n.writeI32(t.version);
      else {
        var o = 0;
        n.writeI32(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function Ce(t, n) {
      if (
        (n.writeStructBegin("E2eeData"),
        n.writeFieldBegin({
          fname: "encryptedTopic",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.encryptedTopic != null)
      )
        n.writeString(t.encryptedTopic);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "encryptedData", ftype: e.STRING, fid: 2 }),
        t.encryptedData != null)
      )
        n.writeBinary(t.encryptedData);
      else {
        var i = Uint8Array.of();
        n.writeBinary(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "senderId", ftype: e.STRING, fid: 3 }),
        t.senderId != null)
      )
        n.writeBinary(t.senderId);
      else {
        var l = Uint8Array.of();
        n.writeBinary(l);
      }
      if ((n.writeFieldEnd(), t.targetIds != null)) {
        (n.writeFieldBegin({
          fname: "targetIds",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 4,
        }),
          n.writeSetBegin({ etype: e.STRING, size: t.targetIds.size }));
        for (var s of t.targetIds)
          n.writeBinary(o("StringToUtf8").StringToUtf8(s));
        (n.writeSetEnd(), n.writeFieldEnd());
      }
      if (
        (n.writeFieldBegin({ fname: "messageType", ftype: e.I32, fid: 5 }),
        t.messageType != null)
      ) {
        var u;
        n.writeI32((u = t.messageType) != null ? u : 0);
      } else {
        var c = o("MultiwayCommonTypes").E2eeDataMessageType.cast(0);
        n.writeI32(c != null ? c : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function be(t, n) {
      if (
        (n.writeStructBegin("ClientMediaUpdateRequest"),
        n.writeFieldBegin({
          fname: "fromVersion",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.fromVersion != null)
      )
        n.writeI64(BigInt(t.fromVersion));
      else {
        var o = "0";
        n.writeI64(BigInt(o));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "toVersion", ftype: e.I64, fid: 2 }),
        t.toVersion != null)
      )
        n.writeI64(BigInt(t.toVersion));
      else {
        var a = "0";
        n.writeI64(BigInt(a));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "mediaUpdates", ftype: e.LIST, fid: 3 }),
        t.mediaUpdates != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.mediaUpdates.length,
        });
        for (var i of t.mediaUpdates) fe(i, n);
        n.writeListEnd();
      } else {
        var l = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: l.length,
        });
        for (var s of l) fe(s, n);
        n.writeListEnd();
      }
      (n.writeFieldEnd(),
        t.offer != null &&
          (n.writeFieldBegin({
            fname: "offer",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 4,
          }),
          de(t.offer, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ve(t, n) {
      if (
        (n.writeStructBegin("ClientMediaUpdateResponse"),
        n.writeFieldBegin({
          fname: "currentVersion",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.currentVersion != null)
      )
        n.writeI64(BigInt(t.currentVersion));
      else {
        var a = "0";
        n.writeI64(BigInt(a));
      }
      if (
        (n.writeFieldEnd(),
        t.answer != null &&
          (n.writeFieldBegin({
            fname: "answer",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          de(t.answer, n),
          n.writeFieldEnd()),
        t.mediaStatus != null &&
          (n.writeFieldBegin({
            fname: "mediaStatus",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          o("MultiwaySharedSerializers").serializeClientMediaStatus(
            t.mediaStatus,
            n,
          ),
          n.writeFieldEnd()),
        t.sdpOriginLocalId != null &&
          (n.writeFieldBegin({
            fname: "sdpOriginLocalId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.sdpOriginLocalId),
          n.writeFieldEnd()),
        t.renegotiationOffer != null &&
          (n.writeFieldBegin({
            fname: "renegotiationOffer",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 5,
          }),
          de(t.renegotiationOffer, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "mediaPath", ftype: e.I32, fid: 6 }),
        t.mediaPath != null)
      ) {
        var i;
        n.writeI32((i = t.mediaPath) != null ? i : 0);
      } else {
        var l = o("MultiwaySharedTypes").MediaPath.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      if ((n.writeFieldEnd(), t.stateStore != null)) {
        (n.writeFieldBegin({
          fname: "stateStore",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 7,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRUCT,
            size: Object.keys(t.stateStore).length,
          }));
        for (var s of Object.entries(t.stateStore)) {
          var u = s[0],
            c = s[1];
          (n.writeString(u), o("StateSyncSerializers").serializeState(c, n));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (t.stateStoreV2 != null) {
        (n.writeFieldBegin({
          fname: "stateStoreV2",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 8,
        }),
          n.writeMapBegin({
            ktype: e.I32,
            vtype: e.STRUCT,
            size: Object.keys(t.stateStoreV2).length,
          }));
        for (var d of Object.entries(t.stateStoreV2)) {
          var m,
            p = d[0],
            _ = d[1];
          (n.writeI32((m = Number(p)) != null ? m : 0),
            o("StateSyncSerializers").serializeState(_, n));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function Se(t, n) {
      if (
        (n.writeStructBegin("MultipleRelaysAllocationParameters"),
        n.writeFieldBegin({
          fname: "callerUserId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.callerUserId != null)
      )
        n.writeString(t.callerUserId);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "calleeUserId", ftype: e.STRING, fid: 2 }),
        t.calleeUserId != null)
      )
        n.writeString(t.calleeUserId);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "sessionId", ftype: e.STRING, fid: 3 }),
        t.sessionId != null)
      )
        n.writeString(t.sessionId);
      else {
        var i = "";
        n.writeString(i);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function Re(t, n) {
      if (
        (n.writeStructBegin("ServerMediaUpdateRequest"),
        n.writeFieldBegin({
          fname: "fromVersion",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.fromVersion != null)
      )
        n.writeI64(BigInt(t.fromVersion));
      else {
        var a = "0";
        n.writeI64(BigInt(a));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "toVersion", ftype: e.I64, fid: 2 }),
        t.toVersion != null)
      )
        n.writeI64(BigInt(t.toVersion));
      else {
        var i = "0";
        n.writeI64(BigInt(i));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "mediaUpdates", ftype: e.LIST, fid: 3 }),
        t.mediaUpdates != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.mediaUpdates.length,
        });
        for (var l of t.mediaUpdates) _e(l, n);
        n.writeListEnd();
      } else {
        var s = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: s.length,
        });
        for (var u of s) _e(u, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        t.offer != null &&
          (n.writeFieldBegin({
            fname: "offer",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 4,
          }),
          de(t.offer, n),
          n.writeFieldEnd()),
        t.answer != null &&
          (n.writeFieldBegin({
            fname: "answer",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 6,
          }),
          de(t.answer, n),
          n.writeFieldEnd()),
        t.mediaStatus != null &&
          (n.writeFieldBegin({
            fname: "mediaStatus",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 7,
          }),
          o("MultiwaySharedSerializers").serializeClientMediaStatus(
            t.mediaStatus,
            n,
          ),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "renegotiationRequested",
          ftype: e.BOOL,
          fid: 8,
        }),
        t.renegotiationRequested != null)
      )
        n.writeBool(t.renegotiationRequested);
      else {
        var c = !1;
        n.writeBool(c);
      }
      if (
        (n.writeFieldEnd(),
        t.prAnswer != null &&
          (n.writeFieldBegin({
            fname: "prAnswer",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 9,
          }),
          de(t.prAnswer, n),
          n.writeFieldEnd()),
        t.stateStore != null)
      ) {
        (n.writeFieldBegin({
          fname: "stateStore",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 10,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRUCT,
            size: Object.keys(t.stateStore).length,
          }));
        for (var d of Object.entries(t.stateStore)) {
          var m = d[0],
            p = d[1];
          (n.writeString(m), o("StateSyncSerializers").serializeState(p, n));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (
        (t.sdpOriginLocalId != null &&
          (n.writeFieldBegin({
            fname: "sdpOriginLocalId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 11,
          }),
          n.writeString(t.sdpOriginLocalId),
          n.writeFieldEnd()),
        t.multipleRelaysParameters != null &&
          (n.writeFieldBegin({
            fname: "multipleRelaysParameters",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 12,
          }),
          Se(t.multipleRelaysParameters, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "multipleVideoStreamsAllowed",
          ftype: e.BOOL,
          fid: 13,
        }),
        t.multipleVideoStreamsAllowed != null)
      )
        n.writeBool(t.multipleVideoStreamsAllowed);
      else {
        var _ = !1;
        n.writeBool(_);
      }
      if (
        (n.writeFieldEnd(),
        t.renegotiationOffer != null &&
          (n.writeFieldBegin({
            fname: "renegotiationOffer",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 14,
          }),
          de(t.renegotiationOffer, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "mediaPath", ftype: e.I32, fid: 15 }),
        t.mediaPath != null)
      ) {
        var f;
        n.writeI32((f = t.mediaPath) != null ? f : 0);
      } else {
        var g = o("MultiwaySharedTypes").MediaPath.cast(0);
        n.writeI32(g != null ? g : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.update != null &&
          (n.writeFieldBegin({
            fname: "update",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 16,
          }),
          me(t.update, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "screenShareStreamAllowed",
          ftype: e.BOOL,
          fid: 17,
        }),
        t.screenShareStreamAllowed != null)
      )
        n.writeBool(t.screenShareStreamAllowed);
      else {
        var h = !1;
        n.writeBool(h);
      }
      if ((n.writeFieldEnd(), t.stateStoreV2 != null)) {
        (n.writeFieldBegin({
          fname: "stateStoreV2",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 18,
        }),
          n.writeMapBegin({
            ktype: e.I32,
            vtype: e.STRUCT,
            size: Object.keys(t.stateStoreV2).length,
          }));
        for (var y of Object.entries(t.stateStoreV2)) {
          var C,
            b = y[0],
            v = y[1];
          (n.writeI32((C = Number(b)) != null ? C : 0),
            o("StateSyncSerializers").serializeState(v, n));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (t.allowedCustomVideoContentTypes != null) {
        (n.writeFieldBegin({
          fname: "allowedCustomVideoContentTypes",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 19,
        }),
          n.writeSetBegin({
            etype: e.I32,
            size: t.allowedCustomVideoContentTypes.size,
          }));
        for (var S of t.allowedCustomVideoContentTypes)
          n.writeI32(S != null ? S : 0);
        (n.writeSetEnd(), n.writeFieldEnd());
      }
      (t.relayInfo != null &&
        (n.writeFieldBegin({
          fname: "relayInfo",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 20,
        }),
        o("MultiwaySharedSerializers").serializeRelayInfo(t.relayInfo, n),
        n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Le(t, n) {
      if (
        (n.writeStructBegin("ServerMediaUpdateResponse"),
        n.writeFieldBegin({
          fname: "currentVersion",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.currentVersion != null)
      )
        n.writeI64(BigInt(t.currentVersion));
      else {
        var a = "0";
        n.writeI64(BigInt(a));
      }
      (n.writeFieldEnd(),
        t.answer != null &&
          (n.writeFieldBegin({
            fname: "answer",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          de(t.answer, n),
          n.writeFieldEnd()),
        t.mediaStatus != null &&
          (n.writeFieldBegin({
            fname: "mediaStatus",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          o("MultiwaySharedSerializers").serializeClientMediaStatus(
            t.mediaStatus,
            n,
          ),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Ee(e, t) {
      (t.writeStructBegin("TransferRequest"),
        t.writeFieldStop(),
        t.writeStructEnd());
    }
    function ke(t, n) {
      if (
        (n.writeStructBegin("HangupRequest"),
        n.writeFieldBegin({
          fname: "reason",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.reason != null)
      ) {
        var a;
        n.writeI32((a = t.reason) != null ? a : 0);
      } else {
        var i = o("MultiwayCommonTypes").HangupReason.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "detailedReasonString",
          ftype: e.STRING,
          fid: 2,
        }),
        t.detailedReasonString != null)
      )
        n.writeString(t.detailedReasonString);
      else {
        var l = "";
        n.writeString(l);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function Ie(t, n) {
      if (
        (n.writeStructBegin("IceCandidateRequest"),
        n.writeFieldBegin({
          fname: "iceCandidateSdps",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.iceCandidateSdps != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.iceCandidateSdps.length,
        });
        for (var o of t.iceCandidateSdps) ge(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) ge(i, n);
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function Te(t, n) {
      if (
        (n.writeStructBegin("DismissRequest"),
        n.writeFieldBegin({
          fname: "reason",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.reason != null)
      ) {
        var a;
        n.writeI32((a = t.reason) != null ? a : 0);
      } else {
        var i = o("MultiwayCommonTypes").DismissReason.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "detailedReasonString",
          ftype: e.STRING,
          fid: 2,
        }),
        t.detailedReasonString != null)
      )
        n.writeString(t.detailedReasonString);
      else {
        var l = "";
        n.writeString(l);
      }
      (n.writeFieldEnd(),
        t.callabilityResultErrorCode != null &&
          (n.writeFieldBegin({
            fname: "callabilityResultErrorCode",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 3,
          }),
          n.writeI64(BigInt(t.callabilityResultErrorCode)),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function De(t, n) {
      if (
        (n.writeStructBegin("EndpointSettings"),
        n.writeFieldBegin({
          fname: "joinMode",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.joinMode != null)
      ) {
        var a;
        n.writeI32((a = t.joinMode) != null ? a : 0);
      } else {
        var i = o("MultiwayCommonTypes").JoinMode.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function xe(t, n) {
      if (
        (n.writeStructBegin("ParticipantState"),
        n.writeFieldBegin({
          fname: "state",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.state != null)
      ) {
        var a;
        n.writeI32((a = t.state) != null ? a : 0);
      } else {
        var i = o("MultiwayCommonTypes").ParticipantCallState.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(),
        t.userCapabilities != null &&
          (n.writeFieldBegin({
            fname: "userCapabilities",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeBinary(t.userCapabilities),
          n.writeFieldEnd()),
        t.sctpNodeId != null &&
          (n.writeFieldBegin({
            fname: "sctpNodeId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 3,
          }),
          n.writeI64(BigInt(t.sctpNodeId)),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function $e(t, n) {
      (n.writeStructBegin("ServerOnlyParticipantState"),
        t.userCountry != null &&
          (n.writeFieldBegin({
            fname: "userCountry",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.userCountry),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Pe(t, n) {
      (n.writeStructBegin("UserProfile"),
        t.name != null &&
          (n.writeFieldBegin({
            fname: "name",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.name),
          n.writeFieldEnd()),
        t.profilePictureUri != null &&
          (n.writeFieldBegin({
            fname: "profilePictureUri",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.profilePictureUri),
          n.writeFieldEnd()),
        t.aliasId != null &&
          (n.writeFieldBegin({
            fname: "aliasId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.aliasId),
          n.writeFieldEnd()),
        t.thirdPartyId != null &&
          (n.writeFieldBegin({
            fname: "thirdPartyId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.thirdPartyId),
          n.writeFieldEnd()),
        t.groupId != null &&
          (n.writeFieldBegin({
            fname: "groupId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.groupId),
          n.writeFieldEnd()),
        t.avatarImageUri != null &&
          (n.writeFieldBegin({
            fname: "avatarImageUri",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.avatarImageUri),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Ne(t, n) {
      (n.writeStructBegin("ProductMetadata"),
        t.callerInfo != null &&
          (n.writeFieldBegin({
            fname: "callerInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          Pe(t.callerInfo, n),
          n.writeFieldEnd()),
        t.liveBroadcastId != null &&
          (n.writeFieldBegin({
            fname: "liveBroadcastId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.liveBroadcastId),
          n.writeFieldEnd()),
        t.callingTags != null &&
          (n.writeFieldBegin({
            fname: "callingTags",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 3,
          }),
          n.writeI32(t.callingTags),
          n.writeFieldEnd()),
        t.backingIdentifier != null &&
          (n.writeFieldBegin({
            fname: "backingIdentifier",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.backingIdentifier),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Me(t, n) {
      if (
        (n.writeStructBegin("ConferenceStateRequest"),
        n.writeFieldBegin({
          fname: "version",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.version != null)
      )
        n.writeI64(BigInt(t.version));
      else {
        var a = "0";
        n.writeI64(BigInt(a));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "participantStates", ftype: e.MAP, fid: 2 }),
        t.participantStates != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(t.participantStates).length,
        });
        for (var i of Object.entries(t.participantStates)) {
          var l = i[0],
            s = i[1];
          (n.writeString(l), xe(s, n));
        }
        n.writeMapEnd();
      } else {
        var u = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(u).length,
        });
        for (var c of Object.entries(u)) {
          var d = c[0],
            m = c[1];
          (n.writeString(d), xe(m, n));
        }
        n.writeMapEnd();
      }
      if ((n.writeFieldEnd(), t.userProfiles != null)) {
        (n.writeFieldBegin({
          fname: "userProfiles",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 3,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRUCT,
            size: Object.keys(t.userProfiles).length,
          }));
        for (var p of Object.entries(t.userProfiles)) {
          var _ = p[0],
            f = p[1];
          (n.writeString(_), Pe(f, n));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (t.appMessages != null) {
        (n.writeFieldBegin({
          fname: "appMessages",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 4,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.appMessages.length }));
        for (var g of t.appMessages)
          o("DataMessageSerializers").serializeDataMessage(g, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (
        (n.writeFieldBegin({ fname: "groupsOfUsers", ftype: e.LIST, fid: 5 }),
        t.groupsOfUsers != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.groupsOfUsers.length,
        });
        for (var h of t.groupsOfUsers) ct(h, n);
        n.writeListEnd();
      } else {
        var y = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: y.length,
        });
        for (var C of y) ct(C, n);
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function we(t, n) {
      if (
        (n.writeStructBegin("ConferenceStateResponse"),
        n.writeFieldBegin({
          fname: "currentVersion",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.currentVersion != null)
      )
        n.writeI64(BigInt(t.currentVersion));
      else {
        var o = "0";
        n.writeI64(BigInt(o));
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function Ae(t, n) {
      if (
        (n.writeStructBegin("SubscriptionRequest"),
        n.writeFieldBegin({
          fname: "subscriptions",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.subscriptions != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.subscriptions.length,
        });
        for (var a of t.subscriptions)
          o("MultiwaySharedSerializers").serializeSubscription(a, n);
        n.writeListEnd();
      } else {
        var i = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: i.length,
        });
        for (var l of i)
          o("MultiwaySharedSerializers").serializeSubscription(l, n);
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function Fe(t, n) {
      if (
        (n.writeStructBegin("DataMessageRequest"),
        n.writeFieldBegin({
          fname: "message",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.message != null)
      )
        o("DataMessageSerializers").serializeDataMessage(t.message, n);
      else {
        var a = o("DataMessageSerializers").DataMessage$DefaultConstructor();
        o("DataMessageSerializers").serializeDataMessage(a, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function Oe(t, n) {
      if (
        (n.writeStructBegin("DataMessageResponse"),
        n.writeFieldBegin({
          fname: "deliveryResult",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.deliveryResult != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.I32,
          size: Object.keys(t.deliveryResult).length,
        });
        for (var o of Object.entries(t.deliveryResult)) {
          var a = o[0],
            i = o[1];
          (n.writeString(a), n.writeI32(i != null ? i : 0));
        }
        n.writeMapEnd();
      } else {
        var l = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.I32,
          size: Object.keys(l).length,
        });
        for (var s of Object.entries(l)) {
          var u = s[0],
            c = s[1];
          (n.writeString(u), n.writeI32(c != null ? c : 0));
        }
        n.writeMapEnd();
      }
      if ((n.writeFieldEnd(), t.serviceTypeDeliveryResult != null)) {
        (n.writeFieldBegin({
          fname: "serviceTypeDeliveryResult",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 2,
        }),
          n.writeMapBegin({
            ktype: e.I32,
            vtype: e.I32,
            size: Object.keys(t.serviceTypeDeliveryResult).length,
          }));
        for (var d of Object.entries(t.serviceTypeDeliveryResult)) {
          var m,
            p = d[0],
            _ = d[1];
          (n.writeI32((m = Number(p)) != null ? m : 0),
            n.writeI32(_ != null ? _ : 0));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function Be(t, n) {
      if (
        (n.writeStructBegin("AddParticipantsRequest"),
        n.writeFieldBegin({
          fname: "usersToInvite",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 1,
        }),
        t.usersToInvite != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.usersToInvite.size,
        });
        for (var a of t.usersToInvite) n.writeString(a);
        n.writeSetEnd();
      } else {
        var i = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: i.size,
        });
        for (var l of i) n.writeString(l);
        n.writeSetEnd();
      }
      if ((n.writeFieldEnd(), t.appMessages != null)) {
        (n.writeFieldBegin({
          fname: "appMessages",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.appMessages.length }));
        for (var s of t.appMessages)
          o("DataMessageSerializers").serializeDataMessage(s, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function We(t, n) {
      if (
        (n.writeStructBegin("SfuAllocation"),
        n.writeFieldBegin({
          fname: "smcTier",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.smcTier != null)
      )
        n.writeString(t.smcTier);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "region", ftype: e.STRING, fid: 2 }),
        t.region != null)
      )
        n.writeString(t.region);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "isUsfu", ftype: e.BOOL, fid: 3 }),
        t.isUsfu != null)
      )
        n.writeBool(t.isUsfu);
      else {
        var i = !1;
        n.writeBool(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "isEdge", ftype: e.BOOL, fid: 4 }),
        t.isEdge != null)
      )
        n.writeBool(t.isEdge);
      else {
        var l = !1;
        n.writeBool(l);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function qe(t, n) {
      if (
        (n.writeStructBegin("JoinRequest"),
        n.writeFieldBegin({
          fname: "offer",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.offer != null)
      )
        de(t.offer, n);
      else {
        var a = u();
        de(a, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "deviceCapabilities",
          ftype: e.SET,
          fid: 2,
        }),
        t.deviceCapabilities != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: t.deviceCapabilities.size,
        });
        for (var i of t.deviceCapabilities) n.writeI32(i != null ? i : 0);
        n.writeSetEnd();
      } else {
        var l = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: l.size,
        });
        for (var s of l) n.writeI32(s != null ? s : 0);
        n.writeSetEnd();
      }
      if ((n.writeFieldEnd(), t.usersToCall != null)) {
        (n.writeFieldBegin({
          fname: "usersToCall",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 3,
        }),
          n.writeSetBegin({ etype: e.STRING, size: t.usersToCall.size }));
        for (var c of t.usersToCall) n.writeString(c);
        (n.writeSetEnd(), n.writeFieldEnd());
      }
      if (t.mediaStatus != null) {
        (n.writeFieldBegin({
          fname: "mediaStatus",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 4,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.BOOL,
            size: Object.keys(t.mediaStatus).length,
          }));
        for (var d of Object.entries(t.mediaStatus)) {
          var m = d[0],
            p = d[1];
          (n.writeString(m), n.writeBool(p));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (
        (t.userCapabilities != null &&
          (n.writeFieldBegin({
            fname: "userCapabilities",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeBinary(t.userCapabilities),
          n.writeFieldEnd()),
        t.supportedExperiments != null &&
          (n.writeFieldBegin({
            fname: "supportedExperiments",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.supportedExperiments),
          n.writeFieldEnd()),
        t.appMessages != null)
      ) {
        (n.writeFieldBegin({
          fname: "appMessages",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 9,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.appMessages.length }));
        for (var _ of t.appMessages)
          o("DataMessageSerializers").serializeDataMessage(_, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (
        (t.userToEscalate != null &&
          (n.writeFieldBegin({
            fname: "userToEscalate",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 10,
          }),
          n.writeString(t.userToEscalate),
          n.writeFieldEnd()),
        t.escalatingCallId != null &&
          (n.writeFieldBegin({
            fname: "escalatingCallId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 11,
          }),
          n.writeI64(BigInt(t.escalatingCallId)),
          n.writeFieldEnd()),
        t.conferenceType != null)
      ) {
        var f;
        (n.writeFieldBegin({
          fname: "conferenceType",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 12,
        }),
          n.writeI32((f = t.conferenceType) != null ? f : 0),
          n.writeFieldEnd());
      }
      if (
        (t.mediaStatusEx != null &&
          (n.writeFieldBegin({
            fname: "mediaStatusEx",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 13,
          }),
          o("MultiwaySharedSerializers").serializeClientMediaStatus(
            t.mediaStatusEx,
            n,
          ),
          n.writeFieldEnd()),
        t.answer != null &&
          (n.writeFieldBegin({
            fname: "answer",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 14,
          }),
          de(t.answer, n),
          n.writeFieldEnd()),
        t.syncPayload != null &&
          (n.writeFieldBegin({
            fname: "syncPayload",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 15,
          }),
          he(t.syncPayload, n),
          n.writeFieldEnd()),
        t.usersToApproveFromWaitingRoom != null)
      ) {
        (n.writeFieldBegin({
          fname: "usersToApproveFromWaitingRoom",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 16,
        }),
          n.writeSetBegin({
            etype: e.STRING,
            size: t.usersToApproveFromWaitingRoom.size,
          }));
        for (var g of t.usersToApproveFromWaitingRoom) n.writeString(g);
        (n.writeSetEnd(), n.writeFieldEnd());
      }
      if (
        (t.e2eeEnforcement != null &&
          (n.writeFieldBegin({
            fname: "e2eeEnforcement",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 17,
          }),
          o("MultiwaySharedSerializers").serializeE2eeEnforcement(
            t.e2eeEnforcement,
            n,
          ),
          n.writeFieldEnd()),
        t.sfuAllocation != null &&
          (n.writeFieldBegin({
            fname: "sfuAllocation",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 18,
          }),
          We(t.sfuAllocation, n),
          n.writeFieldEnd()),
        t.clientMediaMode != null)
      ) {
        var h;
        (n.writeFieldBegin({
          fname: "clientMediaMode",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 19,
        }),
          n.writeI32((h = t.clientMediaMode) != null ? h : 0),
          n.writeFieldEnd());
      }
      if (
        (t.endpointSettings != null &&
          (n.writeFieldBegin({
            fname: "endpointSettings",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 20,
          }),
          De(t.endpointSettings, n),
          n.writeFieldEnd()),
        t.backupSfuAllocation != null &&
          (n.writeFieldBegin({
            fname: "backupSfuAllocation",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 21,
          }),
          We(t.backupSfuAllocation, n),
          n.writeFieldEnd()),
        t.supportedCustomVideoContentTypes != null)
      ) {
        (n.writeFieldBegin({
          fname: "supportedCustomVideoContentTypes",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 22,
        }),
          n.writeSetBegin({
            etype: e.I32,
            size: t.supportedCustomVideoContentTypes.size,
          }));
        for (var y of t.supportedCustomVideoContentTypes)
          n.writeI32(y != null ? y : 0);
        (n.writeSetEnd(), n.writeFieldEnd());
      }
      (t.configIntegrityOpaqueToken != null &&
        (n.writeFieldBegin({
          fname: "configIntegrityOpaqueToken",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 23,
        }),
        n.writeI32(t.configIntegrityOpaqueToken),
        n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Ue(t, n) {
      if (
        (n.writeStructBegin("JoinResponse"),
        n.writeFieldBegin({
          fname: "answer",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.answer != null)
      )
        de(t.answer, n);
      else {
        var a = u();
        de(a, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "mediaStatus", ftype: e.MAP, fid: 2 }),
        t.mediaStatus != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.BOOL,
          size: Object.keys(t.mediaStatus).length,
        });
        for (var i of Object.entries(t.mediaStatus)) {
          var l = i[0],
            s = i[1];
          (n.writeString(l), n.writeBool(s));
        }
        n.writeMapEnd();
      } else {
        var c = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.BOOL,
          size: Object.keys(c).length,
        });
        for (var d of Object.entries(c)) {
          var m = d[0],
            p = d[1];
          (n.writeString(m), n.writeBool(p));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "initiator", ftype: e.STRING, fid: 3 }),
        t.initiator != null)
      )
        n.writeString(t.initiator);
      else {
        var _ = "";
        n.writeString(_);
      }
      if (
        (n.writeFieldEnd(),
        t.negotiatedExperiments != null &&
          (n.writeFieldBegin({
            fname: "negotiatedExperiments",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.negotiatedExperiments),
          n.writeFieldEnd()),
        t.mediaStatusEx != null &&
          (n.writeFieldBegin({
            fname: "mediaStatusEx",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 6,
          }),
          o("MultiwaySharedSerializers").serializeClientMediaStatus(
            t.mediaStatusEx,
            n,
          ),
          n.writeFieldEnd()),
        t.appMessages != null)
      ) {
        (n.writeFieldBegin({
          fname: "appMessages",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 7,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.appMessages.length }));
        for (var f of t.appMessages)
          o("DataMessageSerializers").serializeDataMessage(f, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.stateStore != null) {
        (n.writeFieldBegin({
          fname: "stateStore",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 8,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRUCT,
            size: Object.keys(t.stateStore).length,
          }));
        for (var g of Object.entries(t.stateStore)) {
          var h = g[0],
            y = g[1];
          (n.writeString(h), o("StateSyncSerializers").serializeState(y, n));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (
        (t.sdpOriginLocalId != null &&
          (n.writeFieldBegin({
            fname: "sdpOriginLocalId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 9,
          }),
          n.writeString(t.sdpOriginLocalId),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "isPendingApproval",
          ftype: e.BOOL,
          fid: 10,
        }),
        t.isPendingApproval != null)
      )
        n.writeBool(t.isPendingApproval);
      else {
        var C = !1;
        n.writeBool(C);
      }
      if (
        (n.writeFieldEnd(),
        t.renegotiationOffer != null &&
          (n.writeFieldBegin({
            fname: "renegotiationOffer",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 11,
          }),
          de(t.renegotiationOffer, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "multipleVideoStreamsAllowed",
          ftype: e.BOOL,
          fid: 12,
        }),
        t.multipleVideoStreamsAllowed != null)
      )
        n.writeBool(t.multipleVideoStreamsAllowed);
      else {
        var b = !1;
        n.writeBool(b);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "mediaPath", ftype: e.I32, fid: 13 }),
        t.mediaPath != null)
      ) {
        var v;
        n.writeI32((v = t.mediaPath) != null ? v : 0);
      } else {
        var S = o("MultiwaySharedTypes").MediaPath.cast(0);
        n.writeI32(S != null ? S : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "groupsOfUsers", ftype: e.LIST, fid: 14 }),
        t.groupsOfUsers != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.groupsOfUsers.length,
        });
        for (var R of t.groupsOfUsers) ct(R, n);
        n.writeListEnd();
      } else {
        var L = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: L.length,
        });
        for (var E of L) ct(E, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "screenShareStreamAllowed",
          ftype: e.BOOL,
          fid: 15,
        }),
        t.screenShareStreamAllowed != null)
      )
        n.writeBool(t.screenShareStreamAllowed);
      else {
        var k = !1;
        n.writeBool(k);
      }
      if (
        (n.writeFieldEnd(),
        t.relayInfo != null &&
          (n.writeFieldBegin({
            fname: "relayInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 16,
          }),
          o("MultiwaySharedSerializers").serializeRelayInfo(t.relayInfo, n),
          n.writeFieldEnd()),
        t.selfSctpNodeId != null &&
          (n.writeFieldBegin({
            fname: "selfSctpNodeId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 17,
          }),
          n.writeI64(BigInt(t.selfSctpNodeId)),
          n.writeFieldEnd()),
        t.stateStoreV2 != null)
      ) {
        (n.writeFieldBegin({
          fname: "stateStoreV2",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 18,
        }),
          n.writeMapBegin({
            ktype: e.I32,
            vtype: e.STRUCT,
            size: Object.keys(t.stateStoreV2).length,
          }));
        for (var I of Object.entries(t.stateStoreV2)) {
          var T,
            D = I[0],
            x = I[1];
          (n.writeI32((T = Number(D)) != null ? T : 0),
            o("StateSyncSerializers").serializeState(x, n));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (t.allowedCustomVideoContentTypes != null) {
        (n.writeFieldBegin({
          fname: "allowedCustomVideoContentTypes",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 19,
        }),
          n.writeSetBegin({
            etype: e.I32,
            size: t.allowedCustomVideoContentTypes.size,
          }));
        for (var $ of t.allowedCustomVideoContentTypes)
          n.writeI32($ != null ? $ : 0);
        (n.writeSetEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function Ve(t, n) {
      if (
        (n.writeStructBegin("ConnectRequest"),
        t.sdp != null &&
          (n.writeFieldBegin({
            fname: "sdp",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          de(t.sdp, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "deviceCapabilities",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 3,
        }),
        t.deviceCapabilities != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: t.deviceCapabilities.size,
        });
        for (var a of t.deviceCapabilities) n.writeI32(a != null ? a : 0);
        n.writeSetEnd();
      } else {
        var i = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: i.size,
        });
        for (var l of i) n.writeI32(l != null ? l : 0);
        n.writeSetEnd();
      }
      if ((n.writeFieldEnd(), t.supportedCustomVideoContentTypes != null)) {
        (n.writeFieldBegin({
          fname: "supportedCustomVideoContentTypes",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 5,
        }),
          n.writeSetBegin({
            etype: e.I32,
            size: t.supportedCustomVideoContentTypes.size,
          }));
        for (var s of t.supportedCustomVideoContentTypes)
          n.writeI32(s != null ? s : 0);
        (n.writeSetEnd(), n.writeFieldEnd());
      }
      (t.prOffer != null &&
        (n.writeFieldBegin({
          fname: "prOffer",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 6,
        }),
        de(t.prOffer, n),
        n.writeFieldEnd()),
        t.e2eeEnforcement != null &&
          (n.writeFieldBegin({
            fname: "e2eeEnforcement",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 7,
          }),
          o("MultiwaySharedSerializers").serializeE2eeEnforcement(
            t.e2eeEnforcement,
            n,
          ),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function He(t, n) {
      (n.writeStructBegin("ConnectResponse"),
        t.sdp != null &&
          (n.writeFieldBegin({
            fname: "sdp",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          de(t.sdp, n),
          n.writeFieldEnd()),
        t.sdpOriginLocalId != null &&
          (n.writeFieldBegin({
            fname: "sdpOriginLocalId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.sdpOriginLocalId),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Ge(t, n) {
      if (
        (n.writeStructBegin("ClientEvent"),
        n.writeFieldBegin({
          fname: "type",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.type != null)
      ) {
        var a;
        n.writeI32((a = t.type) != null ? a : 0);
      } else {
        var i = o("MultiwayCommonTypes").ClientEventType.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(),
        t.time != null &&
          (n.writeFieldBegin({
            fname: "time",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 2,
          }),
          n.writeI64(BigInt(t.time)),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ze(t, n) {
      if (
        (n.writeStructBegin("ClientEventRequest"),
        n.writeFieldBegin({
          fname: "clientEvents",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.clientEvents != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.clientEvents.length,
        });
        for (var o of t.clientEvents) Ge(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) Ge(i, n);
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function je(t, n) {
      (n.writeStructBegin("ThreadIdInfo"),
        t.groupThreadId != null &&
          (n.writeFieldBegin({
            fname: "groupThreadId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.groupThreadId),
          n.writeFieldEnd()),
        t.peerId != null &&
          (n.writeFieldBegin({
            fname: "peerId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.peerId),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Ke(e, t) {
      (t.writeStructBegin("ClientEventResponse"),
        t.writeFieldStop(),
        t.writeStructEnd());
    }
    function Qe(t, n) {
      if (
        (n.writeStructBegin("RingRequest"),
        n.writeFieldBegin({
          fname: "caller",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.caller != null)
      )
        n.writeString(t.caller);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "otherParticipants", ftype: e.SET, fid: 2 }),
        t.otherParticipants != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.otherParticipants.size,
        });
        for (var i of t.otherParticipants) n.writeString(i);
        n.writeSetEnd();
      } else {
        var l = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: l.size,
        });
        for (var s of l) n.writeString(s);
        n.writeSetEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "ringType", ftype: e.I32, fid: 4 }),
        t.ringType != null)
      ) {
        var u;
        n.writeI32((u = t.ringType) != null ? u : 0);
      } else {
        var c = o("MultiwayCommonTypes").RingType.cast(0);
        n.writeI32(c != null ? c : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.offeredExperiments != null &&
          (n.writeFieldBegin({
            fname: "offeredExperiments",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.offeredExperiments),
          n.writeFieldEnd()),
        t.isScheduledCall != null &&
          (n.writeFieldBegin({
            fname: "isScheduledCall",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 6,
          }),
          n.writeBool(t.isScheduledCall),
          n.writeFieldEnd()),
        t.appMessages != null)
      ) {
        (n.writeFieldBegin({
          fname: "appMessages",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 8,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.appMessages.length }));
        for (var d of t.appMessages)
          o("DataMessageSerializers").serializeDataMessage(d, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (
        (t.offer != null &&
          (n.writeFieldBegin({
            fname: "offer",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 10,
          }),
          de(t.offer, n),
          n.writeFieldEnd()),
        t.mediaStatusEx != null &&
          (n.writeFieldBegin({
            fname: "mediaStatusEx",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 11,
          }),
          o("MultiwaySharedSerializers").serializeClientMediaStatus(
            t.mediaStatusEx,
            n,
          ),
          n.writeFieldEnd()),
        t.isPreconnectSupported != null &&
          (n.writeFieldBegin({
            fname: "isPreconnectSupported",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 12,
          }),
          n.writeBool(t.isPreconnectSupported),
          n.writeFieldEnd()),
        t.sdpOriginLocalId != null &&
          (n.writeFieldBegin({
            fname: "sdpOriginLocalId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 13,
          }),
          n.writeString(t.sdpOriginLocalId),
          n.writeFieldEnd()),
        t.unifiedOffer != null &&
          (n.writeFieldBegin({
            fname: "unifiedOffer",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 14,
          }),
          de(t.unifiedOffer, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "mediaPath", ftype: e.I32, fid: 15 }),
        t.mediaPath != null)
      ) {
        var m;
        n.writeI32((m = t.mediaPath) != null ? m : 0);
      } else {
        var p = o("MultiwaySharedTypes").MediaPath.cast(0);
        n.writeI32(p != null ? p : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.e2eeEnforcement != null &&
          (n.writeFieldBegin({
            fname: "e2eeEnforcement",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 16,
          }),
          o("MultiwaySharedSerializers").serializeE2eeEnforcement(
            t.e2eeEnforcement,
            n,
          ),
          n.writeFieldEnd()),
        t.isLegacyCall != null &&
          (n.writeFieldBegin({
            fname: "isLegacyCall",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 17,
          }),
          n.writeBool(t.isLegacyCall),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "isTransferCall", ftype: e.BOOL, fid: 18 }),
        t.isTransferCall != null)
      )
        n.writeBool(t.isTransferCall);
      else {
        var _ = !1;
        n.writeBool(_);
      }
      if (
        (n.writeFieldEnd(),
        t.relayInfo != null &&
          (n.writeFieldBegin({
            fname: "relayInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 20,
          }),
          o("MultiwaySharedSerializers").serializeRelayInfo(t.relayInfo, n),
          n.writeFieldEnd()),
        t.overlayConfigs != null)
      ) {
        (n.writeFieldBegin({
          fname: "overlayConfigs",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 21,
        }),
          n.writeMapBegin({
            ktype: e.I32,
            vtype: e.I32,
            size: Object.keys(t.overlayConfigs).length,
          }));
        for (var f of Object.entries(t.overlayConfigs)) {
          var g = f[0],
            h = f[1];
          (n.writeI32(Number(g)), n.writeI32(h));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      (t.productMetadata != null &&
        (n.writeFieldBegin({
          fname: "productMetadata",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 22,
        }),
        Ne(t.productMetadata, n),
        n.writeFieldEnd()),
        t.callerClientSessionId != null &&
          (n.writeFieldBegin({
            fname: "callerClientSessionId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 23,
          }),
          n.writeString(t.callerClientSessionId),
          n.writeFieldEnd()),
        t.threadIdInfo != null &&
          (n.writeFieldBegin({
            fname: "threadIdInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 24,
          }),
          je(t.threadIdInfo, n),
          n.writeFieldEnd()),
        t.linkUrl != null &&
          (n.writeFieldBegin({
            fname: "linkUrl",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 25,
          }),
          n.writeString(t.linkUrl),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Xe(t, n) {
      if (
        (n.writeStructBegin("RingResponse"),
        n.writeFieldBegin({
          fname: "deviceStatus",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
        t.deviceStatus != null)
      ) {
        var a;
        n.writeI32((a = t.deviceStatus) != null ? a : 0);
      } else {
        var i = o("MultiwayCommonTypes").DeviceStatus.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function Ye(t, n) {
      if (
        (n.writeStructBegin("RemoveParticipantsRequest"),
        n.writeFieldBegin({
          fname: "usersToRemove",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 1,
        }),
        t.usersToRemove != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.usersToRemove.size,
        });
        for (var o of t.usersToRemove) n.writeString(o);
        n.writeSetEnd();
      } else {
        var a = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: a.size,
        });
        for (var i of a) n.writeString(i);
        n.writeSetEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function Je(t, n) {
      if (
        (n.writeStructBegin("UnsubscribeRequest"),
        n.writeFieldBegin({
          fname: "topic",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.topic != null)
      )
        n.writeString(t.topic);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "version", ftype: e.I32, fid: 2 }),
        t.version != null)
      )
        n.writeI32(t.version);
      else {
        var i = 0;
        n.writeI32(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "topicId", ftype: e.I32, fid: 3 }),
        t.topicId != null)
      ) {
        var l;
        n.writeI32((l = t.topicId) != null ? l : 0);
      } else {
        var s = o("StateSyncTopicsConfigTypes").TopicId.cast(0);
        n.writeI32(s != null ? s : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function Ze(t, n) {
      if (
        (n.writeStructBegin("UnsubscribeResponse"),
        n.writeFieldBegin({
          fname: "topic",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.topic != null)
      )
        n.writeString(t.topic);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "version", ftype: e.I32, fid: 2 }),
        t.version != null)
      )
        n.writeI32(t.version);
      else {
        var a = 0;
        n.writeI32(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function et(t, n) {
      if (
        (n.writeStructBegin("UpdateRequest"),
        n.writeFieldBegin({
          fname: "syncPayload",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.syncPayload != null)
      )
        he(t.syncPayload, n);
      else {
        var a = f();
        he(a, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "topic", ftype: e.STRING, fid: 2 }),
        t.topic != null)
      )
        n.writeString(t.topic);
      else {
        var i = "";
        n.writeString(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "version", ftype: e.I32, fid: 3 }),
        t.version != null)
      )
        n.writeI32(t.version);
      else {
        var l = 0;
        n.writeI32(l);
      }
      if (
        (n.writeFieldEnd(),
        t.data != null &&
          (n.writeFieldBegin({
            fname: "data",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeBinary(t.data),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "topicId", ftype: e.I32, fid: 5 }),
        t.topicId != null)
      ) {
        var s;
        n.writeI32((s = t.topicId) != null ? s : 0);
      } else {
        var u = o("StateSyncTopicsConfigTypes").TopicId.cast(0);
        n.writeI32(u != null ? u : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function tt(t, n) {
      if (
        (n.writeStructBegin("UpdateResponse"),
        n.writeFieldBegin({
          fname: "topic",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 2,
        }),
        t.topic != null)
      )
        n.writeString(t.topic);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "version", ftype: e.I32, fid: 3 }),
        t.version != null)
      )
        n.writeI32(t.version);
      else {
        var a = 0;
        n.writeI32(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function nt(t, n) {
      if (
        (n.writeStructBegin("NotifyRequest"),
        n.writeFieldBegin({
          fname: "topic",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 2,
        }),
        t.topic != null)
      )
        n.writeString(t.topic);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "version", ftype: e.I32, fid: 3 }),
        t.version != null)
      )
        n.writeI32(t.version);
      else {
        var a = 0;
        n.writeI32(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "data", ftype: e.STRING, fid: 4 }),
        t.data != null)
      )
        n.writeBinary(t.data);
      else {
        var i = Uint8Array.of();
        n.writeBinary(i);
      }
      if (
        (n.writeFieldEnd(),
        t.syncPayload != null &&
          (n.writeFieldBegin({
            fname: "syncPayload",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 5,
          }),
          he(t.syncPayload, n),
          n.writeFieldEnd()),
        t.topicId != null)
      ) {
        var l;
        (n.writeFieldBegin({
          fname: "topicId",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 6,
        }),
          n.writeI32((l = t.topicId) != null ? l : 0),
          n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function rt(t, n) {
      if (
        (n.writeStructBegin("NotifyResponse"),
        n.writeFieldBegin({
          fname: "topic",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 2,
        }),
        t.topic != null)
      )
        n.writeString(t.topic);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "version", ftype: e.I32, fid: 3 }),
        t.version != null)
      )
        n.writeI32(t.version);
      else {
        var a = 0;
        n.writeI32(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function ot(t, n) {
      if (
        (n.writeStructBegin("ApprovalRequest"),
        n.writeFieldBegin({
          fname: "approvalStatus",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
        t.approvalStatus != null)
      ) {
        var a;
        n.writeI32((a = t.approvalStatus) != null ? a : 0);
      } else {
        var i = o("MultiwayCommonTypes").ApprovalStatus.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "targetUsers", ftype: e.SET, fid: 3 }),
        t.targetUsers != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.targetUsers.size,
        });
        for (var l of t.targetUsers) n.writeString(l);
        n.writeSetEnd();
      } else {
        var s = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: s.size,
        });
        for (var u of s) n.writeString(u);
        n.writeSetEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function at(t, n) {
      if (
        (n.writeStructBegin("RtcSender"),
        n.writeFieldBegin({
          fname: "id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.id != null)
      )
        n.writeString(t.id);
      else {
        var o = "";
        n.writeString(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function it(t, n) {
      if (
        (n.writeStructBegin("RtcReceiver"),
        n.writeFieldBegin({
          fname: "actorId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.actorId != null)
      )
        n.writeString(t.actorId);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "baseId", ftype: e.STRING, fid: 2 }),
        t.baseId != null)
      )
        n.writeString(t.baseId);
      else {
        var a = "";
        n.writeString(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function lt(t, n) {
      if (
        (n.writeStructBegin("RtcMessageHeader"),
        n.writeFieldBegin({
          fname: "type",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.type != null)
      ) {
        var a;
        n.writeI32((a = t.type) != null ? a : 0);
      } else {
        var i = o("MultiwayCommonTypes").MessageType.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "conferenceName", ftype: e.STRING, fid: 2 }),
        t.conferenceName != null)
      )
        n.writeString(t.conferenceName);
      else {
        var l = "";
        n.writeString(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "transactionId", ftype: e.STRING, fid: 3 }),
        t.transactionId != null)
      )
        n.writeString(t.transactionId);
      else {
        var s = "";
        n.writeString(s);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "retryCount", ftype: e.I16, fid: 4 }),
        t.retryCount != null)
      )
        n.writeI16(t.retryCount);
      else {
        var u = 0;
        n.writeI16(u);
      }
      if (
        (n.writeFieldEnd(),
        t.serverInfoData != null &&
          (n.writeFieldBegin({
            fname: "serverInfoData",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.serverInfoData),
          n.writeFieldEnd()),
        t.responseStatusCode != null)
      ) {
        var c;
        (n.writeFieldBegin({
          fname: "responseStatusCode",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 6,
        }),
          n.writeI32((c = t.responseStatusCode) != null ? c : 0),
          n.writeFieldEnd());
      }
      if (t.extensions != null) {
        (n.writeFieldBegin({
          fname: "extensions",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 7,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRING,
            size: Object.keys(t.extensions).length,
          }));
        for (var d of Object.entries(t.extensions)) {
          var m = d[0],
            p = d[1];
          (n.writeString(m), n.writeString(p));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (
        (t.sequenceNumber != null &&
          (n.writeFieldBegin({
            fname: "sequenceNumber",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 8,
          }),
          n.writeI64(BigInt(t.sequenceNumber)),
          n.writeFieldEnd()),
        t.clientSessionId != null &&
          (n.writeFieldBegin({
            fname: "clientSessionId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 9,
          }),
          n.writeString(t.clientSessionId),
          n.writeFieldEnd()),
        t.responseStatusMessage != null &&
          (n.writeFieldBegin({
            fname: "responseStatusMessage",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 10,
          }),
          n.writeString(t.responseStatusMessage),
          n.writeFieldEnd()),
        t.responseSubCode != null)
      ) {
        var _;
        (n.writeFieldBegin({
          fname: "responseSubCode",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 11,
        }),
          n.writeI32((_ = t.responseSubCode) != null ? _ : 0),
          n.writeFieldEnd());
      }
      if (
        (t.collisionKey != null &&
          (n.writeFieldBegin({
            fname: "collisionKey",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 12,
          }),
          n.writeString(t.collisionKey),
          n.writeFieldEnd()),
        t.conferenceType != null)
      ) {
        var f;
        (n.writeFieldBegin({
          fname: "conferenceType",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 13,
        }),
          n.writeI32((f = t.conferenceType) != null ? f : 0),
          n.writeFieldEnd());
      }
      if (
        (t.serverSessionId != null &&
          (n.writeFieldBegin({
            fname: "serverSessionId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 14,
          }),
          n.writeString(t.serverSessionId),
          n.writeFieldEnd()),
        t.rtcHandle != null &&
          (n.writeFieldBegin({
            fname: "rtcHandle",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 15,
          }),
          n.writeString(t.rtcHandle),
          n.writeFieldEnd()),
        t.retryAfterMsec != null &&
          (n.writeFieldBegin({
            fname: "retryAfterMsec",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 16,
          }),
          n.writeI32(t.retryAfterMsec),
          n.writeFieldEnd()),
        t.receiverUserId != null &&
          (n.writeFieldBegin({
            fname: "receiverUserId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 17,
          }),
          n.writeString(t.receiverUserId),
          n.writeFieldEnd()),
        t.clientStack != null)
      ) {
        var g;
        (n.writeFieldBegin({
          fname: "clientStack",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 18,
        }),
          n.writeI32((g = t.clientStack) != null ? g : 0),
          n.writeFieldEnd());
      }
      if (
        (t.serverMsgTime != null &&
          (n.writeFieldBegin({
            fname: "serverMsgTime",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 19,
          }),
          n.writeI64(BigInt(t.serverMsgTime)),
          n.writeFieldEnd()),
        t.sender != null &&
          (n.writeFieldBegin({
            fname: "sender",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 20,
          }),
          at(t.sender, n),
          n.writeFieldEnd()),
        t.receiver != null &&
          (n.writeFieldBegin({
            fname: "receiver",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 21,
          }),
          it(t.receiver, n),
          n.writeFieldEnd()),
        t.messageTags != null)
      ) {
        (n.writeFieldBegin({
          fname: "messageTags",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 22,
        }),
          n.writeSetBegin({ etype: e.I32, size: t.messageTags.size }));
        for (var h of t.messageTags) n.writeI32(h != null ? h : 0);
        (n.writeSetEnd(), n.writeFieldEnd());
      }
      (t.conferenceId != null &&
        (n.writeFieldBegin({
          fname: "conferenceId",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 23,
        }),
        n.writeI64(BigInt(t.conferenceId)),
        n.writeFieldEnd()),
        t.protocolVersion != null &&
          (n.writeFieldBegin({
            fname: "protocolVersion",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 24,
          }),
          n.writeI32(t.protocolVersion),
          n.writeFieldEnd()),
        t.bodyCompressionVersion != null &&
          (n.writeFieldBegin({
            fname: "bodyCompressionVersion",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 25,
          }),
          n.writeI64(BigInt(t.bodyCompressionVersion)),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function st(t, n) {
      (n.writeStructBegin("RtcMessageBody"),
        t.joinRequest != null &&
          (n.writeFieldBegin({
            fname: "joinRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          qe(t.joinRequest, n),
          n.writeFieldEnd()),
        t.joinResponse != null &&
          (n.writeFieldBegin({
            fname: "joinResponse",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          Ue(t.joinResponse, n),
          n.writeFieldEnd()),
        t.serverMediaUpdateRequest != null &&
          (n.writeFieldBegin({
            fname: "serverMediaUpdateRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          Re(t.serverMediaUpdateRequest, n),
          n.writeFieldEnd()),
        t.serverMediaUpdateResponse != null &&
          (n.writeFieldBegin({
            fname: "serverMediaUpdateResponse",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 4,
          }),
          Le(t.serverMediaUpdateResponse, n),
          n.writeFieldEnd()),
        t.hangupRequest != null &&
          (n.writeFieldBegin({
            fname: "hangupRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 5,
          }),
          ke(t.hangupRequest, n),
          n.writeFieldEnd()),
        t.iceCandidateRequest != null &&
          (n.writeFieldBegin({
            fname: "iceCandidateRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 6,
          }),
          Ie(t.iceCandidateRequest, n),
          n.writeFieldEnd()),
        t.ringRequest != null &&
          (n.writeFieldBegin({
            fname: "ringRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 8,
          }),
          Qe(t.ringRequest, n),
          n.writeFieldEnd()),
        t.ringResponse != null &&
          (n.writeFieldBegin({
            fname: "ringResponse",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 9,
          }),
          Xe(t.ringResponse, n),
          n.writeFieldEnd()),
        t.dismissRequest != null &&
          (n.writeFieldBegin({
            fname: "dismissRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 10,
          }),
          Te(t.dismissRequest, n),
          n.writeFieldEnd()),
        t.conferenceStateRequest != null &&
          (n.writeFieldBegin({
            fname: "conferenceStateRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 11,
          }),
          Me(t.conferenceStateRequest, n),
          n.writeFieldEnd()),
        t.conferenceStateResponse != null &&
          (n.writeFieldBegin({
            fname: "conferenceStateResponse",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 12,
          }),
          we(t.conferenceStateResponse, n),
          n.writeFieldEnd()),
        t.addParticipantsRequest != null &&
          (n.writeFieldBegin({
            fname: "addParticipantsRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 13,
          }),
          Be(t.addParticipantsRequest, n),
          n.writeFieldEnd()),
        t.subscriptionRequest != null &&
          (n.writeFieldBegin({
            fname: "subscriptionRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 14,
          }),
          Ae(t.subscriptionRequest, n),
          n.writeFieldEnd()),
        t.clientMediaUpdateRequest != null &&
          (n.writeFieldBegin({
            fname: "clientMediaUpdateRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 15,
          }),
          be(t.clientMediaUpdateRequest, n),
          n.writeFieldEnd()),
        t.clientMediaUpdateResponse != null &&
          (n.writeFieldBegin({
            fname: "clientMediaUpdateResponse",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 16,
          }),
          ve(t.clientMediaUpdateResponse, n),
          n.writeFieldEnd()),
        t.dataMessageRequest != null &&
          (n.writeFieldBegin({
            fname: "dataMessageRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 17,
          }),
          Fe(t.dataMessageRequest, n),
          n.writeFieldEnd()),
        t.removeParticipantsRequest != null &&
          (n.writeFieldBegin({
            fname: "removeParticipantsRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 18,
          }),
          Ye(t.removeParticipantsRequest, n),
          n.writeFieldEnd()),
        t.dataMessageResponse != null &&
          (n.writeFieldBegin({
            fname: "dataMessageResponse",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 19,
          }),
          Oe(t.dataMessageResponse, n),
          n.writeFieldEnd()),
        t.updateRequest != null &&
          (n.writeFieldBegin({
            fname: "updateRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 30,
          }),
          et(t.updateRequest, n),
          n.writeFieldEnd()),
        t.updateResponse != null &&
          (n.writeFieldBegin({
            fname: "updateResponse",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 31,
          }),
          tt(t.updateResponse, n),
          n.writeFieldEnd()),
        t.notifyRequest != null &&
          (n.writeFieldBegin({
            fname: "notifyRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 32,
          }),
          nt(t.notifyRequest, n),
          n.writeFieldEnd()),
        t.notifyResponse != null &&
          (n.writeFieldBegin({
            fname: "notifyResponse",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 33,
          }),
          rt(t.notifyResponse, n),
          n.writeFieldEnd()),
        t.connectRequest != null &&
          (n.writeFieldBegin({
            fname: "connectRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 34,
          }),
          Ve(t.connectRequest, n),
          n.writeFieldEnd()),
        t.connectResponse != null &&
          (n.writeFieldBegin({
            fname: "connectResponse",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 35,
          }),
          He(t.connectResponse, n),
          n.writeFieldEnd()),
        t.clientEventRequest != null &&
          (n.writeFieldBegin({
            fname: "clientEventRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 36,
          }),
          ze(t.clientEventRequest, n),
          n.writeFieldEnd()),
        t.clientEventResponse != null &&
          (n.writeFieldBegin({
            fname: "clientEventResponse",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 37,
          }),
          Ke(t.clientEventResponse, n),
          n.writeFieldEnd()),
        t.unsubscribeRequest != null &&
          (n.writeFieldBegin({
            fname: "unsubscribeRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 40,
          }),
          Je(t.unsubscribeRequest, n),
          n.writeFieldEnd()),
        t.unsubscribeResponse != null &&
          (n.writeFieldBegin({
            fname: "unsubscribeResponse",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 41,
          }),
          Ze(t.unsubscribeResponse, n),
          n.writeFieldEnd()),
        t.approvalRequest != null &&
          (n.writeFieldBegin({
            fname: "approvalRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 42,
          }),
          ot(t.approvalRequest, n),
          n.writeFieldEnd()),
        t.transferRequest != null &&
          (n.writeFieldBegin({
            fname: "transferRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 43,
          }),
          Ee(t.transferRequest, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ut(t, n) {
      if (
        (n.writeStructBegin("RtcMultiwayMessage"),
        n.writeFieldBegin({
          fname: "messageHeader",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.messageHeader != null)
      )
        lt(t.messageHeader, n);
      else {
        var o = ae();
        lt(o, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "messageBody", ftype: e.STRUCT, fid: 2 }),
        t.messageBody != null)
      )
        st(t.messageBody, n);
      else {
        var a = ie();
        st(a, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function ct(t, n) {
      if (
        (n.writeStructBegin("GroupOfUsers"),
        n.writeFieldBegin({
          fname: "users",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 1,
        }),
        t.users != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.users.size,
        });
        for (var o of t.users) n.writeString(o);
        n.writeSetEnd();
      } else {
        var a = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: a.size,
        });
        for (var i of a) n.writeString(i);
        n.writeSetEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "allowMultipleJoins",
          ftype: e.BOOL,
          fid: 2,
        }),
        t.allowMultipleJoins != null)
      )
        n.writeBool(t.allowMultipleJoins);
      else {
        var l = !1;
        n.writeBool(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "dismissOthersOnFirstJoin",
          ftype: e.BOOL,
          fid: 3,
        }),
        t.dismissOthersOnFirstJoin != null)
      )
        n.writeBool(t.dismissOthersOnFirstJoin);
      else {
        var s = !1;
        n.writeBool(s);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "aliasId", ftype: e.STRING, fid: 4 }),
        t.aliasId != null)
      )
        n.writeString(t.aliasId);
      else {
        var u = "";
        n.writeString(u);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function dt(t, n) {
      if (
        (n.writeStructBegin("RtcMessageBodyVariant"), t.joinRequest != null)
      ) {
        (n.writeFieldBegin({
          fname: "joinRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
          qe(t.joinRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.joinResponse != null) {
        (n.writeFieldBegin({
          fname: "joinResponse",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 2,
        }),
          Ue(t.joinResponse, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.serverMediaUpdateRequest != null) {
        (n.writeFieldBegin({
          fname: "serverMediaUpdateRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 3,
        }),
          Re(t.serverMediaUpdateRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.serverMediaUpdateResponse != null) {
        (n.writeFieldBegin({
          fname: "serverMediaUpdateResponse",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 4,
        }),
          Le(t.serverMediaUpdateResponse, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.hangupRequest != null) {
        (n.writeFieldBegin({
          fname: "hangupRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 5,
        }),
          ke(t.hangupRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.iceCandidateRequest != null) {
        (n.writeFieldBegin({
          fname: "iceCandidateRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 6,
        }),
          Ie(t.iceCandidateRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.ringRequest != null) {
        (n.writeFieldBegin({
          fname: "ringRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 8,
        }),
          Qe(t.ringRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.ringResponse != null) {
        (n.writeFieldBegin({
          fname: "ringResponse",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 9,
        }),
          Xe(t.ringResponse, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.dismissRequest != null) {
        (n.writeFieldBegin({
          fname: "dismissRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 10,
        }),
          Te(t.dismissRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.conferenceStateRequest != null) {
        (n.writeFieldBegin({
          fname: "conferenceStateRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 11,
        }),
          Me(t.conferenceStateRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.conferenceStateResponse != null) {
        (n.writeFieldBegin({
          fname: "conferenceStateResponse",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 12,
        }),
          we(t.conferenceStateResponse, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.addParticipantsRequest != null) {
        (n.writeFieldBegin({
          fname: "addParticipantsRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 13,
        }),
          Be(t.addParticipantsRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.subscriptionRequest != null) {
        (n.writeFieldBegin({
          fname: "subscriptionRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 14,
        }),
          Ae(t.subscriptionRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.clientMediaUpdateRequest != null) {
        (n.writeFieldBegin({
          fname: "clientMediaUpdateRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 15,
        }),
          be(t.clientMediaUpdateRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.clientMediaUpdateResponse != null) {
        (n.writeFieldBegin({
          fname: "clientMediaUpdateResponse",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 16,
        }),
          ve(t.clientMediaUpdateResponse, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.dataMessageRequest != null) {
        (n.writeFieldBegin({
          fname: "dataMessageRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 17,
        }),
          Fe(t.dataMessageRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.removeParticipantsRequest != null) {
        (n.writeFieldBegin({
          fname: "removeParticipantsRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 18,
        }),
          Ye(t.removeParticipantsRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.dataMessageResponse != null) {
        (n.writeFieldBegin({
          fname: "dataMessageResponse",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 19,
        }),
          Oe(t.dataMessageResponse, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.updateRequest != null) {
        (n.writeFieldBegin({
          fname: "updateRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 30,
        }),
          et(t.updateRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.updateResponse != null) {
        (n.writeFieldBegin({
          fname: "updateResponse",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 31,
        }),
          tt(t.updateResponse, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.notifyRequest != null) {
        (n.writeFieldBegin({
          fname: "notifyRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 32,
        }),
          nt(t.notifyRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.notifyResponse != null) {
        (n.writeFieldBegin({
          fname: "notifyResponse",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 33,
        }),
          rt(t.notifyResponse, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.connectRequest != null) {
        (n.writeFieldBegin({
          fname: "connectRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 34,
        }),
          Ve(t.connectRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.connectResponse != null) {
        (n.writeFieldBegin({
          fname: "connectResponse",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 35,
        }),
          He(t.connectResponse, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.clientEventRequest != null) {
        (n.writeFieldBegin({
          fname: "clientEventRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 36,
        }),
          ze(t.clientEventRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.clientEventResponse != null) {
        (n.writeFieldBegin({
          fname: "clientEventResponse",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 37,
        }),
          Ke(t.clientEventResponse, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.unsubscribeRequest != null) {
        (n.writeFieldBegin({
          fname: "unsubscribeRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 40,
        }),
          Je(t.unsubscribeRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.unsubscribeResponse != null) {
        (n.writeFieldBegin({
          fname: "unsubscribeResponse",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 41,
        }),
          Ze(t.unsubscribeResponse, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.approvalRequest != null) {
        (n.writeFieldBegin({
          fname: "approvalRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 42,
        }),
          ot(t.approvalRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.transferRequest != null) {
        (n.writeFieldBegin({
          fname: "transferRequest",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 43,
        }),
          Ee(t.transferRequest, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function mt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.message = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.responseStatusCode = o(
                  "MultiwayCommonTypes",
                ).RtcResponseStatusCode.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.responseSubCode = o(
                  "MultiwayCommonTypes",
                ).RtcResponseSubCode.cast(t.readI32()))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.apiStatusCode = o(
                  "MultiwayCommonTypes",
                ).RtcApiStatusCode.cast(t.readI32()))
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.rtcLogSeverity = o(
                  "MultiwayCommonTypes",
                ).RtcLogSeverity.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.message === void 0 && (n.message = ""),
        n.responseStatusCode === void 0 &&
          (n.responseStatusCode = o(
            "MultiwayCommonTypes",
          ).RtcResponseStatusCode.cast(0)),
        n.responseSubCode === void 0 &&
          (n.responseSubCode = o("MultiwayCommonTypes").RtcResponseSubCode.cast(
            0,
          )),
        n.apiStatusCode === void 0 &&
          (n.apiStatusCode = o("MultiwayCommonTypes").RtcApiStatusCode.cast(0)),
        n.rtcLogSeverity === void 0 &&
          (n.rtcLogSeverity = o("MultiwayCommonTypes").RtcLogSeverity.cast(0)),
        n
      );
    }
    function pt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sdpString = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.sdpCompressionVersion = t.readI64().toString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sdpCompressedData = t.readBinary())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function _t(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.media = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readI32(),
                  c = ft(t);
                n.media[u] = c;
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.media === void 0 && (n.media = {}), n);
    }
    function ft(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.body = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.msid = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.mid = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.body === void 0 && (n.body = ""),
        n.msid === void 0 && (n.msid = ""),
        n.mid === void 0 && (n.mid = ""),
        n
      );
    }
    function gt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sourceKey = t.readString())
              : t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.media = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = o("MultiwaySharedSerializers").deserializeMedia(t);
                n.media.push(c);
              }
            } else t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.ssrcGroups = [];
              for (var d = t.readListBegin(), m = 0; m < d.size; m++) {
                var p = o("MultiwaySharedSerializers").deserializeSsrcGroup(t);
                n.ssrcGroups.push(p);
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
        n.sourceKey === void 0 && (n.sourceKey = ""),
        n.media === void 0 && (n.media = []),
        n.ssrcGroups === void 0 && (n.ssrcGroups = []),
        n
      );
    }
    function ht(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.mediaStatus = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                var c = t.readString(),
                  d = t.readBool();
                n.mediaStatus[c] = d;
              }
            } else t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.mediaStatusEx = o(
                  "MultiwaySharedSerializers",
                ).deserializeClientMediaStatus(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.mediaStatus === void 0 && (n.mediaStatus = {}),
        n
      );
    }
    function yt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.candidateSdpString = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.sdpMLineIndex = t.readI64().toString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sdpMid = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.sdpMLineIndex === void 0 && (n.sdpMLineIndex = "0"),
        n.sdpMid === void 0 && (n.sdpMid = ""),
        n
      );
    }
    function Ct(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.stateStore = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                var c = t.readString(),
                  d = o("StateSyncSerializers").deserializeState(t);
                n.stateStore[c] = d;
              }
            } else t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.stateStoreV2 = {};
              for (var m = t.readMapBegin(), p = 0; p < m.size; p++) {
                var _ = o("StateSyncTopicsConfigTypes").TopicId.cast(
                    t.readI32(),
                  ),
                  f = o("StateSyncSerializers").deserializeState(t);
                _ != null && (n.stateStoreV2[_] = f);
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
        n.stateStore === void 0 && (n.stateStore = {}),
        n.stateStoreV2 === void 0 && (n.stateStoreV2 = {}),
        n
      );
    }
    function bt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.version = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.version === void 0 && (n.version = 0), n);
    }
    function vt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.encryptedTopic = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.encryptedData = t.readBinary())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.senderId = t.readBinary())
              : t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.targetIds = new Set();
              for (var s = t.readSetBegin(), u = 0; u < s.size; u++) {
                var c = o("Utf8ToString").Utf8ToString(t.readBinary());
                n.targetIds.add(c);
              }
            } else t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.messageType = o(
                  "MultiwayCommonTypes",
                ).E2eeDataMessageType.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.encryptedTopic === void 0 && (n.encryptedTopic = ""),
        n.encryptedData === void 0 && (n.encryptedData = Uint8Array.of()),
        n.senderId === void 0 && (n.senderId = Uint8Array.of()),
        n.messageType === void 0 &&
          (n.messageType = o("MultiwayCommonTypes").E2eeDataMessageType.cast(
            0,
          )),
        n
      );
    }
    function St(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.fromVersion = t.readI64().toString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.toVersion = t.readI64().toString())
              : t.skip(a);
            break;
          case 3:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.mediaUpdates = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = ht(t);
                n.mediaUpdates.push(u);
              }
            } else t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.offer = pt(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.fromVersion === void 0 && (n.fromVersion = "0"),
        n.toVersion === void 0 && (n.toVersion = "0"),
        n.mediaUpdates === void 0 && (n.mediaUpdates = []),
        n
      );
    }
    function Rt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.currentVersion = t.readI64().toString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.answer = pt(t))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.mediaStatus = o(
                  "MultiwaySharedSerializers",
                ).deserializeClientMediaStatus(t))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sdpOriginLocalId = t.readString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.renegotiationOffer = pt(t))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.mediaPath = o("MultiwaySharedTypes").MediaPath.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 7:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.stateStore = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                var c = t.readString(),
                  d = o("StateSyncSerializers").deserializeState(t);
                n.stateStore[c] = d;
              }
            } else t.skip(i);
            break;
          case 8:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.stateStoreV2 = {};
              for (var m = t.readMapBegin(), p = 0; p < m.size; p++) {
                var _ = o("StateSyncTopicsConfigTypes").TopicId.cast(
                    t.readI32(),
                  ),
                  f = o("StateSyncSerializers").deserializeState(t);
                _ != null && (n.stateStoreV2[_] = f);
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
        n.currentVersion === void 0 && (n.currentVersion = "0"),
        n.mediaPath === void 0 &&
          (n.mediaPath = o("MultiwaySharedTypes").MediaPath.cast(0)),
        n
      );
    }
    function Lt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.callerUserId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.calleeUserId = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sessionId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.callerUserId === void 0 && (n.callerUserId = ""),
        n.calleeUserId === void 0 && (n.calleeUserId = ""),
        n.sessionId === void 0 && (n.sessionId = ""),
        n
      );
    }
    function Et(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.fromVersion = t.readI64().toString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.toVersion = t.readI64().toString())
              : t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.mediaUpdates = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = gt(t);
                n.mediaUpdates.push(c);
              }
            } else t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.offer = pt(t))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.answer = pt(t))
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.mediaStatus = o(
                  "MultiwaySharedSerializers",
                ).deserializeClientMediaStatus(t))
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.renegotiationRequested = t.readBool())
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.prAnswer = pt(t))
              : t.skip(i);
            break;
          case 10:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.stateStore = {};
              for (var d = t.readMapBegin(), m = 0; m < d.size; m++) {
                var p = t.readString(),
                  _ = o("StateSyncSerializers").deserializeState(t);
                n.stateStore[p] = _;
              }
            } else t.skip(i);
            break;
          case 11:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sdpOriginLocalId = t.readString())
              : t.skip(i);
            break;
          case 12:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.multipleRelaysParameters = Lt(t))
              : t.skip(i);
            break;
          case 13:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.multipleVideoStreamsAllowed = t.readBool())
              : t.skip(i);
            break;
          case 14:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.renegotiationOffer = pt(t))
              : t.skip(i);
            break;
          case 15:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.mediaPath = o("MultiwaySharedTypes").MediaPath.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 16:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.update = _t(t))
              : t.skip(i);
            break;
          case 17:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.screenShareStreamAllowed = t.readBool())
              : t.skip(i);
            break;
          case 18:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.stateStoreV2 = {};
              for (var f = t.readMapBegin(), g = 0; g < f.size; g++) {
                var h = o("StateSyncTopicsConfigTypes").TopicId.cast(
                    t.readI32(),
                  ),
                  y = o("StateSyncSerializers").deserializeState(t);
                h != null && (n.stateStoreV2[h] = y);
              }
            } else t.skip(i);
            break;
          case 19:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.allowedCustomVideoContentTypes = new Set();
              for (var C = t.readSetBegin(), b = 0; b < C.size; b++) {
                var v = o(
                  "WebrtcSignalingCommonTypes",
                ).CustomVideoContentType.cast(t.readI32());
                n.allowedCustomVideoContentTypes.add(v);
              }
            } else t.skip(i);
            break;
          case 20:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.relayInfo = o(
                  "MultiwaySharedSerializers",
                ).deserializeRelayInfo(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.fromVersion === void 0 && (n.fromVersion = "0"),
        n.toVersion === void 0 && (n.toVersion = "0"),
        n.mediaUpdates === void 0 && (n.mediaUpdates = []),
        n.renegotiationRequested === void 0 && (n.renegotiationRequested = !1),
        n.multipleVideoStreamsAllowed === void 0 &&
          (n.multipleVideoStreamsAllowed = !1),
        n.mediaPath === void 0 &&
          (n.mediaPath = o("MultiwaySharedTypes").MediaPath.cast(0)),
        n.screenShareStreamAllowed === void 0 &&
          (n.screenShareStreamAllowed = !1),
        n
      );
    }
    function kt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.currentVersion = t.readI64().toString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.answer = pt(t))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.mediaStatus = o(
                  "MultiwaySharedSerializers",
                ).deserializeClientMediaStatus(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.currentVersion === void 0 && (n.currentVersion = "0"),
        n
      );
    }
    function It(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        (t.skip(a), t.readFieldEnd());
      }
      return (t.readStructEnd(), n);
    }
    function Tt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.reason = o("MultiwayCommonTypes").HangupReason.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.detailedReasonString = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.reason === void 0 &&
          (n.reason = o("MultiwayCommonTypes").HangupReason.cast(0)),
        n.detailedReasonString === void 0 && (n.detailedReasonString = ""),
        n
      );
    }
    function Dt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.iceCandidateSdps = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = yt(t);
                n.iceCandidateSdps.push(u);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.iceCandidateSdps === void 0 && (n.iceCandidateSdps = []),
        n
      );
    }
    function xt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.reason = o("MultiwayCommonTypes").DismissReason.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.detailedReasonString = t.readString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.callabilityResultErrorCode = t.readI64().toString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.reason === void 0 &&
          (n.reason = o("MultiwayCommonTypes").DismissReason.cast(0)),
        n.detailedReasonString === void 0 && (n.detailedReasonString = ""),
        n
      );
    }
    function $t(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.joinMode = o("MultiwayCommonTypes").JoinMode.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.joinMode === void 0 &&
          (n.joinMode = o("MultiwayCommonTypes").JoinMode.cast(0)),
        n
      );
    }
    function Pt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.state = o("MultiwayCommonTypes").ParticipantCallState.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.userCapabilities = t.readBinary())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.sctpNodeId = t.readI64().toString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.state === void 0 &&
          (n.state = o("MultiwayCommonTypes").ParticipantCallState.cast(0)),
        n
      );
    }
    function Nt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.userCountry = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Mt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.name = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.profilePictureUri = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.aliasId = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.thirdPartyId = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.groupId = t.readString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.avatarImageUri = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function wt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.callerInfo = Mt(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.liveBroadcastId = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.callingTags = t.readI32())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.backingIdentifier = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function At(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.version = t.readI64().toString())
              : t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.participantStates = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                var c = t.readString(),
                  d = Pt(t);
                n.participantStates[c] = d;
              }
            } else t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.userProfiles = {};
              for (var m = t.readMapBegin(), p = 0; p < m.size; p++) {
                var _ = t.readString(),
                  f = Mt(t);
                n.userProfiles[_] = f;
              }
            } else t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.appMessages = [];
              for (var g = t.readListBegin(), h = 0; h < g.size; h++) {
                var y = o("DataMessageSerializers").deserializeDataMessage(t);
                n.appMessages.push(y);
              }
            } else t.skip(i);
            break;
          case 5:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.groupsOfUsers = [];
              for (var C = t.readListBegin(), b = 0; b < C.size; b++) {
                var v = pn(t);
                n.groupsOfUsers.push(v);
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
        n.version === void 0 && (n.version = "0"),
        n.participantStates === void 0 && (n.participantStates = {}),
        n.groupsOfUsers === void 0 && (n.groupsOfUsers = []),
        n
      );
    }
    function Ft(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.currentVersion = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.currentVersion === void 0 && (n.currentVersion = "0"),
        n
      );
    }
    function Ot(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.subscriptions = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = o("MultiwaySharedSerializers").deserializeSubscription(
                  t,
                );
                n.subscriptions.push(c);
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
        n.subscriptions === void 0 && (n.subscriptions = []),
        n
      );
    }
    function Bt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.message = o("DataMessageSerializers").deserializeDataMessage(
                  t,
                ))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.message === void 0 &&
          (n.message = o(
            "DataMessageSerializers",
          ).DataMessage$DefaultConstructor()),
        n
      );
    }
    function Wt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.deliveryResult = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                var c = t.readString(),
                  d = o("DataMessageTypes").DataMessageStatusCode.cast(
                    t.readI32(),
                  );
                n.deliveryResult[c] = d;
              }
            } else t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.serviceTypeDeliveryResult = {};
              for (var m = t.readMapBegin(), p = 0; p < m.size; p++) {
                var _ = o("MultiwaySharedTypes").EndpointServiceType.cast(
                    t.readI32(),
                  ),
                  f = o("DataMessageTypes").DataMessageStatusCode.cast(
                    t.readI32(),
                  );
                _ != null && (n.serviceTypeDeliveryResult[_] = f);
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
        n.deliveryResult === void 0 && (n.deliveryResult = {}),
        n
      );
    }
    function qt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.usersToInvite = new Set();
              for (var s = t.readSetBegin(), u = 0; u < s.size; u++) {
                var c = t.readString();
                n.usersToInvite.add(c);
              }
            } else t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.appMessages = [];
              for (var d = t.readListBegin(), m = 0; m < d.size; m++) {
                var p = o("DataMessageSerializers").deserializeDataMessage(t);
                n.appMessages.push(p);
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
        n.usersToInvite === void 0 && (n.usersToInvite = new Set()),
        n
      );
    }
    function Ut(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.smcTier = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.region = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isUsfu = t.readBool())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isEdge = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.smcTier === void 0 && (n.smcTier = ""),
        n.region === void 0 && (n.region = ""),
        n.isUsfu === void 0 && (n.isUsfu = !1),
        n.isEdge === void 0 && (n.isEdge = !1),
        n
      );
    }
    function Vt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.offer = pt(t))
              : t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.deviceCapabilities = new Set();
              for (var s = t.readSetBegin(), c = 0; c < s.size; c++) {
                var d = o("MultiwayCommonTypes").Capability.cast(t.readI32());
                n.deviceCapabilities.add(d);
              }
            } else t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.usersToCall = new Set();
              for (var m = t.readSetBegin(), p = 0; p < m.size; p++) {
                var _ = t.readString();
                n.usersToCall.add(_);
              }
            } else t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.mediaStatus = {};
              for (var f = t.readMapBegin(), g = 0; g < f.size; g++) {
                var h = t.readString(),
                  y = t.readBool();
                n.mediaStatus[h] = y;
              }
            } else t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.userCapabilities = t.readBinary())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.supportedExperiments = t.readString())
              : t.skip(i);
            break;
          case 9:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.appMessages = [];
              for (var C = t.readListBegin(), b = 0; b < C.size; b++) {
                var v = o("DataMessageSerializers").deserializeDataMessage(t);
                n.appMessages.push(v);
              }
            } else t.skip(i);
            break;
          case 10:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.userToEscalate = t.readString())
              : t.skip(i);
            break;
          case 11:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.escalatingCallId = t.readI64().toString())
              : t.skip(i);
            break;
          case 12:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.conferenceType = o(
                  "MultiwaySharedTypes",
                ).ConferenceType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 13:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.mediaStatusEx = o(
                  "MultiwaySharedSerializers",
                ).deserializeClientMediaStatus(t))
              : t.skip(i);
            break;
          case 14:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.answer = pt(t))
              : t.skip(i);
            break;
          case 15:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.syncPayload = Ct(t))
              : t.skip(i);
            break;
          case 16:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.usersToApproveFromWaitingRoom = new Set();
              for (var S = t.readSetBegin(), R = 0; R < S.size; R++) {
                var L = t.readString();
                n.usersToApproveFromWaitingRoom.add(L);
              }
            } else t.skip(i);
            break;
          case 17:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.e2eeEnforcement = o(
                  "MultiwaySharedSerializers",
                ).deserializeE2eeEnforcement(t))
              : t.skip(i);
            break;
          case 18:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.sfuAllocation = Ut(t))
              : t.skip(i);
            break;
          case 19:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.clientMediaMode = o("MultiwaySharedTypes").MediaPath.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 20:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.endpointSettings = $t(t))
              : t.skip(i);
            break;
          case 21:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.backupSfuAllocation = Ut(t))
              : t.skip(i);
            break;
          case 22:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.supportedCustomVideoContentTypes = new Set();
              for (var E = t.readSetBegin(), k = 0; k < E.size; k++) {
                var I = o(
                  "WebrtcSignalingCommonTypes",
                ).CustomVideoContentType.cast(t.readI32());
                n.supportedCustomVideoContentTypes.add(I);
              }
            } else t.skip(i);
            break;
          case 23:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.configIntegrityOpaqueToken = t.readI32())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.offer === void 0 && (n.offer = u()),
        n.deviceCapabilities === void 0 && (n.deviceCapabilities = new Set()),
        n
      );
    }
    function Ht(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.answer = pt(t))
              : t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.mediaStatus = {};
              for (var s = t.readMapBegin(), c = 0; c < s.size; c++) {
                var d = t.readString(),
                  m = t.readBool();
                n.mediaStatus[d] = m;
              }
            } else t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.initiator = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.negotiatedExperiments = t.readString())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.mediaStatusEx = o(
                  "MultiwaySharedSerializers",
                ).deserializeClientMediaStatus(t))
              : t.skip(i);
            break;
          case 7:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.appMessages = [];
              for (var p = t.readListBegin(), _ = 0; _ < p.size; _++) {
                var f = o("DataMessageSerializers").deserializeDataMessage(t);
                n.appMessages.push(f);
              }
            } else t.skip(i);
            break;
          case 8:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.stateStore = {};
              for (var g = t.readMapBegin(), h = 0; h < g.size; h++) {
                var y = t.readString(),
                  C = o("StateSyncSerializers").deserializeState(t);
                n.stateStore[y] = C;
              }
            } else t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sdpOriginLocalId = t.readString())
              : t.skip(i);
            break;
          case 10:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isPendingApproval = t.readBool())
              : t.skip(i);
            break;
          case 11:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.renegotiationOffer = pt(t))
              : t.skip(i);
            break;
          case 12:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.multipleVideoStreamsAllowed = t.readBool())
              : t.skip(i);
            break;
          case 13:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.mediaPath = o("MultiwaySharedTypes").MediaPath.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 14:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.groupsOfUsers = [];
              for (var b = t.readListBegin(), v = 0; v < b.size; v++) {
                var S = pn(t);
                n.groupsOfUsers.push(S);
              }
            } else t.skip(i);
            break;
          case 15:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.screenShareStreamAllowed = t.readBool())
              : t.skip(i);
            break;
          case 16:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.relayInfo = o(
                  "MultiwaySharedSerializers",
                ).deserializeRelayInfo(t))
              : t.skip(i);
            break;
          case 17:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.selfSctpNodeId = t.readI64().toString())
              : t.skip(i);
            break;
          case 18:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.stateStoreV2 = {};
              for (var R = t.readMapBegin(), L = 0; L < R.size; L++) {
                var E = o("StateSyncTopicsConfigTypes").TopicId.cast(
                    t.readI32(),
                  ),
                  k = o("StateSyncSerializers").deserializeState(t);
                E != null && (n.stateStoreV2[E] = k);
              }
            } else t.skip(i);
            break;
          case 19:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.allowedCustomVideoContentTypes = new Set();
              for (var I = t.readSetBegin(), T = 0; T < I.size; T++) {
                var D = o(
                  "WebrtcSignalingCommonTypes",
                ).CustomVideoContentType.cast(t.readI32());
                n.allowedCustomVideoContentTypes.add(D);
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
        n.answer === void 0 && (n.answer = u()),
        n.mediaStatus === void 0 && (n.mediaStatus = {}),
        n.initiator === void 0 && (n.initiator = ""),
        n.isPendingApproval === void 0 && (n.isPendingApproval = !1),
        n.multipleVideoStreamsAllowed === void 0 &&
          (n.multipleVideoStreamsAllowed = !1),
        n.mediaPath === void 0 &&
          (n.mediaPath = o("MultiwaySharedTypes").MediaPath.cast(0)),
        n.groupsOfUsers === void 0 && (n.groupsOfUsers = []),
        n.screenShareStreamAllowed === void 0 &&
          (n.screenShareStreamAllowed = !1),
        n
      );
    }
    function Gt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.sdp = pt(t))
              : t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.deviceCapabilities = new Set();
              for (var s = t.readSetBegin(), u = 0; u < s.size; u++) {
                var c = o("MultiwayCommonTypes").Capability.cast(t.readI32());
                n.deviceCapabilities.add(c);
              }
            } else t.skip(i);
            break;
          case 5:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.supportedCustomVideoContentTypes = new Set();
              for (var d = t.readSetBegin(), m = 0; m < d.size; m++) {
                var p = o(
                  "WebrtcSignalingCommonTypes",
                ).CustomVideoContentType.cast(t.readI32());
                n.supportedCustomVideoContentTypes.add(p);
              }
            } else t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.prOffer = pt(t))
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.e2eeEnforcement = o(
                  "MultiwaySharedSerializers",
                ).deserializeE2eeEnforcement(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.deviceCapabilities === void 0 && (n.deviceCapabilities = new Set()),
        n
      );
    }
    function zt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.sdp = pt(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sdpOriginLocalId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function jt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.type = o("MultiwayCommonTypes").ClientEventType.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.time = t.readI64().toString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.type === void 0 &&
          (n.type = o("MultiwayCommonTypes").ClientEventType.cast(0)),
        n
      );
    }
    function Kt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.clientEvents = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = jt(t);
                n.clientEvents.push(u);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.clientEvents === void 0 && (n.clientEvents = []),
        n
      );
    }
    function Qt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.groupThreadId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.peerId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Xt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        (t.skip(a), t.readFieldEnd());
      }
      return (t.readStructEnd(), n);
    }
    function Yt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.caller = t.readString())
              : t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.otherParticipants = new Set();
              for (var s = t.readSetBegin(), u = 0; u < s.size; u++) {
                var c = t.readString();
                n.otherParticipants.add(c);
              }
            } else t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.ringType = o("MultiwayCommonTypes").RingType.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.offeredExperiments = t.readString())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isScheduledCall = t.readBool())
              : t.skip(i);
            break;
          case 8:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.appMessages = [];
              for (var d = t.readListBegin(), m = 0; m < d.size; m++) {
                var p = o("DataMessageSerializers").deserializeDataMessage(t);
                n.appMessages.push(p);
              }
            } else t.skip(i);
            break;
          case 10:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.offer = pt(t))
              : t.skip(i);
            break;
          case 11:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.mediaStatusEx = o(
                  "MultiwaySharedSerializers",
                ).deserializeClientMediaStatus(t))
              : t.skip(i);
            break;
          case 12:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isPreconnectSupported = t.readBool())
              : t.skip(i);
            break;
          case 13:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sdpOriginLocalId = t.readString())
              : t.skip(i);
            break;
          case 14:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.unifiedOffer = pt(t))
              : t.skip(i);
            break;
          case 15:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.mediaPath = o("MultiwaySharedTypes").MediaPath.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 16:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.e2eeEnforcement = o(
                  "MultiwaySharedSerializers",
                ).deserializeE2eeEnforcement(t))
              : t.skip(i);
            break;
          case 17:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isLegacyCall = t.readBool())
              : t.skip(i);
            break;
          case 18:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isTransferCall = t.readBool())
              : t.skip(i);
            break;
          case 20:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.relayInfo = o(
                  "MultiwaySharedSerializers",
                ).deserializeRelayInfo(t))
              : t.skip(i);
            break;
          case 21:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.overlayConfigs = {};
              for (var _ = t.readMapBegin(), f = 0; f < _.size; f++) {
                var g = t.readI32(),
                  h = t.readI32();
                n.overlayConfigs[g] = h;
              }
            } else t.skip(i);
            break;
          case 22:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.productMetadata = wt(t))
              : t.skip(i);
            break;
          case 23:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.callerClientSessionId = t.readString())
              : t.skip(i);
            break;
          case 24:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.threadIdInfo = Qt(t))
              : t.skip(i);
            break;
          case 25:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.linkUrl = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.caller === void 0 && (n.caller = ""),
        n.otherParticipants === void 0 && (n.otherParticipants = new Set()),
        n.ringType === void 0 &&
          (n.ringType = o("MultiwayCommonTypes").RingType.cast(0)),
        n.mediaPath === void 0 &&
          (n.mediaPath = o("MultiwaySharedTypes").MediaPath.cast(0)),
        n.isTransferCall === void 0 && (n.isTransferCall = !1),
        n
      );
    }
    function Jt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.deviceStatus = o("MultiwayCommonTypes").DeviceStatus.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.deviceStatus === void 0 &&
          (n.deviceStatus = o("MultiwayCommonTypes").DeviceStatus.cast(0)),
        n
      );
    }
    function Zt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).SET) {
              n.usersToRemove = new Set();
              for (var l = t.readSetBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.usersToRemove.add(u);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.usersToRemove === void 0 && (n.usersToRemove = new Set()),
        n
      );
    }
    function en(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.topic = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.version = t.readI32())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.topicId = o("StateSyncTopicsConfigTypes").TopicId.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.topic === void 0 && (n.topic = ""),
        n.version === void 0 && (n.version = 0),
        n.topicId === void 0 &&
          (n.topicId = o("StateSyncTopicsConfigTypes").TopicId.cast(0)),
        n
      );
    }
    function tn(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.topic = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.version = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.topic === void 0 && (n.topic = ""),
        n.version === void 0 && (n.version = 0),
        n
      );
    }
    function nn(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.syncPayload = Ct(t))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.topic = t.readString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.version = t.readI32())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.data = t.readBinary())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.topicId = o("StateSyncTopicsConfigTypes").TopicId.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.syncPayload === void 0 && (n.syncPayload = f()),
        n.topic === void 0 && (n.topic = ""),
        n.version === void 0 && (n.version = 0),
        n.topicId === void 0 &&
          (n.topicId = o("StateSyncTopicsConfigTypes").TopicId.cast(0)),
        n
      );
    }
    function rn(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.topic = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.version = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.topic === void 0 && (n.topic = ""),
        n.version === void 0 && (n.version = 0),
        n
      );
    }
    function on(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.topic = t.readString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.version = t.readI32())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.data = t.readBinary())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.syncPayload = Ct(t))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.topicId = o("StateSyncTopicsConfigTypes").TopicId.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.topic === void 0 && (n.topic = ""),
        n.version === void 0 && (n.version = 0),
        n.data === void 0 && (n.data = Uint8Array.of()),
        n
      );
    }
    function an(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.topic = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.version = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.topic === void 0 && (n.topic = ""),
        n.version === void 0 && (n.version = 0),
        n
      );
    }
    function ln(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.approvalStatus = o(
                  "MultiwayCommonTypes",
                ).ApprovalStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.targetUsers = new Set();
              for (var s = t.readSetBegin(), u = 0; u < s.size; u++) {
                var c = t.readString();
                n.targetUsers.add(c);
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
        n.approvalStatus === void 0 &&
          (n.approvalStatus = o("MultiwayCommonTypes").ApprovalStatus.cast(0)),
        n.targetUsers === void 0 && (n.targetUsers = new Set()),
        n
      );
    }
    function sn(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.id = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.id === void 0 && (n.id = ""), n);
    }
    function un(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.actorId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.baseId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.actorId === void 0 && (n.actorId = ""),
        n.baseId === void 0 && (n.baseId = ""),
        n
      );
    }
    function cn(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.type = o("MultiwayCommonTypes").MessageType.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.conferenceName = t.readString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.transactionId = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I16
              ? (n.retryCount = t.readI16())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.serverInfoData = t.readString())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.responseStatusCode = o(
                  "MultiwayCommonTypes",
                ).RtcResponseStatusCode.cast(t.readI32()))
              : t.skip(i);
            break;
          case 7:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.extensions = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                var c = t.readString(),
                  d = t.readString();
                n.extensions[c] = d;
              }
            } else t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.sequenceNumber = t.readI64().toString())
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.clientSessionId = t.readString())
              : t.skip(i);
            break;
          case 10:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.responseStatusMessage = t.readString())
              : t.skip(i);
            break;
          case 11:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.responseSubCode = o(
                  "MultiwayCommonTypes",
                ).RtcResponseSubCode.cast(t.readI32()))
              : t.skip(i);
            break;
          case 12:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.collisionKey = t.readString())
              : t.skip(i);
            break;
          case 13:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.conferenceType = o(
                  "MultiwaySharedTypes",
                ).ConferenceType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 14:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.serverSessionId = t.readString())
              : t.skip(i);
            break;
          case 15:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.rtcHandle = t.readString())
              : t.skip(i);
            break;
          case 16:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.retryAfterMsec = t.readI32())
              : t.skip(i);
            break;
          case 17:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.receiverUserId = t.readString())
              : t.skip(i);
            break;
          case 18:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.clientStack = o(
                  "WebrtcSignalingCommonTypes",
                ).ClientStack.cast(t.readI32()))
              : t.skip(i);
            break;
          case 19:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.serverMsgTime = t.readI64().toString())
              : t.skip(i);
            break;
          case 20:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.sender = sn(t))
              : t.skip(i);
            break;
          case 21:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.receiver = un(t))
              : t.skip(i);
            break;
          case 22:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.messageTags = new Set();
              for (var m = t.readSetBegin(), p = 0; p < m.size; p++) {
                var _ = o("MultiwayCommonTypes").MessageTag.cast(t.readI32());
                n.messageTags.add(_);
              }
            } else t.skip(i);
            break;
          case 23:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.conferenceId = t.readI64().toString())
              : t.skip(i);
            break;
          case 24:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.protocolVersion = t.readI32())
              : t.skip(i);
            break;
          case 25:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.bodyCompressionVersion = t.readI64().toString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.type === void 0 &&
          (n.type = o("MultiwayCommonTypes").MessageType.cast(0)),
        n.conferenceName === void 0 && (n.conferenceName = ""),
        n.transactionId === void 0 && (n.transactionId = ""),
        n.retryCount === void 0 && (n.retryCount = 0),
        n
      );
    }
    function dn(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.joinRequest = Vt(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.joinResponse = Ht(t))
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.serverMediaUpdateRequest = Et(t))
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.serverMediaUpdateResponse = kt(t))
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.hangupRequest = Tt(t))
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.iceCandidateRequest = Dt(t))
              : t.skip(a);
            break;
          case 8:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.ringRequest = Yt(t))
              : t.skip(a);
            break;
          case 9:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.ringResponse = Jt(t))
              : t.skip(a);
            break;
          case 10:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.dismissRequest = xt(t))
              : t.skip(a);
            break;
          case 11:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.conferenceStateRequest = At(t))
              : t.skip(a);
            break;
          case 12:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.conferenceStateResponse = Ft(t))
              : t.skip(a);
            break;
          case 13:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.addParticipantsRequest = qt(t))
              : t.skip(a);
            break;
          case 14:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.subscriptionRequest = Ot(t))
              : t.skip(a);
            break;
          case 15:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.clientMediaUpdateRequest = St(t))
              : t.skip(a);
            break;
          case 16:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.clientMediaUpdateResponse = Rt(t))
              : t.skip(a);
            break;
          case 17:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.dataMessageRequest = Bt(t))
              : t.skip(a);
            break;
          case 18:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.removeParticipantsRequest = Zt(t))
              : t.skip(a);
            break;
          case 19:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.dataMessageResponse = Wt(t))
              : t.skip(a);
            break;
          case 30:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.updateRequest = nn(t))
              : t.skip(a);
            break;
          case 31:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.updateResponse = rn(t))
              : t.skip(a);
            break;
          case 32:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.notifyRequest = on(t))
              : t.skip(a);
            break;
          case 33:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.notifyResponse = an(t))
              : t.skip(a);
            break;
          case 34:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.connectRequest = Gt(t))
              : t.skip(a);
            break;
          case 35:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.connectResponse = zt(t))
              : t.skip(a);
            break;
          case 36:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.clientEventRequest = Kt(t))
              : t.skip(a);
            break;
          case 37:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.clientEventResponse = Xt(t))
              : t.skip(a);
            break;
          case 40:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.unsubscribeRequest = en(t))
              : t.skip(a);
            break;
          case 41:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.unsubscribeResponse = tn(t))
              : t.skip(a);
            break;
          case 42:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.approvalRequest = ln(t))
              : t.skip(a);
            break;
          case 43:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.transferRequest = It(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function mn(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.messageHeader = cn(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.messageBody = dn(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.messageHeader === void 0 && (n.messageHeader = ae()),
        n.messageBody === void 0 && (n.messageBody = ie()),
        n
      );
    }
    function pn(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).SET) {
              n.users = new Set();
              for (var l = t.readSetBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.users.add(u);
              }
            } else t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.allowMultipleJoins = t.readBool())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.dismissOthersOnFirstJoin = t.readBool())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.aliasId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.users === void 0 && (n.users = new Set()),
        n.allowMultipleJoins === void 0 && (n.allowMultipleJoins = !1),
        n.dismissOthersOnFirstJoin === void 0 &&
          (n.dismissOthersOnFirstJoin = !1),
        n.aliasId === void 0 && (n.aliasId = ""),
        n
      );
    }
    function _n(t) {
      var n,
        o = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((o.joinRequest = Vt(t)), (n = "joinRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: joinRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((o.joinResponse = Ht(t)), (n = "joinResponse"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: joinResponse, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.serverMediaUpdateRequest = Et(t)),
                  (n = "serverMediaUpdateRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: serverMediaUpdateRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.serverMediaUpdateResponse = kt(t)),
                  (n = "serverMediaUpdateResponse"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: serverMediaUpdateResponse, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 5:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((o.hangupRequest = Tt(t)), (n = "hangupRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: hangupRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 6:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.iceCandidateRequest = Dt(t)), (n = "iceCandidateRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: iceCandidateRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 8:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((o.ringRequest = Yt(t)), (n = "ringRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: ringRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 9:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((o.ringResponse = Jt(t)), (n = "ringResponse"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: ringResponse, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 10:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.dismissRequest = xt(t)), (n = "dismissRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: dismissRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 11:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.conferenceStateRequest = At(t)),
                  (n = "conferenceStateRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: conferenceStateRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 12:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.conferenceStateResponse = Ft(t)),
                  (n = "conferenceStateResponse"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: conferenceStateResponse, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 13:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.addParticipantsRequest = qt(t)),
                  (n = "addParticipantsRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: addParticipantsRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 14:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.subscriptionRequest = Ot(t)), (n = "subscriptionRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: subscriptionRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 15:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.clientMediaUpdateRequest = St(t)),
                  (n = "clientMediaUpdateRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: clientMediaUpdateRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 16:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.clientMediaUpdateResponse = Rt(t)),
                  (n = "clientMediaUpdateResponse"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: clientMediaUpdateResponse, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 17:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.dataMessageRequest = Bt(t)), (n = "dataMessageRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: dataMessageRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 18:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.removeParticipantsRequest = Zt(t)),
                  (n = "removeParticipantsRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: removeParticipantsRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 19:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.dataMessageResponse = Wt(t)), (n = "dataMessageResponse"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: dataMessageResponse, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 30:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((o.updateRequest = nn(t)), (n = "updateRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: updateRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 31:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.updateResponse = rn(t)), (n = "updateResponse"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: updateResponse, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 32:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((o.notifyRequest = on(t)), (n = "notifyRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: notifyRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 33:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.notifyResponse = an(t)), (n = "notifyResponse"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: notifyResponse, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 34:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.connectRequest = Gt(t)), (n = "connectRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: connectRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 35:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.connectResponse = zt(t)), (n = "connectResponse"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: connectResponse, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 36:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.clientEventRequest = Kt(t)), (n = "clientEventRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: clientEventRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 37:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.clientEventResponse = Xt(t)), (n = "clientEventResponse"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: clientEventResponse, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 40:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.unsubscribeRequest = en(t)), (n = "unsubscribeRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: unsubscribeRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 41:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.unsubscribeResponse = tn(t)), (n = "unsubscribeResponse"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: unsubscribeResponse, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 42:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.approvalRequest = ln(t)), (n = "approvalRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: approvalRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 43:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.transferRequest = It(t)), (n = "transferRequest"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: RtcMessageBodyVariant; current field: transferRequest, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), o);
    }
    ((l.RtcException$DefaultConstructor = s),
      (l.SessionDescription$DefaultConstructor = u),
      (l.SessionDescriptionUpdate$DefaultConstructor = c),
      (l.MediaDescriptionUpdate$DefaultConstructor = d),
      (l.ServerMediaUpdate$DefaultConstructor = m),
      (l.ClientMediaUpdate$DefaultConstructor = p),
      (l.IceCandidate$DefaultConstructor = _),
      (l.SyncPayload$DefaultConstructor = f),
      (l.SyncAck$DefaultConstructor = g),
      (l.E2eeData$DefaultConstructor = h),
      (l.ClientMediaUpdateRequest$DefaultConstructor = y),
      (l.ClientMediaUpdateResponse$DefaultConstructor = C),
      (l.MultipleRelaysAllocationParameters$DefaultConstructor = b),
      (l.ServerMediaUpdateRequest$DefaultConstructor = v),
      (l.ServerMediaUpdateResponse$DefaultConstructor = S),
      (l.TransferRequest$DefaultConstructor = R),
      (l.HangupRequest$DefaultConstructor = L),
      (l.IceCandidateRequest$DefaultConstructor = E),
      (l.DismissRequest$DefaultConstructor = k),
      (l.EndpointSettings$DefaultConstructor = I),
      (l.ParticipantState$DefaultConstructor = T),
      (l.ServerOnlyParticipantState$DefaultConstructor = D),
      (l.UserProfile$DefaultConstructor = x),
      (l.ProductMetadata$DefaultConstructor = $),
      (l.ConferenceStateRequest$DefaultConstructor = P),
      (l.ConferenceStateResponse$DefaultConstructor = N),
      (l.SubscriptionRequest$DefaultConstructor = M),
      (l.DataMessageRequest$DefaultConstructor = w),
      (l.DataMessageResponse$DefaultConstructor = A),
      (l.AddParticipantsRequest$DefaultConstructor = F),
      (l.SfuAllocation$DefaultConstructor = O),
      (l.JoinRequest$DefaultConstructor = B),
      (l.JoinResponse$DefaultConstructor = W),
      (l.ConnectRequest$DefaultConstructor = q),
      (l.ConnectResponse$DefaultConstructor = U),
      (l.ClientEvent$DefaultConstructor = V),
      (l.ClientEventRequest$DefaultConstructor = H),
      (l.ThreadIdInfo$DefaultConstructor = G),
      (l.ClientEventResponse$DefaultConstructor = z),
      (l.RingRequest$DefaultConstructor = j),
      (l.RingResponse$DefaultConstructor = K),
      (l.RemoveParticipantsRequest$DefaultConstructor = Q),
      (l.UnsubscribeRequest$DefaultConstructor = X),
      (l.UnsubscribeResponse$DefaultConstructor = Y),
      (l.UpdateRequest$DefaultConstructor = J),
      (l.UpdateResponse$DefaultConstructor = Z),
      (l.NotifyRequest$DefaultConstructor = ee),
      (l.NotifyResponse$DefaultConstructor = te),
      (l.ApprovalRequest$DefaultConstructor = ne),
      (l.RtcSender$DefaultConstructor = re),
      (l.RtcReceiver$DefaultConstructor = oe),
      (l.RtcMessageHeader$DefaultConstructor = ae),
      (l.RtcMessageBody$DefaultConstructor = ie),
      (l.RtcMultiwayMessage$DefaultConstructor = le),
      (l.GroupOfUsers$DefaultConstructor = se),
      (l.RtcMessageBodyVariant$DefaultConstructor = ue),
      (l.serializeRtcException = ce),
      (l.serializeSessionDescription = de),
      (l.serializeSessionDescriptionUpdate = me),
      (l.serializeMediaDescriptionUpdate = pe),
      (l.serializeServerMediaUpdate = _e),
      (l.serializeClientMediaUpdate = fe),
      (l.serializeIceCandidate = ge),
      (l.serializeSyncPayload = he),
      (l.serializeSyncAck = ye),
      (l.serializeE2eeData = Ce),
      (l.serializeClientMediaUpdateRequest = be),
      (l.serializeClientMediaUpdateResponse = ve),
      (l.serializeMultipleRelaysAllocationParameters = Se),
      (l.serializeServerMediaUpdateRequest = Re),
      (l.serializeServerMediaUpdateResponse = Le),
      (l.serializeTransferRequest = Ee),
      (l.serializeHangupRequest = ke),
      (l.serializeIceCandidateRequest = Ie),
      (l.serializeDismissRequest = Te),
      (l.serializeEndpointSettings = De),
      (l.serializeParticipantState = xe),
      (l.serializeServerOnlyParticipantState = $e),
      (l.serializeUserProfile = Pe),
      (l.serializeProductMetadata = Ne),
      (l.serializeConferenceStateRequest = Me),
      (l.serializeConferenceStateResponse = we),
      (l.serializeSubscriptionRequest = Ae),
      (l.serializeDataMessageRequest = Fe),
      (l.serializeDataMessageResponse = Oe),
      (l.serializeAddParticipantsRequest = Be),
      (l.serializeSfuAllocation = We),
      (l.serializeJoinRequest = qe),
      (l.serializeJoinResponse = Ue),
      (l.serializeConnectRequest = Ve),
      (l.serializeConnectResponse = He),
      (l.serializeClientEvent = Ge),
      (l.serializeClientEventRequest = ze),
      (l.serializeThreadIdInfo = je),
      (l.serializeClientEventResponse = Ke),
      (l.serializeRingRequest = Qe),
      (l.serializeRingResponse = Xe),
      (l.serializeRemoveParticipantsRequest = Ye),
      (l.serializeUnsubscribeRequest = Je),
      (l.serializeUnsubscribeResponse = Ze),
      (l.serializeUpdateRequest = et),
      (l.serializeUpdateResponse = tt),
      (l.serializeNotifyRequest = nt),
      (l.serializeNotifyResponse = rt),
      (l.serializeApprovalRequest = ot),
      (l.serializeRtcSender = at),
      (l.serializeRtcReceiver = it),
      (l.serializeRtcMessageHeader = lt),
      (l.serializeRtcMessageBody = st),
      (l.serializeRtcMultiwayMessage = ut),
      (l.serializeGroupOfUsers = ct),
      (l.serializeRtcMessageBodyVariant = dt),
      (l.deserializeRtcException = mt),
      (l.deserializeSessionDescription = pt),
      (l.deserializeSessionDescriptionUpdate = _t),
      (l.deserializeMediaDescriptionUpdate = ft),
      (l.deserializeServerMediaUpdate = gt),
      (l.deserializeClientMediaUpdate = ht),
      (l.deserializeIceCandidate = yt),
      (l.deserializeSyncPayload = Ct),
      (l.deserializeSyncAck = bt),
      (l.deserializeE2eeData = vt),
      (l.deserializeClientMediaUpdateRequest = St),
      (l.deserializeClientMediaUpdateResponse = Rt),
      (l.deserializeMultipleRelaysAllocationParameters = Lt),
      (l.deserializeServerMediaUpdateRequest = Et),
      (l.deserializeServerMediaUpdateResponse = kt),
      (l.deserializeTransferRequest = It),
      (l.deserializeHangupRequest = Tt),
      (l.deserializeIceCandidateRequest = Dt),
      (l.deserializeDismissRequest = xt),
      (l.deserializeEndpointSettings = $t),
      (l.deserializeParticipantState = Pt),
      (l.deserializeServerOnlyParticipantState = Nt),
      (l.deserializeUserProfile = Mt),
      (l.deserializeProductMetadata = wt),
      (l.deserializeConferenceStateRequest = At),
      (l.deserializeConferenceStateResponse = Ft),
      (l.deserializeSubscriptionRequest = Ot),
      (l.deserializeDataMessageRequest = Bt),
      (l.deserializeDataMessageResponse = Wt),
      (l.deserializeAddParticipantsRequest = qt),
      (l.deserializeSfuAllocation = Ut),
      (l.deserializeJoinRequest = Vt),
      (l.deserializeJoinResponse = Ht),
      (l.deserializeConnectRequest = Gt),
      (l.deserializeConnectResponse = zt),
      (l.deserializeClientEvent = jt),
      (l.deserializeClientEventRequest = Kt),
      (l.deserializeThreadIdInfo = Qt),
      (l.deserializeClientEventResponse = Xt),
      (l.deserializeRingRequest = Yt),
      (l.deserializeRingResponse = Jt),
      (l.deserializeRemoveParticipantsRequest = Zt),
      (l.deserializeUnsubscribeRequest = en),
      (l.deserializeUnsubscribeResponse = tn),
      (l.deserializeUpdateRequest = nn),
      (l.deserializeUpdateResponse = rn),
      (l.deserializeNotifyRequest = on),
      (l.deserializeNotifyResponse = an),
      (l.deserializeApprovalRequest = ln),
      (l.deserializeRtcSender = sn),
      (l.deserializeRtcReceiver = un),
      (l.deserializeRtcMessageHeader = cn),
      (l.deserializeRtcMessageBody = dn),
      (l.deserializeRtcMultiwayMessage = mn),
      (l.deserializeGroupOfUsers = pn),
      (l.deserializeRtcMessageBodyVariant = _n));
  },
  98,
);
