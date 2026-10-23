__d(
  "WAWebContactManagerCustomerProfileUpsertInput",
  [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebCustomerManagerCustomerProfileDecoders",
    "WAWebCustomerOrderPreferences",
    "WAWebCustomerProfileBirthday",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      var r = { lid: d(t) };
      e: {
        var a = n;
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.field === "email" &&
          "value" in a
        ) {
          var i = a.value;
          r.email = c(i);
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.field === "address" &&
          "value" in a
        ) {
          var l = a.value;
          r.address = c(l);
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.field === "birthday" &&
          "value" in a &&
          "storedDob" in a
        ) {
          var s = a.value,
            u = a.storedDob;
          r.dob =
            s != null
              ? o("WAWebCustomerProfileBirthday").formatBirthdayToIso(
                  o("WATimeUtils").castToUnixTime(s),
                  u,
                )
              : null;
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.field === "leadStage" &&
          "value" in a
        ) {
          var m = a.value;
          r.lead_stage = m != null ? String(m) : null;
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.field === "orderPreferences" &&
          "value" in a
        ) {
          var p = a.value;
          r.order_preferences = o(
            "WAWebCustomerOrderPreferences",
          ).toOrderPreferences(p);
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.field === "lastOrder" &&
          "value" in a
        ) {
          var _ = a.value;
          r.last_order_date = _ != null ? _ : null;
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.field === "acquisitionSource" &&
          "value" in a
        ) {
          var f = a.value,
            g = o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).fromProfileAcquisitionSourceId(f);
          f == null || g != null
            ? (r.acquisition_source = g)
            : o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[CustomerManager] customer profile upsert: acquisition source ",
                      " has no server enum member; leaving the stored value unchanged",
                    ])),
                  f,
                )
                .sendLogs("customer_manager_acquisition_source_unmapped");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            a,
        );
      }
      return r;
    }
    function u(e, t) {
      var n = { lid: d(e) };
      t.leadStage != null && (n.lead_stage = String(t.leadStage));
      for (var r of ["name", "email", "address"]) {
        var a = t[r];
        a != null && a !== "" && (n[r] = a);
      }
      var i = t.birthday;
      (i != null &&
        ((n.dob = o("WAWebCustomerProfileBirthday").formatBirthdayToIso(
          i.value,
          i.storedDob,
        )),
        i.ifMatch != null && (n.if_match = i.ifMatch)),
        t.lastOrder != null && (n.last_order_date = t.lastOrder));
      var l = o(
        "WAWebCustomerManagerCustomerProfileDecoders",
      ).fromProfileAcquisitionSourceId(t.acquisitionSource);
      return (l != null && (n.acquisition_source = l), n);
    }
    function c(e) {
      return e == null || e === "" ? null : e;
    }
    function d(e) {
      var t = o("WAJids").validateLidUserJid(e);
      if (t == null)
        throw r("err")(
          '[CustomerManager] customer profile upsert: chatJid must be a LID-based JID, got "' +
            e +
            '"',
        );
      return t;
    }
    ((l.buildFieldUpdateInput = s), (l.buildUpsertInput = u));
  },
  98,
);
