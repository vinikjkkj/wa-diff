__d(
  "MAIBAPreviewPublishCreativeFormatter",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "creative",
      l = "generative_asset_spec",
      s = "media_sourcing_spec",
      u = "creative_asset_groups_spec",
      c = "asset_feed_spec",
      d = "object_story_spec",
      m = new Set([c, e, u, l, s, d]),
      p = new Set([e, u]),
      _ = "ADGROUP";
    function f(e) {
      return m.has(e);
    }
    function g(e) {
      return p.has(e);
    }
    var h = new Set([
        "asset_feed_spec.images.hash",
        "creative_asset_groups_spec.groups.images.hash",
        "creative_asset_groups_spec.images.generated",
        "creative_asset_groups_spec.images.user_input",
        "generative_asset_spec.images.variations.hash",
        "media_sourcing_spec.images.hash",
        "object_story_spec.link_data.child_attachments.image_hash",
        "object_story_spec.link_data.image_hash",
      ]),
      y = new Set([
        "asset_feed_spec.bodies",
        "asset_feed_spec.bodies.text",
        "asset_feed_spec.titles",
        "asset_feed_spec.titles.text",
        "creative_asset_groups_spec.groups.texts.text",
        "creative_asset_groups_spec.groups.titles.text",
        "object_story_spec.link_data.message",
        "object_story_spec.link_data.name",
      ]),
      C = new Set([
        "creative_asset_groups_spec.groups.images.source",
        "media_sourcing_spec.images.source",
      ]),
      b = new Set([
        "creative_asset_groups_spec.groups.texts.source",
        "creative_asset_groups_spec.groups.titles.source",
      ]),
      v = new Set(["creative_asset_groups_spec.origins"]),
      S = new Set([
        "creative_asset_groups_spec.groups.group_uuid",
        "creative_asset_groups_spec.groups.images.url",
        "generative_asset_spec.images.variations.permalink_url",
        "media_sourcing_spec.images.original_image_hash",
        "media_sourcing_spec.images.url",
      ]),
      R = new Set([
        "generative_asset_spec.images.enroll_status",
        "generative_asset_spec.images.variations.enroll_status",
        "media_sourcing_spec.images.opt_in_status",
      ]),
      L = new Set(["OPT_IN", "OPT_OUT", "opt_in", "opt_out"]),
      E = new Set(["gen_ai", "user_input"]),
      k = new Set([
        "advertiser_uploaded_variant",
        "animation",
        "catalog_products",
        "dco",
        "format_transformation",
        "gen_ai",
        "generated",
        "manual",
        "multi_media",
        "padding",
        "push_model",
        "recomposition",
        "related_media",
        "replace_media_text",
        "smart_crop",
        "uncrop",
        "user_input",
      ]);
    function I(t, n) {
      var r = t === e ? n : [t].concat(n);
      return r
        .filter(function (e) {
          return typeof e == "string";
        })
        .join(".");
    }
    function T(e, t) {
      return h.has(I(e, t));
    }
    function D(e, t) {
      return y.has(I(e, t));
    }
    function x(e, t, n) {
      var r = I(e, t);
      return C.has(r)
        ? typeof n == "string" && k.has(n)
        : v.has(r)
          ? typeof n == "string" && E.has(n)
          : S.has(r) && typeof n == "string" && n !== "";
    }
    function $(e, t, n) {
      var r = I(e, t);
      return b.has(r)
        ? typeof n == "string" && k.has(n)
        : r === "creative_asset_groups_spec.groups.texts.text_type"
          ? n === "primary_text" || n === "headline"
          : v.has(r) && typeof n == "string" && E.has(n);
    }
    function P(e, t, n) {
      return R.has(I(e, t)) && typeof n == "string" && L.has(n);
    }
    function N(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function M(e) {
      return typeof e == "string" ? e : "";
    }
    function w(e) {
      if (typeof e != "string") return N(e);
      if (e === "") return null;
      try {
        return N(JSON.parse(e));
      } catch (e) {
        return null;
      }
    }
    function A(e) {
      var t = w(e);
      if (t == null) return !1;
      var n = t.origins;
      if (Array.isArray(n) && n.includes("gen_ai")) return !0;
      var r = t.groups;
      if (!Array.isArray(r)) return !1;
      for (var o of r) {
        var a = N(o);
        for (var i of ["images", "texts"]) {
          var l = a == null ? void 0 : a[i];
          if (
            Array.isArray(l) &&
            l.some(function (e) {
              var t;
              return ((t = N(e)) == null ? void 0 : t.source) === "generated";
            })
          )
            return !0;
        }
      }
      return !1;
    }
    function F(e) {
      return (
        e === "gen_ai" ||
        e === "generated" ||
        (typeof e == "string" && e.startsWith("TEXT_GEN_"))
      );
    }
    function O(e) {
      var t = w(e);
      if (t == null) return !1;
      for (var n of ["bodies", "descriptions", "images", "titles", "videos"]) {
        var r = t[n];
        if (
          Array.isArray(r) &&
          r.some(function (e) {
            var t = N(e);
            return (
              F(t == null ? void 0 : t.source) ||
              F(t == null ? void 0 : t.asset_source)
            );
          })
        )
          return !0;
      }
      return !1;
    }
    function B(e) {
      var t = w(e);
      return t == null
        ? !1
        : Object.values(t).some(function (e) {
            var t = N(e);
            if (t == null) return !1;
            for (var n of [
              "banner_color",
              "logos",
              "primary_colors",
              "secondary_colors",
              "texts",
              "variations",
            ]) {
              var r = t[n];
              if (Array.isArray(r) && r.length > 0) return !0;
            }
            return !1;
          });
    }
    function W(e) {
      var t = w(e);
      return t != null && (A(t[u]) || B(t[l]) || O(t[s]) || O(t[c]));
    }
    function q(e) {
      var t,
        n,
        r =
          (t = N((n = N(e)) == null ? void 0 : n.spec_diff)) == null
            ? void 0
            : t.fragments;
      return Array.isArray(r)
        ? r.some(function (e) {
            var t,
              n = (t = N(e)) == null ? void 0 : t.changes;
            return (
              Array.isArray(n) &&
              n.some(function (e) {
                var t,
                  n = (t = N(e)) == null ? void 0 : t.field;
                return typeof n == "string" && m.has(n);
              })
            );
          })
        : !1;
    }
    function U(t) {
      var n,
        r,
        o =
          (n = N((r = N(t)) == null ? void 0 : r.spec_diff)) == null
            ? void 0
            : n.fragments;
      if (!Array.isArray(o)) return !1;
      for (var a of o) {
        var i,
          d = (i = N(a)) == null ? void 0 : i.changes;
        if (Array.isArray(d))
          for (var m of d) {
            var p = N(m),
              _ = p == null ? void 0 : p.field;
            if (
              typeof _ == "string" &&
              ((_ === u && A(p == null ? void 0 : p.new)) ||
                (_ === l && B(p == null ? void 0 : p.new)) ||
                (_ === s && O(p == null ? void 0 : p.new)) ||
                (_ === c && O(p == null ? void 0 : p.new)) ||
                (_ === e && W(p == null ? void 0 : p.new)))
            )
              return !0;
          }
      }
      return !1;
    }
    function V(e, t) {
      typeof e == "string" && e !== "" && t.push(e);
    }
    function H(e) {
      var t,
        n,
        r = [],
        o = N((t = N(e.object_story_spec)) == null ? void 0 : t.link_data);
      if (o != null) {
        V(o.image_hash, r);
        var a = o.child_attachments;
        if (Array.isArray(a))
          for (var i of a) {
            var l;
            V((l = N(i)) == null ? void 0 : l.image_hash, r);
          }
      }
      var s = (n = N(e.asset_feed_spec)) == null ? void 0 : n.images;
      if (Array.isArray(s))
        for (var u of s) {
          var c;
          V((c = N(u)) == null ? void 0 : c.hash, r);
        }
      return r;
    }
    function G(e) {
      var t,
        n,
        r =
          (t = N((n = N(e[l])) == null ? void 0 : n.images)) == null
            ? void 0
            : t.variations;
      if (!Array.isArray(r)) return [];
      var o = [];
      for (var a of r) {
        var i;
        V((i = N(a)) == null ? void 0 : i.hash, o);
      }
      return o;
    }
    function z(e) {
      var t = [],
        n = e.groups;
      if (Array.isArray(n))
        for (var r of n) {
          var o,
            a = (o = N(r)) == null ? void 0 : o.images;
          if (Array.isArray(a))
            for (var i of a) {
              var l;
              V((l = N(i)) == null ? void 0 : l.hash, t);
            }
        }
      var s = e.images;
      if (Array.isArray(s))
        for (var u of s) {
          var c = N(u);
          V(c == null ? void 0 : c.user_input, t);
          var d = c == null ? void 0 : c.generated;
          if (Array.isArray(d)) for (var m of d) V(m, t);
        }
      return t;
    }
    function j(e) {
      if (e == null || !Array.isArray(e.images) || e.images.length === 0)
        return null;
      var t = [];
      for (var n of e.images) {
        var r,
          o = (r = N(n)) == null ? void 0 : r.hash;
        if (typeof o != "string" || o === "") return null;
        t.push(o);
      }
      return t;
    }
    function K(t, n) {
      var r = w(t);
      return r == null ? null : n === s ? j(r) : n === e ? j(N(r[s])) : null;
    }
    function Q(t, n) {
      var r = w(t);
      if (r == null) return null;
      var o = n === u ? r : n === e ? N(r[u]) : null;
      if (o == null) return null;
      var a = z(o);
      return a.length === 0 ? null : a;
    }
    function X(t, n, r, o) {
      var a;
      (r === void 0 && (r = !1), o === void 0 && (o = !1));
      var i = w(t);
      if (i == null) return [];
      var l = K(t, n);
      if (l != null) return o ? l : Pe(l);
      var s = Q(t, n);
      if (s != null) return o ? s : Pe(s);
      var u = n === e ? i : ((a = {}), (a[n] = i), a),
        c = [].concat(H(u));
      return (r || c.push.apply(c, G(u)), o ? c : Pe(c));
    }
    function Y(e, t) {
      if (typeof e == "string") {
        var n = e.trim();
        n !== "" && t.push(n);
      }
    }
    function J(e, t) {
      if (typeof e == "string") Y(e, t);
      else {
        var n;
        Y((n = N(e)) == null ? void 0 : n.text, t);
      }
    }
    var Z = [
        {
          field: "primary_text",
          isList: !0,
          path: ["media_sourcing_spec", "bodies"],
        },
        {
          field: "primary_text",
          isList: !0,
          path: ["asset_feed_spec", "bodies"],
        },
        {
          field: "primary_text",
          isList: !1,
          path: ["object_story_spec", "link_data", "message"],
        },
        {
          field: "primary_text",
          isList: !1,
          path: ["object_story_spec", "video_data", "message"],
        },
        { field: "primary_text", isList: !1, path: ["body"] },
        {
          field: "headline",
          isList: !0,
          path: ["media_sourcing_spec", "titles"],
        },
        { field: "headline", isList: !0, path: ["asset_feed_spec", "titles"] },
        {
          field: "headline",
          isList: !1,
          path: ["object_story_spec", "link_data", "name"],
        },
        {
          field: "headline",
          isList: !1,
          path: ["object_story_spec", "video_data", "title"],
        },
        {
          field: "description",
          isList: !0,
          path: ["media_sourcing_spec", "descriptions"],
        },
        {
          field: "description",
          isList: !0,
          path: ["asset_feed_spec", "descriptions"],
        },
        {
          field: "description",
          isList: !1,
          path: ["object_story_spec", "link_data", "description"],
        },
        {
          field: "description",
          isList: !1,
          path: ["object_story_spec", "video_data", "link_description"],
        },
      ],
      ee = [].concat(
        Z.filter(function (e) {
          return e.field !== "description" && !e.isList;
        }),
        Z.filter(function (e) {
          return e.field !== "description" && e.isList;
        }),
      );
    function te(e, t) {
      var n = e;
      for (var r of t) {
        var o;
        n = (o = N(n)) == null ? void 0 : o[r];
      }
      return n;
    }
    function ne(e, t) {
      var n = [],
        r = te(e, t.path);
      if (!t.isList) Y(r, n);
      else if (Array.isArray(r)) for (var o of r) J(o, n);
      return n;
    }
    function re(e, t) {
      var n;
      return (n = Z.find(function (n) {
        return n.field === t && ne(e, n).length > 0;
      })) != null
        ? n
        : null;
    }
    function oe(e, t) {
      var n = re(e, t);
      return n == null ? [] : ne(e, n);
    }
    function ae(e) {
      var t,
        n = re(e, "headline");
      if (n == null || !n.isList) return !1;
      var r = te(e, n.path),
        o = Array.isArray(r) ? r[0] : null,
        a = typeof o == "string" ? o : (t = N(o)) == null ? void 0 : t.text;
      return typeof a == "string" && a.trim() === "";
    }
    function ie(e, t) {
      var n,
        r,
        o = w(e);
      if (o == null) return [];
      var a = t === u ? ((n = {}), (n[u] = o), n) : o,
        i = [].concat(oe(a, "primary_text")),
        l = [].concat(ae(a) ? [""] : [], oe(a, "headline")),
        s = (r = N(a[u])) == null ? void 0 : r.groups;
      if (i.length === 0 && l.length === 0 && Array.isArray(s))
        for (var c of s) {
          var d,
            m = (d = N(c)) == null ? void 0 : d.texts;
          if (Array.isArray(m))
            for (var p of m) {
              var _ = N(p);
              (_ == null ? void 0 : _.text_type) === "primary_text"
                ? Y(_.text, i)
                : (_ == null ? void 0 : _.text_type) === "headline" &&
                  Y(_.text, l);
            }
        }
      var f = [],
        g = Pe(i),
        h = Pe(l);
      return (
        g.length > 0 && f.push({ role: "primary_text", texts: g }),
        h.length > 0 && f.push({ role: "headline", texts: h }),
        f
      );
    }
    function le(e) {
      var t,
        n = (t = N(e[u])) == null ? void 0 : t.groups;
      if (!Array.isArray(n)) return [];
      var r = [];
      for (var o of n) {
        var a,
          i = (a = N(o)) == null ? void 0 : a.texts;
        if (Array.isArray(i))
          for (var l of i) {
            var s;
            Y((s = N(l)) == null ? void 0 : s.text, r);
          }
      }
      return r;
    }
    function se(e, t, n) {
      var r;
      n === void 0 && (n = !1);
      var o = w(e);
      if (o == null) return [];
      var a = t === u ? ((r = {}), (r[u] = o), r) : o,
        i = [].concat(
          ee.flatMap(function (e) {
            return ne(a, e);
          }),
          le(a),
        );
      return n ? i : Pe(i);
    }
    var ue = new Set([c, u, s, d]),
      ce = new Set(
        Z.flatMap(function (e) {
          var t = e.path.join(".");
          return e.isList ? [t, t + ".text"] : [t];
        }),
      ),
      de = "creative_asset_groups_spec.groups.texts",
      me = new Set([
        "action_type",
        "asset_source",
        "language",
        "target_audience",
        "uuid",
      ]),
      pe = new Map([
        [
          "object_story_spec.link_data.picture",
          ["object_story_spec", "link_data", "image_hash"],
        ],
        [
          "object_story_spec.video_data.image_url",
          ["object_story_spec", "video_data", "image_hash"],
        ],
      ]);
    function _e(t, n) {
      var r = {},
        o = {};
      for (var a of t) {
        var i = N(a),
          l = i == null ? void 0 : i.field;
        if (!(i == null || typeof l != "string")) {
          var s = w(i[n]);
          s != null && (l === e ? (r = s) : ue.has(l) && (o[l] = s));
        }
      }
      return babelHelpers.extends({}, r, o);
    }
    function fe(e, t) {
      return t.every(function (t, n) {
        return e[n] === t;
      });
    }
    function ge(e, t) {
      return e.length === t.length && fe(e, t);
    }
    function he(e, t, n) {
      var r = ne(t, e),
        o = ne(n, e);
      if (ge(r, o)) return !0;
      var a = e.field === "description";
      if (!e.isList) return !a && r.length === 0;
      if (r.length > 0) return !a && fe(o, r);
      var i = oe(t, e.field);
      return a ? i.length > 0 && ge(o, i) : fe(o, i);
    }
    function ye(t, n, r) {
      var o = t === e ? n.path : [t].concat(n.path),
        a = o[0],
        i = o[1],
        l = o[2],
        s = o[3],
        u = o.length === 4 && typeof s == "string" && me.has(s),
        d =
          a === c &&
          s === "adlabels" &&
          te(r, [c, "optimization_type"]) === "PLACEMENT";
      if (n.hasBefore || typeof l != "number" || !(u || d)) return !1;
      var m = Z.find(function (e) {
        return e.isList && e.path[0] === a && e.path[1] === i;
      });
      if (m == null) return !1;
      var p = te(r, m.path);
      return l >= (Array.isArray(p) ? p.length : 0);
    }
    function Ce(e) {
      var t = _e(e, "old"),
        n = _e(e, "new");
      if (
        !Z.every(function (e) {
          return he(e, t, n);
        })
      )
        return null;
      var r = new Set(
          Z.flatMap(function (e) {
            return ne(n, e);
          }),
        ),
        o =
          r.size === 0 ||
          [].concat(le(t), le(n)).every(function (e) {
            return r.has(e);
          });
      return function (e, r) {
        var a = I(e, r.path);
        if (ce.has(a) || ye(e, r, t)) return !0;
        if (a === de || a.startsWith(de + ".")) return o;
        if (a === "asset_feed_spec.optimization_type")
          return (
            r.hasAfter &&
            r.after === "DEGREES_OF_FREEDOM" &&
            (!r.hasBefore || r.before == null || r.before === "")
          );
        var i = pe.get(a);
        if (i == null) return !1;
        var l = te(t, i);
        return (
          (!r.hasAfter || r.after == null) &&
          typeof l == "string" &&
          l !== "" &&
          te(n, i) === l
        );
      };
    }
    function be(e) {
      var t = new Map(),
        n = [];
      for (var r of e) {
        var o = new Map();
        for (var a of r) {
          var i,
            l,
            s = ((i = o.get(a)) != null ? i : 0) + 1;
          (o.set(a, s), s > ((l = t.get(a)) != null ? l : 0) && n.push(a));
        }
        for (var u of o) {
          var c,
            d = u[0],
            m = u[1];
          t.set(d, Math.max(m, (c = t.get(d)) != null ? c : 0));
        }
      }
      return n;
    }
    function ve(e, t, n) {
      var r, o;
      if (e.object_level !== _) return null;
      var a = e.changes;
      if (!Array.isArray(a)) return null;
      var i = [],
        l = [],
        s = null,
        u = null,
        c = null,
        d = null;
      for (var m of a) {
        var p = N(m),
          g = p == null ? void 0 : p.field;
        if (!(p == null || typeof g != "string" || !f(g))) {
          var h = K(p.old, g),
            y = K(p.new, g);
          (s == null && h != null && (s = h),
            u == null && y != null && (u = y));
          var C = Q(p.old, g),
            b = Q(p.new, g);
          (c == null && C != null && (c = C),
            d == null && b != null && (d = b));
          var v = X(p.old, g, !1, !0),
            S = X(p.new, g, !1, !0);
          (v.length > 0 && i.push(v), S.length > 0 && l.push(S));
        }
      }
      var R = (r = s != null ? s : c) != null ? r : be(i),
        L = (o = u != null ? u : d) != null ? o : be(l),
        E = n ? R : Pe(R),
        k = n ? L : Pe(L);
      return (E.length === 0 && k.length === 0) ||
        (!t && (k.length === 0 || !$e(E, k)))
        ? null
        : {
            afterHashes: k,
            beforeHashes: E,
            fragmentId: M(e.fragment_id),
            name: M(e.name),
            objectId: M(e.object_id),
          };
    }
    function Se(e, t, n) {
      var r,
        o =
          (r = N(e == null ? void 0 : e.spec_diff)) == null
            ? void 0
            : r.fragments;
      if (!Array.isArray(o)) return [];
      var a = [];
      for (var i of o) {
        var l = N(i);
        if (l != null) {
          var s = ve(l, t, n);
          s != null && a.push(s);
        }
      }
      return a;
    }
    function Re(e) {
      return Se(e, !1, !1);
    }
    function Le(e) {
      return Se(e, !0, !0);
    }
    function Ee(e) {
      var t;
      return (t = Re(e)[0]) != null ? t : null;
    }
    function ke(e, t) {
      var n,
        r =
          (n = N(e == null ? void 0 : e.spec_diff)) == null
            ? void 0
            : n.fragments;
      if (!Array.isArray(r)) return null;
      for (var o of r) {
        var a = N(o);
        if (!(a == null || a.object_level !== _ || M(a.object_id) !== t)) {
          var i = a.changes;
          if (Array.isArray(i)) {
            var l = [],
              s = [];
            for (var u of i) {
              var c = N(u),
                d = c == null ? void 0 : c.field;
              c == null ||
                typeof d != "string" ||
                !f(d) ||
                (l.push.apply(l, X(c.old, d)), s.push.apply(s, X(c.new, d)));
            }
            var m = Pe(l),
              p = Pe(s);
            if (p.length > 0)
              return {
                afterHashes: p,
                beforeHashes: m,
                fragmentId: M(a.fragment_id),
                name: M(a.name),
                objectId: t,
              };
          }
        }
      }
      return null;
    }
    function Ie(e) {
      var t = [],
        n = [];
      for (var r of e)
        r.role === "primary_text"
          ? t.push.apply(t, r.texts)
          : n.push.apply(n, r.texts);
      var o = [],
        a = Pe(t),
        i = Pe(n);
      return (
        a.length > 0 && o.push({ role: "primary_text", texts: a }),
        i.length > 0 && o.push({ role: "headline", texts: i }),
        o
      );
    }
    function Te(e) {
      var t,
        n =
          (t = N(e == null ? void 0 : e.spec_diff)) == null
            ? void 0
            : t.fragments;
      if (!Array.isArray(n)) return [];
      var r = [];
      for (var o of n) {
        var a = N(o);
        if (!(a == null || a.object_level !== _)) {
          var i = a.changes;
          if (Array.isArray(i)) {
            var l = [],
              s = [],
              c = [],
              d = [],
              m = [],
              p = [];
            for (var f of i) {
              var h,
                y,
                C = N(f),
                b = C == null ? void 0 : C.field;
              if (!(C == null || typeof b != "string") && g(b)) {
                (l.push.apply(l, se(C.old, b)), s.push.apply(s, se(C.new, b)));
                var v = b === u;
                ((h = v ? m : c).push.apply(h, ie(C.old, b)),
                  (y = v ? p : d).push.apply(y, ie(C.new, b)));
              }
            }
            var S = Pe(l),
              R = Pe(s),
              L = Ie(d.length > 0 ? d : p),
              E = Ie(c.length > 0 ? c : m);
            R.length > 0 &&
              ($e(S, R) || xe(E, L)) &&
              r.push({
                afterTextGroups: L,
                afterTexts: R,
                beforeTextGroups: E,
                beforeTexts: S,
                fragmentId: M(a.fragment_id),
                name: M(a.name),
                objectId: M(a.object_id),
              });
          }
        }
      }
      return r;
    }
    function De(e) {
      var t;
      return (t = Te(e)[0]) != null ? t : null;
    }
    function xe(e, t) {
      var n = function (t, n) {
          var e, r;
          return (e =
            (r = t.find(function (e) {
              return e.role === n;
            })) == null
              ? void 0
              : r.texts) != null
            ? e
            : [];
        },
        r = ["primary_text", "headline"];
      return r.some(function (r) {
        return $e(n(e, r), n(t, r));
      });
    }
    function $e(e, t) {
      var n = new Set(e),
        r = new Set(t);
      return (
        e.some(function (e) {
          return !r.has(e);
        }) ||
        t.some(function (e) {
          return !n.has(e);
        })
      );
    }
    function Pe(e) {
      var t = new Set(),
        n = [];
      for (var r of e) t.has(r) || (t.add(r), n.push(r));
      return n;
    }
    function Ne(e) {
      var t,
        n =
          (t = N(e == null ? void 0 : e.spec_diff)) == null
            ? void 0
            : t.fragments;
      if (!Array.isArray(n)) return [];
      var r = [];
      for (var o of n) {
        var a = N(o);
        if (
          !(
            a == null ||
            a.action !== "ADD" ||
            a.object_level !== _ ||
            M(a.source_object_id) === ""
          )
        ) {
          var i = [],
            l = [],
            s = a.changes;
          if (Array.isArray(s))
            for (var u of s) {
              var c = N(u),
                d = c == null ? void 0 : c.field;
              c == null ||
                typeof d != "string" ||
                (f(d) &&
                  (i.push.apply(i, X(c.new, d, !0)),
                  l.push.apply(l, X(c.old, d))));
            }
          r.push({
            fragmentId: M(a.fragment_id),
            hashes: Pe(i),
            name: M(a.name),
            objectId: M(a.object_id),
            parentName: M(a.parent_name),
            parentObjectId: M(a.parent_object_id),
            sourceHashes: Pe(l),
            sourceName: M(a.source_name),
            sourceObjectId: M(a.source_object_id),
          });
        }
      }
      return r;
    }
    function Me(e) {
      var t,
        n =
          (t = N(e == null ? void 0 : e.spec_diff)) == null
            ? void 0
            : t.fragments;
      if (!Array.isArray(n)) return [];
      var r = [];
      for (var o of n) {
        var a,
          i = (a = N(o)) == null ? void 0 : a.changes;
        if (Array.isArray(i))
          for (var l of i) {
            var s = N(l),
              u = s == null ? void 0 : s.field;
            s == null ||
              typeof u != "string" ||
              (f(u) &&
                (r.push.apply(r, X(s.old, u)), r.push.apply(r, X(s.new, u))));
          }
      }
      return Pe(r);
    }
    ((i.isImageBearingField = f),
      (i.isTextBearingField = g),
      (i.isCreativeCardImageLeaf = T),
      (i.isCreativeCardTextLeaf = D),
      (i.isCreativeCardMetadataLeaf = x),
      (i.isCreativeCardTextMetadataLeaf = $),
      (i.isCreativeCardEnrollmentLeaf = P),
      (i.hasCreativeRootChanges = q),
      (i.hasCreativeGenProvenance = U),
      (i.extractCreativeImageHashes = X),
      (i.extractCreativeTextGroups = ie),
      (i.extractCreativeTexts = se),
      (i.appendOnlyCopyLeafFilter = Ce),
      (i.collectCreativeImageFragments = Re),
      (i.collectCreativeImageCoverageFragments = Le),
      (i.collectCreativeImageFragment = Ee),
      (i.collectCreativeImageContext = ke),
      (i.collectCreativeTextFragments = Te),
      (i.collectCreativeTextFragment = De),
      (i.collectAddedAdFragments = Ne),
      (i.collectAllCreativeImageHashes = Me));
  },
  66,
);
