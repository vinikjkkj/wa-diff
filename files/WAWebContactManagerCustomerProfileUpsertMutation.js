__d(
  "WAWebContactManagerCustomerProfileUpsertMutation",
  [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebContactManagerCustomerProfileQuery",
    "WAWebContactManagerCustomerProfileUpsertMutation.graphql",
    "WAWebContactManagerCustomerProfilesQuery",
    "WAWebCustomerManagerCustomerProfileDecoders",
    "WAWebCustomerManagerRequestErrors",
    "WAWebCustomerOrderPreferences",
    "WAWebCustomerProfileBirthday",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("WAWebContactManagerCustomerProfileUpsertMutation.graphql"));
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield p([{ chatJid: e, profile: t }]);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t = e.length === 1 ? f(e[0].profile) : null;
            if (t != null) {
              yield g(e[0].chatJid, e[0].profile, t);
              return;
            }
            var n = yield v(
              e.map(function (e) {
                var t = e.chatJid,
                  n = e.profile;
                return E(t, n);
              }),
            );
            if (!n)
              throw r("err")(
                "[ContactManager] customer profile upsert: batch rejected by a version precondition",
              );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = e.birthday,
        n = t == null ? void 0 : t.ifMatch;
      return t != null && n != null
        ? babelHelpers.extends({}, t, { ifMatch: n })
        : null;
    }
    function g(e, t, n, r) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i, l;
            if (
              (a === void 0 && (a = 1),
              !(yield v([E(e, babelHelpers.extends({}, t, { birthday: n }))])))
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
              yield g(
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
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield v([R(e, t)]);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      if (e === 0)
        throw r("err")(
          "[CustomerManager] customer profile last order date cannot be Unix epoch zero",
        );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.forEach(function (e) {
            b(e.last_order_date);
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
            var n,
              a,
              i,
              l = yield o("WAWebRelayClient").commitMutation(
                c,
                { input: e },
                { accessToken: t.token, environmentType: "facebook" },
              ),
              s = l == null ? void 0 : l.xfb_wa_upsert_customer_profiles;
            if (
              ((n =
                s == null || (a = s.conflicts) == null ? void 0 : a.length) !=
              null
                ? n
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
              (s == null || (i = s.profiles) == null ? void 0 : i.length) !==
              e.length
            )
              throw r("err")(
                "[CustomerManager] customer profile upsert: no confirmed profile write",
              );
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
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[CustomerManager] customer profile upsert: synced ",
                  " profiles",
                ])),
              e.length,
            ),
            !0
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      var n = { lid: k(e) };
      e: {
        var r = t;
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.field === "email" &&
          "value" in r
        ) {
          var a = r.value;
          n.email = L(a);
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.field === "address" &&
          "value" in r
        ) {
          var i = r.value;
          n.address = L(i);
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.field === "birthday" &&
          "value" in r &&
          "storedDob" in r
        ) {
          var l = r.value,
            u = r.storedDob;
          n.dob =
            l != null
              ? o("WAWebCustomerProfileBirthday").formatBirthdayToIso(
                  o("WATimeUtils").castToUnixTime(l),
                  u,
                )
              : null;
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.field === "leadStage" &&
          "value" in r
        ) {
          var c = r.value;
          n.lead_stage = c != null ? String(c) : null;
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.field === "orderPreferences" &&
          "value" in r
        ) {
          var d = r.value;
          n.order_preferences = o(
            "WAWebCustomerOrderPreferences",
          ).toOrderPreferences(d);
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.field === "lastOrder" &&
          "value" in r
        ) {
          var m = r.value;
          n.last_order_date = m != null ? m : null;
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.field === "acquisitionSource" &&
          "value" in r
        ) {
          var p = r.value,
            _ = o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).fromProfileAcquisitionSourceId(p);
          p == null
            ? (n.acquisition_source = null)
            : _ != null
              ? (n.acquisition_source = _)
              : o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[CustomerManager] customer profile upsert: acquisition source ",
                        " has no server enum member; leaving the stored value unchanged",
                      ])),
                    p,
                  )
                  .sendLogs("customer_manager_acquisition_source_unmapped");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            r,
        );
      }
      return n;
    }
    function L(e) {
      return e == null || e === "" ? null : e;
    }
    function E(e, t) {
      var n = { lid: k(e) };
      (t.leadStage != null && (n.lead_stage = String(t.leadStage)),
        t.name != null && t.name !== "" && (n.name = t.name),
        t.email != null && t.email !== "" && (n.email = t.email),
        t.address != null && t.address !== "" && (n.address = t.address));
      var r = t.birthday;
      (r != null &&
        ((n.dob = o("WAWebCustomerProfileBirthday").formatBirthdayToIso(
          r.value,
          r.storedDob,
        )),
        r.ifMatch != null && (n.if_match = r.ifMatch)),
        t.lastOrder != null && (n.last_order_date = t.lastOrder));
      var a = o(
        "WAWebCustomerManagerCustomerProfileDecoders",
      ).fromProfileAcquisitionSourceId(t.acquisitionSource);
      return (a != null && (n.acquisition_source = a), n);
    }
    function k(e) {
      if (!e.endsWith(o("WAJids").LID_DOMAIN))
        throw r("err")(
          '[CustomerManager] customer profile upsert: chatJid must be a LID-based JID, got "' +
            e +
            '"',
        );
      return e.slice(0, -o("WAJids").LID_DOMAIN.length);
    }
    ((l.upsertCustomerProfileToServer = d),
      (l.upsertCustomerProfilesToServer = p),
      (l.upsertCustomerProfileFieldToServer = y),
      (l.assertPersistableLastOrderDate = b));
  },
  98,
);
