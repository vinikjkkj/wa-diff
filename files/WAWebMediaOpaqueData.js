__d(
  "WAWebMediaOpaqueData",
  [
    "Promise",
    "WABase64",
    "WALogger",
    "WANullthrows",
    "WAShiftTimer",
    "WAWebFileUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = [],
      f = (function () {
        function t() {
          ((this.$1 = 1),
            (this.$2 = !1),
            (this.released = !1),
            (this.$3 = void 0),
            (this.blob = void 0),
            (this.$4 = void 0),
            (this.$5 = void 0),
            (this.$6 = void 0));
        }
        var a = t.prototype;
        return (
          (a.retain = function () {
            if (this.released)
              throw (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "OpaqueData:retain called on released OpaqueData",
                    ])),
                ),
                r("err")("OpaqueData:retain called on released OpaqueData")
              );
            this.$1++;
          }),
          (a.autorelease = function () {
            this.released
              ? o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "OpaqueData:autorelease called on released object",
                    ])),
                )
              : this.$1 === 0
                ? o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "OpaqueData:autorelease too many release calls",
                      ])),
                  )
                : this.$1 === 1
                  ? ((this.$1 = 0),
                    this.$2 ||
                      ((this.$2 = !0), _.push(this), g.onOrBefore(1e3)))
                  : this.$1--;
          }),
          (a.autoreleaseWhenPromiseCompletes = function (t) {
            var e = this,
              n = function () {
                e.autorelease();
              };
            t.then(n, n);
          }),
          (a.throwIfReleased = function (t) {
            if (this.released)
              throw (
                o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " called on released OpaqueData",
                    ])),
                  t,
                ),
                r("err")(t + " called on released OpaqueData")
              );
            this.$1 === 0 &&
              o("WALogger").ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " called on unretained OpaqueData",
                  ])),
                t,
              );
          }),
          (a.url = function () {
            return (
              this.throwIfReleased("OpaqueData:url"),
              this.$4 != null && this.$4 !== ""
                ? this.$4
                : this.$3 != null && this.$3 !== ""
                  ? ((this.$4 = "data:image/jpeg;base64," + this.$3), this.$4)
                  : ((this.$4 = window.URL.createObjectURL(
                      r("WANullthrows")(this.blob, "unexpected empty blob"),
                    )),
                    this.$4)
            );
          }),
          (a.getBlob = function () {
            return this.blob;
          }),
          (a.getBase64 = function () {
            return this.$3;
          }),
          (a.validate = function () {
            return this.$6 === !0
              ? (p || (p = n("Promise"))).resolve(!1)
              : this.blob
                ? o("WAWebFileUtils").validateBlob(this.blob)
                : (p || (p = n("Promise"))).resolve(!0);
          }),
          (a.size = function () {
            return (
              this.throwIfReleased("OpaqueData:size"),
              this.blob
                ? this.blob.size
                : this.$3 != null
                  ? o("WABase64").sizeWhenB64Decoded(this.$3)
                  : (o("WALogger")
                      .ERROR(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "OpaqueData:size returned 0",
                          ])),
                      )
                      .sendLogs("opaque-data-size-0"),
                    0)
            );
          }),
          (a.formData = function (t) {
            return (
              this.throwIfReleased("OpaqueData:formData"),
              this.forceToBlob()
            );
          }),
          (a.type = function () {
            return (
              this.throwIfReleased("OpaqueData:type"),
              this.$5 != null && this.$5 !== "" ? this.$5 : "undefined"
            );
          }),
          (a.forceToBlob = function () {
            this.throwIfReleased("OpaqueData:forceToBlob");
            var e = this.blob;
            if (e) return e;
            var t = this.$3;
            if (t != null && t !== "") {
              ((this.$3 = void 0), (this.$4 = void 0));
              var n = this.$5;
              return (this.blob = new Blob(
                [o("WABase64").decodeB64(t)],
                n != null && n !== "" ? { type: n } : void 0,
              ));
            }
            throw r("err")("OpaqueData:forceToBlob no b64 or blob");
          }),
          (a.$7 = function () {
            this.$5 = void 0;
            var e = this.blob;
            e
              ? ((this.blob = void 0),
                this.$4 != null &&
                  this.$4 !== "" &&
                  (window.URL.revokeObjectURL(this.$4), (this.$4 = void 0)))
              : ((this.$3 = void 0), (this.$4 = void 0));
          }),
          (a.isBlobEqual = function (t) {
            return t ? this.blob === t.blob : !this.blob;
          }),
          (t.releaseAutoreleasePool = function () {
            var e = _;
            _ = [];
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              ((n.$2 = !1),
                n.$1 === 0 && !n.released && ((n.released = !0), n.$7()));
            }
          }),
          t
        );
      })();
    ((f.createFromBase64Jpeg = function (e) {
      return new (p || (p = n("Promise")))(function (t) {
        var n = new f();
        return ((n.$3 = e), (n.$5 = "image/jpeg"), t(n));
      });
    }),
      (f.createFromData = function (e, t) {
        return new (p || (p = n("Promise")))(function (n) {
          var r = new f();
          return (
            (r.blob =
              e instanceof Blob && e.type === t
                ? e
                : new Blob([e], { type: t })),
            (r.$5 = t),
            n(r)
          );
        });
      }));
    var g = new (o("WAShiftTimer").ShiftTimer)(function () {
      return f.releaseAutoreleasePool();
    });
    l.default = f;
  },
  98,
);
