__d(
  "BillingFormContext",
  ["BillingError", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext,
      c = s.useCallback,
      d = s.useContext,
      m = s.useMemo,
      p = u({
        fields: {},
        onBlur: function () {},
        onChange: function () {},
        onScanCardResult: function () {},
        renderedFieldsRef: { current: new Set() },
        resetForm: function () {},
      });
    function _(e) {
      var t = d(p);
      if (t == null)
        throw new (r("BillingError"))(
          "useBillingFormField: FormContext is null",
          "required parameter is missing or invalid",
          { event_action: "unknown", event_side: "client_side" },
          { action: "unknown", document_name: "screen" },
          "critical_error",
        );
      var n = t.fields,
        o = t.focusedField,
        a = t.onBlur,
        i = t.onChange,
        l = t.renderedFieldsRef,
        s = n[e];
      l.current.add(e);
      var u = c(
          function () {
            return a(e);
          },
          [e, a],
        ),
        _ = c(
          function (t, n) {
            return i(e, t, n);
          },
          [e, i],
        );
      return m(
        function () {
          var t =
            s != null
              ? s
              : {
                  error: null,
                  touched: !1,
                  validationState: null,
                  value: null,
                };
          return babelHelpers.extends({}, t, {
            hasFocused: o === e,
            onBlur: u,
            onChange: _,
          });
        },
        [s, o, e, u, _],
      );
    }
    function f() {
      var e = o("react-compiler-runtime").c(2),
        t = d(p);
      if (t == null)
        throw new (r("BillingError"))(
          "useBillingFormValues: FormContext is null",
          "required parameter is missing or invalid",
          { event_action: "unknown", event_side: "client_side" },
          { action: "unknown", document_name: "screen" },
          "critical_error",
        );
      var n;
      e[0] !== t.fields
        ? ((n = Object.keys(t.fields).reduce(function (e, n) {
            var r;
            return babelHelpers.extends(
              {},
              e,
              ((r = {}), (r[n] = t.fields[n].value), r),
            );
          }, {})),
          (e[0] = t.fields),
          (e[1] = n))
        : (n = e[1]);
      var a = n;
      return a;
    }
    ((l.BillingFormContext = p),
      (l.useBillingFormField = _),
      (l.useBillingFormValues = f));
  },
  98,
);
