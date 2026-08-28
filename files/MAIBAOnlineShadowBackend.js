__d(
  "MAIBAOnlineShadowBackend",
  ["MAIBAGKUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return e != null ? e : yield t();
        })),
        s.apply(this, arguments)
      );
    }
    function u() {
      var e = [];
      return (
        o("MAIBAGKUtils").isMAIBAR23BoostV1MuseShadowEnabled() &&
          e.push({ backend: "MUSE", museVariant: "v1_muse" }),
        o("MAIBAGKUtils").isMAIBAR23BoostV2MuseShadowEnabled() &&
          e.push({ backend: "MUSE", museVariant: "v2_muse" }),
        e
      );
    }
    function c(e, t, n, r) {
      var o,
        a = e.inlined_context;
      if (a == null) return null;
      var i = (o = a.entrypoint_client_context) != null ? o : {},
        l = i.additional_info,
        s = {};
      if (l != null)
        try {
          var u = JSON.parse(l);
          typeof u == "object" && u != null && !Array.isArray(u)
            ? (s = u)
            : (s = { original_additional_info: l });
        } catch (e) {
          s = { original_additional_info: l };
        }
      return (
        (s.is_online_shadow_mirror = !0),
        (s.online_shadow_backend = t),
        r != null && (s.muse_shadow_variant = r),
        n != null && (s.online_shadow_parent_conversation_id = n),
        babelHelpers.extends({}, e, {
          inlined_context: babelHelpers.extends({}, a, {
            entrypoint_client_context: babelHelpers.extends({}, i, {
              additional_info: JSON.stringify(s),
            }),
          }),
        })
      );
    }
    ((l.resolveOnlineShadowBaseClientContext = e),
      (l.getEnabledBoostMuseShadowLegs = u),
      (l.addOnlineShadowMarkerToClientContext = c));
  },
  98,
);
