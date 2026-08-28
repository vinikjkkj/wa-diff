__d(
  "PollsStatePollsStateSerializers",
  ["PollsStatePollsStateTypes", "ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {};
    }
    function u() {
      return {};
    }
    function c() {
      return { id: "", content: s(), voters: [], vote_fraction: 0 };
    }
    function d() {
      return {
        id: "",
        creator: u(),
        title: "",
        options: [],
        type: o("PollsStatePollsStateTypes").PollType.cast(0),
        state: o("PollsStatePollsStateTypes").PollState.cast(0),
      };
    }
    function m() {
      return { action: E() };
    }
    function p() {
      return { action: E(), request_id: "" };
    }
    function _() {
      return {
        title: "",
        options: [],
        type: o("PollsStatePollsStateTypes").PollType.cast(0),
        poll_id: "",
      };
    }
    function f() {
      return { cloned_poll_state: [] };
    }
    function g() {
      return { poll_id: "" };
    }
    function h() {
      return { poll_option_id: "" };
    }
    function y() {
      return { poll_option_id: "" };
    }
    function C() {
      return { is_ping: !1 };
    }
    function b() {
      return {
        can_create: !1,
        poll_permissions: {},
        poll_option_permissions: {},
      };
    }
    function v() {
      return { can_delete: !1 };
    }
    function S() {
      return { can_vote: !1, can_remove_vote: !1 };
    }
    function R() {
      return {
        polls: [],
        processed_action_uuids: new Set(),
        permissions: b(),
        is_creation_enabled: !1,
      };
    }
    function L() {
      return {
        polls: [],
        participant_id_to_processed_action_uuids: {},
        permissions: {},
        users_with_creation_enabled: new Set(),
        is_creation_enabled_for_all: !1,
        is_online_learning_call: !1,
      };
    }
    function E() {
      return {};
    }
    function k(t, n) {
      (n.writeStructBegin("Content"),
        t.text != null &&
          (n.writeFieldBegin({
            fname: "text",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.text),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function I(t, n) {
      (n.writeStructBegin("PollParticipant"),
        t.fbid != null &&
          (n.writeFieldBegin({
            fname: "fbid",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.fbid),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function T(t, n) {
      if (
        (n.writeStructBegin("PollOption"),
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
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "content", ftype: e.STRUCT, fid: 2 }),
        t.content != null)
      )
        k(t.content, n);
      else {
        var a = s();
        k(a, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "voters", ftype: e.LIST, fid: 3 }),
        t.voters != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.voters.length,
        });
        for (var i of t.voters) I(i, n);
        n.writeListEnd();
      } else {
        var l = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: l.length,
        });
        for (var u of l) I(u, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "vote_fraction", ftype: e.FLOAT, fid: 4 }),
        t.vote_fraction != null)
      )
        n.writeFloat(t.vote_fraction);
      else {
        var c = 0;
        n.writeFloat(c);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function D(t, n) {
      if (
        (n.writeStructBegin("Poll"),
        n.writeFieldBegin({
          fname: "id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.id != null)
      )
        n.writeString(t.id);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "creator", ftype: e.STRUCT, fid: 2 }),
        t.creator != null)
      )
        I(t.creator, n);
      else {
        var i = u();
        I(i, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "title", ftype: e.STRING, fid: 3 }),
        t.title != null)
      )
        n.writeString(t.title);
      else {
        var l = "";
        n.writeString(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "options", ftype: e.LIST, fid: 4 }),
        t.options != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.options.length,
        });
        for (var s of t.options) T(s, n);
        n.writeListEnd();
      } else {
        var c = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: c.length,
        });
        for (var d of c) T(d, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "type", ftype: e.I32, fid: 5 }),
        t.type != null)
      ) {
        var m;
        n.writeI32((m = t.type) != null ? m : 0);
      } else {
        var p = o("PollsStatePollsStateTypes").PollType.cast(0);
        n.writeI32(p != null ? p : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "state", ftype: e.I32, fid: 6 }),
        t.state != null)
      ) {
        var _;
        n.writeI32((_ = t.state) != null ? _ : 0);
      } else {
        var f = o("PollsStatePollsStateTypes").PollState.cast(0);
        n.writeI32(f != null ? f : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function x(t, n) {
      if (
        (n.writeStructBegin("PollsParticipantInputState"),
        n.writeFieldBegin({
          fname: "action",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.action != null)
      )
        V(t.action, n);
      else {
        var o = E();
        V(o, n);
      }
      (n.writeFieldEnd(),
        t.action_uuid != null &&
          (n.writeFieldBegin({
            fname: "action_uuid",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.action_uuid),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function $(t, n) {
      if (
        (n.writeStructBegin("E2EEPollsParticipantPayload"),
        n.writeFieldBegin({
          fname: "action",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.action != null)
      )
        V(t.action, n);
      else {
        var o = E();
        V(o, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "request_id", ftype: e.STRING, fid: 2 }),
        t.request_id != null)
      )
        n.writeString(t.request_id);
      else {
        var a = "";
        n.writeString(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function P(t, n) {
      if (
        (n.writeStructBegin("PollCreateInputState"),
        n.writeFieldBegin({
          fname: "title",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.title != null)
      )
        n.writeString(t.title);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "options", ftype: e.LIST, fid: 2 }),
        t.options != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.options.length,
        });
        for (var i of t.options) T(i, n);
        n.writeListEnd();
      } else {
        var l = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: l.length,
        });
        for (var s of l) T(s, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "type", ftype: e.I32, fid: 3 }),
        t.type != null)
      ) {
        var u;
        n.writeI32((u = t.type) != null ? u : 0);
      } else {
        var c = o("PollsStatePollsStateTypes").PollType.cast(0);
        n.writeI32(c != null ? c : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "poll_id", ftype: e.STRING, fid: 4 }),
        t.poll_id != null)
      )
        n.writeString(t.poll_id);
      else {
        var d = "";
        n.writeString(d);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function N(t, n) {
      if (
        (n.writeStructBegin("PollCloneE2EEState"),
        n.writeFieldBegin({
          fname: "cloned_poll_state",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.cloned_poll_state != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.cloned_poll_state.length,
        });
        for (var o of t.cloned_poll_state) D(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) D(i, n);
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function M(t, n) {
      if (
        (n.writeStructBegin("PollRemoveInputState"),
        n.writeFieldBegin({
          fname: "poll_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.poll_id != null)
      )
        n.writeString(t.poll_id);
      else {
        var o = "";
        n.writeString(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function w(t, n) {
      if (
        (n.writeStructBegin("PollVoteInputState"),
        n.writeFieldBegin({
          fname: "poll_option_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.poll_option_id != null)
      )
        n.writeString(t.poll_option_id);
      else {
        var o = "";
        n.writeString(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function A(t, n) {
      if (
        (n.writeStructBegin("PollRemoveVoteInputState"),
        n.writeFieldBegin({
          fname: "poll_option_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.poll_option_id != null)
      )
        n.writeString(t.poll_option_id);
      else {
        var o = "";
        n.writeString(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function F(t, n) {
      if (
        (n.writeStructBegin("PollPingInputState"),
        n.writeFieldBegin({
          fname: "is_ping",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.is_ping != null)
      )
        n.writeBool(t.is_ping);
      else {
        var o = !1;
        n.writeBool(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function O(t, n) {
      if (
        (n.writeStructBegin("ParticipantPermissions"),
        n.writeFieldBegin({
          fname: "can_create",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.can_create != null)
      )
        n.writeBool(t.can_create);
      else {
        var o = !1;
        n.writeBool(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "poll_permissions", ftype: e.MAP, fid: 2 }),
        t.poll_permissions != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(t.poll_permissions).length,
        });
        for (var a of Object.entries(t.poll_permissions)) {
          var i = a[0],
            l = a[1];
          (n.writeString(i), B(l, n));
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
          (n.writeString(c), B(d, n));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "poll_option_permissions",
          ftype: e.MAP,
          fid: 3,
        }),
        t.poll_option_permissions != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(t.poll_option_permissions).length,
        });
        for (var m of Object.entries(t.poll_option_permissions)) {
          var p = m[0],
            _ = m[1];
          (n.writeString(p), W(_, n));
        }
        n.writeMapEnd();
      } else {
        var f = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(f).length,
        });
        for (var g of Object.entries(f)) {
          var h = g[0],
            y = g[1];
          (n.writeString(h), W(y, n));
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function B(t, n) {
      if (
        (n.writeStructBegin("PollPermissions"),
        n.writeFieldBegin({
          fname: "can_delete",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.can_delete != null)
      )
        n.writeBool(t.can_delete);
      else {
        var o = !1;
        n.writeBool(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function W(t, n) {
      if (
        (n.writeStructBegin("PollOptionPermissions"),
        n.writeFieldBegin({
          fname: "can_vote",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.can_vote != null)
      )
        n.writeBool(t.can_vote);
      else {
        var o = !1;
        n.writeBool(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "can_remove_vote", ftype: e.BOOL, fid: 2 }),
        t.can_remove_vote != null)
      )
        n.writeBool(t.can_remove_vote);
      else {
        var a = !1;
        n.writeBool(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function q(t, n) {
      if (
        (n.writeStructBegin("PollsParticipantOutputState"),
        n.writeFieldBegin({
          fname: "polls",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.polls != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.polls.length,
        });
        for (var o of t.polls) D(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) D(i, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "processed_action_uuids",
          ftype: e.SET,
          fid: 2,
        }),
        t.processed_action_uuids != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.processed_action_uuids.size,
        });
        for (var l of t.processed_action_uuids) n.writeString(l);
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
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "permissions", ftype: e.STRUCT, fid: 3 }),
        t.permissions != null)
      )
        O(t.permissions, n);
      else {
        var c = b();
        O(c, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "is_creation_enabled",
          ftype: e.BOOL,
          fid: 4,
        }),
        t.is_creation_enabled != null)
      )
        n.writeBool(t.is_creation_enabled);
      else {
        var d = !1;
        n.writeBool(d);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function U(t, n) {
      if (
        (n.writeStructBegin("PollsConferenceOutputState"),
        n.writeFieldBegin({
          fname: "polls",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.polls != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.polls.length,
        });
        for (var o of t.polls) D(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) D(i, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "participant_id_to_processed_action_uuids",
          ftype: e.MAP,
          fid: 2,
        }),
        t.participant_id_to_processed_action_uuids != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.SET,
          size: Object.keys(t.participant_id_to_processed_action_uuids).length,
        });
        for (var l of Object.entries(
          t.participant_id_to_processed_action_uuids,
        )) {
          var s = l[0],
            u = l[1];
          (n.writeString(s),
            n.writeSetBegin({
              etype: (e || (e = r("ThriftTypes"))).STRING,
              size: u.size,
            }));
          for (var c of u) n.writeString(c);
          n.writeSetEnd();
        }
        n.writeMapEnd();
      } else {
        var d = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.SET,
          size: Object.keys(d).length,
        });
        for (var m of Object.entries(d)) {
          var p = m[0],
            _ = m[1];
          (n.writeString(p),
            n.writeSetBegin({
              etype: (e || (e = r("ThriftTypes"))).STRING,
              size: _.size,
            }));
          for (var f of _) n.writeString(f);
          n.writeSetEnd();
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "permissions", ftype: e.MAP, fid: 3 }),
        t.permissions != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(t.permissions).length,
        });
        for (var g of Object.entries(t.permissions)) {
          var h = g[0],
            y = g[1];
          (n.writeString(h), O(y, n));
        }
        n.writeMapEnd();
      } else {
        var C = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(C).length,
        });
        for (var b of Object.entries(C)) {
          var v = b[0],
            S = b[1];
          (n.writeString(v), O(S, n));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "users_with_creation_enabled",
          ftype: e.SET,
          fid: 4,
        }),
        t.users_with_creation_enabled != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.users_with_creation_enabled.size,
        });
        for (var R of t.users_with_creation_enabled) n.writeString(R);
        n.writeSetEnd();
      } else {
        var L = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: L.size,
        });
        for (var E of L) n.writeString(E);
        n.writeSetEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "is_creation_enabled_for_all",
          ftype: e.BOOL,
          fid: 5,
        }),
        t.is_creation_enabled_for_all != null)
      )
        n.writeBool(t.is_creation_enabled_for_all);
      else {
        var k = !1;
        n.writeBool(k);
      }
      if (
        (n.writeFieldEnd(),
        t.creation_gk != null &&
          (n.writeFieldBegin({
            fname: "creation_gk",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.creation_gk),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "is_online_learning_call",
          ftype: e.BOOL,
          fid: 7,
        }),
        t.is_online_learning_call != null)
      )
        n.writeBool(t.is_online_learning_call);
      else {
        var I = !1;
        n.writeBool(I);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function V(t, n) {
      if (
        (n.writeStructBegin("PollsParticipantActionInputState"),
        t.create != null)
      ) {
        (n.writeFieldBegin({
          fname: "create",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
          P(t.create, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.remove != null) {
        (n.writeFieldBegin({
          fname: "remove",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 2,
        }),
          M(t.remove, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.vote != null) {
        (n.writeFieldBegin({
          fname: "vote",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 3,
        }),
          w(t.vote, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.remove_vote != null) {
        (n.writeFieldBegin({
          fname: "remove_vote",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 4,
        }),
          A(t.remove_vote, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.ping != null) {
        (n.writeFieldBegin({
          fname: "ping",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 6,
        }),
          F(t.ping, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.clone_poll_state != null) {
        (n.writeFieldBegin({
          fname: "clone_poll_state",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 8,
        }),
          N(t.clone_poll_state, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      (n.writeFieldStop(), n.writeStructEnd());
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
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.text = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
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
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.fbid = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
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
              ? (n.id = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.content = H(t))
              : t.skip(a);
            break;
          case 3:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.voters = [];
              for (var l = t.readListBegin(), u = 0; u < l.size; u++) {
                var c = G(t);
                n.voters.push(c);
              }
            } else t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).FLOAT
              ? (n.vote_fraction = t.readFloat())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.id === void 0 && (n.id = ""),
        n.content === void 0 && (n.content = s()),
        n.voters === void 0 && (n.voters = []),
        n.vote_fraction === void 0 && (n.vote_fraction = 0),
        n
      );
    }
    function j(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.id = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.creator = G(t))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.title = t.readString())
              : t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.options = [];
              for (var s = t.readListBegin(), c = 0; c < s.size; c++) {
                var d = z(t);
                n.options.push(d);
              }
            } else t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.type = o("PollsStatePollsStateTypes").PollType.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.state = o("PollsStatePollsStateTypes").PollState.cast(
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
        n.id === void 0 && (n.id = ""),
        n.creator === void 0 && (n.creator = u()),
        n.title === void 0 && (n.title = ""),
        n.options === void 0 && (n.options = []),
        n.type === void 0 &&
          (n.type = o("PollsStatePollsStateTypes").PollType.cast(0)),
        n.state === void 0 &&
          (n.state = o("PollsStatePollsStateTypes").PollState.cast(0)),
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
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.action = le(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.action_uuid = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.action === void 0 && (n.action = E()), n);
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
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.action = le(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.request_id = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.action === void 0 && (n.action = E()),
        n.request_id === void 0 && (n.request_id = ""),
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
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.title = t.readString())
              : t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.options = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = z(t);
                n.options.push(c);
              }
            } else t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.type = o("PollsStatePollsStateTypes").PollType.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.poll_id = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.title === void 0 && (n.title = ""),
        n.options === void 0 && (n.options = []),
        n.type === void 0 &&
          (n.type = o("PollsStatePollsStateTypes").PollType.cast(0)),
        n.poll_id === void 0 && (n.poll_id = ""),
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
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.cloned_poll_state = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = j(t);
                n.cloned_poll_state.push(u);
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
        n.cloned_poll_state === void 0 && (n.cloned_poll_state = []),
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
              ? (n.poll_id = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.poll_id === void 0 && (n.poll_id = ""), n);
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
              ? (n.poll_option_id = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.poll_option_id === void 0 && (n.poll_option_id = ""),
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
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.poll_option_id = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.poll_option_id === void 0 && (n.poll_option_id = ""),
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
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_ping = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.is_ping === void 0 && (n.is_ping = !1), n);
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
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.can_create = t.readBool())
              : t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.poll_permissions = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readString(),
                  c = re(t);
                n.poll_permissions[u] = c;
              }
            } else t.skip(a);
            break;
          case 3:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.poll_option_permissions = {};
              for (var d = t.readMapBegin(), m = 0; m < d.size; m++) {
                var p = t.readString(),
                  _ = oe(t);
                n.poll_option_permissions[p] = _;
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
        n.can_create === void 0 && (n.can_create = !1),
        n.poll_permissions === void 0 && (n.poll_permissions = {}),
        n.poll_option_permissions === void 0 &&
          (n.poll_option_permissions = {}),
        n
      );
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
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.can_delete = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.can_delete === void 0 && (n.can_delete = !1),
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
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.can_vote = t.readBool())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.can_remove_vote = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.can_vote === void 0 && (n.can_vote = !1),
        n.can_remove_vote === void 0 && (n.can_remove_vote = !1),
        n
      );
    }
    function ae(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.polls = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = j(t);
                n.polls.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).SET) {
              n.processed_action_uuids = new Set();
              for (var c = t.readSetBegin(), d = 0; d < c.size; d++) {
                var m = t.readString();
                n.processed_action_uuids.add(m);
              }
            } else t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.permissions = ne(t))
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_creation_enabled = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.polls === void 0 && (n.polls = []),
        n.processed_action_uuids === void 0 &&
          (n.processed_action_uuids = new Set()),
        n.permissions === void 0 && (n.permissions = b()),
        n.is_creation_enabled === void 0 && (n.is_creation_enabled = !1),
        n
      );
    }
    function ie(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.polls = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = j(t);
                n.polls.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.participant_id_to_processed_action_uuids = {};
              for (var c = t.readMapBegin(), d = 0; d < c.size; d++) {
                for (
                  var m = t.readString(),
                    p = new Set(),
                    _ = t.readSetBegin(),
                    f = 0;
                  f < _.size;
                  f++
                ) {
                  var g = t.readString();
                  p.add(g);
                }
                n.participant_id_to_processed_action_uuids[m] = p;
              }
            } else t.skip(a);
            break;
          case 3:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.permissions = {};
              for (var h = t.readMapBegin(), y = 0; y < h.size; y++) {
                var C = t.readString(),
                  b = ne(t);
                n.permissions[C] = b;
              }
            } else t.skip(a);
            break;
          case 4:
            if (a === (e || (e = r("ThriftTypes"))).SET) {
              n.users_with_creation_enabled = new Set();
              for (var v = t.readSetBegin(), S = 0; S < v.size; S++) {
                var R = t.readString();
                n.users_with_creation_enabled.add(R);
              }
            } else t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_creation_enabled_for_all = t.readBool())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.creation_gk = t.readString())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_online_learning_call = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.polls === void 0 && (n.polls = []),
        n.participant_id_to_processed_action_uuids === void 0 &&
          (n.participant_id_to_processed_action_uuids = {}),
        n.permissions === void 0 && (n.permissions = {}),
        n.users_with_creation_enabled === void 0 &&
          (n.users_with_creation_enabled = new Set()),
        n.is_creation_enabled_for_all === void 0 &&
          (n.is_creation_enabled_for_all = !1),
        n.is_online_learning_call === void 0 &&
          (n.is_online_learning_call = !1),
        n
      );
    }
    function le(t) {
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
              if (n == null) ((o.create = X(t)), (n = "create"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: PollsParticipantActionInputState; current field: create, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((o.remove = J(t)), (n = "remove"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: PollsParticipantActionInputState; current field: remove, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((o.vote = Z(t)), (n = "vote"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: PollsParticipantActionInputState; current field: vote, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((o.remove_vote = ee(t)), (n = "remove_vote"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: PollsParticipantActionInputState; current field: remove_vote, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 6:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((o.ping = te(t)), (n = "ping"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: PollsParticipantActionInputState; current field: ping, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 8:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.clone_poll_state = Y(t)), (n = "clone_poll_state"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: PollsParticipantActionInputState; current field: clone_poll_state, previous deserialized field: " +
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
    ((l.Content$DefaultConstructor = s),
      (l.PollParticipant$DefaultConstructor = u),
      (l.PollOption$DefaultConstructor = c),
      (l.Poll$DefaultConstructor = d),
      (l.PollsParticipantInputState$DefaultConstructor = m),
      (l.E2EEPollsParticipantPayload$DefaultConstructor = p),
      (l.PollCreateInputState$DefaultConstructor = _),
      (l.PollCloneE2EEState$DefaultConstructor = f),
      (l.PollRemoveInputState$DefaultConstructor = g),
      (l.PollVoteInputState$DefaultConstructor = h),
      (l.PollRemoveVoteInputState$DefaultConstructor = y),
      (l.PollPingInputState$DefaultConstructor = C),
      (l.ParticipantPermissions$DefaultConstructor = b),
      (l.PollPermissions$DefaultConstructor = v),
      (l.PollOptionPermissions$DefaultConstructor = S),
      (l.PollsParticipantOutputState$DefaultConstructor = R),
      (l.PollsConferenceOutputState$DefaultConstructor = L),
      (l.PollsParticipantActionInputState$DefaultConstructor = E),
      (l.serializeContent = k),
      (l.serializePollParticipant = I),
      (l.serializePollOption = T),
      (l.serializePoll = D),
      (l.serializePollsParticipantInputState = x),
      (l.serializeE2EEPollsParticipantPayload = $),
      (l.serializePollCreateInputState = P),
      (l.serializePollCloneE2EEState = N),
      (l.serializePollRemoveInputState = M),
      (l.serializePollVoteInputState = w),
      (l.serializePollRemoveVoteInputState = A),
      (l.serializePollPingInputState = F),
      (l.serializeParticipantPermissions = O),
      (l.serializePollPermissions = B),
      (l.serializePollOptionPermissions = W),
      (l.serializePollsParticipantOutputState = q),
      (l.serializePollsConferenceOutputState = U),
      (l.serializePollsParticipantActionInputState = V),
      (l.deserializeContent = H),
      (l.deserializePollParticipant = G),
      (l.deserializePollOption = z),
      (l.deserializePoll = j),
      (l.deserializePollsParticipantInputState = K),
      (l.deserializeE2EEPollsParticipantPayload = Q),
      (l.deserializePollCreateInputState = X),
      (l.deserializePollCloneE2EEState = Y),
      (l.deserializePollRemoveInputState = J),
      (l.deserializePollVoteInputState = Z),
      (l.deserializePollRemoveVoteInputState = ee),
      (l.deserializePollPingInputState = te),
      (l.deserializeParticipantPermissions = ne),
      (l.deserializePollPermissions = re),
      (l.deserializePollOptionPermissions = oe),
      (l.deserializePollsParticipantOutputState = ae),
      (l.deserializePollsConferenceOutputState = ie),
      (l.deserializePollsParticipantActionInputState = le));
  },
  98,
);
