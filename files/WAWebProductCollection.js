__d(
  "WAWebProductCollection",
  [
    "Promise",
    "WAWebBaseCollection",
    "WAWebBizGatingUtils",
    "WAWebProductModel",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        NO_REVIEW: "NO_REVIEW",
        PENDING: "PENDING",
        REJECTED: "REJECTED",
        APPROVED: "APPROVED",
        OUTDATED: "OUTDATED",
      };
    function u(e, t) {
      return e.displayPriority - t.displayPriority;
    }
    var c = new Set([
        s.OUTDATED,
        s.NO_REVIEW,
        s.APPROVED,
        s.REJECTED,
        s.PENDING,
      ]),
      d = new Set([s.APPROVED]);
    function m(e) {
      var t = new Set();
      return e.filter(function (e) {
        if (e.variantInfo != null) {
          var n,
            o =
              (n = e.variantInfo) == null || (n = n.availability) == null
                ? void 0
                : n.listing.some(function (e) {
                    return (
                      e &&
                      !r("isStringNullOrEmpty")(e.product_id) &&
                      t.has(e.product_id)
                    );
                  });
          if (o === !0) return !1;
        }
        return (t.add(e.id.toString()), !0);
      });
    }
    var p = (function (t) {
      function r() {
        return t.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(r, t);
      var a = r.prototype;
      return (
        (a.getProductModels = function (n) {
          n === void 0 && (n = !1);
          var e = t.prototype.toArray.call(this);
          if (t.prototype.length < 1) return e;
          var r = t.prototype.head.call(this),
            a = r == null ? void 0 : r.catalogWid;
          if (!a) return e;
          var i = n ? c : d,
            l = t.prototype.filter.call(this, function (e) {
              return i.has(e.reviewStatus) && !e.old;
            }),
            s = m(l);
          return n
            ? s
            : s.filter(function (e) {
                return (
                  !e.isHidden &&
                  (!o("WAWebBizGatingUtils").isCountryOfOriginEnabled() ||
                    !e.isSanctioned)
                );
              });
        }),
        (a.add = function (n, r) {
          var e = r
            ? t.prototype.add.call(this, n, r)
            : t.prototype.add.call(this, n);
          return (this.sort(), e);
        }),
        (a.evictImagesFromCache = function (t) {
          var e = this.get(t);
          e && e.evictImagesFromCache();
        }),
        (a.findImpl = function (r) {
          var t = this.get(r);
          return t
            ? (e || (e = n("Promise"))).resolve(t)
            : (e || (e = n("Promise"))).resolve({ id: r });
        }),
        r
      );
    })(o("WAWebBaseCollection").BaseCollection);
    ((p.model = o("WAWebProductModel").Product),
      (p.comparator = u),
      (l.PRODUCT_REVIEW_STATUS = s),
      (l.ProductCollection = p));
  },
  98,
);
