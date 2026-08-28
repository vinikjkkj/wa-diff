__d(
  "DataMessageSerializers",
  [
    "MultiwaySharedSerializers",
    "MultiwaySharedTypes",
    "ThriftTypes",
    "WebrtcSignalingCommonSerializers",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { topic_DEPRECATED: "" };
    }
    function u() {
      return { userId: "" };
    }
    function c() {
      return { userId: "", cname: "", trackIds: [], transactionId: "0" };
    }
    function d() {
      return {
        cname: "",
        quality_DEPRECATED: o("MultiwaySharedTypes").VideoQuality.cast(0),
      };
    }
    function m() {
      return { userId: "", bottleneckBps: 0 };
    }
    function p() {
      return { bottleneckUplinksByLayer: {} };
    }
    function _() {
      return { duplicationAmount: 0, delayMs: 0 };
    }
    function f() {
      return {};
    }
    function g() {
      return {};
    }
    function h() {
      return { primarySpeakerUserId: "", transactionId: "0" };
    }
    function y() {
      return {};
    }
    function C() {
      return { signalingMessagePayload: Uint8Array.of() };
    }
    function b() {
      return { signalingMessagePayload: Uint8Array.of() };
    }
    function v() {
      return { subscriptionMessagePayload: [] };
    }
    function S() {
      return {};
    }
    function R() {
      return {};
    }
    function L() {
      return { nodeIdToUserIdMap: {}, nodeIdToServiceTypeMap: {} };
    }
    function E() {
      return {};
    }
    function k() {
      return { header: s() };
    }
    function I(t, n) {
      if (
        (n.writeStructBegin("DataHeader"),
        t.sender != null &&
          (n.writeFieldBegin({
            fname: "sender",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.sender),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "topic_DEPRECATED",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 2,
        }),
        t.topic_DEPRECATED != null)
      )
        n.writeString(t.topic_DEPRECATED);
      else {
        var o = "";
        n.writeString(o);
      }
      if ((n.writeFieldEnd(), t.recipients != null)) {
        (n.writeFieldBegin({
          fname: "recipients",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 3,
        }),
          n.writeSetBegin({ etype: e.STRING, size: t.recipients.size }));
        for (var a of t.recipients) n.writeString(a);
        (n.writeSetEnd(), n.writeFieldEnd());
      }
      if (t.serviceSender != null) {
        var i;
        (n.writeFieldBegin({
          fname: "serviceSender",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 4,
        }),
          n.writeI32((i = t.serviceSender) != null ? i : 0),
          n.writeFieldEnd());
      }
      if (t.serviceRecipients != null) {
        (n.writeFieldBegin({
          fname: "serviceRecipients",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 5,
        }),
          n.writeSetBegin({ etype: e.I32, size: t.serviceRecipients.size }));
        for (var l of t.serviceRecipients) n.writeI32(l != null ? l : 0);
        (n.writeSetEnd(), n.writeFieldEnd());
      }
      (t.shouldSendToAllUsers != null &&
        (n.writeFieldBegin({
          fname: "shouldSendToAllUsers",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 6,
        }),
        n.writeBool(t.shouldSendToAllUsers),
        n.writeFieldEnd()),
        t.senderE2eeId != null &&
          (n.writeFieldBegin({
            fname: "senderE2eeId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeBinary(t.senderE2eeId),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function T(t, n) {
      if (
        (n.writeStructBegin("SpeakerDetail"),
        n.writeFieldBegin({
          fname: "userId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.userId != null)
      )
        n.writeString(t.userId);
      else {
        var o = "";
        n.writeString(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function D(t, n) {
      if (
        (n.writeStructBegin("DominantSpeakerNotification"),
        n.writeFieldBegin({
          fname: "userId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.userId != null)
      )
        n.writeString(t.userId);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "cname", ftype: e.STRING, fid: 2 }),
        t.cname != null)
      )
        n.writeString(t.cname);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "trackIds", ftype: e.LIST, fid: 4 }),
        t.trackIds != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.trackIds.length,
        });
        for (var i of t.trackIds) n.writeString(i);
        n.writeListEnd();
      } else {
        var l = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: l.length,
        });
        for (var s of l) n.writeString(s);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "transactionId", ftype: e.I64, fid: 5 }),
        t.transactionId != null)
      )
        n.writeI64(BigInt(t.transactionId));
      else {
        var u = "0";
        n.writeI64(BigInt(u));
      }
      if ((n.writeFieldEnd(), t.dominantSpeakers != null)) {
        (n.writeFieldBegin({
          fname: "dominantSpeakers",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 6,
        }),
          n.writeListBegin({
            etype: e.STRUCT,
            size: t.dominantSpeakers.length,
          }));
        for (var c of t.dominantSpeakers) T(c, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function x(t, n) {
      if (
        (n.writeStructBegin("VideoUploadRequest"),
        n.writeFieldBegin({
          fname: "cname",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.cname != null)
      )
        n.writeString(t.cname);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "quality_DEPRECATED",
          ftype: e.I32,
          fid: 2,
        }),
        t.quality_DEPRECATED != null)
      ) {
        var i;
        n.writeI32((i = t.quality_DEPRECATED) != null ? i : 0);
      } else {
        var l = o("MultiwaySharedTypes").VideoQuality.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.qualityMask != null &&
          (n.writeFieldBegin({
            fname: "qualityMask",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 3,
          }),
          n.writeI32(t.qualityMask),
          n.writeFieldEnd()),
        t.perSsrcTargetBitrateBpsMap != null)
      ) {
        (n.writeFieldBegin({
          fname: "perSsrcTargetBitrateBpsMap",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 4,
        }),
          n.writeMapBegin({
            ktype: e.I64,
            vtype: e.I64,
            size: Object.keys(t.perSsrcTargetBitrateBpsMap).length,
          }));
        for (var s of Object.entries(t.perSsrcTargetBitrateBpsMap)) {
          var u = s[0],
            c = s[1];
          (n.writeI64(BigInt(u)), n.writeI64(BigInt(c)));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function $(t, n) {
      if (
        (n.writeStructBegin("ReceiverBottleneck"),
        n.writeFieldBegin({
          fname: "userId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.userId != null)
      )
        n.writeString(t.userId);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "bottleneckBps", ftype: e.I32, fid: 2 }),
        t.bottleneckBps != null)
      )
        n.writeI32(t.bottleneckBps);
      else {
        var a = 0;
        n.writeI32(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function P(t, n) {
      if (
        (n.writeStructBegin("BweDebugInfo"),
        n.writeFieldBegin({
          fname: "bottleneckUplinksByLayer",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.bottleneckUplinksByLayer != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: Object.keys(t.bottleneckUplinksByLayer).length,
        });
        for (var o of Object.entries(t.bottleneckUplinksByLayer)) {
          var a = o[0],
            i = o[1];
          (n.writeI32(Number(a)), $(i, n));
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
          (n.writeI32(Number(u)), $(c, n));
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function N(t, n) {
      if (
        (n.writeStructBegin("AudioDuplicationDebugInfo"),
        n.writeFieldBegin({
          fname: "duplicationAmount",
          ftype: (e || (e = r("ThriftTypes"))).I16,
          fid: 1,
        }),
        t.duplicationAmount != null)
      )
        n.writeI16(t.duplicationAmount);
      else {
        var o = 0;
        n.writeI16(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "delayMs", ftype: e.I16, fid: 2 }),
        t.delayMs != null)
      )
        n.writeI16(t.delayMs);
      else {
        var a = 0;
        n.writeI16(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function M(t, n) {
      (n.writeStructBegin("ReceiveTrackDebugInfo"),
        t.trackId != null &&
          (n.writeFieldBegin({
            fname: "trackId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.trackId),
          n.writeFieldEnd()),
        t.numSimulcastLayersSupported != null &&
          (n.writeFieldBegin({
            fname: "numSimulcastLayersSupported",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 2,
          }),
          n.writeI32(t.numSimulcastLayersSupported),
          n.writeFieldEnd()),
        t.numSimulcastLayersAllocated != null &&
          (n.writeFieldBegin({
            fname: "numSimulcastLayersAllocated",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 3,
          }),
          n.writeI32(t.numSimulcastLayersAllocated),
          n.writeFieldEnd()),
        t.spatialLayerIndex != null &&
          (n.writeFieldBegin({
            fname: "spatialLayerIndex",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 4,
          }),
          n.writeI32(t.spatialLayerIndex),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function w(t, n) {
      if (
        (n.writeStructBegin("DebugInfo"),
        t.audioDuplicationDebugInfo != null &&
          (n.writeFieldBegin({
            fname: "audioDuplicationDebugInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          N(t.audioDuplicationDebugInfo, n),
          n.writeFieldEnd()),
        t.receiveTrackDebugInfo != null)
      ) {
        (n.writeFieldBegin({
          fname: "receiveTrackDebugInfo",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
          n.writeListBegin({
            etype: e.STRUCT,
            size: t.receiveTrackDebugInfo.length,
          }));
        for (var o of t.receiveTrackDebugInfo) M(o, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function A(t, n) {
      if (
        (n.writeStructBegin("DominantSpeakerInfo"),
        n.writeFieldBegin({
          fname: "primarySpeakerUserId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.primarySpeakerUserId != null)
      )
        n.writeString(t.primarySpeakerUserId);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "transactionId", ftype: e.I64, fid: 2 }),
        t.transactionId != null)
      )
        n.writeI64(BigInt(t.transactionId));
      else {
        var a = "0";
        n.writeI64(BigInt(a));
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function F(t, n) {
      if (
        (n.writeStructBegin("VideoUploadInfo"),
        t.qualityMask != null &&
          (n.writeFieldBegin({
            fname: "qualityMask",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 1,
          }),
          n.writeI32(t.qualityMask),
          n.writeFieldEnd()),
        t.perSsrcTargetBitrateBpsMap != null)
      ) {
        (n.writeFieldBegin({
          fname: "perSsrcTargetBitrateBpsMap",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 2,
        }),
          n.writeMapBegin({
            ktype: e.I64,
            vtype: e.I64,
            size: Object.keys(t.perSsrcTargetBitrateBpsMap).length,
          }));
        for (var o of Object.entries(t.perSsrcTargetBitrateBpsMap)) {
          var a = o[0],
            i = o[1];
          (n.writeI64(BigInt(a)), n.writeI64(BigInt(i)));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function O(t, n) {
      if (
        (n.writeStructBegin("SignalingMessageToClient"),
        n.writeFieldBegin({
          fname: "signalingMessagePayload",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.signalingMessagePayload != null)
      )
        n.writeBinary(t.signalingMessagePayload);
      else {
        var o = Uint8Array.of();
        n.writeBinary(o);
      }
      (n.writeFieldEnd(),
        t.version != null &&
          (n.writeFieldBegin({
            fname: "version",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 2,
          }),
          n.writeI64(BigInt(t.version)),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function B(t, n) {
      if (
        (n.writeStructBegin("SignalingMessageFromClient"),
        n.writeFieldBegin({
          fname: "signalingMessagePayload",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.signalingMessagePayload != null)
      )
        n.writeBinary(t.signalingMessagePayload);
      else {
        var o = Uint8Array.of();
        n.writeBinary(o);
      }
      (n.writeFieldEnd(),
        t.version != null &&
          (n.writeFieldBegin({
            fname: "version",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 2,
          }),
          n.writeI64(BigInt(t.version)),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function W(t, n) {
      if (
        (n.writeStructBegin("SubscriptionMessageFromClient"),
        n.writeFieldBegin({
          fname: "subscriptionMessagePayload",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.subscriptionMessagePayload != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.subscriptionMessagePayload.length,
        });
        for (var a of t.subscriptionMessagePayload)
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
    function q(t, n) {
      if (
        (n.writeStructBegin("RenderResolutionMessageFromClient"),
        t.renderResolutionMap != null)
      ) {
        (n.writeFieldBegin({
          fname: "renderResolutionMap",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.MAP,
            size: Object.keys(t.renderResolutionMap).length,
          }));
        for (var a of Object.entries(t.renderResolutionMap)) {
          var i = a[0],
            l = a[1];
          (n.writeString(i),
            n.writeMapBegin({
              ktype: (e || (e = r("ThriftTypes"))).I32,
              vtype: e.STRUCT,
              size: Object.keys(l).length,
            }));
          for (var s of Object.entries(l)) {
            var u,
              c = s[0],
              d = s[1];
            (n.writeI32((u = Number(c)) != null ? u : 0),
              o("MultiwaySharedSerializers").serializeResolutionData(d, n));
          }
          n.writeMapEnd();
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function U(t, n) {
      if (
        (n.writeStructBegin("RenderResolutionMessageToClient"),
        t.renderResolutionMap != null)
      ) {
        (n.writeFieldBegin({
          fname: "renderResolutionMap",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.MAP,
            size: Object.keys(t.renderResolutionMap).length,
          }));
        for (var a of Object.entries(t.renderResolutionMap)) {
          var i = a[0],
            l = a[1];
          (n.writeString(i),
            n.writeMapBegin({
              ktype: (e || (e = r("ThriftTypes"))).I32,
              vtype: e.STRUCT,
              size: Object.keys(l).length,
            }));
          for (var s of Object.entries(l)) {
            var u,
              c = s[0],
              d = s[1];
            (n.writeI32((u = Number(c)) != null ? u : 0),
              o("MultiwaySharedSerializers").serializeResolutionData(d, n));
          }
          n.writeMapEnd();
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function V(t, n) {
      if (
        (n.writeStructBegin("NodeIdNotification"),
        n.writeFieldBegin({
          fname: "nodeIdToUserIdMap",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.nodeIdToUserIdMap != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I64,
          vtype: e.I64,
          size: Object.keys(t.nodeIdToUserIdMap).length,
        });
        for (var o of Object.entries(t.nodeIdToUserIdMap)) {
          var a = o[0],
            i = o[1];
          (n.writeI64(BigInt(a)), n.writeI64(BigInt(i)));
        }
        n.writeMapEnd();
      } else {
        var l = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I64,
          vtype: e.I64,
          size: Object.keys(l).length,
        });
        for (var s of Object.entries(l)) {
          var u = s[0],
            c = s[1];
          (n.writeI64(BigInt(u)), n.writeI64(BigInt(c)));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "nodeIdToServiceTypeMap",
          ftype: e.MAP,
          fid: 2,
        }),
        t.nodeIdToServiceTypeMap != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I64,
          vtype: e.I32,
          size: Object.keys(t.nodeIdToServiceTypeMap).length,
        });
        for (var d of Object.entries(t.nodeIdToServiceTypeMap)) {
          var m = d[0],
            p = d[1];
          (n.writeI64(BigInt(m)), n.writeI32(p != null ? p : 0));
        }
        n.writeMapEnd();
      } else {
        var _ = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I64,
          vtype: e.I32,
          size: Object.keys(_).length,
        });
        for (var f of Object.entries(_)) {
          var g = f[0],
            h = f[1];
          (n.writeI64(BigInt(g)), n.writeI32(h != null ? h : 0));
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function H(t, n) {
      (n.writeStructBegin("DataMessageBody"),
        t.genericMessage != null &&
          (n.writeFieldBegin({
            fname: "genericMessage",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          o("WebrtcSignalingCommonSerializers").serializeGenericDataMessage(
            t.genericMessage,
            n,
          ),
          n.writeFieldEnd()),
        t.dominantSpeakerNotification != null &&
          (n.writeFieldBegin({
            fname: "dominantSpeakerNotification",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          D(t.dominantSpeakerNotification, n),
          n.writeFieldEnd()),
        t.videoUploadRequest != null &&
          (n.writeFieldBegin({
            fname: "videoUploadRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          x(t.videoUploadRequest, n),
          n.writeFieldEnd()),
        t.dominantSpeakerSignalingInfo != null &&
          (n.writeFieldBegin({
            fname: "dominantSpeakerSignalingInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 4,
          }),
          A(t.dominantSpeakerSignalingInfo, n),
          n.writeFieldEnd()),
        t.bweDebugInfo != null &&
          (n.writeFieldBegin({
            fname: "bweDebugInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 5,
          }),
          P(t.bweDebugInfo, n),
          n.writeFieldEnd()),
        t.debugInfo != null &&
          (n.writeFieldBegin({
            fname: "debugInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 6,
          }),
          w(t.debugInfo, n),
          n.writeFieldEnd()),
        t.videoUploadSignalingInfo != null &&
          (n.writeFieldBegin({
            fname: "videoUploadSignalingInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 7,
          }),
          F(t.videoUploadSignalingInfo, n),
          n.writeFieldEnd()),
        t.signalingMessageToClient != null &&
          (n.writeFieldBegin({
            fname: "signalingMessageToClient",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 8,
          }),
          O(t.signalingMessageToClient, n),
          n.writeFieldEnd()),
        t.signalingMessageFromClient != null &&
          (n.writeFieldBegin({
            fname: "signalingMessageFromClient",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 9,
          }),
          B(t.signalingMessageFromClient, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function G(t, n) {
      if (
        (n.writeStructBegin("DataMessage"),
        n.writeFieldBegin({
          fname: "header",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.header != null)
      )
        I(t.header, n);
      else {
        var o = s();
        I(o, n);
      }
      (n.writeFieldEnd(),
        t.data_DEPRECATED != null &&
          (n.writeFieldBegin({
            fname: "data_DEPRECATED",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeBinary(t.data_DEPRECATED),
          n.writeFieldEnd()),
        t.body != null &&
          (n.writeFieldBegin({
            fname: "body",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          H(t.body, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function z(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sender = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.topic_DEPRECATED = t.readString())
              : t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.recipients = new Set();
              for (var s = t.readSetBegin(), u = 0; u < s.size; u++) {
                var c = t.readString();
                n.recipients.add(c);
              }
            } else t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.serviceSender = o(
                  "MultiwaySharedTypes",
                ).EndpointServiceType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 5:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.serviceRecipients = new Set();
              for (var d = t.readSetBegin(), m = 0; m < d.size; m++) {
                var p = o("MultiwaySharedTypes").EndpointServiceType.cast(
                  t.readI32(),
                );
                n.serviceRecipients.add(p);
              }
            } else t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.shouldSendToAllUsers = t.readBool())
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.senderE2eeId = t.readBinary())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.topic_DEPRECATED === void 0 && (n.topic_DEPRECATED = ""),
        n
      );
    }
    function j(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.userId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.userId === void 0 && (n.userId = ""), n);
    }
    function K(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.userId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.cname = t.readString())
              : t.skip(a);
            break;
          case 4:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.trackIds = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.trackIds.push(u);
              }
            } else t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.transactionId = t.readI64().toString())
              : t.skip(a);
            break;
          case 6:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.dominantSpeakers = [];
              for (var c = t.readListBegin(), d = 0; d < c.size; d++) {
                var m = j(t);
                n.dominantSpeakers.push(m);
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
        n.userId === void 0 && (n.userId = ""),
        n.cname === void 0 && (n.cname = ""),
        n.trackIds === void 0 && (n.trackIds = []),
        n.transactionId === void 0 && (n.transactionId = "0"),
        n
      );
    }
    function Q(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.cname = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.quality_DEPRECATED = o(
                  "MultiwaySharedTypes",
                ).VideoQuality.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.qualityMask = t.readI32())
              : t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.perSsrcTargetBitrateBpsMap = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                var c = t.readI64().toString(),
                  d = t.readI64().toString();
                n.perSsrcTargetBitrateBpsMap[c] = d;
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
        n.cname === void 0 && (n.cname = ""),
        n.quality_DEPRECATED === void 0 &&
          (n.quality_DEPRECATED = o("MultiwaySharedTypes").VideoQuality.cast(
            0,
          )),
        n
      );
    }
    function X(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.userId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.bottleneckBps = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.userId === void 0 && (n.userId = ""),
        n.bottleneckBps === void 0 && (n.bottleneckBps = 0),
        n
      );
    }
    function Y(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.bottleneckUplinksByLayer = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readI32(),
                  c = X(t);
                n.bottleneckUplinksByLayer[u] = c;
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
        n.bottleneckUplinksByLayer === void 0 &&
          (n.bottleneckUplinksByLayer = {}),
        n
      );
    }
    function J(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I16
              ? (n.duplicationAmount = t.readI16())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I16
              ? (n.delayMs = t.readI16())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.duplicationAmount === void 0 && (n.duplicationAmount = 0),
        n.delayMs === void 0 && (n.delayMs = 0),
        n
      );
    }
    function Z(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.trackId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.numSimulcastLayersSupported = t.readI32())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.numSimulcastLayersAllocated = t.readI32())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.spatialLayerIndex = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function ee(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.audioDuplicationDebugInfo = J(t))
              : t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.receiveTrackDebugInfo = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = Z(t);
                n.receiveTrackDebugInfo.push(u);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function te(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.primarySpeakerUserId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.transactionId = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.primarySpeakerUserId === void 0 && (n.primarySpeakerUserId = ""),
        n.transactionId === void 0 && (n.transactionId = "0"),
        n
      );
    }
    function ne(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.qualityMask = t.readI32())
              : t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.perSsrcTargetBitrateBpsMap = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readI64().toString(),
                  c = t.readI64().toString();
                n.perSsrcTargetBitrateBpsMap[u] = c;
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function re(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.signalingMessagePayload = t.readBinary())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.version = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.signalingMessagePayload === void 0 &&
          (n.signalingMessagePayload = Uint8Array.of()),
        n
      );
    }
    function oe(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.signalingMessagePayload = t.readBinary())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.version = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.signalingMessagePayload === void 0 &&
          (n.signalingMessagePayload = Uint8Array.of()),
        n
      );
    }
    function ae(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.subscriptionMessagePayload = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = o("MultiwaySharedSerializers").deserializeSubscription(
                  t,
                );
                n.subscriptionMessagePayload.push(c);
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
        n.subscriptionMessagePayload === void 0 &&
          (n.subscriptionMessagePayload = []),
        n
      );
    }
    function ie(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.renderResolutionMap = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                for (
                  var c = t.readString(), d = {}, m = t.readMapBegin(), p = 0;
                  p < m.size;
                  p++
                ) {
                  var _ = o("MultiwaySharedTypes").RenderedStreamType.cast(
                      t.readI32(),
                    ),
                    f = o(
                      "MultiwaySharedSerializers",
                    ).deserializeResolutionData(t);
                  _ != null && (d[_] = f);
                }
                n.renderResolutionMap[c] = d;
              }
            } else t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function le(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.renderResolutionMap = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                for (
                  var c = t.readString(), d = {}, m = t.readMapBegin(), p = 0;
                  p < m.size;
                  p++
                ) {
                  var _ = o("MultiwaySharedTypes").RenderedStreamType.cast(
                      t.readI32(),
                    ),
                    f = o(
                      "MultiwaySharedSerializers",
                    ).deserializeResolutionData(t);
                  _ != null && (d[_] = f);
                }
                n.renderResolutionMap[c] = d;
              }
            } else t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function se(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.nodeIdToUserIdMap = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                var c = t.readI64().toString(),
                  d = t.readI64().toString();
                n.nodeIdToUserIdMap[c] = d;
              }
            } else t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.nodeIdToServiceTypeMap = {};
              for (var m = t.readMapBegin(), p = 0; p < m.size; p++) {
                var _ = t.readI64().toString(),
                  f = o("MultiwaySharedTypes").EndpointServiceType.cast(
                    t.readI32(),
                  );
                n.nodeIdToServiceTypeMap[_] = f;
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
        n.nodeIdToUserIdMap === void 0 && (n.nodeIdToUserIdMap = {}),
        n.nodeIdToServiceTypeMap === void 0 && (n.nodeIdToServiceTypeMap = {}),
        n
      );
    }
    function ue(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.genericMessage = o(
                  "WebrtcSignalingCommonSerializers",
                ).deserializeGenericDataMessage(t))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.dominantSpeakerNotification = K(t))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.videoUploadRequest = Q(t))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.dominantSpeakerSignalingInfo = te(t))
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.bweDebugInfo = Y(t))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.debugInfo = ee(t))
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.videoUploadSignalingInfo = ne(t))
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.signalingMessageToClient = re(t))
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.signalingMessageFromClient = oe(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function ce(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.header = z(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.data_DEPRECATED = t.readBinary())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.body = ue(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.header === void 0 && (n.header = s()), n);
    }
    ((l.DataHeader$DefaultConstructor = s),
      (l.SpeakerDetail$DefaultConstructor = u),
      (l.DominantSpeakerNotification$DefaultConstructor = c),
      (l.VideoUploadRequest$DefaultConstructor = d),
      (l.ReceiverBottleneck$DefaultConstructor = m),
      (l.BweDebugInfo$DefaultConstructor = p),
      (l.AudioDuplicationDebugInfo$DefaultConstructor = _),
      (l.ReceiveTrackDebugInfo$DefaultConstructor = f),
      (l.DebugInfo$DefaultConstructor = g),
      (l.DominantSpeakerInfo$DefaultConstructor = h),
      (l.VideoUploadInfo$DefaultConstructor = y),
      (l.SignalingMessageToClient$DefaultConstructor = C),
      (l.SignalingMessageFromClient$DefaultConstructor = b),
      (l.SubscriptionMessageFromClient$DefaultConstructor = v),
      (l.RenderResolutionMessageFromClient$DefaultConstructor = S),
      (l.RenderResolutionMessageToClient$DefaultConstructor = R),
      (l.NodeIdNotification$DefaultConstructor = L),
      (l.DataMessageBody$DefaultConstructor = E),
      (l.DataMessage$DefaultConstructor = k),
      (l.serializeDataHeader = I),
      (l.serializeSpeakerDetail = T),
      (l.serializeDominantSpeakerNotification = D),
      (l.serializeVideoUploadRequest = x),
      (l.serializeReceiverBottleneck = $),
      (l.serializeBweDebugInfo = P),
      (l.serializeAudioDuplicationDebugInfo = N),
      (l.serializeReceiveTrackDebugInfo = M),
      (l.serializeDebugInfo = w),
      (l.serializeDominantSpeakerInfo = A),
      (l.serializeVideoUploadInfo = F),
      (l.serializeSignalingMessageToClient = O),
      (l.serializeSignalingMessageFromClient = B),
      (l.serializeSubscriptionMessageFromClient = W),
      (l.serializeRenderResolutionMessageFromClient = q),
      (l.serializeRenderResolutionMessageToClient = U),
      (l.serializeNodeIdNotification = V),
      (l.serializeDataMessageBody = H),
      (l.serializeDataMessage = G),
      (l.deserializeDataHeader = z),
      (l.deserializeSpeakerDetail = j),
      (l.deserializeDominantSpeakerNotification = K),
      (l.deserializeVideoUploadRequest = Q),
      (l.deserializeReceiverBottleneck = X),
      (l.deserializeBweDebugInfo = Y),
      (l.deserializeAudioDuplicationDebugInfo = J),
      (l.deserializeReceiveTrackDebugInfo = Z),
      (l.deserializeDebugInfo = ee),
      (l.deserializeDominantSpeakerInfo = te),
      (l.deserializeVideoUploadInfo = ne),
      (l.deserializeSignalingMessageToClient = re),
      (l.deserializeSignalingMessageFromClient = oe),
      (l.deserializeSubscriptionMessageFromClient = ae),
      (l.deserializeRenderResolutionMessageFromClient = ie),
      (l.deserializeRenderResolutionMessageToClient = le),
      (l.deserializeNodeIdNotification = se),
      (l.deserializeDataMessageBody = ue),
      (l.deserializeDataMessage = ce));
  },
  98,
);
