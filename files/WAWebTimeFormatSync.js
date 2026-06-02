__d(
  "WAWebTimeFormatSync",
  ["WALogger", "WASyncdConst", "WAWebBackendApi", "WAWebSyncdAction"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 7;
          }),
          (r.getAction = function () {
            return o("WASyncdConst").Actions.TimeFormat;
          }),
          (r.applyMutations = async function (n) {
            var t = this,
              r = 0,
              a = n.map(function (e) {
                var n;
                if (e.operation !== "set")
                  return (
                    r++,
                    {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    }
                  );
                var a =
                  (n = e.value.timeFormatAction) == null
                    ? void 0
                    : n.isTwentyFourHourFormatEnabled;
                return a == null
                  ? t.malformedActionIndex()
                  : (o("WAWebBackendApi").frontendFireAndForget("setIs24Hour", {
                      is24Hour: a,
                    }),
                    { actionState: o("WASyncdConst").SyncActionState.Success });
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
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      u = new s();
    l.default = u;
  },
  98,
);
