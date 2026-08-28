__d(
  "AdsMetadataManageX2PProductsUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "USD";
    function l(e) {
      return babelHelpers.extends({}, e, {
        editedProducts: null,
        isAllSelected: !1,
        selectedProductIDs: null,
      });
    }
    function s(e, t) {
      if (e === t) return !0;
      if (e.size !== t.size) return !1;
      for (var n of e) if (!t.has(n)) return !1;
      return !0;
    }
    function u(e) {
      var t = [],
        n = 0;
      for (var r of e) {
        var o,
          a = (o = r.retailerID) == null ? void 0 : o.trim(),
          i = r.currency.trim().toUpperCase(),
          l =
            r.price != null &&
            (!Number.isFinite(r.price) || r.price < 0 || !/^[A-Z]{3}$/.test(i));
        if (a == null || a === "" || l) {
          n++;
          continue;
        }
        var s = { id: a, title: r.title };
        (r.description != null && (s.description = r.description),
          r.price != null && (s.price = r.price + " " + i),
          r.editedImageID != null && (s.uploaded_image_id = r.editedImageID),
          t.push({ base_fields_data: s, extended_fields_data: [] }));
      }
      return { invalidEditCount: n, items: t };
    }
    function c(t) {
      var n,
        r,
        o,
        a,
        i,
        l,
        s,
        u = t == null ? void 0 : t.id;
      if (u == null) return null;
      var c = t == null || (n = t.price) == null ? void 0 : n.amount,
        d = c != null ? parseFloat(c) : null;
      return {
        currency:
          (r = t == null || (o = t.price) == null ? void 0 : o.currency) != null
            ? r
            : e,
        description: (a = t == null ? void 0 : t.description) != null ? a : "",
        displayPrice:
          d != null && Number.isFinite(d)
            ? ((i = t == null || (l = t.price) == null ? void 0 : l.currency) !=
              null
                ? i
                : e) +
              " " +
              d
            : "",
        id: u,
        imageUrl: t == null ? void 0 : t.imageUrl,
        price: d != null && Number.isFinite(d) ? d : null,
        retailerID: t == null ? void 0 : t.retailerID,
        title: (s = t == null ? void 0 : t.title) != null ? s : "",
      };
    }
    ((i.clearManageX2PProductsPendingState = l),
      (i.areProductSelectionsEqual = s),
      (i.buildX2PProductMetadataUpdatePayload = u),
      (i.mapProductNodeToRow = c));
  },
  66,
);
