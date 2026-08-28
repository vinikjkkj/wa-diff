__d(
  "MultiwaySharedSerializers",
  ["MultiwaySharedTypes", "ThriftTypes", "WebrtcSignalingCommonTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { cluster: "", nonce: "" };
    }
    function u() {
      return {
        cluster: "",
        conferenceName: "",
        nonce: "",
        userId: "",
        clientSessionId: "",
      };
    }
    function c() {
      return {
        userId: "",
        deviceId: "",
        appId: "",
        appVersion: "",
        appBuildNumber: "",
      };
    }
    function d() {
      return {
        mode: o("MultiwaySharedTypes").E2eeMode.cast(0),
        preventSfuMode: !1,
        infraMandatedExpStatus: o(
          "MultiwaySharedTypes",
        ).E2eeInfraMandatedExpStatus.cast(0),
      };
    }
    function m() {
      return { semantics: "", ssrcs: [] };
    }
    function p() {
      return {
        type: o("MultiwaySharedTypes").MediaType.cast(0),
        id: "",
        ssrcs: [],
        enabled: !1,
        customVideoContentType: o(
          "WebrtcSignalingCommonTypes",
        ).CustomVideoContentType.cast(0),
        customAudioContentType: o(
          "WebrtcSignalingCommonTypes",
        ).CustomAudioContentType.cast(0),
      };
    }
    function _() {
      return {
        parameters: {},
        conditionFbid: "0",
        exposureHasBeenLogged: !1,
        canExposureLog: !1,
        universeShortName: "",
        userFbid: "0",
        unitId: "",
      };
    }
    function f() {
      return { experiments: {}, userFbid: "0" };
    }
    function g() {
      return {
        conditionFbid: "0",
        userFbid: "0",
        universeName: "",
        unitId: "",
      };
    }
    function h() {
      return {
        enabled: !1,
        customVideoContentType: o(
          "WebrtcSignalingCommonTypes",
        ).CustomVideoContentType.cast(0),
        customAudioContentType: o(
          "WebrtcSignalingCommonTypes",
        ).CustomAudioContentType.cast(0),
      };
    }
    function y() {
      return { tracks: {} };
    }
    function C() {
      return { videoQuality: o("MultiwaySharedTypes").VideoQuality.cast(0) };
    }
    function b() {
      return {
        cname: "",
        type: o("MultiwaySharedTypes").SubscriptionType.cast(0),
      };
    }
    function v() {
      return { restrictiveLogging: !0, verboseLogging: !1 };
    }
    function S() {
      return {
        userId: "",
        streamId: "",
        streamType: 0,
        renderWidth: 0,
        renderHeight: 0,
      };
    }
    function R() {
      return {};
    }
    function L() {
      return {};
    }
    function E() {
      return {};
    }
    function k() {
      return { host: Uint8Array.of(), port: 0 };
    }
    function I() {
      return {};
    }
    function T(t, n) {
      if (
        (n.writeStructBegin("ServerInfo"),
        n.writeFieldBegin({
          fname: "cluster",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.cluster != null)
      )
        n.writeString(t.cluster);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        t.conferenceName_DO_NOT_ACCESS_DIRECTLY != null &&
          (n.writeFieldBegin({
            fname: "conferenceName_DO_NOT_ACCESS_DIRECTLY",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.conferenceName_DO_NOT_ACCESS_DIRECTLY),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "nonce", ftype: e.STRING, fid: 3 }),
        t.nonce != null)
      )
        n.writeString(t.nonce);
      else {
        var a = "";
        n.writeString(a);
      }
      (n.writeFieldEnd(),
        t.roomConferenceId != null &&
          (n.writeFieldBegin({
            fname: "roomConferenceId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 4,
          }),
          n.writeI64(BigInt(t.roomConferenceId)),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function D(t, n) {
      if (
        (n.writeStructBegin("ClientSessionInfo"),
        n.writeFieldBegin({
          fname: "cluster",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.cluster != null)
      )
        n.writeString(t.cluster);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "conferenceName", ftype: e.STRING, fid: 2 }),
        t.conferenceName != null)
      )
        n.writeString(t.conferenceName);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "nonce", ftype: e.STRING, fid: 3 }),
        t.nonce != null)
      )
        n.writeString(t.nonce);
      else {
        var i = "";
        n.writeString(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "userId", ftype: e.STRING, fid: 4 }),
        t.userId != null)
      )
        n.writeString(t.userId);
      else {
        var l = "";
        n.writeString(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "clientSessionId",
          ftype: e.STRING,
          fid: 5,
        }),
        t.clientSessionId != null)
      )
        n.writeString(t.clientSessionId);
      else {
        var s = "";
        n.writeString(s);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function x(t, n) {
      if (
        (n.writeStructBegin("Endpoint"),
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
        n.writeFieldBegin({ fname: "deviceId", ftype: e.STRING, fid: 2 }),
        t.deviceId != null)
      )
        n.writeString(t.deviceId);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "appId", ftype: e.STRING, fid: 3 }),
        t.appId != null)
      )
        n.writeString(t.appId);
      else {
        var i = "";
        n.writeString(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "appVersion", ftype: e.STRING, fid: 4 }),
        t.appVersion != null)
      )
        n.writeString(t.appVersion);
      else {
        var l = "";
        n.writeString(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "appBuildNumber", ftype: e.STRING, fid: 5 }),
        t.appBuildNumber != null)
      )
        n.writeString(t.appBuildNumber);
      else {
        var s = "";
        n.writeString(s);
      }
      (n.writeFieldEnd(),
        t.clientStackInfo != null &&
          (n.writeFieldBegin({
            fname: "clientStackInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.clientStackInfo),
          n.writeFieldEnd()),
        t.familyDeviceId != null &&
          (n.writeFieldBegin({
            fname: "familyDeviceId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.familyDeviceId),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function $(t, n) {
      if (
        (n.writeStructBegin("E2eeEnforcement"),
        n.writeFieldBegin({
          fname: "mode",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.mode != null)
      ) {
        var a;
        n.writeI32((a = t.mode) != null ? a : 0);
      } else {
        var i = o("MultiwaySharedTypes").E2eeMode.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "preventSfuMode", ftype: e.BOOL, fid: 2 }),
        t.preventSfuMode != null)
      )
        n.writeBool(t.preventSfuMode);
      else {
        var l = !1;
        n.writeBool(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "infraMandatedExpStatus",
          ftype: e.I32,
          fid: 3,
        }),
        t.infraMandatedExpStatus != null)
      ) {
        var s;
        n.writeI32((s = t.infraMandatedExpStatus) != null ? s : 0);
      } else {
        var u = o("MultiwaySharedTypes").E2eeInfraMandatedExpStatus.cast(0);
        n.writeI32(u != null ? u : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function P(t, n) {
      if (
        (n.writeStructBegin("SsrcGroup"),
        n.writeFieldBegin({
          fname: "semantics",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.semantics != null)
      )
        n.writeString(t.semantics);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "ssrcs", ftype: e.LIST, fid: 2 }),
        t.ssrcs != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).I64,
          size: t.ssrcs.length,
        });
        for (var a of t.ssrcs) n.writeI64(BigInt(a));
        n.writeListEnd();
      } else {
        var i = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).I64,
          size: i.length,
        });
        for (var l of i) n.writeI64(BigInt(l));
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function N(t, n) {
      if (
        (n.writeStructBegin("Media"),
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
        var i = o("MultiwaySharedTypes").MediaType.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "id", ftype: e.STRING, fid: 2 }),
        t.id != null)
      )
        n.writeString(t.id);
      else {
        var l = "";
        n.writeString(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "ssrcs", ftype: e.LIST, fid: 3 }),
        t.ssrcs != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).I64,
          size: t.ssrcs.length,
        });
        for (var s of t.ssrcs) n.writeI64(BigInt(s));
        n.writeListEnd();
      } else {
        var u = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).I64,
          size: u.length,
        });
        for (var c of u) n.writeI64(BigInt(c));
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "enabled", ftype: e.BOOL, fid: 4 }),
        t.enabled != null)
      )
        n.writeBool(t.enabled);
      else {
        var d = !1;
        n.writeBool(d);
      }
      if ((n.writeFieldEnd(), t.pausedDownlink != null)) {
        var m;
        (n.writeFieldBegin({
          fname: "pausedDownlink",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 5,
        }),
          n.writeI32((m = t.pausedDownlink) != null ? m : 0),
          n.writeFieldEnd());
      }
      if (t.pausedUplink != null) {
        var p;
        (n.writeFieldBegin({
          fname: "pausedUplink",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 6,
        }),
          n.writeI32((p = t.pausedUplink) != null ? p : 0),
          n.writeFieldEnd());
      }
      if (
        (t.owner != null &&
          (n.writeFieldBegin({
            fname: "owner",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.owner),
          n.writeFieldEnd()),
        t.label != null)
      ) {
        var _;
        (n.writeFieldBegin({
          fname: "label",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 8,
        }),
          n.writeI32((_ = t.label) != null ? _ : 0),
          n.writeFieldEnd());
      }
      if (
        (n.writeFieldBegin({
          fname: "customVideoContentType",
          ftype: e.I32,
          fid: 9,
        }),
        t.customVideoContentType != null)
      ) {
        var f;
        n.writeI32((f = t.customVideoContentType) != null ? f : 0);
      } else {
        var g = o("WebrtcSignalingCommonTypes").CustomVideoContentType.cast(0);
        n.writeI32(g != null ? g : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.name != null &&
          (n.writeFieldBegin({
            fname: "name",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 10,
          }),
          n.writeString(t.name),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "customAudioContentType",
          ftype: e.I32,
          fid: 11,
        }),
        t.customAudioContentType != null)
      ) {
        var h;
        n.writeI32((h = t.customAudioContentType) != null ? h : 0);
      } else {
        var y = o("WebrtcSignalingCommonTypes").CustomAudioContentType.cast(0);
        n.writeI32(y != null ? y : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function M(t, n) {
      if (
        (n.writeStructBegin("QuickExperiment"),
        n.writeFieldBegin({
          fname: "parameters",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.parameters != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(t.parameters).length,
        });
        for (var o of Object.entries(t.parameters)) {
          var a = o[0],
            i = o[1];
          (n.writeString(a), j(i, n));
        }
        n.writeMapEnd();
      } else {
        var l = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(l).length,
        });
        for (var s of Object.entries(l)) {
          var u = s[0],
            c = s[1];
          (n.writeString(u), j(c, n));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "conditionFbid", ftype: e.I64, fid: 2 }),
        t.conditionFbid != null)
      )
        n.writeI64(BigInt(t.conditionFbid));
      else {
        var d = "0";
        n.writeI64(BigInt(d));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "exposureHasBeenLogged",
          ftype: e.BOOL,
          fid: 3,
        }),
        t.exposureHasBeenLogged != null)
      )
        n.writeBool(t.exposureHasBeenLogged);
      else {
        var m = !1;
        n.writeBool(m);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "canExposureLog", ftype: e.BOOL, fid: 4 }),
        t.canExposureLog != null)
      )
        n.writeBool(t.canExposureLog);
      else {
        var p = !1;
        n.writeBool(p);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "universeShortName",
          ftype: e.STRING,
          fid: 5,
        }),
        t.universeShortName != null)
      )
        n.writeString(t.universeShortName);
      else {
        var _ = "";
        n.writeString(_);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "userFbid", ftype: e.I64, fid: 6 }),
        t.userFbid != null)
      )
        n.writeI64(BigInt(t.userFbid));
      else {
        var f = "0";
        n.writeI64(BigInt(f));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "unitId", ftype: e.STRING, fid: 7 }),
        t.unitId != null)
      )
        n.writeString(t.unitId);
      else {
        var g = "";
        n.writeString(g);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function w(t, n) {
      if (
        (n.writeStructBegin("QuickExperimentResult"),
        n.writeFieldBegin({
          fname: "experiments",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.experiments != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(t.experiments).length,
        });
        for (var o of Object.entries(t.experiments)) {
          var a = o[0],
            i = o[1];
          (n.writeString(a), M(i, n));
        }
        n.writeMapEnd();
      } else {
        var l = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(l).length,
        });
        for (var s of Object.entries(l)) {
          var u = s[0],
            c = s[1];
          (n.writeString(u), M(c, n));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "userFbid", ftype: e.I64, fid: 2 }),
        t.userFbid != null)
      )
        n.writeI64(BigInt(t.userFbid));
      else {
        var d = "0";
        n.writeI64(BigInt(d));
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function A(t, n) {
      if (
        (n.writeStructBegin("QuickExperimentExposureLoggingEvent"),
        n.writeFieldBegin({
          fname: "conditionFbid",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.conditionFbid != null)
      )
        n.writeI64(BigInt(t.conditionFbid));
      else {
        var o = "0";
        n.writeI64(BigInt(o));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "userFbid", ftype: e.I64, fid: 2 }),
        t.userFbid != null)
      )
        n.writeI64(BigInt(t.userFbid));
      else {
        var a = "0";
        n.writeI64(BigInt(a));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "universeName", ftype: e.STRING, fid: 3 }),
        t.universeName != null)
      )
        n.writeString(t.universeName);
      else {
        var i = "";
        n.writeString(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "unitId", ftype: e.STRING, fid: 4 }),
        t.unitId != null)
      )
        n.writeString(t.unitId);
      else {
        var l = "";
        n.writeString(l);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function F(t, n) {
      if (
        (n.writeStructBegin("ClientTrackInfo"),
        n.writeFieldBegin({
          fname: "enabled",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.enabled != null)
      )
        n.writeBool(t.enabled);
      else {
        var a = !1;
        n.writeBool(a);
      }
      if ((n.writeFieldEnd(), t.pausedUplink != null)) {
        var i;
        (n.writeFieldBegin({
          fname: "pausedUplink",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
          n.writeI32((i = t.pausedUplink) != null ? i : 0),
          n.writeFieldEnd());
      }
      if (t.pausedDownlink != null) {
        var l;
        (n.writeFieldBegin({
          fname: "pausedDownlink",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 3,
        }),
          n.writeI32((l = t.pausedDownlink) != null ? l : 0),
          n.writeFieldEnd());
      }
      if (
        (t.owner != null &&
          (n.writeFieldBegin({
            fname: "owner",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.owner),
          n.writeFieldEnd()),
        t.label != null)
      ) {
        var s;
        (n.writeFieldBegin({
          fname: "label",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 5,
        }),
          n.writeI32((s = t.label) != null ? s : 0),
          n.writeFieldEnd());
      }
      if (
        (n.writeFieldBegin({
          fname: "customVideoContentType",
          ftype: e.I32,
          fid: 6,
        }),
        t.customVideoContentType != null)
      ) {
        var u;
        n.writeI32((u = t.customVideoContentType) != null ? u : 0);
      } else {
        var c = o("WebrtcSignalingCommonTypes").CustomVideoContentType.cast(0);
        n.writeI32(c != null ? c : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.name != null &&
          (n.writeFieldBegin({
            fname: "name",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.name),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "customAudioContentType",
          ftype: e.I32,
          fid: 8,
        }),
        t.customAudioContentType != null)
      ) {
        var d;
        n.writeI32((d = t.customAudioContentType) != null ? d : 0);
      } else {
        var m = o("WebrtcSignalingCommonTypes").CustomAudioContentType.cast(0);
        n.writeI32(m != null ? m : 0);
      }
      (n.writeFieldEnd(),
        t.nodeId != null &&
          (n.writeFieldBegin({
            fname: "nodeId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 9,
          }),
          n.writeI64(BigInt(t.nodeId)),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function O(t, n) {
      if (
        (n.writeStructBegin("ClientMediaStatus"),
        n.writeFieldBegin({
          fname: "tracks",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.tracks != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(t.tracks).length,
        });
        for (var o of Object.entries(t.tracks)) {
          var a = o[0],
            i = o[1];
          (n.writeString(a), F(i, n));
        }
        n.writeMapEnd();
      } else {
        var l = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(l).length,
        });
        for (var s of Object.entries(l)) {
          var u = s[0],
            c = s[1];
          (n.writeString(u), F(c, n));
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function B(t, n) {
      if (
        (n.writeStructBegin("SubscriptionOptions"),
        n.writeFieldBegin({
          fname: "videoQuality",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.videoQuality != null)
      ) {
        var a;
        n.writeI32((a = t.videoQuality) != null ? a : 0);
      } else {
        var i = o("MultiwaySharedTypes").VideoQuality.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(),
        t.qualityIndex != null &&
          (n.writeFieldBegin({
            fname: "qualityIndex",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 2,
          }),
          n.writeI32(t.qualityIndex),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function W(t, n) {
      if (
        (n.writeStructBegin("Subscription"),
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
        t.options != null &&
          (n.writeFieldBegin({
            fname: "options",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          B(t.options, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "type", ftype: e.I32, fid: 3 }),
        t.type != null)
      ) {
        var i;
        n.writeI32((i = t.type) != null ? i : 0);
      } else {
        var l = o("MultiwaySharedTypes").SubscriptionType.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      (n.writeFieldEnd(),
        t.trackId != null &&
          (n.writeFieldBegin({
            fname: "trackId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.trackId),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function q(t, n) {
      if (
        (n.writeStructBegin("LoggingOptions"),
        n.writeFieldBegin({
          fname: "restrictiveLogging",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.restrictiveLogging != null)
      )
        n.writeBool(t.restrictiveLogging);
      else {
        var o = !0;
        n.writeBool(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "verboseLogging", ftype: e.BOOL, fid: 2 }),
        t.verboseLogging != null)
      )
        n.writeBool(t.verboseLogging);
      else {
        var a = !1;
        n.writeBool(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function U(t, n) {
      if (
        (n.writeStructBegin("ResolutionData"),
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
        n.writeFieldBegin({ fname: "streamId", ftype: e.STRING, fid: 2 }),
        t.streamId != null)
      )
        n.writeString(t.streamId);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "streamType", ftype: e.I32, fid: 3 }),
        t.streamType != null)
      )
        n.writeI32(t.streamType);
      else {
        var i = 0;
        n.writeI32(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "renderWidth", ftype: e.I32, fid: 4 }),
        t.renderWidth != null)
      )
        n.writeI32(t.renderWidth);
      else {
        var l = 0;
        n.writeI32(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "renderHeight", ftype: e.I32, fid: 5 }),
        t.renderHeight != null)
      )
        n.writeI32(t.renderHeight);
      else {
        var s = 0;
        n.writeI32(s);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function V(t, n) {
      (n.writeStructBegin("TurnInfo"),
        t.ipv4 != null &&
          (n.writeFieldBegin({
            fname: "ipv4",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeBinary(t.ipv4),
          n.writeFieldEnd()),
        t.ipv6 != null &&
          (n.writeFieldBegin({
            fname: "ipv6",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeBinary(t.ipv6),
          n.writeFieldEnd()),
        t.udpPort != null &&
          (n.writeFieldBegin({
            fname: "udpPort",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 3,
          }),
          n.writeI32(t.udpPort),
          n.writeFieldEnd()),
        t.tcpPort != null &&
          (n.writeFieldBegin({
            fname: "tcpPort",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 4,
          }),
          n.writeI32(t.tcpPort),
          n.writeFieldEnd()),
        t.sslTcpPort != null &&
          (n.writeFieldBegin({
            fname: "sslTcpPort",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 5,
          }),
          n.writeI32(t.sslTcpPort),
          n.writeFieldEnd()),
        t.portInfoIdx != null &&
          (n.writeFieldBegin({
            fname: "portInfoIdx",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 6,
          }),
          n.writeI32(t.portInfoIdx),
          n.writeFieldEnd()),
        t.tlsPort != null &&
          (n.writeFieldBegin({
            fname: "tlsPort",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 7,
          }),
          n.writeI32(t.tlsPort),
          n.writeFieldEnd()),
        t.credentialIdx != null &&
          (n.writeFieldBegin({
            fname: "credentialIdx",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 8,
          }),
          n.writeI32(t.credentialIdx),
          n.writeFieldEnd()),
        t.turnUsername != null &&
          (n.writeFieldBegin({
            fname: "turnUsername",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 9,
          }),
          n.writeString(t.turnUsername),
          n.writeFieldEnd()),
        t.turnPassword != null &&
          (n.writeFieldBegin({
            fname: "turnPassword",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 10,
          }),
          n.writeString(t.turnPassword),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function H(t, n) {
      if ((n.writeStructBegin("EdgerayInfo"), t.edgerayType != null)) {
        var o;
        (n.writeFieldBegin({
          fname: "edgerayType",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
          n.writeI32((o = t.edgerayType) != null ? o : 0),
          n.writeFieldEnd());
      }
      (t.ipv4 != null &&
        (n.writeFieldBegin({
          fname: "ipv4",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 2,
        }),
        n.writeBinary(t.ipv4),
        n.writeFieldEnd()),
        t.ipv6 != null &&
          (n.writeFieldBegin({
            fname: "ipv6",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeBinary(t.ipv6),
          n.writeFieldEnd()),
        t.token != null &&
          (n.writeFieldBegin({
            fname: "token",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeBinary(t.token),
          n.writeFieldEnd()),
        t.tokenIdx != null &&
          (n.writeFieldBegin({
            fname: "tokenIdx",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 5,
          }),
          n.writeI32(t.tokenIdx),
          n.writeFieldEnd()),
        t.secret != null &&
          (n.writeFieldBegin({
            fname: "secret",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeBinary(t.secret),
          n.writeFieldEnd()),
        t.secretIdx != null &&
          (n.writeFieldBegin({
            fname: "secretIdx",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 7,
          }),
          n.writeI32(t.secretIdx),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function G(t, n) {
      if ((n.writeStructBegin("RelayInfo"), t.turns != null)) {
        (n.writeFieldBegin({
          fname: "turns",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.turns.length }));
        for (var o of t.turns) V(o, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.edgerays != null) {
        (n.writeFieldBegin({
          fname: "edgerays",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.edgerays.length }));
        for (var a of t.edgerays) H(a, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (t.turnUsername != null &&
        (n.writeFieldBegin({
          fname: "turnUsername",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 3,
        }),
        n.writeString(t.turnUsername),
        n.writeFieldEnd()),
        t.turnPassword != null &&
          (n.writeFieldBegin({
            fname: "turnPassword",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.turnPassword),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function z(t, n) {
      if (
        (n.writeStructBegin("TSocketAddress"),
        n.writeFieldBegin({
          fname: "host",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.host != null)
      )
        n.writeBinary(t.host);
      else {
        var o = Uint8Array.of();
        n.writeBinary(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "port", ftype: e.I16, fid: 2 }),
        t.port != null)
      )
        n.writeI16(t.port);
      else {
        var a = 0;
        n.writeI16(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function j(t, n) {
      if ((n.writeStructBegin("QuickExperimentValue"), t.intValue != null)) {
        (n.writeFieldBegin({
          fname: "intValue",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
          n.writeI64(BigInt(t.intValue)),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.stringValue != null) {
        (n.writeFieldBegin({
          fname: "stringValue",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 2,
        }),
          n.writeString(t.stringValue),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      (n.writeFieldStop(), n.writeStructEnd());
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
              ? (n.cluster = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.conferenceName_DO_NOT_ACCESS_DIRECTLY = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.nonce = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.roomConferenceId = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.cluster === void 0 && (n.cluster = ""),
        n.nonce === void 0 && (n.nonce = ""),
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
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.cluster = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.conferenceName = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.nonce = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.userId = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.clientSessionId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.cluster === void 0 && (n.cluster = ""),
        n.conferenceName === void 0 && (n.conferenceName = ""),
        n.nonce === void 0 && (n.nonce = ""),
        n.userId === void 0 && (n.userId = ""),
        n.clientSessionId === void 0 && (n.clientSessionId = ""),
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
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.deviceId = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.appId = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.appVersion = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.appBuildNumber = t.readString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.clientStackInfo = t.readString())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.familyDeviceId = t.readString())
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
        n.deviceId === void 0 && (n.deviceId = ""),
        n.appId === void 0 && (n.appId = ""),
        n.appVersion === void 0 && (n.appVersion = ""),
        n.appBuildNumber === void 0 && (n.appBuildNumber = ""),
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
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.mode = o("MultiwaySharedTypes").E2eeMode.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.preventSfuMode = t.readBool())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.infraMandatedExpStatus = o(
                  "MultiwaySharedTypes",
                ).E2eeInfraMandatedExpStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.mode === void 0 &&
          (n.mode = o("MultiwaySharedTypes").E2eeMode.cast(0)),
        n.preventSfuMode === void 0 && (n.preventSfuMode = !1),
        n.infraMandatedExpStatus === void 0 &&
          (n.infraMandatedExpStatus = o(
            "MultiwaySharedTypes",
          ).E2eeInfraMandatedExpStatus.cast(0)),
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
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.semantics = t.readString())
              : t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.ssrcs = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readI64().toString();
                n.ssrcs.push(u);
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
        n.semantics === void 0 && (n.semantics = ""),
        n.ssrcs === void 0 && (n.ssrcs = []),
        n
      );
    }
    function Z(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.type = o("MultiwaySharedTypes").MediaType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.id = t.readString())
              : t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.ssrcs = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = t.readI64().toString();
                n.ssrcs.push(c);
              }
            } else t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enabled = t.readBool())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.pausedDownlink = o(
                  "MultiwaySharedTypes",
                ).MediaPauseStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.pausedUplink = o(
                  "MultiwaySharedTypes",
                ).MediaPauseStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.owner = t.readString())
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.label = o("WebrtcSignalingCommonTypes").TrackLabel.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.customVideoContentType = o(
                  "WebrtcSignalingCommonTypes",
                ).CustomVideoContentType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 10:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.name = t.readString())
              : t.skip(i);
            break;
          case 11:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.customAudioContentType = o(
                  "WebrtcSignalingCommonTypes",
                ).CustomAudioContentType.cast(t.readI32()))
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
          (n.type = o("MultiwaySharedTypes").MediaType.cast(0)),
        n.id === void 0 && (n.id = ""),
        n.ssrcs === void 0 && (n.ssrcs = []),
        n.enabled === void 0 && (n.enabled = !1),
        n.customVideoContentType === void 0 &&
          (n.customVideoContentType = o(
            "WebrtcSignalingCommonTypes",
          ).CustomVideoContentType.cast(0)),
        n.customAudioContentType === void 0 &&
          (n.customAudioContentType = o(
            "WebrtcSignalingCommonTypes",
          ).CustomAudioContentType.cast(0)),
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
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.parameters = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readString(),
                  c = pe(t);
                n.parameters[u] = c;
              }
            } else t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.conditionFbid = t.readI64().toString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.exposureHasBeenLogged = t.readBool())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.canExposureLog = t.readBool())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.universeShortName = t.readString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.userFbid = t.readI64().toString())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.unitId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.parameters === void 0 && (n.parameters = {}),
        n.conditionFbid === void 0 && (n.conditionFbid = "0"),
        n.exposureHasBeenLogged === void 0 && (n.exposureHasBeenLogged = !1),
        n.canExposureLog === void 0 && (n.canExposureLog = !1),
        n.universeShortName === void 0 && (n.universeShortName = ""),
        n.userFbid === void 0 && (n.userFbid = "0"),
        n.unitId === void 0 && (n.unitId = ""),
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
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.experiments = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readString(),
                  c = ee(t);
                n.experiments[u] = c;
              }
            } else t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.userFbid = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.experiments === void 0 && (n.experiments = {}),
        n.userFbid === void 0 && (n.userFbid = "0"),
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
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.conditionFbid = t.readI64().toString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.userFbid = t.readI64().toString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.universeName = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.unitId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.conditionFbid === void 0 && (n.conditionFbid = "0"),
        n.userFbid === void 0 && (n.userFbid = "0"),
        n.universeName === void 0 && (n.universeName = ""),
        n.unitId === void 0 && (n.unitId = ""),
        n
      );
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
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enabled = t.readBool())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.pausedUplink = o(
                  "MultiwaySharedTypes",
                ).MediaPauseStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.pausedDownlink = o(
                  "MultiwaySharedTypes",
                ).MediaPauseStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.owner = t.readString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.label = o("WebrtcSignalingCommonTypes").TrackLabel.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.customVideoContentType = o(
                  "WebrtcSignalingCommonTypes",
                ).CustomVideoContentType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.name = t.readString())
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.customAudioContentType = o(
                  "WebrtcSignalingCommonTypes",
                ).CustomAudioContentType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.nodeId = t.readI64().toString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.enabled === void 0 && (n.enabled = !1),
        n.customVideoContentType === void 0 &&
          (n.customVideoContentType = o(
            "WebrtcSignalingCommonTypes",
          ).CustomVideoContentType.cast(0)),
        n.customAudioContentType === void 0 &&
          (n.customAudioContentType = o(
            "WebrtcSignalingCommonTypes",
          ).CustomAudioContentType.cast(0)),
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
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.tracks = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readString(),
                  c = re(t);
                n.tracks[u] = c;
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.tracks === void 0 && (n.tracks = {}), n);
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
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.videoQuality = o("MultiwaySharedTypes").VideoQuality.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.qualityIndex = t.readI32())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.videoQuality === void 0 &&
          (n.videoQuality = o("MultiwaySharedTypes").VideoQuality.cast(0)),
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
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.cname = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.options = ae(t))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.type = o("MultiwaySharedTypes").SubscriptionType.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.trackId = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.cname === void 0 && (n.cname = ""),
        n.type === void 0 &&
          (n.type = o("MultiwaySharedTypes").SubscriptionType.cast(0)),
        n
      );
    }
    function le(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.restrictiveLogging = t.readBool())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.verboseLogging = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.restrictiveLogging === void 0 && (n.restrictiveLogging = !0),
        n.verboseLogging === void 0 && (n.verboseLogging = !1),
        n
      );
    }
    function se(t) {
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
              ? (n.streamId = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.streamType = t.readI32())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.renderWidth = t.readI32())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.renderHeight = t.readI32())
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
        n.streamId === void 0 && (n.streamId = ""),
        n.streamType === void 0 && (n.streamType = 0),
        n.renderWidth === void 0 && (n.renderWidth = 0),
        n.renderHeight === void 0 && (n.renderHeight = 0),
        n
      );
    }
    function ue(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.ipv4 = t.readBinary())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.ipv6 = t.readBinary())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.udpPort = t.readI32())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.tcpPort = t.readI32())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.sslTcpPort = t.readI32())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.portInfoIdx = t.readI32())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.tlsPort = t.readI32())
              : t.skip(a);
            break;
          case 8:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.credentialIdx = t.readI32())
              : t.skip(a);
            break;
          case 9:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.turnUsername = t.readString())
              : t.skip(a);
            break;
          case 10:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.turnPassword = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function ce(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.edgerayType = o("MultiwaySharedTypes").EdgerayType.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.ipv4 = t.readBinary())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.ipv6 = t.readBinary())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.token = t.readBinary())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.tokenIdx = t.readI32())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.secret = t.readBinary())
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.secretIdx = t.readI32())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function de(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.turns = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = ue(t);
                n.turns.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.edgerays = [];
              for (var c = t.readListBegin(), d = 0; d < c.size; d++) {
                var m = ce(t);
                n.edgerays.push(m);
              }
            } else t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.turnUsername = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.turnPassword = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function me(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.host = t.readBinary())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I16
              ? (n.port = t.readI16())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.host === void 0 && (n.host = Uint8Array.of()),
        n.port === void 0 && (n.port = 0),
        n
      );
    }
    function pe(t) {
      var n,
        o = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).I64)
              if (n == null)
                ((o.intValue = t.readI64().toString()), (n = "intValue"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: QuickExperimentValue; current field: intValue, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).STRING)
              if (n == null)
                ((o.stringValue = t.readString()), (n = "stringValue"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: QuickExperimentValue; current field: stringValue, previous deserialized field: " +
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
    ((l.ServerInfo$DefaultConstructor = s),
      (l.ClientSessionInfo$DefaultConstructor = u),
      (l.Endpoint$DefaultConstructor = c),
      (l.E2eeEnforcement$DefaultConstructor = d),
      (l.SsrcGroup$DefaultConstructor = m),
      (l.Media$DefaultConstructor = p),
      (l.QuickExperiment$DefaultConstructor = _),
      (l.QuickExperimentResult$DefaultConstructor = f),
      (l.QuickExperimentExposureLoggingEvent$DefaultConstructor = g),
      (l.ClientTrackInfo$DefaultConstructor = h),
      (l.ClientMediaStatus$DefaultConstructor = y),
      (l.SubscriptionOptions$DefaultConstructor = C),
      (l.Subscription$DefaultConstructor = b),
      (l.LoggingOptions$DefaultConstructor = v),
      (l.ResolutionData$DefaultConstructor = S),
      (l.TurnInfo$DefaultConstructor = R),
      (l.EdgerayInfo$DefaultConstructor = L),
      (l.RelayInfo$DefaultConstructor = E),
      (l.TSocketAddress$DefaultConstructor = k),
      (l.QuickExperimentValue$DefaultConstructor = I),
      (l.serializeServerInfo = T),
      (l.serializeClientSessionInfo = D),
      (l.serializeEndpoint = x),
      (l.serializeE2eeEnforcement = $),
      (l.serializeSsrcGroup = P),
      (l.serializeMedia = N),
      (l.serializeQuickExperiment = M),
      (l.serializeQuickExperimentResult = w),
      (l.serializeQuickExperimentExposureLoggingEvent = A),
      (l.serializeClientTrackInfo = F),
      (l.serializeClientMediaStatus = O),
      (l.serializeSubscriptionOptions = B),
      (l.serializeSubscription = W),
      (l.serializeLoggingOptions = q),
      (l.serializeResolutionData = U),
      (l.serializeTurnInfo = V),
      (l.serializeEdgerayInfo = H),
      (l.serializeRelayInfo = G),
      (l.serializeTSocketAddress = z),
      (l.serializeQuickExperimentValue = j),
      (l.deserializeServerInfo = K),
      (l.deserializeClientSessionInfo = Q),
      (l.deserializeEndpoint = X),
      (l.deserializeE2eeEnforcement = Y),
      (l.deserializeSsrcGroup = J),
      (l.deserializeMedia = Z),
      (l.deserializeQuickExperiment = ee),
      (l.deserializeQuickExperimentResult = te),
      (l.deserializeQuickExperimentExposureLoggingEvent = ne),
      (l.deserializeClientTrackInfo = re),
      (l.deserializeClientMediaStatus = oe),
      (l.deserializeSubscriptionOptions = ae),
      (l.deserializeSubscription = ie),
      (l.deserializeLoggingOptions = le),
      (l.deserializeResolutionData = se),
      (l.deserializeTurnInfo = ue),
      (l.deserializeEdgerayInfo = ce),
      (l.deserializeRelayInfo = de),
      (l.deserializeTSocketAddress = me),
      (l.deserializeQuickExperimentValue = pe));
  },
  98,
);
