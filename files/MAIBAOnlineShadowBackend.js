__d(
  "MAIBAOnlineShadowBackend",
  ["MAIBAGKUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      return e != null ? e : await t();
    }
    function s() {
      var e = [];
      return (
        o("MAIBAGKUtils").isMAIBAR23BoostV1MuseShadowEnabled() &&
          e.push({ backend: "MUSE", museVariant: "v1_muse" }),
        o("MAIBAGKUtils").isMAIBAR23BoostV1MuseLowShadowEnabled() &&
          e.push({ backend: "MUSE", museVariant: "v1_muse_low" }),
        e
      );
    }
    function u(e, t, n, r, o, a) {
      var i,
        l = e.inlined_context;
      if (l == null) return null;
      var s = (i = l.entrypoint_client_context) != null ? i : {},
        u = s.additional_info,
        c = {};
      if (u != null)
        try {
          var d = JSON.parse(u);
          typeof d == "object" && d != null && !Array.isArray(d)
            ? (c = d)
            : (c = { original_additional_info: u });
        } catch (e) {
          c = { original_additional_info: u };
        }
      return (
        (c.is_online_shadow_mirror = !0),
        (c.online_shadow_backend = t),
        r != null && (c.muse_shadow_variant = r),
        n != null && (c.online_shadow_parent_conversation_id = n),
        o != null && (c.original_message_otid = o),
        a != null && (c.original_message_conversation_id = a),
        babelHelpers.extends({}, e, {
          inlined_context: babelHelpers.extends({}, l, {
            entrypoint_client_context: babelHelpers.extends({}, s, {
              additional_info: JSON.stringify(c),
            }),
          }),
        })
      );
    }
    ((l.resolveOnlineShadowBaseClientContext = e),
      (l.getEnabledBoostMuseShadowLegs = s),
      (l.addOnlineShadowMarkerToClientContext = u));
  },
  98,
);
