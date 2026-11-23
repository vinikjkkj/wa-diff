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
    function l(e, t, n) {
      var r = [],
        o = new Set(),
        a = t === "AYMTWhatsAppManagerGrowthCardChannel" ? 2 : 1;
      for (var i of e) {
        var l, u, c, d, m, p, _;
        if (!(i == null || typeof i != "object")) {
          var f =
              (l = i.client_side_rendering_spec) == null
                ? void 0
                : l.client_side_rendering_params,
            g = i.aymt_data,
            h = f == null ? void 0 : f.tip_title,
            y = f == null ? void 0 : f.tip_body,
            C = f == null ? void 0 : f.tip_image,
            b =
              (u = g == null ? void 0 : g.tip_instance_id) != null
                ? u
                : g == null
                  ? void 0
                  : g.tip_id;
          if (
            !(
              g == null ||
              typeof b != "string" ||
              b === "" ||
              o.has(b) ||
              !(h instanceof HTMLElement) ||
              !(y instanceof HTMLElement) ||
              !(C instanceof HTMLElement) ||
              !((c = h.textContent) != null && c.trim()) ||
              !((d = y.textContent) != null && d.trim())
            ) &&
            (o.add(b),
            r.push({
              aymtData: babelHelpers.extends({}, g, {
                name: (m = i.name) != null ? m : null,
              }),
              body: y,
              image: C,
              primaryAction: s(
                f == null || (p = f.actions) == null ? void 0 : p.primary,
                n,
              ),
              secondaryAction: s(
                f == null || (_ = f.actions) == null ? void 0 : _.secondary,
                n,
              ),
              title: h,
            }),
            r.length === a)
          )
            break;
        }
      }
      return r;
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
