__d(
  "WAWebAddonProcessDeleteForMe",
  [
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebAddonSortUtils",
    "WAWebAddonUpdateDataUtils",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      return o("WAWebAddonDBTable").addonDBTable.getByMsgKey(
        o("WAWebMsgType").MSG_TYPE.COMMENT,
        e,
      );
    }
    async function u(e, t) {
      await o("WAWebAddonUpdateDataUtils").updateAddonsInTableMode(
        {
          processMode: o("WAWebAddonConstants").AddonProcessMode.DeleteForMe,
          tableMode: e,
        },
        { remove: t },
      );
    }
    function c(t) {
      return Array.from(
        o("WAWebAddonSortUtils").groupAddonsByTableMode(t),
        function (n) {
          var r = n[0],
            a = n[1];
          return u(r, a).catch(function (n) {
            var a;
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "processDeleteForMe failed: ",
                    "",
                  ])),
                n,
              )
              .tags("messaging", "addons")
              .sendLogs(
                "deleteAddonForMe: " +
                  ((a = t[0]) == null ? void 0 : a.type) +
                  " in " +
                  String(r) +
                  " failed",
              );
          });
        },
      );
    }
    async function d(e) {
      var t = c(e);
      await Promise.all(t);
    }
    async function m(e) {
      await d([e]);
    }
    ((l.hasDeleteAddonForMe = s),
      (l.processDeleteForMe = d),
      (l.processDeleteForMeSingle = m));
  },
  98,
);
