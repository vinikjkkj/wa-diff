__d(
  "XAdsStandaloneCertificationController",
  ["XController"],
  function (t, n, r, o, a, i) {
    a.exports = n("XController").create("/certification/nondiscrimination/", {
      is_email: { type: "Bool", defaultValue: !1 },
      source: { type: "String" },
      continue_url: { type: "String" },
      business_id: { type: "String" },
      is_accept_policy_button_native: { type: "Bool", defaultValue: !1 },
    });
  },
  null,
);
