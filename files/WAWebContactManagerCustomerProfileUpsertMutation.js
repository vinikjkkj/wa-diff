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
          var n = t.birthday,
            r = n == null ? void 0 : n.ifMatch;
          if (n != null && r != null) {
            yield p(e, t, babelHelpers.extends({}, n, { ifMatch: r }));
            return;
          }
          yield y(e, S(e, t));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n, r) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i, l;
            if (
              (a === void 0 && (a = 1),
              !(yield y(e, S(e, babelHelpers.extends({}, t, { birthday: n })))))
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
              yield p(
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
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield y(e, b(e, t));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      if (e === 0)
        throw r("err")(
          "[CustomerManager] customer profile last order date cannot be Unix epoch zero",
        );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          h(t.last_order_date);
          var n = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (n.type !== "success")
            throw r("err")(
              "[CustomerManager] customer profile upsert: no access token (" +
                n.type +
                ")",
            );
          yield r("WAWebNetworkStatus").waitIfOffline();
          try {
            var a,
              i,
              l,
              s = yield o("WAWebRelayClient").commitMutation(
                c,
                { input: [t] },
                { accessToken: n.token, environmentType: "facebook" },
              ),
              d = s == null ? void 0 : s.xfb_wa_upsert_customer_profiles;
            if (
              ((a =
                d == null || (i = d.conflicts) == null ? void 0 : i.length) !=
              null
                ? a
                : 0) > 0
            ) {
              if (t.if_match == null)
                throw r("err")(
                  "[CustomerManager] customer profile upsert: conflict without version precondition",
                );
              return !1;
            }
            if (
              (d == null || (l = d.profiles) == null ? void 0 : l.length) !== 1
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
              e
            );
          }
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[CustomerManager] customer profile upsert: synced ",
                  "",
                ])),
              e,
            ),
            !0
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      var n = { lid: R(e) };
      e: {
        var r = t;
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.field === "email" &&
          "value" in r
        ) {
          var a = r.value;
          n.email = v(a);
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.field === "address" &&
          "value" in r
        ) {
          var i = r.value;
          n.address = v(i);
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
          r.field === "lastOrder" &&
          "value" in r
        ) {
          var d = r.value;
          n.last_order_date = d != null ? d : null;
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.field === "acquisitionSource" &&
          "value" in r
        ) {
          var m = r.value,
            p = o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).fromProfileAcquisitionSourceId(m);
          m == null
            ? (n.acquisition_source = null)
            : p != null
              ? (n.acquisition_source = p)
              : o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[CustomerManager] customer profile upsert: acquisition source ",
                        " has no server enum member; leaving the stored value unchanged",
                      ])),
                    m,
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
    function v(e) {
      return e == null || e === "" ? null : e;
    }
    function S(e, t) {
      var n = { lid: R(e) };
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
    function R(e) {
      if (!e.endsWith(o("WAJids").LID_DOMAIN))
        throw r("err")(
          '[CustomerManager] customer profile upsert: chatJid must be a LID-based JID, got "' +
            e +
            '"',
        );
      return e.slice(0, -o("WAJids").LID_DOMAIN.length);
    }
    ((l.upsertCustomerProfileToServer = d),
      (l.upsertCustomerProfileFieldToServer = f),
      (l.assertPersistableLastOrderDate = h));
  },
  98,
);
