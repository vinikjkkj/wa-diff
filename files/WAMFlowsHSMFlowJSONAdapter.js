__d(
  "WAMFlowsHSMFlowJSONAdapter",
  [
    "fbt",
    "IntlVariations",
    "WAFlowsTypes",
    "WAMFlowsHSMComponentLabels",
    "WAMFlowsHSMEditorUtils",
    "isStringNotNullAndNotWhitespaceOnly",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = { __example__: "Example", type: "string" },
      u = { __example__: !1, type: "boolean" },
      c = { __example__: [], items: { type: "string" }, type: "array" },
      d = "OPTIN_SCREEN_",
      m = function (t, n, r) {
        return (
          _(n) +
          "_" +
          o("WAMFlowsHSMEditorUtils").removeComponentId(t) +
          "_" +
          r
        );
      },
      p = function (t, n) {
        return t.includes(_(n));
      },
      _ = function (t) {
        return "screen_" + t;
      },
      f = function (t, n) {
        return t.components.reduce(function (e, t) {
          var r = t.flowJSON,
            o = r.name,
            a = r.type;
          return (a === n && o != null && (e[o] = !0), e);
        }, {});
      },
      g = function (n) {
        var t = {},
          r = {},
          o = {},
          a = {},
          i = {},
          l = {},
          s = function () {
            var s,
              _,
              g,
              h = d[0],
              y = d[1],
              C = (s = n[h - 1]) == null ? void 0 : s.id;
            ((t[y.id] = [].concat(
              y.components
                .filter(function (e) {
                  return Object.prototype.hasOwnProperty.call(
                    e.flowJSON,
                    "name",
                  );
                })
                .map(function (e) {
                  var t;
                  return (t = e.flowJSON.name) != null ? t : "";
                }),
            )),
              (r[y.id] = babelHelpers.extends(
                {},
                t[y.id].reduce(function (e, t, n) {
                  var r = m(t, h, n);
                  return ((e[r] = t), e);
                }, {}),
                (_ = r[C]) != null ? _ : {},
              )),
              (o[y.id] = Object.entries(r[y.id]).reduce(function (e, t) {
                var n = t[0],
                  r = t[1];
                return (
                  p(n, h)
                    ? (e[n] = "${form." + r + "}")
                    : (e[n] = "${data." + n + "}"),
                  e
                );
              }, {})),
              (i = babelHelpers.extends({}, i, f(y, "CheckboxGroup"))),
              (l = babelHelpers.extends({}, l, f(y, "OptIn"))),
              (a[y.id] = Object.entries((g = r[C]) != null ? g : {}).reduce(
                function (t, n) {
                  var r = n[0],
                    o = n[1];
                  return (
                    l[o] ? (t[r] = u) : i[o] ? (t[r] = c) : (t[r] = e),
                    t
                  );
                },
                {},
              )));
          };
        for (var d of n.entries()) s();
        return { data: a, payload: o };
      };
    function h(e, t, n, a) {
      var i = e.filter(function (e) {
          return !e.id.includes(d);
        }),
        l = g(i),
        u = l.data,
        c = l.payload,
        m = e.filter(function (e) {
          return e.id.includes(d);
        });
      return {
        screens: [].concat(
          i.map(function (e, t, i) {
            var l,
              d = e.components.map(function (e) {
                return e.flowJSON;
              }),
              m = t === i.length - 1,
              p = s._(/*BTDS*/ "");
            return {
              data: u[e.id],
              id: e.id,
              layout: {
                children: [
                  {
                    children: [].concat(
                      d,
                      n === !0
                        ? r("isStringNotNullAndNotWhitespaceOnly")(
                            e.privacyPolicyURL,
                          )
                          ? [
                              {
                                markdown: !0,
                                text: s
                                  ._(/*BTDS*/ "", [
                                    s._name(
                                      "Business name",
                                      a != null ? a : "the business",
                                      r("IntlVariations").GENDER_UNKNOWN,
                                    ),
                                    s._param(
                                      "Privacy Policy Link",
                                      "[" +
                                        p.toString() +
                                        "](" +
                                        ((l = e.privacyPolicyURL) != null
                                          ? l
                                          : "") +
                                        ")",
                                    ),
                                  ])
                                  .toString(),
                                type: "TextCaption",
                              },
                            ]
                          : [
                              {
                                markdown: !0,
                                text: s
                                  ._(/*BTDS*/ "", [
                                    s._name(
                                      "Business name",
                                      a != null ? a : "the business",
                                      r("IntlVariations").GENDER_UNKNOWN,
                                    ),
                                  ])
                                  .toString(),
                                type: "TextCaption",
                              },
                            ]
                        : [],
                      [
                        {
                          label: e.buttonTitle,
                          "on-click-action": m
                            ? { name: "complete", payload: c[e.id] }
                            : {
                                name: "navigate",
                                next: { name: i[t + 1].id, type: "screen" },
                                payload: c[e.id],
                              },
                          type: "Footer",
                        },
                      ],
                    ),
                    name: "flow_path",
                    type: "Form",
                  },
                ],
                type: o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.SINGLE_COLUMN,
              },
              terminal: m ? !0 : void 0,
              title: e.title,
            };
          }),
          m.map(function (e) {
            var t = e.components.map(function (e) {
              return e.flowJSON;
            });
            return {
              data: {},
              id: e.id,
              layout: {
                children: [
                  { children: [].concat(t), name: "flow_path", type: "Form" },
                ],
                type: o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.SINGLE_COLUMN,
              },
              title: e.title,
            };
          }),
        ),
        version: t,
      };
    }
    function y(e) {
      return e.screens.map(function (e) {
        var t,
          n,
          r,
          a,
          i =
            (t = e.layout) == null ||
            (t = t.children) == null ||
            (t = t[0]) == null
              ? void 0
              : t.children,
          l =
            i == null
              ? void 0
              : i.find(function (e) {
                  return e.type === "Footer";
                });
        return {
          buttonTitle:
            (l == null ? void 0 : l.label) != null
              ? String(l == null ? void 0 : l.label)
              : "Continue",
          components: ((n =
            (r = e.layout) == null ||
            (r = r.children) == null ||
            (r = r[0]) == null
              ? void 0
              : r.children) != null
            ? n
            : []
          )
            .filter(function (e) {
              switch (e.type) {
                case "CalendarPicker":
                case "CheckboxGroup":
                case "DatePicker":
                case "Dropdown":
                case "Image":
                case "OptIn":
                case "RadioButtonsGroup":
                case "TextArea":
                case "TextBody":
                case "TextCaption":
                case "TextHeading":
                case "TextInput":
                case "TextSubheading":
                  return Object.prototype.hasOwnProperty.call(
                    o("WAMFlowsHSMComponentLabels").COMPONENT_LABELS,
                    e.type,
                  );
                default:
                  return !1;
              }
            })
            .filter(function (e) {
              return (
                e.type !== "TextCaption" ||
                !Object.prototype.hasOwnProperty.call(e, "markdown")
              );
            })
            .map(function (e) {
              var t;
              return {
                flowJSON: e,
                id:
                  (t = e.name) != null
                    ? t
                    : o("WAMFlowsHSMEditorUtils").generateComponentId(e.type),
              };
            }),
          id: e.id,
          privacyPolicyURL: C(i),
          title: (a = e.title) != null ? a : "",
        };
      });
    }
    function C(e) {
      var t,
        n =
          e == null
            ? void 0
            : e.find(function (e) {
                return (
                  e.type === "TextCaption" &&
                  Object.prototype.hasOwnProperty.call(e, "markdown")
                );
              }),
        r = n == null || (t = n.text) == null ? void 0 : t.toString();
      if (r != null && r.includes("(") && r.includes(")"))
        return r.slice(r.indexOf("(") + 1, r.indexOf(")"));
    }
    ((l.OPTIN_PREFIX = d), (l.generateFlowJSON = h), (l.parseFlowJSON = y));
  },
  226,
);
