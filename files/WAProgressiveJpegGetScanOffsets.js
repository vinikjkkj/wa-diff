__d(
  "WAProgressiveJpegGetScanOffsets",
  ["WAProgressiveJpegMarkers", "WATagsLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = o("WATagsLogger").TAGS(["media", "progressiveJpegUtils"]);
    function p(t) {
      if (
        (m.DEV(
          e || (e = babelHelpers.taggedTemplateLiteralLoose(["starting"])),
        ),
        !_(t))
      )
        return (
          m.DEV(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Not a JPEG image",
              ])),
          ),
          []
        );
      var n = [],
        r = 2,
        a = "READ_MARKER_FIRST_BYTE_OR_ENTROPY_DATA",
        i = null,
        l = 0,
        p = !1,
        y = !1,
        C = !1;
      function b() {
        ((C = !1),
          m.DEV(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Scan found at offset ",
                "",
              ])),
            r - 1,
          ),
          n.push(r - 1));
      }
      for (; r < t.byteLength; ) {
        if (((i = t[r]), p))
          return (
            m.ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Ending marker found before end of image",
                ])),
            ),
            []
          );
        switch (a) {
          case "READ_MARKER_FIRST_BYTE_OR_ENTROPY_DATA":
            i === o("WAProgressiveJpegMarkers").MARKER_PREFIX &&
              (a = "READ_MARKER_SECOND_BYTE");
            break;
          case "READ_MARKER_SECOND_BYTE":
            if (i === o("WAProgressiveJpegMarkers").MARKER_PREFIX)
              a = "READ_MARKER_SECOND_BYTE";
            else if (i === o("WAProgressiveJpegMarkers").MARKER_ESCAPE_BYTE)
              a = "READ_MARKER_FIRST_BYTE_OR_ENTROPY_DATA";
            else if (i === o("WAProgressiveJpegMarkers").MARKERS.EOI)
              ((p = !0), C && b());
            else {
              if (!y && g(i))
                return (
                  m.LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Non-progressive JPEG marker found",
                      ])),
                  ),
                  []
                );
              f(i)
                ? ((y = !0), (a = "READ_MARKER_FIRST_BYTE_OR_ENTROPY_DATA"))
                : (C && b(),
                  i === o("WAProgressiveJpegMarkers").MARKERS.SOS && (C = !0),
                  h(i)
                    ? (a = "READ_SIZE_FIRST_BYTE")
                    : (a = "READ_MARKER_FIRST_BYTE_OR_ENTROPY_DATA"));
            }
            break;
          case "READ_SIZE_FIRST_BYTE":
            a = "READ_SIZE_SECOND_BYTE";
            break;
          case "READ_SIZE_SECOND_BYTE":
            ((r += l * 256),
              (r += i),
              (r -= 2),
              (a = "READ_MARKER_FIRST_BYTE_OR_ENTROPY_DATA"));
            break;
        }
        ((r += 1), (l = i));
      }
      return n;
    }
    function _(e) {
      return !(
        e.byteLength <= 2 ||
        e[0] !== o("WAProgressiveJpegMarkers").MARKER_PREFIX ||
        (e[1] !== o("WAProgressiveJpegMarkers").MARKERS.SOF2 &&
          e[1] !== o("WAProgressiveJpegMarkers").MARKERS.SOI)
      );
    }
    function f(e) {
      return (
        e === o("WAProgressiveJpegMarkers").MARKERS.SOF2 ||
        e === o("WAProgressiveJpegMarkers").MARKERS.SOF6 ||
        e === o("WAProgressiveJpegMarkers").MARKERS.SOF10 ||
        e === o("WAProgressiveJpegMarkers").MARKERS.SOF14
      );
    }
    function g(e) {
      return (
        e === o("WAProgressiveJpegMarkers").MARKERS.SOF0 ||
        e === o("WAProgressiveJpegMarkers").MARKERS.SOF1 ||
        e === o("WAProgressiveJpegMarkers").MARKERS.SOF3 ||
        e === o("WAProgressiveJpegMarkers").MARKERS.SOF5 ||
        e === o("WAProgressiveJpegMarkers").MARKERS.SOF7 ||
        e === o("WAProgressiveJpegMarkers").MARKERS.JPG ||
        e === o("WAProgressiveJpegMarkers").MARKERS.SOF9 ||
        e === o("WAProgressiveJpegMarkers").MARKERS.SOF11 ||
        e === o("WAProgressiveJpegMarkers").MARKERS.SOF13 ||
        e === o("WAProgressiveJpegMarkers").MARKERS.SOF15
      );
    }
    function h(e) {
      return e === o("WAProgressiveJpegMarkers").MARKERS.TEM ||
        (e >= o("WAProgressiveJpegMarkers").MARKERS.RST0 &&
          e <= o("WAProgressiveJpegMarkers").MARKERS.RST7)
        ? !1
        : e !== o("WAProgressiveJpegMarkers").MARKERS.EOI &&
            e !== o("WAProgressiveJpegMarkers").MARKERS.SOI;
    }
    l.getProgressiveJpegScanOffsets = p;
  },
  98,
);
