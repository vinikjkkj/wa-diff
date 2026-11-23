__d(
  "MAIBABoostCanvasDraftRegistry",
  [
    "CurrentUser",
    "FBLogger",
    "MAIBAWorkspaceCanvasReopenRegistry",
    "WebStorage",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 20,
      u = 10080 * 60 * 1e3,
      c = "maiba_boost_canvas_drafts",
      d = new Map(),
      m = null,
      p = null,
      _ = new Set();
    function f(e) {
      return c + ":" + e;
    }
    function g(e) {
      return Date.now() - e.time < u;
    }
    function h(e) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var t = e.adAccountID,
        n = e.conversationID,
        r = e.mediaFBID,
        o = e.time,
        a = e.workspaceID;
      return typeof n != "string" ||
        typeof r != "string" ||
        typeof o != "number" ||
        typeof a != "string"
        ? null
        : {
            draft: {
              adAccountID: typeof t == "string" ? t : null,
              conversationID: n,
              mediaFBID: r,
              time: o,
            },
            workspaceID: a,
          };
    }
    function y() {
      var t = r("CurrentUser").getID();
      if (m !== t) {
        p !== t && (d.clear(), (_ = new Set()), (p = t));
        var n;
        try {
          var o;
          n =
            (o = (e || (e = r("WebStorage"))).getLocalStorageForRead()) == null
              ? void 0
              : o.getItem(f(t));
        } catch (e) {
          ((m = null),
            r("FBLogger")("maiba")
              .catching(r("getErrorSafe")(e))
              .warn("Failed to read stored boost canvas drafts"));
          return;
        }
        if (((m = t), n == null)) {
          _ = new Set(d.keys());
          return;
        }
        try {
          var a = JSON.parse(n);
          if (!Array.isArray(a)) return;
          var i = Array.from(d.entries());
          if (i.length > 0) {
            d.clear();
            var l = function () {
              var e = h(s);
              e != null &&
                g(e.draft) &&
                !i.some(function (t) {
                  var n = t[0];
                  return n === e.workspaceID;
                }) &&
                d.set(e.workspaceID, e.draft);
            };
            for (var s of a) l();
            for (var u of i) {
              var c = u[0],
                y = u[1];
              d.set(c, y);
            }
            return;
          }
          for (var C of a) {
            var b = h(C);
            b != null && g(b.draft) && d.set(b.workspaceID, b.draft);
          }
        } catch (e) {
          r("FBLogger")("maiba")
            .catching(r("getErrorSafe")(e))
            .warn("Failed to read stored boost canvas drafts");
        }
        _ = new Set(d.keys());
      }
    }
    function C() {
      var t = m;
      if (t != null)
        try {
          var n = (e || (e = r("WebStorage"))).getLocalStorage();
          if (n == null) return;
          var o = new Map();
          try {
            var a,
              i = JSON.parse((a = n.getItem(f(t))) != null ? a : "[]");
            if (Array.isArray(i))
              for (var l of i) {
                var u = h(l);
                u != null &&
                  g(u.draft) &&
                  !d.has(u.workspaceID) &&
                  !_.has(u.workspaceID) &&
                  o.set(u.workspaceID, u.draft);
              }
          } catch (e) {
            r("FBLogger")("maiba")
              .catching(r("getErrorSafe")(e))
              .warn("Failed to parse stored boost canvas drafts before save");
          }
          for (var c of d) {
            var p = c[0],
              y = c[1];
            o.set(p, y);
          }
          var C = Array.from(o).sort(function (e, t) {
            return e[1].time - t[1].time;
          });
          o.clear();
          for (var b of C) {
            var v = b[0],
              S = b[1];
            o.set(v, S);
          }
          for (; o.size > s; ) {
            var R = o.keys().next().value;
            if (R == null) break;
            o.delete(R);
          }
          d.clear();
          for (var L of o) {
            var E = L[0],
              k = L[1];
            d.set(E, k);
          }
          ((_ = new Set(o.keys())),
            e.setItemGuarded(
              n,
              f(t),
              JSON.stringify(
                Array.from(o, function (e) {
                  var t = e[0],
                    n = e[1];
                  return babelHelpers.extends({}, n, { workspaceID: t });
                }),
              ),
            ));
        } catch (e) {
          r("FBLogger")("maiba")
            .catching(r("getErrorSafe")(e))
            .warn("Failed to save boost canvas drafts");
        }
    }
    function b(e) {
      var t = e.adAccountID,
        n = e.conversationID,
        r = e.isPublished,
        o = e.mediaFBID,
        a = e.workspaceID;
      if (
        (y(),
        d.delete(a),
        !r &&
          (d.set(a, {
            adAccountID: t != null ? t : null,
            conversationID: n,
            mediaFBID: o,
            time: Date.now(),
          }),
          d.size > s))
      ) {
        var i = d.keys().next().value;
        i != null && d.delete(i);
      }
      C();
    }
    function v(e) {
      y();
      var t = Array.from(d.entries()).reverse();
      for (var n of t) {
        var r = n[0],
          o = n[1];
        if (o.mediaFBID === e && g(o))
          return {
            adAccountID: o.adAccountID,
            conversationID: o.conversationID,
            workspaceID: r,
          };
      }
      return null;
    }
    function S(e) {
      if (e == null || e === "") return !1;
      y();
      for (var t of d.values()) if (t.conversationID === e && g(t)) return !0;
      return !1;
    }
    function R(e) {
      (y(), d.delete(e) && C());
    }
    function L(e) {
      y();
      var t = !1;
      for (var n of d) {
        var r = n[0],
          o = n[1];
        o.conversationID === e && (d.delete(r), (t = !0));
      }
      t && C();
    }
    function E(e) {
      y();
      var t = Array.from(d.entries()).reverse();
      for (var n of t) {
        var r = n[0],
          a = n[1];
        if (
          a.mediaFBID === e &&
          g(a) &&
          o("MAIBAWorkspaceCanvasReopenRegistry").reopenMAIBAWorkspaceCanvas({
            conversationID: a.conversationID,
            workspaceID: r,
            workspaceType: "ad_draft_editor",
          })
        )
          return !0;
      }
      return !1;
    }
    function k() {
      (d.clear(), (_ = new Set()), (m = null), (p = null));
    }
    ((l.recordMAIBABoostCanvasDraft = b),
      (l.getMAIBABoostCanvasDraft = v),
      (l.hasMAIBABoostCanvasDraftForConversation = S),
      (l.forgetMAIBABoostCanvasDraft = R),
      (l.forgetMAIBABoostCanvasDraftsForConversation = L),
      (l.reopenMAIBABoostCanvasDraft = E),
      (l.resetMAIBABoostCanvasDraftRegistryForTest = k));
  },
  98,
);
