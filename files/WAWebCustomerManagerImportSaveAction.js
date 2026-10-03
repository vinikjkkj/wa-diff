__d(
  "WAWebCustomerManagerImportSaveAction",
  [
    "Promise",
    "WALogger",
    "WAWebContactImportTemplateParsingUtils",
    "WAWebCustomerDataFieldSaver",
    "WAWebCustomerManagerCreateCustomerRecord",
    "WAWebCustomerManagerImportDateParsingUtils",
    "WAWebCustomerManagerImportEmailWarnings",
    "WAWebCustomerManagerImportTemplateUtils",
    "WAWebCustomerProfileAcquisitionSourceNames",
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
      m = 10,
      p = 50;
    function _(e) {
      var t;
      if (e.lid == null)
        throw r("err")("Imported contact missing lid; cannot resolve chatJid");
      var n = o("WAWebWidFactory").createUserWidOrThrow(e.lid);
      return {
        acquisitionSource: S(e),
        address:
          (t = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
            e.rawRow,
            [
              "Address",
              o("WAWebCustomerManagerImportTemplateUtils").FBT_ADDRESS,
            ],
          )) != null
            ? t
            : "",
        birthday: b(e, "birthday"),
        chatJid: o("WAWebWidToJid").widToChatJid(n),
        email: C(e),
        firstName: e.firstName,
        lastName: e.lastName,
        leadStage: v(e),
        lastOrder: b(e, "lastOrder"),
        note: o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
          e.rawRow,
          ["Notes", o("WAWebCustomerManagerImportTemplateUtils").FBT_NOTES],
        ),
        phoneNumber: h(e),
        profileWid: n,
        username: y(e),
      };
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o(
            "WAWebCustomerManagerCreateCustomerRecord",
          ).createCustomerRecord(_(e));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return e.phone.replace(/\D/g, "");
    }
    function y(e) {
      return o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
        e.rawRow,
        ["Username", o("WAWebCustomerManagerImportTemplateUtils").FBT_USERNAME],
      );
    }
    function C(e) {
      var t,
        n =
          (t = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
            e.rawRow,
            ["Email", o("WAWebCustomerManagerImportTemplateUtils").FBT_EMAIL],
          )) != null
            ? t
            : "";
      return o("WAWebCustomerManagerImportEmailWarnings").isValidImportEmail(n)
        ? n
        : "";
    }
    function b(e, t) {
      var n =
          t === "birthday"
            ? [
                "Birthday",
                o("WAWebCustomerManagerImportTemplateUtils").FBT_BIRTHDAY,
              ]
            : [
                "Last order",
                o("WAWebCustomerManagerImportTemplateUtils").FBT_LAST_ORDER,
              ],
        r = o(
          "WAWebCustomerManagerImportDateParsingUtils",
        ).parseCustomerManagerImportDate(
          o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
            e.rawRow,
            n,
          ),
          t,
        );
      return r.type === "valid" ? r.value : void 0;
    }
    function v(e) {
      var t = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
        e.rawRow,
        [
          "Lead stage",
          o("WAWebCustomerManagerImportTemplateUtils").FBT_LEAD_STAGE,
        ],
      );
      return t != null
        ? o("WAWebLeadStageNames").getLeadStageFromName(t)
        : null;
    }
    function S(e) {
      var t = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
        e.rawRow,
        [
          "Source",
          o("WAWebCustomerManagerImportTemplateUtils").FBT_ACQUISITION_SOURCE,
          "Acquisition source",
        ],
      );
      return t != null
        ? o(
            "WAWebCustomerProfileAcquisitionSourceNames",
          ).getProfileAcquisitionSourceIdFromLabel(t)
        : null;
    }
    function R(t, n, a) {
      return n.reduce(function (n, a, i) {
        return a.status === "fulfilled"
          ? babelHelpers.extends({}, n, { successCount: n.successCount + 1 })
          : (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[cm:import] save failed for row ",
                    "",
                  ])),
                t[i].rowIndex,
              )
              .catching(r("getErrorSafe")(a.reason))
              .sendLogs("cm-import-save-row-failed"),
            babelHelpers.extends({}, n, { failureCount: n.failureCount + 1 }));
      }, a);
    }
    function L(e, t, n, r, o) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o) {
            if (r >= e.length) return o;
            var a = e.slice(r, r + t),
              i = yield n(a);
            return L(e, t, n, r + t, [].concat(o, i));
          },
        )),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      var t = [],
        n = [];
      return (
        e.forEach(function (e) {
          var r,
            o,
            a,
            i,
            l = (r = (o = y(e)) == null ? void 0 : o.trim()) != null ? r : "";
          if (
            l !== "" ||
            h(e) === "" ||
            ((a = (i = e.firstName) == null ? void 0 : i.trim()) != null
              ? a
              : "") === ""
          ) {
            n.push(e);
            return;
          }
          try {
            t.push({ contact: e, input: _(e) });
          } catch (t) {
            n.push(e);
          }
        }),
        { batchable: t, individual: n }
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] batched contact save failed for ",
                      " rows; retrying them per row",
                    ])),
                  e.length,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("cm-import-save-batch-fallback"),
              L(
                e,
                m,
                function (e) {
                  return (d || (d = n("Promise"))).allSettled(
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
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          try {
            yield o("WAWebCustomerDataFieldSaver").upsertAsCustomers(e);
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
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
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return L(
        e,
        m,
        function (e) {
          return (d || (d = n("Promise"))).allSettled(
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
    function P(e, t) {
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
    function N(e, t) {
      return e.filter(function (e, n) {
        return t[n].status === "fulfilled";
      });
    }
    function M(e, t, n) {
      var r = [].concat(e);
      return (
        t.forEach(function (e, t) {
          r[e] = n[t];
        }),
        r
      );
    }
    function w(e) {
      return e.map(function (e) {
        return e.status === "fulfilled"
          ? { status: "fulfilled", value: void 0 }
          : { status: "rejected", reason: e.reason };
      });
    }
    function A(e, t) {
      return L(
        e,
        m,
        function (e) {
          return (d || (d = n("Promise"))).allSettled(
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
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield t(e.indexes);
          return {
            indexes: N(e.indexes, n),
            results: M(e.results, e.indexes, n),
          };
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield $(e),
            n = {
              indexes: N(
                e.map(function (e, t) {
                  return t;
                }),
                t,
              ),
              results: w(t),
            },
            r = yield F(n, function (t) {
              return I(
                t.map(function (t) {
                  return e[t];
                }),
              );
            }),
            a = yield F(r, function (t) {
              return A(
                t.map(function (t) {
                  return e[t];
                }),
                o("WAWebCustomerManagerCreateCustomerRecord")
                  .createCustomerChat,
              );
            }),
            i = yield F(a, function (n) {
              return D(
                n.map(function (n) {
                  return P(e[n], t[n]);
                }),
              );
            }),
            l = yield F(i, function (t) {
              return A(
                t.map(function (t) {
                  return e[t];
                }),
                o("WAWebCustomerManagerCreateCustomerRecord").writeCustomerNote,
              );
            });
          return l.results;
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = k(e),
            r = t.batchable,
            a = t.individual,
            i = yield L(r, p, B, 0, []),
            l = yield L(
              a,
              m,
              function (e) {
                return (d || (d = n("Promise"))).allSettled(
                  e.map(function (e) {
                    return f(e);
                  }),
                );
              },
              0,
              [],
            ),
            s = R(
              a,
              l,
              R(
                r.map(function (e) {
                  var t = e.contact;
                  return t;
                }),
                i,
                { failureCount: 0, successCount: 0 },
              ),
            );
          return (
            o("WALogger")
              .LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[cm:import] save complete: ",
                    " ok, ",
                    " failed",
                  ])),
                s.successCount,
                s.failureCount,
              )
              .sendLogs("cm-import-save-complete"),
            s
          );
        })),
        U.apply(this, arguments)
      );
    }
    l.saveImportedContacts = q;
  },
  98,
);
