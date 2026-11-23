__d(
  "MAIBAV2IXTA2UIAdapterNav",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "completed",
      l = "error",
      s = "replace",
      u = "stack",
      c = "pop_step",
      d = "__action_position",
      m = "primary",
      p = "secondary",
      _ = "verify_another_way",
      f = "go_back",
      g = "__nav_action",
      h = "verification_manual_handoff",
      y = "serialized_state";
    function C(e) {
      return typeof e == "string" ? e : null;
    }
    function b(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function v(e) {
      return e === "replace" || e === "stack" || e === "pop_step" ? e : null;
    }
    function S(e) {
      var t = b(e);
      if (t == null) return null;
      var n = C(t.label),
        r = C(t.action_name);
      return n == null || r == null
        ? null
        : { actionName: r, label: n, renderBehavior: v(t.render_behavior) };
    }
    function R(e) {
      var t = b(e.challenge_header);
      if (t == null) return null;
      var n = C(t.title);
      if (n == null) return null;
      var r = b(e.link),
        o = r != null ? C(r.label) : null,
        a = r != null ? C(r.url) : null,
        i = t.details,
        l = Array.isArray(i) ? i.map(C).filter(Boolean) : [];
      return {
        details: l,
        link: o != null && a != null ? { label: o, url: a } : null,
        notice: C(t.notice),
        subtitle: C(t.subtitle),
        title: n,
      };
    }
    function L(e) {
      return JSON.stringify([e.title, e.subtitle, e.notice, e.details, e.link]);
    }
    function E(e) {
      var t = b(e.section);
      return t == null ? null : S(t.postback_link);
    }
    function k(e) {
      return S(e.tertiary_action);
    }
    function I(e) {
      var t, n;
      try {
        n = b(JSON.parse(e));
      } catch (e) {
        return null;
      }
      var r = C((t = n) == null ? void 0 : t[y]);
      return r != null && r !== "" ? r : null;
    }
    function T(t) {
      var n,
        r = C(t.a2ui_model_json);
      return r == null
        ? []
        : [
            {
              interactive: C(t.status) !== e,
              key: (n = C(t.serialized_state)) != null ? n : "ixt-screen-0",
              a2uiJson: r,
            },
          ];
    }
    function D(e, t, n) {
      return n === c ? N(e, t) : n === s ? P(e, t) : $(e, t);
    }
    function x(e, t) {
      var n = C(t.summary_v09_json);
      return e.map(function (t, r) {
        return r === e.length - 1
          ? {
              interactive: !1,
              key: t.key,
              a2uiJson: n != null ? n : t.a2uiJson,
            }
          : t;
      });
    }
    function $(t, n) {
      var r,
        o = C(n.a2ui_model_json),
        a = C(n.summary_v09_json),
        i = C(n.status) === e,
        l = t.map(function (e, n) {
          return n === t.length - 1
            ? {
                interactive: !1,
                key: e.key,
                a2uiJson: a != null ? a : e.a2uiJson,
              }
            : e;
        });
      return o == null
        ? l
        : [].concat(l, [
            {
              interactive: !i,
              key:
                (r = C(n.serialized_state)) != null
                  ? r
                  : "ixt-screen-" + l.length,
              a2uiJson: o,
            },
          ]);
    }
    function P(e, t) {
      var n,
        r,
        o = C(t.a2ui_model_json);
      if (o == null || e.length === 0) return e;
      var a = e.length - 1,
        i =
          (n = (r = C(t.serialized_state)) != null ? r : I(o)) != null
            ? n
            : e[a].key,
        l = { interactive: !0, key: i, a2uiJson: o };
      return [].concat(e.slice(0, a), [l]);
    }
    function N(e, t) {
      var n,
        r,
        o = C(t.a2ui_model_json);
      if (o == null) return e;
      if (e.length < 2) return P(e, t);
      var a =
        (n = (r = C(t.serialized_state)) != null ? r : I(o)) != null
          ? n
          : "ixt-screen-" + (e.length - 2);
      return [].concat(e.slice(0, e.length - 2), [
        { interactive: !0, key: a, a2uiJson: o },
      ]);
    }
    ((i.STATUS_COMPLETED = e),
      (i.STATUS_ERROR = l),
      (i.RENDER_BEHAVIOR_REPLACE = s),
      (i.RENDER_BEHAVIOR_STACK = u),
      (i.RENDER_BEHAVIOR_POP_STEP = c),
      (i.ACTION_POSITION_KEY = d),
      (i.ACTION_POSITION_PRIMARY = m),
      (i.ACTION_POSITION_SECONDARY = p),
      (i.ACTION_VERIFY_ANOTHER_WAY = _),
      (i.ACTION_GO_BACK = f),
      (i.NAV_ACTION_KEY = g),
      (i.SCREEN_ID_MANUAL_HANDOFF = h),
      (i.asString = C),
      (i.asObject = b),
      (i.parseRenderBehavior = v),
      (i.parseChallengeHeader = R),
      (i.challengeHeaderKey = L),
      (i.parseOtherOptions = E),
      (i.parseTertiaryAction = k),
      (i.serializedStateFromJson = I),
      (i.initialSlotsFromState = T),
      (i.slotsAfterAction = D),
      (i.slotsAfterCompletion = x));
  },
  66,
);
