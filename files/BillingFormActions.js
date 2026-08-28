__d(
  "BillingFormActions",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "This field is required.");
    function u(e, t) {
      return Object.keys(e.fields).reduce(function (n, r) {
        var o;
        return babelHelpers.extends(
          {},
          n,
          ((o = {}),
          (o[r] =
            t != null && r === t.key ? t.updatedValue : e.fields[r].value),
          o),
        );
      }, {});
    }
    function c(e) {
      return Object.keys(e.fields).reduce(function (t, n) {
        var r;
        return babelHelpers.extends(
          {},
          t,
          ((r = {}), (r[n] = e.fields[n].error), r),
        );
      }, {});
    }
    function d(e, t, n, r) {
      var o,
        a = r[t].onChange;
      if (a != null) {
        var i,
          l = a(n, u(e)),
          s = Object.keys(e.fields).reduce(function (t, n) {
            var r;
            return babelHelpers.extends(
              {},
              t,
              ((r = {}),
              (r[n] = babelHelpers.extends({}, e.fields[n], { value: l[n] })),
              r),
            );
          }, {});
        return babelHelpers.extends({}, e, {
          fields: babelHelpers.extends(
            {},
            s,
            ((i = {}),
            (i[t] = babelHelpers.extends({}, s[t], { touched: !1 })),
            i),
          ),
          isDirty: !0,
        });
      }
      return babelHelpers.extends({}, e, {
        fields: babelHelpers.extends(
          {},
          e.fields,
          ((o = {}),
          (o[t] = babelHelpers.extends({}, e.fields[t], {
            touched: !1,
            value: n,
          })),
          o),
        ),
        isDirty: !0,
      });
    }
    function m(t, n, r) {
      if (Object.prototype.hasOwnProperty.call(Object(r), t)) {
        var o = r[t],
          a = o.fieldEmptyError,
          i = o.isEmpty,
          l = o.required,
          s = o.validate,
          u = n[t],
          c = typeof l == "function" ? l(n) : l,
          d =
            (typeof u == "string" && u.trim().length === 0) ||
            (i != null && i(u));
        if (!c && d) return { error: null, validationState: null };
        if (c && d)
          return { error: a != null ? a : e, validationState: "ERROR" };
        if (s != null) {
          var m = s(u, n) || null;
          return m != null
            ? typeof m == "object" &&
              m.message != null &&
              m.validationState != null
              ? { error: m.message, validationState: m.validationState }
              : { error: m, validationState: "ERROR" }
            : { error: m, validationState: null };
        }
      }
      return { error: null, validationState: null };
    }
    function p(e, t, n) {
      var r = u(e),
        o = !0,
        a,
        i = Array.from(
          new Set([].concat(Array.from(n), Object.keys(e.fields))),
        ),
        l = i.reduce(function (n, i) {
          var l,
            s = m(i, r, t),
            u = s.error,
            c = s.validationState;
          return (
            u != null && c !== "WARN" && ((o = !1), a == null && (a = i)),
            babelHelpers.extends(
              {},
              n,
              ((l = {}),
              (l[i] = babelHelpers.extends({}, e.fields[i], {
                error: u,
                validationState: c,
              })),
              l),
            )
          );
        }, {});
      return babelHelpers.extends({}, e, {
        fields: l,
        focusedField: a,
        isValid: o,
      });
    }
    function _(e, t) {
      var n = !0,
        r = Object.keys(e.fields).reduce(function (r, o) {
          var a,
            i,
            l = (a = t[o]) != null ? a : null;
          return (
            l != null && (n = !1),
            babelHelpers.extends(
              {},
              r,
              ((i = {}),
              (i[o] = babelHelpers.extends({}, e.fields[o], {
                error: l,
                touched: l != null ? !0 : e.fields[o].touched,
                validationState: l != null ? "ERROR" : null,
              })),
              i),
            )
          );
        }, {});
      return babelHelpers.extends({}, e, { fields: r, isValid: n });
    }
    function f(e, t, n, r, o) {
      var a,
        i = r[e].onBlur,
        l = t;
      n && (l = p(t, r, o));
      var s = l.fields[e].value;
      return (
        i != null && (s = i(l.fields[e].value)),
        babelHelpers.extends({}, l, {
          fields: babelHelpers.extends(
            {},
            l.fields,
            ((a = {}),
            (a[e] = babelHelpers.extends({}, l.fields[e], {
              touched: !0,
              value: s,
            })),
            a),
          ),
          focusedField: void 0,
        })
      );
    }
    function g(e) {
      var t = Object.keys(e.fields).reduce(function (t, n) {
        var r;
        return babelHelpers.extends(
          {},
          t,
          ((r = {}),
          (r[n] = babelHelpers.extends({}, e.fields[n], { touched: !0 })),
          r),
        );
      }, {});
      return babelHelpers.extends({}, e, {
        fields: t,
        focusedField: e.focusedField,
        isValid: !1,
      });
    }
    function h(e, t) {
      return Object.keys(e).reduce(
        function (n, r) {
          var o, a;
          return babelHelpers.extends({}, n, {
            fields: babelHelpers.extends(
              {},
              n.fields,
              ((a = {}),
              (a[r] = {
                error: null,
                touched: !1,
                validationState: null,
                value: (o = t[r]) != null ? o : e[r].defaultValue,
              }),
              a),
            ),
          });
        },
        { fields: {}, isDirty: !0, isValid: !0 },
      );
    }
    ((l.requiredFieldError = e),
      (l.getValues = u),
      (l.getErrors = c),
      (l.onChangeAction = d),
      (l.validateField = m),
      (l.runValidateAction = p),
      (l.setErrorsAction = _),
      (l.onBlurAction = f),
      (l.onSubmitFailureAction = g),
      (l.resetForm = h));
  },
  226,
);
