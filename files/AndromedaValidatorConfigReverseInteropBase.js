__d(
  "AndromedaValidatorConfigReverseInteropBase",
  [
    "AndromedaValidatorConfig",
    "AndromedaValidatorTreeMatcherOptions",
    "getErrorSafe",
    "mergeAnnotations",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        __global: babelHelpers.extends(
          {},
          o("AndromedaValidatorTreeMatcherOptions").baseGlobalOptions,
          { matchers: {} },
        ),
      },
      s = (function (t) {
        function n() {
          for (var n, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
            a[i] = arguments[i];
          return (
            (n = t.call.apply(t, [this].concat(a)) || this),
            (n.validationType = "reverse_interop_expected_mismatch"),
            (n.qplEvent = r("qpl")._(41499532, "984")),
            (n.logDataOnMismatch = !0),
            (n.logActionsOnMismatch = !1),
            (n.treeMatcherOptions = e),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.compareState = function (t, n, o, a, i, l, s) {
            i === void 0 && (i = null);
            var e = {},
              u,
              c;
            try {
              if (s != null) {
                var d = {},
                  m = {};
                (Object.keys(a).map(function (e, t) {
                  d[e] = a[e][s];
                }),
                  Object.keys(o).map(function (e, t) {
                    m[e] = o[e][s];
                  }),
                  (u = JSON.stringify(d)),
                  (c = JSON.stringify(m)));
              }
            } catch (t) {
              var p = r("getErrorSafe")(t);
              e.string = { error: p.toString(), error_stack: p.stack };
            }
            var _ = r("mergeAnnotations")(
              e,
              r("mergeAnnotations")(
                {
                  string: {
                    ids: JSON.stringify(n),
                    testUpdatedTimes: u,
                    controlUpdatedTimes: c,
                  },
                },
                i,
              ),
            );
            this.logWithoutTypeGuards(t, o, a, {
              extraAnnotations: _,
              fieldsToMatch: l,
            });
          }),
          n
        );
      })(r("AndromedaValidatorConfig"));
    l.default = s;
  },
  98,
);
