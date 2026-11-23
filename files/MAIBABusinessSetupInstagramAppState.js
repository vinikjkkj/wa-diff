__d(
  "MAIBABusinessSetupInstagramAppState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "INSTAGRAM_PROFILES",
      l = {};
    function s(e) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var t = e,
        n = t.SELECTION;
      return n !== "selected" && n !== "deselected" ? null : { SELECTION: n };
    }
    function u(e) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return l;
      var t = {};
      for (var n of Object.entries(e)) {
        var r = n[0],
          o = n[1],
          a = s(o);
        r !== "" && a != null && (t[r] = a);
      }
      return t;
    }
    function c(t) {
      return u(t[e]);
    }
    function d(t) {
      var n = t[e];
      if (n == null || typeof n != "object" || Array.isArray(n)) return null;
      var r = {},
        o = !1;
      for (var a of Object.entries(n)) {
        var i = a[0],
          l = a[1];
        if (!(l == null || typeof l != "object" || Array.isArray(l))) {
          var u = l,
            c = u.OIDC_TOKEN !== void 0,
            d = u.USERNAME !== void 0;
          if (!(!c && !d)) {
            o = !0;
            var m = s(u);
            if (i === "" || m == null) {
              r[i] = null;
              continue;
            }
            var p = { SELECTION: m.SELECTION };
            (d && (p.USERNAME = null), c && (p.OIDC_TOKEN = null), (r[i] = p));
          }
        }
      }
      return o ? r : null;
    }
    function m(e, t, n) {
      var r;
      return t === ""
        ? e
        : babelHelpers.extends({}, e, ((r = {}), (r[t] = { SELECTION: n }), r));
    }
    function p(e, t, n) {
      var r = e[t];
      return r == null ? e : m(e, t, n);
    }
    function _(e) {
      return Object.entries(e).map(function (e) {
        var t = e[0],
          n = e[1];
        return {
          avatarURI: null,
          connected: n.SELECTION === "selected",
          id: t,
          name: t,
          type: "instagram",
        };
      });
    }
    function f(e, t) {
      var n = Object.keys(e),
        r = Object.keys(t);
      return (
        n.length === r.length &&
        n.every(function (n) {
          var r = e[n],
            o = t[n];
          return r != null && o != null && r.SELECTION === o.SELECTION;
        })
      );
    }
    ((i.INSTAGRAM_PROFILES_FIELD = e),
      (i.parseInstagramProfilesState = u),
      (i.readInstagramProfilesState = c),
      (i.buildInstagramProfileMetadataCleanupPatch = d),
      (i.updateInstagramProfileState = m),
      (i.updateInstagramProfileSelection = p),
      (i.instagramProfilesStateToProfiles = _),
      (i.areInstagramProfilesStatesEqual = f));
  },
  66,
);
