__d(
  "WAWebTimeFormatSync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebBackendApi",
    "WAWebSyncdAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.TimeFormat;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this,
                  r = 0,
                  a = t.map(function (e) {
                    var t;
                    if (e.operation !== "set")
                      return (
                        r++,
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Unsupported,
                        }
                      );
                    var a =
                      (t = e.value.timeFormatAction) == null
                        ? void 0
                        : t.isTwentyFourHourFormatEnabled;
                    return a == null
                      ? n.malformedActionIndex()
                      : (o("WAWebBackendApi").frontendFireAndForget(
                          "setIs24Hour",
                          { is24Hour: a },
                        ),
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Success,
                        });
                  });
                return (
                  r > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "time format sync: ",
                          " operations not supported",
                        ])),
                      r,
                    ),
                  a
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      u = new s();
    l.default = u;
  },
  98,
);
