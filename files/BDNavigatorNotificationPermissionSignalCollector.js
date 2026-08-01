__d(
  "BDNavigatorNotificationPermissionSignalCollector",
  [
    "BDSignalCollectorBase",
    "ErrorSignalValueType",
    "SignalErrorValueTypeDef",
    "StringSignalValueType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.call(this, u.signalType) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.executeAsyncSignalCollection = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e;
              try {
                if (navigator.permissions) {
                  var t = yield navigator.permissions.query({
                    name: "notifications",
                  });
                  e = new (r("StringSignalValueType"))(
                    Date.now(),
                    this.getContext(),
                    t.state,
                  );
                } else
                  e = new (r("ErrorSignalValueType"))(
                    Date.now(),
                    this.getContext(),
                    new (o("SignalErrorValueTypeDef").SignalErrorValueTypeDef)(
                      3,
                      "navigator.permissions not supported",
                    ),
                  );
              } catch (t) {
                e = new (r("ErrorSignalValueType"))(
                  Date.now(),
                  this.getContext(),
                  new (o("SignalErrorValueTypeDef").SignalErrorValueTypeDef)(
                    3,
                    "notifications cannot be queried from navigator.permissions",
                  ),
                );
              }
              return { valueOrError: e };
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(r("BDSignalCollectorBase")),
      s = null,
      u = {
        signalType: 30008,
        get: function () {
          return (s == null && (s = new e()), s);
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
