__d(
  "WAWebCustomerManagerImportSaveAction",
  [
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebContactImportFileProcessor",
    "WAWebContactManagerCustomerProfileQuery",
    "WAWebCustomerDataFieldSaver",
    "WAWebCustomerManagerContactTypeQuery",
    "WAWebCustomerManagerCreateCustomerRecord",
    "WAWebCustomerManagerImportExistingCustomerDetector",
    "WAWebCustomerManagerImportLeadMerge",
    "WAWebCustomerManagerImportNoteMerge",
    "WAWebCustomerManagerImportPhoneIdentity",
    "WAWebCustomerManagerImportPhoneRowMerge",
    "WAWebCustomerManagerImportProfileMerge",
    "WAWebCustomerManagerImportRecordInput",
    "WAWebJidToWid",
    "WAWebSaveContactAction",
    "WAWebSyncContactJob",
    "WAWebWidFactory",
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
      _,
      f,
      g,
      h,
      y = 10,
      C = 50;
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
              "WAWebCustomerManagerImportPhoneRowMerge",
            ).mergeImportedPhoneRows(e),
            n = t.contacts,
            a = t.sourceRowCounts,
            i,
            l;
          try {
            ((i = S(n)),
              (l = yield k(i)),
              (i = i.filter(function (e) {
                return l.has(e);
              })));
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] save stopped before writing contacts",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("cm-import-save-preflight-failed"),
              {
                failureCount: e.length,
                preflightFailed: !0,
                savedContacts: [],
                successCount: 0,
              }
            );
          }
          var s = A(i, l),
            u = s.batchable,
            m = s.individual,
            p = yield N(u, C, function (e) {
              return de(e, F);
            }),
            _ = yield w(m, y, function (e) {
              return R(e, l.get(e));
            }),
            f = P(
              m,
              _,
              l,
              a,
              P(
                u.map(function (e) {
                  var t = e.contact;
                  return t;
                }),
                p,
                l,
                a,
                {
                  failureCount: e.length - pe(i, a),
                  savedContacts: [],
                  successCount: 0,
                },
              ),
            );
          return (
            o("WALogger")
              .LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[cm:import] save complete: ",
                    " ok, ",
                    " failed",
                  ])),
                f.successCount,
                f.failureCount,
              )
              .sendLogs("cm-import-save-complete"),
            babelHelpers.extends({}, f, {
              savedContacts: [].concat(f.savedContacts).sort(function (e, t) {
                return e.rowIndex - t.rowIndex;
              }),
            })
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(t) {
      var n = new Map(),
        r = 0;
      return (
        t.forEach(function (e) {
          var t,
            a = e.lid;
          if (
            a == null ||
            o("WAWebContactImportFileProcessor").normalizePhoneNumber(
              e.phone,
            ) === ""
          ) {
            r++;
            return;
          }
          var i = (t = n.get(a)) != null ? t : [];
          (i.push(e), n.set(a, i));
        }),
        r > 0 &&
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] skipping ",
                  " reviewed rows without a resolvable account or phone",
                ])),
              r,
            )
            .sendLogs("cm-import-reviewed-row-dropped"),
        Array.from(n.values()).flatMap(function (e) {
          return e.length === 1
            ? e
            : (e.forEach(function (e) {
                var t = e.rowIndex;
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[cm:import] conflicting reviewed account for row ",
                        "",
                      ])),
                    t,
                  )
                  .sendLogs("cm-import-reviewed-account-conflict");
              }),
              []);
        })
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = E(e, t),
            r = yield de([n], q),
            o = r[0];
          if (o.status === "rejected") throw o.reason;
          return o.value;
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      var n,
        r,
        a,
        i,
        l,
        s = o("WAWebCustomerManagerImportRecordInput").buildCustomerRecordInput(
          e,
        );
      return {
        contact: e,
        input: s,
        profileName:
          (n = t == null ? void 0 : t.savedContactName) != null
            ? n
            : [
                (r = s.firstName) == null ? void 0 : r.trim(),
                (a = s.lastName) == null ? void 0 : a.trim(),
              ]
                .filter(Boolean)
                .join(" "),
        savedContactName: t == null ? void 0 : t.savedContactName,
        wasNewContact:
          (i = t == null ? void 0 : t.wasNewContact) != null ? i : !0,
        wasNewProfile:
          (l = t == null ? void 0 : t.wasNewProfile) != null ? l : !0,
      };
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield x(e);
          if (t == null)
            throw r("err")(
              "Imported customer profile existence lookup unavailable",
            );
          var a = yield N(
              e,
              C,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    try {
                      yield o("WAWebSyncContactJob").syncContactListJob(
                        e.map(function (e) {
                          return o("WAWebWidFactory").createUserWidOrThrow(
                            o(
                              "WAWebContactImportFileProcessor",
                            ).normalizePhoneNumber(e.phone) + "@c.us",
                          );
                        }),
                        !1,
                        "query",
                      );
                    } catch (t) {
                      return e.map(function () {
                        return { status: "rejected", reason: t };
                      });
                    }
                    return (h || (h = n("Promise"))).allSettled(
                      e.map(
                        (function () {
                          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* (e) {
                              var t = e.lid;
                              return t != null
                                ? T(o("WAWebJidToWid").lidUserJidToUserLid(t))
                                : { savedContactName: null, wasNewContact: !1 };
                            },
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      ),
                    );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            i = new Map();
          return (
            e.forEach(function (e, n) {
              var l = a[n];
              if (l.status === "rejected") {
                o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[cm:import] saved contact state unavailable for row ",
                        "",
                      ])),
                    e.rowIndex,
                  )
                  .catching(r("getErrorSafe")(l.reason))
                  .sendLogs("cm-import-contact-state-unavailable");
                return;
              }
              var s = e.lid;
              s != null &&
                i.set(e, {
                  chatJid: s,
                  savedContactName: l.value.savedContactName,
                  wasNewContact: l.value.wasNewContact,
                  wasNewProfile: !t.has(s),
                });
            }),
            i
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = yield o("WAWebApiContact").getContactRecord(e);
          if (a == null)
            throw r("err")("[cm:import] saved contact state unavailable");
          return o("WAWebCustomerManagerContactTypeQuery").isSavedContact(a)
            ? {
                savedContactName:
                  ((t = a.name) == null ? void 0 : t.trim()) ||
                  ((n = a.shortName) == null ? void 0 : n.trim()) ||
                  null,
                wasNewContact: !1,
              }
            : { savedContactName: null, wasNewContact: !0 };
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Set(
            e.flatMap(function (e) {
              var t = e.lid;
              return t == null ? [] : [t];
            }),
          );
          if (t.size === 0) return new Set();
          try {
            var n = yield o(
              "WAWebCustomerManagerImportExistingCustomerDetector",
            ).fetchExistingProfileLids(Array.from(t));
            if (n == null)
              throw r("err")(
                "Imported customer profile existence lookup incomplete",
              );
            return n;
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] profile existence lookup failed for ",
                      " candidates; saving stopped",
                    ])),
                  t.size,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("cm-import-profile-existence-lookup-failed"),
              null
            );
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n, a, i) {
      var l = [],
        s = i.failureCount,
        c = i.successCount;
      return (
        t.forEach(function (t, i) {
          var d,
            m = e[i],
            p = m.rowIndex,
            _ = (d = a.get(p)) != null ? d : 1;
          if (t.status === "fulfilled") {
            var f = n.get(m);
            (f != null &&
              (t.value.wasNewContact ||
                (f.wasNewProfile && t.value.profileResult === "written")) &&
              l.push({
                chatJid: f.chatJid,
                rowIndex: p,
                wasNewContact: t.value.wasNewContact,
                wasNewProfile:
                  f.wasNewProfile && t.value.profileResult === "written",
              }),
              (c += _));
            return;
          }
          (o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] save failed for row ",
                  "",
                ])),
              p,
            )
            .catching(r("getErrorSafe")(t.reason))
            .sendLogs("cm-import-save-row-failed"),
            (s += _));
        }),
        {
          failureCount: s,
          savedContacts: [].concat(i.savedContacts, l),
          successCount: c,
        }
      );
    }
    function N(e, t, n, r, o) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o) {
            if (
              (r === void 0 && (r = 0), o === void 0 && (o = []), r >= e.length)
            )
              return o;
            var a = e.slice(r, r + t),
              i = yield n(a);
            return N(e, t, n, r + t, [].concat(o, i));
          },
        )),
        M.apply(this, arguments)
      );
    }
    function w(e, t, r) {
      return N(e, t, function (e) {
        return (h || (h = n("Promise"))).allSettled(e.map(r));
      });
    }
    function A(e, t) {
      var n = [],
        r = [];
      return (
        e.forEach(function (e) {
          var o, a;
          if (
            ((o = (a = e.firstName) == null ? void 0 : a.trim()) != null
              ? o
              : "") === ""
          ) {
            r.push(e);
            return;
          }
          try {
            n.push(E(e, t.get(e)));
          } catch (t) {
            r.push(e);
          }
        }),
        { batchable: n, individual: r }
      );
    }
    function F(e, t, n) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          r === void 0 && (r = B);
          var o = yield H(e),
            a = yield w(
              e.map(function (e, t) {
                return t;
              }),
              y,
              (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    if (!(yield U(e[n], t))) return !1;
                    var r = o[n];
                    if (r.status === "rejected") throw r.reason;
                    return !0;
                  },
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })(),
            ),
            i = e.filter(function (e, t) {
              var n = a[t];
              return n.status === "fulfilled" && n.value;
            }),
            l = yield r(i, t),
            s = 0;
          return a.map(function (e) {
            return e.status === "rejected"
              ? e
              : e.value
                ? l[s++]
                : { status: "fulfilled", value: void 0 };
          });
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          } catch (a) {
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[cm:import] batched contact save failed for ",
                    " rows; retrying them per row",
                  ])),
                e.length,
              )
              .catching(r("getErrorSafe")(a))
              .sendLogs("cm-import-save-batch-fallback");
            var n = yield q(e, t);
            return n.map(function (n, o) {
              return n.status === "fulfilled" && t.has(e[o].contact)
                ? {
                    status: "rejected",
                    reason: r("err")(
                      "[cm:import] batched contact save outcome uncertain",
                    ),
                  }
                : n;
            });
          }
          return H(e);
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return F(
        e,
        t,
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield se(
              e,
              o("WAWebCustomerManagerCreateCustomerRecord").saveCustomerContact,
            );
            return ue(t, function (t) {
              return H(
                t.map(function (t) {
                  return e[t];
                }),
              );
            });
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      );
    }
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!e.wasNewContact) return !1;
          var n = yield T(e.input.profileWid);
          return n.wasNewContact
            ? !0
            : (t.set(e.contact, z(e, n.savedContactName)), !1);
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o(
                "WAWebCustomerManagerImportPhoneIdentity",
              ).resolveImportedPhoneContacts(
                e
                  .filter(function (e) {
                    var t = e.wasNewContact;
                    return t;
                  })
                  .map(function (e) {
                    var t = e.contact;
                    return t;
                  }),
              ),
              n = new Map(
                t.map(function (e) {
                  return [
                    o("WAWebContactImportFileProcessor").normalizePhoneNumber(
                      e.phone,
                    ),
                    e.lid,
                  ];
                }),
              );
            return e.map(function (e) {
              var t = e.contact,
                a = e.input,
                i = e.wasNewContact;
              return !i ||
                n.get(
                  o("WAWebContactImportFileProcessor").normalizePhoneNumber(
                    t.phone,
                  ),
                ) === a.profileWid.toString()
                ? { status: "fulfilled", value: void 0 }
                : {
                    status: "rejected",
                    reason: r("err")(
                      "[cm:import] phone no longer matches reviewed customer",
                    ),
                  };
            });
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] phone identity check failed for ",
                      " rows; rejecting them",
                    ])),
                  e.length,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("cm-import-identity-check-failed"),
              e.map(function () {
                return {
                  status: "rejected",
                  reason: r("err")("[cm:import] phone identity check failed"),
                };
              })
            );
          }
        })),
        G.apply(this, arguments)
      );
    }
    function z(e, t) {
      return babelHelpers.extends({}, e, {
        profileName: t != null ? t : e.profileName,
        savedContactName: t,
        wasNewContact: !1,
      });
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          try {
            var t = yield o(
              "WAWebCustomerDataFieldSaver",
            ).createCustomersIfAbsent(e, { skipLeadArtifacts: !0 });
            return t.map(Q);
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] batched profile create failed for ",
                      " rows",
                    ])),
                  e.length,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("cm-import-save-profile-batch-failed"),
              e.map(function () {
                return {
                  status: "rejected",
                  reason: r("err")("[cm:import] batched profile create failed"),
                };
              })
            );
          }
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      return e === "unresolved"
        ? {
            status: "rejected",
            reason: r("err")(
              "[cm:import] customer profile LID could not resolve",
            ),
          }
        : { status: "fulfilled", value: e };
    }
    function X(e, t) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a =
              e.input.leadStage != null
                ? yield o(
                    "WAWebCustomerManagerImportLeadMerge",
                  ).readImportedLeadState(e.input.chatJid)
                : null;
          return (
            yield o(
              "WAWebCustomerManagerImportProfileMerge",
            ).fillMissingImportedProfileFields(e.input, t, {
              canBackfillLeadStage: (a == null ? void 0 : a.isMember) === !0,
              leadStageToBackfill:
                (n = a == null ? void 0 : a.stage) != null
                  ? n
                  : e.input.leadStage,
              profileName:
                (r = e.savedContactName) != null
                  ? r
                  : o(
                      "WAWebCustomerManagerImportRecordInput",
                    ).getImportedCustomerName(e.contact),
            }),
            "existing"
          );
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e, t) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.input.leadStage;
          if (
            n != null &&
            (yield o(
              "WAWebCustomerManagerImportLeadMerge",
            ).isImportedLeadStageEligible(e.input.chatJid))
          ) {
            var a = t && e.wasNewContact && e.wasNewProfile,
              i = yield o(
                "WAWebContactManagerCustomerProfileQuery",
              ).fetchCustomerProfile(e.input.chatJid);
            if (i == null)
              throw r("err")(
                "[cm:import] customer profile disappeared before Lead update",
              );
            yield o(
              "WAWebCustomerManagerImportLeadMerge",
            ).reconcileImportedLeadArtifacts(e.input.chatJid, i.leadStage, a);
          }
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e, t) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = e.map(function (e, t) {
              return t;
            }),
            i = t.map(function (e) {
              return e.status === "fulfilled" ? e.value : null;
            }),
            l = a.filter(function (e) {
              return i[e] == null;
            }),
            s = a.filter(function (e) {
              return i[e] != null;
            }),
            u = yield ne(e, l, t),
            c = l.filter(function (e) {
              var t = u.get(e);
              return (
                (t == null ? void 0 : t.status) === "fulfilled" &&
                t.value === "existing"
              );
            }),
            d = [].concat(s, c),
            m = yield w(
              d,
              y,
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n;
                    return X(
                      e[t],
                      (n = i[t]) != null
                        ? n
                        : yield o(
                            "WAWebContactManagerCustomerProfileQuery",
                          ).fetchCustomerProfile(e[t].input.chatJid),
                    );
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            );
          return (
            d.forEach(function (e, t) {
              u.set(e, m[t]);
            }),
            a.map(function (e) {
              var t = u.get(e);
              return t != null
                ? t
                : {
                    status: "rejected",
                    reason: r("err")("Missing profile result"),
                  };
            })
          );
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e, t, n) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = yield w(t, y, function (t) {
                return ae(e[t], n[t]);
              }),
              o = yield j(
                r.flatMap(function (e) {
                  return e.status === "fulfilled" ? [e.value] : [];
                }),
              ),
              a = new Map(),
              i = 0;
            return (
              t.forEach(function (e, t) {
                var n = r[t];
                a.set(e, n.status === "fulfilled" ? o[i++] : n);
              }),
              a
            );
          },
        )),
        re.apply(this, arguments)
      );
    }
    function oe(e) {
      return w(
        e,
        y,
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.input,
              n = e.wasNewProfile,
              r = yield o(
                "WAWebCustomerManagerCreateCustomerRecord",
              ).readProfileForGuardedBirthday(t);
            return r != null || n
              ? r
              : o(
                  "WAWebContactManagerCustomerProfileQuery",
                ).fetchCustomerProfile(t.chatJid);
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      );
    }
    function ae(e, t) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n =
              e.input.leadStage != null
                ? yield o(
                    "WAWebCustomerManagerImportLeadMerge",
                  ).readImportedLeadState(e.input.chatJid)
                : null,
            r = null;
          if (n != null)
            if (n.isMember) {
              var a;
              r = (a = n.stage) != null ? a : e.input.leadStage;
            } else
              e.wasNewContact && e.wasNewProfile && (r = e.input.leadStage);
          return {
            chatJid: e.input.chatJid,
            extraFields: babelHelpers.extends(
              {},
              o(
                "WAWebCustomerManagerCreateCustomerRecord",
              ).buildCustomerProfileFields(
                e.input,
                t.status === "fulfilled" ? t.value : null,
              ),
              { name: e.profileName },
            ),
            leadStage: r,
          };
        })),
        ie.apply(this, arguments)
      );
    }
    function le(e) {
      return e.flatMap(function (e, t) {
        return e.status === "fulfilled" ? [t] : [];
      });
    }
    function se(e, t) {
      return w(
        e,
        y,
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield t(e.input);
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      );
    }
    function ue(e, t) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = le(e),
            r = yield t(n),
            o = [].concat(e);
          return (
            n.forEach(function (e, t) {
              var n = r[t];
              n.status === "rejected" && (o[e] = n);
            }),
            o
          );
        })),
        ce.apply(this, arguments)
      );
    }
    function de(e, t) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield oe(e),
            a = r.map(function (e) {
              return e.status === "fulfilled"
                ? { status: "fulfilled", value: "written" }
                : e;
            }),
            i = new Map();
          a = yield ue(a, function (n) {
            return t(
              n.map(function (t) {
                return e[t];
              }),
              i,
            );
          });
          var l = e.map(function (e) {
            var t;
            return (t = i.get(e.contact)) != null ? t : e;
          });
          a = yield ue(a, function (e) {
            return se(
              e.map(function (e) {
                return l[e];
              }),
              o("WAWebCustomerManagerCreateCustomerRecord").createCustomerChat,
            );
          });
          var s = le(a),
            u = yield ee(
              s.map(function (e) {
                return l[e];
              }),
              s.map(function (e) {
                return r[e];
              }),
            );
          return (
            s.forEach(function (e, t) {
              a[e] = u[t];
            }),
            (a = yield ue(a, function (e) {
              return w(
                e,
                y,
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = a[e],
                        n = t.status === "fulfilled" && t.value === "written";
                      return J(l[e], n);
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
            })),
            (a = yield ue(a, function (e) {
              return se(
                e.map(function (e) {
                  return l[e];
                }),
                o("WAWebCustomerManagerImportNoteMerge")
                  .writeMissingImportedNote,
              );
            })),
            a.map(function (e, t) {
              return e.status === "fulfilled"
                ? {
                    status: "fulfilled",
                    value: {
                      profileResult: e.value,
                      wasNewContact: l[t].wasNewContact,
                    },
                  }
                : e;
            })
          );
        })),
        me.apply(this, arguments)
      );
    }
    function pe(e, t) {
      return e.reduce(function (e, n) {
        var r;
        return e + ((r = t.get(n.rowIndex)) != null ? r : 1);
      }, 0);
    }
    l.saveImportedContacts = b;
  },
  98,
);
