__d(
  "WAWebHatchSpaceHostSession",
  [
    "WAWebHatchJsonReaders",
    "WAWebHatchNoiseBytes",
    "WAWebHatchSpaceDocument",
    "WAWebHatchSpaceTunnel",
    "WAXWhatsAppWebTPSpaceHostControllerRouteBuilder",
    "WhatsAppWebTPUrlBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 16;
    function s() {
      var e = r("WhatsAppWebTPUrlBuilder").url;
      return e == null || e === ""
        ? null
        : "" +
            e +
            r("WAXWhatsAppWebTPSpaceHostControllerRouteBuilder").buildURL({});
    }
    function u() {
      return o("WAWebHatchNoiseBytes").bytesToHex(
        self.crypto.getRandomValues(new Uint8Array(e)),
      );
    }
    var c = (function () {
      function e(e, t, n) {
        ((this.$1 = !1),
          (this.$2 = !1),
          (this.$5 = []),
          (this.$7 = null),
          (this.$3 = n),
          (this.$4 = e),
          (this.$6 = t));
      }
      e.open = function (n) {
        var t = new MessageChannel(),
          r = new e(t.port1, n.secret, n.onReady);
        return (
          (r.$7 = new (o("WAWebHatchSpaceTunnel").WAWebHatchSpaceTunnel)({
            emit: function (t) {
              return r.$8(t);
            },
            exchange: n.exchange,
            slug: n.slug,
          })),
          (t.port1.onmessage = function (e) {
            return r.$9(e.data);
          }),
          r.$8({
            html: o("WAWebHatchSpaceDocument").buildHatchSpaceDocument(
              n.bundleHtml,
            ),
            type: "bundle",
          }),
          n.shell.postMessage({ type: "hatch-space-host:connect" }, "*", [
            t.port2,
          ]),
          r
        );
      };
      var t = e.prototype;
      return (
        (t.close = function () {
          var e;
          ((this.$1 = !0),
            (this.$5 = []),
            (e = this.$7) == null || e.close(),
            (this.$4.onmessage = null),
            this.$4.close());
        }),
        (t.isReady = function () {
          return this.$2;
        }),
        (t.$9 = function (t) {
          if (!this.$1) {
            if (this.$2) {
              var e;
              (e = this.$7) == null || e.handleMessage(t);
              return;
            }
            if (
              !(
                o("WAWebHatchJsonReaders").readString(t, "type") !== "ready" ||
                o("WAWebHatchJsonReaders").readString(t, "k") !== this.$6
              )
            ) {
              this.$2 = !0;
              var n = this.$5;
              this.$5 = [];
              for (var r of n) this.$4.postMessage(r);
              this.$3();
            }
          }
        }),
        (t.$8 = function (t) {
          this.$1 || (this.$2 ? this.$4.postMessage(t) : this.$5.push(t));
        }),
        e
      );
    })();
    ((l.getHatchSpaceShellUrl = s),
      (l.mintHatchSpaceSecret = u),
      (l.WAWebHatchSpaceHostSession = c));
  },
  98,
);
