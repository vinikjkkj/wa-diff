__d(
  "WAWebContactManagerCustomerProfileUpsertMutation",
  [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebContactManagerCustomerProfileDecoders",
    "WAWebContactManagerCustomerProfileUpsertMutation.graphql",
    "WAWebCustomerProfileBirthday",
    "WAWebFetchAdAccountToken",
    "WAWebLeadStage",
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
          yield f(e, C(e, t));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield f(e, h(e, t));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (n.type !== "success")
            throw r("err")(
              "[ContactManager] customer profile upsert: no access token (" +
                n.type +
                ")",
            );
          (yield r("WAWebNetworkStatus").waitIfOffline(),
            yield o("WAWebRelayClient").commitMutation(
              c,
              { input: [t] },
              { accessToken: n.token, environmentType: "facebook" },
            ),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[ContactManager] customer profile upsert: synced ",
                  "",
                ])),
              e,
            ));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      var n = { lid: b(e) };
      e: {
        var r = t;
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.field === "email" &&
          "value" in r
        ) {
          var a = r.value;
          n.email = y(a);
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.field === "address" &&
          "value" in r
        ) {
          var i = r.value;
          n.address = y(i);
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
          r.field === "lastOrder" &&
          "value" in r
        ) {
          var c = r.value;
          n.last_order_date = c != null ? c : null;
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.field === "acquisitionSource" &&
          "value" in r
        ) {
          var d = r.value,
            m = o(
              "WAWebContactManagerCustomerProfileDecoders",
            ).fromProfileAcquisitionSourceId(d);
          d == null
            ? (n.acquisition_source = null)
            : m != null
              ? (n.acquisition_source = m)
              : o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[ContactManager] customer profile upsert: acquisition source ",
                        " has no server enum member; leaving the stored value unchanged",
                      ])),
                    d,
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
    function y(e) {
      return e == null || e === "" ? null : e;
    }
    function C(e, t) {
      var n = { lid: b(e) };
      (t.leadStage != null && (n.lead_stage = v(t.leadStage)),
        t.name != null && t.name !== "" && (n.name = t.name),
        t.email != null && t.email !== "" && (n.email = t.email),
        t.address != null && t.address !== "" && (n.address = t.address),
        t.lastOrder != null && (n.last_order_date = t.lastOrder));
      var r = o(
        "WAWebContactManagerCustomerProfileDecoders",
      ).fromProfileAcquisitionSourceId(t.acquisitionSource);
      return (r != null && (n.acquisition_source = r), n);
    }
    function b(e) {
      if (!e.endsWith(o("WAJids").LID_DOMAIN))
        throw r("err")(
          '[ContactManager] customer profile upsert: chatJid must be a LID-based JID, got "' +
            e +
            '"',
        );
      return e.slice(0, -o("WAJids").LID_DOMAIN.length);
    }
    function v(e) {
      return e === o("WAWebLeadStage").LeadStage.INTAKE
        ? "INTAKE"
        : e === o("WAWebLeadStage").LeadStage.QUALIFIED
          ? "QUALIFIED"
          : e === o("WAWebLeadStage").LeadStage.CONVERTED
            ? "CONVERTED"
            : e === o("WAWebLeadStage").LeadStage.LOST
              ? "LOST"
              : e === o("WAWebLeadStage").LeadStage.NOT_QUALIFIED
                ? "NOT_QUALIFIED"
                : "NONE";
    }
    ((l.upsertCustomerProfileToServer = d),
      (l.upsertCustomerProfileFieldToServer = p));
  },
  98,
);
