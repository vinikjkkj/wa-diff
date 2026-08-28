__d(
  "SphericalImageUtils",
  [
    "ImageMetadata",
    "Promise",
    "XAsyncRequest",
    "XSphericalPhotoSphereMetadataAsyncController",
    "err",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 2048,
      u = (function () {
        function o() {}
        return (
          (o.genArrayBufferFromBlob = function (a) {
            return new (e || (e = n("Promise")))(function (e, n) {
              if (t.FileReader) {
                var o = new t.FileReader();
                ((o.onabort = n),
                  (o.onerror = n),
                  (o.onload = function (t) {
                    e(t.target.result);
                  }),
                  o.readAsArrayBuffer(a));
              } else {
                var i = r("err")("global.FileReader doesn't exit");
                n(i);
              }
            });
          }),
          (o.shouldCheckInServer = function (t) {
            if ((!t.hasExif() && !t.hasXMP()) || !t.hasSize()) return !1;
            var e = t.getXMPString();
            if (this.getMayContainSphericalMetadata(e)) return !0;
            var n = t.getSize(),
              r = n.x,
              o = n.y;
            if (Math.max(r, o) < s || (r / o < 2 && o / r < 2)) return !1;
            var a = t.hasExif() ? t.getExif() : {};
            return !(e === "" && (!a.Make || !a.Model));
          }),
          (o.genPhotosphereMetadata = function (o) {
            var t = this;
            return new (e || (e = n("Promise")))(function (e, n) {
              r("promiseDone")(
                t.genArrayBufferFromBlob(o),
                function (o) {
                  try {
                    var a = new (r("ImageMetadata"))(o);
                    t.shouldCheckInServer(a)
                      ? r("promiseDone")(
                          t.genPhotosphereMetadataFromServer(
                            a.hasSize() ? a.getSize() : { x: 0, y: 0 },
                            a.getXMPString(),
                            a.hasExif() ? a.getExif() : {},
                          ),
                          function (t) {
                            var n = t.payload;
                            e({ photoSphereMetadata: n, imageMetadata: a });
                          },
                          n,
                        )
                      : e({});
                  } catch (e) {
                    ((e.__manual = !0), n(e));
                  }
                },
                n,
              );
            });
          }),
          (o.genPhotosphereMetadataFromServer = function (o, a, i) {
            var t = this;
            return new (e || (e = n("Promise")))(function (e, n) {
              new (r("XAsyncRequest"))(
                r("XSphericalPhotoSphereMetadataAsyncController")
                  .getURIBuilder()
                  .getURI(),
              )
                .setMethod("POST")
                .setData({
                  exif_string: t.getExifString(i),
                  height: o.y,
                  width: o.x,
                  xmp: a,
                })
                .setHandler(e)
                .setErrorHandler(n)
                .send();
            });
          }),
          (o.getExifString = function (t) {
            return JSON.stringify(t, function (e, t) {
              return e === "FocalLength" && t.numerator && t.denominator
                ? t.numerator + "/" + t.denominator
                : t;
            });
          }),
          (o.getMayContainSphericalMetadata = function (t) {
            return t !== "" && t.indexOf("GPano:") > -1;
          }),
          o
        );
      })();
    l.default = u;
  },
  98,
);
