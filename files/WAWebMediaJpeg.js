__d(
  "WAWebMediaJpeg",
  ["WABinary", "WAProgressiveJpegMarkers", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = new (o("WABinary").Binary)();
      return (
        t.writeBytes(255, 216, 255, 224, 0, 16, 74, 70, 73, 70, 0),
        t.writeUint16(e.version),
        t.writeUint8(e.densityUnits),
        t.writeUint16(e.xDensity),
        t.writeUint16(e.yDensity),
        t.writeBytes(0, 0),
        t.readByteArrayView()
      );
    }
    function s(t) {
      var n = new (o("WABinary").Binary)(t),
        a = new (o("WABinary").Binary)(t),
        i = new (o("WABinary").Binary)(),
        l = 2,
        s = 2,
        u = !1,
        c = !1,
        d = !1,
        m = !1,
        p,
        _ = { version: 257, densityUnits: 0, xDensity: 1, yDensity: 1 };
      if (
        !(
          n.readUint8() === o("WAProgressiveJpegMarkers").MARKER_PREFIX &&
          n.readUint8() === o("WAProgressiveJpegMarkers").MARKERS.SOI
        )
      )
        throw r("err")("SOI marker not at the start of the file.");
      a.advance(l);
      for (var f = void 0; f != null || n.size(); ) {
        if (f === void 0) {
          var g = n.readUint8();
          if (g !== o("WAProgressiveJpegMarkers").MARKER_PREFIX)
            throw r("err")("0x" + g.toString(16) + " is not a marker prefix.");
          f = n.readUint8();
        }
        switch (f) {
          case o("WAProgressiveJpegMarkers").MARKERS.APP0:
            if (c)
              ((p = n.readUint16()),
                a.advance(p + l),
                n.advance(n.size() - a.size()));
            else {
              if (((p = n.readUint16()), n.readString(5) !== "JFIF\0"))
                throw r("err")("APP0 marker missing 'JFIF' magic bytes.");
              ((m = !0),
                (_.version = n.readUint16()),
                (_.densityUnits = n.readUint8()),
                (_.xDensity = n.readUint16()),
                (_.yDensity = n.readUint16()),
                a.advance(p + l),
                n.advance(n.size() - a.size()),
                (c = !0));
            }
            break;
          case o("WAProgressiveJpegMarkers").MARKERS.SOS: {
            if (!d && !m) throw r("err")("Missing magic bytes marker.");
            n.advance(n.readUint16() - s);
            for (var h = void 0, y = void 0, C = n.readUint8(); n.size(); ) {
              if (
                ((y = n.readUint8()),
                (h =
                  C === o("WAProgressiveJpegMarkers").MARKER_PREFIX &&
                  !o("WAProgressiveJpegMarkers").SOS_STREAM.includes(y)),
                h)
              ) {
                f = y;
                break;
              }
              C = y;
            }
            i.writeByteArray(a.readByteArrayView(a.size() - n.size() - l));
            continue;
          }
          case o("WAProgressiveJpegMarkers").MARKERS.APP1:
            if (((p = n.readUint16()), !d && n.readString(6) !== "Exif\0\0"))
              throw r("err")("APP1 marker missing 'EXIF' magic bytes.");
            ((d = !0), a.advance(p + l), n.advance(n.size() - a.size()));
            break;
          case o("WAProgressiveJpegMarkers").MARKERS.APP13:
          case o("WAProgressiveJpegMarkers").MARKERS.COM:
            if (!d && !m) throw r("err")("Missing magic bytes marker.");
            ((p = n.readUint16()),
              a.advance(p + l),
              n.advance(n.size() - a.size()));
            break;
          case o("WAProgressiveJpegMarkers").MARKERS.EOI:
            if (!d && !m) throw r("err")("Missing magic bytes marker.");
            ((u = !0), i.writeByteArray(a.readByteArrayView(l)));
            break;
          case o("WAProgressiveJpegMarkers").MARKERS.SOF0:
          case o("WAProgressiveJpegMarkers").MARKERS.SOF1:
          case o("WAProgressiveJpegMarkers").MARKERS.SOF2:
          case o("WAProgressiveJpegMarkers").MARKERS.SOF3:
          case o("WAProgressiveJpegMarkers").MARKERS.SOF5:
          case o("WAProgressiveJpegMarkers").MARKERS.SOF6:
          case o("WAProgressiveJpegMarkers").MARKERS.SOF7:
          case o("WAProgressiveJpegMarkers").MARKERS.SOF9:
          case o("WAProgressiveJpegMarkers").MARKERS.SOF10:
          case o("WAProgressiveJpegMarkers").MARKERS.SOF11:
          case o("WAProgressiveJpegMarkers").MARKERS.SOF13:
          case o("WAProgressiveJpegMarkers").MARKERS.SOF14:
          case o("WAProgressiveJpegMarkers").MARKERS.SOF15:
          case o("WAProgressiveJpegMarkers").MARKERS.DQT:
          case o("WAProgressiveJpegMarkers").MARKERS.DHT:
          case o("WAProgressiveJpegMarkers").MARKERS.DRI:
            if (!d && !m) throw r("err")("Missing magic bytes marker.");
            ((p = n.readUint16()),
              i.writeByteArray(a.readByteArrayView(l + p)),
              n.advance(n.size() - a.size()));
            break;
          case o("WAProgressiveJpegMarkers").MARKERS.APP2:
          case o("WAProgressiveJpegMarkers").MARKERS.APP3:
          case o("WAProgressiveJpegMarkers").MARKERS.APP4:
          case o("WAProgressiveJpegMarkers").MARKERS.APP5:
          case o("WAProgressiveJpegMarkers").MARKERS.APP6:
          case o("WAProgressiveJpegMarkers").MARKERS.APP7:
          case o("WAProgressiveJpegMarkers").MARKERS.APP8:
          case o("WAProgressiveJpegMarkers").MARKERS.APP9:
          case o("WAProgressiveJpegMarkers").MARKERS.APP10:
          case o("WAProgressiveJpegMarkers").MARKERS.APP11:
          case o("WAProgressiveJpegMarkers").MARKERS.APP12:
          case o("WAProgressiveJpegMarkers").MARKERS.APP14:
          case o("WAProgressiveJpegMarkers").MARKERS.APP15:
            throw r("err")(
              "Received unexpected APP marker 0x" + f.toString(16),
            );
          default:
            throw r("err")("Did not understand marker: 0x" + f.toString(16));
        }
        if (((f = void 0), u)) break;
      }
      if (!u) throw r("err")("No EOI tag found.");
      var b = e(_);
      return new Blob([b, i.readByteArrayView()], { type: "image/jpeg" });
    }
    l.cleanJPEG = s;
  },
  98,
);
