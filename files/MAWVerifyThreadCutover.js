__d(
  "MAWVerifyThreadCutover",
  [
    "CometRelay",
    "FBLogger",
    "I64",
    "LSAuthorityLevel",
    "LSContactBitOffset",
    "LSCutoverMappingQueryFromOpenThreadIdStoredProcedure",
    "LSFactory",
    "LSPlatformWaitForTaskCompletion",
    "LSVerifyContactExistsWithID",
    "MAWDefaultE2eeOneToOneEligibility",
    "MAWVerifyThreadCutover_ContactCapabilities2Query.graphql",
    "Promise",
    "ReQL",
    "ReQLSubscribe",
    "asyncToGeneratorRuntime",
    "ensureContactsExistAndUpdatedSync",
    "err",
    "getErrorSafe",
    "gkx",
    "isThreadLevelCutoverEnabled",
    "justknobx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 1e4,
      d = Math.min(r("justknobx")._("2730"), c),
      m = r("justknobx")._("2731"),
      p =
        e !== void 0
          ? e
          : (e = n("MAWVerifyThreadCutover_ContactCapabilities2Query.graphql"));
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (r("isThreadLevelCutoverEnabled")()) {
            var a = yield e,
              i = yield o("ReQL").firstAsync(
                o("ReQL")
                  .fromTableAscending(
                    a.tables.mi_act_mapping_table.index("jid"),
                  )
                  .getKeyRange(t),
              );
            return i;
          }
          return (u || (u = n("Promise"))).resolve();
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (r("isThreadLevelCutoverEnabled")()) {
            var a = yield e,
              i = yield (u || (u = n("Promise"))).all([
                o("ReQL").firstAsync(
                  o("ReQL")
                    .fromTableAscending(a.tables.cutover_threads)
                    .getKeyRange(t),
                ),
                o("ReQL").firstAsync(
                  o("ReQL")
                    .fromTableAscending(a.tables.contacts)
                    .getKeyRange(t),
                ),
              ]),
              l = i[0],
              s = i[1],
              c = s != null && o("LSContactBitOffset").has(76, s);
            return l != null || c;
          }
          return !1;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = yield e,
            i = yield o("ReQL").firstAsync(
              o("ReQL")
                .fromTableAscending(a.tables.mi_act_mapping_table)
                .getKeyRange(t),
            );
          if (i == null) {
            var l = null,
              c = new (u || (u = n("Promise")))(function (e, n) {
                var i = o("ReQLSubscribe").subscribeToFirst(
                  o("ReQL")
                    .fromTableAscending(
                      a.tables.mi_act_mapping_table.index("jid"),
                    )
                    .getKeyRange(t),
                  function (t) {
                    t != null &&
                      (l != null && window.clearTimeout(l), i(), e());
                  },
                );
                ((l = window.setTimeout(function () {
                  (i(), n(r("err")("Timeout")));
                }, m)),
                  r("promiseDone")(
                    r("LSPlatformWaitForTaskCompletion")(
                      a,
                      function (e) {
                        return r(
                          "LSCutoverMappingQueryFromOpenThreadIdStoredProcedure",
                        )(r("LSFactory")(e), { openThreadId: t });
                      },
                      "readwrite",
                      "cutover_mapping_query_" +
                        (s || (s = o("I64"))).to_string(t),
                    ),
                    function () {
                      (l != null && window.clearTimeout(l), i(), e());
                    },
                  ));
              });
            try {
              yield c;
            } catch (e) {
              r("FBLogger")("messenger_web")
                .catching(r("getErrorSafe")(e))
                .warn("Issue waiting for ACT thread to be ready");
            }
            yield c;
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = yield o("ReQL").firstAsync(
            o("ReQL").fromTableAscending(e.tables.contacts).getKeyRange(a),
          );
          if (
            i != null &&
            (s || (s = o("I64"))).ge(
              i.authorityLevel,
              (s || (s = o("I64"))).of_int32(
                r("LSAuthorityLevel").AUTHORITATIVE,
              ),
            )
          )
            return i;
          r("promiseDone")(r("ensureContactsExistAndUpdatedSync")(e, t, a));
          var l = new (u || (u = n("Promise")))(function (t, n) {
            var i = null,
              l = o("ReQLSubscribe").subscribeToFirst(
                o("ReQL").fromTableAscending(e.tables.contacts).getKeyRange(a),
                function (e) {
                  e != null &&
                    (s || (s = o("I64"))).ge(
                      e.authorityLevel,
                      (s || (s = o("I64"))).of_int32(
                        r("LSAuthorityLevel").AUTHORITATIVE,
                      ),
                    ) &&
                    (r("FBLogger")("messenger_web").info(
                      "Contact retrieval was successful",
                    ),
                    i != null && window.clearTimeout(i),
                    l(),
                    t(e));
                },
              );
            i = window.setTimeout(function () {
              (l(), n(r("err")("Timeout")));
            }, d);
          });
          try {
            i = yield l;
          } catch (t) {
            var c = yield o("ReQL").firstAsync(
              o("ReQL").fromTableAscending(e.tables.contacts).getKeyRange(a),
            );
            r("FBLogger")("messenger_web")
              .catching(r("getErrorSafe")(t))
              .warn(
                "Error retrieving and navigating to the most recent thread: contact exists in LSDB is %s and AuthorityLevel is %s",
                c != null,
                (c == null ? void 0 : c.authorityLevel) != null
                  ? (s || (s = o("I64"))).to_string(
                      c == null ? void 0 : c.authorityLevel,
                    )
                  : "null",
              );
          }
          return i;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n, r) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, l) {
            var u = yield e;
            l == null || l("update_contact_capabilities2_db_ready");
            var c = yield o("ReQL").firstAsync(
              o("ReQL").fromTableAscending(u.tables.contacts).getKeyRange(t),
            );
            l == null || l("update_contact_capabilities2_contact_ready");
            var d = o("LSContactBitOffset").contactCapabilitiesHas(
                83,
                (s || (s = o("I64"))).of_string(a),
              ),
              m = o("LSContactBitOffset").contactCapabilitiesHas(
                76,
                s.of_string(a),
              );
            if (c == null)
              return (
                r("FBLogger")("messenger_web").warn(
                  "contact is null in maybeUpdateContactCapabilities2IfOutOfSync",
                ),
                (d || m) &&
                  r("FBLogger")("messenger_web").warn(
                    "contact is null and they have hasServerCutoverCapabilities as %s and hasServerDefaultE2eeCapabilities as %s from server",
                    m,
                    d,
                  ),
                null
              );
            var p = o("LSContactBitOffset").contactCapabilitiesHas(
                83,
                c.capabilities2,
              ),
              _ = o("LSContactBitOffset").contactCapabilitiesHas(
                76,
                c.capabilities2,
              );
            if ((d && !p && !_) || (m && !_)) {
              var f = d ? "default_e2ee" : "cutover";
              r("FBLogger")("messenger_web").info(
                "sync LS contactCapabilities2 with server value where contactAuthoritativeLevel is %s and serverContactCapabilities2 is %s",
                (s || (s = o("I64"))).to_string(c.authorityLevel),
                f,
              );
              var g = babelHelpers.extends({}, c, {
                capabilities2: s.of_string(a),
              });
              return (
                l == null || l("fetch_contact_from_lsdb_start"),
                yield u.runInTransaction(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        yield e.contacts.put(g);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  "readwrite",
                  void 0,
                  void 0,
                  i.id + ":308",
                ),
                g
              );
            } else
              r("gkx")("9396") &&
                r("FBLogger")("messenger_web").info(
                  "LS contactCapabilities2 isDefaultE2ee: %s and isCutover: %s is synced with server values where contactAuthoritativeLevel is %s",
                  p,
                  _,
                  (s || (s = o("I64"))).to_string(c.authorityLevel),
                );
            return c;
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n, r, o) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, l, c) {
            var d = null,
              m = null;
            if (c != null) {
              var _ = c.contactSync;
              if (
                (_ != null
                  ? yield _
                  : yield o("LSVerifyContactExistsWithID").runInTransaction(
                      e,
                      a,
                      !1,
                      void 0,
                      i.id + ":340",
                    ),
                l == null || l("verify_contact_exists_with_id_complete"),
                (m = yield c.contactFetch),
                (d = yield c.contactCapabilities),
                l == null || l("fetch_contact_completed_from_preload"),
                m != null &&
                  (s || (s = o("I64"))).ge(
                    m.authorityLevel,
                    (s || (s = o("I64"))).of_int32(
                      r("LSAuthorityLevel").AUTHORITATIVE,
                    ),
                  ))
              )
                return (l == null || l("contact_not_available"), m);
            } else {
              var f;
              if (
                (yield o("LSVerifyContactExistsWithID").runInTransaction(
                  e,
                  a,
                  !1,
                  void 0,
                  i.id + ":360",
                ),
                l == null || l("verify_contact_exists_with_id_complete"),
                (m = yield o("ReQL").firstAsync(
                  o("ReQL")
                    .fromTableAscending(e.tables.contacts)
                    .getKeyRange(a),
                )),
                l == null || l("fetch_contact_from_db_complete"),
                m != null &&
                  (s || (s = o("I64"))).ge(
                    m.authorityLevel,
                    (s || (s = o("I64"))).of_int32(
                      r("LSAuthorityLevel").AUTHORITATIVE,
                    ),
                  ))
              )
                return (l == null || l("contact_not_available"), m);
              var g = yield o("CometRelay")
                .fetchQuery(
                  t,
                  p,
                  { id: (s || (s = o("I64"))).to_string(a) },
                  { fetchPolicy: "store-or-network" },
                )
                .toPromise();
              (l == null || l("fetch_contact_capability_from_graphql_complete"),
                (d =
                  g == null || (f = g.user) == null
                    ? void 0
                    : f.message_capabilities2_str));
            }
            if (d == null)
              return (
                r("gkx")("9396") &&
                  r("FBLogger")("messenger_web").warn(
                    "messageCapabilities2Str is null in makeSureContactCapabilitiesIsLoaded",
                  ),
                l == null || l("contact_capability_not_available"),
                m
              );
            var h = yield S((u || (u = n("Promise"))).resolve(e), a, d, l);
            return (l == null || l("update_contact_complete"), h);
          },
        )),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n, r, o) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            var c,
              d = yield e,
              m = yield b(d, t, a);
            if (
              (m == null &&
                r("gkx")("9396") &&
                r("FBLogger")("messenger_web").warn(
                  "contact is null in verifyContactCutoverOrOndemandCutover",
                ),
              l != null)
            ) {
              var p = yield S((u || (u = n("Promise"))).resolve(d), a, l);
              p != null && (m = p);
            }
            var _ =
                l != null
                  ? (s || (s = o("I64"))).of_string(l)
                  : (c = m) == null
                    ? void 0
                    : c.capabilities2,
              f =
                _ != null &&
                o("LSContactBitOffset").contactCapabilitiesHas(76, _),
              h = f || (yield g((u || (u = n("Promise"))).resolve(d), a));
            return h
              ? i === !0
                ? "on_demand_cutover"
                : "cutover"
              : o(
                    "MAWDefaultE2eeOneToOneEligibility",
                  ).isContactDefaultE2eeOneToOneEligible({ maybeContact: m })
                ? "default_e2ee"
                : null;
          },
        )),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = yield e,
            l = yield b(i, t, a);
          l == null &&
            r("gkx")("9396") &&
            r("FBLogger")("messenger_web").warn(
              "contact is null in verifyContactCutoverOrOndemandCutover",
            );
          var s = yield g((u || (u = n("Promise"))).resolve(i), a);
          if (s) {
            yield y((u || (u = n("Promise"))).resolve(i), a);
            var c = yield o("ReQL").firstAsync(
              o("ReQL")
                .fromTableAscending(i.tables.mi_act_mapping_table)
                .getKeyRange(a),
            );
            return c == null ? "default_e2ee" : "cutover";
          }
          return o(
            "MAWDefaultE2eeOneToOneEligibility",
          ).isContactDefaultE2eeOneToOneEligible({ maybeContact: l })
            ? "default_e2ee"
            : null;
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return t == null
        ? (u || (u = n("Promise"))).resolve(!1)
        : g(e, (s || (s = o("I64"))).of_string(t));
    }
    ((l.getCutoverThread = _),
      (l.verifyThreadCutover = g),
      (l.ensureContactCapabilities2IsLoaded = L),
      (l.verifyContactCutoverOrOndemandCutoverOrDefaultE2EE = k),
      (l.verifyContactCutoverOrDefaultE2EEWhenReady = T),
      (l.verifyThreadCutoverWithStringInput = x));
  },
  98,
);
