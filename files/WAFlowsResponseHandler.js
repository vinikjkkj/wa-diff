__d(
  "WAFlowsResponseHandler",
  [
    "fbt",
    "JSResource",
    "WAFlowsActionHandlerTypes",
    "WAFlowsComponentUtils",
    "WAFlowsDatePickerUtils",
    "WAFlowsDynamicDataUtils",
    "WAFlowsEntryPointUtils",
    "WAFlowsFormValidationUtils",
    "WAFlowsInitEnvironmentTypes",
    "WAFlowsIsLikelyBase64",
    "WAFlowsLocalization",
    "WAFlowsNativeExperienceUtils",
    "WAFlowsStateParser",
    "WAFlowsTypes",
    "err",
    "justknobx",
    "structuredClone",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["data"],
      u = ["isSensitive", "sensitive"],
      c = "\u2022".repeat(12),
      d = "RESPONSE",
      m = {
        COPY_FIELD_RESPONSE: "COPY_FIELD_RESPONSE",
        COPY_ALL_RESPONSE: "COPY_ALL_RESPONSE",
        DOWNLOAD_RESPONSE: "DOWNLOAD_RESPONSE",
      };
    function p(e) {
      return e == null
        ? !0
        : typeof e == "string" || Array.isArray(e)
          ? e.length === 0
          : typeof e == "object"
            ? Object.keys(e).length === 0
            : !1;
    }
    function _() {
      return r("justknobx")._("3864");
    }
    function f() {
      return r("justknobx")._("5527");
    }
    function g(e, t, n, r) {
      switch (r) {
        case 2:
          return C(e, t, n);
        default:
          return h(e, t, n);
      }
    }
    function h(e, t, n) {
      var r = [];
      for (var a of t.internal.screenHistory) {
        var i,
          l = t.external[a];
        if (
          !(
            l == null ||
            Object.keys(l.form).length === 0 ||
            Object.values(l.form).every(function (e) {
              return p(e);
            })
          )
        ) {
          var s = b(e, l, a, n, t);
          if (s.length !== 0) {
            var u = _() ? { screenState: S(l, n.platform === "ios") } : null,
              c = e.getScreenTitle(a);
            r.push(
              babelHelpers.extends(
                {
                  id: a,
                  title:
                    (i = o("WAFlowsStateParser").parsePropertyValue(
                      c,
                      t.external,
                      a,
                    )) != null
                      ? i
                      : c,
                  components: s,
                },
                u,
              ),
            );
          }
        }
      }
      return { screens: y(e, t), response: r, version: 1 };
    }
    function y(e, t) {
      var n = [];
      return (
        e.screenMeta.forEach(function (e) {
          var r = (e == null ? void 0 : e.id) != null ? t.external[e.id] : null;
          n.push({
            id: e.id,
            title: e.title,
            components: e.getComponents(r).map(function (e) {
              return { name: e.name, label: e.label };
            }),
          });
        }),
        n
      );
    }
    function C(e, t, n) {
      var r = t.internal.screenHistory
        .filter(function (t) {
          return e.screenMeta.has(t);
        })
        .map(function (r) {
          var a,
            i = n.platform === "ios",
            l = t.external[r],
            s = S(l, i),
            u = e.getScreenMeta(r).getComponents(l),
            c = e.getScreenTitle(r);
          return {
            title:
              (a = o("WAFlowsStateParser").parsePropertyValue(
                c,
                t.external,
                r,
              )) != null
                ? a
                : c,
            id: r,
            components: u.reduce(function (a, u) {
              if (u.name == null) return a;
              var c = u.name,
                d = L(u, i),
                m = k(d, s.form[c], l, n);
              return (
                a.push({
                  type: u.type,
                  name: c,
                  label: E(d, t, r),
                  value: m,
                  isSensitive:
                    e.isSensitiveField(r, c) ||
                    o("WAFlowsComponentUtils").isPasswordOrPasscodeField(d),
                }),
                a
              );
            }, []),
          };
        });
      return { screens: r, version: 2 };
    }
    function b(e, t, n, r, a) {
      var i = e.getScreenMeta(n).getComponents(t),
        l = e.getScreenSensitiveFields(n),
        s = [],
        u = r.platform === "ios";
      return (
        i.forEach(function (e) {
          var i = S(t, u),
            c = L(e, u);
          if (
            o(
              "WAFlowsComponentUtils",
            ).WA_FLOWS_SUPPORTED_COMPONENTS_FOR_RESPONSE.includes(c.type) &&
            !o("WAFlowsComponentUtils").isPasswordOrPasscodeField(c)
          ) {
            var d,
              m,
              _ = l.has((d = c.name) != null ? d : ""),
              f = i.form[(m = c.name) != null ? m : ""];
            if (f != null && !p(f)) {
              var g,
                h = k(c, f, i, r);
              return s.push({
                name: (g = c.name) != null ? g : "",
                type: c.type,
                label: E(c, a, n),
                value: h,
                sensitive: _,
                componentData: { componentMeta: c, componentValue: f },
              });
            }
          }
        }),
        s
      );
    }
    function v(e, t, n) {
      var o =
          r("structuredClone") && !n
            ? r("structuredClone")(e)
            : JSON.parse(JSON.stringify(e)),
        a = 100;
      function i(e, t) {
        var n = babelHelpers.extends({}, e);
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (n[r] = l(n[r], t + 1));
        return n;
      }
      function l(e, n) {
        return (
          n === void 0 && (n = 0),
          n >= a
            ? e
            : typeof e == "string"
              ? r("WAFlowsIsLikelyBase64")(e)
                ? t
                : e
              : Array.isArray(e)
                ? e.map(function (e) {
                    return l(e, n + 1);
                  })
                : e !== null && typeof e == "object"
                  ? i(e, n)
                  : e
        );
      }
      return i(o, 0);
    }
    function S(t, n) {
      var o =
          r("structuredClone") && !n
            ? r("structuredClone")(t)
            : JSON.parse(JSON.stringify(t)),
        a = o.data,
        i = babelHelpers.objectWithoutPropertiesLoose(o, e),
        l = v(a, "", n);
      return (f() && (l = R(l)), babelHelpers.extends({ data: l }, i));
    }
    function R(e) {
      var t = 100;
      function n(e, r) {
        if (r >= t) {
          var o = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) && (o[a] = e[a]);
          return o;
        }
        var i = {};
        for (var l in e)
          if (
            Object.prototype.hasOwnProperty.call(e, l) &&
            l !== "on-select-action" &&
            l !== "on-unselect-action" &&
            l !== "on-click-action"
          ) {
            var s = e[l];
            Array.isArray(s)
              ? (i[l] = s.map(function (e) {
                  return e !== null && typeof e == "object" && !Array.isArray(e)
                    ? n(e, r + 1)
                    : e;
                }))
              : s !== null && typeof s == "object"
                ? (i[l] = n(s, r + 1))
                : (i[l] = s);
          }
        return i;
      }
      return n(e, 0);
    }
    function L(e, t) {
      var n =
        r("structuredClone") && !t
          ? r("structuredClone")(e)
          : JSON.parse(JSON.stringify(e));
      return (
        (e.type ===
          o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.RADIOBUTTONS_GROUP ||
          e.type ===
            o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CHECKBOX_GROUP ||
          e.type === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.DROPDOWN ||
          e.type ===
            o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CHIPS_SELECTOR) &&
          n["data-source"] != null &&
          n["data-source"] instanceof Array &&
          (n["data-source"] = n["data-source"].map(function (e) {
            var t = {
              id: e.id,
              title: e.title,
              description: e.description,
              metadata: e.metadata,
            };
            return t;
          })),
        n["on-click-action"] != null && (n["on-click-action"] = void 0),
        n["on-select-action"] != null && (n["on-select-action"] = void 0),
        n["on-unselect-action"] != null && (n["on-unselect-action"] = void 0),
        n
      );
    }
    function E(e, t, n) {
      if (
        e.type === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CALENDAR_PICKER &&
        e.mode === "range" &&
        typeof e.label == "object"
      ) {
        var r,
          a,
          i = e.label,
          l = i["end-date"],
          s = i["start-date"];
        return {
          "start-date":
            (r = o("WAFlowsStateParser").parsePropertyValue(
              s,
              t.external,
              n,
            )) != null
              ? r
              : s,
          "end-date":
            (a = o("WAFlowsStateParser").parsePropertyValue(
              l,
              t.external,
              n,
            )) != null
              ? a
              : l,
        };
      } else {
        var u;
        return (u = o("WAFlowsStateParser").parsePropertyValue(
          String(e.label),
          t.external,
          n,
        )) != null
          ? u
          : String(e.label);
      }
    }
    function k(e, t, n, a) {
      switch (e.type) {
        case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.TEXT_INPUT:
        case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.TEXT_AREA:
        case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.OPT_IN:
        case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.DOCUMENT_PICKER:
        case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.PHOTO_PICKER:
        case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CALENDAR_PICKER:
          return t;
        case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.DATE_PICKER:
          return x(t, a);
        case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.RADIOBUTTONS_GROUP:
        case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.DROPDOWN:
          return I(e, t, n);
        case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CHIPS_SELECTOR:
        case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CHECKBOX_GROUP:
          return T(e, t, n);
        case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.SEAT_SELECTOR:
          return D(e, t, n);
        default:
          throw r("err")("Component not supported in response message");
      }
    }
    function I(e, t, n) {
      var r = o(
        "WAFlowsDynamicDataUtils",
      ).bindDataSourceForSelectableComponents(e["data-source"], n);
      if (r instanceof Array) {
        var a, i;
        return (a =
          (i = r.find(function (e) {
            return e.id === t;
          })) == null
            ? void 0
            : i.title) != null
          ? a
          : "";
      }
      return t;
    }
    function T(e, t, n) {
      var r = o(
        "WAFlowsDynamicDataUtils",
      ).bindDataSourceForSelectableComponents(e["data-source"], n);
      return r instanceof Array && t != null && t instanceof Array
        ? t.map(function (e) {
            var t, n;
            return (t =
              (n = r.find(function (t) {
                return t.id === e;
              })) == null
                ? void 0
                : n.title) != null
              ? t
              : "";
          })
        : t;
    }
    function D(e, t, n) {
      var r = o(
        "WAFlowsDynamicDataUtils",
      ).bindDataSourceForSelectableComponents(e["seat-map"], n);
      if (Array.isArray(r) && t != null && Array.isArray(t)) {
        var a = new Map();
        for (var i of r)
          if (Array.isArray(i)) {
            for (var l of i)
              if ((l == null ? void 0 : l.id) != null) {
                var s;
                a.set(l.id, (s = l.label) != null ? s : l.id);
              }
          }
        return t.map(function (e) {
          var t;
          return (t = a.get(e)) != null ? t : e;
        });
      }
      return t;
    }
    function x(e, t) {
      if (typeof e != "string" || e.length === 0) return "";
      var n = /^\d{10,}$/;
      return n.test(e)
        ? o("WAFlowsDatePickerUtils").formatDisplayDate(
            new Date(parseInt(e, 10)),
            t.locale,
          )
        : o("WAFlowsDatePickerUtils").getDisplayDate(e, t.locale);
    }
    function $(e, t, n, r, a, i) {
      var l = t.version === 2 ? t.screens : t.response,
        s = !0;
      l.forEach(function (t, c) {
        if (t.components.length !== 0) {
          var d = [];
          (t.components.forEach(function (e, o) {
            var i = e.isSensitive,
              l = e.sensitive,
              c = babelHelpers.objectWithoutPropertiesLoose(e, u),
              m = M(
                babelHelpers.extends({}, c, { sensitive: l != null ? l : i }),
                n,
                r !== "android",
                t.screenState,
                s,
                a,
              );
            ((s = !1), m != null && d.push(m));
          }),
            d.length !== 0 &&
              (i || e.push(N(r, t.title)),
              e.push.apply(e, d),
              r === "android" &&
                c !== l.length - 1 &&
                e.push({
                  type: o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES
                    .HORIZONTAL_DIVIDER,
                })));
        }
      });
    }
    function P(e, t, n, a, i, l, s) {
      (a === void 0 && (a = !1), l === void 0 && (l = !1));
      var u = [];
      return (
        e === o("WAFlowsInitEnvironmentTypes").ResponseViewer.CONSUMER &&
        typeof t.version != "number"
          ? u.push({
              type: o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.TEXT_BODY,
              text: r("justknobx")._("8178")
                ? "Couldn't show response."
                : "Unable to show response.",
            })
          : ($(u, t, e, n, a, l),
            a &&
              e === o("WAFlowsInitEnvironmentTypes").ResponseViewer.SMB &&
              u.push(
                B({
                  label: o("WAFlowsLocalization")
                    .getCopyAllButtonLabelFbt()
                    .toString(),
                  onClickAction: {
                    name: o("WAFlowsActionHandlerTypes").WELJActionType
                      .COPY_TEXT,
                    textToCopy: W(t),
                    notificationTitle: o("WAFlowsLocalization")
                      .getCopyAllNotficationTitleFbt()
                      .toString(),
                  },
                }),
              ),
            i === "download" &&
              u.push(
                B({
                  label: o("WAFlowsLocalization")
                    .getDownloadButtonLabelFbt()
                    .toString(),
                  onClickAction: {
                    name: o("WAFlowsActionHandlerTypes").WELJActionType
                      .DOWNLOAD_RESPONSES,
                    flowId: s != null ? s : "",
                  },
                }),
              )),
        {
          version: A(),
          routing_model: { RESPONSE: [] },
          screens: [
            {
              id: d,
              title: w(e),
              layout: {
                type: o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.SINGLE_COLUMN,
                children: u,
              },
            },
          ],
        }
      );
    }
    function N(e, t) {
      return e === "android"
        ? {
            type: o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.TEXT_CAPTION,
            text: t,
            "font-weight": "bold",
          }
        : {
            type: o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.TEXT_BODY,
            text: t,
            "font-weight": "bold",
          };
    }
    function M(e, t, n, a, i, l) {
      l === void 0 && (l = !1);
      var s = r("unsafeCast")(e.type),
        u =
          t === o("WAFlowsInitEnvironmentTypes").ResponseViewer.SMB ||
          e.sensitive !== !0,
        d;
      if (e.value != null) {
        if (_()) {
          var m = e.componentData,
            p;
          (m != null &&
            (p = {
              componentMeta: m.componentMeta,
              componentValue: m.componentValue,
            }),
            (d = babelHelpers.extends({}, e, {
              componentData: m != null ? p : void 0,
              screenState: a,
              value:
                u || s === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.OPT_IN
                  ? e.value
                  : c,
            })));
        } else
          d = babelHelpers.extends({}, e, {
            value:
              u || s === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.OPT_IN
                ? e.value
                : c,
          });
        var f = {
          type: o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.RESPONSE_VIEW,
          componentResponse: d,
          componentType: s,
          addDivider: n,
          isFirstComponent: i,
        };
        return (
          l &&
            t === o("WAFlowsInitEnvironmentTypes").ResponseViewer.SMB &&
            (f["on-click-action"] = {
              name: o("WAFlowsActionHandlerTypes").WELJActionType.COPY_TEXT,
              textToCopy: q(e.value),
              notificationTitle: o("WAFlowsLocalization")
                .getItemCopyNotficationTitleFbt(q(e.label))
                .toString(),
            }),
          f
        );
      }
    }
    function w(e) {
      return e === o("WAFlowsInitEnvironmentTypes").ResponseViewer.CONSUMER
        ? s._(/*BTDS*/ "").toString()
        : s._(/*BTDS*/ "").toString();
    }
    function A() {
      return 700;
    }
    function F(e) {
      return (
        (e == null ? void 0 : e.environment.response_message) != null &&
        (e == null ? void 0 : e.environment.response_viewer) != null
      );
    }
    async function O(e, t, n) {
      var a = o("WAFlowsEntryPointUtils").parseFlowInitData(t);
      if (a != null) {
        var i = await r("JSResource")("goURI")
          .__setRef("WAFlowsResponseHandler")
          .load();
        i(
          "/flows/preload/?" +
            new URLSearchParams({
              configuration_overrides: JSON.stringify(n),
              init_data: JSON.stringify(
                babelHelpers.extends({}, a, {
                  response_message:
                    e.extension_message_response.params.response_message,
                  flow_json: "",
                  flow_action: "navigate",
                  flow_action_payload: btoa(
                    JSON.stringify({ screen: "RESPONSE", data: {} }),
                  ),
                }),
              ),
            }).toString(),
        );
      }
    }
    function B(e) {
      var t = e.label,
        n = e.onClickAction;
      return babelHelpers.extends(
        { type: o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.FOOTER, label: t },
        n && { "on-click-action": n },
      );
    }
    function W(e) {
      var t = e.version === 2 ? e.screens : e.response,
        n = [];
      return (
        t.forEach(function (e) {
          e.components.forEach(function (e) {
            n.push(q(e.value));
          });
        }),
        n.join(",")
      );
    }
    function q(e) {
      if (e == null) return "";
      if (o("WAFlowsNativeExperienceUtils").isMediaPickerFormValue(e))
        return U(
          e.__wa_flows_uploaded_media__
            .map(function (e) {
              var t;
              return (t = e.file_name) != null ? t : "";
            })
            .join(","),
        );
      if (o("WAFlowsFormValidationUtils").isComponentValueArrayOfStr(e))
        return U(e.join(","));
      if (typeof e == "object") {
        if (
          Object.prototype.hasOwnProperty.call(e, "start-date") &&
          Object.prototype.hasOwnProperty.call(e, "end-date")
        ) {
          var t = r("unsafeCast")(e);
          return U(t["start-date"] + ", " + t["end-date"]);
        }
        return JSON.stringify(e);
      }
      return String(e);
    }
    function U(e) {
      return "[" + e + "]";
    }
    ((l.RESPONSE_SCREEN_ID = d),
      (l.RESPONSE_SCREEN_LOGGING_CLICK_TYPE = m),
      (l.buildResponseMessage = g),
      (l.removeBase64EncodingsFromStateV2 = v),
      (l.removeActionsFromStateData = R),
      (l.buildResponseFlowJSON = P),
      (l.isResponseFlow = F),
      (l.redirectToResponse = O),
      (l.getCSVFromResponse = W));
  },
  226,
);
