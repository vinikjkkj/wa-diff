__d(
  "WAWebAddonProcessDeleteForMe",
  [
    "Promise",
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebAddonSortUtils",
    "WAWebAddonUpdateDataUtils",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebAddonDBTable").addonDBTable.getByMsgKey(
            o("WAWebMsgType").MSG_TYPE.COMMENT,
            e,
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield o("WAWebAddonUpdateDataUtils").updateAddonsInTableMode(
            {
              processMode: o("WAWebAddonConstants").AddonProcessMode
                .DeleteForMe,
              tableMode: e,
            },
            { remove: t },
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(t) {
      return Array.from(
        o("WAWebAddonSortUtils").groupAddonsByTableMode(t),
        function (n) {
          var r = n[0],
            a = n[1];
          return d(r, a).catch(function (n) {
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
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = p(e);
          yield (s || (s = n("Promise"))).all(t);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield _([e]);
        })),
        h.apply(this, arguments)
      );
    }
    ((l.hasDeleteAddonForMe = u),
      (l.processDeleteForMe = _),
      (l.processDeleteForMeSingle = g));
  },
  98,
);
