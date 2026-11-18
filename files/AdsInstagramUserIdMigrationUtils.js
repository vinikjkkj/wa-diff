__d(
  "AdsInstagramUserIdMigrationUtils",
  ["ODS", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "igid_v2_migration",
      u = void 0;
    function c(e) {
      return e;
    }
    function d(e) {
      return e;
    }
    function m(e) {
      return e != null && e !== "" && e !== "0";
    }
    function p(e) {
      return e != null && e !== "";
    }
    function _(e) {
      if (e == null) return null;
      var t = String(e);
      return t === "" || t === "0" ? null : t;
    }
    function f(e) {
      return e != null && String(e) === "0";
    }
    function g(e) {
      return e != null && h(e) == null;
    }
    function h(e) {
      return e == null || e === "" || e === "0" ? null : e;
    }
    function y(e) {
      return e;
    }
    function C(e, t) {
      return !r("gkx")("9636") || m(e) ? e : h(t);
    }
    function b(e) {
      return e;
    }
    function v(e, t) {
      return t == null || !m(t) || !r("gkx")("9636")
        ? { instagramAccountID: e }
        : { instagramAccountID: e, instagramUserID: t };
    }
    function S(e) {
      return m(e) && r("gkx")("9636") ? e : null;
    }
    function R(e) {
      var t;
      return r("gkx")("9636") && (t = h(e)) != null ? t : void 0;
    }
    function L(e) {
      var t = e.creative,
        n = t == null ? void 0 : t.object_story_spec,
        r = h(n == null ? void 0 : n.instagram_user_id),
        o = h(t == null ? void 0 : t.instagram_user_id),
        a = t == null ? void 0 : t.instagram_actor_id;
      return p(a) && o != null
        ? o
        : m(a)
          ? (n == null ? void 0 : n.instagram_actor_id) === a
            ? r
            : null
          : m(n == null ? void 0 : n.instagram_actor_id) || r != null
            ? r
            : o;
    }
    function E(e, t, n) {
      var o;
      if (!r("gkx")("9636")) return t;
      var a =
        m(e) && (n == null ? void 0 : n.id) === e
          ? h(n == null ? void 0 : n.id_v2)
          : null;
      return (o = a != null ? a : h(t)) != null ? o : void 0;
    }
    function k(e, t, n, o) {
      var a;
      if (!r("gkx")("9636")) return o;
      if (!m(t)) {
        var i;
        return (i = h(o)) != null ? i : void 0;
      }
      var l = L(e),
        s = (a = e.creative) == null ? void 0 : a.instagram_actor_id;
      if (p(s) && s !== t) {
        var u;
        l = h(
          (u = e.creative) == null || (u = u.object_story_spec) == null
            ? void 0
            : u.instagram_user_id,
        );
      }
      return E(t, l, n);
    }
    function I(e, t, n) {
      var r,
        o,
        a = n;
      if (!m(t) && !m(a)) return !1;
      var i = (r = e.creative) == null ? void 0 : r.instagram_actor_id,
        l = (o = e.creative) == null ? void 0 : o.instagram_user_id,
        s = p(i) && ((p(t) && i !== t) || (!m(t) && l !== a));
      return (m(l) && l !== a) || s;
    }
    function T(e, t) {
      var n, o;
      return (
        ((n = e.igidV1) != null ? n : null) ===
          ((o = t.igidV1) != null ? o : null) &&
        (!r("gkx")("9636") ||
          (e.lookupID === t.lookupID &&
            (e.lookupID != null || t.igidV1 == null)))
      );
    }
    function D(e) {
      var t = e.v1 == null || String(e.v1) === "" ? null : String(e.v1),
        n = h(_(e.v2));
      return { v1: t, v2: m(t) && n === t ? null : n };
    }
    function x(e, t) {
      return _(e) != null || _(t) != null;
    }
    function $(e, t) {
      var n = D(e),
        r = _(n.v1);
      if (r != null) return { namespace: "v1", id: r };
      var o = n.v2;
      if (o == null) return { namespace: "none" };
      var a = B(o, t);
      if (a.status === "loaded") {
        var i = _(a.record.id);
        if (i != null && i !== o) return { namespace: "v1", id: i };
        if (f(a.record.id))
          return { namespace: "v2", id: o, status: "confirmed_v2_only" };
      }
      return { namespace: "v2", id: o, status: "unavailable" };
    }
    function P(e, t, n, r) {
      return t.namespace === "none" || r.namespace === "none"
        ? !1
        : (t.namespace === "v1" && r.namespace === "v1") ||
            (t.namespace === "v2" && r.namespace === "v2")
          ? t.id === r.id
          : t.namespace === "v2"
            ? t.status === "unavailable" && t.id === n.v2
            : r.namespace === "v2" &&
              r.status === "unavailable" &&
              r.id === e.v2;
    }
    function N(e, t, n) {
      if (t == null) return !1;
      var r = D(e),
        o = D(t);
      return P(r, $(r, n), o, $(o, n));
    }
    function M(e, t) {
      var n = e.getUnifiedCreativeAPIFieldMapping.bind(e),
        r = n(t).instagramActorID;
      return (r == null ? void 0 : r.length) === 2 &&
        r[0] === "creative" &&
        r[1] === "instagram_actor_id"
        ? "root"
        : (r == null ? void 0 : r.length) === 3 &&
            r[0] === "creative" &&
            r[1] === "object_story_spec" &&
            r[2] === "instagram_actor_id"
          ? "object_story_spec"
          : null;
    }
    function w(e, t, n, r) {
      var o,
        a,
        i = M(t, r);
      if (i == null) return { v1: null, v2: null };
      var l = D({
          v1: e == null ? void 0 : e.instagram_actor_id,
          v2: e == null ? void 0 : e.instagram_user_id,
        }),
        s = D({
          v1:
            e == null || (o = e.object_story_spec) == null
              ? void 0
              : o.instagram_actor_id,
          v2:
            e == null || (a = e.object_story_spec) == null
              ? void 0
              : a.instagram_user_id,
        }),
        u = i === "root" ? l : s,
        c = i === "root" ? s : l;
      return $(u, n).namespace !== "none"
        ? u
        : $(c, n).namespace !== "none"
          ? c
          : { v1: null, v2: null };
    }
    function A(e, t) {
      var n = D({ v1: e.v1, v2: t }).v2;
      return n != null ? n : _(e.v1) != null ? null : h(_(e.v2));
    }
    function F(e, t) {
      var n;
      if (e.length === 0) return null;
      var r = e.map(D),
        o = r.map(function (e) {
          return $(e, t);
        }),
        a = new Set(
          o.flatMap(function (e) {
            return e.namespace === "v1" ? [e.id] : [];
          }),
        );
      if (a.size > 1) return null;
      var i = o.findIndex(function (e) {
          return e.namespace === "v1";
        }),
        l = i === -1 ? 0 : i;
      if (
        r.some(function (e, t) {
          return !P(r[l], o[l], e, o[t]);
        })
      )
        return null;
      var s = r
          .map(function (e) {
            return _(e.v1);
          })
          .find(function (e) {
            return e != null;
          }),
        u = new Set(
          r.flatMap(function (e) {
            return e.v2 != null ? [e.v2] : [];
          }),
        );
      return s == null && u.size !== 1
        ? null
        : D({
            v1:
              s != null
                ? s
                : r.some(function (e) {
                      return e.v1 === "0";
                    })
                  ? "0"
                  : null,
            v2:
              u.size === 1 && (n = u.values().next().value) != null ? n : null,
          });
    }
    function O(e, t) {
      var n = _(e);
      if (n == null || t == null) return { v1: null, v2: null };
      var r = D({ v1: t.id, v2: t.id_v2 });
      return _(r.v1) === n || r.v2 === n ? r : { v1: null, v2: null };
    }
    function B(e, t) {
      var n = h(_(e));
      if (n == null) return { status: "missing" };
      var r = t(n);
      return r == null || r.loadState !== "LOADED"
        ? { status: "pending" }
        : _(r.id_v2) !== n
          ? { status: "missing" }
          : { status: "loaded", record: r };
    }
    function W(e, t) {
      return r("gkx")("15865")
        ? t != null && t !== ""
          ? t
          : (e != null && e !== "" && q(t), e)
        : e;
    }
    function q(t) {
      var n =
        t === void 0 ? "v2_undefined" : t === null ? "v2_null" : "v2_empty";
      (e || (e = o("ODS"))).bumpEntityKey(68, s, "read_path.v1_fallback." + n);
    }
    ((l.PLACEHOLDER_IGID_V2 = u),
      (l.convertIGIDV1FromStringToStrongType = c),
      (l.convertIGIDV2FromStringToStrongType = d),
      (l.isInstagramID = m),
      (l.hasIGIDV1 = p),
      (l.normalizeLoadedIGID = _),
      (l.isPlaceholderLoadedIGID = f),
      (l.isBlankIGIDV2 = g),
      (l.parseIGIDV2 = h),
      (l.convertIGIDV2FromStrongTypeToString = y),
      (l.getInstagramAccountLookupID = C),
      (l.convertIGIDV1OrIGIDV2ToFBID = b),
      (l.getInstagramAccountActionPayload = v),
      (l.getDoubleWriteIGIDV2 = S),
      (l.getDoubleWriteGatedDefaultInstagramUserID = R),
      (l.getInstagramUserIDForInstagramActorID = L),
      (l.getLoadedAccountV2OrInstagramUserID = E),
      (l.getInstagramUserIDForRebuiltAdgroup = k),
      (l.hasOtherAccountOnRoot = I),
      (l.isSameInstagramAccountForTestimonial = T),
      (l.hasInstagramAccount = x),
      (l.getInstagramAccountIdentity = $),
      (l.isSameInstagramAccount = N),
      (l.getInstagramAccountOwner = M),
      (l.getCreativeInstagramAccount = w),
      (l.resolveInstagramUserID = A),
      (l.getUniformInstagramAccount = F),
      (l.getIGIDPairForV2Field = O),
      (l.getLoadedInstagramAccountRecord = B),
      (l.getInstagramActorIdOrUserId = W));
  },
  98,
);
