__d(
  "WAWebBizBot3pInfoAboutSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerSection.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = o("react-compiler-runtime").c(3),
        a = e.businessProfile;
      r("vulture")("OBkCofhl7A7hMcuCxUnYNxYg7uc=");
      var i =
          (t = o("useWAWebModelValues").useModelValues(a, ["description"])) !=
          null
            ? t
            : {},
        l = i.description;
      if (l == null) return null;
      var c;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "About")), (n[0] = c))
        : (c = n[0]);
      var d;
      return (
        n[1] !== l
          ? ((d = u.jsx(
              o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
              {
                titleTestId: "section-about",
                title: c,
                children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                  as: "span",
                  children: l,
                }),
              },
            )),
            (n[1] = l),
            (n[2] = d))
          : (d = n[2]),
        d
      );
    }
    l.default = c;
  },
  226,
);
