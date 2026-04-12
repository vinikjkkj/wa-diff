__d(
  "WAWebBizBroadcastsDocumentPreviewMetadata.react",
  ["WAWebBizBroadcastsCreationStrings", "WAWebL10nFilesize", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.documentData,
        n = t.fileExt,
        r = t.fileSize,
        a = t.mimetype,
        i = t.pageCount,
        l = n == null ? void 0 : n.toUpperCase(),
        u = r != null ? o("WAWebL10nFilesize").getL10nFilesize(r) : null,
        d = a === "application/pdf";
      return s.jsxs("div", {
        className:
          "x1bvqhpb x1ncwhqj x152skdk x1gxa6cn xa0aww2 xt1z7ec x1y04bub x1duis28",
        children: [
          d &&
            s.jsxs(s.Fragment, {
              children: [
                s.jsx("span", {
                  "data-testid": void 0,
                  className: "xlyipyv xuxw1ft xwcf1sq",
                  title: i.toString(),
                  children: o(
                    "WAWebBizBroadcastsCreationStrings",
                  ).getDocumentPreviewPagesCount(i),
                }),
                s.jsx(c, {}),
              ],
            }),
          s.jsx("span", {
            "data-testid": void 0,
            "data-meta-key": "type",
            className: "xlyipyv xuxw1ft xwcf1sq",
            title: l,
            children: l,
          }),
          s.jsx(c, {}),
          s.jsx("span", {
            "data-testid": void 0,
            className: "xlyipyv xuxw1ft xwcf1sq",
            title: u,
            children: u,
          }),
          s.jsx(c, {}),
        ],
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c() {
      return s.jsx("span", {
        className: "xlyipyv xuxw1ft xwcf1sq xdj266r x7g7pl8 xat24cr x1wbi8v6",
        children: "\u2022",
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
