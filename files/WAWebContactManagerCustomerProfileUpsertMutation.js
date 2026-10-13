__d(
  "WAWebContactManagerCustomerProfileUpsertMutation",
  [
    "WALogger",
    "WAWebContactManagerCustomerProfileQuery",
    "WAWebContactManagerCustomerProfileUpsertInput",
    "WAWebContactManagerCustomerProfileUpsertMutation.graphql",
    "WAWebContactManagerCustomerProfilesQuery",
    "WAWebCustomerManagerRequestErrors",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebContactManagerCustomerProfileUpsertMutation.graphql"));
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield g([{ chatJid: e, profile: t }]);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          var t = e.map(function (e) {
              var t = e.chatJid,
                n = e.profile;
              return babelHelpers.extends(
                {},
                o(
                  "WAWebContactManagerCustomerProfileUpsertInput",
                ).buildUpsertInput(t, n),
                { if_match: "" },
              );
            }),
            n = new Set(
              t.map(function (e) {
                var t = e.lid;
                return t;
              }),
            );
          if (n.size !== e.length)
            throw r("err")(
              "[CustomerManager] customer profile import: duplicate LID",
            );
          var a = yield I(t);
          if (
            (a == null ? void 0 : a.profiles) == null ||
            a.conflicts == null ||
            a.unresolved_lids == null
          )
            throw r("err")(
              "[CustomerManager] customer profile import: missing write results",
            );
          var i = new Map();
          function l(e, t) {
            if (e == null || !n.delete(e))
              throw r("err")(
                "[CustomerManager] customer profile import: unexpected or duplicate result LID",
              );
            i.set(e, t);
          }
          return (
            a.profiles.forEach(function (e) {
              var t = e.lid;
              return l(t, "written");
            }),
            a.conflicts.forEach(function (e) {
              var t = e.lid;
              return l(t, "existing");
            }),
            a.unresolved_lids.forEach(function (e) {
              return l(e, "unresolved");
            }),
            t.map(function (e) {
              var t = e.lid,
                n = i.get(t);
              if (n == null)
                throw r("err")(
                  "[CustomerManager] customer profile import: missing result LID",
                );
              return n;
            })
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (n === "")
            throw r("err")(
              "[CustomerManager] customer profile patch requires an etag",
            );
          return L([
            babelHelpers.extends(
              {},
              o(
                "WAWebContactManagerCustomerProfileUpsertInput",
              ).buildUpsertInput(e, t),
              { if_match: n },
            ),
          ]);
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
          if (e.length !== 0) {
            var t = e.length === 1 ? y(e[0].profile) : null;
            if (t != null) {
              yield C(e[0].chatJid, e[0].profile, t);
              return;
            }
            var n = yield L(
              e.map(function (e) {
                var t = e.chatJid,
                  n = e.profile;
                return o(
                  "WAWebContactManagerCustomerProfileUpsertInput",
                ).buildUpsertInput(t, n);
              }),
            );
            if (!n)
              throw r("err")(
                "[ContactManager] customer profile upsert: batch rejected by a version precondition",
              );
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      var t = e.birthday,
        n = t == null ? void 0 : t.ifMatch;
      return t != null && n != null
        ? babelHelpers.extends({}, t, { ifMatch: n })
        : null;
    }
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i, l;
            if (
              (a === void 0 && (a = 1),
              !(yield L([
                o(
                  "WAWebContactManagerCustomerProfileUpsertInput",
                ).buildUpsertInput(
                  e,
                  babelHelpers.extends({}, t, { birthday: n }),
                ),
              ])))
            ) {
              if (a === 3)
                throw r("err")(
                  "[CustomerManager] customer profile birthday changed during save",
                );
              var s = yield o(
                "WAWebContactManagerCustomerProfileQuery",
              ).fetchCustomerProfile(e);
              if (s == null && n.ifMatch !== "")
                throw r("err")(
                  "[CustomerManager] customer profile birthday could not be verified after conflict",
                );
              yield C(
                e,
                t,
                babelHelpers.extends({}, n, {
                  ifMatch: (i = s == null ? void 0 : s.etag) != null ? i : "",
                  storedDob:
                    (l = s == null ? void 0 : s.birthdayIso) != null ? l : null,
                }),
                a + 1,
              );
            }
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield L([
            o(
              "WAWebContactManagerCustomerProfileUpsertInput",
            ).buildFieldUpdateInput(e, t),
          ]);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      if (e === 0)
        throw r("err")(
          "[CustomerManager] customer profile last order date cannot be Unix epoch zero",
        );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a,
            i = yield I(e),
            l = e.length === 1 ? e[0] : null;
          if (
            l != null &&
            l.if_match != null &&
            !k(
              i == null ? void 0 : i.profiles,
              i == null ? void 0 : i.conflicts,
              l.lid,
            )
          )
            throw r("err")(
              "[CustomerManager] customer profile upsert: no confirmed profile write",
            );
          if (
            ((t = i == null || (n = i.conflicts) == null ? void 0 : n.length) !=
            null
              ? t
              : 0) > 0
          ) {
            if (
              e.every(function (e) {
                return e.if_match == null;
              })
            )
              throw r("err")(
                "[CustomerManager] customer profile upsert: conflict without version precondition",
              );
            return !1;
          }
          if (
            (i == null || (a = i.profiles) == null ? void 0 : a.length) !==
            e.length
          )
            throw r("err")(
              "[CustomerManager] customer profile upsert: no confirmed profile write",
            );
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[CustomerManager] customer profile upsert: synced ",
                  " profiles",
                ])),
              e.length,
            ),
            !0
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      var r;
      if (e == null || t == null) return !1;
      var o = (r = e[0]) != null ? r : t[0];
      return e.length + t.length === 1 && (o == null ? void 0 : o.lid) === n;
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.forEach(function (e) {
            R(e.last_order_date);
          });
          var t = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (t.type !== "success")
            throw r("err")(
              "[CustomerManager] customer profile upsert: no access token (" +
                t.type +
                ")",
            );
          yield r("WAWebNetworkStatus").waitIfOffline();
          try {
            var n = yield o("WAWebRelayClient").commitMutation(
              u,
              { input: e },
              { accessToken: t.token, environmentType: "facebook" },
            );
            return n == null ? void 0 : n.xfb_wa_upsert_customer_profiles;
          } catch (e) {
            throw (
              o("WAWebContactManagerCustomerProfilesQuery").logIfRateLimited(
                e,
                "write",
              ),
              o(
                "WAWebCustomerManagerRequestErrors",
              ).asCustomerManagerRequestError(e)
            );
          }
        })),
        T.apply(this, arguments)
      );
    }
    ((l.upsertCustomerProfileToServer = c),
      (l.createCustomerProfilesIfAbsent = m),
      (l.updateCustomerProfileIfUnchanged = _),
      (l.upsertCustomerProfilesToServer = g),
      (l.upsertCustomerProfileFieldToServer = v),
      (l.assertPersistableLastOrderDate = R));
  },
  98,
);
