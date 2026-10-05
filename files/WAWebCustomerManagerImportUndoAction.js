__d(
  "WAWebCustomerManagerImportUndoAction",
  [
    "Promise",
    "WALogger",
    "WAWebContactManagerCustomerProfileDeleteMutation",
    "WAWebCustomerManagerDeleteContactAction",
    "WAWebCustomerProfileChangeNotifier",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 10;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = !1,
            n = !1;
          try {
            (e.wasNewProfile &&
              (yield o(
                "WAWebContactManagerCustomerProfileDeleteMutation",
              ).deleteCustomerProfileFromServer(e.chatJid)),
              e.wasNewContact &&
                ((t = !0),
                yield o(
                  "WAWebCustomerManagerDeleteContactAction",
                ).deleteContactFromCustomerManager(e.chatJid),
                (n = !0)));
          } finally {
            (e.wasNewProfile || t) &&
              !n &&
              o(
                "WAWebCustomerProfileChangeNotifier",
              ).notifyCustomerProfileChanged(e.chatJid);
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(t, n, a) {
      return n.reduce(function (n, a, i) {
        return a.status === "fulfilled"
          ? babelHelpers.extends({}, n, { successCount: n.successCount + 1 })
          : (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[cm:import] undo failed for row ",
                    "",
                  ])),
                t[i].rowIndex,
              )
              .catching(r("getErrorSafe")(a.reason))
              .sendLogs("cm-import-undo-row-failed"),
            babelHelpers.extends({}, n, { failureCount: n.failureCount + 1 }));
      }, a);
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          if (t >= e.length) return r;
          var o = e.slice(t, t + c),
            a = yield (u || (u = n("Promise"))).allSettled(
              o.map(function (e) {
                return d(e);
              }),
            );
          return _(e, t + c, p(o, a, r));
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
          var t = yield _(e, 0, { failureCount: 0, successCount: 0 });
          return (
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[cm:import] undo complete: ",
                    " ok, ",
                    " failed",
                  ])),
                t.successCount,
                t.failureCount,
              )
              .sendLogs("cm-import-undo-complete"),
            t
          );
        })),
        h.apply(this, arguments)
      );
    }
    l.undoImportedContacts = g;
  },
  98,
);
