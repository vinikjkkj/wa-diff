__d(
  "WAWebPnForLidChatSync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebDBCreateLidPnMappings",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
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
            return o("WASyncdConst").Actions.PnForLidChat;
          }),
          (r.applyMutations = async function (n) {
            var t = this,
              r = [],
              a = 0,
              i = 0,
              l = 0,
              c = n.map(function (e) {
                var n;
                if (e.operation !== "set")
                  return (
                    a++,
                    {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    }
                  );
                var s = e.indexParts[1];
                if (!o("WAWebWidFactory").isWidlike(s))
                  return (i++, t.malformedActionIndex());
                var u =
                  (n = e.value.pnForLidChatAction) == null ? void 0 : n.pnJid;
                if (u == null || !o("WAWebWidFactory").isWidlike(u))
                  return (
                    l++,
                    o("WAWebSyncdIndexUtils").malformedActionValue(
                      t.collectionName,
                    )
                  );
                var c = o("WAWebWidFactory").createUserWidOrThrow(u),
                  d = o("WAWebWidFactory").createUserLidOrThrow(s);
                return (
                  r.push({ lid: d, pn: c }),
                  { actionState: o("WASyncdConst").SyncActionState.Success }
                );
              });
            return (
              a > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "pn_for_lid_chat sync: ",
                      " operations not supported",
                    ])),
                  a,
                ),
              i > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "pn_for_lid_chat sync: ",
                      " malformed mutations - invalid key",
                    ])),
                  i,
                ),
              l > 0 &&
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "pn_for_lid_chat sync: ",
                      " malformed mutations - invalid pnJid",
                    ])),
                  l,
                ),
              await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: r,
                flushImmediately: !0,
                learningSource: "other",
              }),
              c
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
