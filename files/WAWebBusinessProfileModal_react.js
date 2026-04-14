__d(
  "WAWebBusinessProfileModal.react",
  [
    "WAWebModal.react",
    "WAWebRichTextInput.react",
    "WAWebSavePopup.react",
    "WAWebUnstyledButton.react",
    "WDSIconIcSearch.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        iconSearch: {
          alignItems: "x6s0dn4",
          color: "xhslqc4",
          display: "x78zum5",
          height: "x1vqgdyp",
          justifyContent: "xl56j7k",
          width: "x1useyqa",
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.afterSave,
        n = e.children,
        a = e.description,
        i = e.doSave,
        l = e.isValid,
        c = e.onCancel,
        d = e.onSearchChange,
        m = e.searchLabel,
        p = e.title,
        _ = function (t) {
          var e,
            n = (e = t.text) != null ? e : "";
          d == null || d(n);
        };
      return s.jsxs(r("WAWebSavePopup.react"), {
        title: p,
        doSave: i,
        isValid: l != null ? l : !0,
        modalConfig: { type: o("WAWebModal.react").ModalTheme.BusinessProfile },
        onCancel: c,
        afterSave: t,
        tsNavigationData: { surface: "smb-business-profile-edit-categories" },
        children: [
          s.jsx("div", {
            className: "xvpt6g3 xb0esv5 xyo0t3i",
            children: s.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: a,
            }),
          }),
          s.jsxs("div", {
            className:
              "x6s0dn4 x4wrhlh xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x1ua1l7f xyxtwap x7vsco6 x12w63v0 x1nzty39",
            children: [
              s.jsx(r("WAWebUnstyledButton.react"), {
                xstyle: u.iconSearch,
                children: s.jsx(r("WDSIconIcSearch.react"), {}),
              }),
              s.jsx("div", {
                className: "x1iyjqo2 x16ovd2e x12xbjc7",
                children: s.jsx(r("WAWebRichTextInput.react"), {
                  editorName: "business-category-search",
                  lineWrap: !1,
                  placeholder: m,
                  onChange: _,
                }),
              }),
            ],
          }),
          n,
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
