__d(
  "AndromedaValidatorConfigReverseInteropExpectedMismatch",
  [
    "AndromedaValidatorConfigReverseInteropBase",
    "AndromedaValidatorTreeMatcherOptions",
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
        return (babelHelpers.inheritsLoose(n, t), n);
      })(r("AndromedaValidatorConfigReverseInteropBase")),
      u = new s();
    l.default = u;
  },
  98,
);
