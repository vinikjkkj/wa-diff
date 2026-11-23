__d(
  "WAFlowsWELJValidationUtils",
  [
    "WAFlowsComponentConstants",
    "WAFlowsDatePickerUtils",
    "WAFlowsJSONSchemaValidatorSelector",
    "WAFlowsSchemaValidationUtils",
    "WAFlowsTypes",
    "WAFlowsValidationConstants",
    "WAFlowsWELJUtils",
    "WDNativeImageComponentConstant",
    "WDSNativeNavigationListConstants",
    "filterNulls",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("WAFlowsJSONSchemaValidatorSelector")({ allErrors: !0 }),
      s = {
        CheckboxGroup: "array",
        Dropdown: "string",
        TextInput: "string or number",
        TextArea: "string",
        OptIn: "boolean",
        DatePicker: "string",
        RadioButtonsGroup: "string",
      },
      u = Object.freeze({
        getInvalidDataChannelResponseErrorMessage: function () {
          return "Server responses with invalid <data> object, make sure <data> field has an object type";
        },
        getInvalidRoutng: function () {
          return "Server responses with invalid <data> object, make sure <data> field has an object type";
        },
        getInvalidScreenTransitionMessage: function (t, n, r) {
          var e = " using the navigation list.",
            o = ", because it doesn't satisfy provided routing_model";
          return (
            "Can't perform a transition from [" +
            t +
            "] to [" +
            n +
            "]" +
            (r === !0 ? e : o)
          );
        },
        getInitScreenErrorMessageForInvalidScreen: function (t) {
          return (
            "The init screen -[" +
            t +
            "] that was returned in response is invalid. For non-empty screen in INIT request, please return the same screen with its data as provided in the request."
          );
        },
      }),
      c = Object.freeze({
        getInvalidScreenMessage: function (t) {
          return (
            "The screen [" +
            t +
            "] that was provided with response does not exist in Flow routing model"
          );
        },
        getInvalidNonEmptyModelMessage: function () {
          return "Screen expects no dynamic data in response, check screen data model or adjust a server response";
        },
        getInvalidPayloadMessage: function () {
          return "The payload that is provided with response does not match declared screen data model";
        },
        getRequiredFieldErrorMessage: function (t) {
          return (
            "Required [key=" +
            t +
            "] in Data model should be present in 3P data"
          );
        },
        getComponentFieldWrongTypeErrorMessage: function (t, n, r) {
          return 'Property "' + n + '" of "' + t + '" ' + r;
        },
        getIncorrectDataTypeErrorMessage: function (t, n, r) {
          return r != null
            ? "[key=" +
                t +
                "] in object should be of type <" +
                n +
                ">, but got <" +
                r +
                ">"
            : "[key=" + t + "] in object should be of type <" + n + ">";
        },
        getMinLimitErrorMessage: function (t, n) {
          return "[key=" + n + "] should not have fewer than " + t + " items";
        },
        getMaxLimitErrorMessage: function (t, n) {
          return "[key=" + n + "] should not have more than " + t + " items";
        },
        getUniqueItemsErrorMessage: function (t) {
          return "[key=" + t + "] should have unique items";
        },
        getFirstScreenErrorMessageForInvalidIncomingNodes: function (t) {
          return (
            "The first screen -[" +
            t +
            "] that was provided with response already have incoming nodes found in the routing model"
          );
        },
      }),
      d = function (t) {
        return (t === void 0 && (t = ""), t.length > 0 ? " '" + t + "'" : "");
      },
      m = Object.freeze({
        getMinMaxLimitErrorMessage: function (t, n, r, a, i) {
          return [
            "maxLength",
            o("WAFlowsValidationConstants").CALENDAR_PICKER_MAX_LENGTH_LABEL,
            o("WAFlowsValidationConstants")
              .CALENDAR_PICKER_MAX_LENGTH_HELPER_TEXT,
          ].includes(a)
            ? p(
                t,
                i,
                v(r) +
                  " should be " +
                  n +
                  " characters or less to avoid truncation on different screen sizes.",
              )
            : p(
                t,
                i,
                v(r) +
                  " must have at least " +
                  n +
                  " " +
                  (n === 1 ? "character" : "characters") +
                  ".",
              );
        },
        getLabelMaxLengthErrorMessage: function (t, n, r) {
          return p(
            t,
            n,
            "'label' must be " +
              (r
                ? o("WAFlowsComponentConstants")
                    .TEXT_ENTRY_LABEL_LARGE_MAX_LENGTH
                : o("WAFlowsComponentConstants").TEXT_ENTRY_LABEL_MAX_LENGTH) +
              " characters or less to avoid truncation on different screen sizes.",
          );
        },
        getMinMaxItemsInDataSourceErrorMessage: function (t, n, r, o, a) {
          var e = a != null ? '"' + a + '" array ' : "";
          return r === "maxItems"
            ? p(t, o, e + "cannot contain more than " + n + " options.")
            : p(t, o, e + "must contain at least " + n + " options.");
        },
        getMinMaxValueErrorMessage: function (t, n, r, o, a) {
          return r === "maximum"
            ? p(t, o, v(a) + " must be less than " + (Number(n) + 1) + ".")
            : p(t, o, v(a) + " must be more than " + (Number(n) - 1) + ".");
        },
        getUniqueItemsErrorMessage: function (t, n) {
          return p(t, n, "has duplicate ID's.");
        },
        getNonEmptyIdInDataSourceErrorMessage: function (t, n) {
          return p(t, n, "options have empty ID's.");
        },
        getDataSourceShouldNotHaveBothImagesAndColors: function (t, n) {
          return p(t, n, "options have both images and colors.");
        },
        getMinCharGreaterThanMaxCharErrorMessage: function (t, n) {
          return p(
            t,
            n,
            "min character limit cannot be more than the max character limit.",
          );
        },
        getMinSelectedItemsGreaterMaxSelectedItemsErrorMessage: function (
          t,
          n,
        ) {
          return p(
            t,
            n,
            r("justknobx")._("1089")
              ? "min selected items cannot be greater than the max selected items."
              : "min selected items cannot be greater than or equal to the max selected items.",
          );
        },
        getDisabledOptionSelectedErrorMessage: function (t, n, r) {
          return n != null && n.length > 1
            ? "The selected items(ids: " +
                n.join(", ") +
                ") in component " +
                d(r) +
                " of type " +
                t +
                ", are disabled."
            : "The selected item" +
                (n != null ? "(id: " + n.toString() + ")" : "") +
                " in component " +
                d(r) +
                " of type " +
                t +
                " is disabled.";
        },
        getInitValueDoesNotMatchTypeErrorMessage: function (t, n) {
          return p(
            t,
            n,
            "init value must be a" +
              (/[aeiou]/i.test(s[t][0]) ? "n" : "") +
              " " +
              s[t] +
              ".",
          );
        },
        getRequiredAndDisabledErrorMessage: function (t, n) {
          return "Required " + p(t, n, "cannot be disabled.");
        },
        getRequiredAndNotVisibleErrorMessage: function (t, n) {
          return "Required " + p(t, n, "cannot be invisible.");
        },
        getRequiredErrorMessage: function (t, n, r) {
          return "" + p(t, n, 'is missing required property "' + v(r) + '".');
        },
        getDateIsNotTimestampErrorMessage: function (t, n, r) {
          return (
            r === void 0 && (r = ""),
            p(t, r, n + " must be a timestamp.")
          );
        },
        getUnavailableDateIsNotTimestampErrorMessage: function (t, n) {
          return (
            n === void 0 && (n = ""),
            p(t, n, "unavailable-dates must be an array of timestamps.")
          );
        },
        getImageSizeErrorMessage: function (t) {
          return (
            t +
            " size exceeds " +
            o("WDNativeImageComponentConstant").IMAGE_MAX_SIZE +
            "KB."
          );
        },
        getImageInDataSourceSizeErrorMessage: function (t, n, r) {
          r === void 0 && (r = []);
          var e =
            "The size of one or more images in the " +
            t +
            " exceeds " +
            (n != null
              ? n
              : o("WDNativeImageComponentConstant").IMAGE_MAX_SIZE) +
            "KB.";
          return r.length === 0
            ? e
            : e +
                " Items with an oversized image: " +
                r
                  .map(function (e) {
                    return '"' + e + '"';
                  })
                  .join(", ") +
                ".";
        },
        getDateIsNotFormattedDateStrErrorMessage: function (t, n, r) {
          return (
            r === void 0 && (r = ""),
            p(
              t,
              r,
              n +
                " must match format " +
                o("WAFlowsDatePickerUtils").DEFAULT_DATE_FORMAT_WEB +
                ".",
            )
          );
        },
        getUnavailableDateIsNotFormattedDateStrErrorMessage: function (t, n) {
          return (
            n === void 0 && (n = ""),
            p(
              t,
              n,
              "unavailable-dates must be an array of date string matching format " +
                o("WAFlowsDatePickerUtils").DEFAULT_DATE_FORMAT_WEB +
                ".",
            )
          );
        },
        getPatternMismatchErrorMessage: function (t, n, r, a) {
          return (
            n === void 0 && (n = ""),
            p(
              t,
              n,
              r ===
                o("WAFlowsSchemaValidationUtils")
                  .WA_FLOW_JSON_BLANK_STRING_NEGATE_PATTERN
                ? a + " cannot be empty."
                : r === o("WAFlowsSchemaValidationUtils").WA_FLOW_JSON_URI_REGEX
                  ? "url '" + a + "' should be in format 'uri'."
                  : a + " must match pattern " + r + ".",
            )
          );
        },
        getDefaultErrorMessage: function (t, n, r, o) {
          return (
            o === void 0 && (o = ""),
            p(t, o, n).concat(r != null ? " (" + r + ")." : ".")
          );
        },
        getInvalidPropertyCombination: function (t, n, r, o) {
          return (
            o === void 0 && (o = ""),
            p(
              r,
              o,
              "cannot have property " +
                t +
                " used in combination with " +
                n +
                ".",
            )
          );
        },
        getInvalidPatternInList: function (t, n, r) {
          return (
            r === void 0 && (r = ""),
            p(n, r, "cannot have only some items in the list with " + t + ".")
          );
        },
        exclusiveValidator: function (t, n, r) {
          return (
            r === void 0 && (r = ""),
            p(
              n,
              r,
              "cannot have action '" +
                t +
                "' defined on both the component and list levels.",
            )
          );
        },
        updateDataActionWithInvalidPayload: function (t, n) {
          return (
            n === void 0 && (n = ""),
            p(t, n, "uses an invalid payload for the 'update_data' action.")
          );
        },
        getInvalidPropertyCount: function (t, n, r, o) {
          o === void 0 && (o = "");
          var e = n > 1 ? " properties" : "";
          return p(r, o, "cannot have more than " + n + " " + t + e + ".");
        },
        getPropertiesCountErrorMessage: function (t, n, r) {
          var e = L(t),
            o = R(t),
            a = o.max,
            i = o.min,
            l = i != null ? "at least " + (i + 1) : "",
            s = a != null ? "at most " + a + " " : "",
            u = i != null && a != null ? " and " : " ",
            c = r != null ? " in " + r : "";
          return (
            "" +
            p(t, n, "should have " + l + u + s + "of " + e.join(", ") + c + ".")
          );
        },
      }),
      p = function (t, n, r) {
        return t + " " + d(n) + " " + r;
      };
    function _(e, t, n) {
      var r,
        o,
        a = n.getRoutingModel();
      if (t.length === 0 || a[t] == null) return [c.getInvalidScreenMessage(t)];
      var i =
          ((r = a[e]) != null ? r : []).find(function (e) {
            return e === t;
          }) != null,
        l =
          ((o = a[t]) != null ? o : []).find(function (t) {
            return t === e;
          }) != null,
        s = e === "",
        d = e === t && e.length > 0,
        m = !1;
      if (e.length > 0 && (i || l)) {
        var p, _;
        m =
          (p = (_ = n.getScreenMeta(e)) == null ? void 0 : _.isNavListScreen) !=
          null
            ? p
            : !1;
      }
      var f = m ? e !== t && e.length > 0 : !0,
        g = i || l || s || d,
        h = Object.keys(a).some(function (e) {
          return a[e].includes(t);
        }),
        y = n.isDataChannelLess(),
        C = (m || n.isNavigationListFlow()) && y;
      return s && h && !n.getIsShoppingFlow() && !C
        ? [c.getFirstScreenErrorMessageForInvalidIncomingNodes(t)]
        : f
          ? g
            ? []
            : [u.getInvalidScreenTransitionMessage(e, t)]
          : [u.getInvalidScreenTransitionMessage(e, t, m)];
    }
    function f(e, t, n) {
      return n.ignoreRoutingModel || t.getIsShoppingFlow()
        ? !0
        : t.isDraft() || +t.getVersion() >= 120
          ? !1
          : e != null && e !== "" && t.getScreenRoutingModel(e) != null;
    }
    function g(t, n, r) {
      if ((r === void 0 && (r = !1), n == null))
        return Object.keys(t).length > 0
          ? [c.getInvalidNonEmptyModelMessage()]
          : [];
      var a = o("WAFlowsWELJUtils").transformDataModelSchema(n),
        i = a;
      if (r) {
        var l,
          s = (l = a.required) != null ? l : [],
          u = a.properties;
        (u && s.push.apply(s, Object.keys(u)),
          (i = babelHelpers.extends({}, a, { required: s })));
      }
      var d = e.validate(i, t);
      return d ? [] : C(e.errors, t);
    }
    function h(e, t) {
      if (t === "") return e;
      var n = t
          .replace(/\[(\d+)\]/g, ".$1")
          .split(".")
          .filter(Boolean),
        r = e;
      for (var o of n) {
        if (r == null || typeof r != "object") return;
        Array.isArray(r) ? (r = r[Number(o)]) : (r = r[o]);
      }
      return r;
    }
    function y(e) {
      return e === null
        ? "null"
        : e === void 0
          ? "undefined"
          : Array.isArray(e)
            ? "array"
            : typeof e;
    }
    function C(e, t) {
      return (
        e === void 0 && (e = []),
        e == null
          ? []
          : r("filterNulls")(
              e.map(function (e) {
                if (e == null) return e;
                switch (e.keyword) {
                  case "required": {
                    var n,
                      o,
                      a,
                      i =
                        (n =
                          e == null || (o = e.params) == null
                            ? void 0
                            : o.missingProperty) != null
                          ? n
                          : "unknown",
                      l = "data" + ((a = e.dataPath) != null ? a : "");
                    return c.getRequiredFieldErrorMessage(
                      (l.length > 0 ? l + "." : "") + i,
                    );
                  }
                  case "type": {
                    var s,
                      u,
                      d =
                        (s =
                          e == null || (u = e.params) == null
                            ? void 0
                            : u.type) != null
                          ? s
                          : "unknown",
                      m = "data" + e.dataPath,
                      p = r("justknobx")._("2039"),
                      _ = p ? y(h(t, e.dataPath)) : void 0;
                    return c.getIncorrectDataTypeErrorMessage(m, d, _);
                  }
                  case "minItems": {
                    var f = "data" + e.dataPath,
                      g = e.params.limit;
                    return c.getMinLimitErrorMessage(g != null ? g : 0, f);
                  }
                  case "maxItems": {
                    var C = "data" + e.dataPath,
                      b = e.params.limit;
                    return c.getMaxLimitErrorMessage(b != null ? b : 0, C);
                  }
                  case "uniqueItems": {
                    var v = "data" + e.dataPath;
                    return c.getUniqueItemsErrorMessage(v);
                  }
                  default:
                    return c.getInvalidPayloadMessage();
                }
              }),
            )
      );
    }
    function b(e) {
      var t = e.split(/(?=[A-Z])/);
      return t
        .map(function (e) {
          return e[0].toUpperCase() + e.slice(1);
        })
        .join(" ");
    }
    function v(e) {
      var t = e.split(/(?=[A-Z])/);
      return t
        .map(function (e) {
          return e[0].toLowerCase() + e.slice(1);
        })
        .join("-");
    }
    function S(e) {
      return (
        e != null &&
        typeof e == "object" &&
        !Array.isArray(e) &&
        e.constructor.name === "Object"
      );
    }
    function R(e) {
      return e === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST
        ? {
            min: o("WDSNativeNavigationListConstants")
              .NAVIGATION_LIST_END_ADD_ON_MIN_PROP_COUNT,
            max: o("WDSNativeNavigationListConstants")
              .NAVIGATION_LIST_END_ADD_ON_MAX_PROP_COUNT,
          }
        : { min: null, max: null };
    }
    function L(e) {
      return e === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST
        ? ["'title'", "'description'", "'metadata'"]
        : [];
    }
    function E(e) {
      if (e.includes("listItems") && e.includes("end")) return '"end" add-on';
    }
    ((l.WELJ_BUSINESS_ERROR_MESSAGES = u),
      (l.WELJ_SCHEMA_ERROR_MESSAGES = c),
      (l.getComponentName = d),
      (l.WELJ_SOFT_VALIDATION_ERROR_MESSAGES = m),
      (l.validateFlowsScreenRoutingModel = _),
      (l.allowInvalidTransition = f),
      (l.validateFlowsScreenData = g),
      (l.splitCamelCasePropName = b),
      (l.splitCamelCasePropNameToWELJProperty = v),
      (l.isObject = S),
      (l.getComponentPropCountLocation = E));
  },
  98,
);
