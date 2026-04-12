__d(
  "WAWebNewsletterSuspendedConversationPanelBody.react",
  [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebText_DONOTUSE.react",
    "WAWebWrapperSystemBubble.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = {
        linkColor: { color: "x1bvqhpb", textDecoration: "x1hl2dhg", $$css: !0 },
        marginBottom2: { marginBottom: "x13m54ha", $$css: !0 },
      };
    function _() {
      var e = m(null),
        t = e[0],
        a = e[1];
      if (
        (d(function () {
          function e() {
            return t.apply(this, arguments);
          }
          function t() {
            return (
              (t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = yield o(
                  "WAWebCommonNewsletterIntegrityStrings",
                ).getGeosuspendedInYourCountryString({ isPreview: !1 });
                a(e);
              })),
              t.apply(this, arguments)
            );
          }
          e();
        }, []),
        t != null)
      )
        return u.jsx(r("WAWebWrapperSystemBubble.react"), {
          theme: "center",
          children: u.jsxs(r("WAWebClickableLink.react"), {
            testid: void 0,
            onClick: g,
            xstyle: p.linkColor,
            children: [
              u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                ariaLabel: t,
                testid: void 0,
                children: t,
              }),
              u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                children: s._(/*BTDS*/ "Click to learn more"),
              }),
            ],
          }),
        });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.isAdminOrOwner,
        n = e.isGeosuspended;
      return n
        ? u.jsx(_, {})
        : u.jsxs(r("WAWebWrapperSystemBubble.react"), {
            theme: "center",
            children: [
              u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
                level: "2",
                size: "16",
                weight: "bold",
                xstyle: p.marginBottom2,
                testid: void 0,
                children: s._(/*BTDS*/ "This channel is no longer available"),
              }),
              u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                testid: void 0,
                children: t
                  ? s._(
                      /*BTDS*/ "Followers can't see channel history and new updates can't be shared.",
                    )
                  : s._(
                      /*BTDS*/ "You can't see channel history and new updates aren't available.",
                    ),
              }),
            ],
          });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getNewsletterGeosuspendFaqUrl(),
      );
    }
    l.default = f;
  },
  226,
);
