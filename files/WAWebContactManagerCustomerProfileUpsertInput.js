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
      var r = { lid: m(t) };
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
          var p = a.value;
          r.lead_stage = p != null ? String(p) : null;
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.field === "orderPreferences" &&
          "value" in a
        ) {
          var _ = a.value;
          r.order_preferences = o(
            "WAWebCustomerOrderPreferences",
          ).toOrderPreferences(_);
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.field === "confirmedAppointmentDate" &&
          "value" in a
        ) {
          var f = a.value;
          r.confirmed_appointment_date = c(f);
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.field === "lastOrderDescription" &&
          "value" in a
        ) {
          var g = a.value;
          r.last_order = d(g) ? null : g;
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.field === "acquisitionSource" &&
          "value" in a
        ) {
          var h = a.value,
            y = o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).fromProfileAcquisitionSourceId(h);
          h == null || y != null
            ? (r.acquisition_source = y)
            : o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[CustomerManager] customer profile upsert: acquisition source ",
                      " has no server enum member; leaving the stored value unchanged",
                    ])),
                  h,
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
      var n = { lid: m(e) };
      t.leadStage != null && (n.lead_stage = String(t.leadStage));
      for (var r of ["name", "email", "address"]) {
        var a = t[r];
        a != null && a !== "" && (n[r] = a);
      }
      var i = t.birthday;
      i != null &&
        ((n.dob = o("WAWebCustomerProfileBirthday").formatBirthdayToIso(
          i.value,
          i.storedDob,
        )),
        i.ifMatch != null && (n.if_match = i.ifMatch));
      var l = t.lastOrderDescription;
      l != null && !d(l) && (n.last_order = l);
      var s = o(
        "WAWebCustomerManagerCustomerProfileDecoders",
      ).fromProfileAcquisitionSourceId(t.acquisitionSource);
      return (s != null && (n.acquisition_source = s), n);
    }
    function c(e) {
      return e == null || e === "" ? null : e;
    }
    function d(e) {
      return e == null || e.trim() === "";
    }
    function m(e) {
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
