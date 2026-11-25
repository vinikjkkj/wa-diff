__d(
  "WhatsAppManagerGrowthCardsDispatcher",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.receiveTips = function (t, n) {
          this.$1(t, n, !1);
        }),
        (t.receiveError = function (t) {
          this.$1(t, [], !0);
        }),
        e
      );
    })();
    function l(e, t, n, r) {
      r === void 0 && (r = !0);
      var o = [],
        a = new Set(),
        i = t === "AYMTWhatsAppManagerGrowthCardChannel" ? 2 : 1;
      for (var l of e) {
        var u, c, d, m, p, _, f, g;
        if (!(l == null || typeof l != "object")) {
          var h =
              (u = l.client_side_rendering_spec) == null
                ? void 0
                : u.client_side_rendering_params,
            y = l.aymt_data,
            C = h == null ? void 0 : h.tip_title,
            b = h == null ? void 0 : h.tip_body,
            v = h == null ? void 0 : h.tip_image,
            S =
              (c = y == null ? void 0 : y.tip_instance_id) != null
                ? c
                : y == null
                  ? void 0
                  : y.tip_id;
          if (
            !(
              y == null ||
              typeof S != "string" ||
              S === "" ||
              a.has(S) ||
              !(C instanceof HTMLElement) ||
              !(b instanceof HTMLElement) ||
              !(v instanceof HTMLElement) ||
              !((d = C.textContent) != null && d.trim()) ||
              !((m = b.textContent) != null && m.trim())
            ) &&
            (a.add(S),
            o.push({
              aymtData: babelHelpers.extends({}, y, {
                name: (p = l.name) != null ? p : null,
              }),
              body: b,
              creativeProps:
                (_ = l.client_side_rendering_spec) == null
                  ? void 0
                  : _.client_side_react_props,
              image: v,
              primaryAction: s(
                h == null || (f = h.actions) == null ? void 0 : f.primary,
                n,
              ),
              secondaryAction: s(
                h == null || (g = h.actions) == null ? void 0 : g.secondary,
                n,
              ),
              title: C,
            }),
            r && o.length === i)
          )
            break;
        }
      }
      return o;
    }
    function s(e, t) {
      var n,
        r = e == null ? void 0 : e.tip_action_label,
        o =
          typeof (e == null ? void 0 : e.tip_link) == "string"
            ? e.tip_link
            : null,
        a =
          typeof (e == null ? void 0 : e.tip_js_action) == "function"
            ? e.tip_js_action
            : null;
      return e == null ||
        !(r instanceof Node) ||
        !((n = r.textContent) != null && n.trim()) ||
        (!(o != null && o.trim()) && a == null)
        ? null
        : {
            executeAsync:
              e.tip_is_async === !0 && t != null && o != null
                ? function (e) {
                    return t(o, e);
                  }
                : void 0,
            isAsync: e.tip_is_async === !0,
            jsAction: a,
            jsParams: Array.isArray(e.tip_js_params) ? e.tip_js_params : null,
            label: r,
            link: o,
            rel: typeof e.rel == "string" ? e.rel : null,
          };
    }
    ((i.WhatsAppManagerGrowthCardsDispatcher = e),
      (i.parseWhatsAppManagerGrowthTips = l));
  },
  66,
);
