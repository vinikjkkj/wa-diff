__d(
  "OzWidevineDrmProvider",
  ["ConstUriUtils", "FBLogger", "getErrorSafe", "oz-player/drm/OzDrmUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, a, i) {
        if (
          ((this.$2 = []),
          (this.$4 = !0),
          (this.$5 = !1),
          i != null &&
            i !== "" &&
            (this.$1 = o("oz-player/drm/OzDrmUtils").base64ToUint8Array(i)),
          t != null && a != null)
        ) {
          var l,
            s =
              (l = o("ConstUriUtils").getUri(t)) == null
                ? void 0
                : l.addQueryParam("access_token", a);
          if (s == null)
            throw r("FBLogger")("comet_video_player").mustfixThrow(
              "Invalid Graph API license uri for video: %s",
              e,
            );
          ((this.$3 = s.toString()), (this.$5 = !0), (this.$4 = !1));
        } else {
          var u = n[0];
          if (u == null) {
            var c;
            u = "/video/drm/getlicense";
            var d =
              (c = o("ConstUriUtils").getUri(u)) == null
                ? void 0
                : c.addQueryParam("video_id", e);
            if (d == null)
              throw r("FBLogger")("comet_video_player").mustfixThrow(
                "Invalid server license uri for video: %s",
                e,
              );
            this.$3 = d.toString();
          } else this.$3 = u;
        }
      }
      var t = e.prototype;
      return (
        (t.getKeySystem = function () {
          return "com.widevine.alpha";
        }),
        (t.getSchemeId = function () {
          return "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";
        }),
        (t.getInitDatas = function () {
          return this.$2;
        }),
        (t.setInitDatas = function (t) {
          this.$2 = t;
        }),
        (t.getRequireDistinctiveIdentifier = function () {
          return "optional";
        }),
        (t.getRequirePersistentState = function () {
          return "optional";
        }),
        (t.getInitDataTypes = function () {}),
        (t.getDrmSessionTypes = function () {
          return ["temporary"];
        }),
        (t.getAudioRobustness = function () {
          return "";
        }),
        (t.getVideoRobustness = function () {
          return "";
        }),
        (t.getServerCertificate = function () {
          return this.$1;
        }),
        (t.getLicenseRequestInfo = function (t) {
          var e = {
            url: this.$3,
            method: "POST",
            body: "",
            headers: {},
            credentials: void 0,
          };
          this.$4 && (e.credentials = "include");
          var n = o("oz-player/drm/OzDrmUtils").arrayBufferToBase64(t);
          if (this.$5) {
            var r = { request: n };
            ((e.body = JSON.stringify(r)),
              (e.headers["Content-Type"] = "application/json"));
          } else
            ((e.body = n), (e.headers["Content-Type"] = "application/text"));
          return e;
        }),
        (t.parseLicenseResponse = function (t) {
          var e = String.fromCharCode.apply(null, t),
            n;
          try {
            n = JSON.parse(e);
          } catch (e) {
            n = void 0;
          }
          var a;
          if (n !== void 0 && n.data !== void 0 && n.data.length === 1) {
            var i = n.data[0];
            i.error != null || (a = i.license);
          } else a = e;
          if (a != null && a !== "")
            try {
              return o("oz-player/drm/OzDrmUtils").base64ToUint8Array(a);
            } catch (e) {
              var l = r("getErrorSafe")(e);
              throw l.name === "InvalidCharacterError"
                ? new Error("Endpoint returned error: " + a)
                : l;
            }
          return null;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
