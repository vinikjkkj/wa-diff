__d(
  "WAWebAddonDeleteAddons",
  [
    "WALogger",
    "WAWebAddonProcessDeleteForMe",
    "WAWebDeleteMessageForMeSync",
    "WAWebSyncd",
    "WAWebSyncdDb",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield r(
            "WAWebDeleteMessageForMeSync",
          ).getDeleteForMeMutations(e, t);
          yield o("WAWebSyncdDb").appendPendingMutationsRows(n);
          var a = n.map(function (e) {
            return e.collection;
          });
          o("WAWebSyncd").markCollectionsForSync(a);
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            (yield s(t, n),
              yield o("WAWebAddonProcessDeleteForMe").processDeleteForMe(
                [].concat(t),
              ));
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "failed outgoing addons delete for me  ",
                    "",
                  ])),
                t,
              )
              .tags("addons", "messaging")
              .sendLogs("sendDeleteAddonsForMe");
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.sendDeleteAddonsForMe = c;
  },
  98,
);
