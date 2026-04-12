__d(
  "WAWebBizBot3pInfoAboutSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerSection.react",
    "WAWebText.react",
    "react",
    "useWAWebModelValues",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.businessProfile;
      r("vulture")("OBkCofhl7A7hMcuCxUnYNxYg7uc=");
      var a =
          (t = o("useWAWebModelValues").useModelValues(n, ["description"])) !=
          null
            ? t
            : {},
        i = a.description;
      return i == null
        ? null
        : u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
            titleTestId: "section-about",
            title: s._(/*BTDS*/ "About"),
            children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
              as: "span",
              children: i,
            }),
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
