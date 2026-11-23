__d(
  "buildBusinessSetupApplyInput",
  ["MAIBABusinessSetupDirtyFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e != null && e !== "" ? e : null;
    }
    function s(t, n) {
      var r,
        a = [],
        i = e(n.businessID);
      if (
        (!n.businessAlreadyCreated &&
          i == null &&
          e(t.portfolioName) != null &&
          a.push({
            create_bp: {
              name: t.portfolioName,
              contact_first_name: e(t.contactFirstName),
              contact_last_name: e(t.contactLastName),
              contact_email: e(t.contactEmail),
            },
          }),
        !n.adAccountAlreadyCreated)
      )
        if (t.adAccountMode === "existing") {
          var l = e(t.existingAccountID);
          l != null && a.push({ claim_ad_account: { ad_account_id: l } });
        } else {
          var s = e(t.accountName),
            u = e(t.timezoneID),
            c = e(t.currency);
          s != null &&
            u != null &&
            c != null &&
            a.push({
              create_ad_account: { name: s, timezone_id: u, currency: c },
            });
        }
      var d = n.pendingPage;
      n.pageAlreadyCreated !== !0 &&
        d != null &&
        o("MAIBABusinessSetupDirtyFields").isBusinessSetupPendingPageComplete(
          d,
        ) &&
        a.push({
          create_page: { category_ids: [].concat(d.categoryIDs), name: d.name },
        });
      var m = new Set((r = n.pageAlreadyClaimedIDs) != null ? r : []);
      for (var p of t.pageIDs) {
        var _ = e(p);
        _ != null &&
          !m.has(_) &&
          (m.add(_), a.push({ claim_page: { page_id: _ } }));
      }
      var f = new Set();
      for (var g of (h = n.igClaims) != null ? h : []) {
        var h,
          y = e(g.igAssetId),
          C = e(g.igOidcToken);
        y != null &&
          C != null &&
          !f.has(y) &&
          (f.add(y),
          a.push({ claim_ig: { ig_asset_id: y, ig_oidc_token: C } }));
      }
      var b = {
        ops: a,
        entry_point: "AI_WORKSPACE",
        conversation_id: e(n.conversationId),
      };
      return i != null ? babelHelpers.extends({}, b, { business_id: i }) : b;
    }
    l.default = s;
  },
  98,
);
