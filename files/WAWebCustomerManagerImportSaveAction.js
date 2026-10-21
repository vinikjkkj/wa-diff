__d(
  "WAWebCustomerManagerImportSaveAction",
  [
    "Promise",
    "WALogger",
    "WAPromiseQueue",
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
    "WAWebCustomerManagerImportProgress",
    "WAWebCustomerManagerImportRateLimiter",
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
      C = 50,
      b = 60,
      v = R(b);
    function S(e, t) {
      return v(e, t);
    }
    function R(e, t) {
      t === void 0 && (t = {});
      var n = new (o("WAPromiseQueue").PromiseQueue)(),
        r = o("WAWebCustomerManagerImportRateLimiter").createImportRateLimiter(
          e,
          t,
        );
      return function (e, a) {
        var i = o(
          "WAWebCustomerManagerImportProgress",
        ).createImportProgressReporter(e.length, r, a, t.now);
        return n.enqueue(function () {
          return L(e, r, i);
        });
      };
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          a.beginChecking();
          var i = o(
              "WAWebCustomerManagerImportPhoneRowMerge",
            ).mergeImportedPhoneRows(e),
            l = i.contacts,
            s = i.sourceRowCounts,
            u,
            m;
          try {
            ((u = k(l)),
              (m = yield x(u)),
              (u = u.filter(function (e) {
                return m.has(e);
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
              a.stopBeforeSave(),
              {
                failureCount: e.length,
                preflightFailed: !0,
                savedContacts: [],
                successCount: 0,
              }
            );
          }
          a.ready(u.length, he(u, s));
          var p = W(u, m),
            _ = p.batchable,
            f = p.individual,
            g = yield F(_, t.batchSize(C), function (e) {
              return o("WAWebCustomerManagerImportProgress").runImportBatch(
                e.map(function (e) {
                  var t = e.contact;
                  return t;
                }),
                s,
                a,
                function () {
                  return fe(e, q);
                },
              );
            }),
            b = yield F(f, t.batchSize(y), function (e) {
              return o("WAWebCustomerManagerImportProgress").runImportBatch(
                e,
                s,
                a,
                function () {
                  return (h || (h = n("Promise"))).allSettled(
                    e.map(function (e) {
                      return I(e, m.get(e));
                    }),
                  );
                },
              );
            }),
            v = A(
              f,
              b,
              m,
              s,
              A(
                _.map(function (e) {
                  var t = e.contact;
                  return t;
                }),
                g,
                m,
                s,
                {
                  failureCount: e.length - he(u, s),
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
                v.successCount,
                v.failureCount,
              )
              .sendLogs("cm-import-save-complete"),
            babelHelpers.extends({}, v, {
              savedContacts: [].concat(v.savedContacts).sort(function (e, t) {
                return e.rowIndex - t.rowIndex;
              }),
            })
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(t) {
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
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = D(e, t),
            r = yield fe([n], G),
            o = r[0];
          if (o.status === "rejected") throw o.reason;
          return o.value;
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
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
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield M(e);
          if (t == null)
            throw r("err")(
              "Imported customer profile existence lookup unavailable",
            );
          var a = yield F(
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
                                ? P(o("WAWebJidToWid").lidUserJidToUserLid(t))
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
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        w.apply(this, arguments)
      );
    }
    function A(e, t, n, a, i) {
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
    function F(e, t, n, r, o) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o) {
            if (
              (r === void 0 && (r = 0), o === void 0 && (o = []), r >= e.length)
            )
              return o;
            var a = e.slice(r, r + t),
              i = yield n(a);
            return F(e, t, n, r + t, [].concat(o, i));
          },
        )),
        O.apply(this, arguments)
      );
    }
    function B(e, t, r) {
      return F(e, t, function (e) {
        return (h || (h = n("Promise"))).allSettled(e.map(r));
      });
    }
    function W(e, t) {
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
            n.push(D(e, t.get(e)));
          } catch (t) {
            r.push(e);
          }
        }),
        { batchable: n, individual: r }
      );
    }
    function q(e, t, n) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          r === void 0 && (r = V);
          var o = yield K(e),
            a = yield B(
              e.map(function (e, t) {
                return t;
              }),
              y,
              (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    if (!(yield z(e[n], t))) return !1;
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
        U.apply(this, arguments)
      );
    }
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            var n = yield G(e, t);
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
          return K(e);
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t) {
      return q(
        e,
        t,
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield me(
              e,
              o("WAWebCustomerManagerCreateCustomerRecord").saveCustomerContact,
            );
            return pe(t, function (t) {
              return K(
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
    function z(e, t) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!e.wasNewContact) return !1;
          var n = yield P(e.input.profileWid);
          return n.wasNewContact
            ? !0
            : (t.set(e.contact, X(e, n.savedContactName)), !1);
        })),
        j.apply(this, arguments)
      );
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        Q.apply(this, arguments)
      );
    }
    function X(e, t) {
      return babelHelpers.extends({}, e, {
        profileName: t != null ? t : e.profileName,
        savedContactName: t,
        wasNewContact: !1,
      });
    }
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          try {
            var t = yield o(
              "WAWebCustomerDataFieldSaver",
            ).createCustomersIfAbsent(e, { skipLeadArtifacts: !0 });
            return t.map(Z);
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
        J.apply(this, arguments)
      );
    }
    function Z(e) {
      return e === "unresolved"
        ? {
            status: "rejected",
            reason: r("err")(
              "[cm:import] customer profile LID could not resolve",
            ),
          }
        : { status: "fulfilled", value: e };
    }
    function ee(e, t) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        te.apply(this, arguments)
      );
    }
    function ne(e, t) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        re.apply(this, arguments)
      );
    }
    function oe(e, t) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            u = yield ie(e, l, t),
            c = l.filter(function (e) {
              var t = u.get(e);
              return (
                (t == null ? void 0 : t.status) === "fulfilled" &&
                t.value === "existing"
              );
            }),
            d = [].concat(s, c),
            m = yield B(
              d,
              y,
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n;
                    return ee(
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
        ae.apply(this, arguments)
      );
    }
    function ie(e, t, n) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = yield B(t, y, function (t) {
                return ue(e[t], n[t]);
              }),
              o = yield Y(
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
        le.apply(this, arguments)
      );
    }
    function se(e) {
      return B(
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
    function ue(e, t) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        ce.apply(this, arguments)
      );
    }
    function de(e) {
      return e.flatMap(function (e, t) {
        return e.status === "fulfilled" ? [t] : [];
      });
    }
    function me(e, t) {
      return B(
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
    function pe(e, t) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = de(e),
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
        _e.apply(this, arguments)
      );
    }
    function fe(e, t) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield se(e),
            a = r.map(function (e) {
              return e.status === "fulfilled"
                ? { status: "fulfilled", value: "written" }
                : e;
            }),
            i = new Map();
          a = yield pe(a, function (n) {
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
          a = yield pe(a, function (e) {
            return me(
              e.map(function (e) {
                return l[e];
              }),
              o("WAWebCustomerManagerCreateCustomerRecord").createCustomerChat,
            );
          });
          var s = de(a),
            u = yield oe(
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
            (a = yield pe(a, function (e) {
              return B(
                e,
                y,
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = a[e],
                        n = t.status === "fulfilled" && t.value === "written";
                      return ne(l[e], n);
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
            })),
            (a = yield pe(a, function (e) {
              return me(
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
        ge.apply(this, arguments)
      );
    }
    function he(e, t) {
      return e.reduce(function (e, n) {
        var r;
        return e + ((r = t.get(n.rowIndex)) != null ? r : 1);
      }, 0);
    }
    ((l.saveImportedContacts = S), (l.createCustomerManagerImporter = R));
  },
  98,
);
