__d(
  "WormEar",
  [
    "FBLogger",
    "WABinary",
    "WACryptoSha256HmacBuilder",
    "WormEncoding",
    "WormIDbGetMinMaxKeySelector",
    "err",
    "memoizeStringOnly",
    "tweetnacl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "_encryptedContent",
      s = 32,
      u = 2,
      c = 3600,
      d = 24 * c,
      m = d * 30 * 6,
      p = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "WormEAREncryptionError"),
            (n.message = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      _ = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this, t) || this),
            (o.name = "WormEARDecryptionError"),
            (o.message = t),
            (o.store = n),
            (o.maybeHashedPk = r),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function f(e, t, n) {
      if (typeof e == "number") return e;
      var r = t.encode(e),
        a = new (o("WACryptoSha256HmacBuilder").Sha256HMacBuilder)(
          new Uint8Array(n),
        )
          .update(r)
          .finish();
      return a.buffer;
    }
    var g = (function () {
      function t(e, n, a, i, l) {
        var s = this,
          u;
        if (
          ((this.$5 = 0),
          (this.$7 = r("memoizeStringOnly")(function (e) {
            var t = s.$2[e].nonEncryptedFields;
            if (t != null) return new Set(t);
          })),
          this.constructor === t)
        )
          throw r("err")(
            "WormEar is abstract: construct WormEarAsync or WormEarSync; db: " +
              n,
          );
        ((this.$2 = e),
          (this.$1 = n),
          (this.$3 = o("WormEncoding").createEncoding()),
          (this.$6 = i),
          (this.$4 = new Map()),
          (this.masterKey = a),
          (this.encKeyTtl =
            (u = l == null ? void 0 : l.encKeyTtl) != null ? u : m));
      }
      var n = t.prototype;
      return (
        (n.isSecureStore = function (t) {
          return this.$2[t].secure !== !1;
        }),
        (n.resetKeyChain = function () {
          ((this.$4 = new Map()), (this.$5 = 0));
        }),
        (n.setKeyVersion = function (t, n) {
          ((this.$5 = Math.max(this.$5, t)), this.$4.set(t, n));
        }),
        (n.$8 = function (t) {
          if (this.$5 === 0)
            throw new p("EAR.Encryption. EAR is not initialised ");
          var e = this.$4.get(this.$5);
          if (e == null)
            throw new p("EAR.Encryption.Key does not exist for version");
          var n = o("tweetnacl").randomBytes(
              o("tweetnacl").secretbox.nonceLength,
            ),
            r = o("tweetnacl").secretbox(t, n, new Uint8Array(e));
          return o("WABinary")
            .Binary.build(this.$6, this.$5, n, r)
            .readBuffer();
        }),
        (n.$9 = function (t, n, r) {
          var e = t.slice(0, u),
            a = new DataView(e).getUint8(1),
            i = this.$4.get(a);
          if (i == null)
            throw new _(
              "EAR.Decryption.Key does not exist for version: " +
                a +
                "; db: " +
                this.$1 +
                "; store: " +
                n,
              n,
              r,
            );
          var l = t.slice(u, u + o("tweetnacl").secretbox.nonceLength),
            s = t.slice(u + o("tweetnacl").secretbox.nonceLength),
            c = o("tweetnacl").secretbox.open(
              new Uint8Array(s),
              new Uint8Array(l),
              new Uint8Array(i),
            );
          if (c == null)
            throw new _(
              "EAR.Decryption. Unable to decrypt; db: " +
                this.$1 +
                "; store: " +
                n,
              n,
              r,
            );
          return c;
        }),
        (n.encryptEntity = function (n, r) {
          var t,
            o = this.$2[r],
            a = new Set();
          o.autoIncrement !== !0 && a.add(o.primaryKey);
          var i = o.indexes;
          if (i != null)
            for (var l of Object.keys(i)) {
              var s = i[l];
              for (var u of s.fields) a.add(u);
            }
          var c = {};
          for (var d of a) {
            var m;
            c[d] =
              (m = this.$7(r)) != null && m.has(d)
                ? n[d]
                : f(n[d], this.$3, this.masterKey);
          }
          return (
            o.autoIncrement === !0 &&
              n[o.primaryKey] != null &&
              (c[o.primaryKey] = n[o.primaryKey]),
            babelHelpers.extends(
              {},
              c,
              ((t = {}), (t[e] = this.$8(this.$3.encode(n))), t),
            )
          );
        }),
        (n.$10 = function (n, o, a) {
          if (
            ((n == null || typeof n != "object") &&
              r("FBLogger")("worm").mustfix(
                "WORM.EAR: dbRecord is null or not object: %s, store: %s, reason %s",
                String(n),
                o,
                a,
              ),
            n != null && n[e] != null)
          ) {
            var t = n[this.$2[o].primaryKey];
            return { encrypted: !0, encryptedEntity: n, pk: t };
          } else return { encrypted: !1, entity: n };
        }),
        (n.maybeDecrypt = function (n, r, o, a, i) {
          if (n == null || this.isSecureStore(r) === !1) return n;
          var t = this.$10(n, r, o);
          if (!t.encrypted) {
            if (i != null && i.shouldNotFailIfEntityIsNotEncrypted) return n;
            var l = n[this.$2[r].primaryKey];
            throw new _(
              "EAR.Decryption. Attempt to decrypt malformed encrypted entity in  db: " +
                this.$1 +
                ", store: " +
                r +
                ". Missing '" +
                e +
                "' property. Pk is " +
                (l == null ? "empty" : "not empty"),
              r,
              l,
            );
          }
          a == null || a.addPoint("decrypt_start");
          var s = this.decryptEntity(t.encryptedEntity, r, t.pk);
          a == null || a.addPoint("decrypt_end");
          var u = this.$2[r];
          if (u.autoIncrement === !0) {
            var c;
            return babelHelpers.extends(
              {},
              s,
              ((c = {}), (c[u.primaryKey] = t.pk), c),
            );
          }
          return s;
        }),
        (n.maybeEncrypt = function (t, n, r) {
          if (this.isSecureStore(n) === !1) return t;
          r == null || r.addPoint("encrypt_start");
          var e = this.encryptEntity(t, n);
          return (r == null || r.addPoint("encrypt_end"), e);
        }),
        (n.decryptEntity = function (n, r, o) {
          return this.$3.decode(this.$9(n[e], r, o));
        }),
        (n.hashPk = function (t, n, r) {
          var e;
          return (e = this.$7(t)) != null && e.has(n)
            ? r
            : f(r, this.$3, this.masterKey);
        }),
        (n.hashSelector = function (t, n, r) {
          for (
            var e,
              a,
              i = [].concat(t),
              l =
                (e =
                  (a = this.$2[n].indexes) == null || (a = a[r]) == null
                    ? void 0
                    : a.fields) != null
                  ? e
                  : [],
              s = 0;
            s < i.length;
            s++
          ) {
            var u,
              c = i[s],
              d = l[s];
            c !== o("WormIDbGetMinMaxKeySelector").getMaxSelector() &&
              c !== -1 / 0 &&
              (((u = this.$7(n)) != null && u.has(d)) ||
                (i[s] = f(c, this.$3, this.masterKey)));
          }
          return i;
        }),
        t
      );
    })();
    ((l.ENCRYPTED_COLUMN_NAME = e),
      (l.HKDF_SEED_LENGTH_IN_BYTES = s),
      (l.ADDITIONAL_DATA_LENGTH_IN_BYTES = u),
      (l.ENC_KEY_TTL = m),
      (l.EncryptionError = p),
      (l.DecryptionError = _),
      (l.WormEar = g));
  },
  98,
);
