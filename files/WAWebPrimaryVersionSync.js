__d(
  "WAWebPrimaryVersionSync",
  [
    "WALogger",
    "WAWebPrimaryVersion",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
  ],
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
            (e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow),
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
            return o("WAWebSyncdConst").Actions.PrimaryVersion;
          }),
          (r.applyMutations = async function (n) {
            var t = this,
              r = 0,
              a = 0,
              i = null,
              l = n.map(function (e) {
                var n;
                if (e.operation !== "set")
                  return (
                    r++,
                    {
                      actionState:
                        o("WAWebSyncdConst").SyncActionState.Unsupported,
                    }
                  );
                var l = e.indexParts,
                  s = e.value,
                  c = l[1];
                if (!c || (c !== u.CURRENT && c !== u.SESSION_START))
                  return t.malformedActionIndex();
                var d =
                  (n = s.primaryVersionAction) == null ? void 0 : n.version;
                return d == null
                  ? (a++,
                    o("WAWebSyncdIndexUtils").malformedActionValue(
                      t.collectionName,
                    ))
                  : (c === u.CURRENT && (i = d),
                    {
                      actionState: o("WAWebSyncdConst").SyncActionState.Success,
                    });
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
              i != null &&
                (await o("WAWebPrimaryVersion").storePrimaryCurrentVersion(i)),
              l
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
