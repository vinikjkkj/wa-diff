__d(
  "WAWebDocumentFileIcon",
  [
    "DocumentIconWithContent",
    "WAWebIcPresentationIcon.react",
    "WAWebIcSpreadsheetIcon.react",
    "WAWebMsOfficeDocIcon.react",
    "react",
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
      var n = t.ext,
        a = t.fontSize,
        i = t.mimeType,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e);
      if (p.includes(i))
        return u.jsx(
          o("WAWebIcPresentationIcon.react").IcPresentationIcon,
          babelHelpers.extends({}, l, {
            xstyle: [c.presentationIcon, l.xstyle],
          }),
        );
      if (_.includes(i))
        return u.jsx(
          o("WAWebMsOfficeDocIcon.react").MsOfficeDocIcon,
          babelHelpers.extends({}, l, { xstyle: [c.textIcon, l.xstyle] }),
        );
      if (f.includes(i))
        return u.jsx(
          o("WAWebIcSpreadsheetIcon.react").IcSpreadsheetIcon,
          babelHelpers.extends({}, l, {
            xstyle: [c.spreadsheetIcon, l.xstyle],
          }),
        );
      var s = m[i];
      return s
        ? u.jsx(
            r("DocumentIconWithContent"),
            babelHelpers.extends(
              {
                iconXStyle: s.iconXStyle,
                fontSize: a != null ? a : s.fontSize,
                content: s.content,
              },
              l,
            ),
          )
        : n
          ? u.jsx(
              r("DocumentIconWithContent"),
              babelHelpers.extends(
                {
                  iconXStyle: c.generalIcon,
                  fontSize: a != null ? a : 7,
                  content: n,
                },
                l,
              ),
            )
          : u.jsx(
              o("WAWebMsOfficeDocIcon.react").MsOfficeDocIcon,
              babelHelpers.extends({}, l, {
                xstyle: [c.noExtensionIcon, l.xstyle],
              }),
            );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
