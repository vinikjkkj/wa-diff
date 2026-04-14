__d(
  "WAWebAttachMediaDrawerAttachMediaTypeFile.react",
  [
    "WAWebAttachMediaDrawerAttachMediaTypeStyles",
    "WAWebDocumentFileIcon",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebDocumentMediaType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        icon: {
          width: "x23j0i4",
          height: "x1gnnpzl",
          backgroundRepeat: "xiy17q3",
          backgroundSize: "x1tbiz1a",
          $$css: !0,
        },
      };
    function d(t) {
      var n = t.filename,
        a = t.mimeType,
        i = (e || (e = r("stylex")))(
          c.icon,
          o("WAWebUISpacing").uiMargin.bottom15,
        ),
        l = r("useWAWebDocumentMediaType")({ mimetype: a, filename: n }),
        s = l.ext,
        d = l.mime;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          e.props(r("WAWebAttachMediaDrawerAttachMediaTypeStyles").container),
          {
            "data-animate-attach-media": !0,
            children: u.jsx(
              "div",
              babelHelpers.extends(
                {},
                e.props(
                  r("WAWebAttachMediaDrawerAttachMediaTypeStyles")
                    .mediaContainer,
                ),
                {
                  children: u.jsxs("div", {
                    className: "x78zum5 x3psx0u xdt5ytf x6s0dn4 xamitd3",
                    children: [
                      u.jsx("div", {
                        className: i,
                        children: u.jsx(r("WAWebDocumentFileIcon"), {
                          width: 26,
                          mimeType: d != null ? d : "",
                          ext: s != null ? s : "",
                        }),
                      }),
                      u.jsx("div", { className: "x1iikomf", children: n }),
                    ],
                  }),
                },
              ),
            ),
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
