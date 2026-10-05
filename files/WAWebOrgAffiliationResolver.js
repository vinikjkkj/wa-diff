__d(
  "WAWebOrgAffiliationResolver",
  [
    "Promise",
    "WALogger",
    "WAWebDBOrg",
    "WAWebMexGetTypename",
    "WAWebMexUsync",
    "WAWebOrgContactCollection",
    "WAWebSchemaOrg",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 100,
      p = 1e3,
      _ = new Set(),
      f = new Set(),
      g = new Set(),
      h = new Map(),
      y = new Set(),
      C = new Set(),
      b = new Set(),
      v = new Set(),
      S = new Map(),
      R = 0,
      L = 0,
      E = null,
      k = new Map();
    function I(e, t, r) {
      var o,
        a = (r == null ? void 0 : r.force) === !0,
        i = (o = r == null ? void 0 : r.reason) != null ? o : "ui";
      return (
        new Set(e).forEach(function (e) {
          if (e !== "") {
            if (a) $(e, i);
            else {
              if (x(e) || _.has(e) || f.has(e) || g.has(e)) return;
              (b.add(e), S.set(e, i));
            }
            L++;
          }
        }),
        P() ? N(t) : E != null ? E : (d || (d = n("Promise"))).resolve()
      );
    }
    function T() {
      (R++,
        (_ = new Set()),
        (f = new Set()),
        (g = new Set()),
        (h = new Map()),
        (y = new Set()),
        (C = new Set()),
        (b = new Set()),
        (v = new Set()),
        (S = new Map()),
        (L = 0),
        (E = null),
        k.forEach(function (e) {
          return self.clearTimeout(e);
        }),
        (k = new Map()));
    }
    function D(e) {
      e.forEach(function (e) {
        (_.delete(e), f.delete(e), g.delete(e));
      });
    }
    function x(e) {
      return b.has(e) || C.has(e) || v.has(e) || y.has(e) || k.has(e);
    }
    function $(e, t) {
      if (k.has(e)) {
        h.set(e, t);
        return;
      }
      if (C.has(e) || y.has(e)) {
        h.set(e, t);
        return;
      }
      (b.delete(e), v.add(e), S.set(e, t));
    }
    function P() {
      return b.size > 0 || v.size > 0;
    }
    function N(t) {
      if (E != null) return E;
      var a = R,
        i = L,
        l = (d || (d = n("Promise")))
          .resolve()
          .then(function () {
            return M(t, a);
          })
          .catch(function (t) {
            var n = r("getErrorSafe")(t);
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-affiliations] resolver task failed",
                    ])),
                )
                .catching(n)
                .sendLogs("org-affiliations-resolution-failed"),
              n
            );
          })
          .finally(function () {
            if (E === l && ((E = null), a === R && i !== L && P())) return N(t);
          });
      return ((E = l), l);
    }
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if ((n === void 0 && (n = null), t !== R || !P())) {
            if (n != null) throw n;
            return;
          }
          if ((yield A(t), t !== R || v.size === 0)) return M(e, t, n);
          var o = yield e.prepareJoinedOrganizations();
          if (t === R) {
            if (o === "unknown") {
              if (n != null) throw n;
              return;
            }
            var a = O(),
              i = a.lids,
              l = a.reason,
              s = n;
            try {
              yield e.runOperation(function () {
                return o === "empty" ? B(i, e, t) : q(i, e, l, t);
              });
            } catch (e) {
              s != null || (s = r("getErrorSafe")(e));
            } finally {
              i.forEach(function (e) {
                y.delete(e);
                var t = h.get(e);
                k.has(e) || (h.delete(e), t != null && (v.add(e), S.set(e, t)));
              });
            }
            return M(e, t, s);
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Array.from(b);
          if ((b.clear(), t.length !== 0)) {
            t.forEach(function (e) {
              return C.add(e);
            });
            var n;
            try {
              n = yield o("WAWebDBOrg").getOrgContactsByLids(t);
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-affiliations] cached membership read failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("org-affiliations-cache-read-failed"),
                (n = []));
            }
            if (
              (t.forEach(function (e) {
                return C.delete(e);
              }),
              e === R)
            ) {
              var a = new Map();
              (n.forEach(function (e) {
                var t,
                  n = (t = a.get(e.lid)) != null ? t : [];
                (n.push(e), a.set(e.lid, n));
              }),
                t.forEach(function (e) {
                  var t,
                    n = (t = a.get(e)) != null ? t : [];
                  (n.length > 0 &&
                    o("WAWebOrgContactCollection").OrgContactCollection.addRows(
                      n,
                    ),
                    v.add(e));
                  var r = h.get(e);
                  r != null && (h.delete(e), S.set(e, r));
                }));
            }
          }
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      var e,
        t,
        n = Array.from(v),
        r = (e = S.get((t = n[0]) != null ? t : "")) != null ? e : "ui",
        o = [];
      for (var a of n) {
        var i;
        if (o.length === m || ((i = S.get(a)) != null ? i : "ui") !== r) break;
        o.push(a);
      }
      return (
        o.forEach(function (e) {
          (v.delete(e), S.delete(e), y.add(e));
        }),
        { lids: o, reason: r }
      );
    }
    function B(e, t, n) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = new Map();
          (e.forEach(function (e) {
            return r.set(e, []);
          }),
            (yield G(r, t, n)) &&
              e.forEach(function (e) {
                return _.add(e);
              }));
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t, n, r) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield V(e, n);
            if (r === R) {
              var i = new Map(),
                l = [],
                s = [];
              e.forEach(function (e) {
                var t = a.get(e);
                if ((t == null ? void 0 : t.status) === "complete") {
                  var n = Q(t.memberships);
                  n != null
                    ? i.set(e, n)
                    : (o("WALogger")
                        .ERROR(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "[org-affiliations] malformed complete membership response",
                            ])),
                        )
                        .sendLogs(
                          "org-affiliations-malformed-complete-response",
                        ),
                      s.push(e));
                } else if (
                  (t == null ? void 0 : t.status) === "failed" &&
                  t.error.retryable
                ) {
                  var r;
                  l.push({
                    backoffMs: (r = t.error.backoffMs) != null ? r : p,
                    lid: e,
                  });
                } else
                  (t == null ? void 0 : t.status) === "failed" &&
                    !t.error.retryable &&
                    s.push(e);
              });
              try {
                (i.size > 0 &&
                  (yield G(i, t, r)) &&
                  i.forEach(function (e, t) {
                    e.length === 0 ? _.add(t) : f.add(t);
                  }),
                  r === R &&
                    s.forEach(function (e) {
                      return g.add(e);
                    }));
              } finally {
                r === R && X(l, t, n, r);
              }
            }
          },
        )),
        U.apply(this, arguments)
      );
    }
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = new Map(),
            i = new Map();
          if (
            (new Set(e).forEach(function (e) {
              try {
                i.set(
                  e,
                  o("WAWebWidFactory").createUserLidOrThrow(e, "lid").toJid(),
                );
              } catch (t) {
                a.set(e, {
                  error: {
                    backoffMs: null,
                    code: 400,
                    retryable: !1,
                    text: r("getErrorSafe")(t).message,
                  },
                  status: "failed",
                });
              }
            }),
            i.size === 0)
          )
            return a;
          var l = yield o("WAWebMexUsync").mexUsyncQuery({
            users: Array.from(i.values()).map(function (e) {
              return { jid: e };
            }),
            telemetry: {
              context: t === "periodic" ? "BACKGROUND" : "INTERACTIVE",
            },
            fetch: { orgs: !0 },
          });
          return l.error != null
            ? (i.forEach(function (e, t) {
                a.set(t, { error: l.error, status: "failed" });
              }),
              a)
            : ((n = l.response) == null ||
                n.forEach(function (e) {
                  var t = j(e.jid, i);
                  t != null && a.set(t, K(e.orgs_info));
                }),
              i.forEach(function (e, t) {
                a.has(t) || a.set(t, { status: "omitted" });
              }),
              a);
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t, n) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield t.persistMemberships(e);
          return n !== R ? !1 : (t.publishMemberships(e, r), !0);
        })),
        z.apply(this, arguments)
      );
    }
    function j(e, t) {
      try {
        var n = o("WAWebWidFactory").createWid(e);
        return n.isLid() && t.has(n.user) ? n.user : null;
      } catch (e) {
        return null;
      }
    }
    function K(e) {
      if (e == null) return { status: "omitted" };
      var t = o("WAWebMexGetTypename").getTypename(e);
      return t === "XWA2Orgs" && "orgs" in e
        ? e.orgs == null
          ? { status: "omitted" }
          : {
              memberships: e.orgs.map(function (e) {
                return {
                  display_name: e.display_name,
                  member_tag: e.member_tag,
                  org_id: e.org_id,
                  role: e.role,
                };
              }),
              status: "complete",
            }
        : t === "XWA2ResponseStatus" && "status" in e && e.status === "EMPTY"
          ? { memberships: [], status: "complete" }
          : t === "XWA2ResponseStatus" &&
              "status" in e &&
              e.status === "NOT_ALLOWED"
            ? { memberships: [], status: "complete" }
            : { status: "omitted" };
    }
    function Q(e) {
      var t = e.map(function (e) {
        var t,
          n = o("WAWebSchemaOrg").OrgMemberRole.cast(e.role);
        return e.display_name == null ||
          e.org_id == null ||
          e.org_id === "" ||
          n == null
          ? null
          : {
              memberName: e.display_name,
              memberTag: (t = e.member_tag) != null ? t : "",
              orgId: e.org_id,
              role: n,
            };
      });
      return t.some(function (e) {
        return e == null;
      })
        ? null
        : t.flatMap(function (e) {
            return e == null ? [] : [e];
          });
    }
    function X(e, t, n, a) {
      var i = new Map(),
        l = new Set();
      (e.forEach(function (e) {
        var t = e.backoffMs,
          n = e.lid;
        if (!k.has(n) && !l.has(n)) {
          var r;
          l.add(n);
          var o = (r = i.get(t)) != null ? r : [];
          (o.push(n), i.set(t, o));
        }
      }),
        i.forEach(function (e, i) {
          var l = self.setTimeout(function () {
            (e.forEach(function (e) {
              return k.delete(e);
            }),
              a === R &&
                (e.forEach(function (e) {
                  var t,
                    r = (t = h.get(e)) != null ? t : n;
                  (h.delete(e), v.add(e), S.set(e, r));
                }),
                N(t).catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[org-affiliations] retry failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("org-affiliations-retry-failed");
                })));
          }, i);
          e.forEach(function (e) {
            return k.set(e, l);
          });
        }));
    }
    ((l.resolveOrgAffiliations = I),
      (l.resetOrgAffiliationResolver = T),
      (l.invalidateResolvedOrgAffiliations = D));
  },
  98,
);
