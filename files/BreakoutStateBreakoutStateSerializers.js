__d(
  "BreakoutStateBreakoutStateSerializers",
  ["BreakoutStateBreakoutStateTypes", "ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { content: "" };
    }
    function u() {
      return { sessionID: "" };
    }
    function c() {
      return {
        action: o("BreakoutStateBreakoutStateTypes").BreakoutSessionAction.cast(
          0,
        ),
      };
    }
    function d() {
      return {
        conferenceName: "",
        name: "",
        roomHash: "",
        roomURI: "",
        participantIDs: [],
      };
    }
    function m() {
      return {
        conferenceName: "",
        roomHash: "",
        roomURI: "",
        participantIDs: [],
      };
    }
    function p() {
      return {
        status: o("BreakoutStateBreakoutStateTypes").BreakoutSessionStatus.cast(
          0,
        ),
        childRooms: [],
        mainRoom: m(),
      };
    }
    function _() {
      return {
        isBreakoutFeatureEnabled: !1,
        canViewerStartBreakout: !1,
        participantsSupportingBreakout: new Set(),
      };
    }
    function f() {
      return {};
    }
    function g() {
      return { isBreakoutFeatureEnabled: !1 };
    }
    function h(t, n) {
      if (
        (n.writeStructBegin("BreakoutSessionAnnouncementInput"),
        n.writeFieldBegin({
          fname: "content",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.content != null)
      )
        n.writeString(t.content);
      else {
        var o = "";
        n.writeString(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function y(t, n) {
      if (
        (n.writeStructBegin("BreakoutStartInput"),
        n.writeFieldBegin({
          fname: "sessionID",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.sessionID != null)
      )
        n.writeString(t.sessionID);
      else {
        var o = "";
        n.writeString(o);
      }
      (n.writeFieldEnd(),
        t.duration != null &&
          (n.writeFieldBegin({
            fname: "duration",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 2,
          }),
          n.writeI32(t.duration),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function C(t, n) {
      if (
        (n.writeStructBegin("BreakoutInputState"),
        n.writeFieldBegin({
          fname: "action",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.action != null)
      ) {
        var a;
        n.writeI32((a = t.action) != null ? a : 0);
      } else {
        var i = o("BreakoutStateBreakoutStateTypes").BreakoutSessionAction.cast(
          0,
        );
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(),
        t.breakoutStartInput != null &&
          (n.writeFieldBegin({
            fname: "breakoutStartInput",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          y(t.breakoutStartInput, n),
          n.writeFieldEnd()),
        t.announcementInput != null &&
          (n.writeFieldBegin({
            fname: "announcementInput",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          h(t.announcementInput, n),
          n.writeFieldEnd()),
        t.actionID != null &&
          (n.writeFieldBegin({
            fname: "actionID",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 4,
          }),
          n.writeI32(t.actionID),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function b(t, n) {
      if (
        (n.writeStructBegin("BreakoutRoom"),
        n.writeFieldBegin({
          fname: "conferenceName",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.conferenceName != null)
      )
        n.writeString(t.conferenceName);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "name", ftype: e.STRING, fid: 2 }),
        t.name != null)
      )
        n.writeString(t.name);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "roomHash", ftype: e.STRING, fid: 3 }),
        t.roomHash != null)
      )
        n.writeString(t.roomHash);
      else {
        var i = "";
        n.writeString(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "roomURI", ftype: e.STRING, fid: 4 }),
        t.roomURI != null)
      )
        n.writeString(t.roomURI);
      else {
        var l = "";
        n.writeString(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "participantIDs", ftype: e.LIST, fid: 5 }),
        t.participantIDs != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.participantIDs.length,
        });
        for (var s of t.participantIDs) n.writeString(s);
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
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function v(t, n) {
      if (
        (n.writeStructBegin("MainRoom"),
        n.writeFieldBegin({
          fname: "conferenceName",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.conferenceName != null)
      )
        n.writeString(t.conferenceName);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "roomHash", ftype: e.STRING, fid: 2 }),
        t.roomHash != null)
      )
        n.writeString(t.roomHash);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "roomURI", ftype: e.STRING, fid: 3 }),
        t.roomURI != null)
      )
        n.writeString(t.roomURI);
      else {
        var i = "";
        n.writeString(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "participantIDs", ftype: e.LIST, fid: 4 }),
        t.participantIDs != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.participantIDs.length,
        });
        for (var l of t.participantIDs) n.writeString(l);
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
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function S(t, n) {
      if (
        (n.writeStructBegin("BreakoutSession"),
        n.writeFieldBegin({
          fname: "status",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.status != null)
      ) {
        var a;
        n.writeI32((a = t.status) != null ? a : 0);
      } else {
        var i = o("BreakoutStateBreakoutStateTypes").BreakoutSessionStatus.cast(
          0,
        );
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.startTime != null &&
          (n.writeFieldBegin({
            fname: "startTime",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 2,
          }),
          n.writeI32(t.startTime),
          n.writeFieldEnd()),
        t.endTime != null &&
          (n.writeFieldBegin({
            fname: "endTime",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 3,
          }),
          n.writeI32(t.endTime),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "childRooms", ftype: e.LIST, fid: 4 }),
        t.childRooms != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.childRooms.length,
        });
        for (var l of t.childRooms) b(l, n);
        n.writeListEnd();
      } else {
        var s = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: s.length,
        });
        for (var u of s) b(u, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "mainRoom", ftype: e.STRUCT, fid: 5 }),
        t.mainRoom != null)
      )
        v(t.mainRoom, n);
      else {
        var c = m();
        v(c, n);
      }
      (n.writeFieldEnd(),
        t.id != null &&
          (n.writeFieldBegin({
            fname: "id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.id),
          n.writeFieldEnd()),
        t.creatorID != null &&
          (n.writeFieldBegin({
            fname: "creatorID",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.creatorID),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function R(t, n) {
      if (
        (n.writeStructBegin("BreakoutOutputState"),
        t.breakoutSession != null &&
          (n.writeFieldBegin({
            fname: "breakoutSession",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          S(t.breakoutSession, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "isBreakoutFeatureEnabled",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 2,
        }),
        t.isBreakoutFeatureEnabled != null)
      )
        n.writeBool(t.isBreakoutFeatureEnabled);
      else {
        var o = !1;
        n.writeBool(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "canViewerStartBreakout",
          ftype: e.BOOL,
          fid: 3,
        }),
        t.canViewerStartBreakout != null)
      )
        n.writeBool(t.canViewerStartBreakout);
      else {
        var a = !1;
        n.writeBool(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "participantsSupportingBreakout",
          ftype: e.SET,
          fid: 4,
        }),
        t.participantsSupportingBreakout != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.participantsSupportingBreakout.size,
        });
        for (var i of t.participantsSupportingBreakout) n.writeString(i);
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
      (n.writeFieldEnd(),
        t.lastActionID != null &&
          (n.writeFieldBegin({
            fname: "lastActionID",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 5,
          }),
          n.writeI32(t.lastActionID),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function L(t, n) {
      (n.writeStructBegin("BreakoutConferenceInputState"),
        t.breakoutSession != null &&
          (n.writeFieldBegin({
            fname: "breakoutSession",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          S(t.breakoutSession, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function E(t, n) {
      if (
        (n.writeStructBegin("BreakoutConferenceOutputState"),
        t.breakoutSession != null &&
          (n.writeFieldBegin({
            fname: "breakoutSession",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          S(t.breakoutSession, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "isBreakoutFeatureEnabled",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 2,
        }),
        t.isBreakoutFeatureEnabled != null)
      )
        n.writeBool(t.isBreakoutFeatureEnabled);
      else {
        var o = !1;
        n.writeBool(o);
      }
      if ((n.writeFieldEnd(), t.participantAllowedToStartBreakout != null)) {
        (n.writeFieldBegin({
          fname: "participantAllowedToStartBreakout",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 3,
        }),
          n.writeSetBegin({
            etype: e.STRING,
            size: t.participantAllowedToStartBreakout.size,
          }));
        for (var a of t.participantAllowedToStartBreakout) n.writeString(a);
        (n.writeSetEnd(), n.writeFieldEnd());
      }
      (t.lastActionID != null &&
        (n.writeFieldBegin({
          fname: "lastActionID",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 4,
        }),
        n.writeI32(t.lastActionID),
        n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function k(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.content = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.content === void 0 && (n.content = ""), n);
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
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sessionID = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.duration = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.sessionID === void 0 && (n.sessionID = ""),
        n
      );
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
              ? (n.action = o(
                  "BreakoutStateBreakoutStateTypes",
                ).BreakoutSessionAction.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.breakoutStartInput = I(t))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.announcementInput = k(t))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.actionID = t.readI32())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.action === void 0 &&
          (n.action = o(
            "BreakoutStateBreakoutStateTypes",
          ).BreakoutSessionAction.cast(0)),
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
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.conferenceName = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.name = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.roomHash = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.roomURI = t.readString())
              : t.skip(a);
            break;
          case 5:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.participantIDs = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.participantIDs.push(u);
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
        n.conferenceName === void 0 && (n.conferenceName = ""),
        n.name === void 0 && (n.name = ""),
        n.roomHash === void 0 && (n.roomHash = ""),
        n.roomURI === void 0 && (n.roomURI = ""),
        n.participantIDs === void 0 && (n.participantIDs = []),
        n
      );
    }
    function x(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.conferenceName = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.roomHash = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.roomURI = t.readString())
              : t.skip(a);
            break;
          case 4:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.participantIDs = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.participantIDs.push(u);
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
        n.conferenceName === void 0 && (n.conferenceName = ""),
        n.roomHash === void 0 && (n.roomHash = ""),
        n.roomURI === void 0 && (n.roomURI = ""),
        n.participantIDs === void 0 && (n.participantIDs = []),
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
              ? (n.status = o(
                  "BreakoutStateBreakoutStateTypes",
                ).BreakoutSessionStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.startTime = t.readI32())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.endTime = t.readI32())
              : t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.childRooms = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = D(t);
                n.childRooms.push(c);
              }
            } else t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.mainRoom = x(t))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.id = t.readString())
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.creatorID = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.status === void 0 &&
          (n.status = o(
            "BreakoutStateBreakoutStateTypes",
          ).BreakoutSessionStatus.cast(0)),
        n.childRooms === void 0 && (n.childRooms = []),
        n.mainRoom === void 0 && (n.mainRoom = m()),
        n
      );
    }
    function P(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.breakoutSession = $(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isBreakoutFeatureEnabled = t.readBool())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.canViewerStartBreakout = t.readBool())
              : t.skip(a);
            break;
          case 4:
            if (a === (e || (e = r("ThriftTypes"))).SET) {
              n.participantsSupportingBreakout = new Set();
              for (var l = t.readSetBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.participantsSupportingBreakout.add(u);
              }
            } else t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.lastActionID = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.isBreakoutFeatureEnabled === void 0 &&
          (n.isBreakoutFeatureEnabled = !1),
        n.canViewerStartBreakout === void 0 && (n.canViewerStartBreakout = !1),
        n.participantsSupportingBreakout === void 0 &&
          (n.participantsSupportingBreakout = new Set()),
        n
      );
    }
    function N(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.breakoutSession = $(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
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
              ? (n.breakoutSession = $(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isBreakoutFeatureEnabled = t.readBool())
              : t.skip(a);
            break;
          case 3:
            if (a === (e || (e = r("ThriftTypes"))).SET) {
              n.participantAllowedToStartBreakout = new Set();
              for (var l = t.readSetBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.participantAllowedToStartBreakout.add(u);
              }
            } else t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.lastActionID = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.isBreakoutFeatureEnabled === void 0 &&
          (n.isBreakoutFeatureEnabled = !1),
        n
      );
    }
    ((l.BreakoutSessionAnnouncementInput$DefaultConstructor = s),
      (l.BreakoutStartInput$DefaultConstructor = u),
      (l.BreakoutInputState$DefaultConstructor = c),
      (l.BreakoutRoom$DefaultConstructor = d),
      (l.MainRoom$DefaultConstructor = m),
      (l.BreakoutSession$DefaultConstructor = p),
      (l.BreakoutOutputState$DefaultConstructor = _),
      (l.BreakoutConferenceInputState$DefaultConstructor = f),
      (l.BreakoutConferenceOutputState$DefaultConstructor = g),
      (l.serializeBreakoutSessionAnnouncementInput = h),
      (l.serializeBreakoutStartInput = y),
      (l.serializeBreakoutInputState = C),
      (l.serializeBreakoutRoom = b),
      (l.serializeMainRoom = v),
      (l.serializeBreakoutSession = S),
      (l.serializeBreakoutOutputState = R),
      (l.serializeBreakoutConferenceInputState = L),
      (l.serializeBreakoutConferenceOutputState = E),
      (l.deserializeBreakoutSessionAnnouncementInput = k),
      (l.deserializeBreakoutStartInput = I),
      (l.deserializeBreakoutInputState = T),
      (l.deserializeBreakoutRoom = D),
      (l.deserializeMainRoom = x),
      (l.deserializeBreakoutSession = $),
      (l.deserializeBreakoutOutputState = P),
      (l.deserializeBreakoutConferenceInputState = N),
      (l.deserializeBreakoutConferenceOutputState = M));
  },
  98,
);
