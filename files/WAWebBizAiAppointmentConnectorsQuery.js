__d(
  "WAWebBizAiAppointmentConnectorsQuery",
  [
    "CometRelay",
    "WAWebBizAiAppointmentConnectorsQuery.graphql",
    "WAWebBizAiAppointmentConnectorsQuery_connectorEntry.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiAppointmentConnectorsQuery.graphql")),
      c =
        s !== void 0
          ? s
          : (s = n(
              "WAWebBizAiAppointmentConnectorsQuery_connectorEntry.graphql",
            ));
    function d(e) {
      var t,
        n =
          e == null || (t = e.meta_ai_biz_agent_wa_plugins_for_surface) == null
            ? void 0
            : t.plugins;
      return n == null
        ? []
        : m(
            n.map(function (e) {
              return o("CometRelay").readInlineData(c, e);
            }),
          );
    }
    function m(e) {
      var t = [];
      for (var n of e) {
        var r = p(n);
        r != null && t.push(r);
      }
      return t;
    }
    function p(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p = e == null ? void 0 : e.plugin,
        g = p == null ? void 0 : p.id,
        y = p == null ? void 0 : p.display_name;
      if (p == null || g == null || y == null) return null;
      var C = (e == null ? void 0 : e.is_connected) === !0,
        b = _(e == null ? void 0 : e.connection_status, C),
        v = C && b === "CONNECTED",
        S = p.apixfn_plugin,
        R = (t = p.oauth_config) == null ? void 0 : t.oauth_type;
      return {
        apixfnPlugin: S == null ? null : S,
        authOptionKey:
          p.pluginType === "XFBBizAIIntegrationMembranePlugin" &&
          (n = p.auth_option_key) != null
            ? n
            : null,
        authType: (r = p.auth_type) != null ? r : null,
        authorizationParams: f(p.authorization_params),
        connectionStatus: b,
        description: (o = p.description) != null ? o : "",
        displayName: y,
        hasOAuthConfig: p.oauth_config != null,
        id: g,
        integrationConfigId:
          (a = e == null ? void 0 : e.integration_config_id) != null ? a : null,
        isConnected: v,
        isCustom: p.pluginType === "XFBBizAIIntegrationCustomPlugin",
        isMembrane: p.pluginType === "XFBBizAIIntegrationMembranePlugin",
        logoDarkModeUri:
          (i = (l = p.logo_dark_mode) == null ? void 0 : l.uri) != null
            ? i
            : null,
        logoUri: (s = (u = p.logo) == null ? void 0 : u.uri) != null ? s : null,
        name: (c = p.name) != null ? c : "",
        oauthType: R == null ? null : R,
        productCategories: p.product_categories.flatMap(function (e) {
          var t = e.product_category;
          return t == null ? [] : [t];
        }),
        template: h(p.template_rendering),
        title: (d = p.title) != null ? d : null,
        titleSubtext: (m = p.title_subtext) != null ? m : null,
        urlTemplateParams: f(p.template_variables_url),
      };
    }
    function _(e, t) {
      return e != null ? e : t ? "CONNECTED" : "NOT_CONNECTED";
    }
    function f(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e) {
        var r, o, a, i, l, s;
        n.key != null &&
          t.push({
            description: (r = n.description) != null ? r : "",
            helpLink: (o = n.help_link) != null ? o : null,
            key: n.key,
            label: (a = n.label) != null ? a : null,
            labelDescription: (i = n.label_description) != null ? i : null,
            options: g(n.options),
            paramTypes: ((l = n.param_type) != null ? l : []).flatMap(
              function (e) {
                return e == null ? [] : [e];
              },
            ),
            placeholderText: (s = n.placeholder_text) != null ? s : null,
          });
      }
      return t;
    }
    function g(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e)
        if (n.value != null) {
          var r;
          t.push({
            label: (r = n.label) != null ? r : n.value,
            value: n.value,
          });
        }
      return t;
    }
    function h(e) {
      var t;
      if (e == null) return null;
      var n = e.template_type;
      return {
        footerTextMarkdown: (t = e.footer_text_markdown) != null ? t : null,
        formInstructions: C(e.form_instructions),
        templateType: n == null ? null : n,
        valueProps: y(e.value_props),
      };
    }
    function y(e) {
      var t = [];
      for (var n of e) {
        var r,
          o,
          a = (r = n.text_markdown) == null ? void 0 : r.trim();
        a == null ||
          a === "" ||
          t.push({
            glyphName: (o = n.glyph_name) != null ? o : null,
            textMarkdown: a,
          });
      }
      return t;
    }
    function C(e) {
      var t;
      if (e == null) return null;
      var n = [];
      for (var r of e.instructions) {
        var o = r.markdown;
        if (!(o == null || o.trim() === "")) {
          var a = r.type;
          n.push({ markdown: o, type: a == null ? "UNKNOWN" : a });
        }
      }
      var i = ((t = e.title) == null ? void 0 : t.trim()) || null;
      return i == null && n.length === 0 ? null : { instructions: n, title: i };
    }
    ((l.APPOINTMENT_CONNECTORS_QUERY = u),
      (l.CONNECTOR_ENTRY_FRAGMENT = c),
      (l.normalizeAppointmentConnectors = d),
      (l.normalizeAppointmentConnectorEntries = m));
  },
  98,
);
