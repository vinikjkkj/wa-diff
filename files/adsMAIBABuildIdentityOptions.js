__d(
  "adsMAIBABuildIdentityOptions",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 200;
    function l(e) {
      return e != null && e !== "" ? e : null;
    }
    function s(e) {
      var t;
      return (t = l(e == null ? void 0 : e.legacy_instagram_user_id)) != null
        ? t
        : l(e == null ? void 0 : e.id);
    }
    function u(e, t) {
      var n = e.name.localeCompare(t.name);
      return n !== 0 ? n : e.id.localeCompare(t.id);
    }
    function c(e, t) {
      var n = [],
        r = new Set();
      if (e == null) return n;
      for (var o of e) {
        var a = s(o);
        if (!(a == null || r.has(a))) {
          r.add(a);
          var i = l(o == null ? void 0 : o.username),
            u = l(o == null ? void 0 : o.profile_pic_url);
          (n.push(
            babelHelpers.extends(
              { handle: i != null ? i : a, id: a },
              u != null ? { profilePicURL: u } : {},
            ),
          ),
            i != null && t.set(a, i));
        }
      }
      return n;
    }
    function d(t, n) {
      var r = [],
        o = new Map(),
        a = new Map(),
        i = new Map(),
        d = new Map(),
        m = c(n, i);
      if (t == null)
        return {
          businessIGOptions: m,
          connectedIGIdByPageId: d,
          igHandleMap: i,
          igOptionsByPageId: a,
          pageIdByConnectedIGId: new Map(),
          pageNameMap: o,
          pageOptions: r,
        };
      var p = new Set();
      for (var _ of t) {
        var f = l(_ == null ? void 0 : _.id);
        if (f != null) {
          var g = l(_ == null ? void 0 : _.name);
          if ((g != null && o.set(f, g), !p.has(f))) {
            if ((p.add(f), r.length < e)) {
              var h = l(_ == null ? void 0 : _.profile_pic_url);
              r.push(
                babelHelpers.extends(
                  {
                    id: f,
                    leadgenTosAccepted:
                      _ == null ? void 0 : _.leadgen_tos_accepted,
                    name: g != null ? g : f,
                  },
                  h != null ? { profilePicURL: h } : {},
                ),
              );
            }
            var y = [],
              C = new Set(),
              b = _ == null ? void 0 : _.connected_instagram_account,
              v = s(b);
            if (v != null) {
              d.set(f, v);
              var S = l(b == null ? void 0 : b.username),
                R = l(b == null ? void 0 : b.profile_pic_url);
              (y.push(
                babelHelpers.extends(
                  { handle: S != null ? S : v, id: v },
                  R != null ? { profilePicURL: R } : {},
                ),
              ),
                C.add(v),
                S != null && i.set(v, S));
            }
            for (var L of m) C.has(L.id) || (C.add(L.id), y.push(L));
            a.set(f, y);
          }
        }
      }
      r.sort(u);
      var E = new Map();
      for (var k of r) {
        var I = d.get(k.id);
        I != null && !E.has(I) && E.set(I, k.id);
      }
      return {
        businessIGOptions: m,
        connectedIGIdByPageId: d,
        igHandleMap: i,
        igOptionsByPageId: a,
        pageIdByConnectedIGId: E,
        pageNameMap: o,
        pageOptions: r,
      };
    }
    i.default = d;
  },
  66,
);
