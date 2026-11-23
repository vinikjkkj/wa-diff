__d(
  "WAFlowJSONDateValidatorV500",
  [
    "invariant",
    "LocalDate",
    "Timezone",
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = /^\d{4}-\d{2}-\d{2}$/,
      u = {
        LABEL: "label",
        HELPER_TEXT: "helper-text",
        MIN_DATE: "min-date",
        MAX_DATE: "max-date",
        INIT_VALUE: "init-value",
        ERROR_MESSAGE: "error-message",
        REQUIRED: "required",
      },
      c = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.DATE_FORMAT_WEB = "YYYY-MM-DD"),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.validate = function (t, n, a) {
            var e = this,
              i = [];
            if (t == null) s(0, 86814);
            else {
              var l = [];
              (this.flowJSONData.screenData.forEach(function (s) {
                var c = s.data.id,
                  d = e.flowJSONData.getComponentDataByType(c, t);
                if (a) {
                  var m = e.flowJSONData.getComponentDataByType(
                    c,
                    o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FORM,
                  );
                  if (m.length) {
                    var p = m[0],
                      _ = r("unsafeCast")(p.component);
                    i.push.apply(i, a(_, p, d));
                  }
                }
                d.forEach(function (a) {
                  var s,
                    c,
                    d = r("unsafeCast")(a.component),
                    m = e.getDateFieldValue(d, u.MIN_DATE),
                    p = e.getDateFieldValue(d, u.MAX_DATE),
                    _ = a.jsonPointer + "/" + u.MIN_DATE,
                    f = a.jsonPointer + "/" + u.MAX_DATE,
                    g =
                      (s = e.formatDate(m, _, l)) != null
                        ? s
                        : -Number.MAX_VALUE,
                    h =
                      (c = e.formatDate(p, f, l)) != null
                        ? c
                        : Number.MAX_VALUE;
                  (g > h &&
                    i.push(
                      e.getError(
                        o(
                          "WAFlowJSONValidationError",
                        ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMinIsGreaterThanMaxPropertyErrorMsg(
                          u.MIN_DATE,
                          u.MAX_DATE,
                          t,
                          d.name,
                        ),
                        [_, f],
                        o("WAFlowJSONValidationError")
                          .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                          .INVALID_DATE_RANGE,
                      ),
                    ),
                    i.push.apply(
                      i,
                      e.validateUnavailableDatesInRange(
                        d,
                        a,
                        t,
                        g,
                        h,
                        m != null ? m : "",
                        p != null ? p : "",
                        l,
                      ),
                    ),
                    n && i.push.apply(i, n(d, a)));
                });
              }),
                l.length > 0 &&
                  i.push(
                    this.getError(
                      o(
                        "WAFlowJSONValidationError",
                      ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidDateFormatErrorMsg(
                        this.DATE_FORMAT_WEB,
                      ),
                      l,
                      o("WAFlowJSONValidationError")
                        .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_DATE_RANGE,
                    ),
                  ));
            }
            return i;
          }),
          (a.validateUnavailableDatesInRange = function (
            t,
            n,
            r,
            a,
            i,
            l,
            s,
            u,
          ) {
            var e = this,
              c = [],
              d = t["unavailable-dates"];
            return (
              !o("WAFlowJSONValidationResultUtil").isDynamicDataBindingV400(
                d,
              ) &&
                Array.isArray(d) &&
                d.forEach(function (t, r) {
                  if (
                    !o(
                      "WAFlowJSONValidationResultUtil",
                    ).isDynamicDataBindingV400(t)
                  ) {
                    var l = n.jsonPointer + "/unavailable-dates/" + r,
                      s = e.formatDate(t, l, u);
                    s != null && (s < a || s > i) && c.push(l);
                  }
                }),
              c.length > 0
                ? [
                    this.getError(
                      o(
                        "WAFlowJSONValidationError",
                      ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getDateNotInRangeErrorMsg(
                        r,
                        "unavailable-dates",
                        l,
                        s,
                      ),
                      c,
                      o("WAFlowJSONValidationError")
                        .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_DATE_RANGE,
                    ),
                  ]
                : []
            );
          }),
          (a.isValidDateFormat = function (n) {
            return typeof n == "string" && e.test(n);
          }),
          (a.getDateFieldValue = function (t, n, r) {
            if (!Object.prototype.hasOwnProperty.call(t, n))
              return r != null ? r : null;
            var e = t[n];
            return o("WAFlowJSONValidationResultUtil").isDynamicDataBindingV400(
              e,
            )
              ? null
              : e;
          }),
          (a.formatDate = function (t, n, r) {
            return t == null
              ? null
              : this.isValidDateFormat(t)
                ? this.getDateTime(t)
                : (r.push(n), null);
          }),
          (a.getDateTime = function (t) {
            var e = this.getLocalDate(t);
            return e != null ? e.toInstant(o("Timezone").UTC) * 1e3 : null;
          }),
          (a.getLocalDate = function (t) {
            try {
              return typeof t == "string" && t.length
                ? r("LocalDate").fromISOString(t)
                : void 0;
            } catch (e) {
              return;
            }
          }),
          (a.getMinDateObj = function (t) {
            return this.getDateObj(u.MIN_DATE, t, 0);
          }),
          (a.getMaxDateObj = function (t) {
            return this.getDateObj(u.MAX_DATE, t, Number.MAX_VALUE);
          }),
          (a.getDateObj = function (t, n, r) {
            var e = this.getDateFieldValue(n, t);
            if (e != null && this.isValidDateFormat(e)) {
              var o;
              return {
                str: e,
                value: (o = this.getDateTime(e)) != null ? o : r,
              };
            } else return { str: "", value: r };
          }),
          n
        );
      })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    ((l.DATE_PROPS = u), (l.WAFlowJSONDateValidatorV500 = c));
  },
  98,
);
