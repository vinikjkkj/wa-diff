__d(
  "WAWebAddonDeleteMsgs",
  [
    "Promise",
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebAddonLogUtils",
    "WAWebAddonPerfUtils",
    "WAWebAddonUpdateDataUtils",
    "WAWebMsgKey",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a;
          try {
            a = yield (u || (u = n("Promise")))
              .all(
                r.map(function (e) {
                  return o(
                    "WAWebAddonDBTable",
                  ).addonInternalDBTable.bulkGetByParentMsgKey(t, [e]);
                }),
              )
              .then(function (e) {
                var t;
                return (t = []).concat.apply(t, e);
              });
          } catch (e) {
            return;
          }
          if (a.length !== 0) {
            var i = yield o("WAWebAddonPerfUtils").createAddonQplMarker(
              o("WAWebAddonPerfUtils").AddonQplMarkerType.UI,
              {
                mode: t,
                type: o("WAWebAddonPerfUtils").AnnotationRequestType
                  .BulkRemoveByParents,
                size: a.length,
              },
            );
            try {
              (yield o("WAWebAddonUpdateDataUtils").updateAddonsInTableMode(
                {
                  processMode: o("WAWebAddonConstants").AddonProcessMode
                    .DeleteWithParent,
                  tableMode: t,
                },
                { remove: a },
              ),
                i == null || i.success());
            } catch (n) {
              throw (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "deleteAddonMsgsByParentKeys for ",
                      ": ",
                      "",
                    ])),
                  t,
                  n,
                ),
                i == null || i.fail(),
                n
              );
            }
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.parentMsgKeys,
            a = t.map(function (e) {
              return r("WAWebMsgKey").fromString(e);
            }),
            i = [];
          for (var l of o("WAWebAddonConstants").AddonTableMode.members())
            l !== o("WAWebAddonConstants").AddonTableMode.None &&
              i.push(c(l, a));
          var d = yield (u || (u = n("Promise"))).allSettled(i);
          o("WAWebAddonLogUtils").hasSettledWithError(d) &&
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "delete addons finished with errors",
                  ])),
              )
              .tags("addons", "messaging")
              .sendLogs("deleteAddonMsgsByParentKeys");
        })),
        p.apply(this, arguments)
      );
    }
    l.deleteAddonMsgsByParentKeys = m;
  },
  98,
);
