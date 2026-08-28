__d(
  "ModeratorControlsStateModeratorControlsStateSerializers",
  ["ModeratorControlsStateModeratorControlsStateTypes", "ThriftTypes", "jsbi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {};
    }
    function u() {
      return { issue_action_target_uids: new Set() };
    }
    function c() {
      return {
        action_capabilities: new Set(),
        action_uuids_executed: new Set(),
      };
    }
    function d() {
      return { participant: p(), conference: y() };
    }
    function m() {
      return {
        action_uuid: "",
        action_type: o(
          "ModeratorControlsStateModeratorControlsStateTypes",
        ).ModeratorActionType.cast(0),
        action_issued_by: "",
      };
    }
    function p() {
      return {
        is_moderator: !1,
        screenshare_enabled: !1,
        action_capabilities_as_moderator: new Set(),
        action_capabilities_as_participant: new Set(),
        conference_capabilities_as_moderator: new Set(),
      };
    }
    function _() {
      return {
        is_moderator: !1,
        action_capabilities_as_moderator: new Set(),
        action_capabilities_as_participant: new Set(),
        conference_capabilities_as_moderator: new Set(),
      };
    }
    function f() {
      return {};
    }
    function g() {
      return { moderator_uids: [] };
    }
    function h() {
      return { participant_id: "", permissions: new Set() };
    }
    function y() {
      return {
        moderator_uids: [],
        allows_screen_share: !1,
        soft_mute_feature_enabled: !1,
        participant_capabilities: {},
        features_enabled: new Map(),
        conference_features_enabled: new Map(),
        are_moderators_mutable: !1,
      };
    }
    function C(t, n) {
      (n.writeStructBegin("ModeratorControlsInputState"),
        t.participant != null &&
          (n.writeFieldBegin({
            fname: "participant",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          v(t.participant, n),
          n.writeFieldEnd()),
        t.moderator != null &&
          (n.writeFieldBegin({
            fname: "moderator",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          b(t.moderator, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function b(t, n) {
      if (
        (n.writeStructBegin("ModeratorInputState"),
        t.allows_screen_share != null &&
          (n.writeFieldBegin({
            fname: "allows_screen_share",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 1,
          }),
          n.writeBool(t.allows_screen_share),
          n.writeFieldEnd()),
        t.issue_action != null)
      ) {
        var o;
        (n.writeFieldBegin({
          fname: "issue_action",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
          n.writeI32((o = t.issue_action) != null ? o : 0),
          n.writeFieldEnd());
      }
      if (
        (n.writeFieldBegin({
          fname: "issue_action_target_uids",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 3,
        }),
        t.issue_action_target_uids != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.issue_action_target_uids.size,
        });
        for (var a of t.issue_action_target_uids) n.writeString(a);
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
      (n.writeFieldEnd(),
        t.issue_action_context_serialized != null &&
          (n.writeFieldBegin({
            fname: "issue_action_context_serialized",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.issue_action_context_serialized),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function v(t, n) {
      if (
        (n.writeStructBegin("ParticipantInputState"),
        n.writeFieldBegin({
          fname: "action_capabilities",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 1,
        }),
        t.action_capabilities != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: t.action_capabilities.size,
        });
        for (var o of t.action_capabilities) n.writeI32(o != null ? o : 0);
        n.writeSetEnd();
      } else {
        var a = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: a.size,
        });
        for (var i of a) n.writeI32(i != null ? i : 0);
        n.writeSetEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "action_uuids_executed",
          ftype: e.SET,
          fid: 2,
        }),
        t.action_uuids_executed != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.action_uuids_executed.size,
        });
        for (var l of t.action_uuids_executed) n.writeString(l);
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
    function S(t, n) {
      if (
        (n.writeStructBegin("ModeratorControlsOutputState"),
        n.writeFieldBegin({
          fname: "participant",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.participant != null)
      )
        L(t.participant, n);
      else {
        var o = p();
        L(o, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "conference", ftype: e.STRUCT, fid: 2 }),
        t.conference != null)
      )
        D(t.conference, n);
      else {
        var a = y();
        D(a, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function R(t, n) {
      if (
        (n.writeStructBegin("ModeratorActionInfo"),
        n.writeFieldBegin({
          fname: "action_uuid",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.action_uuid != null)
      )
        n.writeString(t.action_uuid);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "action_type", ftype: e.I32, fid: 2 }),
        t.action_type != null)
      ) {
        var i;
        n.writeI32((i = t.action_type) != null ? i : 0);
      } else {
        var l = o(
          "ModeratorControlsStateModeratorControlsStateTypes",
        ).ModeratorActionType.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "action_issued_by",
          ftype: e.STRING,
          fid: 3,
        }),
        t.action_issued_by != null)
      )
        n.writeString(t.action_issued_by);
      else {
        var s = "";
        n.writeString(s);
      }
      (n.writeFieldEnd(),
        t.action_context != null &&
          (n.writeFieldBegin({
            fname: "action_context",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.action_context),
          n.writeFieldEnd()),
        t.action_issued_time != null &&
          (n.writeFieldBegin({
            fname: "action_issued_time",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 5,
          }),
          n.writeI64(r("jsbi").BigInt(t.action_issued_time)),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function L(t, n) {
      if (
        (n.writeStructBegin("ParticipantOutputState"),
        n.writeFieldBegin({
          fname: "is_moderator",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.is_moderator != null)
      )
        n.writeBool(t.is_moderator);
      else {
        var o = !1;
        n.writeBool(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "screenshare_enabled",
          ftype: e.BOOL,
          fid: 2,
        }),
        t.screenshare_enabled != null)
      )
        n.writeBool(t.screenshare_enabled);
      else {
        var a = !1;
        n.writeBool(a);
      }
      if (
        (n.writeFieldEnd(),
        t.screenshare_enabled_changed_by != null &&
          (n.writeFieldBegin({
            fname: "screenshare_enabled_changed_by",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.screenshare_enabled_changed_by),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "action_capabilities_as_moderator",
          ftype: e.SET,
          fid: 4,
        }),
        t.action_capabilities_as_moderator != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: t.action_capabilities_as_moderator.size,
        });
        for (var i of t.action_capabilities_as_moderator)
          n.writeI32(i != null ? i : 0);
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
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "action_capabilities_as_participant",
          ftype: e.SET,
          fid: 5,
        }),
        t.action_capabilities_as_participant != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: t.action_capabilities_as_participant.size,
        });
        for (var u of t.action_capabilities_as_participant)
          n.writeI32(u != null ? u : 0);
        n.writeSetEnd();
      } else {
        var c = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: c.size,
        });
        for (var d of c) n.writeI32(d != null ? d : 0);
        n.writeSetEnd();
      }
      if ((n.writeFieldEnd(), t.actions_issued != null)) {
        (n.writeFieldBegin({
          fname: "actions_issued",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 6,
        }),
          n.writeMapBegin({
            ktype: e.I32,
            vtype: e.STRUCT,
            size: t.actions_issued.size,
          }));
        for (var m of t.actions_issued.entries()) {
          var p = m[0],
            _ = m[1];
          (n.writeI32(p != null ? p : 0), R(_, n));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (
        (n.writeFieldBegin({
          fname: "conference_capabilities_as_moderator",
          ftype: e.SET,
          fid: 7,
        }),
        t.conference_capabilities_as_moderator != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: t.conference_capabilities_as_moderator.size,
        });
        for (var f of t.conference_capabilities_as_moderator)
          n.writeI32(f != null ? f : 0);
        n.writeSetEnd();
      } else {
        var g = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: g.size,
        });
        for (var h of g) n.writeI32(h != null ? h : 0);
        n.writeSetEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function E(t, n) {
      if (
        (n.writeStructBegin("ParticipantCapabilityInfo"),
        n.writeFieldBegin({
          fname: "is_moderator",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.is_moderator != null)
      )
        n.writeBool(t.is_moderator);
      else {
        var o = !1;
        n.writeBool(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "action_capabilities_as_moderator",
          ftype: e.SET,
          fid: 2,
        }),
        t.action_capabilities_as_moderator != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: t.action_capabilities_as_moderator.size,
        });
        for (var a of t.action_capabilities_as_moderator)
          n.writeI32(a != null ? a : 0);
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
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "action_capabilities_as_participant",
          ftype: e.SET,
          fid: 3,
        }),
        t.action_capabilities_as_participant != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: t.action_capabilities_as_participant.size,
        });
        for (var s of t.action_capabilities_as_participant)
          n.writeI32(s != null ? s : 0);
        n.writeSetEnd();
      } else {
        var u = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: u.size,
        });
        for (var c of u) n.writeI32(c != null ? c : 0);
        n.writeSetEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "conference_capabilities_as_moderator",
          ftype: e.SET,
          fid: 4,
        }),
        t.conference_capabilities_as_moderator != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: t.conference_capabilities_as_moderator.size,
        });
        for (var d of t.conference_capabilities_as_moderator)
          n.writeI32(d != null ? d : 0);
        n.writeSetEnd();
      } else {
        var m = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: m.size,
        });
        for (var p of m) n.writeI32(p != null ? p : 0);
        n.writeSetEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function k(t, n) {
      if (
        (n.writeStructBegin("ModeratorFeatureContext"),
        t.feature_access_mode != null)
      ) {
        var o;
        (n.writeFieldBegin({
          fname: "feature_access_mode",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
          n.writeI32((o = t.feature_access_mode) != null ? o : 0),
          n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function I(t, n) {
      if (
        (n.writeStructBegin("ConferenceInputState"),
        n.writeFieldBegin({
          fname: "moderator_uids",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.moderator_uids != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.moderator_uids.length,
        });
        for (var o of t.moderator_uids) n.writeString(o);
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
      (n.writeFieldEnd(),
        t.participant_permissions_upsert_input != null &&
          (n.writeFieldBegin({
            fname: "participant_permissions_upsert_input",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          T(t.participant_permissions_upsert_input, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function T(t, n) {
      if (
        (n.writeStructBegin("ParticipantPermissionsUpsertInput"),
        n.writeFieldBegin({
          fname: "participant_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.participant_id != null)
      )
        n.writeString(t.participant_id);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "permissions", ftype: e.SET, fid: 2 }),
        t.permissions != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: t.permissions.size,
        });
        for (var a of t.permissions) n.writeI32(a != null ? a : 0);
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
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function D(t, n) {
      if (
        (n.writeStructBegin("ConferenceOutputState"),
        n.writeFieldBegin({
          fname: "moderator_uids",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.moderator_uids != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.moderator_uids.length,
        });
        for (var o of t.moderator_uids) n.writeString(o);
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
        n.writeFieldBegin({
          fname: "allows_screen_share",
          ftype: e.BOOL,
          fid: 2,
        }),
        t.allows_screen_share != null)
      )
        n.writeBool(t.allows_screen_share);
      else {
        var l = !1;
        n.writeBool(l);
      }
      if (
        (n.writeFieldEnd(),
        t.allows_screen_share_changed_by != null &&
          (n.writeFieldBegin({
            fname: "allows_screen_share_changed_by",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.allows_screen_share_changed_by),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "soft_mute_feature_enabled",
          ftype: e.BOOL,
          fid: 4,
        }),
        t.soft_mute_feature_enabled != null)
      )
        n.writeBool(t.soft_mute_feature_enabled);
      else {
        var s = !1;
        n.writeBool(s);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "participant_capabilities",
          ftype: e.MAP,
          fid: 5,
        }),
        t.participant_capabilities != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(t.participant_capabilities).length,
        });
        for (var u of Object.entries(t.participant_capabilities)) {
          var c = u[0],
            d = u[1];
          (n.writeString(c), E(d, n));
        }
        n.writeMapEnd();
      } else {
        var m = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(m).length,
        });
        for (var p of Object.entries(m)) {
          var _ = p[0],
            f = p[1];
          (n.writeString(_), E(f, n));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "features_enabled", ftype: e.MAP, fid: 6 }),
        t.features_enabled != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: t.features_enabled.size,
        });
        for (var g of t.features_enabled.entries()) {
          var h = g[0],
            y = g[1];
          (n.writeI32(h != null ? h : 0), k(y, n));
        }
        n.writeMapEnd();
      } else {
        var C = new Map();
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: C.size,
        });
        for (var b of C.entries()) {
          var v = b[0],
            S = b[1];
          (n.writeI32(v != null ? v : 0), k(S, n));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "conference_features_enabled",
          ftype: e.MAP,
          fid: 7,
        }),
        t.conference_features_enabled != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: t.conference_features_enabled.size,
        });
        for (var R of t.conference_features_enabled.entries()) {
          var L = R[0],
            I = R[1];
          (n.writeI32(L != null ? L : 0), k(I, n));
        }
        n.writeMapEnd();
      } else {
        var T = new Map();
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: T.size,
        });
        for (var D of T.entries()) {
          var x = D[0],
            $ = D[1];
          (n.writeI32(x != null ? x : 0), k($, n));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "are_moderators_mutable",
          ftype: e.BOOL,
          fid: 8,
        }),
        t.are_moderators_mutable != null)
      )
        n.writeBool(t.are_moderators_mutable);
      else {
        var P = !1;
        n.writeBool(P);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
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
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.participant = P(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.moderator = $(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
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
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.allows_screen_share = t.readBool())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.issue_action = o(
                  "ModeratorControlsStateModeratorControlsStateTypes",
                ).ModeratorActionType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.issue_action_target_uids = new Set();
              for (var s = t.readSetBegin(), u = 0; u < s.size; u++) {
                var c = t.readString();
                n.issue_action_target_uids.add(c);
              }
            } else t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.issue_action_context_serialized = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.issue_action_target_uids === void 0 &&
          (n.issue_action_target_uids = new Set()),
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
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.action_capabilities = new Set();
              for (var s = t.readSetBegin(), u = 0; u < s.size; u++) {
                var c = o(
                  "ModeratorControlsStateModeratorControlsStateTypes",
                ).ModeratorActionType.cast(t.readI32());
                n.action_capabilities.add(c);
              }
            } else t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.action_uuids_executed = new Set();
              for (var d = t.readSetBegin(), m = 0; m < d.size; m++) {
                var p = t.readString();
                n.action_uuids_executed.add(p);
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
        n.action_capabilities === void 0 && (n.action_capabilities = new Set()),
        n.action_uuids_executed === void 0 &&
          (n.action_uuids_executed = new Set()),
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
              ? (n.participant = w(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.conference = W(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.participant === void 0 && (n.participant = p()),
        n.conference === void 0 && (n.conference = y()),
        n
      );
    }
    function M(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.action_uuid = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.action_type = o(
                  "ModeratorControlsStateModeratorControlsStateTypes",
                ).ModeratorActionType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.action_issued_by = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.action_context = t.readString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.action_issued_time = t.readI64().toString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.action_uuid === void 0 && (n.action_uuid = ""),
        n.action_type === void 0 &&
          (n.action_type = o(
            "ModeratorControlsStateModeratorControlsStateTypes",
          ).ModeratorActionType.cast(0)),
        n.action_issued_by === void 0 && (n.action_issued_by = ""),
        n
      );
    }
    function w(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_moderator = t.readBool())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.screenshare_enabled = t.readBool())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.screenshare_enabled_changed_by = t.readString())
              : t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.action_capabilities_as_moderator = new Set();
              for (var s = t.readSetBegin(), u = 0; u < s.size; u++) {
                var c = o(
                  "ModeratorControlsStateModeratorControlsStateTypes",
                ).ModeratorActionType.cast(t.readI32());
                n.action_capabilities_as_moderator.add(c);
              }
            } else t.skip(i);
            break;
          case 5:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.action_capabilities_as_participant = new Set();
              for (var d = t.readSetBegin(), m = 0; m < d.size; m++) {
                var p = o(
                  "ModeratorControlsStateModeratorControlsStateTypes",
                ).ModeratorActionType.cast(t.readI32());
                n.action_capabilities_as_participant.add(p);
              }
            } else t.skip(i);
            break;
          case 6:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.actions_issued = new Map();
              for (var _ = t.readMapBegin(), f = 0; f < _.size; f++) {
                var g = o(
                    "ModeratorControlsStateModeratorControlsStateTypes",
                  ).ModeratorActionType.cast(t.readI32()),
                  h = M(t);
                g != null && n.actions_issued.set(g, h);
              }
            } else t.skip(i);
            break;
          case 7:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.conference_capabilities_as_moderator = new Set();
              for (var y = t.readSetBegin(), C = 0; C < y.size; C++) {
                var b = o(
                  "ModeratorControlsStateModeratorControlsStateTypes",
                ).ConferenceCapabilityType.cast(t.readI32());
                n.conference_capabilities_as_moderator.add(b);
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
        n.is_moderator === void 0 && (n.is_moderator = !1),
        n.screenshare_enabled === void 0 && (n.screenshare_enabled = !1),
        n.action_capabilities_as_moderator === void 0 &&
          (n.action_capabilities_as_moderator = new Set()),
        n.action_capabilities_as_participant === void 0 &&
          (n.action_capabilities_as_participant = new Set()),
        n.conference_capabilities_as_moderator === void 0 &&
          (n.conference_capabilities_as_moderator = new Set()),
        n
      );
    }
    function A(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_moderator = t.readBool())
              : t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.action_capabilities_as_moderator = new Set();
              for (var s = t.readSetBegin(), u = 0; u < s.size; u++) {
                var c = o(
                  "ModeratorControlsStateModeratorControlsStateTypes",
                ).ModeratorActionType.cast(t.readI32());
                n.action_capabilities_as_moderator.add(c);
              }
            } else t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.action_capabilities_as_participant = new Set();
              for (var d = t.readSetBegin(), m = 0; m < d.size; m++) {
                var p = o(
                  "ModeratorControlsStateModeratorControlsStateTypes",
                ).ModeratorActionType.cast(t.readI32());
                n.action_capabilities_as_participant.add(p);
              }
            } else t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.conference_capabilities_as_moderator = new Set();
              for (var _ = t.readSetBegin(), f = 0; f < _.size; f++) {
                var g = o(
                  "ModeratorControlsStateModeratorControlsStateTypes",
                ).ConferenceCapabilityType.cast(t.readI32());
                n.conference_capabilities_as_moderator.add(g);
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
        n.is_moderator === void 0 && (n.is_moderator = !1),
        n.action_capabilities_as_moderator === void 0 &&
          (n.action_capabilities_as_moderator = new Set()),
        n.action_capabilities_as_participant === void 0 &&
          (n.action_capabilities_as_participant = new Set()),
        n.conference_capabilities_as_moderator === void 0 &&
          (n.conference_capabilities_as_moderator = new Set()),
        n
      );
    }
    function F(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.feature_access_mode = o(
                  "ModeratorControlsStateModeratorControlsStateTypes",
                ).ModeratorFeatureAccessMode.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function O(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.moderator_uids = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.moderator_uids.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.participant_permissions_upsert_input = B(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.moderator_uids === void 0 && (n.moderator_uids = []),
        n
      );
    }
    function B(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.participant_id = t.readString())
              : t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.permissions = new Set();
              for (var s = t.readSetBegin(), u = 0; u < s.size; u++) {
                var c = o(
                  "ModeratorControlsStateModeratorControlsStateTypes",
                ).ModeratorActionType.cast(t.readI32());
                n.permissions.add(c);
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
        n.participant_id === void 0 && (n.participant_id = ""),
        n.permissions === void 0 && (n.permissions = new Set()),
        n
      );
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
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.moderator_uids = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = t.readString();
                n.moderator_uids.push(c);
              }
            } else t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.allows_screen_share = t.readBool())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.allows_screen_share_changed_by = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.soft_mute_feature_enabled = t.readBool())
              : t.skip(i);
            break;
          case 5:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.participant_capabilities = {};
              for (var d = t.readMapBegin(), m = 0; m < d.size; m++) {
                var p = t.readString(),
                  _ = A(t);
                n.participant_capabilities[p] = _;
              }
            } else t.skip(i);
            break;
          case 6:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.features_enabled = new Map();
              for (var f = t.readMapBegin(), g = 0; g < f.size; g++) {
                var h = o(
                    "ModeratorControlsStateModeratorControlsStateTypes",
                  ).ModeratorActionType.cast(t.readI32()),
                  y = F(t);
                h != null && n.features_enabled.set(h, y);
              }
            } else t.skip(i);
            break;
          case 7:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.conference_features_enabled = new Map();
              for (var C = t.readMapBegin(), b = 0; b < C.size; b++) {
                var v = o(
                    "ModeratorControlsStateModeratorControlsStateTypes",
                  ).ConferenceCapabilityType.cast(t.readI32()),
                  S = F(t);
                v != null && n.conference_features_enabled.set(v, S);
              }
            } else t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.are_moderators_mutable = t.readBool())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.moderator_uids === void 0 && (n.moderator_uids = []),
        n.allows_screen_share === void 0 && (n.allows_screen_share = !1),
        n.soft_mute_feature_enabled === void 0 &&
          (n.soft_mute_feature_enabled = !1),
        n.participant_capabilities === void 0 &&
          (n.participant_capabilities = {}),
        n.features_enabled === void 0 && (n.features_enabled = new Map()),
        n.conference_features_enabled === void 0 &&
          (n.conference_features_enabled = new Map()),
        n.are_moderators_mutable === void 0 && (n.are_moderators_mutable = !1),
        n
      );
    }
    ((l.ModeratorControlsInputState$DefaultConstructor = s),
      (l.ModeratorInputState$DefaultConstructor = u),
      (l.ParticipantInputState$DefaultConstructor = c),
      (l.ModeratorControlsOutputState$DefaultConstructor = d),
      (l.ModeratorActionInfo$DefaultConstructor = m),
      (l.ParticipantOutputState$DefaultConstructor = p),
      (l.ParticipantCapabilityInfo$DefaultConstructor = _),
      (l.ModeratorFeatureContext$DefaultConstructor = f),
      (l.ConferenceInputState$DefaultConstructor = g),
      (l.ParticipantPermissionsUpsertInput$DefaultConstructor = h),
      (l.ConferenceOutputState$DefaultConstructor = y),
      (l.serializeModeratorControlsInputState = C),
      (l.serializeModeratorInputState = b),
      (l.serializeParticipantInputState = v),
      (l.serializeModeratorControlsOutputState = S),
      (l.serializeModeratorActionInfo = R),
      (l.serializeParticipantOutputState = L),
      (l.serializeParticipantCapabilityInfo = E),
      (l.serializeModeratorFeatureContext = k),
      (l.serializeConferenceInputState = I),
      (l.serializeParticipantPermissionsUpsertInput = T),
      (l.serializeConferenceOutputState = D),
      (l.deserializeModeratorControlsInputState = x),
      (l.deserializeModeratorInputState = $),
      (l.deserializeParticipantInputState = P),
      (l.deserializeModeratorControlsOutputState = N),
      (l.deserializeModeratorActionInfo = M),
      (l.deserializeParticipantOutputState = w),
      (l.deserializeParticipantCapabilityInfo = A),
      (l.deserializeModeratorFeatureContext = F),
      (l.deserializeConferenceInputState = O),
      (l.deserializeParticipantPermissionsUpsertInput = B),
      (l.deserializeConferenceOutputState = W));
  },
  98,
);
