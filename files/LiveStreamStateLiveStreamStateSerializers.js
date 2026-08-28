__d(
  "LiveStreamStateLiveStreamStateSerializers",
  ["LiveStreamStateLiveStreamStateTypes", "ThriftTypes", "jsbi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {
        audience: o(
          "LiveStreamStateLiveStreamStateTypes",
        ).LiveStreamAudience.cast(0),
        target: o("LiveStreamStateLiveStreamStateTypes").LiveStreamTarget.cast(
          0,
        ),
        hostId: "",
      };
    }
    function u() {
      return { userId: "0", mediaSourceId: S() };
    }
    function c() {
      return {};
    }
    function d() {
      return {};
    }
    function m() {
      return {
        layoutType: o("LiveStreamStateLiveStreamStateTypes").LayoutType.cast(0),
      };
    }
    function p() {
      return { screenSharingUserIds: [] };
    }
    function _() {
      return { activeSpeakerUserIds: [] };
    }
    function f() {
      return {};
    }
    function g() {
      return {};
    }
    function h() {
      return {
        liveStreamStatus: o(
          "LiveStreamStateLiveStreamStateTypes",
        ).LiveStreamStatus.cast(0),
        acceptedUsers: [],
      };
    }
    function y() {
      return {
        liveStreamStatus: o(
          "LiveStreamStateLiveStreamStateTypes",
        ).LiveStreamStatus.cast(0),
        negotiationMode: o(
          "LiveStreamStateLiveStreamStateTypes",
        ).NegotiationMode.cast(0),
      };
    }
    function C() {
      return {
        allowedUsers: [],
        subscribedUsers: [],
        liveStreamStatus: o(
          "LiveStreamStateLiveStreamStateTypes",
        ).LiveStreamStatus.cast(0),
        negotiationMode: o(
          "LiveStreamStateLiveStreamStateTypes",
        ).NegotiationMode.cast(0),
      };
    }
    function b() {
      return { broadcastParticipants: [] };
    }
    function v() {
      return {};
    }
    function S() {
      return {};
    }
    function R() {
      return {};
    }
    function L(t, n) {
      if (
        (n.writeStructBegin("LiveStreamOptInInfo"),
        n.writeFieldBegin({
          fname: "audience",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.audience != null)
      ) {
        var a;
        n.writeI32((a = t.audience) != null ? a : 0);
      } else {
        var i = o(
          "LiveStreamStateLiveStreamStateTypes",
        ).LiveStreamAudience.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "target", ftype: e.I32, fid: 2 }),
        t.target != null)
      ) {
        var l;
        n.writeI32((l = t.target) != null ? l : 0);
      } else {
        var s = o("LiveStreamStateLiveStreamStateTypes").LiveStreamTarget.cast(
          0,
        );
        n.writeI32(s != null ? s : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.targetName != null &&
          (n.writeFieldBegin({
            fname: "targetName",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.targetName),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "hostId", ftype: e.STRING, fid: 4 }),
        t.hostId != null)
      )
        n.writeString(t.hostId);
      else {
        var u = "";
        n.writeString(u);
      }
      (n.writeFieldEnd(),
        t.targetSize != null &&
          (n.writeFieldBegin({
            fname: "targetSize",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.targetSize),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function E(t, n) {
      if (
        (n.writeStructBegin("UserMediaSourceId"),
        n.writeFieldBegin({
          fname: "userId",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.userId != null)
      )
        n.writeI64(r("jsbi").BigInt(t.userId));
      else {
        var o = "0";
        n.writeI64(r("jsbi").BigInt(o));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "mediaSourceId", ftype: e.STRUCT, fid: 2 }),
        t.mediaSourceId != null)
      )
        O(t.mediaSourceId, n);
      else {
        var a = S();
        O(a, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function k(t, n) {
      if ((n.writeStructBegin("GridLayoutExtra"), t.gridUsers != null)) {
        (n.writeFieldBegin({
          fname: "gridUsers",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.gridUsers.length }));
        for (var o of t.gridUsers) E(o, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function I(t, n) {
      if (
        (n.writeStructBegin("DominantLayoutExtra"), t.dominantUsers != null)
      ) {
        (n.writeFieldBegin({
          fname: "dominantUsers",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.dominantUsers.length }));
        for (var o of t.dominantUsers) E(o, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function T(t, n) {
      if (
        (n.writeStructBegin("LayoutInfo"),
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
        var i = o("LiveStreamStateLiveStreamStateTypes").LayoutType.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(),
        t.layoutExtra != null &&
          (n.writeFieldBegin({
            fname: "layoutExtra",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          B(t.layoutExtra, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function D(t, n) {
      if (
        (n.writeStructBegin("ScreenShareInfo"),
        n.writeFieldBegin({
          fname: "screenSharingUserIds",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.screenSharingUserIds != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).I64,
          size: t.screenSharingUserIds.length,
        });
        for (var o of t.screenSharingUserIds) n.writeI64(r("jsbi").BigInt(o));
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).I64,
          size: a.length,
        });
        for (var i of a) n.writeI64(r("jsbi").BigInt(i));
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function x(t, n) {
      if (
        (n.writeStructBegin("DominantSpeakerInfo"),
        n.writeFieldBegin({
          fname: "activeSpeakerUserIds",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.activeSpeakerUserIds != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).I64,
          size: t.activeSpeakerUserIds.length,
        });
        for (var o of t.activeSpeakerUserIds) n.writeI64(r("jsbi").BigInt(o));
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).I64,
          size: a.length,
        });
        for (var i of a) n.writeI64(r("jsbi").BigInt(i));
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function $(t, n) {
      (n.writeStructBegin("ClientLayoutInfo"),
        t.layoutInfo != null &&
          (n.writeFieldBegin({
            fname: "layoutInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          T(t.layoutInfo, n),
          n.writeFieldEnd()),
        t.screenShareInfo != null &&
          (n.writeFieldBegin({
            fname: "screenShareInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          D(t.screenShareInfo, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function P(t, n) {
      (n.writeStructBegin("LiveStreamClientInputState"),
        t.negotiationToken != null &&
          (n.writeFieldBegin({
            fname: "negotiationToken",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.negotiationToken),
          n.writeFieldEnd()),
        t.broadcastId != null &&
          (n.writeFieldBegin({
            fname: "broadcastId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 2,
          }),
          n.writeI64(r("jsbi").BigInt(t.broadcastId)),
          n.writeFieldEnd()),
        t.layoutInfo != null &&
          (n.writeFieldBegin({
            fname: "layoutInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          $(t.layoutInfo, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function N(t, n) {
      if (
        (n.writeStructBegin("LiveStreamClientOutputState"),
        t.broadcastId != null &&
          (n.writeFieldBegin({
            fname: "broadcastId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 1,
          }),
          n.writeI64(r("jsbi").BigInt(t.broadcastId)),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "liveStreamStatus",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
        t.liveStreamStatus != null)
      ) {
        var a;
        n.writeI32((a = t.liveStreamStatus) != null ? a : 0);
      } else {
        var i = o("LiveStreamStateLiveStreamStateTypes").LiveStreamStatus.cast(
          0,
        );
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.negotiationToken != null &&
          (n.writeFieldBegin({
            fname: "negotiationToken",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.negotiationToken),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "acceptedUsers", ftype: e.LIST, fid: 4 }),
        t.acceptedUsers != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.acceptedUsers.length,
        });
        for (var l of t.acceptedUsers) n.writeString(l);
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
      (n.writeFieldEnd(),
        t.optInInfo != null &&
          (n.writeFieldBegin({
            fname: "optInInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 5,
          }),
          L(t.optInInfo, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function M(t, n) {
      if (
        (n.writeStructBegin("LiveStreamConferenceInputState"),
        t.broadcastId != null &&
          (n.writeFieldBegin({
            fname: "broadcastId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 1,
          }),
          n.writeI64(r("jsbi").BigInt(t.broadcastId)),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "liveStreamStatus",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
        t.liveStreamStatus != null)
      ) {
        var a;
        n.writeI32((a = t.liveStreamStatus) != null ? a : 0);
      } else {
        var i = o("LiveStreamStateLiveStreamStateTypes").LiveStreamStatus.cast(
          0,
        );
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.optInInfo != null &&
          (n.writeFieldBegin({
            fname: "optInInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          L(t.optInInfo, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "negotiationMode", ftype: e.I32, fid: 4 }),
        t.negotiationMode != null)
      ) {
        var l;
        n.writeI32((l = t.negotiationMode) != null ? l : 0);
      } else {
        var s = o("LiveStreamStateLiveStreamStateTypes").NegotiationMode.cast(
          0,
        );
        n.writeI32(s != null ? s : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function w(t, n) {
      if (
        (n.writeStructBegin("LiveStreamConferenceOutputState"),
        n.writeFieldBegin({
          fname: "allowedUsers",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.allowedUsers != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.allowedUsers.length,
        });
        for (var a of t.allowedUsers) n.writeString(a);
        n.writeListEnd();
      } else {
        var i = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: i.length,
        });
        for (var l of i) n.writeString(l);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        t.broadcastId != null &&
          (n.writeFieldBegin({
            fname: "broadcastId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 2,
          }),
          n.writeI64(r("jsbi").BigInt(t.broadcastId)),
          n.writeFieldEnd()),
        t.optInInfo != null &&
          (n.writeFieldBegin({
            fname: "optInInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          L(t.optInInfo, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "subscribedUsers", ftype: e.LIST, fid: 4 }),
        t.subscribedUsers != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.subscribedUsers.length,
        });
        for (var s of t.subscribedUsers) n.writeString(s);
        n.writeListEnd();
      } else {
        var u = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: u.length,
        });
        for (var c of u) n.writeString(c);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "liveStreamStatus", ftype: e.I32, fid: 5 }),
        t.liveStreamStatus != null)
      ) {
        var d;
        n.writeI32((d = t.liveStreamStatus) != null ? d : 0);
      } else {
        var m = o("LiveStreamStateLiveStreamStateTypes").LiveStreamStatus.cast(
          0,
        );
        n.writeI32(m != null ? m : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "negotiationMode", ftype: e.I32, fid: 6 }),
        t.negotiationMode != null)
      ) {
        var p;
        n.writeI32((p = t.negotiationMode) != null ? p : 0);
      } else {
        var _ = o("LiveStreamStateLiveStreamStateTypes").NegotiationMode.cast(
          0,
        );
        n.writeI32(_ != null ? _ : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function A(t, n) {
      if (
        (n.writeStructBegin("LiveStreamExtensionInputState"),
        t.broadcastId != null &&
          (n.writeFieldBegin({
            fname: "broadcastId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 1,
          }),
          n.writeI64(r("jsbi").BigInt(t.broadcastId)),
          n.writeFieldEnd()),
        t.liveStreamStatus != null)
      ) {
        var o;
        (n.writeFieldBegin({
          fname: "liveStreamStatus",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
          n.writeI32((o = t.liveStreamStatus) != null ? o : 0),
          n.writeFieldEnd());
      }
      if (
        (n.writeFieldBegin({
          fname: "broadcastParticipants",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 3,
        }),
        t.broadcastParticipants != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.broadcastParticipants.length,
        });
        for (var a of t.broadcastParticipants) n.writeString(a);
        n.writeListEnd();
      } else {
        var i = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: i.length,
        });
        for (var l of i) n.writeString(l);
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function F(t, n) {
      (n.writeStructBegin("LiveStreamExtensionOutputState"),
        t.layoutInfo != null &&
          (n.writeFieldBegin({
            fname: "layoutInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          T(t.layoutInfo, n),
          n.writeFieldEnd()),
        t.screenShareInfo != null &&
          (n.writeFieldBegin({
            fname: "screenShareInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          D(t.screenShareInfo, n),
          n.writeFieldEnd()),
        t.dominantSpeakerInfo != null &&
          (n.writeFieldBegin({
            fname: "dominantSpeakerInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          x(t.dominantSpeakerInfo, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function O(t, n) {
      if ((n.writeStructBegin("MediaSourceId"), t.mediaSourceType != null)) {
        var o;
        (n.writeFieldBegin({
          fname: "mediaSourceType",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
          n.writeI32((o = t.mediaSourceType) != null ? o : 0),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function B(t, n) {
      if ((n.writeStructBegin("LayoutExtra"), t.gridLayoutExtra != null)) {
        (n.writeFieldBegin({
          fname: "gridLayoutExtra",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
          k(t.gridLayoutExtra, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.dominantLayoutExtra != null) {
        (n.writeFieldBegin({
          fname: "dominantLayoutExtra",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 2,
        }),
          I(t.dominantLayoutExtra, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function W(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.audience = o(
                  "LiveStreamStateLiveStreamStateTypes",
                ).LiveStreamAudience.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.target = o(
                  "LiveStreamStateLiveStreamStateTypes",
                ).LiveStreamTarget.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.targetName = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.hostId = t.readString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.targetSize = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.audience === void 0 &&
          (n.audience = o(
            "LiveStreamStateLiveStreamStateTypes",
          ).LiveStreamAudience.cast(0)),
        n.target === void 0 &&
          (n.target = o(
            "LiveStreamStateLiveStreamStateTypes",
          ).LiveStreamTarget.cast(0)),
        n.hostId === void 0 && (n.hostId = ""),
        n
      );
    }
    function q(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.userId = t.readI64().toString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.mediaSourceId = ee(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.userId === void 0 && (n.userId = "0"),
        n.mediaSourceId === void 0 && (n.mediaSourceId = S()),
        n
      );
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
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.gridUsers = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = q(t);
                n.gridUsers.push(u);
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
              n.dominantUsers = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = q(t);
                n.dominantUsers.push(u);
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
    function H(t) {
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
                  "LiveStreamStateLiveStreamStateTypes",
                ).LayoutType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.layoutExtra = te(t))
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
            "LiveStreamStateLiveStreamStateTypes",
          ).LayoutType.cast(0)),
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
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.screenSharingUserIds = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readI64().toString();
                n.screenSharingUserIds.push(u);
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
        n.screenSharingUserIds === void 0 && (n.screenSharingUserIds = []),
        n
      );
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
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.activeSpeakerUserIds = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readI64().toString();
                n.activeSpeakerUserIds.push(u);
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
        n.activeSpeakerUserIds === void 0 && (n.activeSpeakerUserIds = []),
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
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.layoutInfo = H(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.screenShareInfo = G(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
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
              ? (n.negotiationToken = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.broadcastId = t.readI64().toString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.layoutInfo = j(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
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
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.broadcastId = t.readI64().toString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.liveStreamStatus = o(
                  "LiveStreamStateLiveStreamStateTypes",
                ).LiveStreamStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.negotiationToken = t.readString())
              : t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.acceptedUsers = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = t.readString();
                n.acceptedUsers.push(c);
              }
            } else t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.optInInfo = W(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.liveStreamStatus === void 0 &&
          (n.liveStreamStatus = o(
            "LiveStreamStateLiveStreamStateTypes",
          ).LiveStreamStatus.cast(0)),
        n.acceptedUsers === void 0 && (n.acceptedUsers = []),
        n
      );
    }
    function X(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.broadcastId = t.readI64().toString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.liveStreamStatus = o(
                  "LiveStreamStateLiveStreamStateTypes",
                ).LiveStreamStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.optInInfo = W(t))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.negotiationMode = o(
                  "LiveStreamStateLiveStreamStateTypes",
                ).NegotiationMode.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.liveStreamStatus === void 0 &&
          (n.liveStreamStatus = o(
            "LiveStreamStateLiveStreamStateTypes",
          ).LiveStreamStatus.cast(0)),
        n.negotiationMode === void 0 &&
          (n.negotiationMode = o(
            "LiveStreamStateLiveStreamStateTypes",
          ).NegotiationMode.cast(0)),
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
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.allowedUsers = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = t.readString();
                n.allowedUsers.push(c);
              }
            } else t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.broadcastId = t.readI64().toString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.optInInfo = W(t))
              : t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.subscribedUsers = [];
              for (var d = t.readListBegin(), m = 0; m < d.size; m++) {
                var p = t.readString();
                n.subscribedUsers.push(p);
              }
            } else t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.liveStreamStatus = o(
                  "LiveStreamStateLiveStreamStateTypes",
                ).LiveStreamStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.negotiationMode = o(
                  "LiveStreamStateLiveStreamStateTypes",
                ).NegotiationMode.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.allowedUsers === void 0 && (n.allowedUsers = []),
        n.subscribedUsers === void 0 && (n.subscribedUsers = []),
        n.liveStreamStatus === void 0 &&
          (n.liveStreamStatus = o(
            "LiveStreamStateLiveStreamStateTypes",
          ).LiveStreamStatus.cast(0)),
        n.negotiationMode === void 0 &&
          (n.negotiationMode = o(
            "LiveStreamStateLiveStreamStateTypes",
          ).NegotiationMode.cast(0)),
        n
      );
    }
    function J(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.broadcastId = t.readI64().toString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.liveStreamStatus = o(
                  "LiveStreamStateLiveStreamStateTypes",
                ).LiveStreamStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.broadcastParticipants = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = t.readString();
                n.broadcastParticipants.push(c);
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
        n.broadcastParticipants === void 0 && (n.broadcastParticipants = []),
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
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.layoutInfo = H(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.screenShareInfo = G(t))
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.dominantSpeakerInfo = z(t))
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
      var n,
        a = {};
      for (t.readStructBegin(); ; ) {
        var i = t.readFieldBegin(),
          l = i.ftype,
          s = i.fid;
        if (l === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (s) {
          case 1:
            if (l === (e || (e = r("ThriftTypes"))).I32)
              if (n == null)
                ((a.mediaSourceType = o(
                  "LiveStreamStateLiveStreamStateTypes",
                ).MediaSourceType.cast(t.readI32())),
                  (n = "mediaSourceType"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: MediaSourceId; current field: mediaSourceType, previous deserialized field: " +
                    n,
                );
            else t.skip(l);
            break;
          default:
            t.skip(l);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), a);
    }
    function te(t) {
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
              if (n == null)
                ((o.gridLayoutExtra = U(t)), (n = "gridLayoutExtra"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: LayoutExtra; current field: gridLayoutExtra, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.dominantLayoutExtra = V(t)), (n = "dominantLayoutExtra"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: LayoutExtra; current field: dominantLayoutExtra, previous deserialized field: " +
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
    ((l.LiveStreamOptInInfo$DefaultConstructor = s),
      (l.UserMediaSourceId$DefaultConstructor = u),
      (l.GridLayoutExtra$DefaultConstructor = c),
      (l.DominantLayoutExtra$DefaultConstructor = d),
      (l.LayoutInfo$DefaultConstructor = m),
      (l.ScreenShareInfo$DefaultConstructor = p),
      (l.DominantSpeakerInfo$DefaultConstructor = _),
      (l.ClientLayoutInfo$DefaultConstructor = f),
      (l.LiveStreamClientInputState$DefaultConstructor = g),
      (l.LiveStreamClientOutputState$DefaultConstructor = h),
      (l.LiveStreamConferenceInputState$DefaultConstructor = y),
      (l.LiveStreamConferenceOutputState$DefaultConstructor = C),
      (l.LiveStreamExtensionInputState$DefaultConstructor = b),
      (l.LiveStreamExtensionOutputState$DefaultConstructor = v),
      (l.MediaSourceId$DefaultConstructor = S),
      (l.LayoutExtra$DefaultConstructor = R),
      (l.serializeLiveStreamOptInInfo = L),
      (l.serializeUserMediaSourceId = E),
      (l.serializeGridLayoutExtra = k),
      (l.serializeDominantLayoutExtra = I),
      (l.serializeLayoutInfo = T),
      (l.serializeScreenShareInfo = D),
      (l.serializeDominantSpeakerInfo = x),
      (l.serializeClientLayoutInfo = $),
      (l.serializeLiveStreamClientInputState = P),
      (l.serializeLiveStreamClientOutputState = N),
      (l.serializeLiveStreamConferenceInputState = M),
      (l.serializeLiveStreamConferenceOutputState = w),
      (l.serializeLiveStreamExtensionInputState = A),
      (l.serializeLiveStreamExtensionOutputState = F),
      (l.serializeMediaSourceId = O),
      (l.serializeLayoutExtra = B),
      (l.deserializeLiveStreamOptInInfo = W),
      (l.deserializeUserMediaSourceId = q),
      (l.deserializeGridLayoutExtra = U),
      (l.deserializeDominantLayoutExtra = V),
      (l.deserializeLayoutInfo = H),
      (l.deserializeScreenShareInfo = G),
      (l.deserializeDominantSpeakerInfo = z),
      (l.deserializeClientLayoutInfo = j),
      (l.deserializeLiveStreamClientInputState = K),
      (l.deserializeLiveStreamClientOutputState = Q),
      (l.deserializeLiveStreamConferenceInputState = X),
      (l.deserializeLiveStreamConferenceOutputState = Y),
      (l.deserializeLiveStreamExtensionInputState = J),
      (l.deserializeLiveStreamExtensionOutputState = Z),
      (l.deserializeMediaSourceId = ee),
      (l.deserializeLayoutExtra = te));
  },
  98,
);
