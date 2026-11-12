__d(
  "WAWebCustomerManagerImportUndoAction",
  [
    "Promise",
    "WALogger",
    "WAWebContactManagerCustomerProfileDeleteMutation",
    "WAWebCustomerManagerDeleteContactAction",
    "WAWebCustomerManagerGating",
    "WAWebCustomerManagerImportRateLimiter",
    "WAWebCustomerProfileChangeNotifier",
    "WAWebDeleteContactAction",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 10,
      d = 250;
    function m(t, n, a) {
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
    function p(e, t, n, r, o) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, o, a) {
            var i;
            if (
              (o === void 0 && (o = 0), a === void 0 && (a = []), o >= e.length)
            )
              return a;
            var l = yield (u || (u = n("Promise"))).allSettled(
              e.slice(o, o + t).map(r),
            );
            return ((i = a).push.apply(i, l), p(e, t, r, o + t, a));
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      var r = n && t.status === "fulfilled";
      (e.wasNewProfile || n) &&
        !r &&
        o("WAWebCustomerProfileChangeNotifier").notifyCustomerProfileChanged(
          e.chatJid,
        );
    }
    function g(e, t, n, r, o) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            if ((i === void 0 && (i = 0), i >= t.length)) return a;
            var l = t.slice(i, i + d),
              s = a,
              u = s
                ? {
                    status: "rejected",
                    reason: r("err")("[cm:import] undo rate-limited"),
                  }
                : null;
            if (u == null)
              try {
                yield o("WAWebDeleteContactAction").deleteContactBatchAction(
                  l.map(function (e) {
                    var t = e.phoneNumber;
                    return t;
                  }),
                );
              } catch (e) {
                ((s = o(
                  "WAWebCustomerManagerImportRateLimiter",
                ).isUsyncRateLimit(e)),
                  (u = { status: "rejected", reason: r("getErrorSafe")(e) }));
              }
            var m = u,
              _ =
                m != null
                  ? l.map(function () {
                      return m;
                    })
                  : yield p(l, c, function (t) {
                      var n = t.index,
                        r = t.lid;
                      return o(
                        "WAWebCustomerManagerDeleteContactAction",
                      ).finishContactDelete(e[n].chatJid, r);
                    });
            return (
              l.forEach(function (e, t) {
                var r = e.index;
                n[r] = _[t];
              }),
              g(e, t, n, s, i + d)
            );
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.rateLimited) throw r("err")("[cm:import] undo rate-limited");
          try {
            yield o(
              "WAWebCustomerManagerDeleteContactAction",
            ).deleteContactFromCustomerManager(e);
          } catch (e) {
            throw (
              o("WAWebCustomerManagerImportRateLimiter").isUsyncRateLimit(e) &&
                (t.rateLimited = !0),
              e
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return p(
            e,
            c,
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
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
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield p(
              e,
              c,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    e.wasNewProfile &&
                      (yield o(
                        "WAWebContactManagerCustomerProfileDeleteMutation",
                      ).deleteCustomerProfileFromServer(e.chatJid));
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            r = e.flatMap(function (e, n) {
              return e.wasNewContact && t[n].status === "fulfilled" ? [n] : [];
            }),
            a = yield p(r, c, function (t) {
              return o(
                "WAWebCustomerManagerDeleteContactAction",
              ).planContactDelete(e[t].chatJid);
            }),
            i = [],
            l = [];
          r.forEach(function (e, n) {
            var r = a[n];
            r.status === "rejected"
              ? (t[e] = r)
              : r.value.kind === "batch"
                ? i.push({
                    index: e,
                    phoneNumber: r.value.phoneNumber,
                    lid: r.value.lid,
                  })
                : l.push(e);
          });
          var s = { rateLimited: yield g(e, i, t, !1) },
            u = yield p(l, c, function (t) {
              return y(e[t].chatJid, s);
            });
          l.forEach(function (e, n) {
            t[e] = u[n];
          });
          var d = new Set(r);
          return (
            e.forEach(function (e, n) {
              f(e, t[n], d.has(n));
            }),
            t
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
              "WAWebCustomerManagerGating",
            ).customerManagerImportExportEnabled()
              ? yield S(e)
              : yield b(e),
            n = m(e, t, { failureCount: 0, successCount: 0 });
          return (
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[cm:import] undo complete: ",
                    " ok, ",
                    " failed",
                  ])),
                n.successCount,
                n.failureCount,
              )
              .sendLogs("cm-import-undo-complete"),
            n
          );
        })),
        E.apply(this, arguments)
      );
    }
    l.undoImportedContacts = L;
  },
  98,
);
