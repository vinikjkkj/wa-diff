__d(
  "WAWebPrimaryVersionSync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = { CURRENT: "current", SESSION_START: "session_start" },
      c = (function (t) {
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
            return o("WASyncdConst").Actions.PrimaryVersion;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this,
                  r = 0,
                  a = 0,
                  i = t.map(function (e) {
                    var t;
                    if (e.operation !== "set")
                      return (
                        r++,
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Unsupported,
                        }
                      );
                    var i = e.indexParts,
                      l = e.value,
                      s = i[1];
                    if (!s || (s !== u.CURRENT && s !== u.SESSION_START))
                      return n.malformedActionIndex();
                    var c =
                      (t = l.primaryVersionAction) == null ? void 0 : t.version;
                    return c == null
                      ? (a++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          n.collectionName,
                        ))
                      : {
                          actionState:
                            o("WASyncdConst").SyncActionState.Success,
                        };
                  });
                return (
                  r > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: primary version sync, ",
                          " operations not supported",
                        ])),
                      r,
                    ),
                  a > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: primary version sync, ",
                          " malformed mutations",
                        ])),
                      a,
                    ),
                  i
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
      d = new c();
    l.default = d;
  },
  98,
);
