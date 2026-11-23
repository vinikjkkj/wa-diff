__d(
  "WAFlowJSONParseUtils",
  [
    "invariant",
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = e.type,
        n = e["input-type"],
        r = e.mode;
      switch (t) {
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
          .CHECKBOX_GROUP:
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
          .CHIPS_SELECTOR:
          return { type: "array", items: { type: "string" } };
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.DATE_PICKER:
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.DROPDOWN:
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
          .RADIO_BUTTONS_GROUP:
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.TEXT_AREA:
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
          .NAVIGATION_LIST:
          return { type: "string" };
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
          .CALENDAR_PICKER:
          return { type: r === "range" ? "object" : "string" };
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.TEXT_INPUT:
          return {
            type: n === "number" || n === "passcode" ? "number" : "string",
          };
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.OPT_IN:
          return { type: "boolean" };
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.PHOTO_PICKER:
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
          .DOCUMENT_PICKER:
          return o("WAFlowJSONConstants").NATIVE_COMPONENTS_SCHEMA;
        default:
          return null;
      }
    }
    function u(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.type,
        n = e.mode;
      switch (t) {
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
          .CALENDAR_PICKER:
          return { type: n === "range" ? "object" : "string" };
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
          .CHECKBOX_GROUP:
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
          .CHIPS_SELECTOR:
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.DATE_PICKER:
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.DROPDOWN:
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
          .RADIO_BUTTONS_GROUP:
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.TEXT_AREA:
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
          .NAVIGATION_LIST:
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.TEXT_INPUT:
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.OPT_IN:
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.PHOTO_PICKER:
        case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
          .DOCUMENT_PICKER:
          return { type: "string" };
        default:
          return null;
      }
    }
    function c(e) {
      var t,
        n = new Map(),
        r = new Set([
          (t = o("WAFlowJSONConstants")).WA_FLOW_JSON_COMPONENT_TYPE
            .CHECKBOX_GROUP,
          t.WA_FLOW_JSON_COMPONENT_TYPE.CHIPS_SELECTOR,
          t.WA_FLOW_JSON_COMPONENT_TYPE.DATE_PICKER,
          t.WA_FLOW_JSON_COMPONENT_TYPE.DROPDOWN,
          t.WA_FLOW_JSON_COMPONENT_TYPE.RADIO_BUTTONS_GROUP,
          t.WA_FLOW_JSON_COMPONENT_TYPE.TEXT_AREA,
          t.WA_FLOW_JSON_COMPONENT_TYPE.TEXT_INPUT,
          t.WA_FLOW_JSON_COMPONENT_TYPE.OPT_IN,
          t.WA_FLOW_JSON_COMPONENT_TYPE.CALENDAR_PICKER,
          t.WA_FLOW_JSON_COMPONENT_TYPE.NAVIGATION_LIST,
        ]);
      return (
        e.screenData.forEach(function (t) {
          return d(e, t, n, r);
        }),
        n
      );
    }
    function d(e, t, n, r) {
      var o,
        a = (o = t.data.data) != null ? o : {},
        i = t.data.id;
      (m(i, a, n),
        e.getFlattenComponents(i).forEach(function (e) {
          return p(i, e, r, n);
        }));
    }
    function m(e, t, n) {
      for (var r of Object.entries(t)) {
        var o,
          a,
          i = r[0],
          l = r[1],
          s = (o = n.get(e)) != null ? o : new Map(),
          u = (a = s.get("data")) != null ? a : new Map();
        if (l.type === "object") {
          var c = new Map();
          (c.set(i, new Map()), _(t[i], c, i), u.set(i, c.get(i)));
        } else u.set(i, l.type);
        (s.set("data", u), n.set(e, s));
      }
      return n;
    }
    function p(t, n, r, o) {
      if (r.has(n.component.type)) {
        var a = e(n.component),
          i = u(n.component);
        if (a != null) {
          var l,
            s,
            c,
            d = (l = o.get(t)) != null ? l : new Map(),
            m = (s = d.get("form")) != null ? s : new Map(),
            p = (c = d.get("error-messages")) != null ? c : new Map();
          (m.set(n.component.name, a.type),
            i != null && p.set(n.component.name, i.type),
            d.set("form", m),
            d.set("error-messages", p),
            o.set(t, d));
        }
      }
    }
    function _(e, t, n) {
      if (e.type === "object" && e.properties != null) {
        var o = e.properties;
        typeof o == "object" || s(0, 87877);
        for (var a of Object.entries(o)) {
          var i,
            l = a[0],
            u = a[1],
            c = new Map();
          (c.set(l, new Map()), _(o[l], c, l));
          var d = (i = r("unsafeCast")(t.get(n))) != null ? i : new Map();
          t.set(n, g(d, c));
        }
        return;
      }
      if (e.type === "array") {
        f(e, t, n);
        return;
      }
      t.set(n, e.type);
    }
    function f(e, t, n) {
      if (
        e.items != null &&
        e.items.type !== "object" &&
        typeof e.items.type == "string"
      ) {
        t.set(n, "array" + e.items.type);
        return;
      }
      e.items != null && e.items.type;
    }
    function g(e, t) {
      var n = new Map();
      return (
        e.forEach(function (e, t) {
          return n.set(t, e);
        }),
        t.forEach(function (e, t) {
          return n.set(t, e);
        }),
        n
      );
    }
    function h(t, n, r, a, i) {
      var l = o("WAFlowJSONConstants").WAFlowsDataStoreType.cast(r.store);
      if (l === o("WAFlowJSONConstants").WAFlowsDataStoreType.DATA) {
        var s,
          u = (s = t.screenData.get(r.screenId)) == null ? void 0 : s.data;
        return y(u, r, a, i);
      } else if (l === o("WAFlowJSONConstants").WAFlowsDataStoreType.FORM) {
        var c,
          d =
            (c = t.getComponentDataByName(r.screenId, r.key)) == null
              ? void 0
              : c.component;
        if (d == null)
          return o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getReferenceDoesNotExistErrorMsg(
            r.expression,
            n.id,
            r.screenId,
          );
        var m = e(d);
        return m == null
          ? o(
              "WAFlowJSONValidationError",
            ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidComponentTypeForFormBindingErrorMsg(
              d.type,
            )
          : m;
      } else
        throw o("WAFlowJSONValidationError")
          .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.UNSUPPORTED_STORE_TYPE.concat(
            ": ",
          )
          .concat(r.store);
    }
    function y(e, t, n, r) {
      var a = t.expression,
        i = t.key.split(".");
      if (
        e == null ||
        e.data == null ||
        i.length === 0 ||
        !Object.prototype.hasOwnProperty.call(e.data, i[0])
      )
        return o(
          "WAFlowJSONValidationError",
        ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingDynamicDataErrorMsg(
          a,
        );
      var l = e.data[i[0]];
      if (
        i.some(function (e) {
          return e.match(/[-`\' ]/);
        })
      )
        return o(
          "WAFlowJSONValidationError",
        ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidDynamicDataFormat(a);
      for (var s = 1; s < i.length; s++) {
        var u,
          c,
          d = i[s],
          m = (u = l.type) != null ? u : "";
        if (m === "array")
          return o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getPropertyInArrayInScreenDataErrorMsg(
            a,
            e.id,
            n,
            r,
            d,
          );
        if (m !== "object")
          return o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingDynamicDataErrorMsg(
            a,
          );
        if (!((c = l.properties) != null && c.hasOwnProperty(d)))
          return o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getDynamicBindingSchemaMissingInScreenDataErrorMsg(
            a,
            e.id,
          );
        l = l.properties[d];
      }
      return l;
    }
    ((l.getComponentValueSchema = e),
      (l.WAFlowJSONMapScreenProperties = c),
      (l.getBindingReferencedSchema = h));
  },
  98,
);
