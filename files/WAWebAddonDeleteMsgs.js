__d(
  "WAWebAddonDeleteMsgs",
  [
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebAddonLogUtils",
    "WAWebAddonPerfUtils",
    "WAWebAddonUpdateDataUtils",
    "WAWebMsgKey",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n) {
      var r;
      try {
        r = await Promise.all(
          n.map(function (e) {
            return o(
              "WAWebAddonDBTable",
            ).addonInternalDBTable.bulkGetByParentMsgKey(t, [e]);
          }),
        ).then(function (e) {
          var t;
          return (t = []).concat.apply(t, e);
        });
      } catch (e) {
        return;
      }
      if (r.length !== 0) {
        var a = await o("WAWebAddonPerfUtils").createAddonQplMarker(
          o("WAWebAddonPerfUtils").AddonQplMarkerType.UI,
          {
            mode: t,
            type: o("WAWebAddonPerfUtils").AnnotationRequestType
              .BulkRemoveByParents,
            size: r.length,
          },
        );
        try {
          (await o("WAWebAddonUpdateDataUtils").updateAddonsInTableMode(
            {
              processMode: o("WAWebAddonConstants").AddonProcessMode
                .DeleteWithParent,
              tableMode: t,
            },
            { remove: r },
          ),
            a == null || a.success());
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
            a == null || a.fail(),
            n
          );
        }
      }
    }
    async function c(e) {
      var t = e.parentMsgKeys,
        n = t.map(function (e) {
          return r("WAWebMsgKey").fromString(e);
        }),
        a = [];
      for (var i of o("WAWebAddonConstants").AddonTableMode.members())
        i !== o("WAWebAddonConstants").AddonTableMode.None && a.push(u(i, n));
      var l = await Promise.allSettled(a);
      o("WAWebAddonLogUtils").hasSettledWithError(l) &&
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "delete addons finished with errors",
              ])),
          )
          .tags("addons", "messaging")
          .sendLogs("deleteAddonMsgsByParentKeys");
    }
    l.deleteAddonMsgsByParentKeys = c;
  },
  98,
);
