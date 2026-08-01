__d(
  "VideoPlayerFairplayLicenseHandler",
  [
    "EventEmitter",
    "FBLogger",
    "JSResourceForInteraction",
    "Promise",
    "SubscriptionsHandler",
    "cr:1335238",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")("XHRRequest").__setRef(
        "VideoPlayerFairplayLicenseHandler",
      ),
      u = window.WebKitMediaKeys,
      c = (function (t) {
        function o(e, o, a, i) {
          var l;
          return (
            (l = t.call(this) || this),
            (l.$VideoPlayerFairplayLicenseHandler$p_5 = new (r(
              "SubscriptionsHandler",
            ))()),
            (l.$VideoPlayerFairplayLicenseHandler$p_1 = o),
            (l.$VideoPlayerFairplayLicenseHandler$p_2 = e),
            (l.$VideoPlayerFairplayLicenseHandler$p_3 = a),
            (l.$VideoPlayerFairplayLicenseHandler$p_4 = i),
            l.$VideoPlayerFairplayLicenseHandler$p_5.addSubscriptions(
              n("cr:1335238").listen(o, "webkitneedkey", function (e) {
                try {
                  l.$VideoPlayerFairplayLicenseHandler$p_6(e.initData);
                } catch (e) {
                  l.$VideoPlayerFairplayLicenseHandler$p_7();
                }
              }),
            ),
            l
          );
        }
        babelHelpers.inheritsLoose(o, t);
        var a = o.prototype;
        return (
          (a.destroy = function () {
            (this.$VideoPlayerFairplayLicenseHandler$p_5.release(),
              (this.$VideoPlayerFairplayLicenseHandler$p_1 = null),
              (this.$VideoPlayerFairplayLicenseHandler$p_4 = null));
          }),
          (a.$VideoPlayerFairplayLicenseHandler$p_6 = function (t) {
            var e = this,
              o = this.$VideoPlayerFairplayLicenseHandler$p_1;
            if (o != null) {
              var a = new Uint16Array(t.buffer),
                i = String.fromCharCode.apply(null, a).substring(8),
                l = null;
              if (o.webkitKeys == null) {
                if (
                  u != null &&
                  u.isTypeSupported("com.apple.fps.1_0", "video/mp4")
                )
                  l = "com.apple.fps.1_0";
                else
                  throw r("FBLogger")("FairplayLicenseHandler").mustfixThrow(
                    "Key System not supported",
                  );
                o.webkitSetMediaKeys(new u(l));
              }
              var s = o.webkitKeys;
              if (s == null)
                throw r("FBLogger")("FairplayLicenseHandler").mustfixThrow(
                  "Could not create MediaKeys",
                );
              var c = this.concatInitDataIdAndCertificate(t, i),
                d = s.createSession("video/mp4", c);
              if (!d)
                throw r("FBLogger")("FairplayLicenseHandler").mustfixThrow(
                  "Could not create key session",
                );
              ((d.contentId = i),
                this.$VideoPlayerFairplayLicenseHandler$p_5.addSubscriptions(
                  n("cr:1335238").listen(d, "webkitkeymessage", function (t) {
                    e.$VideoPlayerFairplayLicenseHandler$p_8(
                      t.target,
                      t.message,
                    );
                  }),
                  n("cr:1335238").listen(d, "webkitkeyerror", function (t) {
                    e.emit("error", { error: "Fairplay webkitkeyerror" });
                  }),
                ));
            }
          }),
          (a.concatInitDataIdAndCertificate = function (t, n) {
            for (
              var e = new Uint16Array(new ArrayBuffer(n.length * 2)),
                r = 0,
                o = n.length;
              r < o;
              r++
            )
              e[r] = n.charCodeAt(r);
            for (
              var a = window.atob(this.$VideoPlayerFairplayLicenseHandler$p_2),
                i = new Uint8Array(new ArrayBuffer(a.length)),
                l = 0;
              l < a.length;
              l++
            )
              i[l] = a.charCodeAt(l);
            var s = 0,
              u = new ArrayBuffer(
                t.byteLength + 4 + e.byteLength + 4 + i.byteLength,
              ),
              c = new DataView(u),
              d = new Uint8Array(u, s, t.byteLength);
            (d.set(t),
              (s += t.byteLength),
              c.setUint32(s, e.byteLength, !0),
              (s += 4));
            var m = new Uint16Array(u, s, e.byteLength / 2);
            (m.set(e),
              (s += m.byteLength),
              c.setUint32(s, i.byteLength, !0),
              (s += 4));
            var p = new Uint8Array(u, s, i.byteLength);
            return (p.set(i), new Uint8Array(u, 0, u.byteLength));
          }),
          (a.$VideoPlayerFairplayLicenseHandler$p_8 = function (r, o) {
            var t = this,
              a = window.btoa(
                String.fromCharCode.apply(null, new Uint8Array(o)),
              );
            if (r.contentId == null || r.contentId === "") {
              this.$VideoPlayerFairplayLicenseHandler$p_9();
              return;
            }
            var i = this.$VideoPlayerFairplayLicenseHandler$p_4[r.contentId];
            if (i == null) {
              this.$VideoPlayerFairplayLicenseHandler$p_10();
              return;
            }
            (e || (e = n("Promise")))
              .resolve()
              .then(function () {
                return s.load();
              })
              .then(function (e) {
                new e(i)
                  .setMethod("POST")
                  .setRawData(a)
                  .setResponseType("text")
                  .setResponseHandler(function (e) {
                    t.$VideoPlayerFairplayLicenseHandler$p_11(e, r);
                  })
                  .setRequestHeader(
                    "Content-type",
                    "application/x-www-form-urlencoded",
                  )
                  .setErrorHandler(function () {
                    t.$VideoPlayerFairplayLicenseHandler$p_12();
                  })
                  .send();
              })
              .catch(function () {
                t.$VideoPlayerFairplayLicenseHandler$p_12();
              });
          }),
          (a.$VideoPlayerFairplayLicenseHandler$p_11 = function (t, n) {
            var e = !1;
            try {
              for (
                var o = window.atob(t),
                  a = new Uint8Array(new ArrayBuffer(o.length * 2)),
                  i = 0,
                  l = o.length;
                i < l;
                i++
              ) {
                var s = o.charCodeAt(i);
                ((s < 0 || s > 255) && (e = !0), (a[i] = s));
              }
              n.update(a);
            } catch (n) {
              var u = n,
                c =
                  typeof t != "string"
                    ? "response was " + typeof t
                    : t === ""
                      ? "response was empty string"
                      : e
                        ? "key character overflow"
                        : "key potentially malformed",
                d = r("FBLogger")("VideoPlayerFairplayLicenseHandler");
              (u instanceof Error && (d = d.catching(u)),
                d.warn("Fairplay License update failed: %s - %s", String(u), c),
                this.emit("error", {
                  error: "Fairplay License update failed",
                }));
            }
          }),
          (a.$VideoPlayerFairplayLicenseHandler$p_7 = function () {
            this.emit("error", { error: "Fairplay Key creation failed" });
          }),
          (a.$VideoPlayerFairplayLicenseHandler$p_10 = function () {
            this.emit("error", { error: "Fairplay Content ID not found" });
          }),
          (a.$VideoPlayerFairplayLicenseHandler$p_9 = function () {
            this.emit("error", { error: "Fairplay Content ID empty" });
          }),
          (a.$VideoPlayerFairplayLicenseHandler$p_12 = function () {
            this.emit("error", { error: "Fairplay License fetch failed" });
          }),
          (o.newIfSupported = function (t, n, r, a) {
            return u != null ? new o(t, n, r, a) : null;
          }),
          o
        );
      })(r("EventEmitter"));
    l.default = c;
  },
  98,
);
