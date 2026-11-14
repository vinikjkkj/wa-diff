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
      var r,
        o,
        a = n;
      if (!m(t) && !m(a)) return !1;
      var i = (r = e.creative) == null ? void 0 : r.instagram_actor_id,
        l = (o = e.creative) == null ? void 0 : o.instagram_user_id,
        s = p(i) && ((p(t) && i !== t) || (!m(t) && l !== a));
      return (m(l) && l !== a) || s;
    }
    function k(e, t) {
      var n, o;
      return (
        ((n = e.igidV1) != null ? n : null) ===
          ((o = t.igidV1) != null ? o : null) &&
        (!r("gkx")("9636") ||
          (e.lookupID === t.lookupID &&
            (e.lookupID != null || t.igidV1 == null)))
      );
    }
    function I(e) {
      var t = e.v1 == null || String(e.v1) === "" ? null : String(e.v1),
        n = h(_(e.v2));
      return { v1: t, v2: m(t) && n === t ? null : n };
    }
    function T(e, t) {
      return _(e) != null || _(t) != null;
    }
    function D(e, t) {
      var n = I(e),
        r = _(n.v1);
      if (r != null) return { namespace: "v1", id: r };
      var o = n.v2;
      if (o == null) return { namespace: "none" };
      var a = F(o, t);
      if (a.status === "loaded") {
        var i = _(a.record.id);
        if (i != null && i !== o) return { namespace: "v1", id: i };
        if (f(a.record.id))
          return { namespace: "v2", id: o, status: "confirmed_v2_only" };
      }
      return { namespace: "v2", id: o, status: "unavailable" };
    }
    function x(e, t, n, r) {
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
    function $(e, t, n) {
      if (t == null) return !1;
      var r = I(e),
        o = I(t);
      return x(r, D(r, n), o, D(o, n));
    }
    function P(e, t) {
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
    function N(e, t, n, r) {
      var o,
        a,
        i = P(t, r);
      if (i == null) return { v1: null, v2: null };
      var l = I({
          v1: e == null ? void 0 : e.instagram_actor_id,
          v2: e == null ? void 0 : e.instagram_user_id,
        }),
        s = I({
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
      return D(u, n).namespace !== "none"
        ? u
        : D(c, n).namespace !== "none"
          ? c
          : { v1: null, v2: null };
    }
    function M(e, t) {
      var n = I({ v1: e.v1, v2: t }).v2;
      return n != null ? n : _(e.v1) != null ? null : h(_(e.v2));
    }
    function w(e, t) {
      var n;
      if (e.length === 0) return null;
      var r = e.map(I),
        o = r.map(function (e) {
          return D(e, t);
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
          return !x(r[l], o[l], e, o[t]);
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
        : I({
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
    function A(e, t) {
      var n = _(e);
      if (n == null || t == null) return { v1: null, v2: null };
      var r = I({ v1: t.id, v2: t.id_v2 });
      return _(r.v1) === n || r.v2 === n ? r : { v1: null, v2: null };
    }
    function F(e, t) {
      var n = h(_(e));
      if (n == null) return { status: "missing" };
      var r = t(n);
      return r == null || r.loadState !== "LOADED"
        ? { status: "pending" }
        : _(r.id_v2) !== n
          ? { status: "missing" }
          : { status: "loaded", record: r };
    }
    function O(e, t) {
      return r("gkx")("15865")
        ? t != null && t !== ""
          ? t
          : (e != null && e !== "" && B(t), e)
        : e;
    }
    function B(t) {
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
      (l.hasOtherAccountOnRoot = E),
      (l.isSameInstagramAccountForTestimonial = k),
      (l.hasInstagramAccount = T),
      (l.getInstagramAccountIdentity = D),
      (l.isSameInstagramAccount = $),
      (l.getInstagramAccountOwner = P),
      (l.getCreativeInstagramAccount = N),
      (l.resolveInstagramUserID = M),
      (l.getUniformInstagramAccount = w),
      (l.getIGIDPairForV2Field = A),
      (l.getLoadedInstagramAccountRecord = F),
      (l.getInstagramActorIdOrUserId = O));
  },
  98,
);
