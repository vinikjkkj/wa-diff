__d(
  "WAWebCustomerManagerImportSaveAction",
  [
    "Promise",
    "WALogger",
    "WAPromiseQueue",
    "WATimeUtils",
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
      y,
      C,
      b,
      v,
      S = 10,
      R = 50,
      L = 20,
      E = 60,
      k = T(E);
    function I(e, t) {
      return k(e, t);
    }
    function T(e, t) {
      var n;
      t === void 0 && (t = {});
      var r = new (o("WAPromiseQueue").PromiseQueue)(),
        a = o("WAWebCustomerManagerImportRateLimiter").createImportRateLimiter(
          e,
          t,
        ),
        i = o("WATimeUtils").monotonicTime(),
        l = o(
          "WAWebCustomerManagerImportRateLimiter",
        ).createContactSaveRetryBudget(
          L,
          (n = t.now) != null
            ? n
            : function () {
                return o("WATimeUtils").monotonicTimeSince(i);
              },
        );
      return function (e, n) {
        var i = o(
          "WAWebCustomerManagerImportProgress",
        ).createImportProgressReporter(e.length, a, n, t.now);
        return r.enqueue(function () {
          return D(e, a, i, l);
        });
      };
    }
    function D(e, t, n, r) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            a.beginChecking();
            var l = o(
                "WAWebCustomerManagerImportPhoneRowMerge",
              ).mergeImportedPhoneRows(e),
              s = l.contacts,
              u = l.sourceRowCounts,
              c,
              d;
            try {
              ((c = $(s)),
                (d = yield w(c)),
                (c = c.filter(function (e) {
                  return d.has(e);
                })));
            } catch (t) {
              return (
                o("WALogger")
                  .WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
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
            a.ready(c.length, $e(c, u));
            var m = G(c, d),
              p = m.batchable,
              _ = m.individual,
              h = { rateLimited: !1, retries: i },
              y = function (t) {
                return h.rateLimited
                  ? (v || (v = n("Promise"))).resolve(
                      o("WAWebCustomerManagerImportProgress").failImportBatch(
                        t,
                        u,
                        a,
                        r("err")("[cm:import] contact save rate-limited"),
                      ),
                    )
                  : null;
              },
              C = yield U(p, t.batchSize(R), function (e) {
                var t;
                return (t = y(
                  e.map(function (e) {
                    var t = e.contact;
                    return t;
                  }),
                )) != null
                  ? t
                  : o("WAWebCustomerManagerImportProgress").runImportBatch(
                      e.map(function (e) {
                        var t = e.contact;
                        return t;
                      }),
                      u,
                      a,
                      function () {
                        return De(e, function (e, t) {
                          return z(e, t, function (e) {
                            return K(e, t, h);
                          });
                        });
                      },
                    );
              }),
              b = yield U(_, t.batchSize(S), function (e) {
                var t;
                return (t = y(e)) != null
                  ? t
                  : o("WAWebCustomerManagerImportProgress").runImportBatch(
                      e,
                      u,
                      a,
                      function () {
                        return (v || (v = n("Promise"))).allSettled(
                          e.map(function (e) {
                            return P(e, d.get(e), h);
                          }),
                        );
                      },
                    );
              }),
              L = q(
                _,
                b,
                d,
                u,
                q(
                  p.map(function (e) {
                    var t = e.contact;
                    return t;
                  }),
                  C,
                  d,
                  u,
                  {
                    failureCount: e.length - $e(c, u),
                    savedContacts: [],
                    successCount: 0,
                  },
                ),
              );
            return (
              o("WALogger")
                .LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] save complete: ",
                      " ok, ",
                      " failed",
                    ])),
                  L.successCount,
                  L.failureCount,
                )
                .sendLogs("cm-import-save-complete"),
              babelHelpers.extends({}, L, {
                savedContacts: [].concat(L.savedContacts).sort(function (e, t) {
                  return e.rowIndex - t.rowIndex;
                }),
              })
            );
          },
        )),
        x.apply(this, arguments)
      );
    }
    function $(t) {
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
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = M(e, t),
            o = yield De([r], function (e, t) {
              return re(e, t, n);
            }),
            a = o[0];
          if (a.status === "rejected") throw a.reason;
          return a.value;
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
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
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield B(e);
          if (t == null)
            throw r("err")(
              "Imported customer profile existence lookup unavailable",
            );
          var a = yield U(
              e,
              R,
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
                    return (v || (v = n("Promise"))).allSettled(
                      e.map(
                        (function () {
                          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* (e) {
                              var t = e.lid;
                              return t != null
                                ? F(o("WAWebJidToWid").lidUserJidToUserLid(t))
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
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
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
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
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
        W.apply(this, arguments)
      );
    }
    function q(e, t, n, a, i) {
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
    function U(e, t, n, r, o) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o) {
            if (
              (r === void 0 && (r = 0), o === void 0 && (o = []), r >= e.length)
            )
              return o;
            var a = e.slice(r, r + t),
              i = yield n(a);
            return U(e, t, n, r + t, [].concat(o, i));
          },
        )),
        V.apply(this, arguments)
      );
    }
    function H(e, t, r) {
      return U(e, t, function (e) {
        return (v || (v = n("Promise"))).allSettled(e.map(r));
      });
    }
    function G(e, t) {
      var n = [],
        r = [];
      return (
        e.forEach(function (e) {
          try {
            n.push(M(e, t.get(e)));
          } catch (t) {
            r.push(e);
          }
        }),
        { batchable: n, individual: r }
      );
    }
    function z(e, t, n) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var o = yield se(e),
            a = yield H(
              e.map(function (e, t) {
                return t;
              }),
              S,
              (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    if (!(yield ie(e[n], t))) return !1;
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
        j.apply(this, arguments)
      );
    }
    function K(e, t, n) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (e.length === 0) return [];
          var r = yield X(e, t, n);
          return Ie(r, function (t) {
            return se(
              t.map(function (t) {
                return e[t];
              }),
            );
          });
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e, t, n, r) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if ((r === void 0 && (r = !1), e.length === 0)) return [];
            if (n.rateLimited)
              return J(e, "[cm:import] contact save rate-limited");
            var a = r ? n.retries.take() : null;
            if (r && a == null) return Z(e);
            try {
              return (
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
                ),
                e.map(function () {
                  return { status: "fulfilled", value: void 0 };
                })
              );
            } catch (t) {
              var i = ee(t, e, n, a);
              if (i != null) return i;
            }
            return te(e, t, n);
          },
        )),
        Y.apply(this, arguments)
      );
    }
    function J(e, t) {
      return e.map(function () {
        return { status: "rejected", reason: r("err")(t) };
      });
    }
    function Z(e) {
      return (
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[cm:import] contact save retries exhausted; failing ",
                " rows",
              ])),
            e.length,
          )
          .sendLogs("cm-import-save-retries-exhausted"),
        J(e, "[cm:import] contact save retries exhausted")
      );
    }
    function ee(e, t, n, a) {
      return o("WAWebCustomerManagerImportRateLimiter").isUsyncRateLimit(e)
        ? ((n.rateLimited = !0),
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] contact save rate-limited for ",
                  " rows; skipping the import's remaining contact saves",
                ])),
              t.length,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("cm-import-save-batch-rate-limited"),
          J(t, "[cm:import] contact save rate-limited"))
        : e instanceof o("WAWebSaveContactAction").NetworkUnavailable
          ? (a != null && n.retries.refund(a),
            o("WALogger")
              .WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[cm:import] contact save failed offline for ",
                    " rows",
                  ])),
                t.length,
              )
              .sendLogs("cm-import-save-batch-offline"),
            J(t, "[cm:import] contact save failed offline"))
          : t.length === 1
            ? (o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] contact save failed for 1 row",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("cm-import-save-row-contact-failed"),
              J(t, "[cm:import] contact save failed"))
            : (o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] batched contact save failed for ",
                      " rows; retrying them in halves",
                    ])),
                  t.length,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("cm-import-save-batch-fallback"),
              null);
    }
    function te(e, t, n) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var o = yield H(e, S, function (e) {
                return ie(e, t);
              }),
              a = e.flatMap(function (e, t) {
                var n = o[t];
                return n.status === "fulfilled" && n.value ? [t] : [];
              }),
              i = Math.ceil(a.length / 2),
              l = a.slice(0, i),
              s = a.slice(i),
              u = yield X(
                l.map(function (t) {
                  return e[t];
                }),
                t,
                n,
                !0,
              ),
              c = yield X(
                s.map(function (t) {
                  return e[t];
                }),
                t,
                n,
                !0,
              ),
              d = new Map(
                [].concat(
                  l.map(function (e, t) {
                    return [e, u[t]];
                  }),
                  s.map(function (e, t) {
                    return [e, c[t]];
                  }),
                ),
              );
            return e.map(function (e, t) {
              var n,
                a = o[t];
              return a.status === "rejected"
                ? a
                : (n = d.get(t)) != null
                  ? n
                  : {
                      status: "rejected",
                      reason: r("err")(
                        "[cm:import] batched contact save outcome uncertain",
                      ),
                    };
            });
          },
        )),
        ne.apply(this, arguments)
      );
    }
    function re(e, t, r) {
      return z(
        e,
        t,
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield ke(e, function (e) {
              return oe(e, r);
            });
            return Ie(t, function (t) {
              return se(
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
    function oe(e, t) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.rateLimited)
            throw r("err")("[cm:import] contact save rate-limited");
          try {
            yield o(
              "WAWebCustomerManagerCreateCustomerRecord",
            ).saveCustomerContact(e);
          } catch (e) {
            throw (
              o("WAWebCustomerManagerImportRateLimiter").isUsyncRateLimit(e) &&
                (t.rateLimited = !0),
              e
            );
          }
        })),
        ae.apply(this, arguments)
      );
    }
    function ie(e, t) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!e.wasNewContact) return !1;
          var n = yield F(e.input.profileWid);
          return n.wasNewContact
            ? !0
            : (t.set(e.contact, ce(e, n.savedContactName)), !1);
        })),
        le.apply(this, arguments)
      );
    }
    function se(e) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
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
        ue.apply(this, arguments)
      );
    }
    function ce(e, t) {
      return babelHelpers.extends({}, e, {
        profileName: t != null ? t : e.profileName,
        savedContactName: t,
        wasNewContact: !1,
      });
    }
    function de(e) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          try {
            var t = yield o(
              "WAWebCustomerDataFieldSaver",
            ).createCustomersIfAbsent(e, { skipLeadArtifacts: !0 });
            return t.map(pe);
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
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
        me.apply(this, arguments)
      );
    }
    function pe(e) {
      return e === "unresolved"
        ? {
            status: "rejected",
            reason: r("err")(
              "[cm:import] customer profile LID could not resolve",
            ),
          }
        : { status: "fulfilled", value: e };
    }
    function _e(e, t) {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        fe.apply(this, arguments)
      );
    }
    function ge(e, t) {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        he.apply(this, arguments)
      );
    }
    function ye(e, t) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            u = yield be(e, l, t),
            c = l.filter(function (e) {
              var t = u.get(e);
              return (
                (t == null ? void 0 : t.status) === "fulfilled" &&
                t.value === "existing"
              );
            }),
            d = [].concat(s, c),
            m = yield H(
              d,
              S,
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n;
                    return _e(
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
        Ce.apply(this, arguments)
      );
    }
    function be(e, t, n) {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (
        (ve = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = yield H(t, S, function (t) {
                return Re(e[t], n[t]);
              }),
              o = yield de(
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
        ve.apply(this, arguments)
      );
    }
    function Se(e) {
      return H(
        e,
        S,
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
    function Re(e, t) {
      return Le.apply(this, arguments);
    }
    function Le() {
      return (
        (Le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        Le.apply(this, arguments)
      );
    }
    function Ee(e) {
      return e.flatMap(function (e, t) {
        return e.status === "fulfilled" ? [t] : [];
      });
    }
    function ke(e, t) {
      return H(
        e,
        S,
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
    function Ie(e, t) {
      return Te.apply(this, arguments);
    }
    function Te() {
      return (
        (Te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = Ee(e),
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
        Te.apply(this, arguments)
      );
    }
    function De(e, t) {
      return xe.apply(this, arguments);
    }
    function xe() {
      return (
        (xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield Se(e),
            a = r.map(function (e) {
              return e.status === "fulfilled"
                ? { status: "fulfilled", value: "written" }
                : e;
            }),
            i = new Map();
          a = yield Ie(a, function (n) {
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
          a = yield Ie(a, function (e) {
            return ke(
              e.map(function (e) {
                return l[e];
              }),
              o("WAWebCustomerManagerCreateCustomerRecord").createCustomerChat,
            );
          });
          var s = Ee(a),
            u = yield ye(
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
            (a = yield Ie(a, function (e) {
              return H(
                e,
                S,
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = a[e],
                        n = t.status === "fulfilled" && t.value === "written";
                      return ge(l[e], n);
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
            })),
            (a = yield Ie(a, function (e) {
              return ke(
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
        xe.apply(this, arguments)
      );
    }
    function $e(e, t) {
      return e.reduce(function (e, n) {
        var r;
        return e + ((r = t.get(n.rowIndex)) != null ? r : 1);
      }, 0);
    }
    ((l.IMPORT_ROWS_PER_MINUTE = E),
      (l.saveImportedContacts = I),
      (l.createCustomerManagerImporter = T));
  },
  98,
);
