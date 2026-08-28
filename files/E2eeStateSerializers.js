__d(
  "E2eeStateSerializers",
  ["E2eeStateTypes", "ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { min: 0, max: 0 };
    }
    function u() {
      return { supportedVersions: [] };
    }
    function c() {
      return { employedVersion: 0 };
    }
    function d() {
      return { mode: 0 };
    }
    function m() {
      return {
        preKeyBundle: Uint8Array.of(),
        identityKeyInfo: d(),
        deviceId: 0,
      };
    }
    function p() {
      return {
        epochId: "0",
        isKeyDistributor: !1,
        epochInfo: _(),
        keyDistributorId: "",
      };
    }
    function _() {
      return {
        currentEpochId: "0",
        lastLeaveEpochId: "0",
        lastJoinEpochId: "0",
      };
    }
    function f() {
      return { supportedVersions: [] };
    }
    function g() {
      return { keyNegotiationMode: 0, allowOptionalGfd: !1 };
    }
    function h() {
      return {
        keyNegotiationMode: 0,
        removeFrameDecryptorDelayMs: 0,
        keepFrameDecryptors: !1,
        senderKeyUpdateDelayMs: 0,
        keyTtlMs: 0,
        ratchetSpace: 0,
        keyOverMediaDataChannelNumSends: 0,
        keyOverMediaDataChannelRetryDelayMs: 0,
        enableH264V2: !1,
        requiredCapabilities: [],
        disableE2eeAckThroughSignalingChannel: !1,
        signalingKeyMessageProtocol:
          o("E2eeStateTypes").SignalingKeyMessageProtocolEnum.cast(0),
      };
    }
    function y() {
      return {
        sessionKeyProtocolInfo: p(),
        populateParticipantHash: !1,
        enableParticipantVerification: !1,
      };
    }
    function C() {
      return { mode: 0, deviceId: 0, publicKey: Uint8Array.of() };
    }
    function b() {
      return {
        protocolVersion: 0,
        identityKeyPublicInfo: C(),
        initiatorFbid: "0",
        signature: Uint8Array.of(),
      };
    }
    function v() {
      return {};
    }
    function S() {
      return {};
    }
    function R() {
      return {
        preKeyBundle: Uint8Array.of(),
        cipherSuites: [],
        protocolVersion: f(),
        config: g(),
        identityKeyInfo: d(),
        deviceId: 0,
        e2eeClientStateCapabilities: {},
        supportedE2eeKeyNegotiationProtocols: [],
      };
    }
    function L() {
      return {
        cipherSuites: [],
        protocolVersion: f(),
        config: h(),
        endpointInfos: {},
        e2eeServerStateCapabilities: {},
        negotiatedE2eeKeyNegotiationProtocol:
          o("E2eeStateTypes").E2eeKeyNegotiationProtocolEnum.cast(0),
        serverInfraMandatedExpStatus:
          o("E2eeStateTypes").InfraMandatedExpStatus.cast(0),
      };
    }
    function E(t, n) {
      if (
        (n.writeStructBegin("VersionRange"),
        n.writeFieldBegin({
          fname: "min",
          ftype: (e || (e = r("ThriftTypes"))).I16,
          fid: 1,
        }),
        t.min != null)
      )
        n.writeI16(t.min);
      else {
        var o = 0;
        n.writeI16(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "max", ftype: e.I16, fid: 2 }),
        t.max != null)
      )
        n.writeI16(t.max);
      else {
        var a = 0;
        n.writeI16(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function k(t, n) {
      if (
        (n.writeStructBegin("E2eeClientStateCapability"),
        n.writeFieldBegin({
          fname: "supportedVersions",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.supportedVersions != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.supportedVersions.length,
        });
        for (var o of t.supportedVersions) E(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) E(i, n);
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function I(t, n) {
      if (
        (n.writeStructBegin("E2eeServerStateCapability"),
        n.writeFieldBegin({
          fname: "employedVersion",
          ftype: (e || (e = r("ThriftTypes"))).I16,
          fid: 1,
        }),
        t.employedVersion != null)
      )
        n.writeI16(t.employedVersion);
      else {
        var o = 0;
        n.writeI16(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function T(t, n) {
      if (
        (n.writeStructBegin("IdentityKeyInfo"),
        n.writeFieldBegin({
          fname: "mode",
          ftype: (e || (e = r("ThriftTypes"))).I16,
          fid: 1,
        }),
        t.mode != null)
      )
        n.writeI16(t.mode);
      else {
        var o = 0;
        n.writeI16(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function D(t, n) {
      if (
        (n.writeStructBegin("E2eeEndpointInfo"),
        n.writeFieldBegin({
          fname: "preKeyBundle",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.preKeyBundle != null)
      )
        n.writeBinary(t.preKeyBundle);
      else {
        var o = Uint8Array.of();
        n.writeBinary(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "identityKeyInfo",
          ftype: e.STRUCT,
          fid: 2,
        }),
        t.identityKeyInfo != null)
      )
        T(t.identityKeyInfo, n);
      else {
        var a = d();
        T(a, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "deviceId", ftype: e.I32, fid: 3 }),
        t.deviceId != null)
      )
        n.writeI32(t.deviceId);
      else {
        var i = 0;
        n.writeI32(i);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function x(t, n) {
      if (
        (n.writeStructBegin("SessionKeyProtocolInfo"),
        n.writeFieldBegin({
          fname: "epochId",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.epochId != null)
      )
        n.writeI64(BigInt(t.epochId));
      else {
        var o = "0";
        n.writeI64(BigInt(o));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "isKeyDistributor", ftype: e.BOOL, fid: 2 }),
        t.isKeyDistributor != null)
      )
        n.writeBool(t.isKeyDistributor);
      else {
        var a = !1;
        n.writeBool(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "epochInfo", ftype: e.STRUCT, fid: 3 }),
        t.epochInfo != null)
      )
        $(t.epochInfo, n);
      else {
        var i = _();
        $(i, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "keyDistributorId",
          ftype: e.STRING,
          fid: 4,
        }),
        t.keyDistributorId != null)
      )
        n.writeString(t.keyDistributorId);
      else {
        var l = "";
        n.writeString(l);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function $(t, n) {
      if (
        (n.writeStructBegin("EpochInfo"),
        n.writeFieldBegin({
          fname: "currentEpochId",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.currentEpochId != null)
      )
        n.writeI64(BigInt(t.currentEpochId));
      else {
        var o = "0";
        n.writeI64(BigInt(o));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "lastLeaveEpochId", ftype: e.I64, fid: 2 }),
        t.lastLeaveEpochId != null)
      )
        n.writeI64(BigInt(t.lastLeaveEpochId));
      else {
        var a = "0";
        n.writeI64(BigInt(a));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "lastJoinEpochId", ftype: e.I64, fid: 3 }),
        t.lastJoinEpochId != null)
      )
        n.writeI64(BigInt(t.lastJoinEpochId));
      else {
        var i = "0";
        n.writeI64(BigInt(i));
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function P(t, n) {
      if (
        (n.writeStructBegin("E2eeProtocolVersion"),
        n.writeFieldBegin({
          fname: "supportedVersions",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.supportedVersions != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.supportedVersions.length,
        });
        for (var o of t.supportedVersions) E(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) E(i, n);
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function N(t, n) {
      if (
        (n.writeStructBegin("E2eeClientStateConfig"),
        n.writeFieldBegin({
          fname: "keyNegotiationMode",
          ftype: (e || (e = r("ThriftTypes"))).I16,
          fid: 1,
        }),
        t.keyNegotiationMode != null)
      )
        n.writeI16(t.keyNegotiationMode);
      else {
        var o = 0;
        n.writeI16(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "allowOptionalGfd", ftype: e.BOOL, fid: 3 }),
        t.allowOptionalGfd != null)
      )
        n.writeBool(t.allowOptionalGfd);
      else {
        var a = !1;
        n.writeBool(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function M(t, n) {
      if (
        (n.writeStructBegin("E2eeServerStateConfig"),
        n.writeFieldBegin({
          fname: "keyNegotiationMode",
          ftype: (e || (e = r("ThriftTypes"))).I16,
          fid: 1,
        }),
        t.keyNegotiationMode != null)
      )
        n.writeI16(t.keyNegotiationMode);
      else {
        var a = 0;
        n.writeI16(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "removeFrameDecryptorDelayMs",
          ftype: e.I32,
          fid: 4,
        }),
        t.removeFrameDecryptorDelayMs != null)
      )
        n.writeI32(t.removeFrameDecryptorDelayMs);
      else {
        var i = 0;
        n.writeI32(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "keepFrameDecryptors",
          ftype: e.BOOL,
          fid: 5,
        }),
        t.keepFrameDecryptors != null)
      )
        n.writeBool(t.keepFrameDecryptors);
      else {
        var l = !1;
        n.writeBool(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "senderKeyUpdateDelayMs",
          ftype: e.I32,
          fid: 6,
        }),
        t.senderKeyUpdateDelayMs != null)
      )
        n.writeI32(t.senderKeyUpdateDelayMs);
      else {
        var s = 0;
        n.writeI32(s);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "keyTtlMs", ftype: e.I32, fid: 7 }),
        t.keyTtlMs != null)
      )
        n.writeI32(t.keyTtlMs);
      else {
        var u = 0;
        n.writeI32(u);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "ratchetSpace", ftype: e.I16, fid: 8 }),
        t.ratchetSpace != null)
      )
        n.writeI16(t.ratchetSpace);
      else {
        var c = 0;
        n.writeI16(c);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "keyOverMediaDataChannelNumSends",
          ftype: e.I32,
          fid: 9,
        }),
        t.keyOverMediaDataChannelNumSends != null)
      )
        n.writeI32(t.keyOverMediaDataChannelNumSends);
      else {
        var d = 0;
        n.writeI32(d);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "keyOverMediaDataChannelRetryDelayMs",
          ftype: e.I32,
          fid: 10,
        }),
        t.keyOverMediaDataChannelRetryDelayMs != null)
      )
        n.writeI32(t.keyOverMediaDataChannelRetryDelayMs);
      else {
        var m = 0;
        n.writeI32(m);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "enableH264V2", ftype: e.BOOL, fid: 11 }),
        t.enableH264V2 != null)
      )
        n.writeBool(t.enableH264V2);
      else {
        var p = !1;
        n.writeBool(p);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "requiredCapabilities",
          ftype: e.LIST,
          fid: 12,
        }),
        t.requiredCapabilities != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: t.requiredCapabilities.length,
        });
        for (var _ of t.requiredCapabilities) n.writeI32(_ != null ? _ : 0);
        n.writeListEnd();
      } else {
        var f = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: f.length,
        });
        for (var g of f) n.writeI32(g != null ? g : 0);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "disableE2eeAckThroughSignalingChannel",
          ftype: e.BOOL,
          fid: 13,
        }),
        t.disableE2eeAckThroughSignalingChannel != null)
      )
        n.writeBool(t.disableE2eeAckThroughSignalingChannel);
      else {
        var h = !1;
        n.writeBool(h);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "signalingKeyMessageProtocol",
          ftype: e.I32,
          fid: 14,
        }),
        t.signalingKeyMessageProtocol != null)
      ) {
        var y;
        n.writeI32((y = t.signalingKeyMessageProtocol) != null ? y : 0);
      } else {
        var C = o("E2eeStateTypes").SignalingKeyMessageProtocolEnum.cast(0);
        n.writeI32(C != null ? C : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function w(t, n) {
      if (
        (n.writeStructBegin("KeyNegotiationProtocolConfig"),
        n.writeFieldBegin({
          fname: "sessionKeyProtocolInfo",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.sessionKeyProtocolInfo != null)
      )
        x(t.sessionKeyProtocolInfo, n);
      else {
        var o = p();
        x(o, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "populateParticipantHash",
          ftype: e.BOOL,
          fid: 2,
        }),
        t.populateParticipantHash != null)
      )
        n.writeBool(t.populateParticipantHash);
      else {
        var a = !1;
        n.writeBool(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "enableParticipantVerification",
          ftype: e.BOOL,
          fid: 3,
        }),
        t.enableParticipantVerification != null)
      )
        n.writeBool(t.enableParticipantVerification);
      else {
        var i = !1;
        n.writeBool(i);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function A(t, n) {
      if (
        (n.writeStructBegin("IdentityKeyPublicInfo"),
        n.writeFieldBegin({
          fname: "mode",
          ftype: (e || (e = r("ThriftTypes"))).I16,
          fid: 1,
        }),
        t.mode != null)
      )
        n.writeI16(t.mode);
      else {
        var o = 0;
        n.writeI16(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "deviceId", ftype: e.I32, fid: 2 }),
        t.deviceId != null)
      )
        n.writeI32(t.deviceId);
      else {
        var a = 0;
        n.writeI32(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "publicKey", ftype: e.STRING, fid: 3 }),
        t.publicKey != null)
      )
        n.writeBinary(t.publicKey);
      else {
        var i = Uint8Array.of();
        n.writeBinary(i);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function F(t, n) {
      if (
        (n.writeStructBegin("DisableE2eeAuthenticationInfo"),
        n.writeFieldBegin({
          fname: "protocolVersion",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.protocolVersion != null)
      )
        n.writeI32(t.protocolVersion);
      else {
        var o = 0;
        n.writeI32(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "identityKeyPublicInfo",
          ftype: e.STRUCT,
          fid: 2,
        }),
        t.identityKeyPublicInfo != null)
      )
        A(t.identityKeyPublicInfo, n);
      else {
        var a = C();
        A(a, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "initiatorFbid", ftype: e.I64, fid: 3 }),
        t.initiatorFbid != null)
      )
        n.writeI64(BigInt(t.initiatorFbid));
      else {
        var i = "0";
        n.writeI64(BigInt(i));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "signature", ftype: e.STRING, fid: 4 }),
        t.signature != null)
      )
        n.writeBinary(t.signature);
      else {
        var l = Uint8Array.of();
        n.writeBinary(l);
      }
      (n.writeFieldEnd(),
        t.timestampMs != null &&
          (n.writeFieldBegin({
            fname: "timestampMs",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 5,
          }),
          n.writeI64(BigInt(t.timestampMs)),
          n.writeFieldEnd()),
        t.conferenceId != null &&
          (n.writeFieldBegin({
            fname: "conferenceId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.conferenceId),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function O(t, n) {
      (n.writeStructBegin("E2eeStateDowngradeServerRequest"),
        t.authInfo != null &&
          (n.writeFieldBegin({
            fname: "authInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          F(t.authInfo, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function B(t, n) {
      (n.writeStructBegin("E2eeStateDowngradeClientRequest"),
        t.authInfo != null &&
          (n.writeFieldBegin({
            fname: "authInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          F(t.authInfo, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function W(t, n) {
      if (
        (n.writeStructBegin("E2eeClientState"),
        n.writeFieldBegin({
          fname: "preKeyBundle",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.preKeyBundle != null)
      )
        n.writeBinary(t.preKeyBundle);
      else {
        var o = Uint8Array.of();
        n.writeBinary(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "cipherSuites", ftype: e.LIST, fid: 2 }),
        t.cipherSuites != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).I16,
          size: t.cipherSuites.length,
        });
        for (var a of t.cipherSuites) n.writeI16(a);
        n.writeListEnd();
      } else {
        var i = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).I16,
          size: i.length,
        });
        for (var l of i) n.writeI16(l);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "protocolVersion",
          ftype: e.STRUCT,
          fid: 3,
        }),
        t.protocolVersion != null)
      )
        P(t.protocolVersion, n);
      else {
        var s = f();
        P(s, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "config", ftype: e.STRUCT, fid: 4 }),
        t.config != null)
      )
        N(t.config, n);
      else {
        var u = g();
        N(u, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "identityKeyInfo",
          ftype: e.STRUCT,
          fid: 5,
        }),
        t.identityKeyInfo != null)
      )
        T(t.identityKeyInfo, n);
      else {
        var c = d();
        T(c, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "deviceId", ftype: e.I32, fid: 6 }),
        t.deviceId != null)
      )
        n.writeI32(t.deviceId);
      else {
        var m = 0;
        n.writeI32(m);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "e2eeClientStateCapabilities",
          ftype: e.MAP,
          fid: 7,
        }),
        t.e2eeClientStateCapabilities != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: Object.keys(t.e2eeClientStateCapabilities).length,
        });
        for (var p of Object.entries(t.e2eeClientStateCapabilities)) {
          var _,
            h = p[0],
            y = p[1];
          (n.writeI32((_ = Number(h)) != null ? _ : 0), k(y, n));
        }
        n.writeMapEnd();
      } else {
        var C = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: Object.keys(C).length,
        });
        for (var b of Object.entries(C)) {
          var v,
            S = b[0],
            R = b[1];
          (n.writeI32((v = Number(S)) != null ? v : 0), k(R, n));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "supportedE2eeKeyNegotiationProtocols",
          ftype: e.LIST,
          fid: 8,
        }),
        t.supportedE2eeKeyNegotiationProtocols != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: t.supportedE2eeKeyNegotiationProtocols.length,
        });
        for (var L of t.supportedE2eeKeyNegotiationProtocols)
          n.writeI32(L != null ? L : 0);
        n.writeListEnd();
      } else {
        var E = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: E.length,
        });
        for (var I of E) n.writeI32(I != null ? I : 0);
        n.writeListEnd();
      }
      (n.writeFieldEnd(),
        t.downgradeRequest != null &&
          (n.writeFieldBegin({
            fname: "downgradeRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 9,
          }),
          B(t.downgradeRequest, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function q(t, n) {
      if (
        (n.writeStructBegin("E2eeServerState"),
        n.writeFieldBegin({
          fname: "cipherSuites",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
        t.cipherSuites != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).I16,
          size: t.cipherSuites.length,
        });
        for (var a of t.cipherSuites) n.writeI16(a);
        n.writeListEnd();
      } else {
        var i = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).I16,
          size: i.length,
        });
        for (var l of i) n.writeI16(l);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "protocolVersion",
          ftype: e.STRUCT,
          fid: 3,
        }),
        t.protocolVersion != null)
      )
        P(t.protocolVersion, n);
      else {
        var s = f();
        P(s, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "config", ftype: e.STRUCT, fid: 4 }),
        t.config != null)
      )
        M(t.config, n);
      else {
        var u = h();
        M(u, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "endpointInfos", ftype: e.MAP, fid: 5 }),
        t.endpointInfos != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(t.endpointInfos).length,
        });
        for (var c of Object.entries(t.endpointInfos)) {
          var d = c[0],
            m = c[1];
          (n.writeString(d), D(m, n));
        }
        n.writeMapEnd();
      } else {
        var p = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(p).length,
        });
        for (var _ of Object.entries(p)) {
          var g = _[0],
            y = _[1];
          (n.writeString(g), D(y, n));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "e2eeServerStateCapabilities",
          ftype: e.MAP,
          fid: 6,
        }),
        t.e2eeServerStateCapabilities != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: Object.keys(t.e2eeServerStateCapabilities).length,
        });
        for (var C of Object.entries(t.e2eeServerStateCapabilities)) {
          var b,
            v = C[0],
            S = C[1];
          (n.writeI32((b = Number(v)) != null ? b : 0), I(S, n));
        }
        n.writeMapEnd();
      } else {
        var R = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: Object.keys(R).length,
        });
        for (var L of Object.entries(R)) {
          var E,
            k = L[0],
            T = L[1];
          (n.writeI32((E = Number(k)) != null ? E : 0), I(T, n));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "negotiatedE2eeKeyNegotiationProtocol",
          ftype: e.I32,
          fid: 7,
        }),
        t.negotiatedE2eeKeyNegotiationProtocol != null)
      ) {
        var x;
        n.writeI32(
          (x = t.negotiatedE2eeKeyNegotiationProtocol) != null ? x : 0,
        );
      } else {
        var $ = o("E2eeStateTypes").E2eeKeyNegotiationProtocolEnum.cast(0);
        n.writeI32($ != null ? $ : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.keyNegotiationProtocolConfig != null &&
          (n.writeFieldBegin({
            fname: "keyNegotiationProtocolConfig",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 8,
          }),
          w(t.keyNegotiationProtocolConfig, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "serverInfraMandatedExpStatus",
          ftype: e.I32,
          fid: 9,
        }),
        t.serverInfraMandatedExpStatus != null)
      ) {
        var N;
        n.writeI32((N = t.serverInfraMandatedExpStatus) != null ? N : 0);
      } else {
        var A = o("E2eeStateTypes").InfraMandatedExpStatus.cast(0);
        n.writeI32(A != null ? A : 0);
      }
      (n.writeFieldEnd(),
        t.downgradeRequest != null &&
          (n.writeFieldBegin({
            fname: "downgradeRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 11,
          }),
          O(t.downgradeRequest, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function U(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I16
              ? (n.min = t.readI16())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I16
              ? (n.max = t.readI16())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.min === void 0 && (n.min = 0),
        n.max === void 0 && (n.max = 0),
        n
      );
    }
    function V(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.supportedVersions = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = U(t);
                n.supportedVersions.push(u);
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
        n.supportedVersions === void 0 && (n.supportedVersions = []),
        n
      );
    }
    function H(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I16
              ? (n.employedVersion = t.readI16())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.employedVersion === void 0 && (n.employedVersion = 0),
        n
      );
    }
    function G(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I16
              ? (n.mode = t.readI16())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.mode === void 0 && (n.mode = 0), n);
    }
    function z(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.preKeyBundle = t.readBinary())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.identityKeyInfo = G(t))
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.deviceId = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.preKeyBundle === void 0 && (n.preKeyBundle = Uint8Array.of()),
        n.identityKeyInfo === void 0 && (n.identityKeyInfo = d()),
        n.deviceId === void 0 && (n.deviceId = 0),
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
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.epochId = t.readI64().toString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isKeyDistributor = t.readBool())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.epochInfo = K(t))
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.keyDistributorId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.epochId === void 0 && (n.epochId = "0"),
        n.isKeyDistributor === void 0 && (n.isKeyDistributor = !1),
        n.epochInfo === void 0 && (n.epochInfo = _()),
        n.keyDistributorId === void 0 && (n.keyDistributorId = ""),
        n
      );
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
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.currentEpochId = t.readI64().toString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.lastLeaveEpochId = t.readI64().toString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.lastJoinEpochId = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.currentEpochId === void 0 && (n.currentEpochId = "0"),
        n.lastLeaveEpochId === void 0 && (n.lastLeaveEpochId = "0"),
        n.lastJoinEpochId === void 0 && (n.lastJoinEpochId = "0"),
        n
      );
    }
    function Q(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.supportedVersions = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = U(t);
                n.supportedVersions.push(u);
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
        n.supportedVersions === void 0 && (n.supportedVersions = []),
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
            a === (e || (e = r("ThriftTypes"))).I16
              ? (n.keyNegotiationMode = t.readI16())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.allowOptionalGfd = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.keyNegotiationMode === void 0 && (n.keyNegotiationMode = 0),
        n.allowOptionalGfd === void 0 && (n.allowOptionalGfd = !1),
        n
      );
    }
    function Y(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I16
              ? (n.keyNegotiationMode = t.readI16())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.removeFrameDecryptorDelayMs = t.readI32())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.keepFrameDecryptors = t.readBool())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.senderKeyUpdateDelayMs = t.readI32())
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.keyTtlMs = t.readI32())
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).I16
              ? (n.ratchetSpace = t.readI16())
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.keyOverMediaDataChannelNumSends = t.readI32())
              : t.skip(i);
            break;
          case 10:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.keyOverMediaDataChannelRetryDelayMs = t.readI32())
              : t.skip(i);
            break;
          case 11:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enableH264V2 = t.readBool())
              : t.skip(i);
            break;
          case 12:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.requiredCapabilities = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = o("E2eeStateTypes").E2eeStateCapabilitiesEnum.cast(
                  t.readI32(),
                );
                n.requiredCapabilities.push(c);
              }
            } else t.skip(i);
            break;
          case 13:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.disableE2eeAckThroughSignalingChannel = t.readBool())
              : t.skip(i);
            break;
          case 14:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.signalingKeyMessageProtocol = o(
                  "E2eeStateTypes",
                ).SignalingKeyMessageProtocolEnum.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.keyNegotiationMode === void 0 && (n.keyNegotiationMode = 0),
        n.removeFrameDecryptorDelayMs === void 0 &&
          (n.removeFrameDecryptorDelayMs = 0),
        n.keepFrameDecryptors === void 0 && (n.keepFrameDecryptors = !1),
        n.senderKeyUpdateDelayMs === void 0 && (n.senderKeyUpdateDelayMs = 0),
        n.keyTtlMs === void 0 && (n.keyTtlMs = 0),
        n.ratchetSpace === void 0 && (n.ratchetSpace = 0),
        n.keyOverMediaDataChannelNumSends === void 0 &&
          (n.keyOverMediaDataChannelNumSends = 0),
        n.keyOverMediaDataChannelRetryDelayMs === void 0 &&
          (n.keyOverMediaDataChannelRetryDelayMs = 0),
        n.enableH264V2 === void 0 && (n.enableH264V2 = !1),
        n.requiredCapabilities === void 0 && (n.requiredCapabilities = []),
        n.disableE2eeAckThroughSignalingChannel === void 0 &&
          (n.disableE2eeAckThroughSignalingChannel = !1),
        n.signalingKeyMessageProtocol === void 0 &&
          (n.signalingKeyMessageProtocol =
            o("E2eeStateTypes").SignalingKeyMessageProtocolEnum.cast(0)),
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
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.sessionKeyProtocolInfo = j(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.populateParticipantHash = t.readBool())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enableParticipantVerification = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.sessionKeyProtocolInfo === void 0 && (n.sessionKeyProtocolInfo = p()),
        n.populateParticipantHash === void 0 &&
          (n.populateParticipantHash = !1),
        n.enableParticipantVerification === void 0 &&
          (n.enableParticipantVerification = !1),
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
            a === (e || (e = r("ThriftTypes"))).I16
              ? (n.mode = t.readI16())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.deviceId = t.readI32())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.publicKey = t.readBinary())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.mode === void 0 && (n.mode = 0),
        n.deviceId === void 0 && (n.deviceId = 0),
        n.publicKey === void 0 && (n.publicKey = Uint8Array.of()),
        n
      );
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
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.protocolVersion = t.readI32())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.identityKeyPublicInfo = Z(t))
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.initiatorFbid = t.readI64().toString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.signature = t.readBinary())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.timestampMs = t.readI64().toString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.conferenceId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.protocolVersion === void 0 && (n.protocolVersion = 0),
        n.identityKeyPublicInfo === void 0 && (n.identityKeyPublicInfo = C()),
        n.initiatorFbid === void 0 && (n.initiatorFbid = "0"),
        n.signature === void 0 && (n.signature = Uint8Array.of()),
        n
      );
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
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.authInfo = ee(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
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
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.authInfo = ee(t))
              : t.skip(a);
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
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.preKeyBundle = t.readBinary())
              : t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.cipherSuites = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = t.readI16();
                n.cipherSuites.push(c);
              }
            } else t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.protocolVersion = Q(t))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.config = X(t))
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.identityKeyInfo = G(t))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.deviceId = t.readI32())
              : t.skip(i);
            break;
          case 7:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.e2eeClientStateCapabilities = {};
              for (var m = t.readMapBegin(), p = 0; p < m.size; p++) {
                var _ = o("E2eeStateTypes").E2eeStateCapabilitiesEnum.cast(
                    t.readI32(),
                  ),
                  h = V(t);
                _ != null && (n.e2eeClientStateCapabilities[_] = h);
              }
            } else t.skip(i);
            break;
          case 8:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.supportedE2eeKeyNegotiationProtocols = [];
              for (var y = t.readListBegin(), C = 0; C < y.size; C++) {
                var b = o("E2eeStateTypes").E2eeKeyNegotiationProtocolEnum.cast(
                  t.readI32(),
                );
                n.supportedE2eeKeyNegotiationProtocols.push(b);
              }
            } else t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.downgradeRequest = ne(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.preKeyBundle === void 0 && (n.preKeyBundle = Uint8Array.of()),
        n.cipherSuites === void 0 && (n.cipherSuites = []),
        n.protocolVersion === void 0 && (n.protocolVersion = f()),
        n.config === void 0 && (n.config = g()),
        n.identityKeyInfo === void 0 && (n.identityKeyInfo = d()),
        n.deviceId === void 0 && (n.deviceId = 0),
        n.e2eeClientStateCapabilities === void 0 &&
          (n.e2eeClientStateCapabilities = {}),
        n.supportedE2eeKeyNegotiationProtocols === void 0 &&
          (n.supportedE2eeKeyNegotiationProtocols = []),
        n
      );
    }
    function oe(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.cipherSuites = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = t.readI16();
                n.cipherSuites.push(c);
              }
            } else t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.protocolVersion = Q(t))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.config = Y(t))
              : t.skip(i);
            break;
          case 5:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.endpointInfos = {};
              for (var d = t.readMapBegin(), m = 0; m < d.size; m++) {
                var p = t.readString(),
                  _ = z(t);
                n.endpointInfos[p] = _;
              }
            } else t.skip(i);
            break;
          case 6:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.e2eeServerStateCapabilities = {};
              for (var g = t.readMapBegin(), y = 0; y < g.size; y++) {
                var C = o("E2eeStateTypes").E2eeStateCapabilitiesEnum.cast(
                    t.readI32(),
                  ),
                  b = H(t);
                C != null && (n.e2eeServerStateCapabilities[C] = b);
              }
            } else t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.negotiatedE2eeKeyNegotiationProtocol = o(
                  "E2eeStateTypes",
                ).E2eeKeyNegotiationProtocolEnum.cast(t.readI32()))
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.keyNegotiationProtocolConfig = J(t))
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.serverInfraMandatedExpStatus = o(
                  "E2eeStateTypes",
                ).InfraMandatedExpStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 11:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.downgradeRequest = te(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.cipherSuites === void 0 && (n.cipherSuites = []),
        n.protocolVersion === void 0 && (n.protocolVersion = f()),
        n.config === void 0 && (n.config = h()),
        n.endpointInfos === void 0 && (n.endpointInfos = {}),
        n.e2eeServerStateCapabilities === void 0 &&
          (n.e2eeServerStateCapabilities = {}),
        n.negotiatedE2eeKeyNegotiationProtocol === void 0 &&
          (n.negotiatedE2eeKeyNegotiationProtocol =
            o("E2eeStateTypes").E2eeKeyNegotiationProtocolEnum.cast(0)),
        n.serverInfraMandatedExpStatus === void 0 &&
          (n.serverInfraMandatedExpStatus =
            o("E2eeStateTypes").InfraMandatedExpStatus.cast(0)),
        n
      );
    }
    ((l.VersionRange$DefaultConstructor = s),
      (l.E2eeClientStateCapability$DefaultConstructor = u),
      (l.E2eeServerStateCapability$DefaultConstructor = c),
      (l.IdentityKeyInfo$DefaultConstructor = d),
      (l.E2eeEndpointInfo$DefaultConstructor = m),
      (l.SessionKeyProtocolInfo$DefaultConstructor = p),
      (l.EpochInfo$DefaultConstructor = _),
      (l.E2eeProtocolVersion$DefaultConstructor = f),
      (l.E2eeClientStateConfig$DefaultConstructor = g),
      (l.E2eeServerStateConfig$DefaultConstructor = h),
      (l.KeyNegotiationProtocolConfig$DefaultConstructor = y),
      (l.IdentityKeyPublicInfo$DefaultConstructor = C),
      (l.DisableE2eeAuthenticationInfo$DefaultConstructor = b),
      (l.E2eeStateDowngradeServerRequest$DefaultConstructor = v),
      (l.E2eeStateDowngradeClientRequest$DefaultConstructor = S),
      (l.E2eeClientState$DefaultConstructor = R),
      (l.E2eeServerState$DefaultConstructor = L),
      (l.serializeVersionRange = E),
      (l.serializeE2eeClientStateCapability = k),
      (l.serializeE2eeServerStateCapability = I),
      (l.serializeIdentityKeyInfo = T),
      (l.serializeE2eeEndpointInfo = D),
      (l.serializeSessionKeyProtocolInfo = x),
      (l.serializeEpochInfo = $),
      (l.serializeE2eeProtocolVersion = P),
      (l.serializeE2eeClientStateConfig = N),
      (l.serializeE2eeServerStateConfig = M),
      (l.serializeKeyNegotiationProtocolConfig = w),
      (l.serializeIdentityKeyPublicInfo = A),
      (l.serializeDisableE2eeAuthenticationInfo = F),
      (l.serializeE2eeStateDowngradeServerRequest = O),
      (l.serializeE2eeStateDowngradeClientRequest = B),
      (l.serializeE2eeClientState = W),
      (l.serializeE2eeServerState = q),
      (l.deserializeVersionRange = U),
      (l.deserializeE2eeClientStateCapability = V),
      (l.deserializeE2eeServerStateCapability = H),
      (l.deserializeIdentityKeyInfo = G),
      (l.deserializeE2eeEndpointInfo = z),
      (l.deserializeSessionKeyProtocolInfo = j),
      (l.deserializeEpochInfo = K),
      (l.deserializeE2eeProtocolVersion = Q),
      (l.deserializeE2eeClientStateConfig = X),
      (l.deserializeE2eeServerStateConfig = Y),
      (l.deserializeKeyNegotiationProtocolConfig = J),
      (l.deserializeIdentityKeyPublicInfo = Z),
      (l.deserializeDisableE2eeAuthenticationInfo = ee),
      (l.deserializeE2eeStateDowngradeServerRequest = te),
      (l.deserializeE2eeStateDowngradeClientRequest = ne),
      (l.deserializeE2eeClientState = re),
      (l.deserializeE2eeServerState = oe));
  },
  98,
);
