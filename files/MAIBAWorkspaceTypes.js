__d(
  "MAIBAWorkspaceTypes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null || e === "") return {};
      try {
        var t = JSON.parse(e);
        if (t != null && typeof t == "object" && !Array.isArray(t)) return t;
      } catch (e) {}
      return {};
    }
    function l(e) {
      if (e == null || e === "") return [];
      try {
        var t = JSON.parse(e);
        if (Array.isArray(t)) return t;
      } catch (e) {}
      return [];
    }
    function s(e) {
      return e.workspace_type != null && e.workspace_type !== "";
    }
    var u = "__implicit__";
    function c(e) {
      var t = {},
        n = null;
      function r(e, o) {
        if (e.tag === "ws-view") {
          var a = e.attrs.id;
          if (a != null && a !== "") {
            if (t[a] != null) return;
            var i = e;
            (o != null &&
              (e.attrs.parent == null || e.attrs.parent === "") &&
              (i = {
                attrs: babelHelpers.extends({}, e.attrs, { parent: o }),
                children: e.children,
                tag: e.tag,
                text: e.text,
              }),
              n == null && (n = a),
              (t[a] = i));
            for (var l of e.children) r(l, a);
            return;
          }
        }
        for (var s of e.children) r(s, o);
      }
      for (var o of e) r(o, null);
      if (n == null) {
        var a,
          i = {
            attrs: { id: u, kind: "campaign" },
            children: e,
            tag: "ws-view",
            text: null,
          };
        return { rootViewId: u, viewMap: ((a = {}), (a[u] = i), a) };
      }
      return { rootViewId: n, viewMap: t };
    }
    function d(e, t, n, r) {
      var o = function (t) {
          return {
            attrs: { kind: t },
            children: [],
            tag: "ws-card",
            text: null,
          };
        },
        a = function (t) {
          return {
            attrs: { kind: t },
            children: [],
            tag: "ws-section",
            text: null,
          };
        },
        i = {
          attrs: { kind: "campaign_summary" },
          children: [
            a("campaign_name"),
            a("campaign_settings"),
            a("special_ad_category"),
          ],
          tag: "ws-card",
          text: null,
        },
        l = function (t, n) {
          return n.map(function (e, n) {
            var r = e.trim();
            return {
              attrs: {
                adgroup_id: r,
                campaign_id: t,
                id: "ad_detail:" + r,
                kind: "ad_detail",
                parent: "campaign:" + t,
                title: "Ad " + (n + 1),
              },
              children: [
                o("ad_name"),
                o("destination"),
                o("ad_creative"),
                o("identity"),
                o("ad_preview"),
              ],
              tag: "ws-view",
              text: null,
            };
          });
        };
      return [
        {
          attrs: {
            id: "campaign_group:" + t,
            kind: "campaign_group",
            title: e,
          },
          children: [
            i,
            {
              attrs: {
                campaign_id: n,
                id: "campaign:" + n,
                kind: "campaign",
                parent: "campaign_group:" + t,
                title: e,
              },
              children: [
                o("campaign_details"),
                o("conversion"),
                o("budget"),
                o("audience"),
                o("placements"),
                o("estimated_daily_results"),
              ].concat(l(n, r)),
              tag: "ws-view",
              text: null,
            },
          ],
          tag: "ws-view",
          text: null,
        },
      ];
    }
    ((i.parseAttributesJSON = e),
      (i.parseBlocksJSON = l),
      (i.isWorkspaceEnvelopeComplete = s),
      (i.IMPLICIT_VIEW_ID = u),
      (i.getViewStackFromBlocks = c),
      (i.buildAdDraftEditorBlocks = d));
  },
  66,
);
