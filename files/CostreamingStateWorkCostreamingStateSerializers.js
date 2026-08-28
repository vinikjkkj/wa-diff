__d(
  "CostreamingStateWorkCostreamingStateSerializers",
  ["CostreamingStateWorkCostreamingStateTypes", "ThriftTypes", "jsbi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {
        userId: "0",
        mediaStreamType: o(
          "CostreamingStateWorkCostreamingStateTypes",
        ).MediaStreamType.cast(0),
      };
    }
    function u() {
      return {};
    }
    function c() {
      return {
        layoutType: o(
          "CostreamingStateWorkCostreamingStateTypes",
        ).LayoutType.cast(0),
        mediaStreams: [],
      };
    }
    function d() {
      return { stageInfo: c() };
    }
    function m() {
      return {
        liveStreamingStatus: o(
          "CostreamingStateWorkCostreamingStateTypes",
        ).LiveStreamingStatus.cast(0),
        stageInfo: c(),
      };
    }
    function p() {
      return {
        liveStreamingStatus: o(
          "CostreamingStateWorkCostreamingStateTypes",
        ).LiveStreamingStatus.cast(0),
      };
    }
    function _() {
      return {
        liveStreamingStatus: o(
          "CostreamingStateWorkCostreamingStateTypes",
        ).LiveStreamingStatus.cast(0),
        stageInfo: c(),
      };
    }
    function f() {
      return {
        liveStreamingStatus: o(
          "CostreamingStateWorkCostreamingStateTypes",
        ).LiveStreamingStatus.cast(0),
      };
    }
    function g() {
      return { stageInfo: c() };
    }
    function h(t, n) {
      if (
        (n.writeStructBegin("MediaStream"),
        n.writeFieldBegin({
          fname: "userId",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.userId != null)
      )
        n.writeI64(r("jsbi").BigInt(t.userId));
      else {
        var a = "0";
        n.writeI64(r("jsbi").BigInt(a));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "mediaStreamType", ftype: e.I32, fid: 2 }),
        t.mediaStreamType != null)
      ) {
        var i;
        n.writeI32((i = t.mediaStreamType) != null ? i : 0);
      } else {
        var l = o(
          "CostreamingStateWorkCostreamingStateTypes",
        ).MediaStreamType.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function y(t, n) {
      (n.writeStructBegin("LayoutExtra"),
        t.pinnedMediaStream != null &&
          (n.writeFieldBegin({
            fname: "pinnedMediaStream",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          h(t.pinnedMediaStream, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function C(t, n) {
      if (
        (n.writeStructBegin("StageInfo"),
        n.writeFieldBegin({
          fname: "layoutType",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.layoutType != null)
      ) {
        var a;
        n.writeI32((a = t.layoutType) != null ? a : 0);
      } else {
        var i = o("CostreamingStateWorkCostreamingStateTypes").LayoutType.cast(
          0,
        );
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "mediaStreams", ftype: e.LIST, fid: 2 }),
        t.mediaStreams != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.mediaStreams.length,
        });
        for (var l of t.mediaStreams) h(l, n);
        n.writeListEnd();
      } else {
        var s = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: s.length,
        });
        for (var u of s) h(u, n);
        n.writeListEnd();
      }
      (n.writeFieldEnd(),
        t.layoutExtra != null &&
          (n.writeFieldBegin({
            fname: "layoutExtra",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          y(t.layoutExtra, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function b(t, n) {
      if (
        (n.writeStructBegin("WorkCostreamingClientInputState"),
        n.writeFieldBegin({
          fname: "stageInfo",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.stageInfo != null)
      )
        C(t.stageInfo, n);
      else {
        var o = c();
        C(o, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function v(t, n) {
      if (
        (n.writeStructBegin("WorkCostreamingClientOutputState"),
        n.writeFieldBegin({
          fname: "liveStreamingStatus",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.liveStreamingStatus != null)
      ) {
        var a;
        n.writeI32((a = t.liveStreamingStatus) != null ? a : 0);
      } else {
        var i = o(
          "CostreamingStateWorkCostreamingStateTypes",
        ).LiveStreamingStatus.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "stageInfo", ftype: e.STRUCT, fid: 2 }),
        t.stageInfo != null)
      )
        C(t.stageInfo, n);
      else {
        var l = c();
        C(l, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function S(t, n) {
      if (
        (n.writeStructBegin("WorkCostreamingConferenceInputState"),
        n.writeFieldBegin({
          fname: "liveStreamingStatus",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.liveStreamingStatus != null)
      ) {
        var a;
        n.writeI32((a = t.liveStreamingStatus) != null ? a : 0);
      } else {
        var i = o(
          "CostreamingStateWorkCostreamingStateTypes",
        ).LiveStreamingStatus.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function R(t, n) {
      if (
        (n.writeStructBegin("WorkCostreamingConferenceOutputState"),
        n.writeFieldBegin({
          fname: "liveStreamingStatus",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.liveStreamingStatus != null)
      ) {
        var a;
        n.writeI32((a = t.liveStreamingStatus) != null ? a : 0);
      } else {
        var i = o(
          "CostreamingStateWorkCostreamingStateTypes",
        ).LiveStreamingStatus.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "stageInfo", ftype: e.STRUCT, fid: 2 }),
        t.stageInfo != null)
      )
        C(t.stageInfo, n);
      else {
        var l = c();
        C(l, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function L(t, n) {
      if (
        (n.writeStructBegin("WorkCostreamingExtensionInputState"),
        n.writeFieldBegin({
          fname: "liveStreamingStatus",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.liveStreamingStatus != null)
      ) {
        var a;
        n.writeI32((a = t.liveStreamingStatus) != null ? a : 0);
      } else {
        var i = o(
          "CostreamingStateWorkCostreamingStateTypes",
        ).LiveStreamingStatus.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function E(t, n) {
      if (
        (n.writeStructBegin("WorkCostreamingExtensionOutputState"),
        n.writeFieldBegin({
          fname: "stageInfo",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.stageInfo != null)
      )
        C(t.stageInfo, n);
      else {
        var o = c();
        C(o, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
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
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.userId = t.readI64().toString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.mediaStreamType = o(
                  "CostreamingStateWorkCostreamingStateTypes",
                ).MediaStreamType.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.userId === void 0 && (n.userId = "0"),
        n.mediaStreamType === void 0 &&
          (n.mediaStreamType = o(
            "CostreamingStateWorkCostreamingStateTypes",
          ).MediaStreamType.cast(0)),
        n
      );
    }
    function I(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.pinnedMediaStream = k(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
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
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.layoutType = o(
                  "CostreamingStateWorkCostreamingStateTypes",
                ).LayoutType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.mediaStreams = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = k(t);
                n.mediaStreams.push(c);
              }
            } else t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.layoutExtra = I(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.layoutType === void 0 &&
          (n.layoutType = o(
            "CostreamingStateWorkCostreamingStateTypes",
          ).LayoutType.cast(0)),
        n.mediaStreams === void 0 && (n.mediaStreams = []),
        n
      );
    }
    function D(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.stageInfo = T(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.stageInfo === void 0 && (n.stageInfo = c()),
        n
      );
    }
    function x(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.liveStreamingStatus = o(
                  "CostreamingStateWorkCostreamingStateTypes",
                ).LiveStreamingStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.stageInfo = T(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.liveStreamingStatus === void 0 &&
          (n.liveStreamingStatus = o(
            "CostreamingStateWorkCostreamingStateTypes",
          ).LiveStreamingStatus.cast(0)),
        n.stageInfo === void 0 && (n.stageInfo = c()),
        n
      );
    }
    function $(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.liveStreamingStatus = o(
                  "CostreamingStateWorkCostreamingStateTypes",
                ).LiveStreamingStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.liveStreamingStatus === void 0 &&
          (n.liveStreamingStatus = o(
            "CostreamingStateWorkCostreamingStateTypes",
          ).LiveStreamingStatus.cast(0)),
        n
      );
    }
    function P(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.liveStreamingStatus = o(
                  "CostreamingStateWorkCostreamingStateTypes",
                ).LiveStreamingStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.stageInfo = T(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.liveStreamingStatus === void 0 &&
          (n.liveStreamingStatus = o(
            "CostreamingStateWorkCostreamingStateTypes",
          ).LiveStreamingStatus.cast(0)),
        n.stageInfo === void 0 && (n.stageInfo = c()),
        n
      );
    }
    function N(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.liveStreamingStatus = o(
                  "CostreamingStateWorkCostreamingStateTypes",
                ).LiveStreamingStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.liveStreamingStatus === void 0 &&
          (n.liveStreamingStatus = o(
            "CostreamingStateWorkCostreamingStateTypes",
          ).LiveStreamingStatus.cast(0)),
        n
      );
    }
    function M(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.stageInfo = T(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.stageInfo === void 0 && (n.stageInfo = c()),
        n
      );
    }
    ((l.MediaStream$DefaultConstructor = s),
      (l.LayoutExtra$DefaultConstructor = u),
      (l.StageInfo$DefaultConstructor = c),
      (l.WorkCostreamingClientInputState$DefaultConstructor = d),
      (l.WorkCostreamingClientOutputState$DefaultConstructor = m),
      (l.WorkCostreamingConferenceInputState$DefaultConstructor = p),
      (l.WorkCostreamingConferenceOutputState$DefaultConstructor = _),
      (l.WorkCostreamingExtensionInputState$DefaultConstructor = f),
      (l.WorkCostreamingExtensionOutputState$DefaultConstructor = g),
      (l.serializeMediaStream = h),
      (l.serializeLayoutExtra = y),
      (l.serializeStageInfo = C),
      (l.serializeWorkCostreamingClientInputState = b),
      (l.serializeWorkCostreamingClientOutputState = v),
      (l.serializeWorkCostreamingConferenceInputState = S),
      (l.serializeWorkCostreamingConferenceOutputState = R),
      (l.serializeWorkCostreamingExtensionInputState = L),
      (l.serializeWorkCostreamingExtensionOutputState = E),
      (l.deserializeMediaStream = k),
      (l.deserializeLayoutExtra = I),
      (l.deserializeStageInfo = T),
      (l.deserializeWorkCostreamingClientInputState = D),
      (l.deserializeWorkCostreamingClientOutputState = x),
      (l.deserializeWorkCostreamingConferenceInputState = $),
      (l.deserializeWorkCostreamingConferenceOutputState = P),
      (l.deserializeWorkCostreamingExtensionInputState = N),
      (l.deserializeWorkCostreamingExtensionOutputState = M));
  },
  98,
);
