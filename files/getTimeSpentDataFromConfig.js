__d(
  "getTimeSpentDataFromConfig",
  [
    "FBLogger",
    "ProfileCometSession",
    "Random",
    "filterObject",
    "getCometEntityKey",
    "getUserIDFromRoute",
    "mapObject",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      if (e == null) return null;
      switch (e.source) {
        case "passthrough_props":
          if (t != null) return t[e.name] != null ? String(t[e.name]) : null;
      }
      return null;
    }
    function u(e) {
      switch (e) {
        case "uuid":
          return r("uuidv4")();
        case "uint32":
          return o("Random").uint32().toString();
        case "upl":
          return ["upl", Date.now(), r("uuidv4")()].join("_");
        case "bigint":
          return (
            "" +
            o("Random").uint32().toString() +
            o("Random").uint32().toString().slice(0, 8)
          );
        default:
          return (
            r("FBLogger")("comet_infra").mustfix(
              "Invalid Time Spent SessionID type",
            ),
            null
          );
      }
    }
    function c(t, n, a, i) {
      var l,
        c = t.timeSpentConfig,
        d = null,
        m = (l = r("getCometEntityKey")(t)) == null ? void 0 : l.entity_id;
      if (
        m != null &&
        ((d = babelHelpers.extends({}, d, { container_id: m })),
        c != null && c.has_profile_session_id)
      ) {
        var p = o("ProfileCometSession").navigate(m, a, t, i);
        p != null &&
          (d = babelHelpers.extends({}, d, { profile_session_id: p }));
      }
      if ((c == null ? void 0 : c.session_ids) != null) {
        var _ = r("filterObject")(
          (e || (e = r("mapObject")))(c.session_ids, function (e) {
            var t;
            return (t = s(e.carryover, n)) != null ? t : u(e.type);
          }),
          Boolean,
        );
        d = babelHelpers.extends({}, d, { session_ids: _ });
      }
      if (c != null && c.has_viewee_id) {
        var f = r("getUserIDFromRoute")(t);
        f != null && (d = babelHelpers.extends({}, d, { viewee_id: f }));
      }
      return d;
    }
    l.default = c;
  },
  98,
);
