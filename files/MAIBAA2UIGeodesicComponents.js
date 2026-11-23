__d(
  "MAIBAA2UIGeodesicComponents",
  [
    "CometImage.react",
    "GeoBasePressable.react",
    "GeoBaseText.react",
    "GeoButton.react",
    "GeoCard.react",
    "GeoCheckboxInput.react",
    "GeoDivider.react",
    "GeoFlexbox.react",
    "GeoGlimmer.react",
    "GeoHeading.react",
    "GeoSection.react",
    "GeoText.react",
    "GeoTextInput.react",
    "MAIBAA2UIRenderer.react",
    "MAIBAAdLibraryPreviewCard.react",
    "MAIBAAdLibraryPreviewCarousel.react",
    "MAIBADataVizUtil",
    "MAIBAL4AdAccountContext",
    "MAIBAMessageAdObjectRenderer.react",
    "MAIBAScorecardInlineText.react",
    "MAIBAScorecardIssueCard.react",
    "MAIBAV2DataVizAdapter.react",
    "react",
    "stylex",
    "useGeoTheme",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useContext,
      p = c.useState,
      _ = "scorecard-full-report";
    function f(e) {
      return e === "start"
        ? "start"
        : e === "center"
          ? "center"
          : e === "end"
            ? "end"
            : "stretch";
    }
    function g(e) {
      return e === "spaceBetween"
        ? "space-between"
        : e === "spaceAround" || e === "spaceEvenly"
          ? "space-around"
          : e === "center"
            ? "center"
            : e === "end"
              ? "end"
              : "start";
    }
    function h(e) {
      var t = e.node,
        n = e.renderContext,
        o = t.component.Text;
      if (o == null) return null;
      var a = n.resolveStringValue(o.text),
        i = o.usageHint;
      return i === "h1" || i === "h2" || i === "h3" || i === "h4"
        ? u.jsx(
            r("GeoHeading.react"),
            { level: i === "h1" ? 3 : 4, children: a },
            t.id,
          )
        : u.jsx(r("GeoText.react"), { children: a }, t.id);
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.node,
        n = e.renderContext,
        a = t.component.Button,
        l = m(o("MAIBAA2UIRenderer.react").A2UIFormDataContext),
        s = l.getFormData,
        c = d(
          function () {
            var e,
              t = a == null ? void 0 : a.action;
            if (!(t == null || n.onAction == null)) {
              var r = s(),
                o = Object.keys(r).map(function (e) {
                  return { key: e, value: { literalString: String(r[e]) } };
                }),
                i = babelHelpers.extends({}, t, {
                  context: [].concat((e = t.context) != null ? e : [], o),
                }),
                l = n.onAction;
              l != null && l(i);
            }
          },
          [a == null ? void 0 : a.action, s, n],
        );
      if (a == null) return null;
      var p = n.componentMap.get(a.child),
        _ = "";
      return (
        p != null &&
          p.component.Text != null &&
          (_ = n.resolveStringValue(p.component.Text.text)),
        _ === ""
          ? u.jsx(
              r("GeoGlimmer.react"),
              { height: 36, width: 140, loggingName: i.id },
              t.id,
            )
          : u.jsx(
              r("GeoButton.react"),
              {
                isDisabled: n.isDisabled,
                label: _,
                onClick: c,
                variant: a.primary === !0 ? "primary" : "default",
              },
              t.id,
            )
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.node,
        n = e.renderContext,
        o = t.component.Row;
      return o == null
        ? null
        : u.jsx(
            r("GeoFlexbox.react"),
            {
              alignItems: f(o.alignment),
              direction: "row",
              gap: 8,
              justifyContent: g(o.distribution),
              children: n.renderChildren(o.children),
            },
            t.id,
          );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t,
        n = e.node,
        o = e.renderContext,
        a = n.component.Column;
      return a == null
        ? null
        : u.jsx(
            r("GeoFlexbox.react"),
            {
              alignItems: f(a.alignment),
              direction: "column",
              gap: (t = a.spacing) != null ? t : 12,
              justifyContent: g(a.distribution),
              children: o.renderChildren(a.children),
            },
            n.id,
          );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(t) {
      var n = t.node,
        o = t.renderContext,
        a = r("useGeoTheme")(),
        i = a.selectBorderRadius,
        l = a.selectStaticBackgroundColor,
        s = n.component.Card;
      return s == null
        ? null
        : s.surface == null && s.borderRadius == null
          ? u.jsx(
              r("GeoCard.react"),
              {
                children: u.jsx(r("GeoSection.react"), {
                  children: o.renderComponentById(s.child),
                }),
              },
              n.id,
            )
          : u.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  s.surface != null ? l({ surface: s.surface }) : null,
                  s.borderRadius != null
                    ? i({ context: s.borderRadius })
                    : null,
                  s.borderRadius != null ? S.clipped : null,
                  (s.surface != null || s.borderRadius != null) && S.padded,
                ),
                { children: o.renderComponentById(s.child) },
              ),
              n.id,
            );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    var S = {
        clipped: { overflowX: "x6ikm8r", overflowY: "x10wlt62", $$css: !0 },
        padded: {
          paddingTop: "xyamay9",
          paddingInlineEnd: "xv54qhq",
          paddingBottom: "x1l90r2v",
          paddingInlineStart: "xf7dkkf",
          $$css: !0,
        },
      },
      R = {
        flush: { marginTop: "xdj266r", marginBottom: "xat24cr", $$css: !0 },
      };
    function L(e) {
      var t = e.node,
        n = e.renderContext;
      return u.jsx(r("GeoDivider.react"), { xstyle: R.flush }, t.id);
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.node,
        n = e.renderContext,
        o = t.component.Image;
      if (o == null) return null;
      var a = n.resolveStringValue(o.url),
        i = o.fit,
        l = i === "cover" ? "cover" : i === "fill" ? "fill" : "contain";
      return u.jsx(
        r("CometImage.react"),
        { alt: "", objectFit: l, src: a },
        t.id,
      );
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t,
        n = e.node,
        r = e.renderContext,
        o = n.component.Checkbox;
      if (o == null) return null;
      var a = r.resolveStringValue(o.label),
        i = r.resolveBooleanValue(o.value);
      return u.jsx(
        O,
        {
          id: n.id,
          initialValue: i,
          isDisabled: r.isDisabled || ((t = o.isDisabled) != null ? t : !1),
          label: a,
        },
        n.id,
      );
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      var t = e.node,
        n = e.renderContext,
        r = t.component.TextField;
      if (r == null) return null;
      var o = r.label ? n.resolveStringValue(r.label) : void 0,
        a = r.placeholder ? n.resolveStringValue(r.placeholder) : void 0,
        i = r.value ? n.resolveStringValue(r.value) : "";
      return u.jsx(
        B,
        {
          id: t.id,
          initialValue: i,
          isDisabled: n.isDisabled,
          label: o,
          placeholder: a,
        },
        t.id,
      );
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      var t,
        n,
        o,
        a = e.node,
        i = e.renderContext,
        l = a.component.InlineRichText;
      if (l == null) return null;
      var s = i.resolveStringValue(l.text);
      return u.jsx(
        r("GeoBaseText.react"),
        {
          color: (t = l.color) != null ? t : "value",
          size: (n = l.size) != null ? n : "interactive",
          weight: (o = l.weight) != null ? o : "normal",
          children: u.jsx(r("MAIBAScorecardInlineText.react"), { text: s }),
        },
        a.id,
      );
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e) {
      var t = e.node,
        n = e.renderContext,
        o = t.component.AdLibraryPreviewCard;
      return o == null
        ? null
        : u.jsx(
            r("MAIBAAdLibraryPreviewCard.react"),
            {
              adId: o.ad_id,
              adLibraryUrl: o.ad_library_url,
              body: o.body,
              caption: o.caption,
              ctaText: o.cta_text,
              ctaType: o.cta_type,
              imageUrl: o.image_url,
              linkDescription: o.link_description,
              pageName: o.page_name,
              pageProfilePicUrl: o.page_profile_pic_url,
              platform: o.platform,
              title: o.title,
            },
            t.id,
          );
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e) {
      var t = e.node,
        n = e.renderContext,
        o = t.component.AdLibraryPreviewCarousel;
      return o == null
        ? null
        : u.jsx(
            r("MAIBAAdLibraryPreviewCarousel.react"),
            { previews: o.previews },
            t.id,
          );
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $(e) {
      var t,
        n = e.node,
        o = e.renderContext,
        a = n.component.AssetReference;
      if (a == null) return null;
      var i = {
          __typename: "XFBAdObject",
          ad_object_ids: [].concat(a.asset_ids),
          ad_object_type: a.asset_type,
          display_text: a.display_text,
          entity_type: "EMBED",
          request_id: (t = a.request_id) != null ? t : "",
        },
        l = r("MAIBAMessageAdObjectRenderer.react");
      return l(null, i, void 0, a.display_text);
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e) {
      var t,
        n = e == null ? void 0 : e.component.AssetReference;
      if (n == null) return null;
      var r = {
        __typename: "XFBAdObject",
        ad_object_ids: [].concat(n.asset_ids),
        ad_object_type: n.asset_type,
        display_text: n.display_text,
        request_id: (t = n.request_id) != null ? t : "",
      };
      return {
        content: [
          {
            block_type: "UNSTYLED",
            data: null,
            depth: 0,
            entity_ranges: [
              {
                entity: r,
                entity_type: "EMBED",
                length: n.display_text.length,
                offset: 0,
              },
            ],
            inline_style_ranges: [],
            media_alignment: null,
            media_caption: null,
            text: n.display_text,
          },
        ],
      };
    }
    function N(e) {
      return {
        content: [
          {
            block_type: "UNSTYLED",
            data: null,
            depth: 0,
            entity_ranges: [],
            inline_style_ranges: [],
            media_alignment: null,
            media_caption: null,
            text: e,
          },
        ],
      };
    }
    function M(e, t) {
      var n = e.cell_component_ids,
        r = e.config_component_ids,
        o = e.data,
        a = e.config,
        i =
          r != null && a != null
            ? a.map(function (e, n) {
                var o = r[n];
                if (o == null) return e;
                var a = P(t.componentMap.get(o));
                return a == null
                  ? e
                  : babelHelpers.extends({}, e, { composed_text_label: a });
              })
            : a,
        l =
          n != null && o != null
            ? o.map(function (e, r) {
                var o = e.map(function (e, o) {
                  var a,
                    i,
                    l = (a = n[r]) == null ? void 0 : a[o];
                  return l != null && (i = P(t.componentMap.get(l))) != null
                    ? i
                    : N(e);
                });
                return { composed_text_values: o, values: e };
              })
            : e.data_entries;
      return i === a && l === e.data_entries
        ? e
        : babelHelpers.extends({}, e, { config: i, data: o, data_entries: l });
    }
    function w(e) {
      var t,
        n = e.node,
        a = e.renderContext,
        i = m(o("MAIBAA2UIRenderer.react").A2UISurfaceContext),
        l = n.component.DataViz;
      if (l == null) return null;
      var s = l.data.type,
        c =
          s === "line_chart" ||
          s === "vertical_bar_chart" ||
          s === "horizontal_bar_chart" ||
          s === "scorecard_data_card";
      if (
        i === _ &&
        c &&
        !o("MAIBADataVizUtil").getIsMAIBAScorecardChartsV1Enabled()
      )
        return null;
      var d = M(l.data, a);
      return u.jsx(r("MAIBAV2DataVizAdapter.react"), {
        state: {
          data: JSON.stringify(d),
          error_message: (t = l.error_message) != null ? t : "",
          is_streaming: l.is_streaming === !0 ? "true" : "false",
        },
      });
    }
    w.displayName = w.name + " [from " + i.id + "]";
    function A(e) {
      var t,
        n,
        a,
        i = e.node,
        l = e.renderContext,
        s = o("MAIBAL4AdAccountContext").useMAIBAL4AdAccountContext(),
        c = s.selectedAdAccount,
        d = i.component.ScorecardIssueCard;
      return d == null
        ? null
        : u.jsx(
            r("MAIBAScorecardIssueCard.react"),
            {
              adAccountId: (t = c == null ? void 0 : c.id) != null ? t : "",
              collapsible: (n = d.collapsible) != null ? n : !1,
              expanded: (a = d.expanded) != null ? a : !0,
              number: d.number,
              renderer: "a2ui",
              shouldLogToggle: !1,
              title: d.title,
              children: u.jsxs(r("GeoFlexbox.react"), {
                alignItems: "start",
                direction: "column",
                rowGap: 12,
                children: [
                  l.renderComponentById(d.body),
                  d.cta != null ? l.renderComponentById(d.cta) : null,
                ],
              }),
            },
            i.id,
          );
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F(e) {
      var t,
        n = e.node,
        r = e.renderContext,
        o = n.component.Tabs;
      if (o == null || o.tabs.length === 0) return null;
      var a = o.tabs.map(function (e) {
        return { child: e.child, title: r.resolveStringValue(e.title) };
      });
      return u.jsx(
        W,
        {
          renderContext: r,
          tabs: a,
          variant: (t = o.variant) != null ? t : "button",
        },
        n.id,
      );
    }
    F.displayName = F.name + " [from " + i.id + "]";
    function O(e) {
      var t = e.id,
        n = e.initialValue,
        a = e.isDisabled,
        i = e.label,
        l = p(n),
        s = l[0],
        c = l[1],
        _ = m(o("MAIBAA2UIRenderer.react").A2UIFormDataContext),
        f = _.updateFieldValue;
      o("MAIBAA2UIRenderer.react").useFormFieldRegistration(t, n);
      var g = d(
        function (e) {
          (c(e), f(t, e));
        },
        [t, f],
      );
      return u.jsx(r("GeoCheckboxInput.react"), {
        isDisabled: a,
        label: i,
        onChange: g,
        value: s,
      });
    }
    O.displayName = O.name + " [from " + i.id + "]";
    function B(e) {
      var t = e.id,
        n = e.initialValue,
        a = e.isDisabled,
        i = e.label,
        l = e.placeholder,
        s = p(n),
        c = s[0],
        _ = s[1],
        f = m(o("MAIBAA2UIRenderer.react").A2UIFormDataContext),
        g = f.updateFieldValue;
      o("MAIBAA2UIRenderer.react").useFormFieldRegistration(t, n);
      var h = d(
          function (e) {
            (_(e), g(t, e));
          },
          [t, g],
        ),
        y = u.jsx(r("GeoTextInput.react"), {
          isDisabled: a,
          label: i != null ? i : "",
          onChange: h,
          placeholder: l,
          value: c,
        });
      return y;
    }
    B.displayName = B.name + " [from " + i.id + "]";
    function W(e) {
      var t = e.renderContext,
        n = e.tabs,
        o = e.variant,
        a = o === void 0 ? "button" : o,
        i = p(0),
        l = i[0],
        s = i[1],
        c = l < n.length ? l : 0,
        m = n[c],
        _ = d(function (e) {
          s(e);
        }, []);
      return a === "pill"
        ? u.jsx(q, {
            activeIndex: c,
            activeTab: m,
            onActivate: _,
            renderContext: t,
            tabs: n,
          })
        : u.jsxs(r("GeoFlexbox.react"), {
            direction: "column",
            gap: 8,
            children: [
              u.jsx(r("GeoFlexbox.react"), {
                direction: "row",
                gap: 4,
                children: n.map(function (e, t) {
                  return u.jsx(
                    r("GeoButton.react"),
                    {
                      label: e.title,
                      onClick: function () {
                        return _(t);
                      },
                      variant: t === c ? "primary" : "default",
                    },
                    t,
                  );
                }),
              }),
              t.renderComponentById(m.child),
            ],
          });
    }
    W.displayName = W.name + " [from " + i.id + "]";
    function q(t) {
      var n = t.activeIndex,
        o = t.activeTab,
        a = t.onActivate,
        i = t.renderContext,
        l = t.tabs,
        s = r("useGeoTheme")(),
        c = s.selectBorderColor,
        d = s.selectBorderRadius,
        m = s.selectBorderWidth,
        p = s.selectStaticBackgroundColor;
      return u.jsxs(r("GeoFlexbox.react"), {
        direction: "column",
        xstyle: [
          U.outerCard,
          d({ context: "container" }),
          p({ surface: "content" }),
        ],
        children: [
          u.jsx(r("GeoFlexbox.react"), {
            alignItems: "center",
            columnGap: 8,
            direction: "row",
            xstyle: U.tabBar,
            children: l.map(function (t, o) {
              var i = o === n;
              return u.jsx(
                r("GeoBasePressable.react"),
                {
                  "aria-label": t.title,
                  context: "rounded",
                  density: "none",
                  onPress: function () {
                    return a(o);
                  },
                  variant: "flat",
                  children: u.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(
                        U.tabPill,
                        d({ context: "rounded" }),
                        i && U.tabPillActive,
                        i && p({ surface: "selected" }),
                        c({ color: "element" }),
                        m({ context: "buttonInverted" }),
                      ),
                      {
                        children: u.jsx(r("GeoBaseText.react"), {
                          color: i ? "link" : "value",
                          size: "value",
                          weight: i ? "bold" : "normal",
                          children: t.title,
                        }),
                      },
                    ),
                  ),
                },
                o,
              );
            }),
          }),
          u.jsx(r("GeoFlexbox.react"), {
            direction: "column",
            rowGap: 12,
            xstyle: U.tabContent,
            children: i.renderComponentById(o.child),
          }),
        ],
      });
    }
    q.displayName = q.name + " [from " + i.id + "]";
    var U = {
        outerCard: { overflowX: "x6ikm8r", overflowY: "x10wlt62", $$css: !0 },
        tabBar: {
          flexWrap: "x1a02dak",
          paddingTop: "xz9dl7a",
          paddingInlineEnd: "xpdmqnj",
          paddingBottom: "xsag5q8",
          paddingInlineStart: "x1g0dm76",
          $$css: !0,
        },
        tabPill: {
          paddingTop: "x1y1aw1k",
          paddingBottom: "xwib8y2",
          paddingInlineStart: "xf7dkkf",
          paddingInlineEnd: "xv54qhq",
          paddingLeft: null,
          paddingRight: null,
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          $$css: !0,
        },
        tabPillActive: {
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          $$css: !0,
        },
        tabContent: {
          paddingInlineEnd: "xv54qhq",
          paddingBottom: "x1l90r2v",
          paddingInlineStart: "xf7dkkf",
          paddingTop: "xexx8yu",
          $$css: !0,
        },
      },
      V = {
        AdLibraryPreviewCard: D,
        AdLibraryPreviewCarousel: x,
        AssetReference: $,
        Button: y,
        Card: v,
        Checkbox: k,
        Column: b,
        DataViz: w,
        Divider: L,
        Image: E,
        InlineRichText: T,
        Row: C,
        ScorecardIssueCard: A,
        Tabs: F,
        Text: h,
        TextField: I,
      },
      H = V;
    l.default = H;
  },
  98,
);
