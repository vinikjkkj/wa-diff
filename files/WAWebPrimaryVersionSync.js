__d(
  "WAWebPrimaryVersionSync",
  ["WALogger", "WASyncdConst", "WAWebSyncdAction", "WAWebSyncdIndexUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = { CURRENT: "current", SESSION_START: "session_start" },
      c = (function (t) {
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
            return o("WASyncdConst").Actions.PrimaryVersion;
          }),
          (r.applyMutations = async function (n) {
            var t = this,
              r = 0,
              a = 0,
              i = n.map(function (e) {
                var n;
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
                  return t.malformedActionIndex();
                var c =
                  (n = l.primaryVersionAction) == null ? void 0 : n.version;
                return c == null
                  ? (a++,
                    o("WAWebSyncdIndexUtils").malformedActionValue(
                      t.collectionName,
                    ))
                  : { actionState: o("WASyncdConst").SyncActionState.Success };
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
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
