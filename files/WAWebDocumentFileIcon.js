__d(
  "WAWebDocumentFileIcon",
  [
    "DocumentIconWithContent",
    "WAWebIcPresentationIcon.react",
    "WAWebIcSpreadsheetIcon.react",
    "WAWebMsOfficeDocIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ext", "fontSize", "mimeType"],
      s,
      u = s || (s = o("react")),
      c = {
        presentationIcon: { color: "x157dx7a", $$css: !0 },
        textIcon: { color: "x1kqjlw6", $$css: !0 },
        spreadsheetIcon: { color: "x1sgjuae", $$css: !0 },
        noExtensionIcon: { color: "x1164gpu", $$css: !0 },
        docIcon: { color: "x10a5rjv", $$css: !0 },
        pdfIcon: { color: "xm3ytx4", $$css: !0 },
        pptIcon: { color: "xwflugy", $$css: !0 },
        xlsIcon: { color: "x1n3q9i3", $$css: !0 },
        generalIcon: { color: "x1164gpu", $$css: !0 },
      },
      d = {
        doc: { fontSize: 12, content: "W", iconXStyle: c.docIcon },
        pdf: { fontSize: 8, content: "PDF", iconXStyle: c.pdfIcon },
        ppt: { fontSize: 12, content: "P", iconXStyle: c.pptIcon },
        xls: { fontSize: 12, content: "X", iconXStyle: c.xlsIcon },
      },
      m = {
        "application/msword": d.doc,
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          d.doc,
        "text/rtf": d.doc,
        "application/pdf": d.pdf,
        "application/vnd.ms-excel": d.xls,
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
          d.xls,
        "application/vnd.ms-powerpoint": d.ppt,
        "application/vnd.openxmlformats-officedocument.presentationml.presentation":
          d.ppt,
      },
      p = ["application/x-iwork-keynote-sffkey"],
      _ = ["text/plain", "text/rtf"],
      f = ["text/csv"];
    function g(t) {
      var n = o("react-compiler-runtime").c(34),
        a,
        i,
        l,
        s;
      if (
        (n[0] !== t
          ? ((a = t.ext),
            (i = t.fontSize),
            (l = t.mimeType),
            (s = babelHelpers.objectWithoutPropertiesLoose(t, e)),
            (n[0] = t),
            (n[1] = a),
            (n[2] = i),
            (n[3] = l),
            (n[4] = s))
          : ((a = n[1]), (i = n[2]), (l = n[3]), (s = n[4])),
        p.includes(l))
      ) {
        var d;
        n[5] !== s.xstyle
          ? ((d = [c.presentationIcon, s.xstyle]),
            (n[5] = s.xstyle),
            (n[6] = d))
          : (d = n[6]);
        var g;
        return (
          n[7] !== s || n[8] !== d
            ? ((g = u.jsx(
                o("WAWebIcPresentationIcon.react").IcPresentationIcon,
                babelHelpers.extends({}, s, { xstyle: d }),
              )),
              (n[7] = s),
              (n[8] = d),
              (n[9] = g))
            : (g = n[9]),
          g
        );
      }
      if (_.includes(l)) {
        var h;
        n[10] !== s.xstyle
          ? ((h = [c.textIcon, s.xstyle]), (n[10] = s.xstyle), (n[11] = h))
          : (h = n[11]);
        var y;
        return (
          n[12] !== s || n[13] !== h
            ? ((y = u.jsx(
                o("WAWebMsOfficeDocIcon.react").MsOfficeDocIcon,
                babelHelpers.extends({}, s, { xstyle: h }),
              )),
              (n[12] = s),
              (n[13] = h),
              (n[14] = y))
            : (y = n[14]),
          y
        );
      }
      if (f.includes(l)) {
        var C;
        n[15] !== s.xstyle
          ? ((C = [c.spreadsheetIcon, s.xstyle]),
            (n[15] = s.xstyle),
            (n[16] = C))
          : (C = n[16]);
        var b;
        return (
          n[17] !== s || n[18] !== C
            ? ((b = u.jsx(
                o("WAWebIcSpreadsheetIcon.react").IcSpreadsheetIcon,
                babelHelpers.extends({}, s, { xstyle: C }),
              )),
              (n[17] = s),
              (n[18] = C),
              (n[19] = b))
            : (b = n[19]),
          b
        );
      }
      var v = m[l];
      if (v) {
        var S = i != null ? i : v.fontSize,
          R;
        return (
          n[20] !== v.content ||
          n[21] !== v.iconXStyle ||
          n[22] !== s ||
          n[23] !== S
            ? ((R = u.jsx(
                r("DocumentIconWithContent"),
                babelHelpers.extends(
                  { iconXStyle: v.iconXStyle, fontSize: S, content: v.content },
                  s,
                ),
              )),
              (n[20] = v.content),
              (n[21] = v.iconXStyle),
              (n[22] = s),
              (n[23] = S),
              (n[24] = R))
            : (R = n[24]),
          R
        );
      }
      if (!a) {
        var L;
        n[25] !== s.xstyle
          ? ((L = [c.noExtensionIcon, s.xstyle]),
            (n[25] = s.xstyle),
            (n[26] = L))
          : (L = n[26]);
        var E;
        return (
          n[27] !== s || n[28] !== L
            ? ((E = u.jsx(
                o("WAWebMsOfficeDocIcon.react").MsOfficeDocIcon,
                babelHelpers.extends({}, s, { xstyle: L }),
              )),
              (n[27] = s),
              (n[28] = L),
              (n[29] = E))
            : (E = n[29]),
          E
        );
      }
      var k = i != null ? i : 7,
        I;
      return (
        n[30] !== a || n[31] !== s || n[32] !== k
          ? ((I = u.jsx(
              r("DocumentIconWithContent"),
              babelHelpers.extends(
                { iconXStyle: c.generalIcon, fontSize: k, content: a },
                s,
              ),
            )),
            (n[30] = a),
            (n[31] = s),
            (n[32] = k),
            (n[33] = I))
          : (I = n[33]),
        I
      );
    }
    l.default = g;
  },
  98,
);
