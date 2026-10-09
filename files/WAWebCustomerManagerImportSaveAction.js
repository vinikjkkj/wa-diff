__d(
  "WAWebCustomerManagerImportSaveAction",
  [
    "Promise",
    "WALogger",
    "WAWebContactCollection",
    "WAWebCustomerDataFieldSaver",
    "WAWebCustomerManagerCreateCustomerRecord",
    "WAWebCustomerManagerImportDateParsingUtils",
    "WAWebCustomerManagerImportEmailWarnings",
    "WAWebCustomerManagerImportExistingCustomerDetector",
    "WAWebCustomerManagerImportTemplateUtils",
    "WAWebCustomerProfileAcquisitionSourceNames",
    "WAWebFrontendContactGetters",
    "WAWebLeadStageNames",
    "WAWebSaveContactAction",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 10,
      f = 50;
    function g(e) {
      var t;
      if (e.lid == null)
        throw r("err")("Imported contact missing lid; cannot resolve chatJid");
      var n = o("WAWebWidFactory").createUserWidOrThrow(e.lid);
      return {
        acquisitionSource: L(e),
        address:
          (t = o(
            "WAWebCustomerManagerImportTemplateUtils",
          ).readCustomerManagerImportColumn(e, "address")) != null
            ? t
            : "",
        birthday: S(e, "birthday"),
        chatJid: o("WAWebWidToJid").widToChatJid(n),
        email: v(e),
        firstName: e.firstName,
        lastName: e.lastName,
        leadStage: R(e),
        lastOrder: S(e, "lastOrder"),
        note: o(
          "WAWebCustomerManagerImportTemplateUtils",
        ).readCustomerManagerImportColumn(e, "note"),
        phoneNumber: C(e),
        profileWid: n,
        username: b(e),
      };
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o(
            "WAWebCustomerManagerCreateCustomerRecord",
          ).createCustomerRecord(g(e));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return e.phone.replace(/\D/g, "");
    }
    function b(e) {
      return o(
        "WAWebCustomerManagerImportTemplateUtils",
      ).readCustomerManagerImportColumn(e, "username");
    }
    function v(e) {
      var t,
        n =
          (t = o(
            "WAWebCustomerManagerImportTemplateUtils",
          ).readCustomerManagerImportColumn(e, "email")) != null
            ? t
            : "";
      return o("WAWebCustomerManagerImportEmailWarnings").isValidImportEmail(n)
        ? n
        : "";
    }
    function S(e, t) {
      return o(
        "WAWebCustomerManagerImportDateParsingUtils",
      ).readValidCustomerManagerImportDate(
        o(
          "WAWebCustomerManagerImportTemplateUtils",
        ).readCustomerManagerImportColumn(e, t),
        t,
      );
    }
    function R(e) {
      var t = o(
        "WAWebCustomerManagerImportTemplateUtils",
      ).readCustomerManagerImportColumn(e, "leadStage");
      return t != null
        ? o("WAWebLeadStageNames").getLeadStageFromName(t)
        : null;
    }
    function L(e) {
      var t = o(
        "WAWebCustomerManagerImportTemplateUtils",
      ).readCustomerManagerImportColumn(e, "acquisitionSource");
      return t != null
        ? o(
            "WAWebCustomerProfileAcquisitionSourceNames",
          ).getProfileAcquisitionSourceIdFromLabel(t)
        : null;
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(
              o("WAWebCustomerManagerImportExistingCustomerDetector")
                .resolveBareLid,
            ),
            n = yield T(t),
            r = new Map();
          return (
            e.forEach(function (e, a) {
              var i = e.lid;
              i == null ||
                t[a] == null ||
                r.set(e, {
                  chatJid: o("WAWebWidToJid").widToChatJid(
                    o("WAWebWidFactory").createUserWidOrThrow(i),
                  ),
                  wasNewContact: I(e, i),
                  wasNewProfile: x(t[a], n),
                });
            }),
            r
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I(t, n) {
      var a = C(t);
      try {
        var i = [o("WAWebWidFactory").createUserWidOrThrow(n)];
        return (
          a !== "" &&
            i.push(o("WAWebWidFactory").createUserWidOrThrow(a + "@c.us")),
          i.every(function (e) {
            var t = o("WAWebContactCollection").ContactCollection.get(e);
            return (
              t == null || !o("WAWebFrontendContactGetters").getIsMyContact(t)
            );
          })
        );
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] contact snapshot unreadable, treating as pre-existing",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("cm-import-snapshot-unreadable"),
          !1
        );
      }
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Set();
          if (
            (e.forEach(function (e) {
              e != null && t.add(e);
            }),
            t.size === 0)
          )
            return null;
          try {
            return yield o(
              "WAWebCustomerManagerImportExistingCustomerDetector",
            ).fetchExistingProfileLids(Array.from(t));
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] profile existence lookup failed for ",
                      " candidates; undo will keep their profiles",
                    ])),
                  t.size,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("cm-import-profile-existence-lookup-failed"),
              null
            );
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return t != null && e != null && !t.has(e);
    }
    function $(e, t, n, a) {
      var i = [],
        l = a.failureCount,
        u = a.successCount;
      return (
        t.forEach(function (t, a) {
          var c = e[a],
            d = c.rowIndex;
          if (t.status === "fulfilled") {
            var m = n.get(c);
            (m != null && i.push(babelHelpers.extends({}, m, { rowIndex: d })),
              (u += 1));
            return;
          }
          (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] save failed for row ",
                  "",
                ])),
              d,
            )
            .catching(r("getErrorSafe")(t.reason))
            .sendLogs("cm-import-save-row-failed"),
            (l += 1));
        }),
        {
          failureCount: l,
          savedContacts: [].concat(a.savedContacts, i),
          successCount: u,
        }
      );
    }
    function P(e, t, n, r, o) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o) {
            if (r >= e.length) return o;
            var a = e.slice(r, r + t),
              i = yield n(a);
            return P(e, t, n, r + t, [].concat(o, i));
          },
        )),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      var t = [],
        n = [];
      return (
        e.forEach(function (e) {
          var r,
            o,
            a,
            i,
            l = (r = (o = b(e)) == null ? void 0 : o.trim()) != null ? r : "";
          if (
            l !== "" ||
            C(e) === "" ||
            ((a = (i = e.firstName) == null ? void 0 : i.trim()) != null
              ? a
              : "") === ""
          ) {
            n.push(e);
            return;
          }
          try {
            t.push({ contact: e, input: g(e) });
          } catch (t) {
            n.push(e);
          }
        }),
        { batchable: t, individual: n }
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          try {
            yield o("WAWebSaveContactAction").saveContactBatchAction(
              e.map(function (e) {
                var t,
                  n,
                  r,
                  o = e.input;
                return {
                  firstName: (t = o.firstName) != null ? t : "",
                  lastName: (n = o.lastName) != null ? n : "",
                  phoneNumber: (r = o.phoneNumber) != null ? r : "",
                  syncToAddressbook: !1,
                };
              }),
            );
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] batched contact save failed for ",
                      " rows; retrying them per row",
                    ])),
                  e.length,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("cm-import-save-batch-fallback"),
              P(
                e,
                _,
                function (e) {
                  return (p || (p = n("Promise"))).allSettled(
                    e.map(function (e) {
                      var t = e.input;
                      return o(
                        "WAWebCustomerManagerCreateCustomerRecord",
                      ).saveCustomerContact(t);
                    }),
                  );
                },
                0,
                [],
              )
            );
          }
          return e.map(function () {
            return { status: "fulfilled", value: void 0 };
          });
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          try {
            yield o("WAWebCustomerDataFieldSaver").upsertAsCustomers(e);
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] batched profile upsert failed for ",
                      " rows",
                    ])),
                  e.length,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("cm-import-save-profile-batch-failed"),
              e.map(function () {
                return { status: "rejected", reason: t };
              })
            );
          }
          return e.map(function () {
            return { status: "fulfilled", value: void 0 };
          });
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return P(
        e,
        _,
        function (e) {
          return (p || (p = n("Promise"))).allSettled(
            e.map(function (e) {
              var t = e.input;
              return o(
                "WAWebCustomerManagerCreateCustomerRecord",
              ).readProfileForGuardedBirthday(t);
            }),
          );
        },
        0,
        [],
      );
    }
    function W(e, t) {
      return {
        chatJid: e.input.chatJid,
        extraFields: o(
          "WAWebCustomerManagerCreateCustomerRecord",
        ).buildCustomerProfileFields(
          e.input,
          t.status === "fulfilled" ? t.value : null,
        ),
        leadStage: e.input.leadStage,
      };
    }
    function q(e, t) {
      return e.filter(function (e, n) {
        return t[n].status === "fulfilled";
      });
    }
    function U(e, t, n) {
      var r = [].concat(e);
      return (
        t.forEach(function (e, t) {
          r[e] = n[t];
        }),
        r
      );
    }
    function V(e) {
      return e.map(function (e) {
        return e.status === "fulfilled"
          ? { status: "fulfilled", value: void 0 }
          : { status: "rejected", reason: e.reason };
      });
    }
    function H(e, t) {
      return P(
        e,
        _,
        function (e) {
          return (p || (p = n("Promise"))).allSettled(
            e.map(function (e) {
              var n = e.input;
              return t(n);
            }),
          );
        },
        0,
        [],
      );
    }
    function G(e, t) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield t(e.indexes);
          return {
            indexes: q(e.indexes, n),
            results: U(e.results, e.indexes, n),
          };
        })),
        z.apply(this, arguments)
      );
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield B(e),
            n = {
              indexes: q(
                e.map(function (e, t) {
                  return t;
                }),
                t,
              ),
              results: V(t),
            },
            r = yield G(n, function (t) {
              return w(
                t.map(function (t) {
                  return e[t];
                }),
              );
            }),
            a = yield G(r, function (t) {
              return H(
                t.map(function (t) {
                  return e[t];
                }),
                o("WAWebCustomerManagerCreateCustomerRecord")
                  .createCustomerChat,
              );
            }),
            i = yield G(a, function (n) {
              return F(
                n.map(function (n) {
                  return W(e[n], t[n]);
                }),
              );
            }),
            l = yield G(i, function (t) {
              return H(
                t.map(function (t) {
                  return e[t];
                }),
                o("WAWebCustomerManagerCreateCustomerRecord").writeCustomerNote,
              );
            });
          return l.results;
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield E(e),
            r = M(e),
            a = r.batchable,
            i = r.individual,
            l = yield P(a, f, j, 0, []),
            s = yield P(
              i,
              _,
              function (e) {
                return (p || (p = n("Promise"))).allSettled(
                  e.map(function (e) {
                    return h(e);
                  }),
                );
              },
              0,
              [],
            ),
            u = $(
              i,
              s,
              t,
              $(
                a.map(function (e) {
                  var t = e.contact;
                  return t;
                }),
                l,
                t,
                { failureCount: 0, savedContacts: [], successCount: 0 },
              ),
            );
          return (
            o("WALogger")
              .LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[cm:import] save complete: ",
                    " ok, ",
                    " failed",
                  ])),
                u.successCount,
                u.failureCount,
              )
              .sendLogs("cm-import-save-complete"),
            babelHelpers.extends({}, u, {
              savedContacts: [].concat(u.savedContacts).sort(function (e, t) {
                return e.rowIndex - t.rowIndex;
              }),
            })
          );
        })),
        X.apply(this, arguments)
      );
    }
    l.saveImportedContacts = Q;
  },
  98,
);
