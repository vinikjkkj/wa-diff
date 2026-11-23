__d(
  "WAFlowJSONCalendarPickerValidatorV601",
  [
    "WAFlowJSONConstants",
    "WAFlowJSONDateValidatorV500",
    "WAFlowJSONValidationError",
    "isObject",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        MODE: "mode",
        MIN_DAYS: "min-days",
        MAX_DAYS: "max-days",
        TITLE: "title",
        DESCRIPTION: "description",
      },
      s = { START_DATE: "start-date", END_DATE: "end-date" },
      u = { SINGLE: "single", RANGE: "range" },
      c = { INIT_VALUES: "init-values", ERROR_MESSAGES: "error-messages" },
      d = "'mode' is not set to 'range'",
      m = (function (t) {
        function n() {
          for (var e, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(a)) || this),
            (e.getComponentBodyErrors = function (t, n) {
              var a,
                i = [];
              (i.push.apply(i, e.getMinMaxDaysErrors(t, n)),
                i.push.apply(i, e.getTitleDescriptionErrors(t, n)));
              var l = r("unsafeCast")(n.component),
                s = [
                  {
                    prop: (a = o("WAFlowJSONDateValidatorV500")).DATE_PROPS
                      .LABEL,
                    type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
                    endDateRequired: !0,
                  },
                  {
                    prop: a.DATE_PROPS.HELPER_TEXT,
                    type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
                    endDateRequired: !1,
                  },
                  {
                    prop: a.DATE_PROPS.REQUIRED,
                    type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_BOOLEAN,
                    endDateRequired: !1,
                  },
                ];
              s.forEach(function (r) {
                var o = r.endDateRequired,
                  a = r.prop,
                  s = r.type,
                  u = e.getDateFieldValue(t, a);
                i.push.apply(
                  i,
                  e.getModeFormatErrors(l, a, u, s, o, n.jsonPointer + "/" + a),
                );
              });
              var u = e.getDateFieldValue(t, a.DATE_PROPS.INIT_VALUE),
                c = e.getDateFieldValue(t, a.DATE_PROPS.ERROR_MESSAGE),
                d = n.jsonPointer + "/" + a.DATE_PROPS.INIT_VALUE,
                m = n.jsonPointer + "/" + a.DATE_PROPS.ERROR_MESSAGE;
              return (
                i.push.apply(
                  i,
                  e.getComponentInitValueErrorMessageErrorsForPicker(
                    n,
                    a.DATE_PROPS.INIT_VALUE,
                    u,
                    d,
                    e.getComponentInitValueErrorsForSinglePicker,
                    e.getComponentInitValueErrorsForRangePicker,
                  ),
                ),
                i.push.apply(
                  i,
                  e.getComponentInitValueErrorMessageErrorsForPicker(
                    n,
                    a.DATE_PROPS.ERROR_MESSAGE,
                    c,
                    m,
                  ),
                ),
                i
              );
            }),
            (e.getComponentFormErrors = function (t, n, o) {
              var a = [],
                i = t[c.INIT_VALUES],
                l = t[c.ERROR_MESSAGES];
              if (!r("isObject")(i)) return a;
              var s = r("unsafeCast")(i),
                u = r("unsafeCast")(l);
              return (
                o.forEach(function (t) {
                  var r,
                    o = (r = t.component.name) != null ? r : "";
                  if (s) {
                    var i = s[o],
                      l = n.jsonPointer + "/" + c.INIT_VALUES + "/" + o;
                    a.push.apply(
                      a,
                      e.getComponentInitValueErrorMessageErrorsForPicker(
                        t,
                        c.INIT_VALUES,
                        i,
                        l,
                        e.getComponentInitValueErrorsForSinglePicker,
                        e.getComponentInitValueErrorsForRangePicker,
                      ),
                    );
                  }
                  if (u) {
                    var d = u[o],
                      m = n.jsonPointer + "/" + c.ERROR_MESSAGES + "/" + o;
                    a.push.apply(
                      a,
                      e.getComponentInitValueErrorMessageErrorsForPicker(
                        t,
                        c.ERROR_MESSAGES,
                        d,
                        m,
                      ),
                    );
                  }
                }),
                a
              );
            }),
            (e.getComponentInitValueErrorsForSinglePicker = function (t, n, a) {
              var i = [];
              if (e.isValidDateFormat(n)) {
                var l = e.getDateTime(n),
                  s = r("unsafeCast")(t.component),
                  u = e.getMinDateObj(s),
                  c = e.getMaxDateObj(s);
                l != null &&
                  (l < u.value || l > c.value) &&
                  i.push(
                    e.getError(
                      o(
                        "WAFlowJSONValidationError",
                      ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getDateNotInRangeErrorMsg(
                        t.component.type,
                        o("WAFlowJSONDateValidatorV500").DATE_PROPS.INIT_VALUE,
                        u.str,
                        c.str,
                      ),
                      a,
                      o("WAFlowJSONValidationError")
                        .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_DATE_RANGE,
                    ),
                  );
              } else
                i.push(
                  e.getError(
                    o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidDateFormatErrorMsg(
                      e.DATE_FORMAT_WEB,
                    ),
                    a,
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                      .INVALID_DATE_SINGLE_INIT_VALUE_FORMAT,
                  ),
                );
              return i;
            }),
            (e.getComponentInitValueErrorsForRangePicker = function (t, n, a) {
              var i = [],
                l = String(n[s.START_DATE]),
                u = String(n[s.END_DATE]);
              if (e.isValidDateFormat(l) && e.isValidDateFormat(u)) {
                var c = e.getDateTime(l),
                  d = e.getDateTime(u),
                  m = r("unsafeCast")(t.component),
                  p = e.getMinDateObj(m),
                  _ = e.getMaxDateObj(m);
                if (c != null && d != null)
                  if (c > d) {
                    var f,
                      g,
                      h = (f = t.component.name) != null ? f : "",
                      y = (g = t.component.type) != null ? g : "";
                    i.push(
                      e.getError(
                        o(
                          "WAFlowJSONValidationError",
                        ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMinIsGreaterThanMaxPropertyErrorMsg(
                          "start date",
                          "end date",
                          y,
                          h,
                        ),
                        a,
                        o("WAFlowJSONValidationError")
                          .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                          .INVALID_DATE_RANGE,
                      ),
                    );
                  } else
                    (c < p.value ||
                      c > _.value ||
                      d < p.value ||
                      d > _.value) &&
                      i.push(
                        e.getError(
                          o(
                            "WAFlowJSONValidationError",
                          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getDateNotInRangeErrorMsg(
                            t.component.type,
                            o("WAFlowJSONDateValidatorV500").DATE_PROPS
                              .INIT_VALUE,
                            p.str,
                            _.str,
                          ),
                          a,
                          o("WAFlowJSONValidationError")
                            .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                            .INVALID_DATE_RANGE,
                        ),
                      );
              } else
                (e.isValidDateFormat(l) ||
                  i.push(
                    e.getError(
                      o(
                        "WAFlowJSONValidationError",
                      ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidDateFormatErrorMsg(
                        e.DATE_FORMAT_WEB,
                      ),
                      a + "/" + s.START_DATE,
                      o("WAFlowJSONValidationError")
                        .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                        .INVALID_DATE_SINGLE_INIT_VALUE_FORMAT,
                    ),
                  ),
                  e.isValidDateFormat(u) ||
                    i.push(
                      e.getError(
                        o(
                          "WAFlowJSONValidationError",
                        ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidDateFormatErrorMsg(
                          e.DATE_FORMAT_WEB,
                        ),
                        a + "/" + s.END_DATE,
                        o("WAFlowJSONValidationError")
                          .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                          .INVALID_DATE_SINGLE_INIT_VALUE_FORMAT,
                      ),
                    ));
              return i;
            }),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.validate = function () {
            return t.prototype.validate.call(
              this,
              o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                .CALENDAR_PICKER,
              this.getComponentBodyErrors,
              this.getComponentFormErrors,
            );
          }),
          (a.getMinMaxDaysErrors = function (n, a) {
            var t = [],
              i = r("unsafeCast")(a.component),
              l = this.getDateFieldValue(i, e.MODE, u.SINGLE),
              s = this.getDateFieldValue(n, e.MIN_DAYS),
              c = this.getDateFieldValue(n, e.MAX_DAYS),
              m = a.jsonPointer + "/" + e.MIN_DAYS,
              p = a.jsonPointer + "/" + e.MAX_DAYS;
            return (
              l === u.SINGLE
                ? (Object.prototype.hasOwnProperty.call(n, e.MIN_DAYS) &&
                    t.push(
                      this.getError(
                        o(
                          "WAFlowJSONValidationError",
                        ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyNameForConditionErrorMsg(
                          n.type,
                          d,
                          e.MIN_DAYS,
                        ),
                        [m],
                        o("WAFlowJSONValidationError")
                          .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                          .INVALID_PROPERTY_NAME_FOR_CONDITION,
                      ),
                    ),
                  Object.prototype.hasOwnProperty.call(n, e.MAX_DAYS) &&
                    t.push(
                      this.getError(
                        o(
                          "WAFlowJSONValidationError",
                        ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyNameForConditionErrorMsg(
                          n.type,
                          d,
                          e.MAX_DAYS,
                        ),
                        [p],
                        o("WAFlowJSONValidationError")
                          .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                          .INVALID_PROPERTY_NAME_FOR_CONDITION,
                      ),
                    ))
                : s != null &&
                  c != null &&
                  s > c &&
                  t.push(
                    this.getError(
                      o(
                        "WAFlowJSONValidationError",
                      ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMinIsGreaterThanMaxPropertyErrorMsg(
                        e.MIN_DAYS,
                        e.MAX_DAYS,
                        o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                          .CALENDAR_PICKER,
                        n.name,
                      ),
                      [m, p],
                      o("WAFlowJSONValidationError")
                        .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                        .INVALID_MIN_MAX_DAYS,
                    ),
                  ),
              t
            );
          }),
          (a.getTitleDescriptionErrors = function (n, a) {
            var t = [],
              i = r("unsafeCast")(a.component),
              l = this.getDateFieldValue(i, e.MODE, u.SINGLE);
            if (l === u.SINGLE) {
              if (Object.prototype.hasOwnProperty.call(n, e.TITLE)) {
                var s = a.jsonPointer + "/" + e.TITLE;
                t.push(
                  this.getError(
                    o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyNameForConditionErrorMsg(
                      n.type,
                      d,
                      e.TITLE,
                    ),
                    [s],
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                      .INVALID_PROPERTY_NAME_FOR_CONDITION,
                  ),
                );
              }
              if (Object.prototype.hasOwnProperty.call(n, e.DESCRIPTION)) {
                var c = a.jsonPointer + "/" + e.DESCRIPTION;
                t.push(
                  this.getError(
                    o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyNameForConditionErrorMsg(
                      n.type,
                      d,
                      e.DESCRIPTION,
                    ),
                    [c],
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                      .INVALID_PROPERTY_NAME_FOR_CONDITION,
                  ),
                );
              }
            }
            return t;
          }),
          (a.getComponentInitValueErrorMessageErrorsForPicker = function (
            n,
            a,
            i,
            l,
            s,
            c,
          ) {
            var t = r("unsafeCast")(n.component),
              d = this.getDateFieldValue(t, e.MODE, u.SINGLE),
              m = [].concat(
                this.getModeFormatErrors(
                  t,
                  a,
                  i,
                  o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
                  !1,
                  l,
                ),
              );
            return (
              i != null &&
                (d === u.SINGLE
                  ? s && m.push.apply(m, s(n, String(i), l))
                  : c && typeof i == "object" && m.push.apply(m, c(n, i, l))),
              m
            );
          }),
          (a.getModeDateFieldValue = function (t, n) {
            if (!Object.prototype.hasOwnProperty.call(t, n)) return null;
            var e = t[n];
            return e;
          }),
          (a.getModeFormatErrors = function (n, r, a, i, l, c) {
            var t = [],
              d = this.getDateFieldValue(n, e.MODE, u.SINGLE);
            if (a == null) return [];
            if (d === u.SINGLE)
              typeof a == "object" &&
                t.push(
                  this.getError(
                    o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidTypeErrorMsg(
                      n.type,
                      r,
                      i,
                    ),
                    c,
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_TYPE,
                  ),
                );
            else if (d === u.RANGE)
              if (typeof a != "object")
                t.push(
                  this.getError(
                    o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidTypeErrorMsg(
                      n.type,
                      r,
                      '{"start-date": ' + i + ', "end-date": ' + i + "}",
                    ),
                    c,
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_TYPE,
                  ),
                );
              else {
                ((a != null && a.hasOwnProperty(s.START_DATE)) ||
                  t.push(
                    this.getError(
                      o(
                        "WAFlowJSONValidationError",
                      ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getCalendarPickerMissingRangePropErrorMsg(
                        n.type,
                        s.START_DATE,
                      ),
                      c,
                      o("WAFlowJSONValidationError")
                        .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                        .MISSING_CALENDAR_PICKER_RANGE_MODE_PROP,
                    ),
                  ),
                  l &&
                    !(a != null && a.hasOwnProperty(s.END_DATE)) &&
                    t.push(
                      this.getError(
                        o(
                          "WAFlowJSONValidationError",
                        ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getCalendarPickerMissingRangePropErrorMsg(
                          n.type,
                          s.END_DATE,
                        ),
                        c,
                        o("WAFlowJSONValidationError")
                          .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                          .MISSING_CALENDAR_PICKER_RANGE_MODE_PROP,
                      ),
                    ),
                  Object.keys(a != null ? a : {}).length > 2 &&
                    t.push(
                      this.getError(
                        o(
                          "WAFlowJSONValidationError",
                        ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getCalendarPickerUnexpectedRangePropErrorMsg(
                          n.type,
                          r,
                        ),
                        c,
                        o("WAFlowJSONValidationError")
                          .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                          .UNEXPECTED_CALENDAR_PICKER_RANGE_MODE_PROP,
                      ),
                    ));
                var m = Object.keys(a != null ? a : {}),
                  p = [s.START_DATE, s.END_DATE],
                  _ = m.filter(function (e) {
                    return !p.includes(e);
                  });
                if (_.length) {
                  var f = _.map(function (e) {
                    return c + "/" + e;
                  });
                  t.push(
                    this.getError(
                      o(
                        "WAFlowJSONValidationError",
                      ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getCalendarPickerUnexpectedRangePropErrorMsg(
                        n.type,
                        r,
                      ),
                      f,
                      o("WAFlowJSONValidationError")
                        .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                        .UNEXPECTED_CALENDAR_PICKER_RANGE_MODE_PROP,
                    ),
                  );
                }
              }
            return t;
          }),
          n
        );
      })(o("WAFlowJSONDateValidatorV500").WAFlowJSONDateValidatorV500);
    l.WAFlowJSONCalendarPickerValidatorV601 = m;
  },
  98,
);
