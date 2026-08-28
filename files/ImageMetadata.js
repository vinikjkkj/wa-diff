__d(
  "ImageMetadata",
  [
    "ImageExif",
    "Promise",
    "StringEncoding",
    "asyncToGeneratorRuntime",
    "emptyFunction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function a(e) {
          ((this.$4 = ""),
            (this.$6 = e),
            (this.$7 = new Uint8Array(e)),
            this.$8());
        }
        var i = a.prototype;
        return (
          (i.$8 = function () {
            for (var e = 0; e < this.$7.length; ) {
              if (((e = this.$9(e)), e === -1)) return;
              var t = this.$7[e + 1],
                n = u[t];
              if (!n) return;
              var r = n.length;
              if (
                (r === void 0 && (r = this.$7[e + 2] * 256 + this.$7[e + 3]),
                this.$10(e, r, n),
                n.name === "SOS")
              )
                return;
              e += 2 + r;
            }
          }),
          (i.$10 = function (t, n, r) {
            switch (r.name) {
              case "APP1":
                this.$11(t + 4, c)
                  ? (this.$1 == null && ((this.$1 = t), (this.$2 = n)),
                    this.$12(t + 4 + c.length, n - 2 - c.length))
                  : this.$11(t + 4, d)
                    ? ((this.$1 = t),
                      (this.$2 = n),
                      this.$13(t + 4 + d.length, n - 2 - d.length))
                    : this.$11(t + 4, m) &&
                      this.$14(t + 4 + m.length, n - 2 - m.length);
                break;
              case "SOF0":
              case "SOF1":
              case "SOF2":
              case "SOF3":
              case "SOF5":
              case "SOF6":
              case "SOF7":
              case "JPG":
              case "SOF9":
              case "SOF10":
              case "SOF11":
              case "SOF13":
              case "SOF14":
              case "SOF15":
                this.$15(t + 4, n - 2);
                break;
            }
          }),
          (i.$15 = function (t, n) {
            var e = this.$7[t + 3] * 256 + this.$7[t + 4],
              r = this.$7[t + 1] * 256 + this.$7[t + 2];
            e > 0 && r > 0 && (this.$5 = { x: e, y: r });
          }),
          (i.$12 = function (t, n) {
            var e = console.log;
            try {
              console.log = r("emptyFunction");
              var a = o("ImageExif").readFromArrayBuffer(this.$6) || {};
            } finally {
              console.log = e;
            }
            var i = {};
            for (var l in a) {
              var s = a[l];
              (typeof s == "string" && (s = s.trim()), (i[l.trim()] = s));
            }
            this.$3 = i;
          }),
          (i.$13 = function (t, n) {
            var e = new (o("StringEncoding").Decoder)(null, "truncate");
            try {
              var r = e.decode(this.$6.slice(t, t + n));
              this.$4 = r;
            } catch (e) {
              return;
            }
          }),
          (i.$14 = function (t) {}),
          (i.$11 = function (t, n) {
            var e = this;
            return n.split("").every(function (n) {
              return e.$7[t++] === n.charCodeAt(0);
            });
          }),
          (i.$9 = function (t) {
            for (var e = t; e + 1 < this.$7.length; ++e)
              if (
                this.$7[e] === 255 &&
                this.$7[e + 1] !== 0 &&
                this.$7[e + 1] !== 255
              )
                return e;
            return -1;
          }),
          (i.hasAPP1 = function () {
            return !!this.$1;
          }),
          (i.hasExif = function () {
            return !!this.$3;
          }),
          (i.hasXMP = function () {
            return !!this.$4;
          }),
          (i.hasSize = function () {
            return !!this.$5;
          }),
          (i.getAPP1Location = function () {
            return this.hasAPP1() ? this.$1 : null;
          }),
          (i.getAPP1Length = function () {
            return this.hasAPP1() ? this.$2 : null;
          }),
          (i.getExif = function () {
            if (!this.$3) {
              var e = new Error("Image has no Exif data");
              throw (e.stack, e);
            }
            return this.$3;
          }),
          (i.getXMPString = function () {
            return this.$4;
          }),
          (i.getSize = function () {
            if (!this.$5) {
              var e = new Error("Could not find size data?!");
              throw (e.stack, e);
            }
            return this.$5;
          }),
          (i.getBufferLength = function () {
            if (!this.$6) {
              var e = new Error("Do not find buffer data!");
              throw (e.stack, e);
            }
            return this.$6.byteLength;
          }),
          (a.genMetadataFromBlob = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return new a(yield a.$16(e));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$16 = function (o) {
            return new (e || (e = n("Promise")))(function (e, n) {
              var r = new t.FileReader();
              ((r.onabort = n),
                (r.onerror = n),
                (r.onload = e),
                r.readAsArrayBuffer(o));
            });
          }),
          a
        );
      })(),
      u = [];
    ((u[216] = { name: "SOI", length: 0 }),
      (u[192] = { name: "SOF0" }),
      (u[193] = { name: "SOF1" }),
      (u[194] = { name: "SOF2" }),
      (u[195] = { name: "SOF3" }),
      (u[197] = { name: "SOF5" }),
      (u[198] = { name: "SOF6" }),
      (u[199] = { name: "SOF7" }),
      (u[200] = { name: "JPG" }),
      (u[201] = { name: "SOF9" }),
      (u[202] = { name: "SOF10" }),
      (u[203] = { name: "SOF11" }),
      (u[205] = { name: "SOF13" }),
      (u[206] = { name: "SOF14" }),
      (u[207] = { name: "SOF15" }),
      (u[196] = { name: "DHT" }),
      (u[219] = { name: "DQT" }),
      (u[221] = { name: "DRI", length: 2 }),
      (u[218] = { name: "SOS" }),
      (u[208] = { name: "RST0", length: 0 }),
      (u[209] = { name: "RST1", length: 0 }),
      (u[210] = { name: "RST2", length: 0 }),
      (u[211] = { name: "RST3", length: 0 }),
      (u[212] = { name: "RST4", length: 0 }),
      (u[213] = { name: "RST5", length: 0 }),
      (u[214] = { name: "RST6", length: 0 }),
      (u[215] = { name: "RST7", length: 0 }),
      (u[224] = { name: "APP0" }),
      (u[225] = { name: "APP1" }),
      (u[226] = { name: "APP2" }),
      (u[227] = { name: "APP3" }),
      (u[228] = { name: "APP4" }),
      (u[229] = { name: "APP5" }),
      (u[230] = { name: "APP6" }),
      (u[231] = { name: "APP7" }),
      (u[232] = { name: "APP8" }),
      (u[233] = { name: "APP9" }),
      (u[234] = { name: "APP10" }),
      (u[235] = { name: "APP11" }),
      (u[236] = { name: "APP12" }),
      (u[237] = { name: "APP13" }),
      (u[238] = { name: "APP14" }),
      (u[239] = { name: "APP15" }),
      (u[254] = { name: "COM" }),
      (u[217] = { name: "EOI", length: 0 }));
    var c = "Exif\0\0",
      d = "http://ns.adobe.com/xap/1.0/\0",
      m = "http://ns.adobe.com/xmp/extension/\0";
    l.default = s;
  },
  98,
);
