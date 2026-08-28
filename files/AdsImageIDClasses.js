__d(
  "AdsImageIDClasses",
  ["invariant", "Cache", "ShutterstockImageUtils", "hashString", "nullthrows"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "SECRET_" + Math.random(),
      u = (function () {
        function t(t, n) {
          (t === e || s(0, 2367), (this.$1 = n));
        }
        ((t.fromAcountAndHash = function (n, o) {
          var t = "BUSINESS_" + o;
          if (g.has(t)) return r("nullthrows")(g.get(t));
          var a = "ACCOUNT_" + n + ":" + o;
          return (
            g.has(a) || g.set(a, new c(e, a, n, o)),
            r("nullthrows")(g.get(a))
          );
        }),
          (t.fromBusinessImageIDAndHash = function (n, r) {
            var t = "BUSINESS_" + r,
              o = g.get(t);
            return (
              o instanceof d || ((o = new d(e, t, n, r)), g.set(t, o)),
              o
            );
          }),
          (t.fromShutterstockID = function (n) {
            var t = "SHUTTERSTOCK_" + n,
              r = g.get(t);
            return (r instanceof m || ((r = new m(e, t, n)), g.set(t, r)), r);
          }),
          (t.fromShutterstockURL = function (n) {
            return (
              o("ShutterstockImageUtils").isStockImageURL(n) || s(0, 2368),
              t.fromShutterstockID(o("ShutterstockImageUtils").urlToID(n))
            );
          }),
          (t.fromExternalURL = function (n, r) {
            var t = "EXT_" + n,
              o = g.get(t);
            return (
              o instanceof p || ((o = new p(e, t, n, r)), g.set(t, o)),
              o
            );
          }),
          (t.fromExternalURLWithHash = function (n, r) {
            var t = "EXT_" + n,
              o = g.get(t);
            if (!(o instanceof _)) {
              var a = o instanceof p ? o.getFacebookID() : void 0;
              ((o = new _(e, t, n, r, a != null ? a : void 0)), g.set(t, o));
            }
            return o;
          }),
          (t.fromStickerURL = function (n, r, o, a) {
            var t = "STICKER_" + n,
              i = g.get(t);
            return (
              i instanceof f || ((i = new f(e, t, n, r, o, a)), g.set(t, i)),
              i
            );
          }),
          (t.fromSignature = function (t) {
            return (g.has(t) || s(0, 2369), r("nullthrows")(g.get(t)));
          }));
        var n = t.prototype;
        return (
          (n.getSignature = function () {
            return this.$1;
          }),
          (n.equals = function (n) {
            return this === n
              ? !0
              : n instanceof t
                ? this.getSignature() === n.getSignature()
                : !1;
          }),
          (n.hashCode = function () {
            var e = this.$2;
            if (e == null) {
              var t = r("hashString")(this.getSignature());
              return ((this.$2 = t), t);
            }
            return e;
          }),
          t
        );
      })(),
      c = (function (e) {
        function t(t, n, r, o) {
          var a;
          return (
            (a = e.call(this, t, n) || this),
            (a.$AdsAccountImageID$p_1 = r),
            (a.$AdsAccountImageID$p_2 = o),
            a
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getAccountID = function () {
            return this.$AdsAccountImageID$p_1;
          }),
          (n.getHash = function () {
            return this.$AdsAccountImageID$p_2;
          }),
          t
        );
      })(u),
      d = (function (e) {
        function t(t, n, r, o) {
          var a;
          return (
            (a = e.call(this, t, n) || this),
            (a.$AdsBusinessImageID$p_2 = r),
            (a.$AdsBusinessImageID$p_1 = o),
            a
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getBusinessImageID = function () {
            return this.$AdsBusinessImageID$p_2;
          }),
          (n.getHash = function () {
            return this.$AdsBusinessImageID$p_1;
          }),
          t
        );
      })(u),
      m = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this, t, n) || this),
            (o.$AdsShutterstockImageID$p_1 = r),
            o
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getShutterstockImageID = function () {
            return this.$AdsShutterstockImageID$p_1;
          }),
          t
        );
      })(u),
      p = (function (e) {
        function t(t, n, r, o) {
          var a;
          return (
            (a = e.call(this, t, n) || this),
            (a.$AdsExternalImageID$p_1 = o),
            (a.$AdsExternalImageID$p_2 = r),
            (a.$AdsExternalImageID$p_3 = n.split("?")[0]),
            a
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getUrl = function () {
            return this.$AdsExternalImageID$p_2;
          }),
          (n.getFacebookID = function () {
            return this.$AdsExternalImageID$p_1;
          }),
          (n.getComparableSignature = function () {
            return this.$AdsExternalImageID$p_3;
          }),
          t
        );
      })(u),
      _ = (function (e) {
        function t(t, n, r, o, a) {
          var i;
          return (
            (i = e.call(this, t, n, r, a) || this),
            (i.$AdsExternalImageWithHashID$p_1 = o),
            i
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getHash = function () {
            return this.$AdsExternalImageWithHashID$p_1;
          }),
          t
        );
      })(p),
      f = (function (e) {
        function t(t, n, r, o, a, i) {
          var l;
          return (
            (l = e.call(this, t, n) || this),
            (l.$AdsStickerImageID$p_2 = r),
            (l.$AdsStickerImageID$p_3 = n.split("?")[0]),
            (l.$AdsStickerImageID$p_1 = o),
            (l.$AdsStickerImageID$p_4 = a),
            (l.$AdsStickerImageID$p_5 = i),
            l
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getUrl = function () {
            return this.$AdsStickerImageID$p_2;
          }),
          (n.getComparableSignature = function () {
            return this.$AdsStickerImageID$p_3;
          }),
          (n.getHash = function () {
            return this.$AdsStickerImageID$p_1;
          }),
          (n.getWidth = function () {
            return this.$AdsStickerImageID$p_4;
          }),
          (n.getHeight = function () {
            return this.$AdsStickerImageID$p_5;
          }),
          t
        );
      })(u),
      g = new (r("Cache"))();
    ((l.AdsImageID = u),
      (l.AdsAccountImageID = c),
      (l.AdsBusinessImageID = d),
      (l.AdsShutterstockImageID = m),
      (l.AdsExternalImageID = p),
      (l.AdsExternalImageWithHashID = _),
      (l.AdsStickerImageID = f));
  },
  98,
);
