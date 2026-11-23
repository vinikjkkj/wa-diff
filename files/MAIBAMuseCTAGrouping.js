__d(
  "MAIBAMuseCTAGrouping",
  ["MAIBAGKUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "EDIT_IN_MUSE",
      s = new Set(["Inline", "ExternalUrl", "XFBMathObject", "XFBAdObject"]),
      u = new Set([
        "PARAGRAPH",
        "UNSTYLED",
        "ORDERED_LIST_ITEM",
        "UNORDERED_LIST_ITEM",
        "BLOCKQUOTE",
      ]);
    function c(t) {
      return (
        (t == null ? void 0 : t.__typename) === "XFBNonOSCTAObject" &&
        t.action != null &&
        String(t.action) === e
      );
    }
    function d(e) {
      if (e == null) return !1;
      var t = e.block_type;
      if (t != null && !u.has(t)) return !1;
      var n = !1;
      for (var r of (o = e.entity_ranges) != null ? o : []) {
        var o;
        if (c(r == null ? void 0 : r.entity)) {
          n = !0;
          break;
        }
      }
      for (var a of (i = e.entity_ranges) != null ? i : []) {
        var i,
          l = a == null ? void 0 : a.entity;
        if (
          l != null &&
          !c(l) &&
          !(n && l.__typename === "XFBNonOSCTAObject") &&
          (l.__typename == null || !s.has(l.__typename))
        )
          return !1;
      }
      return !0;
    }
    function m(e) {
      var t;
      return ((t = e.entity_ranges) != null ? t : []).some(function (e) {
        var t;
        return (
          (e == null || (t = e.entity) == null ? void 0 : t.__typename) ===
          "XFBNonOSCTAObject"
        );
      });
    }
    function p(e, t) {
      return Array.from(e).slice(0, Math.max(0, t)).join("");
    }
    function _(e) {
      var t,
        n = (t = e.text) != null ? t : "",
        r = null;
      for (var o of (a = e.entity_ranges) != null ? a : []) {
        var a,
          i,
          l = o == null ? void 0 : o.offset;
        (o == null || (i = o.entity) == null ? void 0 : i.__typename) ===
          "XFBNonOSCTAObject" &&
          typeof l == "number" &&
          (r = r == null ? l : Math.min(r, l));
      }
      if (r == null) return null;
      var s = p(n, r)
        .replace(/\u200b/g, "")
        .trim();
      return s === "" ? null : s;
    }
    function f(e, t) {
      for (var n = t - 1; n >= 0; n--) {
        var r = e[n];
        if (r == null || !d(r)) return null;
        if (!(m(r) || r.text == null)) {
          var o = r.text.replace(/\u200b/g, "").trim();
          if (o !== "") return { blockIndex: n, text: o };
        }
      }
      return null;
    }
    function g(t) {
      if (!o("MAIBAGKUtils").isMAIBAMuseCTAEnabled())
        return { guidanceText: new Map(), hiddenMuseCTAs: new Set() };
      var n = new Map(),
        r = new Set(),
        a = new Set();
      return (
        t.forEach(function (o, i) {
          if (o != null)
            for (var l of (s = o.entity_ranges) != null ? s : []) {
              var s,
                u = l == null ? void 0 : l.entity;
              if (
                (u == null ? void 0 : u.__typename) === "XFBNonOSCTAObject" &&
                u.action != null &&
                String(u.action) === e
              ) {
                var c = _(o),
                  d = null,
                  m = null;
                if (c != null) ((d = c), (m = "inline:" + i));
                else {
                  var p = f(t, i);
                  p != null && ((d = p.text), (m = "block:" + p.blockIndex));
                }
                if (d == null || m == null) continue;
                if (a.has(m)) {
                  r.add(u);
                  continue;
                }
                (a.add(m), n.set(u, d));
              }
            }
        }),
        { guidanceText: n, hiddenMuseCTAs: r }
      );
    }
    ((l.MUSE_CTA_ACTION = e), (l.groupMuseCTAs = g));
  },
  98,
);
