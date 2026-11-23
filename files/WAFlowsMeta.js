__d(
  "WAFlowsMeta",
  [
    "invariant",
    "WAFlowsComponentConstants",
    "WAFlowsComponentUtils",
    "WAFlowsConditionalRenderingParser",
    "WAFlowsShoppingExternalDataChannelUtils",
    "WAFlowsStateParser",
    "WAFlowsTypes",
    "WAFlowsUtils",
    "WAFlowsVersionUtils",
    "WhatsAppFlowsDataAPIVersion",
    "WhatsAppFlowsTemplateVersion",
    "getRoutingModel",
    "getTemplateActions",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return !0;
    }
    function u(e) {
      var t = [],
        n = e.external_data;
      if (!n) return t;
      for (var r of Object.entries(n)) {
        var a = r[0],
          i = r[1];
        t.push.apply(
          t,
          o("WAFlowsShoppingExternalDataChannelUtils").formatExternalData(a, i),
        );
      }
      return t;
    }
    function c(e) {
      var t = { initValues: {}, errorMessages: {} },
        n = function (n) {
          return e[n] != null
            ? typeof e[n] == "object"
              ? babelHelpers.extends({}, e[n])
              : e[n]
            : {};
        };
      return (
        (t.initValues = n("init-values")),
        (t.errorMessages = n("error-messages")),
        { formProps: t }
      );
    }
    function d(e, t) {
      (e == null ? void 0 : e.name) != null &&
        (e["init-value"] != null &&
          typeof t.formProps.initValues == "object" &&
          (t.formProps.initValues[e.name] = e["init-value"]),
        e["error-message"] != null &&
          typeof t.formProps.errorMessages == "object" &&
          (t.formProps.errorMessages[e.name] = e["error-message"]));
    }
    function m(e, t, n) {
      switch (e.type) {
        case "Form":
          p(e.children, t, !1);
          break;
        case "If":
          (p(e.then, t, n), e.else != null && p(e.else, t, n));
          break;
        case "Switch":
          for (var r of Object.values(e.cases)) p(r != null ? r : [], t, n);
          break;
        default:
          break;
      }
    }
    function p(e, t, n) {
      for (var r of e)
        (r.type === "Footer" && (t.hasFooter = !0),
          r.type ===
            o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST &&
            (t.hasNavigationList = !0),
          o("WAFlowsComponentUtils").isPrivate(r) &&
            r.name != null &&
            t.privateFields.add(r.name),
          n &&
            o("WAFlowsComponentConstants").FORM_COMPONENT_TYPES.has(r.type) &&
            d(r, t.formMeta),
          m(r, t, n));
    }
    function _(e, t) {
      (e === void 0 && (e = []), t === void 0 && (t = []));
      for (var n of e)
        if (o("WAFlowsComponentConstants").FORM_COMPONENT_TYPES.has(n.type))
          t.push(n);
        else if (n.type === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.IF) {
          var r, a;
          (_((r = n.then) != null ? r : [], t),
            _((a = n.else) != null ? a : [], t));
        } else if (n.type === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.SWITCH)
          for (var i of Object.values(n.cases)) _(i != null ? i : [], t);
      return t;
    }
    function f(e) {
      var t,
        n,
        r,
        a = {
          formMeta: { formProps: { initValues: {}, errorMessages: {} } },
          privateFields: new Set(),
          hasFooter: !1,
          hasNavigationList: !1,
        };
      if (
        ((t = e.layout) == null ? void 0 : t.type) !==
        o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.SINGLE_COLUMN
      )
        return a;
      var i =
          (n = (r = e.layout) == null ? void 0 : r.children) != null ? n : [],
        l = i.find(function (e) {
          return e.type === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.FORM;
        });
      return (
        l != null &&
          l.type === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.FORM &&
          (a.formMeta = c(l)),
        p(i, a, l == null),
        a
      );
    }
    function g(e) {
      var t,
        n = e.layout,
        r = { formProps: { initValues: {}, errorMessages: {} } };
      if (
        (n == null ? void 0 : n.type) !==
        o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.SINGLE_COLUMN
      )
        return r;
      var a = (t = n == null ? void 0 : n.children) != null ? t : [],
        i = a.find(function (e) {
          return e.type === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.FORM;
        });
      if (
        i != null &&
        i.type === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.FORM
      )
        return c(i);
      var l = { formProps: { initValues: {}, errorMessages: {} } },
        s = _(a);
      for (var u of s) d(u, l);
      return l;
    }
    function h(e, t, n) {
      return n.reduce(function (n, r) {
        if (
          o(
            "WAFlowsComponentUtils",
          ).WA_FLOWS_SUPPORTED_COMPONENTS_FOR_RESPONSE.some(function (e) {
            return e === r.type;
          })
        )
          switch (r.type) {
            case "Form":
              return n.concat(h(e, t, r.children));
            case "If":
              return n.concat(y(e, t, r));
            case "Switch":
              return n.concat(C(e, t, r));
            default:
              return n.concat(r);
          }
        return n;
      }, []);
    }
    function y(e, t, n) {
      var r, a;
      if (!t || typeof n.condition != "string") return [];
      var i = o("WAFlowsConditionalRenderingParser").parseConditionalRendering(
        n.condition,
        e,
        ((r = {}), (r[e] = t), r),
      );
      return h(e, t, i ? n.then : (a = n.else) != null ? a : []);
    }
    function C(e, t, n) {
      var r, a, i, l;
      if (!t) return [];
      var s =
        (r = o("WAFlowsStateParser").parsePropertyValue(
          n.value,
          ((a = {}), (a[e] = t), a),
          e,
        )) != null
          ? r
          : "";
      return h(
        e,
        t,
        (i = (l = n.cases[s]) != null ? l : n.cases.default) != null ? i : [],
      );
    }
    function b(e, t) {
      var n, r, a;
      return ((n = e.layout) == null ? void 0 : n.type) ===
        o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.SINGLE_COLUMN
        ? h(
            e.id,
            t,
            (r = (a = e.layout) == null ? void 0 : a.children) != null ? r : [],
          )
        : [];
    }
    function v(e) {
      var t, n;
      return new Set(
        S((t = (n = e.layout) == null ? void 0 : n.children) != null ? t : []),
      );
    }
    function S(e) {
      return e.reduce(function (e, t) {
        return R(e, t);
      }, []);
    }
    function R(e, t) {
      switch (t.type) {
        case "Form": {
          var n = S(t.children);
          e.push.apply(e, n);
          break;
        }
        case "If": {
          var r = S(t.then);
          if ((e.push.apply(e, r), t.else != null)) {
            var a = S(t.else);
            e.push.apply(e, a);
          }
          break;
        }
        case "Switch": {
          var i = Object.keys(t.cases).reduce(function (e, n) {
            return (e.push.apply(e, S(t.cases[n])), e);
          }, []);
          e.push.apply(e, i);
          break;
        }
        default:
          o("WAFlowsComponentUtils").isPrivate(t) &&
            t.name != null &&
            e.push(t.name);
      }
      return e;
    }
    function L(e) {
      var t, n;
      return ((t = e.layout) == null ? void 0 : t.type) !==
        o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.SINGLE_COLUMN ||
        ((n = e.layout) == null ? void 0 : n.children) == null
        ? !1
        : o("WAFlowsUtils").findComponentInScreen(
            o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST,
            e.layout.children,
            !0,
          ) != null;
    }
    function E(e) {
      var t;
      return ((t = e.layout) == null ? void 0 : t.children) == null
        ? !1
        : k(e.layout.children);
    }
    function k(e) {
      for (var t of e) {
        var n = !1;
        if (t.type === "Footer") n = !0;
        else if (t.type === "Form") n = k(t.children);
        else if (t.type === "Switch") {
          var r = Object.values(t.cases);
          n = r.length > 0 && k(r[0]);
        } else t.type === "If" && (n = k(t.then));
        if (n) return !0;
      }
      return !1;
    }
    function I(e) {
      return e === 100;
    }
    var T = (function () {
      function t(t, n, a, i, l) {
        var s;
        l === void 0 && (l = !1);
        var c = t != null ? t : {},
          d = c.data_channel_uri,
          m = c.screens,
          p = m === void 0 ? [] : m,
          _ = c.version,
          h = c.data_api_version,
          y = c.meta,
          C = r("WhatsAppFlowsTemplateVersion").cast(
            o("WAFlowsVersionUtils").convertVersion(_),
          ),
          S = o("WAFlowsVersionUtils").convertVersion(h),
          R = S != null ? r("WhatsAppFlowsDataAPIVersion").cast(S) : null,
          k = p.reduce(function (e, t) {
            var n = t.data,
              r = t.id;
            return ((e[r] = n != null ? n : {}), e);
          }, {}),
          T = r("getTemplateActions")(t),
          D = (s = y == null ? void 0 : y.lead_gen_ai) != null ? s : !1,
          x = p.some(function (e) {
            return L(e);
          });
        this.internalMeta = {
          noDataChannel: T.data_exchange.length === 0 && T.back.length === 0,
          isCreatedByLeadGenAI: D,
        };
        var $ =
          t != null && C != null
            ? r("getRoutingModel")(C, t, T, p, this.internalMeta.noDataChannel)
            : {};
        ((this.screenMeta = p.reduce(function (t, n) {
          var r;
          if (e()) {
            var a,
              i,
              l,
              s,
              c,
              d,
              m = f(n);
            r = {
              id: n.id,
              refresh_on_back: (a = n.refresh_on_back) != null ? a : I(C),
              title: (i = n.title) != null ? i : "",
              terminal: (l = n.terminal) != null ? l : $[n.id].length === 0,
              privateFields: m.privateFields,
              success:
                n.success != null
                  ? n.success
                  : n.terminal === !0
                    ? n.terminal
                    : void 0,
              form: m.formMeta,
              getComponents: function (t) {
                return b(n, t);
              },
              hasFooter: m.hasFooter,
              externalDataRequest: u(n),
              layoutType:
                (s = (c = n.layout) == null ? void 0 : c.type) != null
                  ? s
                  : o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.SINGLE_COLUMN,
              sensitive: (d = n.sensitive) != null ? d : [],
              isNavListScreen: m.hasNavigationList,
            };
          } else {
            var p, _, h, y, S, R;
            r = {
              id: n.id,
              refresh_on_back: (p = n.refresh_on_back) != null ? p : I(C),
              title: (_ = n.title) != null ? _ : "",
              terminal: (h = n.terminal) != null ? h : $[n.id].length === 0,
              privateFields: v(n),
              success:
                n.success != null
                  ? n.success
                  : n.terminal === !0
                    ? n.terminal
                    : void 0,
              form: g(n),
              getComponents: function (t) {
                return b(n, t);
              },
              hasFooter: E(n),
              externalDataRequest: u(n),
              layoutType:
                (y = (S = n.layout) == null ? void 0 : S.type) != null
                  ? y
                  : o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.SINGLE_COLUMN,
              sensitive: (R = n.sensitive) != null ? R : [],
              isNavListScreen: L(n),
            };
          }
          return (t.set(n.id, r), t);
        }, new Map())),
          (this.templateMeta = {
            flowId: a,
            biz_jid: i,
            draft_mode: n,
            version: C,
            data_api_version: R,
            data_channel_uri: d != null ? new URL(d) : null,
            routing_model: $,
            data_model: k,
            is_response_flow: l,
            hasNavigationList: x,
          }),
          (this.nativeComponentInDataExchMeta = new Map()));
      }
      var n = t.prototype;
      return (
        (n.getTemplateMeta = function () {
          return this.templateMeta;
        }),
        (n.getScreenMeta = function (t) {
          (t != null || s(0, 72746), this.screenMeta.has(t) || s(0, 72747, t));
          var e = this.screenMeta.get(t);
          return (e != null || s(0, 72748, t), e);
        }),
        (n.getScreens = function () {
          return Array.from(this.screenMeta.keys());
        }),
        (n.getScreenTitle = function (t) {
          var e, n;
          return (e = (n = this.getScreenMeta(t)) == null ? void 0 : n.title) !=
            null
            ? e
            : "";
        }),
        (n.getScreenLayoutType = function (t) {
          return this.getScreenMeta(t).layoutType;
        }),
        (n.getScreenSensitiveFields = function (t) {
          var e, n;
          return new Set(
            (e = (n = this.getScreenMeta(t)) == null ? void 0 : n.sensitive) !=
              null
              ? e
              : [],
          );
        }),
        (n.isSensitiveField = function (t, n) {
          var e = this.getScreenSensitiveFields(t);
          return e.has(n);
        }),
        (n.getScreenExternalData = function (t) {
          var e, n;
          return t !== ""
            ? (e =
                (n = this.getScreenMeta(t)) == null
                  ? void 0
                  : n.externalDataRequest) != null
              ? e
              : []
            : [];
        }),
        (n.getDataAPIVersion = function () {
          return this.templateMeta.data_api_version;
        }),
        (n.getSemanticDataAPIVersion = function () {
          var e = this.getDataAPIVersion();
          return e == null ? null : o("WAFlowsVersionUtils").intToString(+e);
        }),
        (n.getRoutingModel = function () {
          return this.templateMeta.routing_model;
        }),
        (n.isDataChannelLess = function () {
          return this.internalMeta.noDataChannel;
        }),
        (n.getScreenRoutingModel = function (t) {
          return (t != null || s(0, 72746), this.templateMeta.routing_model[t]);
        }),
        (n.isDraft = function () {
          return this.templateMeta.draft_mode;
        }),
        (n.isNavigationListFlow = function () {
          return this.templateMeta.hasNavigationList;
        }),
        (n.isCreatedByLeadGenAI = function () {
          return this.internalMeta.isCreatedByLeadGenAI;
        }),
        (n.getDataModel = function () {
          return this.templateMeta.data_model;
        }),
        (n.getScreenDataModel = function (t) {
          return (t != null || s(0, 72746), this.templateMeta.data_model[t]);
        }),
        (n.getVersion = function () {
          return this.templateMeta.version;
        }),
        (n.getSematicVersion = function () {
          return o("WAFlowsVersionUtils").intToString(+this.getVersion());
        }),
        (n.getFlowId = function () {
          return this.templateMeta.flowId;
        }),
        (n.getBizJid = function () {
          return this.templateMeta.biz_jid;
        }),
        (n.getIsShoppingFlow = function () {
          var e = this,
            t = this.getVersion(),
            n = this.getScreens() || [],
            r = [
              o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_DETAIL,
              o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CART,
              o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CATEGORY_LIST,
              o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_LIST,
            ],
            a = n.some(function (t) {
              var n = e.getScreenMeta(t);
              return r.includes(n == null ? void 0 : n.layoutType);
            });
          return a && (t === 200 || t === 502);
        }),
        (n.getScreenIdByLayoutType = function (t) {
          var e = this,
            n = this.getScreens() || [];
          return n.find(function (n) {
            var r = e.getScreenMeta(n);
            return (r == null ? void 0 : r.layoutType) === t
              ? r == null
                ? void 0
                : r.id
              : null;
          });
        }),
        (n.getShoppingCartScreenId = function () {
          var e = this.getScreenIdByLayoutType(
            o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CART,
          );
          return (e != null || s(0, 82838), e);
        }),
        (n.getShoppingItemDetailScreenId = function () {
          var e = this.getScreenIdByLayoutType(
            o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_DETAIL,
          );
          return (e != null || s(0, 87633), e);
        }),
        t
      );
    })();
    ((T.MEDIA_MIME_TYPE_PROP = "media_mime_type"),
      (T.MEDIA_SIZE_BYTES_PROP = "media_size_bytes"),
      (l.default = T));
  },
  98,
);
