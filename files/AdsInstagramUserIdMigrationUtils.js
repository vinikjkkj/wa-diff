__d(
  "AdsInstagramUserIdMigrationUtils",
  ["gkx", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = void 0,
      s = ["creative", "instagram_user_id"],
      u = ["creative", "instagram_actor_id"],
      c = ["creative", "object_story_spec", "instagram_user_id"],
      d = ["creative", "object_story_spec", "instagram_actor_id"];
    function m(e) {
      return e;
    }
    function p(e) {
      return e;
    }
    var _ = {
      creative: {
        instagram_user_id: {
          get: function (t) {
            return t.getIn(u);
          },
          set: function (t, n, o) {
            var e = function (o) {
              var e = o.setIn(u, t);
              return (r("gkx")("9636") && (e = e.setIn(s, n)), e);
            };
            return o === void 0 ? e : e(o);
          },
          delete: function (t) {
            var e = t.deleteIn(u);
            return (r("gkx")("9636") && (e = e.deleteIn(s)), e);
          },
        },
        object_story_spec: {
          instagram_user_id: {
            get: function (t) {
              return (r("vulture")("fMD_lK_cwETbpaPBUDVN5Xsah3k="), t.getIn(d));
            },
            set: function (t, n, o) {
              var e = function (o) {
                var e = o.setIn(d, t);
                return (r("gkx")("9636") && (e = e.setIn(c, n)), e);
              };
              return o === void 0 ? e : e(o);
            },
            delete: function (t) {
              var e = t.deleteIn(d);
              return (r("gkx")("9636") && (e = e.deleteIn(c)), e);
            },
          },
        },
      },
    };
    ((l.PLACEHOLDER_IGID_V2 = e),
      (l.convertIGIDV2FromStringToStrongType = m),
      (l.convertIGIDV2FromStrongTypeToString = p),
      (l.IGIDV2MigrationAccessors = _));
  },
  98,
);
