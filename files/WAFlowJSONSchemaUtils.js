__d(
  "WAFlowJSONSchemaUtils",
  [
    "invariant",
    "WAFlowJSONConstants",
    "WAFlowJSONRootSchema",
    "WAFlowJSONValidationError",
    "WAFlowsTypes",
    "WAFlowsVersionUtils",
    "justknobx",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["format", "pattern"],
      u = ["pattern"],
      c,
      d,
      m = "^\\$\\{data\\..+\\}$",
      p = "^\\$\\{(screen\\.([a-zA-Z,_]*)\\.)?(data|form)(\\.[\\w-]+)+\\}",
      _ =
        "(^\\$\\{(screen\\.([a-zA-Z,_]*)\\.)?(data|form)(\\.[\\w-]+)+\\}|^`.+`)",
      f = "^\\$\\{external_data\\..+\\}$",
      g = "^(?!\\$\\{data\\..+\\}$)",
      h = "^(?!\\$\\{(screen\\.([a-zA-Z,_]*)\\.)?(data|form)\\..+\\})",
      y = "^(?=[\\s\\S]*\\S)[\\r\\n]*[^\\r\\n\\u2028\\u2029]",
      C = "^.*$",
      b = "^[a-zA-Z][a-zA-Z0-9-_]*$",
      v = "^\\$\\{(screen\\.([a-zA-Z,_]*)\\.)?(data|form)\\..*\\}$",
      S = "^#([A-Fa-f0-9]{6})$",
      R = "^(?!`.*`$)",
      L = Object.freeze({
        STRING: (c = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_STRING,
        BOOLEAN: c.WA_FLOW_JSON_SCHEMA_BOOLEAN,
        NUMBER: c.WA_FLOW_JSON_SCHEMA_NUMBER,
        INTEGER: c.WA_FLOW_JSON_SCHEMA_INTEGER,
      });
    function E(e, t, n, r) {
      if (
        (n === void 0 && (n = void 0),
        r === void 0 && (r = !0),
        Object.keys(L).find(function (e) {
          return e.toLowerCase() === t;
        }))
      ) {
        var a = { type: t };
        if (
          (n != null &&
            typeof n == "object" &&
            Object.keys(n).length >= 0 &&
            (a = babelHelpers.extends({}, n, a)),
          t === L.STRING || !r)
        )
          return a;
        e != null || s(0, 82415);
        var i = I(e);
        return { oneOf: [a, i] };
      }
      throw o("WAFlowJSONValidationError")
        .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.UNSUPPORTED_VALUE_TYPE.concat(
          ": ",
        )
        .concat(String(t));
    }
    function k() {
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
        pattern: f,
      };
    }
    function I(e) {
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
        pattern: T(e),
      };
    }
    function T(e) {
      return +e <= 301 ? m : +e >= 600 && r("justknobx")._("384") ? _ : p;
    }
    function D(e) {
      return E(e, L.INTEGER);
    }
    function x(e, t) {
      return (t === void 0 && (t = void 0), E(e, L.INTEGER, t, !1));
    }
    function $(e, t) {
      return (
        t === void 0 && (t = void 0),
        babelHelpers.extends({}, E(e, L.NUMBER, t))
      );
    }
    function P(e) {
      return E(e, L.BOOLEAN);
    }
    function N() {
      var e = { oneOf: [{ type: L.BOOLEAN }, { type: L.STRING }] };
      return e;
    }
    function M() {
      return { type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING };
    }
    function w(t, n) {
      if ((n === void 0 && (n = void 0), +t >= 600)) {
        var r = n != null ? n : {},
          o = r.format,
          a = r.pattern,
          i = babelHelpers.objectWithoutPropertiesLoose(r, e),
          l = babelHelpers.extends(
            {
              allOf: [
                { type: "string", pattern: y },
                babelHelpers.extends(
                  { type: "string", pattern: a != null ? a : void 0 },
                  o ? { format: o } : {},
                ),
              ],
            },
            i,
          );
        return babelHelpers.extends({}, E(t, L.STRING), l);
      } else return babelHelpers.extends({}, E(t, L.STRING), n);
    }
    function A(e, t, n) {
      return (
        n === void 0 && (n = void 0),
        !t.length !== 0 || s(0, 82414),
        babelHelpers.extends({}, w(e, n), { enum: t })
      );
    }
    function F(e) {
      return { oneOf: [o("WAFlowJSONRootSchema").getWAFlowsURISchema(), I(e)] };
    }
    function O(e, t) {
      t === void 0 && (t = void 0);
      var n = babelHelpers.extends({}, t, { pattern: y });
      return w(e, n);
    }
    function B(e, t) {
      t === void 0 && (t = void 0);
      var n = babelHelpers.extends({}, t, { pattern: y }),
        r = w(e, n);
      return {
        oneOf: [
          r,
          {
            type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_ARRAY,
            items: r,
          },
        ],
      };
    }
    function W(e) {
      return {
        oneOf: [].concat(e.oneOf ? e.oneOf : [e], [
          {
            type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
            properties: { "start-date": e, "end-date": e },
          },
        ]),
      };
    }
    function q(e, t) {
      return (
        t === void 0 && (t = void 0),
        babelHelpers.extends({ oneOf: [I(e), U(e)] }, t)
      );
    }
    function U(e) {
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
        contentEncoding: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_BASE64,
        pattern: V(e),
      };
    }
    function V(e) {
      return +e <= 301 ? g : h;
    }
    function H(e, t, n, r) {
      return (
        n === void 0 && (n = {}),
        r === void 0 && (r = !1),
        {
          oneOf: [
            {
              type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_ARRAY,
              minItems: 1,
              items: {
                type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
                required: t,
                additionalProperties: !1,
                properties: n,
              },
            },
            r ? k() : I(e),
          ],
        }
      );
    }
    function G() {
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_ARRAY,
        minItems: 1,
        items: { type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING },
      };
    }
    function z(e, t, n) {
      return (
        n === void 0 && (n = 1),
        {
          type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_ARRAY,
          minItems: n,
          items: { type: e, enum: t },
        }
      );
    }
    function j(e, t, n, r) {
      return (r === void 0 && (r = 1), { oneOf: [z(t, n, r), I(e)] });
    }
    function K(e, t, n) {
      return (
        n === void 0 && (n = {}),
        {
          if: { type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING },
          then: I(e),
          else: {
            type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_ARRAY,
            items: babelHelpers.extends({ type: t }, n),
          },
        }
      );
    }
    function Q(e, t) {
      return { oneOf: [w(e, { enum: t }), I(e)] };
    }
    function X() {
      return ["id", "title"];
    }
    function Y(e, t) {
      var n;
      return {
        oneOf: [
          {
            type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
            patternProperties: ((n = {}), (n[C] = { type: t }), n),
          },
          I(e),
        ],
      };
    }
    function J(e) {
      var t;
      return {
        oneOf: [
          {
            type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
            patternProperties: ((t = {}), (t[C] = {}), t),
          },
          I(e),
        ],
      };
    }
    function Z(e) {
      var t;
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
        patternProperties:
          ((t = {}),
          (t[b] = {
            type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_ARRAY,
            items: { oneOf: e },
          }),
          t),
        propertyNames: { pattern: b },
      };
    }
    function ee() {
      return { oneOf: [M(), te()] };
    }
    function te() {
      var e;
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
        minProperties: 1,
        patternProperties:
          ((e = {}),
          (e[C] = {
            type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
            pattern: y,
          }),
          e),
      };
    }
    function ne(e) {
      var t = {
          type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
          pattern: y,
        },
        n = { title: t, description: t, metadata: t },
        r = e ? ["title"] : [];
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
        properties: n,
        additionalProperties: !1,
        required: r,
      };
    }
    function re(e) {
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
        properties: {
          image: U(e),
          "alt-text": {
            type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
            pattern: y,
          },
        },
        required: ["image"],
        additionalProperties: !1,
      };
    }
    function oe(e, t) {
      var n = o("WAFlowJSONConstants").ComponentRefKey.cast(
        t.$ref.replace(o("WAFlowJSONConstants").JSON_SCHEMA_REF_PREFIX, ""),
      );
      n != null || s(0, 84742);
      var r = ie(e, n);
      return (r != null || s(0, 84742), r);
    }
    function ae(e, t, n) {
      var r, o;
      return (r =
        (o = e.$defs) == null || (o = o.$components) == null
          ? void 0
          : o[ce(t, n)]) != null
        ? r
        : { properties: {} };
    }
    function ie(e, t) {
      var n, r;
      return (n =
        (r = e.$defs) == null || (r = r.$components) == null ? void 0 : r[t]) !=
        null
        ? n
        : { properties: {} };
    }
    var le = new Map([
        [
          (d = o("WAFlowsTypes")).WA_FLOWS_COMPONENT_NAMES.EMBEDDED_LINK,
          c.ComponentRefKey.EMBEDDED_LINK,
        ],
        [d.WA_FLOWS_COMPONENT_NAMES.FOOTER, c.ComponentRefKey.FOOTER],
        [d.WA_FLOWS_COMPONENT_NAMES.FORM, c.ComponentRefKey.FORM],
        [d.WA_FLOWS_COMPONENT_NAMES.IMAGE, c.ComponentRefKey.IMAGE],
        [d.WA_FLOWS_COMPONENT_NAMES.TEXT_BODY, c.ComponentRefKey.TEXT_BODY],
        [
          d.WA_FLOWS_COMPONENT_NAMES.TEXT_CAPTION,
          c.ComponentRefKey.TEXT_CAPTION,
        ],
        [
          d.WA_FLOWS_COMPONENT_NAMES.TEXT_HEADING,
          c.ComponentRefKey.TEXT_HEADING,
        ],
        [
          d.WA_FLOWS_COMPONENT_NAMES.TEXT_SUBHEADING,
          c.ComponentRefKey.TEXT_SUBHEADING,
        ],
        [d.WA_FLOWS_COMPONENT_NAMES.RICH_TEXT, c.ComponentRefKey.RICH_TEXT],
        [
          d.WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST,
          c.ComponentRefKey.NAVIGATION_LIST,
        ],
        [
          d.WA_FLOWS_COMPONENT_NAMES.IMAGE_CAROUSEL,
          c.ComponentRefKey.IMAGE_CAROUSEL,
        ],
      ]),
      se = new Map([
        [d.WA_FLOWS_COMPONENT_NAMES.CHECKBOX_GROUP, c.ComponentRefKey.CBG],
        [d.WA_FLOWS_COMPONENT_NAMES.DROPDOWN, c.ComponentRefKey.DROPDOWN],
        [d.WA_FLOWS_COMPONENT_NAMES.DATE_PICKER, c.ComponentRefKey.DATE_PICKER],
        [d.WA_FLOWS_COMPONENT_NAMES.IF, c.ComponentRefKey.IF],
        [d.WA_FLOWS_COMPONENT_NAMES.OPT_IN, c.ComponentRefKey.OPTIN],
        [d.WA_FLOWS_COMPONENT_NAMES.RADIOBUTTONS_GROUP, c.ComponentRefKey.RBG],
        [d.WA_FLOWS_COMPONENT_NAMES.TEXT_AREA, c.ComponentRefKey.TEXT_AREA],
        [d.WA_FLOWS_COMPONENT_NAMES.TEXT_INPUT, c.ComponentRefKey.TEXT_INPUT],
        [d.WA_FLOWS_COMPONENT_NAMES.SWITCH, c.ComponentRefKey.SWITCH],
        [
          d.WA_FLOWS_COMPONENT_NAMES.PHOTO_PICKER,
          c.ComponentRefKey.PHOTO_PICKER,
        ],
        [
          d.WA_FLOWS_COMPONENT_NAMES.DOCUMENT_PICKER,
          c.ComponentRefKey.DOCUMENT_PICKER,
        ],
        [
          d.WA_FLOWS_COMPONENT_NAMES.CALENDAR_PICKER,
          c.ComponentRefKey.CALENDAR_PICKER,
        ],
        [
          d.WA_FLOWS_COMPONENT_NAMES.CHIPS_SELECTOR,
          c.ComponentRefKey.CHIPS_SELECTOR,
        ],
        [
          d.WA_FLOWS_COMPONENT_NAMES.SEAT_SELECTOR,
          c.ComponentRefKey.SEAT_SELECTOR,
        ],
      ]),
      ue = new Map([
        [
          d.WA_FLOWS_COMPONENT_NAMES.CHECKBOX_GROUP,
          c.ComponentRefKey.CBG_NO_FORM,
        ],
        [
          d.WA_FLOWS_COMPONENT_NAMES.DROPDOWN,
          c.ComponentRefKey.DROPDOWN_NO_FORM,
        ],
        [
          d.WA_FLOWS_COMPONENT_NAMES.DATE_PICKER,
          c.ComponentRefKey.DATE_PICKER_NO_FORM,
        ],
        [d.WA_FLOWS_COMPONENT_NAMES.IF, c.ComponentRefKey.IF_NO_FORM],
        [d.WA_FLOWS_COMPONENT_NAMES.OPT_IN, c.ComponentRefKey.OPTIN_NO_FORM],
        [
          d.WA_FLOWS_COMPONENT_NAMES.RADIOBUTTONS_GROUP,
          c.ComponentRefKey.RBG_NO_FORM,
        ],
        [
          d.WA_FLOWS_COMPONENT_NAMES.TEXT_AREA,
          c.ComponentRefKey.TEXT_AREA_NO_FORM,
        ],
        [
          d.WA_FLOWS_COMPONENT_NAMES.TEXT_INPUT,
          c.ComponentRefKey.TEXT_INPUT_NO_FORM,
        ],
        [d.WA_FLOWS_COMPONENT_NAMES.SWITCH, c.ComponentRefKey.SWITCH_NO_FORM],
        [
          d.WA_FLOWS_COMPONENT_NAMES.PHOTO_PICKER,
          c.ComponentRefKey.PHOTO_PICKER_NO_FORM,
        ],
        [
          d.WA_FLOWS_COMPONENT_NAMES.DOCUMENT_PICKER,
          c.ComponentRefKey.DOCUMENT_PICKER_NO_FORM,
        ],
        [
          d.WA_FLOWS_COMPONENT_NAMES.CALENDAR_PICKER,
          c.ComponentRefKey.CALENDAR_PICKER_NO_FORM,
        ],
        [
          d.WA_FLOWS_COMPONENT_NAMES.CHIPS_SELECTOR,
          c.ComponentRefKey.CHIPS_SELECTOR_NO_FORM,
        ],
        [
          d.WA_FLOWS_COMPONENT_NAMES.SEAT_SELECTOR,
          c.ComponentRefKey.SEAT_SELECTOR_NO_FORM,
        ],
      ]);
    function ce(e, t) {
      var n,
        r = t ? se : ue;
      return (n = r.get(e)) != null ? n : le.get(e);
    }
    function de(e) {
      switch (e) {
        case o("WAFlowJSONConstants").ComponentRefKey.CBG:
        case o("WAFlowJSONConstants").ComponentRefKey.CBG_NO_FORM:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CHECKBOX_GROUP;
        case o("WAFlowJSONConstants").ComponentRefKey.RBG:
        case o("WAFlowJSONConstants").ComponentRefKey.RBG_NO_FORM:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.RADIOBUTTONS_GROUP;
        case o("WAFlowJSONConstants").ComponentRefKey.SWITCH:
        case o("WAFlowJSONConstants").ComponentRefKey.SWITCH_NO_FORM:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.SWITCH;
        case o("WAFlowJSONConstants").ComponentRefKey.DATE_PICKER:
        case o("WAFlowJSONConstants").ComponentRefKey.DATE_PICKER_NO_FORM:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.DATE_PICKER;
        case o("WAFlowJSONConstants").ComponentRefKey.OPTIN:
        case o("WAFlowJSONConstants").ComponentRefKey.OPTIN_NO_FORM:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.OPT_IN;
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_AREA:
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_AREA_NO_FORM:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.TEXT_AREA;
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_INPUT:
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_INPUT_NO_FORM:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.TEXT_INPUT;
        case o("WAFlowJSONConstants").ComponentRefKey.PHOTO_PICKER:
        case o("WAFlowJSONConstants").ComponentRefKey.PHOTO_PICKER_NO_FORM:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.PHOTO_PICKER;
        case o("WAFlowJSONConstants").ComponentRefKey.DOCUMENT_PICKER:
        case o("WAFlowJSONConstants").ComponentRefKey.DOCUMENT_PICKER_NO_FORM:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.DOCUMENT_PICKER;
        case o("WAFlowJSONConstants").ComponentRefKey.EMBEDDED_LINK:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.EMBEDDED_LINK;
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_BODY:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.TEXT_BODY;
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_CAPTION:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.TEXT_CAPTION;
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_HEADING:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.TEXT_HEADING;
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_SUBHEADING:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.TEXT_SUBHEADING;
        case o("WAFlowJSONConstants").ComponentRefKey.DROPDOWN:
        case o("WAFlowJSONConstants").ComponentRefKey.DROPDOWN_NO_FORM:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.DROPDOWN;
        case o("WAFlowJSONConstants").ComponentRefKey.IMAGE:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.IMAGE;
        case o("WAFlowJSONConstants").ComponentRefKey.FOOTER:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.FOOTER;
        case o("WAFlowJSONConstants").ComponentRefKey.FORM:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.FORM;
        case o("WAFlowJSONConstants").ComponentRefKey.IF:
        case o("WAFlowJSONConstants").ComponentRefKey.IF_NO_FORM:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.IF;
        case o("WAFlowJSONConstants").ComponentRefKey.NAVIGATION_LIST:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST;
        case o("WAFlowJSONConstants").ComponentRefKey.RICH_TEXT:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.RICH_TEXT;
        case o("WAFlowJSONConstants").ComponentRefKey.CALENDAR_PICKER:
        case o("WAFlowJSONConstants").ComponentRefKey.CALENDAR_PICKER_NO_FORM:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CALENDAR_PICKER;
        case o("WAFlowJSONConstants").ComponentRefKey.CHIPS_SELECTOR:
        case o("WAFlowJSONConstants").ComponentRefKey.CHIPS_SELECTOR_NO_FORM:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CHIPS_SELECTOR;
        case o("WAFlowJSONConstants").ComponentRefKey.IMAGE_CAROUSEL:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.IMAGE_CAROUSEL;
        case o("WAFlowJSONConstants").ComponentRefKey.SEAT_SELECTOR:
        case o("WAFlowJSONConstants").ComponentRefKey.SEAT_SELECTOR_NO_FORM:
          return o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.SEAT_SELECTOR;
      }
    }
    function me(e) {
      var t;
      return (
        (t = {}),
        (t[o("WAFlowJSONConstants").JSON_SCHEMA_REF] =
          o("WAFlowJSONConstants").JSON_SCHEMA_REF_PREFIX + e.valueOf()),
        t
      );
    }
    function pe(e, t, n) {
      for (var r = [], a = 0; a < n.length; a++) {
        var i = n[a],
          l = e + "/" + a;
        if (
          i.type === o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FORM
        ) {
          var s = i,
            u = pe(l + "/children", !0, s.children);
          r.push.apply(r, u);
        } else if (
          i.type === o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.IF
        ) {
          var c,
            d = i,
            m = pe(l + "/then", t, d.then);
          r.push.apply(r, m);
          var p = pe(l + "/else", t, (c = d.else) != null ? c : []);
          r.push.apply(r, p);
        } else if (
          i.type === o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.SWITCH
        ) {
          var _ = i;
          for (var f of Object.entries(_.cases)) {
            var g = f[0],
              h = f[1],
              y = pe(l + "/cases/" + g, t, h);
            r.push.apply(r, y);
          }
        }
        r.push({ jsonPointer: l, isInsideForm: t, component: i });
      }
      return r;
    }
    function _e(e, t, n) {
      var a, i;
      if (
        (t === void 0 &&
          (t = function (t) {
            return r("unsafeCast")(t);
          }),
        (e == null ? void 0 : e.screens) == null ||
          (e == null || (a = e.screens) == null ? void 0 : a.length) === 0)
      )
        return r("unsafeCast")(n != null ? n : []);
      var l =
        e == null || (i = e.screens) == null
          ? void 0
          : i.reduce(
              function (e, n, r) {
                if (
                  n.layout != null &&
                  n.layout.type ===
                    o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.SINGLE_COLUMN
                ) {
                  var a =
                      "/" +
                      o("WAFlowJSONConstants").WA_FLOW_JSON_SCREENS +
                      "/" +
                      r +
                      "/" +
                      o("WAFlowJSONConstants").WA_FLOW_JSON_PROPERTY_LAYOUT +
                      "/" +
                      o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_CHILDREN,
                    i = pe(a, !1, n.layout.children);
                  for (var l of i) {
                    var s = t(l);
                    Array.isArray(e) ? e.push(s) : e instanceof Set && e.add(s);
                  }
                }
                return e;
              },
              n != null ? n : [],
            );
      return r("unsafeCast")(l);
    }
    function fe(e, t, n) {
      switch (e) {
        case o("WAFlowJSONConstants").ComponentRefKey.IF:
        case o("WAFlowJSONConstants").ComponentRefKey.IF_NO_FORM: {
          var a = r("unsafeCast")(t),
            i = n(a.properties.else.items.oneOf);
          ((a.properties.then.items.oneOf = i),
            (a.properties.else.items.oneOf = i));
          break;
        }
        case o("WAFlowJSONConstants").ComponentRefKey.SWITCH:
        case o("WAFlowJSONConstants").ComponentRefKey.SWITCH_NO_FORM: {
          var l = r("unsafeCast")(t);
          for (var s of Object.entries(l.properties.cases.patternProperties)) {
            var u = s[0],
              c = s[1];
            c.items.oneOf = n(c.items.oneOf);
          }
          break;
        }
        case o("WAFlowJSONConstants").ComponentRefKey.FORM: {
          var d = r("unsafeCast")(t);
          d.properties.children.items.oneOf = n(
            d.properties.children.items.oneOf,
          );
          break;
        }
        default:
          break;
      }
    }
    function ge(e, t) {
      var n =
        e == null
          ? void 0
          : e.filter(function (e) {
              var n = o("WAFlowJSONConstants").ComponentRefKey.cast(
                e.$ref.replace(
                  o("WAFlowJSONConstants").JSON_SCHEMA_REF_PREFIX,
                  "",
                ),
              );
              return n == null || t.has(n);
            });
      return n != null && n.length ? n : void 0;
    }
    function he(e, t) {
      var n,
        r,
        a,
        i = +o("WAFlowsVersionUtils").convertVersion(t.version),
        l = i >= 300 && i !== 502;
      if (!l) return e;
      var s = _e(
        t,
        function (e) {
          return ce(e.component.type, e.isInsideForm);
        },
        new Set(),
      );
      (e == null || (n = e.$defs) == null ? void 0 : n.$components) != null &&
        (e.$defs.$components = Object.fromEntries(
          Object.entries(e.$defs.$components).filter(function (e) {
            var t = e[0],
              n = e[1];
            return s.has(t);
          }),
        ));
      var u = function (t) {
        return ge(t, s);
      };
      for (var c of [
        o("WAFlowJSONConstants").ComponentRefKey.IF,
        o("WAFlowJSONConstants").ComponentRefKey.IF_NO_FORM,
        o("WAFlowJSONConstants").ComponentRefKey.SWITCH,
        o("WAFlowJSONConstants").ComponentRefKey.SWITCH_NO_FORM,
        o("WAFlowJSONConstants").ComponentRefKey.FORM,
      ]) {
        var d,
          m =
            e == null || (d = e.$defs) == null || (d = d.$components) == null
              ? void 0
              : d[c];
        m != null && fe(c, m, u);
      }
      var p =
        e == null ||
        (r = e.properties) == null ||
        (r = r.screens) == null ||
        (r = r.items) == null ||
        (r = r.properties) == null
          ? void 0
          : r.layout;
      if (
        (p == null || (a = p.properties) == null || (a = a.type) == null
          ? void 0
          : a.const) === o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.SINGLE_COLUMN
      ) {
        var _,
          f =
            p == null || (_ = p.properties) == null || (_ = _.children) == null
              ? void 0
              : _.items;
        (f == null ? void 0 : f.oneOf) != null && (f.oneOf = u(f.oneOf));
      }
      return e;
    }
    function ye(e, t) {
      if ((t === void 0 && (t = void 0), +e < 600)) return w(e, t);
      var n = t != null ? t : {},
        r = n.pattern,
        o = babelHelpers.objectWithoutPropertiesLoose(n, u),
        a = babelHelpers.extends(
          {
            allOf: [
              { type: "string", pattern: y },
              { type: "string", pattern: h },
              { type: "string", pattern: R },
              { type: "string", pattern: r != null ? r : void 0 },
            ],
          },
          o,
        );
      return babelHelpers.extends({}, E(e, L.STRING), a);
    }
    ((l.WA_FLOW_JSON_SCHEMA_DYNAMIC_DATA_PATTERN = m),
      (l.WA_FLOW_JSON_SCHEMA_DYNAMIC_DATA_PATTERN_V400 = p),
      (l.WA_FLOW_JSON_SCHEMA_DYNAMIC_DATA_PATTERN_V600 = _),
      (l.WA_FLOW_JSON_SCHEMA_NEGATED_DYNAMIC_DATA_PATTERN_V400 = h),
      (l.WA_FLOW_JSON_BLANK_STRING_NEGATE_PATTERN = y),
      (l.WA_FLOW_JSON_SCHEMA_ALL_DYNAMIC_DATA_PATTERN_V400 = v),
      (l.WA_FLOW_JSON_6_DIGIT_HEX_PATTERN = S),
      (l.WA_FLOW_JSON_NEGATED_NESTED_EXPRESSION_PATTERN = R),
      (l.getDynamicDataPatternSchema = I),
      (l.getDynamicPatternByVersion = T),
      (l.getIntegerBindingSchemaType = D),
      (l.getIntegerSchemaType = x),
      (l.getNumberBindingSchemaType = $),
      (l.getBoolBindingSchemaType = P),
      (l.getBoolOrStringBindingSchemaType = N),
      (l.getStringSchemaType = M),
      (l.getStringBindingSchemaType = w),
      (l.getStringEnumBindingSchemaType = A),
      (l.getUriStringBindingSchemaType = F),
      (l.getTextFieldSchema = O),
      (l.getMarkdownTextFieldSchema = B),
      (l.getCalendarPickerModeFieldSchema = W),
      (l.getBase64StringBindingSchemaType = q),
      (l.getArrayObjectBindingSchemaType = H),
      (l.getArrayStringBindingSchemaType = G),
      (l.getArrayEnumBindingSchemaType = z),
      (l.getArrayEnumDynamicBindingSchemaType = j),
      (l.getArrayPrimitiveStringBindingSchemaType = K),
      (l.getEnumDynamicBindingSchemaType = Q),
      (l.getRequiredDataSourceAttributes = X),
      (l.getSimpleObjectBindingSchema = Y),
      (l.getMixedObjectBindingSchema = J),
      (l.getMapOfComponentsArrayBindingSchemaType = Z),
      (l.getErrMsgObjectBindingSchemaType = ee),
      (l.getContentBlockSchemaType = ne),
      (l.getImageBlockSchemaType = re),
      (l.getComponentSchemaByReference = oe),
      (l.getComponentSchemaByComponentType = ae),
      (l.getComponentTypeByReferenceKey = de),
      (l.createJSONSchemaComponentRef = me),
      (l.getFlattenComponentsFromChildrenArray = pe),
      (l.getAndMapAllFlowJSONComponents = _e),
      (l.minifySchema = he),
      (l.getComponentNameSchemaType = ye));
  },
  98,
);
