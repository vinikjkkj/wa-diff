__d(
  "ConfigEngineStateConfigEngineStateSerializers",
  [
    "ConfigEngineStateConfigEngineStateTypes",
    "RtcClientRuleFromServerToClientSerializers",
    "RtcOverlayConfigServerLayerSerializers",
    "ThriftTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {};
    }
    function u() {
      return {
        overlayConfigServerLayer: o(
          "RtcOverlayConfigServerLayerSerializers",
        ).OverlayConfigServerLayer$DefaultConstructor(),
      };
    }
    function c() {
      return {};
    }
    function d() {
      return {};
    }
    function m() {
      return {
        userId: "",
        streamId: "",
        streamType: 0,
        renderWidth: 0,
        renderHeight: 0,
      };
    }
    function p() {
      return {};
    }
    function _(t, n) {
      if (
        (n.writeStructBegin("ConfigEngineClientInputState"),
        t.deviceStatsTriggers != null &&
          (n.writeFieldBegin({
            fname: "deviceStatsTriggers",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          h(t.deviceStatsTriggers, n),
          n.writeFieldEnd()),
        t.deviceStats != null &&
          (n.writeFieldBegin({
            fname: "deviceStats",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          g(t.deviceStats, n),
          n.writeFieldEnd()),
        t.renderResolutionMap != null)
      ) {
        (n.writeFieldBegin({
          fname: "renderResolutionMap",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 3,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.MAP,
            size: Object.keys(t.renderResolutionMap).length,
          }));
        for (var o of Object.entries(t.renderResolutionMap)) {
          var a = o[0],
            i = o[1];
          (n.writeString(a),
            n.writeMapBegin({
              ktype: (e || (e = r("ThriftTypes"))).I32,
              vtype: e.STRUCT,
              size: Object.keys(i).length,
            }));
          for (var l of Object.entries(i)) {
            var s,
              u = l[0],
              c = l[1];
            (n.writeI32((s = Number(u)) != null ? s : 0), y(c, n));
          }
          n.writeMapEnd();
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      (t.deviceHardwareInfo != null &&
        (n.writeFieldBegin({
          fname: "deviceHardwareInfo",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 4,
        }),
        C(t.deviceHardwareInfo, n),
        n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function f(t, n) {
      if (
        (n.writeStructBegin("ConfigEngineClientOutputState"),
        n.writeFieldBegin({
          fname: "overlayConfigServerLayer",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 2,
        }),
        t.overlayConfigServerLayer != null)
      )
        o(
          "RtcOverlayConfigServerLayerSerializers",
        ).serializeOverlayConfigServerLayer(t.overlayConfigServerLayer, n);
      else {
        var a = o(
          "RtcOverlayConfigServerLayerSerializers",
        ).OverlayConfigServerLayer$DefaultConstructor();
        o(
          "RtcOverlayConfigServerLayerSerializers",
        ).serializeOverlayConfigServerLayer(a, n);
      }
      if ((n.writeFieldEnd(), t.clientRules != null)) {
        (n.writeFieldBegin({
          fname: "clientRules",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 3,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.clientRules.length }));
        for (var i of t.clientRules)
          o(
            "RtcClientRuleFromServerToClientSerializers",
          ).serializeClientRuleFromServerToClient(i, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function g(t, n) {
      if (
        (n.writeStructBegin("DeviceStats"),
        t.cpuPercentage != null &&
          (n.writeFieldBegin({
            fname: "cpuPercentage",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 1,
          }),
          n.writeI32(t.cpuPercentage),
          n.writeFieldEnd()),
        t.batteryLeftPercentage != null &&
          (n.writeFieldBegin({
            fname: "batteryLeftPercentage",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 2,
          }),
          n.writeI32(t.batteryLeftPercentage),
          n.writeFieldEnd()),
        t.thermalStatusCode != null &&
          (n.writeFieldBegin({
            fname: "thermalStatusCode",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 3,
          }),
          n.writeI32(t.thermalStatusCode),
          n.writeFieldEnd()),
        t.connectionType != null)
      ) {
        var o;
        (n.writeFieldBegin({
          fname: "connectionType",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 4,
        }),
          n.writeI32((o = t.connectionType) != null ? o : 0),
          n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function h(t, n) {
      if (
        (n.writeStructBegin("DeviceStatsTriggers"), t.temperatureStatus != null)
      ) {
        var o;
        (n.writeFieldBegin({
          fname: "temperatureStatus",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
          n.writeI32((o = t.temperatureStatus) != null ? o : 0),
          n.writeFieldEnd());
      }
      if (t.batteryStatus != null) {
        var a;
        (n.writeFieldBegin({
          fname: "batteryStatus",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
          n.writeI32((a = t.batteryStatus) != null ? a : 0),
          n.writeFieldEnd());
      }
      if (t.cpuStatus != null) {
        var i;
        (n.writeFieldBegin({
          fname: "cpuStatus",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 3,
        }),
          n.writeI32((i = t.cpuStatus) != null ? i : 0),
          n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function y(t, n) {
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
    function C(t, n) {
      (n.writeStructBegin("DeviceHardwareInfo"),
        t.numCores != null &&
          (n.writeFieldBegin({
            fname: "numCores",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 1,
          }),
          n.writeI32(t.numCores),
          n.writeFieldEnd()),
        t.RAM != null &&
          (n.writeFieldBegin({
            fname: "RAM",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 2,
          }),
          n.writeI32(t.RAM),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function b(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.deviceStatsTriggers = R(t))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.deviceStats = S(t))
              : t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.renderResolutionMap = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                for (
                  var c = t.readString(), d = {}, m = t.readMapBegin(), p = 0;
                  p < m.size;
                  p++
                ) {
                  var _ = o(
                      "ConfigEngineStateConfigEngineStateTypes",
                    ).RenderedStreamType.cast(t.readI32()),
                    f = L(t);
                  _ != null && (d[_] = f);
                }
                n.renderResolutionMap[c] = d;
              }
            } else t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.deviceHardwareInfo = E(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function v(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.overlayConfigServerLayer = o(
                  "RtcOverlayConfigServerLayerSerializers",
                ).deserializeOverlayConfigServerLayer(t))
              : t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.clientRules = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = o(
                  "RtcClientRuleFromServerToClientSerializers",
                ).deserializeClientRuleFromServerToClient(t);
                n.clientRules.push(c);
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
        n.overlayConfigServerLayer === void 0 &&
          (n.overlayConfigServerLayer = o(
            "RtcOverlayConfigServerLayerSerializers",
          ).OverlayConfigServerLayer$DefaultConstructor()),
        n
      );
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
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.cpuPercentage = t.readI32())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.batteryLeftPercentage = t.readI32())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.thermalStatusCode = t.readI32())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.connectionType = o(
                  "ConfigEngineStateConfigEngineStateTypes",
                ).NetworkConnectionType.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
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
              ? (n.temperatureStatus = o(
                  "ConfigEngineStateConfigEngineStateTypes",
                ).DeviceStatsTriggerLevel.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.batteryStatus = o(
                  "ConfigEngineStateConfigEngineStateTypes",
                ).DeviceStatsTriggerLevel.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.cpuStatus = o(
                  "ConfigEngineStateConfigEngineStateTypes",
                ).DeviceStatsTriggerLevel.cast(t.readI32()))
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
    function E(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.numCores = t.readI32())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.RAM = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    ((l.ConfigEngineClientInputState$DefaultConstructor = s),
      (l.ConfigEngineClientOutputState$DefaultConstructor = u),
      (l.DeviceStats$DefaultConstructor = c),
      (l.DeviceStatsTriggers$DefaultConstructor = d),
      (l.ResolutionData$DefaultConstructor = m),
      (l.DeviceHardwareInfo$DefaultConstructor = p),
      (l.serializeConfigEngineClientInputState = _),
      (l.serializeConfigEngineClientOutputState = f),
      (l.serializeDeviceStats = g),
      (l.serializeDeviceStatsTriggers = h),
      (l.serializeResolutionData = y),
      (l.serializeDeviceHardwareInfo = C),
      (l.deserializeConfigEngineClientInputState = b),
      (l.deserializeConfigEngineClientOutputState = v),
      (l.deserializeDeviceStats = S),
      (l.deserializeDeviceStatsTriggers = R),
      (l.deserializeResolutionData = L),
      (l.deserializeDeviceHardwareInfo = E));
  },
  98,
);
