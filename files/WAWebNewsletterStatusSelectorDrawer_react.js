__d(
  "WAWebNewsletterStatusSelectorDrawer.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebNewsletterStatusPostingUtils",
    "WAWebPrivacyVisibilityOption.react",
    "WAWebWidFactory",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onClose,
        n = e.onNewsletterSelected,
        a = e.selectedNewsletterWid,
        i = o(
          "WAWebNewsletterStatusPostingUtils",
        ).getStatusPostableNewsletters(),
        l = function (r) {
          (n(r), t());
        };
      return u.jsxs(r("WAWebDrawer.react"), {
        testid: void 0,
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: s._(/*BTDS*/ "Post to channel"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
            focusBackOrCancel: !0,
            onCancel: t,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsx(r("WAWebDrawerSection.react"), {
              theme: "padding-no-vertical",
              animation: !1,
              children: u.jsx("div", {
                role: "radiogroup",
                children: i.map(function (e) {
                  var t,
                    n,
                    i = o("WAWebWidFactory").asNewsletterWidOrThrow(e.id),
                    s =
                      (t =
                        (n = e.newsletterMetadata) == null ? void 0 : n.name) !=
                      null
                        ? t
                        : e.formattedTitle;
                  return u.jsx(
                    r("WAWebPrivacyVisibilityOption.react"),
                    {
                      text: s,
                      selected: i.equals(a),
                      testid: void 0,
                      onClick: function () {
                        return l(i);
                      },
                    },
                    i.toString(),
                  );
                }),
              }),
            }),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
