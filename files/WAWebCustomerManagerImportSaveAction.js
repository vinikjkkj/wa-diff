__d(
  "WAWebCustomerManagerImportSaveAction",
  [
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
      v = 10,
      S = 50,
      R = 20,
      L = 60,
      E = I(L);
    function k(e, t) {
      return E(e, t);
    }
    function I(e, t) {
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
          R,
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
          return T(e, a, i, l);
        });
      };
    }
    async function T(t, n, a, i) {
      a.beginChecking();
      var l = o(
          "WAWebCustomerManagerImportPhoneRowMerge",
        ).mergeImportedPhoneRows(t),
        u = l.contacts,
        c = l.sourceRowCounts,
        d,
        m;
      try {
        ((d = D(u)),
          (m = await P(d)),
          (d = d.filter(function (e) {
            return m.has(e);
          })));
      } catch (n) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] save stopped before writing contacts",
                ])),
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("cm-import-save-preflight-failed"),
          a.stopBeforeSave(),
          {
            failureCount: t.length,
            preflightFailed: !0,
            savedContacts: [],
            successCount: 0,
          }
        );
      }
      a.ready(d.length, ue(d, c));
      var p = O(d, m),
        _ = p.batchable,
        f = p.individual,
        g = { rateLimited: !1, retries: i },
        h = function (t) {
          return g.rateLimited
            ? Promise.resolve(
                o("WAWebCustomerManagerImportProgress").failImportBatch(
                  t,
                  c,
                  a,
                  r("err")("[cm:import] contact save rate-limited"),
                ),
              )
            : null;
        },
        y = await A(_, n.batchSize(S), function (e) {
          var t;
          return (t = h(
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
                c,
                a,
                function () {
                  return se(e, function (e, t) {
                    return B(e, t, function (e) {
                      return W(e, t, g);
                    });
                  });
                },
              );
        }),
        C = await A(f, n.batchSize(v), function (e) {
          var t;
          return (t = h(e)) != null
            ? t
            : o("WAWebCustomerManagerImportProgress").runImportBatch(
                e,
                c,
                a,
                function () {
                  return Promise.allSettled(
                    e.map(function (e) {
                      return x(e, m.get(e), g);
                    }),
                  );
                },
              );
        }),
        b = w(
          f,
          C,
          m,
          c,
          w(
            _.map(function (e) {
              var t = e.contact;
              return t;
            }),
            y,
            m,
            c,
            {
              failureCount: t.length - ue(d, c),
              savedContacts: [],
              successCount: 0,
            },
          ),
        );
      return (
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[cm:import] save complete: ",
                " ok, ",
                " failed",
              ])),
            b.successCount,
            b.failureCount,
          )
          .sendLogs("cm-import-save-complete"),
        babelHelpers.extends({}, b, {
          savedContacts: [].concat(b.savedContacts).sort(function (e, t) {
            return e.rowIndex - t.rowIndex;
          }),
        })
      );
    }
    function D(e) {
      var t = new Map(),
        n = 0;
      return (
        e.forEach(function (e) {
          var r,
            a = e.lid;
          if (
            a == null ||
            o("WAWebContactImportFileProcessor").normalizePhoneNumber(
              e.phone,
            ) === ""
          ) {
            n++;
            return;
          }
          var i = (r = t.get(a)) != null ? r : [];
          (i.push(e), t.set(a, i));
        }),
        n > 0 &&
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] skipping ",
                  " reviewed rows without a resolvable account or phone",
                ])),
              n,
            )
            .sendLogs("cm-import-reviewed-row-dropped"),
        Array.from(t.values()).flatMap(function (e) {
          return e.length === 1
            ? e
            : (e.forEach(function (e) {
                var t = e.rowIndex;
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
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
    async function x(e, t, n) {
      var r = $(e, t),
        o = await se([r], function (e, t) {
          return z(e, t, n);
        }),
        a = o[0];
      if (a.status === "rejected") throw a.reason;
      return a.value;
    }
    function $(e, t) {
      var n,
        r,
        a,
        i = o("WAWebCustomerManagerImportRecordInput").buildCustomerRecordInput(
          e,
        );
      return {
        contact: e,
        input: i,
        profileName:
          (n = t == null ? void 0 : t.savedContactName) != null
            ? n
            : o(
                "WAWebCustomerManagerImportRecordInput",
              ).getImportedCustomerName(e),
        savedContactName: t == null ? void 0 : t.savedContactName,
        wasNewContact:
          (r = t == null ? void 0 : t.wasNewContact) != null ? r : !0,
        wasNewProfile:
          (a = t == null ? void 0 : t.wasNewProfile) != null ? a : !0,
      };
    }
    async function P(e) {
      var t = await M(e);
      if (t == null)
        throw r("err")(
          "Imported customer profile existence lookup unavailable",
        );
      var n = await A(e, S, async function (e) {
          try {
            await o("WAWebSyncContactJob").syncContactListJob(
              e.map(function (e) {
                return o("WAWebWidFactory").createUserWidOrThrow(
                  o(
                    "WAWebCustomerManagerImportRecordInput",
                  ).getImportedInternationalPhoneNumber(e) + "@c.us",
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
          return Promise.allSettled(
            e.map(async function (e) {
              var t = e.lid;
              return t != null
                ? N(o("WAWebJidToWid").lidUserJidToUserLid(t))
                : { savedContactName: null, wasNewContact: !1 };
            }),
          );
        }),
        a = new Map();
      return (
        e.forEach(function (e, i) {
          var l = n[i];
          if (l.status === "rejected") {
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
            a.set(e, {
              chatJid: s,
              savedContactName: l.value.savedContactName,
              wasNewContact: l.value.wasNewContact,
              wasNewProfile: !t.has(s),
            });
        }),
        a
      );
    }
    async function N(e) {
      var t,
        n,
        a = await o("WAWebApiContact").getContactRecord(e);
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
    }
    async function M(e) {
      var t = new Set(
        e.flatMap(function (e) {
          var t = e.lid;
          return t == null ? [] : [t];
        }),
      );
      if (t.size === 0) return new Set();
      try {
        var n = await o(
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
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    function w(e, t, n, a, i) {
      var l = [],
        s = i.failureCount,
        u = i.successCount;
      return (
        t.forEach(function (t, i) {
          var c,
            d = e[i],
            m = d.rowIndex,
            _ = (c = a.get(m)) != null ? c : 1;
          if (t.status === "fulfilled") {
            var f = n.get(d);
            (f != null &&
              (t.value.wasNewContact ||
                (f.wasNewProfile && t.value.profileResult === "written")) &&
              l.push({
                chatJid: f.chatJid,
                rowIndex: m,
                wasNewContact: t.value.wasNewContact,
                wasNewProfile:
                  f.wasNewProfile && t.value.profileResult === "written",
              }),
              (u += _));
            return;
          }
          (o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] save failed for row ",
                  "",
                ])),
              m,
            )
            .catching(r("getErrorSafe")(t.reason))
            .sendLogs("cm-import-save-row-failed"),
            (s += _));
        }),
        {
          failureCount: s,
          savedContacts: [].concat(i.savedContacts, l),
          successCount: u,
        }
      );
    }
    async function A(e, t, n, r, o) {
      if ((r === void 0 && (r = 0), o === void 0 && (o = []), r >= e.length))
        return o;
      var a = e.slice(r, r + t),
        i = await n(a);
      return A(e, t, n, r + t, [].concat(o, i));
    }
    function F(e, t, n) {
      return A(e, t, function (e) {
        return Promise.allSettled(e.map(n));
      });
    }
    function O(e, t) {
      var n = [],
        r = [];
      return (
        e.forEach(function (e) {
          try {
            n.push($(e, t.get(e)));
          } catch (t) {
            r.push(e);
          }
        }),
        { batchable: n, individual: r }
      );
    }
    async function B(e, t, n) {
      var r = await Q(e),
        o = await F(
          e.map(function (e, t) {
            return t;
          }),
          v,
          async function (n) {
            if (!(await K(e[n], t))) return !1;
            var o = r[n];
            if (o.status === "rejected") throw o.reason;
            return !0;
          },
        ),
        a = e.filter(function (e, t) {
          var n = o[t];
          return n.status === "fulfilled" && n.value;
        }),
        i = await n(a, t),
        l = 0;
      return o.map(function (e) {
        return e.status === "rejected"
          ? e
          : e.value
            ? i[l++]
            : { status: "fulfilled", value: void 0 };
      });
    }
    async function W(e, t, n) {
      if (e.length === 0) return [];
      var r = await q(e, t, n);
      return le(r, function (t) {
        return Q(
          t.map(function (t) {
            return e[t];
          }),
        );
      });
    }
    async function q(e, t, n, r) {
      if ((r === void 0 && (r = !1), e.length === 0)) return [];
      if (n.rateLimited) return U(e, "[cm:import] contact save rate-limited");
      var a = r ? n.retries.take() : null;
      if (r && a == null) return V(e);
      try {
        return (
          await o("WAWebSaveContactAction").saveContactBatchAction(
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
        var i = H(t, e, n, a);
        if (i != null) return i;
      }
      return G(e, t, n);
    }
    function U(e, t) {
      return e.map(function () {
        return { status: "rejected", reason: r("err")(t) };
      });
    }
    function V(e) {
      return (
        o("WALogger")
          .WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[cm:import] contact save retries exhausted; failing ",
                " rows",
              ])),
            e.length,
          )
          .sendLogs("cm-import-save-retries-exhausted"),
        U(e, "[cm:import] contact save retries exhausted")
      );
    }
    function H(e, t, n, a) {
      return o("WAWebCustomerManagerImportRateLimiter").isUsyncRateLimit(e)
        ? ((n.rateLimited = !0),
          o("WALogger")
            .ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] contact save rate-limited for ",
                  " rows; skipping the import's remaining contact saves",
                ])),
              t.length,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("cm-import-save-batch-rate-limited"),
          U(t, "[cm:import] contact save rate-limited"))
        : e instanceof o("WAWebSaveContactAction").NetworkUnavailable
          ? (a != null && n.retries.refund(a),
            o("WALogger")
              .WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[cm:import] contact save failed offline for ",
                    " rows",
                  ])),
                t.length,
              )
              .sendLogs("cm-import-save-batch-offline"),
            U(t, "[cm:import] contact save failed offline"))
          : t.length === 1
            ? (o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] contact save failed for 1 row",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("cm-import-save-row-contact-failed"),
              U(t, "[cm:import] contact save failed"))
            : (o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] batched contact save failed for ",
                      " rows; retrying them in halves",
                    ])),
                  t.length,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("cm-import-save-batch-fallback"),
              null);
    }
    async function G(e, t, n) {
      var o = await F(e, v, function (e) {
          return K(e, t);
        }),
        a = e.flatMap(function (e, t) {
          var n = o[t];
          return n.status === "fulfilled" && n.value ? [t] : [];
        }),
        i = Math.ceil(a.length / 2),
        l = a.slice(0, i),
        s = a.slice(i),
        u = await q(
          l.map(function (t) {
            return e[t];
          }),
          t,
          n,
          !0,
        ),
        c = await q(
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
    }
    function z(e, t, n) {
      return B(e, t, async function (e) {
        var t = await ie(e, function (e) {
          return j(e, n);
        });
        return le(t, function (t) {
          return Q(
            t.map(function (t) {
              return e[t];
            }),
          );
        });
      });
    }
    async function j(e, t) {
      if (t.rateLimited)
        throw r("err")("[cm:import] contact save rate-limited");
      try {
        await o("WAWebCustomerManagerCreateCustomerRecord").saveCustomerContact(
          e,
        );
      } catch (e) {
        throw (
          o("WAWebCustomerManagerImportRateLimiter").isUsyncRateLimit(e) &&
            (t.rateLimited = !0),
          e
        );
      }
    }
    async function K(e, t) {
      if (!e.wasNewContact) return !1;
      var n = await N(e.input.profileWid);
      return n.wasNewContact
        ? !0
        : (t.set(e.contact, X(e, n.savedContactName)), !1);
    }
    async function Q(e) {
      try {
        var t = await o(
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
    }
    function X(e, t) {
      return babelHelpers.extends({}, e, {
        profileName: t != null ? t : e.profileName,
        savedContactName: t,
        wasNewContact: !1,
      });
    }
    async function Y(e) {
      if (e.length === 0) return [];
      try {
        var t = await o("WAWebCustomerDataFieldSaver").createCustomersIfAbsent(
          e,
          { skipLeadArtifacts: !0 },
        );
        return t.map(J);
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
    }
    function J(e) {
      return e === "unresolved"
        ? {
            status: "rejected",
            reason: r("err")(
              "[cm:import] customer profile LID could not resolve",
            ),
          }
        : { status: "fulfilled", value: e };
    }
    async function Z(e, t) {
      var n,
        r,
        a =
          e.input.leadStage != null
            ? await o(
                "WAWebCustomerManagerImportLeadMerge",
              ).readImportedLeadState(e.input.chatJid)
            : null;
      return (
        await o(
          "WAWebCustomerManagerImportProfileMerge",
        ).fillMissingImportedProfileFields(e.input, t, {
          canBackfillLeadStage: (a == null ? void 0 : a.isMember) === !0,
          leadStageToBackfill:
            (n = a == null ? void 0 : a.stage) != null ? n : e.input.leadStage,
          profileName:
            (r = e.savedContactName) != null
              ? r
              : o(
                  "WAWebCustomerManagerImportRecordInput",
                ).getImportedCustomerName(e.contact),
        }),
        "existing"
      );
    }
    async function ee(e, t) {
      var n = e.input.leadStage;
      if (
        n != null &&
        (await o(
          "WAWebCustomerManagerImportLeadMerge",
        ).isImportedLeadStageEligible(e.input.chatJid))
      ) {
        var a = t && e.wasNewContact && e.wasNewProfile,
          i = await o(
            "WAWebContactManagerCustomerProfileQuery",
          ).fetchCustomerProfile(e.input.chatJid);
        if (i == null)
          throw r("err")(
            "[cm:import] customer profile disappeared before Lead update",
          );
        await o(
          "WAWebCustomerManagerImportLeadMerge",
        ).reconcileImportedLeadArtifacts(e.input.chatJid, i.leadStage, a);
      }
    }
    async function te(e, t) {
      var n = e.map(function (e, t) {
          return t;
        }),
        a = t.map(function (e) {
          return e.status === "fulfilled" ? e.value : null;
        }),
        i = n.filter(function (e) {
          return a[e] == null;
        }),
        l = n.filter(function (e) {
          return a[e] != null;
        }),
        s = await ne(e, i, t),
        u = i.filter(function (e) {
          var t = s.get(e);
          return (
            (t == null ? void 0 : t.status) === "fulfilled" &&
            t.value === "existing"
          );
        }),
        c = [].concat(l, u),
        d = await F(c, v, async function (t) {
          var n;
          return Z(
            e[t],
            (n = a[t]) != null
              ? n
              : await o(
                  "WAWebContactManagerCustomerProfileQuery",
                ).fetchCustomerProfile(e[t].input.chatJid),
          );
        });
      return (
        c.forEach(function (e, t) {
          s.set(e, d[t]);
        }),
        n.map(function (e) {
          var t = s.get(e);
          return t != null
            ? t
            : {
                status: "rejected",
                reason: r("err")("Missing profile result"),
              };
        })
      );
    }
    async function ne(e, t, n) {
      var r = await F(t, v, function (t) {
          return oe(e[t], n[t]);
        }),
        o = await Y(
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
    }
    function re(e) {
      return F(e, v, async function (e) {
        var t = e.input,
          n = e.wasNewProfile,
          r = await o(
            "WAWebCustomerManagerCreateCustomerRecord",
          ).readProfileForGuardedBirthday(t);
        return r != null || n
          ? r
          : o("WAWebContactManagerCustomerProfileQuery").fetchCustomerProfile(
              t.chatJid,
            );
      });
    }
    async function oe(e, t) {
      var n =
          e.input.leadStage != null
            ? await o(
                "WAWebCustomerManagerImportLeadMerge",
              ).readImportedLeadState(e.input.chatJid)
            : null,
        r = null;
      if (n != null)
        if (n.isMember) {
          var a;
          r = (a = n.stage) != null ? a : e.input.leadStage;
        } else e.wasNewContact && e.wasNewProfile && (r = e.input.leadStage);
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
    }
    function ae(e) {
      return e.flatMap(function (e, t) {
        return e.status === "fulfilled" ? [t] : [];
      });
    }
    function ie(e, t) {
      return F(e, v, async function (e) {
        await t(e.input);
      });
    }
    async function le(e, t) {
      var n = ae(e),
        r = await t(n),
        o = [].concat(e);
      return (
        n.forEach(function (e, t) {
          var n = r[t];
          n.status === "rejected" && (o[e] = n);
        }),
        o
      );
    }
    async function se(e, t) {
      var n = await re(e),
        r = n.map(function (e) {
          return e.status === "fulfilled"
            ? { status: "fulfilled", value: "written" }
            : e;
        }),
        a = new Map();
      r = await le(r, function (n) {
        return t(
          n.map(function (t) {
            return e[t];
          }),
          a,
        );
      });
      var i = e.map(function (e) {
        var t;
        return (t = a.get(e.contact)) != null ? t : e;
      });
      r = await le(r, function (e) {
        return ie(
          e.map(function (e) {
            return i[e];
          }),
          o("WAWebCustomerManagerCreateCustomerRecord").createCustomerChat,
        );
      });
      var l = ae(r),
        s = await te(
          l.map(function (e) {
            return i[e];
          }),
          l.map(function (e) {
            return n[e];
          }),
        );
      return (
        l.forEach(function (e, t) {
          r[e] = s[t];
        }),
        (r = await le(r, function (e) {
          return F(e, v, async function (e) {
            var t = r[e],
              n = t.status === "fulfilled" && t.value === "written";
            return ee(i[e], n);
          });
        })),
        (r = await le(r, function (e) {
          return ie(
            e.map(function (e) {
              return i[e];
            }),
            o("WAWebCustomerManagerImportNoteMerge").writeMissingImportedNote,
          );
        })),
        r.map(function (e, t) {
          return e.status === "fulfilled"
            ? {
                status: "fulfilled",
                value: {
                  profileResult: e.value,
                  wasNewContact: i[t].wasNewContact,
                },
              }
            : e;
        })
      );
    }
    function ue(e, t) {
      return e.reduce(function (e, n) {
        var r;
        return e + ((r = t.get(n.rowIndex)) != null ? r : 1);
      }, 0);
    }
    ((l.IMPORT_ROWS_PER_MINUTE = L),
      (l.saveImportedContacts = k),
      (l.createCustomerManagerImporter = I));
  },
  98,
);
