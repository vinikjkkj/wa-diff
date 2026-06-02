__d(
  "WAWebShareOwnPnSync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebSyncdAction",
    "WAWebUpdateLidMetadataJob",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 8;
          }),
          (r.getAction = function () {
            return o("WASyncdConst").Actions.ShareOwnPn;
          }),
          (r.applyMutations = async function (n) {
            var t = this,
              r = [],
              a = 0,
              i = 0,
              l = n.map(function (e) {
                if (e.operation !== "set")
                  return (
                    a++,
                    {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    }
                  );
                var n = e.indexParts[1];
                if (!o("WAWebWidFactory").isWidlike(n))
                  return (i++, t.malformedActionIndex());
                var l = o("WAWebWidFactory").createUserLidOrThrow(n);
                return (
                  r.push({ lid: l, data: { shareOwnPn: !0 } }),
                  { actionState: o("WASyncdConst").SyncActionState.Success }
                );
              });
            return (
              a > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "share_own_pn sync: ",
                      " operations not supported",
                    ])),
                  a,
                ),
              i > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "share_own_pn sync: ",
                      " malformed mutations - invalid key",
                    ])),
                  i,
                ),
              await o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(r),
              l
            );
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      c = new u();
    l.default = c;
  },
  98,
);
